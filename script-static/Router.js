import {LoginComponent} from './LoginComponent.js';
import {LoginFormComponent} from './LoginFormComponent.js';
import {RegisterFormComponent} from './RegisterFormComponent.js';
import {DashboardComponent} from './DashboardComponent.js';
import {ToDoListComponent} from './ToDoListComponent.js';
import {NewTaskComponent} from './NewTaskComponent.js';
import {FilterComponent} from './FilterComponent.js';
import {ToDoListElementComponent} from './ToDoListElementComponent.js';

class Router{
    constructor(anchor){
        this.anchor = anchor;
        window.addEventListener(`popstate`, event => {
            this.chancheRout(event.state.route);
        });
    }
    chancheRout(route){
        this.currentDomComponent = undefined;
        function configComponent(confComponent, i){
            const component = new confComponent();
            component.onInit();
            const dom = component.dom;
            if(this.currentDomComponent === undefined){
                while(this.anchor.firstChild){
                    this.anchor.removeChild(this.anchor.firstChild);
                }
                this.anchor.appendChild(dom);
            }else{
                if(i === 0) this.anchor.appendChild(dom);
                else this.anchor.firstChild.appendChild(dom);
            }
            this.currentDomComponent = dom;
        }
        const conf = routerConfig[route];
        if(!conf) return;
        window.history.pushState(conf.data, ``, conf.url);
        if(Array.isArray(conf.component)){
            conf.component.forEach((comp, i) => {
                configComponent.call(this, comp, i);
            });
        }else configComponent.call(this, conf.component);
        
    }
}
let routerConfig = {
    'login': {
        data: { route: 'login' },
        url: '#login',
        component: [LoginComponent, LoginFormComponent]
    },
    'register': {
        data: { route: 'register' },
        url: '#register',
        component: RegisterFormComponent
    },
    'dashboard': {
        data: { route: 'dashboard' },
        url: '#dashboard',
        component: [DashboardComponent, NewTaskComponent, FilterComponent, ToDoListComponent, ToDoListElementComponent]
    }
}
const router = new Router(document.body);
window.addEventListener(`changeRoute`, event => {
    router.chancheRout(event.detail.route);
});
window.dispatchEvent(new CustomEvent('changeRoute', { detail: {route: 'login'}}));