
var image1 = new Image();
image1.src = "Images/SlideShow1.jpg";
var image2 = new Image();
image2.src = "Images/SlideShow2.jpg";
var image3 = new Image();
image3.src = "Images/SlideShow3.jpg";
var image4 = new Image();
image4.src = "Images/SlideShow4.jpg";
var image5 = new Image();
image5.src = "Images/SlideShow5.jpg";
var step=1;
var step=1;
function slideit(move)
{
    if(step == 1 && move < 0)
    {
        step = 5;
    }
    if(step == 5 && move > 0)
    {
        step = 1;
    }
    else
    {
        step += move;
    }
    console.log(step);
    document.images.slide.src = eval("image"+step+".src");
}
function loop()
{
    slideit(1);
    setTimeout("loop()",3000);
}
Home = function()
{          
    document.getElementById("PageContent").innerHTML = '<input id = "leftbutton" type = "button" name = "leftbutton" onclick="slideit(-1);" class = "Slidebuttons" style = "left:50px"  ></input>';
    document.getElementById("PageContent").innerHTML += '<input id = "rightbutton" type = "button" name = "rightbutton" onclick="slideit(1);" class = "Slidebuttons" style = "left:800px" ></input>';
	document.getElementById("PageContent").innerHTML += '<img src="Images/SlideShow1.jpg" width="900" height="400" name="slide" />';
    document.getElementById("PageContent").innerHTML += '<h1 style = "text-align: center">What we have been up TO</h1>';
    document.getElementById("PageContent").innerHTML += '<p style = "margin : 20px">Bla bla sumthing sumthing else whatever the fuck. u will write what the company has been up to sum bullshit or now can andd reall hit later just showing u the filler here and testing how long this page has to be whatever the fuck u can say u moved into your new premisis or sumting liek that and that you just hired a top legal team so they should join with you right away also the slide show might have pickures or u and ur new building ur big desk and what not u with your new car looking all successfull mabe sum grunts working on computers while u look over them pointing to the srceen with like an streen expression as if ur thinking and helping them out u no the regular bullshit pictures</p>';
};
Home();
loop();
document.getElementById("Home").onclick = function () 
{ 
	Home();
};