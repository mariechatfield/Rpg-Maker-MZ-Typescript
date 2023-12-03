import { Sprite } from "../rmmz_core";
import { Game_Battler } from "../rmmz_objects";

declare class Sprite_StateIcon extends Sprite {
  private _battler: Game_Battler | null;
  private _iconIndex: number;
  private _animationCount: number;
  private _animationIndex: number;

  public initMember(): void;
  public loadBitmap(): void;
  public setup(): void;

  public animationWait(): number;
  public shouldDisplay(): boolean;
  public updateIcon(): void;
  public updateFrame(): void;
}
