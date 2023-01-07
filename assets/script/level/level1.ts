import { _decorator, Component, Node, input, Contact2DType, Input, EventTouch, Vec3 } from 'cc';
import { LevelController } from '../controller/LevelController';
const { ccclass, property } = _decorator;

@ccclass('level1')
export class level1 extends LevelController {
    
    @property(Node)
    errorNode: Node

    @property(Node)
    checkNode: Node

    

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouch, this);
    }

    private onTouch(event: EventTouch){
        let loc = new Vec3(event.getUILocation().x -360, event.getUILocation().y - 720, 0)
        this.onShowError1(loc);
    }


    update(deltaTime: number) {
        
    }
    onShowError1(position : Vec3) {
        this.errorNode.setPosition(position);
        this.errorNode.active = true;
        setTimeout(() => {
            this.errorNode.active = false;
        }, 500)

    }
    onShowError(event) {
        let loca = event.target;
        this.errorNode.setPosition(loca.position);
        this.errorNode.active = true;
        setTimeout(() => {
            this.errorNode.active = false;
        }, 500)

    }

    onShowCheck(event) {
        let loc = new Vec3(event.target.position.x -360, event.target.position.y - 720, 0)
        this.checkNode.setPosition(event.target.position);
        this.checkNode.active = true;
        setTimeout(() => {
            this.checkNode.active = false;
            this.callbackWin();
        }, 500)
    }
    
}


