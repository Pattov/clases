//cuando damos al boton del menu (tres lineas) 
$("#btn").on("click", function () {
    //damos el atributo active al elemento <nav class="sidebar">
    $(".sidebar").toggleClass("active");
})
