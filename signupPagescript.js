document.getElementById('authForm').addEventListener('submit',function(e){
    e.preventDefault();
    const userEmail = document.getElementById('email').value;
    const userUsername = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    const userType = document.getElementById('role').value;

    console.log(userEmail,userUsername,userPassword,userType);
});