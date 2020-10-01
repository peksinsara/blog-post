
// tracking user
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("logged in: ", user);
        window.replace("posts.html");
        alert("Welcome to Esposto posts!");
    }
    else {
        console.log("logged out: ", user);
    }
});

// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info 
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#registration-modal');

        M.Modal.getInstance(modal).close();
        signupForm.reset();

    });
    alert("You are registrated. You may log in now.");
});



// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close login modal 
        const modal = document.querySelector('#login-modal');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });

});

