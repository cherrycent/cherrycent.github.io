/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';


document.querySelector('html').onclick = function(){
   alert('嗯～继续～');
}
*/


var myImage = document.querySelector('img');

myImage.onclick = function(){
   var mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/sexyboy.png'){
     myImage.setAttribute('src','images/mates-1.png');
   } else {
     myImage.setAttribute('src','images/sexyboy.png');
   }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
   var myName = prompt('告诉人家你的名字啦～');
   localStorage.setItem('name',myName);
   myHeading.innerHTML = '陈鲤真帅，'+myName;
}

if(!localStorage.getItem('name')){
   setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = '陈鲤真帅，'+storedName;
}

myButton.onclick = function(){
   setUserName();
}