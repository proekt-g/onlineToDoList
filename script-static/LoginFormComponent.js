import {Component} from './Component.js';
export class LoginFormComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'login-form-component';
    }
    onInit(){ console.log('LoginFormComponent'); }
    render(){
        this.anchor.innerHTML = `
        <form name="form-login">
            <input name="input-login" placeholder="email or username"> 
            <input name="input-password" placeholder="password">
            <button name="button-submit">Войти</button>
        </form>
        <button name="fast-travel">Fast travel ;)</button> 
        `;
    }
    setupListeners(){
        this.anchor.querySelector(`button[name=fast-travel]`).addEventListener('click', event => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('userLogin', { detail: { email: 'prog.dev.rob@gmail.com', 
                                                                          password: 'fzlqbx2tbu'}
            }));
        });
        this.anchor.querySelector(`button[name=button-submit]`).addEventListener('click', event => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('userLogin', { detail: { email: this.anchor.querySelector(`input[name=input-login]`).value, 
                                                                          password: this.anchor.querySelector(`input[name=input-password]`).value}
            }));
        });
    }
}