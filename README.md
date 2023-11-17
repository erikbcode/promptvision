This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

PromptVision is an AI image-generation app built with OpenAI's DALL·E

Please follow the steps below to run PromptVision on your device. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run PromptVision on your device, you must set the required Environment Variables listed below in your .env file.

- OPENAI_API_KEY: Register for an OpenAI account and create an API key [`here`](https://openai.com/blog/openai-api).
- DATABASE_URL: PromptVision is built using a MySQL database queried using Prisma. My database of choice is Planetscale, which is free to use for personal projects. For more information on Prisma + Planetscale, visit https://www.prisma.io/docs/guides/database/planetscale.  



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
