function hideShow(divname){
    var x = document.getElementById(divname);
    if(x.style.display=="none"){
        x.style.display = "block";
        x.style.paddingBottom = "5px";
    } else {
        x.style.display = "none"; 
    }
}
function registerEvent(divname){
    x = document.getElementById(divname);

    registeredinfo = localStorage.getItem(divname);
    if(registeredinfo != "registered"){ localStorage.setItem(divname, "registered");}
    else if (registeredinfo == "registered"){ localStorage.setItem(divname, "unregistered");}
    registeredinfo = localStorage.getItem(divname);

    x.innerHTML = registeredinfo;
}
function retrieveEventInfo(divname){
    x = document.getElementById(divname);
    registeredinfo = localStorage.getItem(divname);
    x.innerHTML = registeredinfo;
}
function initializeEvents(){
    retrieveEventInfo("lilpumpreg");
    retrieveEventInfo("selenagomezdev");
    retrieveEventInfo("rihannadev");
    retrieveEventInfo("travisdev");
    retrieveEventInfo("lilyachtydev");
    retrieveEventInfo("adeledev");
}