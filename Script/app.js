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
        Infolines[1].textContent="LinkedIn";
        Infolines[2].textContent="vboybay@my.centennialcollege.ca";
        Infolines[3].textContent="GitHub-Pages";
        Infolines[4].textContent="";


    }



})();