import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/index.html",
);
const about = readPage("public/pages/about/about.html");

export const frontpagePage = constructPage(frontpage,{
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});
export const aboutPage = constructPage(about, {
    tabTitle: "Planter | About"
});