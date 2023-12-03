declare class Game_Variables {
  public _data: number[];
  constructor();

  public initialize(): void;
  public clear(): void;
  public value(variableId: number): number;
  public setValue(variableId: number, value: number | string): void;
  public onChange(): void;
}

export { Game_Variables };
