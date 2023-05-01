import { DrawHistory, DrawOption, Figure } from './types';
import FreeLine from './Figure/FreeLine';

/**
 * @TODO:
 * 그리기 도형 추가
 * undo, redo
 * touch 디바이스 지원
 */
export interface PainterOption {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  drawOption?: DrawOption;
}

export default class Painter {
  private _canvas: HTMLCanvasElement;
  private _drawOption: DrawOption;
  private _ctx: CanvasRenderingContext2D;
  private _drawHistory: DrawHistory[] = [];
  private _figure: Figure | undefined;

  constructor({ canvas, width, height, drawOption }: PainterOption) {
    this._canvas = canvas;
    if (!(this._ctx = canvas.getContext('2d')!)) {
      throw new Error('2d context not supported');
    }
    this._canvas.width = width;
    this._canvas.height = height;
    this._drawOption = { ...drawOption };
    this._ctx = canvas.getContext('2d')!;

    this._attachEvent();
  }

  get drawOption() {
    return this._drawOption;
  }

  private _attachEvent() {
    const events = [
      this._canvas.addEventListener('mousedown', (event) => {
        this._startDraw(event);
      }),
      this._canvas.addEventListener('mousemove', (event) => {
        this._drawing(event);
      }),
      this._canvas.addEventListener('mouseup', (event) => {
        this._endDraw(event);
      }),
    ];
  }

  private _startDraw(event: MouseEvent) {
    const { clientX: x, clientY: y } = event;
    this._figure = this._createFigure(this.drawOption);
    this._figure.draw(this._ctx, { x, y }, 'start');
  }

  private _drawing(event: MouseEvent) {
    if (!this._figure) return;
    const { clientX: x, clientY: y } = event;
    this._figure.draw(this._ctx, { x, y });
  }

  private _endDraw(event: MouseEvent) {
    if (!this._figure) return;
    this._drawHistory.push({
      drawOption: this._figure.drawOption,
      positions: this._figure.positions,
    });
    // this._figure.render(this._ctx);
    this._figure = undefined;
  }

  private _createFigure(drawOption: DrawOption) {
    return new FreeLine(drawOption);
  }
}
