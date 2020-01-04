import {Component} from './Component.js'
export class FilterComponent extends Component{ 
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'filter-component';
    }
    onInit(){ }
    render(){
        this.anchor.innerHTML = `
        <button name="button-filter-unfinished">Незавершенные</button>
        <button name="button-filter-finished">Завершенные</button>
        <button name ="button-filter-all">Все</button>
        `
    }
    setupListeners(){ }
}