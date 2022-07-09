const printAll = arr => arr.forEach(x => console.log(x));

printAll([
    '문자열 타입으로 변환',
    // 피연산자 중 하나 이상이 문자열이면 문자열 연결 연산자로 동작
    1 + '2',
    0 + '',
    -0 + '',
    -1 + '',
    NaN + '',
    -Infinity + '',
    true + '',
    null + '',
    undefined + '',
    // Symbol() + '', TypeError: Cannot convert a Symbol value to a string
    Math + '', // [object Math]
    Array + '', // function Array() { [native code] }
    printAll + '', // arr => arr.forEach(x => console.log(x))
    [1, 2].forEach, // [Function: forEach]

    '숫자 타입으로 변환',
    +'',
    +'1',
    +'hello',
    +true,
    +false,
    +null,
    +undefined,
    // +Symbol(), TypeError: Cannot convert a Symbol value to a number
    +{},
    +[],
    +[0], // 0??
    +[3], // 3???
    +[0, 1], // NaN????
    +printAll, // NaN

    "불리언 타입으로 변환",
    !false,
    !undefined,
    !null,
    !0, !-0,
    !NaN,
    !'',
    // 이외는 전부 true로 평가되는 Truty값
]);
