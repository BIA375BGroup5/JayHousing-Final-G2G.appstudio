req1 = ""
query = ""
btnCreateUser.onclick=function(){
  let firstName = inptFirstName.value
  let lastName = inptLastName.value
  let netID = inptNetId.value
  let pw = inptNewPassword.value 
  let name = firstName + lastName
  console.log(name)
  console.log(pw)
  console.log(netID)
  query = "INSERT INTO user (`net_id`, `password`, `name`) VALUES ('"+ netID +"', '"+ pw +"' , '"+ name +"')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupb5&query=" + query)
    if (req1.status == 200) { 
        if (req1.responseText == 500)    
            lblMessage1.value = "You have successfully been added to the app!"
        else
            lblMessage1.value = "There was a problem with adding that user to the database."
    } else 
        lblMessage1.value = "Error: " + req1.status
    ChangeForm(home)
}
