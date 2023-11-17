const fetchImages = async () => {
  const res = await fetch('/api/getImages');

  if (!res.ok) {
    console.log('result not ok');
    const error = new Error('An error occured while fetching the images.');
    throw error;
  }

  return res.json();
};

export default fetchImages;
