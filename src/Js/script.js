const togglerbars= document.querySelector(".toggler-bars");
const header__navigations= document.querySelector(".header__navigations-container__unorderd");
const main = document.querySelector(".main");
const dailymain =document.querySelector(".daily-status-main");
togglerbars.addEventListener("click",() => {
    togglerbars.classList.toggle("active");
    header__navigations.classList.toggle("active");
    main.classList.toggle("active");
    
})
const form = document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const message = document.getElementById('message');
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    
    validateInputs();

});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
   
    if( messageValue === '' ){
        setError(message," you didn't enter message");
    }else if(messageValue.length >50){
        setError(message, "message shouldn't greater than 50");
    }else{
        setSuccess(message);
    }
};










