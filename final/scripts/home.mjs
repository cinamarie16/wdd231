import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";

import { getBookData } from './cards.mjs';

const booksUrl = 'data/books.json';

getBookData(booksUrl);

mobileNav();
getYear();
lastMod();