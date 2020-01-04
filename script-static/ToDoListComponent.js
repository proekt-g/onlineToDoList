import {Component} from './Component.js'
export class ToDoListComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'to-do-list-component';
    }
    onInit(){ }
    render(){
        this.anchor.innerHTML = `
        <ul name="list-task"></ul>
        `;
    }
    setupListeners(){ }
}