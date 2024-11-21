function Sumar()
{ let valor1=document.getElementById("dato1").value;
let valor2=document.getElementById("dato2").value;
let resultadoTotal=document.getElementById("resultado");
let resultadoSuma=parseFloat(valor1)+parseFloat(valor2)
if (valor1==""||valor2==""){
alert ("El Campo esta vacio")}
else 
{resultadoTotal.innerHTML= "El resultado es: "+ resultadoSuma;}
}
function Restar()
{ let valor1=document.getElementById("dato1").value;
let valor2=document.getElementById("dato2").value;
let resultadoTotal=document.getElementById("resultado");
let resultadoResta=parseFloat(valor1)-parseFloat(valor2)
if (valor1==""||valor2==""){
alert ("El Campo esta vacio")}
else 
{resultadoTotal.innerHTML= "El resultado es: "+ resultadoResta;}
}
function Multiplicar()
{ let valor1=document.getElementById("dato1").value;
let valor2=document.getElementById("dato2").value;
let resultadoTotal=document.getElementById("resultado");
let resultadoMultiplicacion=parseFloat(valor1)*parseFloat(valor2)
if (valor1==""||valor2==""){
alert ("El Campo esta vacio")}
else 
{resultadoTotal.innerHTML= "El resultado es: "+ resultadoMultiplicacion;}
}
function Dividir()
{ let valor1=document.getElementById("dato1").value;
let valor2=document.getElementById("dato2").value;
let resultadoTotal=document.getElementById("resultado");
let resultadoDivision=parseFloat(valor1)/parseFloat(valor2)
if (valor1==""||valor2==""){
alert ("El Campo esta vacio")}
else 
{resultadoTotal.innerHTML= "El resultado es: "+ resultadoDivision;}
}