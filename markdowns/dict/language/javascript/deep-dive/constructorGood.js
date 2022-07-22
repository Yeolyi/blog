function Circle(radius) {
    this.radius = radius;
    this.getSize = function() {
        return Math.PI * this.radius * this.radius / 2;
    }
}

const circle1 = new Circle(5);
console.log(circle1.getSize()); // 39.27...
const circle2 = new Circle(10); // 157.08...
console.log(circle2.getSize());
