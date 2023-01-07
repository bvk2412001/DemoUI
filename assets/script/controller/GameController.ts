import { _decorator, Component, Node } from 'cc';
import { GameModel } from '../model/GameModel';
import { ResourceUtils } from '../utils/ResourceUtils';
import { Utils } from '../utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    gameModel: Node;

    private gamemodel: GameModel;
    start() {
        this.gamemodel =  this.gameModel.getComponent(GameModel);
        this.gamemodel.showLevel();
    }
}


