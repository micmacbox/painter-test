import Painter from '../src';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const painter = new Painter({
  canvas,
  width: 600,
  height: 600,
  drawOption: {
    type: 'freeLine',
    color: 'red',
    thickness: 3,
    lineCap: 'butt',
  },
});
