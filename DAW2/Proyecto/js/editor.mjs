
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

    let texto = "let texto = \"Hello World\"";
    SerializeHtml(StringHtml);
    editorJs.contentDOM.innerText = texto;
  }
});

let editorHtml = new EditorView({
  extensions: [basicSetup, htmlLanguage, updateListenerExtension],
  parent: document.getElementById("editor-html")
})

function SerializeHtml(text) {
  
  // //cada Elemento constara de 
  // let elemento = [
  //   {
  //     "ElementNode": "h1",
  //     "TextElement": "hola",
  //     "hijos":{
  //       "ElementNode": "h2",
  //       "TextElement": "hola",
  //       "hijos":{
        
  //       }
  //     }
  //   },
  //   {
  //     "ElementNode": "h3",
  //     "TextElement": "hola",
  //   }
  // ]
  
  const range = document.createRange();
  const fragment = range.createContextualFragment(range);
  console.log(fragment);
  //Quitar /n/t del String
  text = text.replace(/[\n\t]/g, "");

  const nodes = text.split('>');

  nodes.forEach(node => {
    console.log(node);
    
  });

}



