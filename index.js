
const apiKey="KJG6Ha4aNDtZvh9fOgNWkWPRitnFCqbSxzPdJhAa";
const btnElement=document.getElementById("btn");

const jokeElement=document.getElementById("joke");


const options={
    method:'GET',
    headers:{
        'X-Api-Key':apiKey,
    },
};

const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){

try {
    jokeElement.innerText="updating....";
 btnElement.disabled=true;
 btnElement.innerText="Loading...";   
 const response= await fetch(apiUrl,options);
 const data= await response.json();
 jokeElement.innerText=data[0].joke;

 btnElement.disabled=false;
 btnElement.innerText="Tell Me A Joke";
 console.log(data[0].joke);
} catch (error) {;
  jokeElement.innerText="An error happened Try it again";
  btnElement.disabled=false;
  btnElement.innerText="Tell Me A Joke";
    console.log(error);
} 
 
}

btnElement.addEventListener("click",getJoke);