#include <stdio.h>
#include <pthread.h>

int sum = 0; // a shared variable

pthread_mutex_t mutex;

void *counter(void *param)
{
    for (int i = 0; i < 100000; i++)
    {
        // entry section
        pthread_mutex_lock(&mutex);
        // critical section
        sum++;
        // exit section
        pthread_mutex_unlock(&mutex);
        //remainder section
    }
    pthread_exit(0);
}

int main()
{
    pthread_t tid1, tid2;
    pthread_mutex_init(&mutex, NULL);
    pthread_create(&tid1, NULL, counter, NULL);
    pthread_create(&tid2, NULL, counter, NULL);
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    printf("sum = %d\n", sum);
}