declare class Game_CharacterBase {
  public readonly x: number;
  public readonly y: number;

  public _animationCount: number;
  public _animationId: number;
  public _animationPlaying: boolean;
  public _balloonId: number;
  public _balloonPlaying: boolean;
  public _blendMode: number;
  public _bushDepth: number;
  public _characterIndex: number;
  public _characterName: string;
  public _direction: number;
  public _directionFix: boolean;
  public _isObjectCharacter: boolean;
  public _jumpCount: number;
  public _jumpPeak: number;
  public _moveFrequency: number;
  public _movementSuccess: boolean;
  public _moveSpeed: number;
  public _opacity: number;
  public _pattern: number;
  public _priorityType: number;
  public _realX: number;
  public _realY: number;
  public _stepAnime: boolean;
  public _stopCount: number;
  public _through: boolean;
  public _tileId: number;
  public _transparent: boolean;
  public _walkAnime: boolean;
  public _x: number;
  public _y: number;
}

export { Game_CharacterBase };
