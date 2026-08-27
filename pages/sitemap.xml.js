const SITE_URL = "https://erdemkarakas.dev";

function generateSiteMap() {
  const now = new Date().toISOString();
  const entries = [
    { loc: SITE_URL, priority: "1.0", changefreq: "weekly" },
    { loc: `${SITE_URL}/#work`, priority: "0.8", changefreq: "monthly" },
    { loc: `${SITE_URL}/#projects`, priority: "0.8", changefreq: "monthly" },
    { loc: `${SITE_URL}/#principles`, priority: "0.6", changefreq: "monthly" },
    { loc: `${SITE_URL}/#stack`, priority: "0.6", changefreq: "monthly" },
    { loc: `${SITE_URL}/#availability`, priority: "0.7", changefreq: "monthly" },
    { loc: `${SITE_URL}/#contact`, priority: "0.6", changefreq: "monthly" },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps does the work
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
