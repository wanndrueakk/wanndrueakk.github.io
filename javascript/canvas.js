var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

//ctx.fillStyle = 'rgba(0,0,0,0.5)';
//ctx.fillRect(0, 0, 300, 150);
//
//
//ctx.strokeRect(0, 0, 650, 150);
//
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);

ctx.closePath();
ctx.fill();
ctx.stroke();