This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

PromptVision is an AI image-generation app built with Next.js, OpenAI's DALL·E image generation model, AWS S3, AWS CloudFront CDN, Prisma, Planetscale, NextAuth, SWR, TailwindCSS, and more.

Please follow the steps below to run PromptVision on your device. Due to the cost associated with DALL·E image generation and AWS utilization, the project has not yet been deployed for public use. 

## Clone the repository

Open your terminal and run the following command:

```bash
git clone https://github.com/erikbcode/promptvision.git
```

## Navigate to the Project Directory

Change into the project directory using the following command:

```bash
cd promptvision
```

## Install Dependencies

Ensure that you have [`bun`](https://bun.sh) installed.

```bash
bun install
```

## Environment Variables

To run PromptVision on your device, you must set the required Environment Variables listed below in a .env file.

- **OPENAI_API_KEY:** Register for an OpenAI account and create an API key [`here`](https://openai.com/blog/openai-api).
  
- **DATABASE_URL:** PromptVision is built using a MySQL database queried using Prisma. My database of choice is Planetscale, which offers free usage for personal projects. For more information on Prisma + Planetscale, visit https://www.prisma.io/docs/guides/database/planetscale.
  
- **NEXTAUTH_URL:** Specifies the base URL of your application. It is used by NextAuth.js to generate callback URLs for authentication.

- **NEXTAUTH_SECRET:** A secret key used for encrypting session cookies and tokens. It ensures the security of user authentication.

- **GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET:** These are your GitHub application credentials. They enable NextAuth.js to integrate with GitHub for user authentication.
  
- **AWS_REGION:** Specifies the AWS region where your S3 bucket and CloudFront distribution are hosted.

- **AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY:** These are your AWS credentials providing secure access to your S3 bucket.

- **AWS_BUCKET_NAME:** Represents the name of your S3 bucket where user-generated images are stored securely.

- **AWS_CLOUDFRONT_PREFIX:** This prefix is used in conjunction with CloudFront, forming the complete URL for efficient querying and delivery of images.

## Initialize Prisma Client

```bash
prisma generate
```

- ## Running the Application

To run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
