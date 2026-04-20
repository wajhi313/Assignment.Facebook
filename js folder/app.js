document.getElementById("login-btn").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "") {
        alert("Email is required");
    }
    else if (!email.includes("@")) {
        alert("Enter a valid email address");
    }
    else if (password === "") {
        alert("Password is required");
    }
    else {
        window.location.href = "feed.html";
     }
})