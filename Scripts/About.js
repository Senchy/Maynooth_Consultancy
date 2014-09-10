var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
About = function()
{
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,7000,7000);
	context.fillStyle = "blue";
  	context.font = 'italic 20pt Times Roman';
	context.fillText("About", 0, 20);
};
document.getElementById("About").onclick = function () 
{ 
	About();
};