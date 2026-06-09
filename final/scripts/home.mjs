import { mobileNav } from "./navigation.mjs";
import { getYear } from "./date.mjs";
import { lastMod } from "./date.mjs";

import { selectApp } from "./filter.mjs";
selectApp();

mobileNav();
getYear();
lastMod();