import { _decorator, Component, Node, director } from 'cc';
import { Configs } from './Configs';
import { PlayerData } from './PlayerData';
const { ccclass, property } = _decorator;

@ccclass('PreData')
export class PreData extends Component {
    public static instant: PreData;

    public levelPlayer: number = 0;
    public levelCurrent: number = 0;
    start(){
        if(PreData.instant == null){
            PreData.instant = this;
            director.addPersistRootNode(this.node);
        }

        if(PlayerData.getStorage(Configs.KEY_STORAGE_LEVEL_PLAYER)){
            this.levelPlayer = Number(PlayerData.getStorage(Configs.KEY_STORAGE_LEVEL_PLAYER));
        }
        else{
            this.levelPlayer = 1;
        }
    }
}


