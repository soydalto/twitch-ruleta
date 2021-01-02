
//código creado por dalto

let random = 0;

document.getElementById('girar').addEventListener("click",()=>{
	random += Math.round(Math.random()*360000)/100;
	document.querySelector(".ruleta").style.transform = `rotate(${random}deg)`;
})

//código creado por mi