function Circle(radius) {
    this.radius = radius;
}

const wrongCircle = Circle(14);
// 일반함수로 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 14