// import agregaProducto from "./eventos";

    // Comprobamos si el navegador soporta WebStorage 
    if(typeof(Storage)!=="undefined"){
        //El navegador soporta WebStorage 

        //Declaración de eventos
        document.getElementById("agregaproducto").onclick = agregaProducto;
    }else{
        alert("El Programa va a presentar problemas. Usa otro Navegador");
    }
  
