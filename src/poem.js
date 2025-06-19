function generatePoem(event){
    event.preventDefault();

   

    new Typewriter("#poem-output",{
        strings:"I love flowers",
        autoStart:true,
        cursor:" ",
        delay:20,
    });
}
let poemButton=document.querySelector("#poem-button");
poemButton.addEventListener("click",generatePoem);