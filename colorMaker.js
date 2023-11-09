let getColor = document.querySelector("input");
let Btn = document.querySelector("#Btn");
let clr = document.querySelector("#clr");

Btn.addEventListener("click" , function(){
    if(getColor.value != ""){
        clr.style.backgroundColor = getColor.value ;
        getColor.value = "" ;
    };
        
});

