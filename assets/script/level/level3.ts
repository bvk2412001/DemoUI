import { _decorator, Component, Node, Input, EventTouch, Vec3 } from 'cc';
import { LevelController } from '../controller/LevelController';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('level3')
export class level3 extends LevelController {
    @property(Node)
    checkNode: Node;

    @property(Node) 
    roadNode: Node 

    start() {
        this.roadNode.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.roadNode.on(Input.EventType.TOUCH_END, this.onTouchEnd, this)
    }

    public onTouchMove(event : EventTouch){
        let loc = new Vec3(event.getUILocation().x - Configs.HAFT_SCENE_WIDTH, event.getUILocation().y- Configs.HAFT_SCENE_HEIGHT, 0);
        this.roadNode.setPosition(loc);
    }

    public onTouchEnd(event : EventTouch){
        console.log(event.getUILocation().x);
        if(event.getUILocation().x - Configs.HAFT_SCENE_WIDTH < -40){
            let loc = new Vec3(event.getUILocation().x - Configs.HAFT_SCENE_WIDTH, event.getUILocation().y- Configs.HAFT_SCENE_HEIGHT, 0);
            this.onShowCheck(loc);
        }
    }

    onShowCheck(position: Vec3) {
        this.checkNode.setPosition(position);
        this.checkNode.active = true;
        setTimeout(() => {
            this.checkNode.active = false;
            this.callbackWin();
        }, 500)
    }
    update(deltaTime: number) {
        
    }
}


