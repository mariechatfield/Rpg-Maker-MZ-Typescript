import { Game_Battler } from "../rmmz_objects";
import { Sprite_Battler, Sprite_StateIcon } from "../rmmz_sprites";

declare class Sprite_Enemy extends Sprite_Battler {
  private _enemy: Game_Battler | null;
  private _appeared: boolean;
  private _battlerName: string | null;
  private _battlerHue: number;
  private _effectType: Game_Battler.EffectType | null;
  private _effectDuration: number;
  private _shake: number;
  private _stateIconSprite: Sprite_StateIcon;

  public createStateIconSprite(): void;
  public updateStateSprite(): void;

  public initVisibility(): void;

  public setupEffect(): void;
  public startEffect(): void;
  public updateEffect(): void;
  public isEffecting(): boolean;

  public startAppear(): void;
  public startDisappear(): void;
  public startWhiten(): void;
  public startBlink(): void;
  public startCollapse(): void;
  public startBossCollapse(): void;
  public startInstantCollapse(): void;

  public updateAppear(): void;
  public updateDisappear(): void;
  public updateWhiten(): void;
  public updateBlink(): void;
  public updateCollapse(): void;
  public updateBossCollapse(): void;
  public updateInstantCollapse(): void;

  public revertToNormal(): void;
}
