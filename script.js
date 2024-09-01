const container=document.querySelector(".container")
for(let i=0;i<16;i++){
    const lineSquares=document.createElement("div");
    lineSquares.setAttribute("class",`container${i}`);
    for(let j=0;j<16;j++){
        const square=document.createElement("div");
        square.setAttribute("class","square");
        lineSquares.appendChild(square);
    }
    container.appendChild(lineSquares)
}
function replaceGrid(squaresNumber){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    for(let i=0;i<squaresNumber;i++){
        const lineSquares=document.createElement("div");
        lineSquares.setAttribute("class",`container${i}`);
        for(let j=0;j<squaresNumber;j++){
            const square=document.createElement("div");
            square.setAttribute("class","square");
            let size=((960/squaresNumber)-8)/2;
            square.style.padding=`${size}px`;
            lineSquares.appendChild(square);
        }
        container.appendChild(lineSquares)
    }
}
const button=document.querySelector("button");
let squaresNumber=0;
button.addEventListener("click",()=>{squaresNumber=prompt("enter the number of squares per side for the new grid:");
squaresNumber=parseInt(squaresNumber);
console.log(squaresNumber)
if(squaresNumber!==0 && squaresNumber<=100){
replaceGrid(squaresNumber)}
else{
    alert("enter a valid number (between 1 and 100)")
}});