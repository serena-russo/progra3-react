let forms = document.querySelector("form"); //Capturamos el form
let buscar = document.querySelector("[name=Buscador]"); //Capture un campo usando el atributo name
// Agregamos evento
// Tipo de evento = submit
forms.addEventListener("submit",function(event) { // function= callback, event= parametro
    event.preventDefault(); // Detiene la informacion para poder evaluarla
    
    if (buscar.value == "") { //Valor ingresado en el campo
        alert("No escribio nada en el formulario, porfavor ingrese un texto");
    } else if (buscar.value.length <3){ 
        alert("Por favor, ingrese mas de dos letras en el formulario")
    }
    else {
        this.submit() // "Submit" para que busque la informacion
    }
})