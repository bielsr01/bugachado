import { sendMetaEvent } from "./meta-capi.functions";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

type EventName = "PageView" | "Lead" | "Contact" | "ViewContent";

export function trackMetaEvent(
  eventName: EventName,
  customData?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  const eventId = uuid();
  const eventSourceUrl = window.location.href;

  try {
    window.fbq?.("track", eventName, customData ?? {}, { eventID: eventId });
  } catch (err) {
    console.error("fbq track failed", err);
  }

  // Conversions API (server-side, deduplicated by eventId)
  sendMetaEvent({
    data: { eventName, eventId, eventSourceUrl, customData },
  }).catch((err) => console.error("CAPI send failed", err));
}
