---
title: 동시성 제어의 고전적 문제들
---

## Bounded-Buffer Problem

Producer-Comsumer 문제에서 버퍼를 사용. 생산자는 버퍼를 채우고 소비자는 버퍼를 비운다. 

이진 세마포어인 뮤텍스를 사용해서 버퍼 풀에 접근할 때 상호 배제를 보증한다. empty 세마포어는 n으로 초기화되고 full 세마포어는 0으로 초기화된다. 

```java
생산자 프로세스
 do {
     ...
     아이템을 생산한다.
     ...
     wait(empty);  //버퍼에 빈 공간이 생길 때까지 기다린다.
     wait(mutex); //임계 구역에 진입할 수 있을 때까지 기다린다.
     ...
     아이템을 버퍼에 추가한다.
     ...
     signal(mutex); //임계 구역을 빠져나왔다고 알려준다.
     signal(full);  //버퍼에 아이템이 있다고 알려준다.
 } while (1);

소비자 프로세스
  do {
     wait(full);    //버퍼에 아이템이 생길 때까지 기다린다.
     wait(mutex);
     ...
     버퍼로부터 아이템을 가져온다.
     ...
     signal(mutex);
     signal(empty); //버퍼에 빈 공간이 생겼다고 알려준다.
     ...
     아이템을 소비한다.
     ...
 } while (1);
```

>  It is important to note here that though mutex seems to work as a semaphore with value of 1 (binary semaphore), but there is difference in the fact that mutex has ownership concept. **Ownership** means that mutex can only be "incremented" back (set to 1) by the same process that "decremented" it (set to 0), and all other tasks wait until mutex is available for decrement (effectively meaning that resource is available), which ensures mutual exclusivity and avoids deadlock. Thus using mutexes improperly can stall many processes when exclusive access is not required, but mutex is used instead of semaphore.

