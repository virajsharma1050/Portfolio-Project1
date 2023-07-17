let allData = new URLSearchParams(window.location.search)
let namee = allData.get("name")
let email = allData.get("email")
let age = allData.get("age")
let gender = allData.get("gender")
let image = allData.get("image")

console.log(namee);
console.log(email);
console.log(age);
console.log(gender);
console.log(image);



document.getElementById("username").innerText = namee;
document.getElementById("useremail").innerText = email;
document.getElementById("userage").innerText = age;
document.getElementById("usergender").innerText = gender;
document.getElementById("userimage").src = image;