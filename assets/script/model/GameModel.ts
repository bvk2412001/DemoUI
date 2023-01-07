import { _decorator, Component, Node, Label, Prefab, instantiate, Vec3 } from 'cc';
import { LevelController } from '../controller/LevelController';
import { winUiController } from '../ui/winUiController';
import { Configs } from '../utils/Configs';
import { PlayerData } from '../utils/PlayerData';
import { PreData } from '../utils/PreData';
import { ResourceUtils } from '../utils/ResourceUtils';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    @property(Label)
    lblLevel: Label

    @property(Node)
    winUI: Node

    @property(Node)
    gamePlay: Node;

    @property(Node)
    errorNode: Node

    @property(Node)
    checkNode: Node

    private levelCurrent: Node;

    start() {
        
    }

    private showLableLevel(){
        this.lblLevel.string = "Level: " + PreData.instant.levelCurrent;
    }


    public showLevel() {
        this.showLableLevel();
        ResourceUtils.loadPrefab(Configs.PATH_LEVEL + PreData.instant.levelCurrent, (prefab: Prefab) => {
            this.levelCurrent = instantiate(prefab);
            this.levelCurrent.getComponent(LevelController).setUp(() => {
                this.onShowWinUi();
            });
            this.gamePlay.addChild(this.levelCurrent);
        })
    }

    

    public showNextLevel(){
        this.levelCurrent.destroy();
        this.winUI.active = false;
        this.showLevel(); 
    }

    onShowWinUi() {
        PreData.instant.levelCurrent++;
        if(PreData.instant.levelCurrent > PreData.instant.levelPlayer){
            PreData.instant.levelPlayer = PreData.instant.levelCurrent
            PlayerData.saveStorage(Configs.KEY_STORAGE_LEVEL_PLAYER, PreData.instant.levelPlayer)
        }
        this.winUI.active = true;
        this.winUI.getComponent(winUiController).setUp(()=>{
            this.showNextLevel();
        })
    }
}


