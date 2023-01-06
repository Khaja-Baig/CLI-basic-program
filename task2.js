var input = require('readline-sync')
var points = 0

var name = input.question("Enter your name-:")
console.log("Hello",name)
function CLIquiz(question,answer) {
    console.log(i+1+"."+question)
    let ans = input.question("")
    if (answer == ans){
        console.log("Right");
        points++
    }
    else{
        console.log("Wrong");
    }
    console.log("-----------$$-----------");
}

let data = [{
    question:"Do I like anime??",
    answer:"Yes"
},{
    question:"What's my favorite anime?",
    answer:"JJK" 
},{
    question:"What's your favorite character in JJK?",
    answer:"Sukuna"
},{
    question:"Where I oftenly watch anime?",
    answer:"Animixplay"
},{
    question:"From anime characters, who would I like to be or become?",
    answer:"Sataro Gojo"   
}]

console.log("How much do you know me");
for (var i = 0;i<data.length;i++){
    CLIquiz(data[i].question,data[i].answer)
}
console.log("You have scored",points,"points",name);
