const answer = "Linkins";
let mistakes = 0;
let correct = 0;
let blank = "";

document.getElementById('guessButton').addEventListener('click', () => {
    let guess = document.getElementById('text-input').value;
    console.log(guess);

    if(guess == "w"){
        document.getElementById('text-input').value = "";
        correct++;
        console.log(correct);
        document.getElementById('W').style.opacity = '100%';
        if (correct == 4){
            alert("YOU WIN!!!!")
            }
    }else if (guess == "a"){
        document.getElementById('text-input').value = "";
        document.getElementById('A').style.opacity = '100%';
        correct++;
        console.log(correct);
        if (correct == 4){
            alert("YOU WIN!!!!")
            }
    }else if (guess == "t"){
        document.getElementById('text-input').value = "";
        document.getElementById('T1').style.opacity = '100%';
        document.getElementById('T2').style.opacity = '100%';
        correct++;
        console.log(correct);
        if (correct == 4){
            alert("YOU WIN!!!!")
            }
    }else if (guess == "y"){
        document.getElementById('text-input').value = "";
        document.getElementById('Y').style.opacity = '100%';
        correct++;
        console.log(correct);
        if (correct == 4){
            alert("YOU WIN!!!!")
        }
    }else{
        mistakes = mistakes+1;
        console.log(mistakes);
        if(mistakes == 1){
            document.getElementById('stickman').src="../HW_2/images/Stickman1Wrong.png"

            document.getElementById('text-input').value = "";
        }else if(mistakes == 2){
            document.getElementById('stickman').src="../HW_2/images/Stickman2Wrong.png"

            document.getElementById('text-input').value = "";
        }else if(mistakes == 3){
            document.getElementById('stickman').src="../HW_2/images/Stickman3Wrong.png"

            document.getElementById('text-input').value = "";
        }else if(mistakes == 4){
            document.getElementById('stickman').src="../HW_2/images/Stickman4Wrong.png"

            document.getElementById('text-input').value = "";
        }else if(mistakes == 5){
            document.getElementById('stickman').src="../HW_2/images/Stickman5Wrong.png"

            document.getElementById('text-input').value = "";
        }else if(mistakes == 6){
            document.getElementById('stickman').src="../HW_2/images/Stickman6Wrong.png"
            alert("GAME OVER");
            document.getElementById('text-input').value = "";
        }else{
            alert("GAME OVER");
            document.getElementById('text-input').value = "";
            mistakes == 0;
        }
    }
    
})

if(correct == 4){
    alert("YOU WIN!!!!")
    document.body.style.backgroundColor= 'green';
}

if(maxWrong = mistakes){
    alert("GAME OVER");
}



