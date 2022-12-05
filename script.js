const resultContainer=document.querySelector(".result");
const printNumbers=(number)=>{
    const numbers=[]
    for (let i=number;i<=number+2;i++){
        numbers.push(i)
        resultContainer.innerHTML+=`<span>${i}, </span>`
    }
    return numbers
}
const calculate=(numbers)=>{
    const suma=numbers.reduce((el,acc)=>el+acc,0);
    resultContainer.innerHTML+=`<div>
            <div>Ilość elementów: ${numbers.length}</div>
            <div>Summa:${suma}</div>
            <div>Wartość minimalna: ${Math.min(...numbers)}</div>
            <div>Wartość maksymalna:${Math.max(...numbers)}</div>
            <div>Wartość średnia:${suma/numbers.length}</div>
        </div>`
}
document.querySelector("#button").addEventListener("click",()=>{
    const value1=parseFloat(document.querySelector("#value1").value);
    const value2=parseFloat(document.querySelector("#value2").value);
    resultContainer.innerHTML=""
   const numbers1 =printNumbers(value1);
    const numbers2=printNumbers(value2);
    calculate([...numbers1,...numbers2]);
})