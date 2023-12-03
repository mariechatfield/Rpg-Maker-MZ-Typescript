export enum EventTrigger {
  ActionButton = 0,
  PlayerTouch = 1,
  EventTouch = 2,
  Autorun = 3,
  Parallel = 4,
}

export enum PageMoveType {
  Fixed = 0,
  Random = 1,
  Approach = 2,
  Custom = 3,
}

export enum PageMoveSpeed {
  Slower_x8 = 0,
  Slower_x4 = 1,
  Slower_x2 = 2,
  Normal = 3,
  Faster_x2 = 4,
  Faster_x4 = 5,
}

export enum PageMoveFreq {
  Lowest = 0,
  Lower = 1,
  Normal = 2,
  Higher = 3,
  Highest = 4,
}

export enum CharacterIndex {
  TopRow_1 = 0,
  TopRow_2 = 1,
  TopRow_3 = 2,
  TopRow_4 = 3,
  BottomRow_1 = 4,
  BottomRow_2 = 5,
  BottomRow_3 = 6,
  BottomRow_4 = 7,
}

export enum AnimationPattern {
  Frame1 = 0,
  Frame2 = 1,
  Frame3 = 2,
}

export enum Direction {
  Down = 2,
  Left = 4,
  Right = 6,
  Up = 8,
}

export enum FaceIndex {
  TopRow_1 = 0,
  TopRow_2 = 1,
  TopRow_3 = 2,
  TopRow_4 = 3,
  BottomRow_1 = 4,
  BottomRow_2 = 5,
  BottomRow_3 = 6,
  BottomRow_4 = 7,
}

enum Menu {
  ShowTextBox = 101,
  LineOfText = 401,
}

enum GameProgression {
  ControlSwitches = 121,
  ControlVariables = 122,
}

enum FlowControl {
  If = 111,
  Else = 411,
  End = 412,
}

enum Party {
  ChangeMember = 129,
}

enum Actor {}
enum Movement {}

enum Character {
  EraseEvent = 214,
}

enum Picture {}
enum Timing {}
enum Screen {}
enum AV {}

enum SceneControl {
  StartBattle = 301,
}

enum System {}
enum Map {}

enum Battle {
  IfWin = 601,
  IfEscape = 602,
  IfLose = 603,
  End = 604,

  EnemyRecoverAll = 334,
}

enum Advanced {}

export const EventCommand = {
  Actor,
  Advanced,
  AV,
  Battle,
  Character,
  FlowControl,
  GameProgression,
  Map,
  Menu,
  Movement,
  Party,
  Picture,
  SceneControl,
  Screen,
  System,
  Timing,
};
