
btnSubmit.onclick=function(){
    console.log(`The value property of the control is ${inptName.value}`)
    console.log(`The value property of the control is ${inptSocialMedia.value}`)
    name = inptName.value
    link = inptSocialMedia.value
    ChangeForm(RoomateSelection)
  query = "INSERT INTO response_question(`name`, `bed_time`, `wake_up`, `study`, `clean`, `social_media`) VALUES ('"+name+"', '"+bedTime+"','"+wakeUp+"', '"+studyTime+"', '"+clean+"', '"+link+"')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb5&query=" + query)
  if (req.status == 200) { 
        if (req.responseText == 500)    
            console.log("You have successfully added you to the database!")
        else
            console.log("There was a problem with adding you to the database.")
    } else 
        console.log("Error: " + req.status)
    query = "SELECT * FROM response_question"
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb5&query=" + query)
    if (req.status == 200) { 
    console.log(req.responseText)
    results = JSON.parse(req.responseText)
        if (results.length == 0) 
        console.log("There are no roomates available")
    else{
        for(i = 0; i <results.length; i++){
                if (results[i][3] == 0 && bedTime == 0) {
                            drpdwnRoomies.addItem(results[i][1])
            }
        }
    }
  }
}                           
   



drpdwnRoomies.onclick=function(s){
  console.log(s)
  query = "SELECT `social_media` FROM response_question WHERE `name` = '"+ s +"'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb5&query=" + query)
   if (req.status == 200) { 
    console.log(req.responseText)
    results = JSON.parse(req.responseText)
        for(i = 0; i < results.length; i++){
            lstgrpProfile.addItem(results[i])
      }  
    }
}
btnHomeSix.onclick=function(){
  ChangeForm(home)
}
