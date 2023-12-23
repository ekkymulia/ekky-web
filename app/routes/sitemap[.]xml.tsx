//creating dynamic sitemap
export const getSlugs = async () => {
    const response = await fetch(
        `https://tgh6xlex.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%20%20%22slug%22%3A%20%22journal%2F%22%20%2B%20slug.current%0A%7D%0A%0A`
    )

    return response.json();
};

export const loader: LoaderFunction = async () => {
  const slugs = await getSlugs();

  return new Response(renderXML(slugs), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff",
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};  

const renderXML = (slugs) => {
console.log(slugs)
  const url = "https://www.kymulia.com";

  const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.kymulia.com/journal</loc>
    </url>
    <url>
        <loc>https://www.kymulia.com/contact</loc>
    </url>
    ${slugs.result.map((item) => `<url>
      <loc>${url}/${item.slug}</loc>
    </url>`)}
  </urlset>`;

  return sourceXML;
};