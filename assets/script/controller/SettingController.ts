import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SettingController')
export class SettingController extends Component {
    private onCloseSetting(){
        this.node.active = false;
    }



    update(deltaTime: number) {
        
    }
}


