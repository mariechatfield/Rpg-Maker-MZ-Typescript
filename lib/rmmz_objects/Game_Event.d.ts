import { Game_Character } from ".";

declare class Game_Event extends Game_Character {
  public initialize(mapId: number, eventId: number): void;
}

export { Game_Event };
