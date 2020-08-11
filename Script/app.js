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
        
    }
    window.addEventListener("load",Start);

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
                let infoData=data.info;
                let dataArray=[];
                for(const record of infoData)
                {
                    let data=new Data();
                    data.setData(record);
                    dataArray.push(data);
                }
                

                let pageData=document.getElementsByClassName("info");
                pageData[0].innerHTML=dataArray[0].info1;
                pageData[1].innerHTML=dataArray[0].info2;
                pageData[2].innerHTML=dataArray[0].info3;
                pageData[3].innerHTML=dataArray[0].info4;
                pageData[4].innerHTML=dataArray[0].info5;
                pageData[5].innerHTML=dataArray[0].info6;
            }
        });
    }
    function projectData()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","./Data/parags.json");
        xhr.send();
        xhr.addEventListener("readystatechange",function()
        {
            if((xhr.readyState===4)&&(xhr.status===200))
            {
                let data=JSON.parse(xhr.responseText);
                let infoData=data.projects;
                let dataarray=[];
                for(const record of infoData)
                {
                    let data=new Data();
                    data.setProject(record);
                    dataarray.push(data);
                }

                let tableBody=document.getElementById("projectsTable");
                for(const data of dataarray)
                {
                    let row=document.createElement("ol");
                    row.innerHTML=
                    `
                    <li>${data.project1}</li>
                    <li>${data.project2}</li>
                    <li>${data.project3}</li>
                    <li>${data.project4}</li>
                    `;
                    tableBody.appendChild(row);
                }
                
            }
        });
    }
    function homeContent()
    {
        let xhr=new XMLHttpRequest();
        xhr.open("GET","/Views/Content/home.html");
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
                validateForm();
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
                projectData();
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
        xhr.open("GET","/Views/partials/footer.html");
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
    function validateForm()
    {
        let contact=new Data();
        let contactForm=document.forms[0];

        contactForm.noValidate=true;
        let errorMessage=document.getElementById("errorMessage");

        let firstname=document.getElementById("fname");
        firstname.addEventListener("blur",()=>
        {
            if(firstname.value.length<=2)
            {
                firstname.focus();
                errorMessage.hidden=false;
                errorMessage.textContent=`Please enter longer first name.`;
            }
            else
            {
                contact.firstname=firstname.value;
                errorMessage.hidden=true;
            }
        });
        let lastname=document.getElementById("lname");
        lastname.addEventListener("blur",()=>
        {
            if(lastname.value.length<=2)
            {
                lastname.focus();
                errorMessage.hidden=false;
                errorMessage.textContent=`Please enter longer last name.`;
            }
            else
            {
                contact.lastname=lastname.value;
                errorMessage.hidden=true;
            }
        });

        let contactNumber=document.getElementById("contactNumber");
        contactNumber.addEventListener("blur",()=>
        {
            if(contactNumber.value.length<=2)
            {
                contactNumber.focus();
                errorMessage.hidden=false;
                errorMessage.textContent=`Please enter longer contact number.`;
            }
            else
            {
                contact.contactNumber=contactNumber.value;
                errorMessage.hidden=true;
            }
        });


    }
})();