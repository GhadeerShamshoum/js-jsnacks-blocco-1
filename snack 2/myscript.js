

N=[];
let numero = parseInt(prompt ('inserisci un numero'));

for(let b=0; b<numero; b++){
    
    for (let i = 0; i < 10; i++) {
        
        let number= Math.floor( Math.random() * 100)+1;
    
        N.push(number);
        
        
    }
    console.log(N);
    document.getElementById("numbers").innerHTML+=N+"<br>";
    N=[];
   
    
}




    
    




