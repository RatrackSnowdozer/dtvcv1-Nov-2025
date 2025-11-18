console.log("Hello Ratrack !");

const svg=document.querySelector("svg");
const SvgNS="http://www.w3.org/2000/svg"
const height=40;
const gap=10;

for (let i=0; i=i++) {
    console.log('iteration number : ${i}');
    const rect=document.createElementNS(SvgNS,"rect");
    rect.setAttribute("x",10);
    rect.setAttribute("y",10+i*(height+Gap));
    rect.setAttribute("width",600);
    rect.setAttribute("Height",height);
    svg.appendchild(rect);
}