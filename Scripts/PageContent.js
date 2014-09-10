
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
    document.getElementById("PageContent").innerHTML += '<p style = "margin : 20px">Bla bla sumthing sumthing else whatever the fuck. '
    +'u will write what the company has been up to sum bullshit or now can andd reall hit later just showing u the filler here and testing how long '
    +'this page has to be whatever the fuck u can say u moved into your new premisis or sumting liek that and that you just hired'
    +' a top legal team so they should join with you right away also the slide show might have pickures or u and ur new build'
    +'ing ur big desk and what not u with your new car looking all successfull mabe sum grunts working on computers while u look over'
    +' them pointing to the srceen with like an streen expression as if ur thinking and helping them out u no the regular bullshit pictures</p>';
};
About = function()
{   
    document.getElementById("PageContent").innerHTML = '<div id = "IvanContent" name = "IvanContent"  style = "min-height: 300px; margin:10px; margin-top:0px;">';
    document.getElementById("PageContent").innerHTML += '<div id = "DudeContent" name = "DudeContent"  style = "min-height: 300px; margin:10px; margin-top:0px;">';
    document.getElementById("PageContent").innerHTML += '<div id = "PaddyContent" name = "PaddyContent"  style = "min-height: 300px; margin:10px; margin-top:0px;">';
    document.getElementById("PageContent").innerHTML += '<div id = "KatharineContent" name = "KatharineContent"  style = "min-height: 300px; margin:10px; margin-top:0px;">';

    document.getElementById("IvanContent").innerHTML = '<h1 style = "text-align: center">Ivan</h1>';
    document.getElementById("IvanContent").innerHTML += '<img src="Images/Picture2.jpg" width="100" height="200" name="ivanpicture" style = "float: left" />';
    document.getElementById("IvanContent").innerHTML += '<p style = "margin : 20px; text-align: center">Bla im ivan bla bla bachelers in thing</p>';

    document.getElementById("DudeContent").innerHTML = '<h1 style = "text-align: center">Computer Guy</h1>';
    document.getElementById("DudeContent").innerHTML += '<img src="Images/Picture1.jpg" width="100" height="200" name="Dudepicture" style = "float: left" />';
    document.getElementById("DudeContent").innerHTML += '<p style = "margin : 20px; text-align: center">Bla im computer guy bla bla bachelers in thing worked at '
    +'place i no my shit yada whatever cuntshit. know all sorts of shit has team working under him can make fucking computers do crazy shit </p>';

    document.getElementById("PaddyContent").innerHTML = '<h1 style = "text-align: center">Paddy</h1>';
    document.getElementById("PaddyContent").innerHTML += '<img src="Images/Picture3.jpg" width="100" height="200" name="Paddypicture" style = "float: left" />';
    document.getElementById("PaddyContent").innerHTML += '<p style = "margin : 20px; text-align: center">bal bla bla law this law that law law this no my shit love you long time get deal</p>';


    document.getElementById("KatharineContent").innerHTML = '<h1 style = "text-align: center">Katharine</h1>';
    document.getElementById("KatharineContent").innerHTML += '<img src="Images/Picture4.jpg" width="100" height="200" name="Dudepicture" style = "float: left" />';
    document.getElementById("KatharineContent").innerHTML += '<p style = "margin : 20px; text-align: center">bla awsum designs bla bla look all her cool shit so talented you get the picture</p>';
};
Product = function()
{          
    document.getElementById("PageBottom").top = "1000px";
    document.getElementById("PageContent").innerHTML = '<div id = "MarketResearchContent" name = "MarketResearchContent"  style = "width:448px; border: 1px solid gray;background: #000000; min-height: 300px; margin:0px; float: left">';
    document.getElementById("PageContent").innerHTML += '<div id = "Software-WebDevContent" name = "Software-WebDevContent"  style = "width:448px; border: 1px solid gray;background: #000000; min-height: 300px; margin:0px; float: left">';
    document.getElementById("PageContent").innerHTML += '<div id = "ConsultanceManagementContent" name = "ConsultanceManagementContent"  style = "width:448px; border: 1px solid gray;background: #000000; min-height: 300px; margin:0px; float: left">';
    document.getElementById("PageContent").innerHTML += '<div id = "AdvertContent" name = "AdvertContent"  style = "width:448px; border: 1px solid gray;background: #000000; min-height: 300px; margin:0px; float: right">';
    document.getElementById("PageContent").innerHTML += '<div id = "SalesContent" name = "SalesContent"  style = "width:448px; border: 1px solid gray; background: #000000; min-height: 300px; margin:0px; float: right">';
    document.getElementById("PageContent").innerHTML += '<div id = "GraphicDesignContent" name = "GraphicDesignContent"  style = "width:448px; border: 1px solid gray;background: #000000; min-height: 300px; margin:0px; float: right">';

    document.getElementById("MarketResearchContent").innerHTML = '<h1 style = "text-align: center; color: red;">MarketResearch</h1>';

    document.getElementById("Software-WebDevContent").innerHTML = '<h1 style = "text-align: center; color: red;">Software-WebDev</h1>';

    document.getElementById("ConsultanceManagementContent").innerHTML = '<h1 style = "text-align: center; color: red;">ConsultanceManagement</h1>';

    document.getElementById("AdvertContent").innerHTML = '<h1 style = "text-align: center; color: red;">Advert</h1>';

    document.getElementById("SalesContent").innerHTML = '<h1 style = "text-align: center; color: red;">Sales</h1>';

    document.getElementById("GraphicDesignContent").innerHTML = '<h1 style = "text-align: center; color: red;">GraphicDesign</h1>';
};
Contact = function()
{          
    document.getElementById("PageContent").innerHTML = '<h1 style = "text-align: center">What we have been up TO</h1>';
    document.getElementById("PageContent").innerHTML += '<p style = "margin : 20px">Bla bla sumthing sumthing else whatever the fuck. u will write what the company has been up to sum bullshit or now can andd reall hit later just showing u the filler here and testing how long this page has to be whatever the fuck u can say u moved into your new premisis or sumting liek that and that you just hired a top legal team so they should join with you right away also the slide show might have pickures or u and ur new building ur big desk and what not u with your new car looking all successfull mabe sum grunts working on computers while u look over them pointing to the srceen with like an streen expression as if ur thinking and helping them out u no the regular bullshit pictures</p>';
};
Home();
loop();
document.getElementById("Home").onclick = function () 
{ 
	Home();
};

document.getElementById("About").onclick = function () 
{ 
    About();
};

document.getElementById("Product").onclick = function () 
{ 
    Product();
};

document.getElementById("Contact").onclick = function () 
{ 
    Contact();
};