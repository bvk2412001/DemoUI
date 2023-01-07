import { _decorator, Component, Node, Input, EventTouch, Vec3, Animation, Collider2D, ECollider2DType, ERigidBody2DType, ERigidBodyType, RigidBody2D, Contact2DType, IPhysics2DContact } from 'cc';
import { LevelController } from '../controller/LevelController';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('level4')
export class level4 extends LevelController {
    @property(Node)
    treeNode: Node

    @property(Node)
    appleNode: Node

    @property(Node)
    checkNode: Node
    private numberClick = Configs.NUMBER_CLICK_TREE;
    isContract: boolean = false

    start() {
        this.treeNode.on(Input.EventType.TOUCH_START, this.onTouch, this);
        
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){

        if(!this.isContract){
            if(otherCollider.node.name.includes(Configs.COLLIDER_PERSON_NAME)){
                this.onShowCheck(this.appleNode.position);
                this.isContract = true;
            }
        }
    }
    private onTouch(event){
    if(this.numberClick == 1){
        this.appleNode.getComponent(RigidBody2D).type = ERigidBody2DType.Dynamic;

        let collider = this.appleNode.getComponent(Collider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    this.treeNode.getComponent(Animation).play();
        this.numberClick--;
        
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


