This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

PromptVision is an AI image-generation app built with Next.js, OpenAI's DALL·E image generation model, AWS S3, AWS CloudFront CDN, Prisma, Planetscale, NextAuth, SWR, TailwindCSS, and more.

Please follow the steps below to run PromptVision on your device. Due to the cost associated with DALL·E image generation and AWS utilization, the project has not yet been deployed for public use. 

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
- DATABASE_URL: PromptVision is built using a MySQL database queried using Prisma. My database of choice is Planetscale, which offers free usage for personal projects. For more information on Prisma + Planetscale, visit https://www.prisma.io/docs/guides/database/planetscale.
- NEXTAUTH_URL, NEXTAUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET: PromptVision uses NextAuth for user authentication. These four environment variables must be set up to run PromptVision locally. For more information on NextAuth and setting up GitHub as a provider, visit https://next-auth.js.org/getting-started/example.
- **AWS_REGION:** Specifies the AWS region where your S3 bucket and CloudFront distribution are hosted.

- **AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY:** These are your AWS credentials providing secure access to your S3 bucket.

- **AWS_BUCKET_NAME:** Represents the name of your S3 bucket where user-generated images are stored securely.

- **AWS_CLOUDFRONT_PREFIX:** This essential prefix is used in conjunction with CloudFront, forming the complete URL for efficient querying and delivery of images.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
