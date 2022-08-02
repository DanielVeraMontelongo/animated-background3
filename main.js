let ancho = screen.width;
let alto = screen.height + 110;
let content = ''
let container = document.querySelector('.container')

while(ancho > 0){
    content += '<div class="hexagon"></div>'
    ancho -= 100;
}

while(alto > 0){

    container.innerHTML += '<div class="row">'+ content +'</div>'
    alto -= 110;
}

let cursor = document.getElementById('cursor');
window.onmousemove = e =>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}





