function lightToggle() {
    lswitch = document.getElementById("lightSwitcher");

    if(lswitch.src.match("wallbutton_on"))
    {
        lswitch.src="../image/svg/wallbutton_off.svg";
        document.body.style.backgroundColor="rgb(50,50,50)";
        document.body.style.color="white";
    }
    else
    {
        lswitch.src="../image/svg/wallbutton_on.svg";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
}