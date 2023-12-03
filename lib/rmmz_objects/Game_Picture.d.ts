declare class Game_Picture {
  public _name: string;
  public _origin: number;
  public _x: number;
  public _y: number;
  public _scaleX: number;
  public _scaleY: number;
  public _opacity: number;
  public _blendMode: number;
  public _tone: number[];
  public _angle: number;
  public _targetScaleX: number;
  public _targetScaleY: number;
  public _targetOpacity: number;
  public _wholeDuration: number;
  public _easingType: number;
  public _easingExponent: number;
  public _toneTarget: number[];
  public _toneDuration: number;
  public _rotationSpeed: number;

  constructor();

  public initialize(): void;
  public name(): string;
  public origin(): number;
  public x(): number;
  public y(): number;
  public scaleX(): number;
  public scaleY(): number;
  public opacity(): number;
  public blendMode(): number;
  public tone(): number;
  public angle(): number;
  public initBasic(): void;
  public initTarget(): void;
  public initTone(): void;
  public initRotation(): void;
  public show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;
  public move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    easingType: number
  ): void;
  public rotate(speed: number): void;
  public tint(tone: number[], duration: number): void;
  public update(): void;
  public updateMove(): void;
  public updateTone(): void;
  public updateRotation(): void;
  public applyEasing(current: number, target: number): void;
  public calcEasing(t: number): number;
  public easeIn(t: number, exponent: number): number;
  public easeOut(t: number, exponent: number): number;
  public easeOut(t: number, exponent: number): number;
  public easeInOut(t: number, exponent: number): number;
}

export { Game_Picture };
