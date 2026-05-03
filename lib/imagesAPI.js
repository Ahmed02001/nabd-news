export async function getImages(
  catName,
  imageType = "photo",
  page = 1,
  perPage = 50,
) {
  const res = await fetch(
    `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY_IMAGE}&q=${catName}&safesearch=true&page=${page}&image_type=${imageType}&per_page=${perPage}`,
    { cache: "force-cache" },
  );
  const data = await res.json();
  return data.hits;
}
