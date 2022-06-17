#include <stdio.h>
#include <pthread.h>

// 전역변수면 무조건 0이었나~?
int sum;

void *run1(void *param)
{
    for (int i = 0; i < 10000; i++)
        sum++;
    pthread_exit(0);
}

void *run2(void *param)
{
    for (int i = 0; i < 10000; i++)
        sum--;
    pthread_exit(0);
}

int main()
{
    pthread_t tid1, tid2;
    pthread_create(&tid1, NULL, run1, NULL);
    pthread_create(&tid2, NULL, run2, NULL);
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    printf("%d", sum);
}