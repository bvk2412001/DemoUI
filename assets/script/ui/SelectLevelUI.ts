import { _decorator, Component, director, instantiate, Node, Prefab, ScrollView, UITransform, SpriteFrame } from 'cc';
import { LevelSelectItem } from '../item/LevelSelectItem';
import { Configs } from '../utils/Configs';
import { PreData } from '../utils/PreData';
const { ccclass, property } = _decorator;

@ccclass('SelectLevelUI')
export class SelectLevelUI extends Component {
    @property(Prefab)
    private selectLevelItemPrefab: Prefab;
    //

    @property(SpriteFrame)
    listStatusSprite: SpriteFrame[] = [];

    @property(ScrollView)
    private scrollView: ScrollView;
    //
    start() {
        for (let i = 1; i <= Configs.TOTAL_LEVEL; i++) {
            let itemLevel = instantiate(this.selectLevelItemPrefab);
            if (i < PreData.instant.levelPlayer) {
                itemLevel.getComponent(LevelSelectItem).setUp(i, Configs.NUMBER_LEVEL_TICK, this.listStatusSprite[Configs.NUMBER_LEVEL_TICK])
            }
            if(i == PreData.instant.levelPlayer){
                itemLevel.getComponent(LevelSelectItem).setUp(i, Configs.NUMBER_LEVEL_CURRENT, null);
            }
            if(i > PreData.instant.levelPlayer){
                itemLevel.getComponent(LevelSelectItem).setUp(i, Configs.NUMBER_LEVEL_LOCK,  this.listStatusSprite[Configs.NUMBER_LEVEL_LOCK]);
            }
            this.scrollView.content.addChild(itemLevel);
        }
    }

    update(deltaTime: number) {

    }
}


