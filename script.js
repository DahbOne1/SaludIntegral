const articulos = 
[{id: 1, title: "Articulo 1", img: "img/vela.jpg", contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."},
{id: 2, title: "Articulo 2", img: "img/camino.jpg", contenido: "Aliquam itaque sapiente dolores sint? Dolorem consectetur Liure minima corporis deserunt! consectetur adipisicing elit. Aliquam itaque sapiente dolores sint? Dolorem consectetur Liure minima corporis deserunt! consectetur adipisicing elit.Aliquam itaque sapiente dolores sint? Dolorem consectetur Liure minima corporis deserunt! consectetur adipisicing elit.Aliquam itaque sapiente dolores sint? Dolorem consectetur Liure minima corporis deserunt! consectetur adipisicing elit."},
{id: 3, title: "Articulo 3", img: "img/bambu.jpg", contenido: "Rerum fugit soluta impedit laudantium, molestias ex, nihil facilis fugiat natus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit soluta impedit laudantium, molestias ex, nihil facilis fugiat natus, Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum fugit soluta impedit laudantium, molestias ex, nihil facilis fugiat natus, Lorem ipsum dolor sit amet consectetur adipisicing elit.Rerum fugit soluta impedit laudantium, molestias ex, nihil facilis fugiat natus, Lorem ipsum dolor sit amet consectetur adipisicing elit."}]


function nombre() {     
    const nombre = document.getElementById("nombre").value;
    if (nombre != "")
        document.getElementById("mensaje").innerHTML = ("Hola "+ nombre + ", Gracias por suscribirte");
    else
        alert("Ingresa un nombre correcto por favor")    
}

function leer(i){
    let titleArt = document.getElementById("titleArt");
    let textArt = document.getElementById("textArt");
    let imgArt = document.getElementById("imgArt");

    switch(i){
        case 0:
                titleArt.innerHTML = articulos[0].title;
                textArt.innerHTML = articulos[0].contenido;
                imgArt.src = articulos[0].img;
            break;
        
        case 1:
                titleArt.innerHTML = articulos[1].title;
                textArt.innerHTML = articulos[1].contenido;
                imgArt.src = articulos[1].img;
            break;
            
        case 2:
                titleArt.innerHTML = articulos[2].title;
                textArt.innerHTML = articulos[2].contenido;
                imgArt.src = articulos[2].img;
            break;    
    }

    const modal = document.querySelector(".modal");
    modal.classList.add("show-modal");
}

function cerrar(){
    const modal = document.querySelector(".modal");
    modal.classList.remove("show-modal");
}