function submit_button() {
    const userTyped = document.getElementById('name_box').value; 
    document.getElementById('root').innerHTML = userTyped;
}

function detailsGetName() {
    var inputName = document.getElementById('name_box').value;
    return inputName;
}
function detailsGetPassword() {
    var inputPassword = document.getElementById('password_box').value;
    return inputPassword;
}

function createAccount() {
    let loginName = detailsGetName();
    let loginPassword = detailsGetPassword();
    if (loginName == '' || loginPassword == '') {
        document.getElementById('root').innerHTML = "invalid username or password. ";
    }
    else {
    document.getElementById('root').innerHTML = "Your username is " + loginName + " and your password is " + loginPassword + ". ";
    }
}
function deleteAccount() {
    let loginName = detailsGetName();
    let loginPassword = detailsGetPassword();
    if (loginName == '' || loginPassword == '') {
        document.getElementById('root').innerHTML = "There is no account to delete. ";
    }
    else {
    document.getElementById('name_box').value = '';
    document.getElementById('password_box').value = '';
    document.getElementById('root').innerHTML = "You account has been deleted. ";
    }
}
function accountDetails() {
    let loginName = detailsGetName();
    let loginPassword = detailsGetPassword();
    if (loginName == '' || loginPassword == '') {
        document.getElementById('root').innerHTML = "There is no account. ";
    }
    else { 
        document.getElementById('root').innerHTML = "Username: " + loginName + ", Password: " + loginPassword;
    }
}
function enterDetailsAgain() {
    let loginName = detailsGetName();
    let loginPassword = detailsGetPassword();
    var loginNameAgain = document.getElementById('name_box').value;
    var loginPasswordAgain = document.getElementById('password_box').value; 
    if (loginNameAgain == loginName && loginPasswordAgain == loginPassword) {
        document.getElementById('root').innerHTML = "Successful login. Username: " + loginName + ", Password: " + loginPassword;
    }
    else {
        document.getElementById('root').innerHTML = "Incorrect username or password. "
    }
}
