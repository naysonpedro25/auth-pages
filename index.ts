const btnRegister: HTMLButtonElement | null  = document.querySelector('.btn-register');
const btnLogin: HTMLButtonElement | null = document.querySelector('.btn-login');



const choseSignMethod = ()=>{

    const loginLink:HTMLLinkElement | null = document.querySelector('.login-link');
    const registerLink:HTMLLinkElement | null = document.querySelector('.register-link');
    
    const loginForms:HTMLDivElement | null = document.querySelector('.card-login');
    const registerForms:HTMLDivElement | null = document.querySelector('.card-register');
    
    
    if(loginLink && registerLink && btnLogin && btnRegister && loginForms && registerForms){
        loginLink.addEventListener('click', ()=>{ 
            loginForms.classList.add('show');
            registerForms.classList.remove('show');
            btnLogin.innerText = 'Confirmar Login'
        })
        registerLink.addEventListener('click', ()=>{ 
            registerForms.classList.add('show');
            loginForms.classList.remove('show');
            btnRegister.innerText = 'Confirmar Registro'
        })


        btnLogin.addEventListener('click', e=> {
            btnLogin.classList.add('clicked');
            setTimeout(()=>{
                btnLogin.classList.remove('clicked')
            }, 500);
        });

        btnRegister.addEventListener('click', e=> {
            btnRegister.classList.add('clicked');
            setTimeout(()=>{
                btnRegister.classList.remove('clicked')
            }, 500);
        });
    }
    
}


choseSignMethod();