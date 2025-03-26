import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/tecnologias", changefreq: "weekly", priority: 0.8 },
  { url: "/proyectos", changefreq: "weekly", priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: "https://tusitio.netlify.app" });

streamToPromise(sitemap).then((data) => {
  createWriteStream(path.join(__dirname, "public", "sitemap.xml")).write(data);
});

links.forEach((link) => sitemap.write(link));
sitemap.end();

console.log("✅ Sitemap generado en /public/sitemap.xml");
