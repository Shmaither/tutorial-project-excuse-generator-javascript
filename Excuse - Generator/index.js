window.onload = function (){

  let who = ['The dog','My grandma','His turtle','My bird'];
  let action = ['ate','peed','crushed','broke', 'stole'];
  let what = ['my homework', 'the keys', 'the car', 'my lunch'];
  let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

  let excuse = document.querySelector("#excuse");

  let randomWho = Math.floor(Math.random() * 4);
  let randomAction = Math.floor(Math.random() * 5);
  let randomWhat = Math.floor(Math.random() * 4);
  let randomWhen = Math.floor(Math.random() * 5);

  excuse.innerHTML = who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen]; 
};
