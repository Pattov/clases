
import {EditorView, basicSetup} from "codemirror"
import {EditorState} from "@codemirror/state";
import {javascript} from "@codemirror/lang-javascript"
import {htmlLanguage} from '@codemirror/lang-html';

let textJs;
let editorJs = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.getElementById("editor-js")
})

let updateListenerExtension = EditorView.updateListener.of((update) => {
  if (update.docChanged) {
    //almaceno entrada de datos eb String
    let StringHtml = editorHtml.contentDOM.innerText;
    
    let texto = "let texto = \"Hello World\"";
    let nodos = convertElementsToObj(SerializeHtml(StringHtml));

    editorJs.contentDOM.innerText = createJS(nodos);
  }
});


let editorHtml = new EditorView({
  extensions: [basicSetup, htmlLanguage, updateListenerExtension],
  parent: document.getElementById("editor-html")
})

function convertElementsToObj(elements) {
  let nuevosElementos = [];
  for (const element of elements.children) {
    console.log(element.childElementCount)
    let obj = createObj(element);
    //mirar hijos
    if(element.hasChildNodes() && element.childElementCount!=0){
      obj.children = [];
      const children = element.childNodes;
      console.log(children);
      for (const child of children) {
        if(child.nodeName!=="#text"){
          console.log(child.childElementCount)
          let objChild = createObj(child);
          obj.children.push(objChild);
        }
      }
    }
    nuevosElementos.push(obj)
  }
  return nuevosElementos
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

function createObj(element) {
  console.log(element)
    const elementNode = Object.create(null);
    elementNode.nameElement = element.nodeName;
    elementNode.textElement = element.firstChild.textContent !== null ? element.firstChild.textContent.trim() : " ";
  
  
    for (const attr of element.attributes) {
      elementNode[attr.nodeName] = attr.nodeValue;
    }
    return elementNode;
  }

function createJS(objectElements) {
  console.log(objectElements)
  objectElements.forEach(objChild => {
    console.log(objChild);
    textJs =`const C${objChild.nameElement} = document.createElement('${objChild.nameElement.toLowerCase()}');\n`

    if(objChild['class']!=undefined){
      textJs += `C${objChild.nameElement}.classList.add('${objChild.class}');\n`;
    }
    if(objChild['textElement']!=""&& objChild['textElement']!=undefined){
      textJs += `C${objChild.nameElement}.textContent('${objChild.textElement}');\n`;
    }
    if(objChild['visibility']!=""&& objChild['visibility']!=undefined){
      textJs += `C${objChild.nameElement}.style.visibility = "visible";\n`;
    }

    textJs += `PADRE.appendChild(C${objChild.nameElement})`
  });
  return textJs;
}
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


var select = document.getElementById("ejemplos");
select.addEventListener("change", function() {
  var selectedOption = select.value; // Obtener el valor de la opción seleccionada

  // Actualizar el contenido del editor con el texto correspondiente a la opción seleccionada
  if (selectedOption === "sencillo") {
    editorHtml.contentDOM.innerText = "<p>hola</p>";
  } else if (selectedOption === "select") {
    editorHtml.contentDOM.innerText = "<select class=\"form-select form-select-lg mb-3\" aria-label=\".form-select-lg example\">\n\t<option selected>Open this select menu</option>\n\t<option value=\"1\">One</option>\n\t<option value=\"2\">Two</option>\n\t<option value=\"3\">Three</option>\n</select>";
  } 
});