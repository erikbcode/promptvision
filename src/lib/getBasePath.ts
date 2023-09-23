export const getBasePath = () => {
  const base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  console.log("base_url: ", base_url);
  return base_url;
};
