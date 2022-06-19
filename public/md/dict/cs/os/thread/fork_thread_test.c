#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

void *runner()
{
    printf("Hello I'm thread\n");
    pthread_exit(0);
}

int main()
{
    pthread_t tid;
    pthread_create(&tid, NULL, runner, NULL);
    pid_t pid = fork();
    if (pid > 0)
    {
        pthread_join(tid, NULL);
        wait(NULL);
    }
    printf("Process End\n");
    return 0;
}