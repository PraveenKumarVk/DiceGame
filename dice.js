function randomiser(){
    var k=6;
    var n1=Math.ceil(Math.random()*k);
    var n2=Math.ceil(Math.random()*k);
    var dic1="dice"+n1+".png";
    var dic2="dice"+n2+".png";
    var imgsrc1="images/"+dic1;
    var imgsrc2="images/"+dic2;
    document.getElementById("first").setAttribute("src",imgsrc1);
    document.getElementById("second").setAttribute("src",imgsrc2);
    if(n1==n2){
        document.getElementById("declaration").innerHTML="Draw!";
    }
    else if(n1>n2){
        document.getElementById("declaration").innerHTML="Player-1 Wins";
    }
    else{
        document.getElementById("declaration").innerHTML="Player-2 Wins";
    }
}