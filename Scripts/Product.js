var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
Product = function()
{
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,7000,7000);
	context.fillStyle = "blue";
  	context.font = 'italic 40pt Times Roman';
	context.fillText("products", 10, 20);
};
document.getElementById("Product").onclick = function () 
{ 
	Product();
};