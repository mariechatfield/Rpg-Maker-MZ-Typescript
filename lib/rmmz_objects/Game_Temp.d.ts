import { RPG } from "../RPG";

declare class Game_Temp {
  public _isPlaytest: boolean;
  public _destinationX: number;
  public _destinationY: number;
  public _touchTarget: unknown;
  public _touchState: string;
  public _needBattleRefresh: boolean;
  public _commonEventQueue: unknown[];
  public _animationQueue: unknown[];
  public _balloonQueue: unknown[];
  public _lastActionData: number[];

  constructor();

  public initialize(): void;
  public isPlayTest(): boolean;
  public setDestination(x: number, y: number): void;
  public clearDestination(): void;
  public isDestinationValid(): boolean;
  public destinationX(): number;
  public destinationY(): number;
  public setTouchState(target: unknown, state: string): void;
  public clearTouchState(): void;
  public touchTarget(): unknown;
  public touchState(): string;
  public requestBattleRefresh(): void;
  public clearBattleRefreshRequest(): void;
  public isBattleRefreshRequested(): boolean;
  public reserveCommonEvent(commonEventId: number): void;
  public retrieveCommonEvent(): RPG.DataCommonEvent;
  public isCommonEventReserved(): boolean;
  public requestAnimation(
    targets: unknown,
    animationId: number,
    mirror?: boolean
  ): void;
  public retrieveAnimation(): unknown;
  public requestBalloon(target: unknown, balloonId: number): void;
  public retrieveBalloon(): unknown;
  public lastActionData(type: unknown): number;
  public setLastActionData(type: unknown, value: number): void;
  public setLastUsedSkillId(skillID: number): void;
  public setLastUsedItemId(itemID: number): void;
  public setLastSubjectActorId(actorID: number): void;
  public setLastSubjectEnemyIndex(enemyIndex: number): void;
  public setLastTargetActorId(actorID: number): void;
  public setLastTargetEnemyIndex(enemyIndex: number): void;
}

export { Game_Temp };
