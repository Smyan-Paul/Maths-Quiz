player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn = " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn = " + player2_name;

function send()
{
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;
    Product = parseInt(Number1) * parseInt(Number2);

    question_math= "<h4 id = 'multiplication_display'>Q. " + Number1 + "x" + Number2 + "</h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br> <br> <button class = 'btn btn-danger' style='color: #1c39bb' onclick = 'check()'>Check</button>";
    row = question_math + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = parseInt(get_answer);

    if(answer == Product)
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - "+ player2_name;
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - "+ player1_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - "+ player1_name;
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - "+ player2_name;
    }

    document.getElementById("output").value = "";
}