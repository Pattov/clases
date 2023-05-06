
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
    let nodos = convertElementsToObj(SerializeHtml(StringHtml));
    //let nodos = SerializeHtml(StringHtml);
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

function convertElementsToObj(elements) {
  let nuevosElementos = [];
  console.log(elements)
  for (const element of elements.children) {
    const elementNode = {};
    elementNode.NameElement = element.nodeName
    elementNode.textElement = element.firstChild.textContent.trim();
    
    for (const attr of element.attributes) {
      console.log(`Atributo ${attr.nodeName}: ${attr.nodeValue}`);
    }
    //mirar hijos
    console.log(element.children)
    nuevosElementos.push(elementNode)
  }
  return nuevosElementos

//   elements.forEach(elemento => {

//     if (elemento.hijos && elemento.hijos.length > 0) {
//       nuevoElemento.hijos = convertElementsToObj(elemento.hijos);
//     }

//     nuevosElementos.push(nuevoElemento);
//   });

//   return nuevosElementos;
}



// function convertirAHijosElemento(elemento) {
//   if (elemento.hijos) {
//     elemento.hijos = elemento.hijos.map((hijo) => convertirAHijosElemento(hijo));
//   }
//   return {
//     ElementNode: elemento.ElementNode,
//     TextElement: elemento.TextElement,
//     hijos: elemento.hijos || {},
//   };
// }
