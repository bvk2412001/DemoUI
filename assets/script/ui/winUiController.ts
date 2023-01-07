import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('winUiController')
export class winUiController extends Component {
    private nextLevelCallback;

    setUp(nextLevelCallback){
        
        this.nextLevelCallback = nextLevelCallback;
    
    }

    onNextLevel(){
        this.nextLevelCallback();
    }
}


