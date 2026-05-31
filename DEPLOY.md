# Deploy

Este projeto usa TanStack Start + Nitro e suporta varios alvos de deploy a partir do mesmo codigo. O preset do Nitro e escolhido pela variavel de ambiente `NITRO_PRESET` no build.

| Alvo | NITRO_PRESET | Comando de build |
|------|--------------|------------------|
| Lovable (Cloudflare) | _(nao definir)_ | `bun run build` |
| Vercel | `vercel` | `npm run build` |
| EasyPanel / Docker / VPS (Node) | `node-server` | `NITRO_PRESET=node-server bun run build` |

## Vercel

1. Importe o repositorio no Vercel.
2. Em **Framework Preset**, escolha **Other**.
3. Em **Build Command**, use `npm run build`.
4. Em **Install Command**, use `npm install`.
5. Deixe **Output Directory** em branco.
6. Deixe **Root Directory** em `.` se o projeto estiver na raiz do repositorio.
7. Configure as variaveis de ambiente `VITE_*` no painel da Vercel, se necessario.
8. Confira se o painel nao esta sobrescrevendo o `vercel.json` do projeto.
9. Deploy. O `vite.config.ts` detecta automaticamente o ambiente da Vercel e ativa o preset `vercel` do Nitro, que gera a saida no formato Vercel Build Output API.

### Opcoes no painel

- **Framework Preset**: `Other`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: vazio
- **Root Directory**: `.`

## EasyPanel (Docker)

O `Dockerfile` na raiz faz build com `NITRO_PRESET=node-server` e roda o servidor Node standalone gerado em `.output/server/index.mjs`.

No EasyPanel:
1. Crie um novo servico **App** -> fonte **GitHub** (ou Dockerfile).
2. Build Method: **Dockerfile** (raiz do projeto).
3. Porta exposta: `3000`.
4. Variaveis de ambiente: defina suas `VITE_*` no painel - elas precisam estar presentes durante o build (sao inline-adas pelo Vite). No EasyPanel marque-as como "Build Args" tambem, ou use um `.env` no momento do build.
5. Deploy.

Para rodar localmente via Docker:

```bash
docker build -t bugachado .
docker run -p 3000:3000 bugachado
```

Acesse http://localhost:3000.
