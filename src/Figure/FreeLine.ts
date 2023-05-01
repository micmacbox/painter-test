import { DrawOption, Figure, Position } from '../types';
export default class FreeLine implements Figure {
  positions: Position[];
  drawOption: DrawOption;

  constructor(drawOption: DrawOption) {
    this.drawOption = drawOption;
    this.positions = [];
  }

  draw(position: Position) {
    this.positions.push(position);
  }
  render(ctx: CanvasRenderingContext2D) {
    // 배열의 첫번째 점으로 이동
    ctx.moveTo(this.positions[0].x, this.positions[0].y);

    // 배열의 나머지 점들로 선을 그리기
    for (let i = 1; i < this.positions.length; i++) {
      ctx.lineTo(this.positions[i].x, this.positions[i].y);
    }

    // 선 스타일 설정 후 그리기
    ctx.lineWidth = this.drawOption.lineWidth || 3;
    ctx.strokeStyle = this.drawOption.color || 'red';

    ctx.stroke();
  }
}
