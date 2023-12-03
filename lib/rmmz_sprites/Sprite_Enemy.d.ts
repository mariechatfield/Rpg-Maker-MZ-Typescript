import { Game_Battler } from "../rmmz_objects";
import { Sprite_Battler, Sprite_StateIcon } from "../rmmz_sprites";

declare class Sprite_Enemy extends Sprite_Battler {
  public _enemy: Game_Battler | null;
  public _appeared: boolean;
  public _battlerName: string | null;
  public _battlerHue: number;
  public _effectType: Game_Battler.EffectType | null;
  public _effectDuration: number;
  public _shake: number;
  public _stateIconSprite: Sprite_StateIcon;

  public loadBitmap(name: string): void;

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
