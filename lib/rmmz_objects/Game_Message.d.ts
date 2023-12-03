declare class Game_Message {
  public _texts: string[];
  public _choices: string[];
  public _speakerName: string;
  public _faceName: string;
  public _faceIndex: number;
  public _background: number;
  public _positionType: number;
  public _choiceDefaultType: number;
  public _choiceCancelType: number;
  public _choiceBackground: number;
  public _choicePositionType: number;
  public _numInputVariableId: number;
  public _numInputMaxDigits: number;
  public _itemChoiceVariableId: number;
  public _itemChoiceItypeId: number;
  public _scrollMode: boolean;
  public _scrollSpeed: number;
  public _scrollNoFast: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  public _choiceCallback: Function;

  constructor();

  public initialize(): void;
  public clear(): void;
  public choices(): object[]; // Tested all types can think of and only object returns true to instanceof
  public speakerName(): string;
  public faceName(): string;
  public faceIndex(): number;
  public background(): number;
  public positionType(): number;
  public choiceDefaultType(): number;
  public choiceCancelType(): number;
  public choiceBackground(): number;
  public choicePositionType(): number;
  public numInputVariableId(): number;
  public numInputMaxDigits(): number;
  public itemChoiceVariableId(): number;
  public itemChoiceItypeId(): number;
  public scrollMode(): boolean;
  public scrollSpeed(): number;
  public scrollNoFast(): boolean;
  public add(text: string): void;
  public setSpeakerName(speakerName: string): void;
  public setFaceImage(faceName, faceIndex): void;
  public setBackground(background: number): number;
  public setPositionType(positionType: number): number;
  public setChoices(
    choices: string[],
    defaultType: number,
    cancelType: number
  ): void;
  public setChoiceBackground(background: number): void;
  public setChoicePositionType(positionType: number): void;
  public setNumberInput(variableId: number, maxDigits: number): void;
  public setItemChoice(variableId: number, itemType: number): void;
  public setScroll(speed: number, noFast: boolean): void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  public setChoiceCallback(callback: Function): void;
  public onChoice(n: number): void;
  public hasText(): boolean;
  public isChoice(): boolean;
  public isNumberInput(): boolean;
  public isItemChoice(): boolean;
  public isBusy(): boolean;
  public newPage(): void;
  public allText(): string;
  public isRTL(): boolean;
}
export { Game_Message };
