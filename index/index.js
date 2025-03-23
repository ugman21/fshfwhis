function randomImage(){
  var images = [
   'fwed.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('home');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);



var imageres = [
   'rndbg/imgonline-com-ua-pixbackCKnwbnBnz8q9.jpg',
   'rndbg/imgonline-com-ua-pixbackDazEr8KJu3nI.jpg',
   'rndbg/imgonline-com-ua-pixbackNdvP1L7ygYa3.jpg',
   'rndbg/pixback.jpg',
   'rndbg/pixback1.jpg',
   'rndbg/pixback2.jpg',
   'rndbg/pixback3.jpg'];