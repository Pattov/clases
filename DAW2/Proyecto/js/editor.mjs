
import {EditorView, basicSetup} from "codemirror"
import {EditorState} from "@codemirror/state";
import {javascript} from "@codemirror/lang-javascript"
import {htmlLanguage} from '@codemirror/lang-html';

let editorJs = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.getElementById("editor-js")
})

let updateListenerExtension = EditorView.updateListener.of((update) => {
  if (update.docChanged) {
    //almaceno entrada de datos
    let StringHtml = editorHtml.contentDOM.innerText;
    SerializeHtml(StringHtml);
    
    //texto = "let texto = \"Hello World\"";
    editorJs.contentDOM.innerText = texto;
  }
});

let editorHtml = new EditorView({
  extensions: [basicSetup, htmlLanguage, updateListenerExtension],
  parent: document.getElementById("editor-html")
})

function SerializeHtml(text) {
  const nodes = htmlString.split('>');
   console.log(nodes);

}