[Bounded buffer, order of mutex vs empty. which comes first](https://stackoverflow.com/questions/23395545/bounded-buffer-order-of-mutex-vs-empty-which-comes-first)
왜 empty가 먼저일까? 버퍼가 가득 차있을 때 생산자 프로세스가 실행된다고 하자. 해당 프로세스는 mutex를 얻고 버퍼에 빈 공간이 생기기를 기다린다. 하지만 mutex를 차지한 채로 기다리기 때문에 소비자 프로세스는 버퍼를 비울 수 없게된다. 

근데 이거 signal 순서도 맞아야 하나???

서로 대칭 구조가 맞아야 한다. 요즘엔 이렇게 어려운건 안쓴다고 한다...

## Readers-Writers Problem

공유 데이터에 대해 누구는 읽기만 하고 누구는 읽고 쓰고 할 수 있다. ex. 여러 프로세스들에서 공유되는 데이터베이스. 

그렇다면 두 개 이상의 reader가 동시에 접근한다고 문제가 발생하지는 않음. Reader만 있는데 기다리게 하면 성능에 좋지 않다. 반대로 writer는 동시에 접근하면 난리남. writer + reader 조합도 마찬가지.

**우선순위를 통한 분류**. 두 경우 모두 starvation 문제가 발생한다. 

- **first readers-writers problem**: readers-preference. Writer가 대기하고있다고 reader도 그 뒤에서 대기하지 않는다.  
- **second readers-writers problem**: writers-preference. Writer가 대기하고 있으면 새로운 reader는 읽지 못한다. 

## 구현

두 개의 뮤텍스를 사용한다. rw_mutex는 reader writer 공통으로 사용되며 mutex는 read_count를 업데이트할 때 상호 배제를 위해 사용된다. read_count는 몇 개의 프로세스가 현재 객체를 읽고 있는지 기록한다. 

임계 영역에 writer가 있고 n명의 reader가 대기중이면 한 reader는 rw_mutex에 큐를 잡고 n-1명의 reader는 mutex에 큐를 잡는다. 또한 writer가 signal(rw_mutex)를 하면 reader 전부나 한 명을 재개시킬 수 있다. 선택은 스케줄러의 몫. 여기서 스케줄러의 선택에 따라 first와 second가 갈린다. 

아래는 readers-prefernce. 1차에 대한 구현. [참고](https://m.blog.naver.com/hirit808/221786966867)

시간 나면 [위키](https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem)에서 구현들을 살펴보자. 

```c
// Writer process
while (true) {
    wait (rw_mutex);
    // perform writing
    signal(rw_mutex);
}

// reader process
while (true) {
    wait(mutex);
    read_count++;
    if (read_count == 1)
        wait(rw_mutex);
    signal(mutex);

    // perform read

    wait(mutex);
    read_count--;
    if (read_count == 0)
        signal(rw_mutex);
    signal(mutex);
}
```

사실 이 문제의 솔루션은 이미 일반화가 되어 **reader-writer lock**으로 제공된다. 락에 read와 write 모드가 있어 각각 필요한 것을 얻어야 하는 듯. 

## PThread solution to the Bounded_Buffer Problem

!@bounded_buffer.c@!

뺄 것도 없는데 0으로 자꾸 나온건 mac에서 deprecated된 함수를 사용했기 때문. sem_wait가 -1이 반환됨. [링크](https://stackoverflow.com/questions/26797126/why-sem-wait-doesnt-wait-semaphore-on-mac-osx)

## Java solution to the Bounded-Buffer Problem

!@BoundedBuffer.java@!

!@CashBox.java@!

!@ProdRunner.java@!

!@ConsRunner.java@!

## Java solution to the first Readers-Writers Problem

!@SharedDB.java@!

## Dining-Philosophers Problem

세마포어로 상호 배제는 간단하게 해결할 수 있다. 하지만 이 경우 모두가 왼쪽을 집으면 데드락이 발생한다. 

**데드락 해결법**

- Allow at most four philosophers to be sitting simultaneously at the table?
- 양쪽이 모두 가능할 때만 집게 하기. 
- 비대칭적인 해결책
    - 홀수는 왼쪽 먼저 집고, 짝수는 오른쪽을 먼저 집기. 
    - 둘 중 하나는 무조건 밥을 먹을 수 있음. 

하지만 이 방법들은 기아까지 해결해주지는 못한다. 사실 데드락을 방지하는 비용은 어마어마해서 발생하면 해결하는 느낌으로 가는 중. 

**Moniter Solution**

양쪽 젓가락이 가능할 때만 집자. 철학자들의 상태를 thinking, hungry, eating으로 나눠보자. 철학자들은 양쪽 이웃이 eating하지 않을때만 스스로의 상태를 eating으로 바꿀 수 있다. Conditional variable은 hungry할 때 대기하는 도구로 사용하자. 

> A **conditional variable** in operating system programming is a special kind of variable that is used to determine if a certain condition has been met or not. It is used to communicate between threads when certain conditions become true.
>
> A conditional variable is like a queue. A thread stops its execution and enters the queue if the specified condition is not met. Once another thread makes that condition true, it sends a signal to the leading thread in the queue to continue its execution.

Atomic 변수와의 차이점. 

> The difference is that a condition variable doesn't consume CPU cycles while another thread is waiting for it. If you use an atomic variable for synchronization you have to keep checking its value in a loop.

!@pthread_dining_philosopher.c@!

pthread_create가 비동기적으로 되나?? id값을 따로 안빼주면 중복되고 난리도 아니네 ㅠ

## Thread-Safe한 동시성 어플리케이션

동시성 어플리케이션은 멀티코어 시스템에서 좋은 성능을 보이지만 race condition이나 데드락과 같은 liveness hazard의 위험성이 있다. 

Thread-safe한 개발을 위해 다양한 접근법이 있다. 

- Transational Memory: Transactional memory attempts to simplify concurrent programming by allowing a group of load and store instructions to execute in an atomic way.
- OpenMP: 앞에서 써봄. 
- Functional Programming Language