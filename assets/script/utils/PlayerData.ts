import { _decorator, Component, Node, sys } from 'cc';
import { Configs } from './Configs';
import { PreData } from './PreData';
const { ccclass, property } = _decorator;

@ccclass('PlayerData')
export class PlayerData extends Component {
    public static GAME_ID = "DEMO_UI_1";

    public static saveStorage(key, value){
        sys.localStorage.setItem(key + PlayerData.GAME_ID, value)
    }

    public static getStorage(key){
        return sys.localStorage.getItem(key + PlayerData.GAME_ID);
    }
}


