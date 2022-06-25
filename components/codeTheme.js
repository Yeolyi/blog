// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/tomorrow.js
// 여기서는 왜 폰트 적용이 안됨??
export default {
    "code[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "none",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
    },
    "pre[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "none",
        "fontSize": "0.8em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "2em",
        "margin": "3em 0",
        "overflow": "auto",
        "borderRadius": "5px",
        "background": "#2E3134",
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2d2d2d",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    // 주석
    "comment": {
        "color": "#6C906C"
    },
    "block-comment": {
        "color": "#6C906C"
    },
    "prolog": {
        "color": "#5DD8FF"
    },
    "doctype": {
        "color": "#5DD8FF"
    },
    "cdata": {
        "color": "#5DD8FF"
    },
    // 괄호, 중괄호 등등
    "punctuation": {
        "color": "#F2D9BB"
    },
    "tag": {
        "color": "#e2777a"
    },
    "attr-name": {
        "color": "#C1845D"
    },
    // 자바 package 뒤에 어쩌구
    "namespace": {
        "color": "#e2777a"
    },
    "deleted": {
        "color": "#e2777a"
    },
    "function-name": {
        "color": "#D9936A"
    },
    // 부울 값
    "boolean": {
        "color": "#D9936A"
    },
    // 수
    "number": {
        "color": "#8E81BE"
    },
    // 함수/메소드
    "function": {
        "color": "#6EB688"
    },
    "property": {
        "color": "#f8c555"
    },
    // 클래스 이름
    "class-name": {
        "color": "#6EB688"
    },
    "constant": {
        "color": "#f8c555"
    },
    "symbol": {
        "color": "#f8c555"
    },
    "selector": {
        "color": "#cc99cd"
    },
    "important": {
        "color": "#cc99cd",
        "fontWeight": "bold"
    },
    "atrule": {
        "color": "#cc99cd"
    },
    // 언어별 할당된? 키워드
    "keyword": {
        "color": "#FDCA73"
    },
    "builtin": {
        "color": "#cc99cd"
    },
    // 문자열
    "string": {
        "color": "#F6844A"
    },
    // 문자
    "char": {
        "color": "#219FC5"
    },
    "attr-value": {
        "color": "#C1845D"
    },
    "regex": {
        "color": "#7ec699"
    },
    "variable": {
        "color": "#7ec699"
    },
    "operator": {
        "color": "#67cdcc"
    },
    "entity": {
        "color": "#67cdcc",
        "cursor": "help"
    },
    "url": {
        "color": "#67cdcc"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "green"
    }
}