function love(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var love = Math.random()*100;
    document.getElementById("result").innerHTML = NAME1 +"and"+ NAME2 +"have a" + love.toFixed(2) + "% chance of love";
    var par = document.getElementById("result");
    if(res>=80){
        par.innerHTML="MARRIAGE IS FIXED";
    }else if(res>=60){
        par.innerHTML="GOOD PAIR";
    }else if(res>=40){
        par.innerHTML="50-50";
    }else if(res>=20){
        par.innerHTML="TRY AGAIN";
    }else{
        par.innerHTML="BETTER LUCK NEXT TIME..!!😁";
    }
}