let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let gender = document.getElementsByName("gender");

let allUsers = [];
let user = {};
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function signupHandler(event) {
    event.preventDefault();

    user.firstName = firstName.value;
    user.lastName = lastName.value;
    user.email = email.value;
    user.password = password.value;
    user.Dob = `${day.value}/${month.value}/${year.value}`;
    user.gender = gender.value;

for (let i=0; i<gender.length; i++) {
    if (gender[i].checked) {
        user.gender = gender[i].value;
    }
    
}

if (!user.firstName.trim() || !user.lastName.trim() || !user.email.trim() || !user.password.trim() || !user.Dob || !user.gender) {
    return sweety("Oops", "Error", "Please fill in all fields");
}
if (user.password.length < 6) {
    return sweety("Oops", "Error", "Password must be at least 6 characters long");
}
if (!emailRegex.test(user.email)){
    return sweety("Oops", "Error", "Please enter a valid email address");
}
allUsers.push(user)
firstName.value = ""
lastName.value = ""
email.value = ""
password.value = ""
console.log(allUsers);
console.log(user);

for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        gender[i].checked = false;
    }
}

  sweety("success", "Ok", "signup successfully").then(()=> {
   window.location.href = "feed.html";
})
}


function sweety(icon,title,text) {
 return Swal.fire({
    icon,
    title,
    text,
 });
}