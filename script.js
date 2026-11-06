function Love() {
    var NAME1=document.getElementById("NAME1").value; 
    var NAME2=document.getElementById("NAME2").value;
    var res = Math.floor(Math.random()*100);
    var par = document.getElementById("par");
    par.innerHTML=
    "The love between "+NAME1+" "+NAME2+" "+res +"%";
}