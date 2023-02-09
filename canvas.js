let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circle = {

    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
    antiHor : true,

}

function drawCircle(c){

    ctx.beginPath();
    ctx.rect(0,0,500,500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";


    ctx.arc(c.x ,c.y ,c.raio ,c.inicio ,c.fim, /*c.antiHor*/);
    ctx.stroke();
    ctx.fill();

}

setInterval(function(){

    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);


}, 80)


/*ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10,10);
ctx.lineTo(400,300);
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green"
ctx.moveTo(50,10);
ctx.lineTo(300,300);
ctx.lineTo(200,300);
ctx.closePath();
ctx.stroke();
ctx.fill();



//ctx.rect(10,10,100,200);

//ctx.fillStyle = "blue";
//ctx.fillRect(10,10,100,200);
//ctx.lineWidth = 5;

//ctx.strokeStyle = "red";
//ctx.strokeRect(10,10,100,200)

//ctx.fill();
//ctx.stroke();

//ctx.clearRect(20,20,30,30);*/



