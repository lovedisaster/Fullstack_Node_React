export default function(){
    window.requestAnimationFrame(step);    
}

var start = null;
function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  $('#loading-canvas').fadeOut('1000');
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

