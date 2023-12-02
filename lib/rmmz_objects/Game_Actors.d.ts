import { Game_Actor } from ".";

declare class Game_Actors {
  constructor();

  public initialize(): void;

  public actor(actorId: number): Game_Actor | null;
}

export { Game_Actors };
