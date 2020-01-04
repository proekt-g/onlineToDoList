import {Component} from './Component.js';
export class NewTaskComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement('div');
        this.anchor.className = `new-task-component`;
    }
    onInit(){ }
    render(){
        this.anchor.innerHTML = `
        <br>Введите новую задачу</br>
        <input name="input-new-task" placeholder="Изменить мир...">
        <button name ="button-new-task">Добавить</button>
        `
    }
    setupListeners(){ }
}