import openai from "@/openai";
import { NextResponse } from "next/server";
import { ImagesResponse } from "openai/resources/images.mjs";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response: ImagesResponse = await openai.images.generate({
    prompt,
    n: 1,
    size: "256x256",
  });

  const image_url = response["data"][0]["url"];
  console.log("image_url: ", image_url);
  return NextResponse.json(image_url);
}
