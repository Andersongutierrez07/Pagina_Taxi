particlesJS("particles-js", {
  "particles": {
    "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#f1c40f" },
    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000" } },
    "opacity": { "value": 0.45, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 140, "color": "#f1c40f", "opacity": 0.35, "width": 1 },
    "move": { "enable": true, "speed": 1.6, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
