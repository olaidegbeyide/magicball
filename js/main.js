let my_button = document.getElementById('shake-btn')
let input = document.getElementById('input')
let eight = document.getElementById('eight')
let answer = document.getElementById('answer')
var options = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ];

my_button.addEventListener('click', getAnswer)

function getAnswer() {
    if (input.value.length === 0) {
        alert('please enter a question')
    } else {
        eight.style.display = 'none'
      var num = input.value.length % options.length
      answer.innerText = options[num]
      input.value = ''
    }
}