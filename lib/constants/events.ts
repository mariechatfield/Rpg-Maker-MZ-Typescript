export enum EventTrigger {
  ActionButton = 0,
  PlayerTouch = 1,
  EventTouch = 2,
  Autorun = 3,
  Parallel = 4,
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
