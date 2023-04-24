import {EditorView, basicSetup} from "codemirror"
import { EditorState } from "@codemirror/state";
import {javascript} from "@codemirror/lang-javascript"
import {htmlLanguage} from '@codemirror/lang-html';

let editorHtml = new EditorView({
  doc: "<div class=\"card\">\n\t<div class=\"nombreproducto ing-content\">\n\t\t<img class=\"foto\" src=\"././img/pexels-nombreproducto.jpg\">\n\t\t<h4 class=\"card-title\">nombreproducto</h4>\n\t\t<input type=\"number\" id=\"precio\" placeholder=\"PRECIO\">\n\t\t<button class=\"btn\" id=\"btnAcumPan\" marcador=\"1\">+</button>\n\t</div>\n</div>",
  extensions: [basicSetup, htmlLanguage],
  parent: document.getElementById("editor-html")
})
let editorJs = new EditorView({
  doc: "",
  extensions: [basicSetup, javascript()],
  parent: document.getElementById("editor-js")
})