import _ from 'lodash';
import './sass/styles.scss';
import backgroundImage from './images/background.jpg';

function component() {
  const element = document.createElement('div');
  //   element.classList.add('background');

  // Image
  //   const myImage = new Image();
  //   myImage.src = backgroundImage;

  //   element.appendChild(myImage);

  //Print - Lazy Loading
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = (e) =>
    import('./modules/print').then((module) => {
      const print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());
