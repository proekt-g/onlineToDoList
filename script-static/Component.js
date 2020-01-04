export class Component{
    get dom(){
        this.render(); 
        this.setupListeners();
        return this.anchor
    }
}

