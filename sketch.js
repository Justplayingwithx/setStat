const database = firebase.database();

var searchUserField;
var searchUserButton;
var youUpTo;
var yourName;
var yourPass;
var setUpToIn;
var setUpToBu;
var userPassword;
var enteredPassword;
var loggedIn;
var takeToSignupScreen;
var signUpFieldUsername;
var signUpFieldPassword;
var signUpButton;


function setup() {
  createCanvas(500,500);

  //create elements

  searchUserField = createInput('Search up your friends here!');

searchUserField.position(250,50);

searchUserButton = createButton('Search');

searchUserButton.position(430,50);

searchUserField.hide();
searchUserButton.hide();

/*setUpToIn = createInput('What are you doing?');

setUpToIn.position(390,200);*/



loggedIn = false;

setUpToBu = createButton('Login');

setUpToBu.position(220,250);  

setUpToBu.mousePressed(console.log("hi"));

youUpTo = createSpan("Log in!");

youUpTo.position(220,150);

yourName = createInput("username");

yourName.position(50,200);

yourPass = createInput("password",'password');

yourPass.position(250,200);

takeToSignupScreen = createDiv("Don't have an account? Sign up at this page:")

takeToSignupScreen.position(140,300)  //140,300






  
}

function draw() {
  background(255);  

  enteredPassword = yourPass.value();

  

  if(loggedIn === true){
    searchUserField.show();
    searchUserButton.show();
    signUpButton.hide();
    signUpFieldPassword.hide();
    signUpFieldUsername.hide();
    takeToSignupScreen.hide();
    yourPass.hide();
    yourName.hide();
    youUpTo.hide();
    setUpToBu.hide();
  }else if(loggedIn === false){
    searchUserField.hide();
    searchUserButton.hide();
    signUpButton.show();
    signUpFieldPassword.show();
    signUpFieldUsername.show();
    takeToSignupScreen.show();
    yourPass.show();
    yourName.show();
    youUpTo.show();
    setUpToBu.show();
  }


    
  

 


  
}

function login(key){
  if(key === "login"){
    database.ref("users/Justhackingx/password").get().then((data)=>{
      userPassword = data.val();
 
      if(enteredPassword === userPassword){
        loggedIn = true;
      }else if(enteredPassword!=userPassword){
        //console.log("Not logged in/login failed")
      }
      
   });
  }

  }
  

 









