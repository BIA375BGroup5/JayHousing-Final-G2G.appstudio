let studyTime = 0

rdoStudyQuestionThree.onchange=function(){
  console.log(`The value property of the control is ${rdoStudyQuestionThree.value}`)
  studyTime = rdoStudyQuestionThree.value
}


btnNextThree.onclick=function(){
  ChangeForm(questionFour)
}
btnHomeThree.onclick=function(){
  ChangeForm(home)
}
