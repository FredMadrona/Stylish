


// document.querySelector('#form-busca').onsubmit = function() {
//     if (document.querySelector('#q').value == '') {
//         document.querySelector('#q').style.background = 'red';
//         return false;
//     }
// }


// var icon = document.getElementById("icon");

//  icon.onclick = function(){

//    document.body.classList.toggle("darkmode");

//  if (document.body.classList.contains('dark-theme')){

//   icon.src = "images/sun.jpg";
 
//   else
//   icon.src = "images/moon.jpg";
//   }

//  }

// function openList(){

//     document.getElementById('nav-list').classList.toggle("active");

  
//    }

var containerWidth = document.getElementById("nav-title").offsetWidth;
console.log('hello');
console.log(containerWidth);



console.log(document.style.width);

   function openList() {
    var x = document.getElementById("nav-list");
    if (x.style.width <= "1000px"){
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    }else{
      x.style.display == "flex";

    }
  }


  // var screensize = document.getElementById("nav-list").style.display.width;

  // if(screensize >= "800px"){

  //   document.getElementById("nav-list").style.display = "flex";
  // }

  // else

  // document.getElementById("nav-list").style.display = "none";

  //  const toggleButton = document.getElementsByClassName("toggle-button")[0];
//  const navbarLinks = document.getElementById("nav-links");


  function changecolor(){
    document.body.classList.toggle("darkmode");
 
  }

  
  //  toggleButton.addEventListener("click", () =>{
  //  navbarLinks.classList.toggle("active");

  // })
 

  // function navbuttonadjust(x){
  //   if (x.matches) { 
  //     document.body.style.backgroundColor = "white";

  //   }else{
  //     document.body.style.backgroundColor = "red";
  //     }

  // }
  // var x = window.matchMedia("(max-width: 800px)")
  // navbuttonadjust(x);
  // x.addListener(navbuttonadjust);

 //*<script>
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
// </script>