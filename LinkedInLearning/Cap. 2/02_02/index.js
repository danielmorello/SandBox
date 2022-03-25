var dia = new Date();

console.log(dia);

document.body.innerHTML = "<H1>Hoje é " + dia.getDate() + "/" + (dia.getMonth()+1) + "/" + dia.getFullYear() + "</H1>";