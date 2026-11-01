import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const serverDir = resolve(root, "dist-server");
const indexPath = resolve(root, "dist/index.html");

const { render, site } = await import(pathToFileURL(resolve(serverDir, "entry-server.js")).href);

const url = site.url;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${url}#organization`,
      name: site.name,
      url,
      logo: `${url}${site.logo.slice(1)}`,
      image: `${url}${site.shareImage.slice(1)}`,
      description: site.description,
      slogan: site.hero.title,
      knowsAbout: site.seo.knowsAbout,
      serviceType: site.seo.serviceTypes,
      areaServed: "Worldwide",
    },
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      name: site.name,
      url,
      description: site.description,
      publisher: { "@id": `${url}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: site.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");
const appHtml = await render();
const html = readFileSync(indexPath, "utf8")
  .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
  .replace("</head>", `  <script type="application/ld+json">${json}</script>\n  </head>`);

if (!html.includes(appHtml)) throw new Error("Could not find #app in dist/index.html");

writeFileSync(indexPath, html);
rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${appHtml.length} characters into dist/index.html`);
