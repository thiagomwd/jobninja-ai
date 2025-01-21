This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Before run the app ensure you add the Google Gemini API key

```bash
GOOGLE_GENERATIVE_AI_API_KEY="{Your Key}"
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Running docker

```bash
docker compose build

#dev
docker compose up dev

#prod
docker compose up prod
```