


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}






function onSignIn(googleUser) {
  // Get the user's ID token and basic profile information
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();

  // Send the ID token to your server to verify the user's identity
  // ...

  // Use the user's information
  console.log("ID Token: " + id_token);
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
}


