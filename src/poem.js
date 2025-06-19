function poemResponse(response){
    console.log(response.data.answer);

    new Typewriter("#poem-output",{
        strings:response.data.answer,
        autoStart:true,
        cursor:" ",
        delay:40,
    });

}
function poemGenerator(event){
    event.preventDefault();

    let poemTopic=document.querySelector("#poem-input");
    let context="Please generate a 4 line poem only.Please follow prompt from the user.";
    let prompt=`Please write me a poem of 4 lines using basic HTML ,the poem must be about ${poemTopic.value}`;
    let apiKey="abod483e2dfa17bb1244b3fbdft2032b";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(poemResponse);
}
let button=document.querySelector("#poem-button");
button.addEventListener("click",poemGenerator);
