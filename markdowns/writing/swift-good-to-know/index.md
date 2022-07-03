---
title: 백준에서 사용한 Swift 함수와 구문들
subtitle: 생각날 때마다 추가 예정!
date: 2021-11-01
---

``` {class="language-swift"}
print(#"""
\    /\
 )  ( ')
(  /  )
 \(__)|
"""#)
```
*탈출문자 포함된 여러줄 문자열 출력하기*

``` {class="language-swift"}
Character("a").asciiValue!
```
*특정 문자의 아스키 값 알기.*

문자열로 시도하면 Character 초기화 중 에러 발생, 이모티콘 같이 아스키 코드 없는 값으로 시도하면 nil 반환. 


``` {class="language-swift"}
String(repeating: "*", count: i)
```
*반복되는 문자열 출력하기.*

``` {class="language-swift"}
while let input = readLine()?.split(separator: " ").map({ Int($0)! }) {
    print(input[0]+input[1])
}
```
*EOF까지 입력 받기.*

``` {class="language-swift"}
let str = "Hello"
print(str.utf8) 
// Hello
print(Array(str.utf8)) 
// [72, 101, 108, 108, 111]
print(Array(str.unicodeScalars).map(\.value)) 
// [72, 101, 108, 108, 111]
```
*String을 아스키 배열로 표현하기*

사실 utf8이든 utf16이든 뭐든 아스키 부분은 일치하는지 코테볼 때는 괜찮겠지만 [자세한 사항](https://shyi0200.tistory.com/m/28)도 알아보면 좋을 듯!

``` {class="language-swift"}
// typealias UnicodeScalar = Unicode.Scalar
Character(UnicodeScalar(72))
```
*아스키에서 char로 변환하기* 

Unicode.Scalar는 UInt8의 이니셜라이져와 다르게 Int의 이니셜라이져는 실패 가능하다는 점 주의! 문자열 관련 문제 풀 떄 이게 왜 되지? 궁금해했는데 알고보니 다른 문자열 내장 함수가 UInt8을 뱉어서 이니셜라이져 실패 안하고 문제 없이 넘어간 것이었다,,,ㅎ

``` {class="language-swift"}
import Foundation
print(String(format: "%d%02d", hh, ww))
```
*C-style 문자열 포맷팅. import Foundation 잊지 말기!!!*

``` {class="language-swift"}
for radians in stride(from: 0.0, to: .pi * 2 by: .pi / 2) {
    let degrees = Int(radians * 180 / .pi)
    print("Degrees: \(degrees), radians: \(radians)")
}
```
*stride(from:to:by:)*

stride 함수가 있다는 것을 자꾸 까먹어서 기록! 그런데 [이 문제](https://www.acmicpc.net/problem/1929) 풀어보니까 stride 함수가 느린 것 같기도 하다. 속도가 중요하면 수학적으로 좀 더 생각해서 for 문 쓰는게 나을지도?
