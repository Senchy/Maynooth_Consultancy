var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
Home = function()
{
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,7000,7000);
	context.fillStyle = "blue";
  	context.font = 'italic 40pt Times Roman';
	context.fillText("Home page", 0, 20);
};
Home();
document.getElementById("Home").onclick = function () 
{ 
	Home();
};