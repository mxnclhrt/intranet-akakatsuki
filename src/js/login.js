const ALLOWED_LOGIN = "akakatsuki";
const ALLOWED_PASSWORD = "jaimelesmineurs";
const SESSION_KEY = "intranet_auth_ok_v2";
// si déjà connecté, redirige vers index
if(sessionStorage.getItem(SESSION_KEY) === "1"){
	window.location.href = "../../index.html";
}
document.getElementById("submit").addEventListener("click", ()=>{
	const user = document.getElementById("user").value.trim();
	const pwd = document.getElementById("pwd").value;
	const msg = document.getElementById("msg");
	msg.textContent = "";
	if(user===ALLOWED_LOGIN && pwd===ALLOWED_PASSWORD){
		sessionStorage.setItem(SESSION_KEY,"1");
		window.location.href = "../../index.html";
	}else{
		msg.textContent = "Identifiant ou mot de passe incorrect.";
	}
});

// Entrée pour soumettre
[document.getElementById("user"), document.getElementById("pwd")].forEach(el=>{
	el.addEventListener("keydown",e=>{
		if(e.key==="Enter") document.getElementById("submit").click();
	});
});