let clean = 0
rdoStudyQuestionFour.onchange=function(){
  console.log(`The value property of the control is ${rdoStudyQuestionFour.value}`)
  clean = rdoStudyQuestionFour.value
  }


btnNextFour.onclick=function(){
  ChangeForm(questionFive)
}
btnHomeFour.onclick=function(){
  ChangeForm(home)
}
