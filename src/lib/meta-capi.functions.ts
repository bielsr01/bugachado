import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader, getRequestIP } from "@tanstack/react-start/server";

const PIXEL_ID = "2254293718647799";
const TEST_EVENT_CODE = "TEST35266";
const GRAPH_VERSION = "v21.0";

type CapiInput = {
  eventName: "PageView" | "Lead" | "Contact" | "ViewContent";
  eventId: string;
  eventSourceUrl?: string;
  customData?: Record<string, unknown>;
};

async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value.trim().toLowerCase());
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const sendMetaEvent = createServerFn({ method: "POST" })
  .inputValidator((input: CapiInput) => input)
  .handler(async ({ data }) => {
    const token = process.env.META_CAPI_TOKEN;
    if (!token) {
      console.error("META_CAPI_TOKEN not configured");
      return { ok: false, error: "missing_token" };
    }

    let clientIp: string | undefined;
    let userAgent: string | undefined;
    let fbp: string | undefined;
    let fbc: string | undefined;
    try {
      const req = getRequest();
      userAgent = getRequestHeader("user-agent") ?? undefined;
      clientIp = getRequestIP({ xForwardedFor: true }) ?? undefined;
      const cookieHeader = req.headers.get("cookie") ?? "";
      const cookies = Object.fromEntries(
        cookieHeader.split(";").map((c) => {
          const [k, ...v] = c.trim().split("=");
          return [k, v.join("=")];
        }),
      );
      fbp = cookies._fbp;
      fbc = cookies._fbc;
    } catch {
      // not in request context
    }

    const userData: Record<string, unknown> = {};
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const event = {
      event_name: data.eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: data.eventId,
      event_source_url: data.eventSourceUrl,
      action_source: "website",
      user_data: userData,
      custom_data: data.customData ?? {},
    };

    const body = {
      data: [event],
      test_event_code: TEST_EVENT_CODE,
    };

    try {
      const res = await fetch(
        `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const text = await res.text();
        console.error("Meta CAPI error:", res.status, text);
        return { ok: false, error: `http_${res.status}` };
      }
      return { ok: true };
    } catch (err) {
      console.error("Meta CAPI request failed:", err);
      return { ok: false, error: "network" };
    }
  });

// silence unused import warning when sha256Hex isn't called
export const _hashEmail = sha256Hex;
