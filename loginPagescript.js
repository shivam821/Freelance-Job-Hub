document.getElementById('authForm').addEventListener('submit',function(e){
    e.preventDefault();
    const userUsername = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    const userType = document.getElementById('role').value;

    console.log(userUsername,userPassword,userType);
});