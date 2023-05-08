import Painter from '../src';
import { DrawOption } from '../src/types';

const figure = document.getElementById('figure') as HTMLSelectElement;
const color = document.getElementById('color') as HTMLInputElement;
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

let drawOption: DrawOption = {
  type: 'freeLine',
  color: 'red',
  lineWidth: 3,
  lineCap: 'butt',
};
const painter = new Painter({
  canvas,
  width: 600,
  height: 600,
  drawOption,
});

figure.addEventListener('change', (e) => {
  Object.assign(drawOption, { type: figure.selectedOptions[0].value });
  painter.updateOption(drawOption);
});

color.addEventListener('change', () => {
  Object.assign(drawOption, { color: color.value });
  painter.updateOption(drawOption);
});
