
Array=[];
let count=0;
let sum=0;

do{
    let userInputNumber = parseInt(prompt ('inserisci un numero'+ count));
    Array.push(userInputNumber);
    console.log(Array);
    sum+=Array[count];
    count++
}while (sum<50);