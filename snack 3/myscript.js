Array=[];
for(let i=0; i<6; i++ ){
    let numero = parseInt(prompt ('inserisci un numero'+i));
    
    if (numero%2!=0){
        numeri.push(numero);
        console.log(numero[i]);
        
    }
}