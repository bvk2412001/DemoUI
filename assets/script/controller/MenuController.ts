import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { ResourceUtils } from '../utils/ResourceUtils';
import { SettingController } from './SettingController';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    // @property(Prefab)
    // private selectLevelUIPrefab: Prefab;
    @property(Node)
    private uiSelectedLevel: Node;
    private settingNode;
    start() {

    }

    private onShowSetting(){
        ResourceUtils.loadPrefab("ui/UiSetting", (prefab: Prefab)=>{
            this.settingNode = instantiate(prefab);
            this.node.addChild(this.settingNode);
        })
    }

    public onShowUILevel(){ 
        this.uiSelectedLevel.active = true;
    }

    update(deltaTime: number) {

    }
}


