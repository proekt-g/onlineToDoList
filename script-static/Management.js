import {fetchRequest} from './fetchRequest.js';
export class Management{
    constructor(){
        this.setupListeners();
    }
    setupListeners(){
        window.addEventListener('userLogin', event => {
            fetchRequest('login', 'POST', { 
                email: event.detail.email, 
                password: event.detail.password, 
                }, 
                { 'Content-Type': 'application/json' })
            .then(res => res.json())
            .then(res => {
                if(res.token !== undefined) {
                    document.cookie = `tokenUser=${res.token}`;
                    window.dispatchEvent(new CustomEvent('changeRoute', { detail: {route: 'dashboard'}}));
                }
                else alert("Не верный пароль или логин");
            });
        })
    }
}