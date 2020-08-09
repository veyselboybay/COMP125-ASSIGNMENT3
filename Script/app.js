/*
    AUTOR: VEYSEL BOYBAY
    FILE: APP.JS
    WEBSITE: https://veyselboybay.github.io/COMP125-Assignment-3/
    DESCRIPTION: THIS FILE CONTAINS WEB PAGE JAVASCRIPT MODIFICATIONS


*/
import {Data} from "./data.js"
(function()
{
    function Start()
    {
        InitializePage();
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
    function homeData()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Data/parags.json");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let data=JSON.parse(xhr.responseText);
                infoData=data.Info;
                dataArray=[];
                for(const record of infoData)
                {
                    let data=new Data();
                    data.setData(record);
                    dataArray.push(data);
                }
                console.log(dataArray);

            }
        });
    }
    function homeContent()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Views/Content/home.html");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let main=document.getElementsByTagName("main")[0];
                let mainData=xhr.responseText;
                main.innerHTML=mainData;
                homeData();
            }
        });
    }
    function contactContent()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Views/Content/contact.html");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let main=document.getElementsByTagName("main")[0];
                let mainData=xhr.responseText;
                main.innerHTML=mainData;
            }
        });
    }
    function projectsContent()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Views/Content/projects.html");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let main=document.getElementsByTagName("main")[0];
                let mainData=xhr.responseText;
                main.innerHTML=mainData;
            }
        });
    }
    function InitializePage()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Views/partials/header.html");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let header=document.getElementsByTagName("header")[0];
                let headerData=xhr.responseText;
                header.innerHTML=headerData;

                PageContent("home");

                let navLinks=document.getElementsByTagName("a");
                for(const link of navLinks)
                {
                   link.addEventListener("click",(event)=>
                   {
                        event.preventDefault();
                        let id=link.getAttribute("id");
                        console.log(id);
                        PageContent(id);
                   });
                }
            }
        });
    }
    function PageContent(id)
    {
        document.title=id;
        window.history.pushState("",id,"/"+id.toLowerCase());

        //highlightactivelink

        switch(id)
        {
            case "home":
                homeContent();
                break;
            case "contact":
                contactContent();
                break;
            case "projects":
                projectsContent();
                break;
        }
        loadFooter();

    }
    function loadFooter()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Views/partials/footer.html");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let footer=document.getElementsByTagName("footer")[0];
                let footerData=xhr.responseText;
                footer.innerHTML=footerData;
            }
        });
    }
})();