import { DrawOption } from './types';

export interface PainterOption {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  drawOption?: DrawOption;
}

export default class Painter {
  private _canvas: HTMLCanvasElement;
  private _drawOption: DrawOption;

  constructor({ canvas, width, height, drawOption }: PainterOption) {
    this._canvas = canvas;
    this._canvas.width = width;
    this._canvas.height = height;
    this._drawOption = { ...drawOption };

    this._attachEvent();
  }

  get drawOption() {
    return this._drawOption;
  }

  private _attachEvent() {
    const events = [
      this._canvas.addEventListener('mousedown', () => {
        console.log('--->mousedown', this._drawOption);
      }),
      this._canvas.addEventListener('mousemove', () => {
        console.log('--->mousemove');
      }),
      this._canvas.addEventListener('mouseup', () => {
        console.log('--->mouseup');
      }),
    ];
  }
}
