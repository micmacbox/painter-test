interface PainterOptions {
  canvas: HTMLCanvasElement;
}
export default class Painter {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D | null;
  constructor({ canvas }: PainterOptions) {
    this._canvas = canvas;
    if (!(this._ctx = canvas.getContext('2d'))) {
      throw new Error('2d context not supported');
    }
  }
}
