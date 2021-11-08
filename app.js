/*
Public API Repo
https://github.com/public-apis/public-apis
*/
/*
const Btn_Cat = document.getElementById("cat");

Btn_Cat.addEventListener("click", function (e){
    e.preventDefault();
    fetch("https://github.com/public-apis/public-apis")
        .then(res => res.json())
        .then(imagenes => {
            
        }) 

        `<img src = "https://aws.random.cat/meow" alt = "" width = "100" height = "100" />
        https:\/\/purr.objects-us-east-1.dream.io\/i\/1499715.jpg `
    
})*/

"use strict"
//construimos un boton cat
const btnCat = document.querySelector(".get-cat");
//label de cat, donde va a aparecer la imagen
const lblCat = document.querySelector(".cat");
//Crear los eventos, para cargar los datos del archivo
btnCat.addEventListener("click", function(e){
    e.preventDefault();
    fetch("https://aws.random.cat/meow")
       .then(respuesta => respuesta.json()) //aqui se recupera el json
       .then(resultado => {
        let IMGAT = `
        <img src = ${respuesta.file} />
        `;
        lblCat.innerHTML = IMGAT; 
        
        }) 
         
            

    
});