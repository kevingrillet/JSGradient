# JSGradient
Gradient implementation in JavaScript.

## Usage ##

#### HTML ####
```html
<script type="text/javascript" src="gradient.js"></script>
```
#### JavaScript ####
```javascript
function res(){
  cGradient.width = window.innerWidth;
  cGradient.height = window.innerHeight;
};
res();
window.addEventListener('load', function() { res(); });
window.addEventListener('resize', function() { res(); });
var g = new Gradient(
  'cGradient', //idCanvas
  60, // fps (optional)
  [
    ['rgba(255,   0,   0, 0.75)', 'rgba(255,   0,   0, 0)', 100],
    ['rgba(255, 127,   0, 0.75)', 'rgba(255, 127,   0, 0)',  50],
    ['rgba(255, 255,   0, 0.75)', 'rgba(255, 255,   0, 0)',  50],
    ['rgba(  0, 255,   0, 0.75)', 'rgba(  0, 255,   0, 0)', 100],
    ['rgba(  0,   0, 255, 0.75)', 'rgba(  0,   0, 255, 0)', 100],
    ['rgba(127,   0, 255, 0.75)', 'rgba(127,   0, 255, 0)',  50]
  ]
);
```
