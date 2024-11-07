//el codigo
let tarjeta1=document.getElementById("tarjeta1")
let tarjeta2=document.getElementById("tarjeta2")
let tarjeta3=document.getElementById("tarjeta3")
let tarjeta4=document.getElementById("tarjeta4")
let pc1=document.getElementById("pc1")
let pc=document.getElementById("pc2")
let pc3=document.getElementById("pc3")
let pc4=document.getElementById("pc4")
let ram1=document.getElementById("ram1")
let ram2=document.getElementById("ram2")
let ram3=document.getElementById("ram3")
let ram4=document.getElementById("ram4")
let laptop1=document.getElementById("laptop1")
let laptop2=document.getElementById("laptop2")
let laptop3=document.getElementById("laptop3")
let laptop4=document.getElementById("laptop4")
let procesador1=document.getElementById("procesador1")
let procesador2=document.getElementById("procesador2")
let procesador3=document.getElementById("procesador3")
let procesador4=document.getElementById("procesador4")

function filtrarvideocard(){
    pc1.className="no"
    pc2.className="no"
    pc3.className="no"
    pc4.className="no"
    ram1.className="no"
    ram2.className="no"
    ram3.className="no"
    ram4.className="no"
    laptop4.className="no"
    laptop3.className="no"
    laptop2.className="no"
    laptop1.className="no"
    procesador1.className="no"
    procesador2.className="no"
    procesador3.className="no"
    procesador4.className="no"
    tarjeta1.className="item"
    tarjeta2.className="item"
    tarjeta3.className="item"
    tarjeta4.className="item"




}

function filtrarpc(){
    pc1.className="item"
    pc2.className="item"
    pc3.className="item"
    pc4.className="item"
    ram1.className="no"
    ram2.className="no"
    ram3.className="no"
    ram4.className="no"
    laptop4.className="no"
    laptop3.className="no"
    laptop2.className="no"
    laptop1.className="no"
    procesador1.className="no"
    procesador2.className="no"
    procesador3.className="no"
    procesador4.className="no"
    tarjeta1.className="no"
    tarjeta2.className="no"
    tarjeta3.className="no"
    tarjeta4.className="no"




}

function filtrarPlaca(){
    pc1.className="no"
    pc2.className="no"
    pc3.className="no"
    pc4.className="no"
    ram1.className="item"
    ram2.className="item"
    ram3.className="item"
    ram4.className="item"
    laptop4.className="no"
    laptop3.className="no"
    laptop2.className="no"
    laptop1.className="no"
    procesador1.className="no"
    procesador2.className="no"
    procesador3.className="no"
    procesador4.className="no"
    tarjeta1.className="no"
    tarjeta2.className="no"
    tarjeta3.className="no"
    tarjeta4.className="no"




}

function filtrarLaptop(){
    pc1.className="no"
    pc2.className="no"
    pc3.className="no"
    pc4.className="no"
    ram1.className="no"
    ram2.className="no"
    ram3.className="no"
    ram4.className="no"
    laptop4.className="item"
    laptop3.className="item"
    laptop2.className="item"
    laptop1.className="item"
    procesador1.className="no"
    procesador2.className="no"
    procesador3.className="no"
    procesador4.className="no"
    tarjeta1.className="no"
    tarjeta2.className="no"
    tarjeta3.className="no"
    tarjeta4.className="no"




}

function filtrarProcesador(){
    pc1.className="no"
    pc2.className="no"
    pc3.className="no"
    pc4.className="no"
    ram1.className="no"
    ram2.className="no"
    ram3.className="no"
    ram4.className="no"
    laptop4.className="no"
    laptop3.className="no"
    laptop2.className="no"
    laptop1.className="no"
    procesador1.className="item"
    procesador2.className="item"
    procesador3.className="item"
    procesador4.className="item"
    tarjeta1.className="no"
    tarjeta2.className="no"
    tarjeta3.className="no"
    tarjeta4.className="no"




}
function barra(){
    var barra=document.getElementById("searchInput").value
    if(barra=="laptop" , barra=="lapto" , barra=="lapt" , barra=="lap" , barra=="la" ,  barra=="l"  ){
        filtrarLaptop()
    }
}