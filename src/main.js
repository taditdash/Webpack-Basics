import './main.css'
import './elements.css'

import { paraHelloWebpack } from "./elements.js";

document.getElementById('clickForTextUpdate').addEventListener('click', changeParagraphText);

function changeParagraphText() {
  paraHelloWebpack.textContent = "Yes, let's explore.";
}