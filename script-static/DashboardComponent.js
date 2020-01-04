import {Component} from './Component.js';
//import {Management} from './Management.js';
export class DashboardComponent extends Component{
    constructor(){
        super();
        this.anchor = document.createElement(`div`);
        this.anchor.className = 'dashboard-component';
        //this.manager = new Management();
    }
    onInit(){ console.log('DashboardComponent init'); }
    render() {
        this.anchor.innerHTML =`
        <h3><b>Внимание</b>: Приложения находится в стадии активной разработки</h3>
        `;
        
    }
    setupListeners(){ }
}