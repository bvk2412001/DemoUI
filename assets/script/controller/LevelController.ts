import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass} = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    protected callbackWin;

    setUp(callbackWin) {
        this.callbackWin = callbackWin;
    }

    protected onShowError(event){
        let node : Node = event.target;
    }


    protected showUiWin(event){
        let node : Node = event.target;
        setTimeout(()=>{
            this.callbackWin();
        },1000 );
        
    }

}


