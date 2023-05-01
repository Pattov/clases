
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
    //almaceno entrada de datos eb String
    let StringHtml = editorHtml.contentDOM.innerText;

    let texto = "let texto = \"Hello World\"";
    //los datos pasan de String a HMTL
    let nodos = convertirElementos(SerializeHtml(StringHtml));
    console.log(nodos);
    editorJs.contentDOM.innerText = texto;
  }
});


let editorHtml = new EditorView({
  extensions: [basicSetup, htmlLanguage, updateListenerExtension],
  parent: document.getElementById("editor-html")
})


/**
 * Esta funcion pasa un String a HTML
 * @param {} text Pasas un String
 * @returns devuelve un HTML FragmentDOM
 */
function SerializeHtml(text) {
  const range = document.createRange();
  const fragment = range.createContextualFragment(text);
  return fragment;
}

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

function convertirElementos(elementos) {
  const nuevosElementos = [];

  elementos.forEach(elemento => {
    const nuevoElemento = {
      ElementNode: elemento.tagName,
      TextElement: elemento.TextElement,
      hijos: []
    };

    if (elemento.hijos && elemento.hijos.length > 0) {
      nuevoElemento.hijos = convertirElementos(elemento.hijos);
    }

    nuevosElementos.push(nuevoElemento);
  });

  return nuevosElementos;
}