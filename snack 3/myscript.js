Array=[3,5,2,1,0];


for(let i=0; i<Array.length; i++ ){
    
    
    if (Array[i]%2!=0){
        document.getElementById("numeri dispari").style.color = "red";
        document.getElementById("numeri dispari").innerHTML+='  '+Array[i];
    
        console.log(Array[i]);
        
    }else if(Array[i]%2==0) {
        document.getElementById("numeri pari").style.color = "green";
        document.getElementById("numeri pari").innerHTML+='  '+Array[i];
    
     

    }
}