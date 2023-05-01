export type DrawType =
  | 'freeLine'
  | 'straightLine'
  | 'rectangle'
  | 'ellipse'
  | 'arrow';
export type DrawColor = string;
export type LineWidth = number;
export type Position = { x: number; y: number };

export interface DrawOption {
  type?: DrawType;
  color?: DrawColor;
  lineWidth?: LineWidth;
  lineCap?: CanvasLineCap;
}

export interface Figure {
  render(ctx: CanvasRenderingContext2D): void;
  draw(position: Position): void;
  positions: Position[];
  drawOption: DrawOption;
}

export interface DrawHistory {
  drawOption: DrawOption;
  positions: Position[];
}
