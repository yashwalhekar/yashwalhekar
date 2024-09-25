const collectData = () => {
  const radioData = document.getElementsByName("fav_language");
  console.log(radioData);
  const userName = document.getElementById('username')
  userName.setAttribute('data-user-id',"333")
  const userId  = userName.getAttribute('data-user-id')//here we use getAttribute for getting attribute data..
  console.log(userId);
  
 
  console.log(userName);
  
  

  //loop through the radio data to find which one is selected

  for (let i = 0; i < radioData.length; i++) { //first here we find the lenght of the radioData and then loop through one by one element till the last element
    if (radioData[i].checked) {
      console.log(`selected language is:${radioData[i].value}`);
    }
  }
};
