const button = document.getElementById("add_text");
const output = document.getElementById("output");
const input = document.getElementById("input");

function dubbleWord (){
    const userInput = input.value;
    const formattedInput = userInput.split(" ");
    
    let output = "";

    for(i = 0; i <= 100; i++){
        if (typeof formattedInput[i] !== 'undefined'){
            output += formattedInput[i];
            output += " ";
            output += formattedInput[i];
            output += " ";    
        }
        
    }
    
    console.log(output);

}

button.addEventListener("click", dubbleWord);

