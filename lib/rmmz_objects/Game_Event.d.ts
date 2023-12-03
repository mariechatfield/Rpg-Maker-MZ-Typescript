import { Game_Character } from ".";
import { RPG } from "../RPG";
import { EventTrigger } from "../constants/events";
import { PageMoveType } from "../constants/page";
import { AnimationPattern, Direction } from "../constants/sprites";

declare class Game_Event extends Game_Character {
  public _mapId: number;
  public _eventId: number;

  public _moveType: PageMoveType;
  public _trigger: EventTrigger;
  public _starting: boolean;
  public _erased: boolean;
  public _pageIndex: number;
  public _originalPattern: AnimationPattern;
  public _originalDirection: Direction;
  public _prelockDirection: Direction;
  public _locked: boolean;

  public initialize(mapId: number, eventId: number): void;

  public event(): RPG.Event;

  public refresh(): void;
}

export { Game_Event };
