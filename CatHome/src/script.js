


doucument.querySelector('html').onClick = function(){
  alert("click me ");
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var mybutton = document.querySelector('button');
var headingTest = document.querySelector('h1');
function UserName(){
  var myName = prompt("Enter Your Name : ");
  localStorage.setItem('name',myName);
  headingTest.TextContent = "Name is" + myName ;
}

if(!localStorage.getItem('name'))
  {
    UserName();
  }
else
  {
    var nameIn = localStorage.getItem('name');
    headingTest.TextContent = "Name is" + myName ;
  }
mybutton.onclick = function(){
  setUserName;
}
