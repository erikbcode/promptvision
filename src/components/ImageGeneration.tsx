"use client";
import { getBasePath } from "@/lib/getBasePath";
import { Button, Image, Input, Spinner } from "@nextui-org/react";
import { useState } from "react";

const PromptInput = () => {
  const [imageURL, setImageURL] = useState(
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ihOOGSH5AhLwXzsAkxkfhHpr/user-SkGpHO0qWUFBwDMqWUf1t8RW/img-tF0pwJ2tCWARIZNaUoN0U4sY.png?st=2023-09-23T20%3A19%3A06Z&se=2023-09-23T22%3A19%3A06Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-22T22%3A43%3A45Z&ske=2023-09-23T22%3A43%3A45Z&sks=b&skv=2021-08-06&sig=ngpSG13wSzb8U1owNQB03FE5evVsP5oAs8wKdRxgOkI%3D"
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneration = async () => {
    setIsLoading(true);
    const DALLEResult = await fetch(`${getBasePath()}/api/generateImage`, {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const DALLEData = await DALLEResult.json();
    console.log("DALLEResult: ", DALLEResult);
    console.log("DALLEData: ", DALLEData);
    setImageURL(DALLEData);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <Input
          type="text"
          label="Enter a prompt"
          onChange={(e) => setInput(e.target.value)}
          className="w-1/2"
        />
        <Button
          isLoading={isLoading}
          onClick={handleGeneration}
          className="background-zinc-800"
        >
          Generate
        </Button>
      </div>
      {isLoading ? (
        <>
          <h3 className="text-xl text-zinc-700">Generating your image...</h3>
          <Spinner size="lg" />
        </>
      ) : (
        <Image
          src={imageURL}
          alt="No image"
          width={400}
          className="rounded-large border-2 border-zinc-100 dark:border-zinc-700"
        />
      )}
    </>
  );
};

export default PromptInput;
