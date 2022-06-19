#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <stdlib.h>

int sum = 0;

sem_t *sem;

void *counter(void *param)
{
    for (int k = 0; k < 10000; k++)
    {
        // entry section
        sem_wait(sem);
        // critical section
        sum++;
        // exit section
        sem_post(sem);
        // remainder section
    }
    pthread_exit(0);
}

int main()
{
    pthread_t tid1, tid2;
    if ((sem = sem_open("/my_semaphore", O_CREAT, 0, 1)) == SEM_FAILED)
    {
        printf("Failed to open semaphore");
        exit(-1);
    }
    pthread_create(&tid1, NULL, counter, NULL);
    pthread_create(&tid2, NULL, counter, NULL);
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    printf("sum = %d", sum);
    sem_close(sem);
    sem_unlink("/my_semaphore");
}