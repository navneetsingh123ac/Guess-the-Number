let RandomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 0;
function returnText() {
    let input =
        document.getElementById("inputArea").value
    input = Number.parseInt(input)

    if (input < RandomNumber) {
        document.getElementById("result").innerHTML = "your number is less"
        chances++;
    }
    else if (input > RandomNumber) {
        document.getElementById("result").innerHTML = "your number is more"
        chances++;
    }
    else if (input == RandomNumber) {
        document.getElementById("result").innerHTML = "Congrats you win"
        document.getElementById("chances").innerHTML = "You win this game in " + chances + " chances"
    }
    else {
        document.getElementById("result").innerHTML = "enter a valid number"
    }
}