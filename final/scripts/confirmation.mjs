import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";




mobileNav()
getYear()
lastMod()

const myInfo = new URLSearchParams(window.location.search);
document.querySelector('#results').innerHTML = `
<p>Thanks for your message, ${myInfo.get('fname')} ${myInfo.get('lname')}!</p>
<p>Your email: ${myInfo.get('email')}</p>
<p>Your message: ${myInfo.get('comments')}</p>
<p>Your newsletter subscription choice: ${myInfo.get('newsletter')}</p>
`

// const signupsDisplay = document.querySelector(".sign-ups");

// let numSignups = Number(window.localStorage.getItem("numSignups-ls")) || 0;

// signupsDisplay.textContent = numSignups;

// numSignups++;

// localStorage.setItem("numSignups-ls", numSignups);
