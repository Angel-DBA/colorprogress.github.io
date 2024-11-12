var wrapper = document.querySelector('.wrapper');
var signuplink = document.querySelector('.signup-link');
var loginlink = document.querySelector('.login-link');
signuplink.onclick = () =>{
  wrapper.classList.add("active");
}
loginlink.onclick = () =>{
  wrapper.classList.remove("active");
}
