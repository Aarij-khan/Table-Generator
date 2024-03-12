var render=document.getElementById("div");

function clicker(){    
    var input=document.getElementById("form");
    render.innerHTML ="";
    for(var i = 1 ; i < 11 ; i++){
        render.innerHTML +=`<h1>${input.value} * ${i} = ${i * input.value }</h1>`;
    }
    input.value="";

}
