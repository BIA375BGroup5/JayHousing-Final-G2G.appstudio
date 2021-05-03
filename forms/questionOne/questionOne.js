bedTime = 0
req2 = ""
query = ""
netID = "djm42254"
pw = "Bolognabaddie37!"

rdobedQuestion.onchange=function(){
  console.log(`The value property of the control is ${rdobedQuestion.value}`)
  bedTime = rdobedQuestion.value
}

console.log(bedTime)

btnNextOne.onclick=function(){
  ChangeForm(questionTwo)
}

btnHome1.onclick=function(){
  ChangeForm(home)
}
