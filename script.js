



// let a=prompt("Enter a value 1");
// let b=prompt("Enter a value 2");

// if((a == "paper" && b == "scissor") ||(a == "scissor" && b == "paper")){
//     alert("winnner is Scissors");
// }
// else if((a == "paper" && b == "stone") || (a == "stone" && b == "paper")){
//       alert("winner is paper");
// }
// else if((a == "scissor" && b == "stone") || (a == "stone" && b == "scissor")){
//     alert("winner is stone");
// }
// else{
//     alert("invalid");
// }


// ------------------------------------------------------------------------------------------------


let a=prompt("Enter a value 1");
let b=prompt("Enter a value 2");

if(a == "paper"){
    if(b == "scissor"){
        alert("winnner is Scissors");
    }else{
        if(b == "stone"){
            alert("winner is paper")
        }
    }
}
else if(a == "scissor"){
    if(b == "stone"){
      alert("winner is stone");
    }else{
        if(b == "paper"){
            alert("winner is scissor")
        }
    }
}
else if(a == "stone"){
    if(b == "scissor"){
        alert("winner is stone");
    }else{
        if(b == "paper"){
            alert("winner is paper")
        }
    }
}
else{
    alert("invalid");
}











