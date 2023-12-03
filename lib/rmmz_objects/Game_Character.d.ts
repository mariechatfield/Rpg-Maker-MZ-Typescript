import { Game_CharacterBase, Game_Item } from ".";
import { RPG } from "../RPG";
import { CharacterIndex, FaceIndex } from "../constants/sprites";

declare class Game_Character extends Game_CharacterBase {
  public _actorId: 0;
  public _name: string;
  public _nickname: string;
  public _classId: number;
  public _level: number;
  public _characterName: string;
  public _characterIndex: CharacterIndex;
  public _faceName: string;
  public _faceIndex: FaceIndex;
  public _battlerName: string;
  public _exp: { [classId: number]: number };
  public _skills: number[];
  public _equips: Game_Item[];
  public _actionInputIndex: number;
  public _lastMenuSkill: Game_Item;
  public _lastBattleSkill: Game_Item;
  public _lastCommandSymbol: string;
}

export { Game_Character };
