let wakeUp = 0

rdoStudyQuestion.onchange=function(){
  console.log(`The value property of the control is ${rdoStudyQuestion.value}`)
   wakeUp= rdoStudyQuestion.value
}


btnNextTwo.onclick=function(){
  ChangeForm(questionThree)
}
btnHomeTwo.onclick=function(){
  ChangeForm(home)
}
