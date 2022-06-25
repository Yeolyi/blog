#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

void *runner(void *param);

int main(int argc, char *argv[])
{
    pid_t pid;
    pthread_t tid;
    pthread_attr_t attr;

    pid = fork();
    if (pid == 0)
    {
        fork();
        pthread_attr_init(&attr);
        pthread_create(&tid, &attr, runner, NULL);
        pthread_join(tid, NULL);
    }
    fork();
    if (pid > 0)
        wait(NULL);
    printf("Process Ended\n");
    return 0;
}

void *runner(void *param)
{
    printf("I am thread\n");
    pthread_exit(0);
}