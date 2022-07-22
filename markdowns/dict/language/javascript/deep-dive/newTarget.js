function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
    }
    this.radius = radius;
}

console.log(Circle(10).radius); // 10
