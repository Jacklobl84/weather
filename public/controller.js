import {data} from './model.js'
import {data} from './view.js'
import {data} from './weatherapi'

class controller{

    constructor(){
        this.data = new Data();
        this.view = new View();
    }

    initApplication(){
        $(".add").click(()=>{
                    this.data.addItem();
                    this.view.render();
                })
    }

}

var controller1 = new controller();
controller .initApplication();
