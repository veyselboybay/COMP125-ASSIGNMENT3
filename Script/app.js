/*
    AUTOR: VEYSEL BOYBAY
    FILE: APP.JS
    WEBSITE: https://veyselboybay.github.io/COMP125-Assignment-2/
    DESCRIPTION: THIS FILE CONTAINS WEB PAGE JAVASCRIPT MODIFICATIONS


*/
(function()
{
    function Start()
    {
        
        leftSide();
        
        rightSide();
        
        

    }
    window.addEventListener("load",Start);

    function leftSide()
    {
        let info=document.getElementsByClassName("info");
        
        
        info[0].textContent="Veysel karani Boybay";
        info[1].textContent="Software Engineering Technology Student";
        info[2].textContent="Centennial College, since Jan 2020";
        
        
        

    }
    function rightSide()
    {
        let Info=document.getElementsByTagName("th");
        
        
        Info[0].textContent="Contact Info";
        Info[1].textContent="Links";
        
        

        let Infolines=document.getElementsByTagName("td");
        
        Infolines[0].textContent="(437)688****";
        Infolines[2].textContent="vboybay@my.centennialcollege.ca";
        
        let links=document.getElementsByClassName("links");
        
        links[0].textContent="linkedIn";
        links[1].textContent="GitHub Pages";
        
        let title=document.getElementById("contentTitle");
        
        title.textContent="A little bit about Veysel Boybay";
        
        let parags=document.getElementById("aboutme");

        parags.textContent="My name is Veysel Boybay. I am Centennial College 1st year student and  studying Software Engineering Technology."+
        "My short time goal is to succeed in my classes and learn as much as I can and find myself a co-op chance where I can improve myself more."+
        "If I talk about my long term goal, because of the technological edvancements AI and ML pull my attention a lot."+
        "I am feeling that working on these areas will exite me more. So, I will try to improve myself for these fields.";
        
        
    }
    
    


})();