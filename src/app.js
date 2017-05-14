import './style.scss';
import imgURL from './dreyko.png';
import component from './commons';

document.body.appendChild(component(['Hello', 'webpack']));

const img = document.createElement('img');
img.src = imgURL;
img.style.backgroundColor = "#2B3A42";
img.style.padding = "20px";
img.width = 32;
document.body.appendChild(img);
