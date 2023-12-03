/**
 * Sprite sheet positions for a single character.
 *
 * Each row is used to animation the character
 * when facing a specific direction.
 *
 * The three columns will be animated in a ping-pong
 * style (so the middle column may be the most "neutral"
 * but it depends on your sprite sheet).
 *
 *   1   2   3      <--- character facing down (front to viewer)
 *   4   5   6      <--- character facing left
 *   7   8   9      <--- character facing right
 *  10  11  12      <--- character facing up (back to viewer)
 *
 */
export enum CharacterSpritesheet {
  Down_1 = 1,
  Down_2 = 2,
  Down_3 = 3,
  Left_1 = 4,
  Left_2 = 5,
  Left_3 = 6,
  Right_1 = 7,
  Right_2 = 8,
  Right_3 = 9,
  Up_1 = 10,
  Up_2 = 11,
  Up_3 = 12,
}

export enum CharacterIndex {
  TopRow_1 = 1,
  TopRow_2 = 2,
  TopRow_3 = 3,
  TopRow_4 = 4,
  BottomRow_1 = 5,
  BottomRow_2 = 6,
  BottomRow_3 = 7,
  BottomRow_4 = 8,
}

export enum AnimationPattern {
  Frame1 = 1,
  Frame2 = 2,
  Frame3 = 3,
}

export enum Direction {
  Down = 2,
  Left = 4,
  Right = 6,
  Up = 8,
}

export enum FaceIndex {
  TopRow_1 = 1,
  TopRow_2 = 2,
  TopRow_3 = 3,
  TopRow_4 = 4,
  BottomRow_1 = 5,
  BottomRow_2 = 6,
  BottomRow_3 = 7,
  BottomRow_4 = 8,
}
