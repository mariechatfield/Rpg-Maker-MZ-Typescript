import { Sprite } from "../rmmz_core";
import { Game_Battler } from "../rmmz_objects";

declare class Sprite_StateIcon extends Sprite {
  public _battler: Game_Battler | null;
  public _iconIndex: number;
  public _animationCount: number;
  public _animationIndex: number;

  public initMember(): void;
  public loadBitmap(): void;
  public setup(): void;

  public animationWait(): number;
  public shouldDisplay(): boolean;
  public updateIcon(): void;
  public updateFrame(): void;
}
