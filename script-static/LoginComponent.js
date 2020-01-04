import {Component} from './Component.js';
import {Management} from './Management.js';
export class LoginComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'login-component';
        this.manager = new Management();
    }
    onInit(){ console.log('LoginComponent init'); }
    render(){
        this.anchor.innerHTML = `<button name="button-register">Регистрация</button>`
    }
    setupListeners(){
        this.anchor.querySelector(`button[name=button-register]`).addEventListener('click', event => {
            event.preventDefault();
            window.dispatchEvent(new CustomEvent('changeRoute', { detail: {route: 'register'}}));
        });
    }
}