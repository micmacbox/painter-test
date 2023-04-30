export type DrawType =
  | 'freeLine'
  | 'straightLine'
  | 'rectangle'
  | 'ellipse'
  | 'arrow';
export type DrawColor = string;
export type DrawThickness = number;

export interface DrawOption {
  type?: DrawType;
  color?: DrawColor;
  thickness?: DrawThickness;
  lineCap?: CanvasLineCap;
}
