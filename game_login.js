add_user() 
{
   player1 = document.getElementById("player1_name_input").innerHTML;
   player2 = document.getElementById("player2_name_input").innerHTML;
   localStorage.setItem("player1" , player1);
   localStorage.setItem("player2" , player2);
   
}