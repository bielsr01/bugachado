# Deploy

Este projeto usa TanStack Start + Nitro e suporta múltiplos alvos de deploy a partir do mesmo código. O preset do Nitro é escolhido pela variável de ambiente `NITRO_PRESET` no build.

| Alvo | NITRO_PRESET | Comando de build |
|------|--------------|------------------|
| Lovable (Cloudflare) | _(não definir)_ | `bun run build` |
| Vercel | `vercel` | `npm run build` |
| EasyPanel / Docker / VPS (Node) | `node-server` | `NITRO_PRESET=node-server bun run build` |

## Vercel

1. Importe o repositório no Vercel.
2. O arquivo `vercel.json` já define `buildCommand` (`npm run build`), `installCommand` (`npm install`) e `outputDirectory` (`.vercel/output`).
3. O `vite.config.ts` detecta automaticamente o ambiente da Vercel e ativa o preset `vercel` do Nitro.
4. Configure as variáveis de ambiente `VITE_*` no painel da Vercel se necessário.
5. Deploy. Nitro gera a saída no formato Vercel Build Output API automaticamente.

## EasyPanel (Docker)

O `Dockerfile` na raiz faz build com `NITRO_PRESET=node-server` e roda o servidor Node standalone gerado em `.output/server/index.mjs`.

No EasyPanel:
1. Crie um novo serviço **App** → fonte **GitHub** (ou Dockerfile).
2. Build Method: **Dockerfile** (raiz do projeto).
3. Porta exposta: `3000`.
4. Variáveis de ambiente: defina suas `VITE_*` no painel — elas precisam estar presentes durante o build (são inline-adas pelo Vite). No EasyPanel marque-as como "Build Args" também, ou use um `.env` no momento do build.
5. Deploy.

Para rodar localmente via Docker:

```bash
docker build -t bugachado .
docker run -p 3000:3000 bugachado
```

Acesse http://localhost:3000.
