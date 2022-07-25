function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5z7NDf4Ai2d":
        Script1();
        break;
      case "6p7kJThJMlM":
        Script2();
        break;
  }
}

function Script1()
{
  //grab the LMS object
var lmsAPI = parent 
//ask the LMS object to get the name
var rawName = lmsAPI.GetStudentName(); 
//the name comes very formal "Last, First" 
//we will fix that by sticking the name into an array
var nameArray = rawName.split(",") 
//then we save it the other way round "First Last"
var niceName = nameArray[1] +" "+nameArray[0];
//now we grab the Articulate player
var p = GetPlayer();
//finally we set our Articulate var to our username
p.SetVar("username",niceName);
}

function Script2()
{
  //grab the LMS object
var lmsAPI = parent 
//ask the LMS object to get the name
var rawName = lmsAPI.GetStudentName(); 
//the name comes very formal "Last, First" 
//we will fix that by sticking the name into an array
var nameArray = rawName.split(",") 
//then we save it the other way round "First Last"
var niceName = nameArray[1] +" "+nameArray[0];
//now we grab the Articulate player
var p = GetPlayer();
//finally we set our Articulate var to our username
p.SetVar("username",niceName);

//Other Code

var newWin=window.open("certificate.html", "certificate", "status=0,scrollbars=0,width=820,height=620");
}

