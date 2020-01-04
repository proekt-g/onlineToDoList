import {Component} from './Component.js'
export class RegisterFormComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'register-form-component';
    }
    onInit(){ console.log('RegisterFormComponent'); }
    render(){
        this.anchor.innerHTML = `
        <form name="form-register">
            <input name="input-register-username" value="username">
            <input name="input-register-email" value="email">
            <input name="input-register-password" value="password">
            <input name="input-register-password-again" value="password again">
            <button name="button-submit">Зарегестрироваться</button>
        </form>
        `;
    }
    setupListeners(){ }
}