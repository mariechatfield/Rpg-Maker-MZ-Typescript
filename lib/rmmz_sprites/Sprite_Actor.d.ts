import { Game_Battler } from "../rmmz_objects";
import { Sprite_Battler } from "../rmmz_sprites";

declare interface Motion {
  index: number;
  loop: boolean;
}

declare class Sprite_Actor extends Sprite_Battler {
  public readonly MOTIONS: Record<Game_Battler.MotionType, Motion>;

  private _battlerName: string;
  private _motion: Game_Battler.MotionType;
  private _motionCount: number;
  private _pattern: number;

  public createStateSprite(): void;

  public createShadowSprite(): void;
  public updateShadow(): void;

  public createWeaponSprite(): void;
  public setupWeaponAnimation(): void;

  public setupMotion(): void;
  public startMotion(motionType: Game_Battler.MotionType): void;
  public updateMotion(): void;
  public updateMotionCount(): void;
  public motionSpeed(): number;
  public refreshMotion(): void;
  public startEntryMotion(): void;
  public stepForward(): void;
  public stepBack(): void;
  public retreat(): void;

  public updateTargetPosition(): void;
  public shouldStepForward(): boolean;
}
