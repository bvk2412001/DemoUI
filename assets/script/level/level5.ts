import { _decorator, Component, Node, Vec3, Input, EventTouch } from 'cc';
import { LevelController } from '../controller/LevelController';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('level5')
export class level5 extends LevelController {
    @property(Node)
    nodeMask: Node

    @property(Node)
    findNode: Node

    @property(Node)
    checkNode: Node;

    start() {
        this.nodeMask.on(Input.EventType.TOUCH_MOVE, this.onTouchMoveMask, this);
        this.nodeMask.on(Input.EventType.TOUCH_END, this.onTouchEndMask, this)
    }

    onTouchMoveMask(event: EventTouch) {
        let loc = event.getUILocation();
        this.nodeMask.setPosition(loc.x - Configs.HAFT_SCENE_WIDTH, loc.y - Configs.HAFT_SCENE_HEIGHT, 0);
    }

    onTouchEndMask(event: EventTouch) {
        let loc = this.nodeMask.getPosition().subtract(this.findNode.getPosition());
        let kc = Math.sqrt(loc.x * loc.x + loc.y * loc.y);
        console.log(kc);
        if (kc < 100) {
            this.onShowCheck(this.findNode.getPosition());
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


