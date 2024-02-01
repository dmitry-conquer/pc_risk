"use strict";

import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
// import "./modules/sliders.js";
// import "./modules/imask.js";
import "./modules/tabs.js";
// import "./modules/header.js";
// // import "./modules/load-more.js";
// import "./modules/scroll.js";
// import "./modules/spoiler.js";
// import "./modules/custom-blanket-form.js";
// import "./modules/dropdown.js";
// import MicroModal from "micromodal";
import "./modules/header.js";

function app() {
  useDynamicAdapt("max");
}
document.addEventListener("DOMContentLoaded", app);
