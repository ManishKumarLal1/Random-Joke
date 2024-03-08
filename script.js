const api= "https://v2.jokeapi.dev/joke/Any"
const button=document.querySelector(".button");
button.addEventListener('click',jokes);
async function jokes(){
  const response= await fetch(api);
  const data= await response.json();
  console.log(data);
  document.querySelector(".joke").innerHTML=data.setup;
  document.querySelector(".ans").innerHTML=data.delivery;
}
jokes();