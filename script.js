const container=document.querySelector(".container")
let squaresNumber=16;
function displayGrid(squaresNumber){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    for(let i=0;i<squaresNumber;i++){
        const lineSquares=document.createElement("div");
        lineSquares.setAttribute("class",`container${i}`);
        for(let j=0;j<squaresNumber;j++){
            let num1=Math.floor(Math.random()*255);
            let num2=Math.floor(Math.random()*255);
            let num3=Math.floor(Math.random()*255);
            const square=document.createElement("div");
            square.setAttribute("class","square");
            let counter=0.1;
            square.onmouseover=()=>{square.style.opacity=counter;
                counter=counter+0.1;
                square.style.backgroundColor=`rgb(${num1}, ${num2}, ${num3})`}
            let size=((960/squaresNumber)-8)/2;
            square.style.padding=`${size}px`;
            lineSquares.appendChild(square);
        }
        container.appendChild(lineSquares)
    }
}
displayGrid(squaresNumber);
const button=document.querySelector("button");
button.addEventListener("click",()=>{squaresNumber=prompt("enter the number of squares per side for the new grid:");
squaresNumber=parseInt(squaresNumber);
console.log(squaresNumber)
if(squaresNumber!==0 && squaresNumber<=100){
displayGrid(squaresNumber)}
else{
    alert("enter a valid number (between 1 and 100)")
}});