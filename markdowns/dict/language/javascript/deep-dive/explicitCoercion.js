const printAll = arr => arr.forEach(x => console.log(x));

printAll([
    '문자열 타입으로 변환',
    String(1),
    String(NaN),

    (-Infinity).toString(),
    (printAll).toString(),

    1 + '',
    true + '',

    '숫자 타입으로 변환',
    Number("hello"), // NaN

    Number(true),
    Number(false),

    parseInt('-1'),

    +'0',
    +'3.14',

    '123' * 1,
    false * 1,

    '불리언 타입으로 변환',
    Boolean('hello'),
    Boolean(0),
    !![],
    !!{},
    !![1, 2]
])
