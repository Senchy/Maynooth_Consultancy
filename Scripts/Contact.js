var c = document.getElementById("myCanvas");
var context = c.getContext("2d");
Contact = function()
{
	context.fillStyle = "#FFFFFF";
	context.fillRect(0,0,7000,7000);
	context.fillStyle = "black";
  	context.font = 'italic 40pt Times Roman';
	context.fillText("Contacts us at the approved place or whatever\nbla bla bla bla bla bla vla bpa b", 0, 20);

};

document.getElementById("Contact").onclick = function () 
{ 
	Contact();
};