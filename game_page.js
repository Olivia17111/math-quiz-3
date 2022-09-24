function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
    console.log(actual_answer);
    question = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question + input_box + check_btn ;
    document.getElementById("output").innerHTML = row;
}

function check()
{
    if(input_check_box.value == actual_answer)
    {
document.getElementById("output").innerHTML = "U got it correct !!";
    }
}