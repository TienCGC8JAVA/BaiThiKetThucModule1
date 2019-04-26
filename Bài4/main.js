const vcs = document.getElementById("demo");
const ctx = vcs.getContext("2d");

function Rectangle(positionX, positionY, width, height, color) {
  this.positionX = positionX;
  this.positionY = positionY;
  this.width = width;
  this.height = height;
  this.color = color;
  this.render = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    ctx.fill();
  }
}

let rectangle = new Rectangle(20, 20, 200, 100, '#000000');
rectangle.render();