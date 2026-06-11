import { mobileNav } from "./navigation.mjs";
import { getYear, lastMod } from "./date.mjs";

import { selectApp } from "./filter.mjs";
selectApp();

mobileNav();
getYear();
lastMod();