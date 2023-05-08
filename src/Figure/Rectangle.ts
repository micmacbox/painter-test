import { DrawOption, DrawState, Figure, Position } from '../types';
export default class Rectangle implements Figure {
  positions: Position[];
  drawOption: DrawOption;

  constructor(drawOption: DrawOption) {
    this.drawOption = drawOption;
    this.positions = [];
  }

  draw(ctx: CanvasRenderingContext2D, position: Position, state?: DrawState) {
    this.positions.push(position);

    ctx.lineWidth = this.drawOption.lineWidth || 3;
    ctx.strokeStyle = this.drawOption.color || 'red';

    const { x: startX, y: startY } = this.positions[0];

    switch (state) {
      case 'start':
        ctx.beginPath();
        break;
      case 'end':
        ctx.strokeRect(
          startX,
          startY,
          -(startX - position.x),
          -(startY - position.y)
        );
        break;
      default:
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        break;
    }
  }

  render(ctx: CanvasRenderingContext2D) {}
}
