let a;
let time;
let date;

setInterval(() => {
    a=new Date();

    time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();


    document.getElementById("time1").innerHTML=time;
}, 1000);


let btn= document.getElementById("btn");


btn.addEventListener("click",function(){
    var x = document.getElementById("in").value;
    var y= document.getElementById("imgchange");
    console.log(x);

        y.setAttribute("src","https://joeschmoe.io/api/v1/random/");

       var z=document.getElementById("name");
       z.innerHTML=x;

})
