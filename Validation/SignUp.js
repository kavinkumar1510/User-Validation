function valid() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let num = document.getElementById("num").value;

    const phn = /^\d{10}$/;
    const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (name === "" || name<=65 || name>=122 || name.length<5) {
        alert("Invalid Username");
        return false;
    }

    if (num === "" || !phn.test(num)) {
        alert("Enter a valid PhoneNumber");
        return false;
    }

    if (email === "" || !em.test(email)) {
        alert("Enter a valid email");
        return false;
    }

    if (pass1.length < 8) {
        alert("The password length should be 8 or more than 8");
        return false;
    }

    if (pass1 !== pass2) {
        alert("The password doesn't match");
        return false;
    }

    alert("SignedUp Successfully");
    return true;
}
