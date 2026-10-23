import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage("public/pages/frontpage/index.html");
export const frontpagePage = constructPage(frontpage,{
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`
});

const about = readPage("public/pages/about/about.html");
export const aboutPage = constructPage(about, {
    tabTitle: "Planter | About"
});

const contact = readPage("public/pages/contact/contact.html");
export const contactPage = constructPage(contact, {
    tabTitle: "Planter | Contact"
});