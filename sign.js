

function data() {
    var a = document.getElementById('UserName').value;
    var b = document.getElementById('Email').value;
    var c = document.getElementById('password').value;
    var d = document.getElementById('confirm').value;

    if (!a.match(/^[A-Za-z]+$/)) {
        alert("Only alphabets are allowed for UserName");
        return false;
    }
    else if (!b.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Enter a valid email id");
        return false;
    }
    else if (c.length < 8) {
        alert("Password is too short");
        return false;
    }
    else if (c !== d) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
