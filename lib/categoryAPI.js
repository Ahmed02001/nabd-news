async function getNews(query) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=10&language=ar&sortBy=publishedAt&pageSize=4&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    { next: { revalidate: 60 } },
  );

  const data = await res.json();
  return data.articles || [];
}

export default getNews;
