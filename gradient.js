"use strict";
class Ball {
  constructor(canvas, context, color, color2, radius) {
    function getRandomInt(min, max) {
      return Math.floor(min + Math.random() * Math.floor(max - min));
    }

    function getRandomD(max) {
      return (Math.random() * max * 2) - max;
    }
    this.canvas = canvas;
    this.context = context;
    this.radius = radius;
    this.scr = Math.max(this.canvas.width, this.canvas.height);
    this.color = color || 'rgba(255, 255, 255, 1)';
    this.color2 = color2 || 'rgba(0, 0, 0, 0)';
    this.x = getRandomInt(this.radius, this.canvas.width - this.radius);
    this.y = getRandomInt(this.radius, this.canvas.height - this.radius);
    this.dx = getRandomD(5);
    this.dy = getRandomD(5);
  }
  move() {
    this.moveTo(this.x + this.dx, this.y + this.dy);
  }
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
  changeDirectionIfNecessary(x, y) {
    if (x < 0 + this.radius || x > this.canvas.width - this.radius) {
      this.dx = -this.dx;
    }
    if (y < 0 + this.radius || y > this.canvas.height - this.radius) {
      this.dy = -this.dy;
    }
  }
  draw() {
    this.changeDirectionIfNecessary(this.x, this.y);
    this.move();
    this.context.beginPath();
    //this.context.arc(this.x, this.y, this.scr / 2, 0, 2 * Math.PI);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    var grd = this.context.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.scr * .7);
    grd.addColorStop(0, this.color);
    grd.addColorStop(1, this.color2);
    this.context.fillStyle = grd;
    this.context.fill();
    this.context.closePath();
  }
}

class Gradient {
  constructor(idCanvas, fps, ballCfg) {
    var self = this;
    this.balls = [];
    this.canvas = document.getElementById(idCanvas);
    this.context = this.canvas.getContext('2d');
    this.number = ballCfg.length || 3;
    this.fps = fps || 30;
    for (var i = 0; i < this.number; i++) {
      this.balls.push(new Ball(this.canvas, this.context, ballCfg[i][0], ballCfg[i][1], ballCfg[i][2]));
    }
    this.interval = setInterval(function() {
      self.draw();
    }, 1000 / this.fps);
  }
  draw() {
    //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < this.number; i++) {
      this.balls[i].draw();
    }
    this.context.filter = 'blur(10px)';
  }
}