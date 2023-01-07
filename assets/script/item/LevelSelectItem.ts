import { _decorator, Component, Label, Node, Sprite, SpriteFrame, director } from 'cc';
import { Configs } from '../utils/Configs';
import { PreData } from '../utils/PreData';
const { ccclass, property } = _decorator;

@ccclass('LevelSelectItem')
export class LevelSelectItem extends Component {
    @property(Sprite)
    statusSprite: Sprite | null = null;

    @property(Label)
    lblLevel: Label;

    @property(SpriteFrame)
    listStatusSprite: SpriteFrame[] = [];

    private levelNumber: number;
    private statusNumber: number;

    setUp(numberLevel: number, statusNumber: number, spriteFrame) {
        this.levelNumber = numberLevel;
        this.statusNumber = statusNumber;
        if (statusNumber != Configs.NUMBER_LEVEL_CURRENT){
            this.statusSprite.spriteFrame = spriteFrame
        }
        this.lblLevel.string = "" + numberLevel;
    }

    onStartGame(){
        PreData.instant.levelCurrent = this.levelNumber;
        director.loadScene(Configs.GAME_SCENE_NAME);
    }
}


