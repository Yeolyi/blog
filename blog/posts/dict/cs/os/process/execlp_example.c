#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{
    pid_t pid;
    pid = fork();
    if (pid == 0)
    {
        execlp("/bin/ls", "ls", NULL);
        printf("Another commands...\n"); // 실행 x
    }
    else if (pid > 0)
    {
        wait(NULL);
        printf("Waiting Complete");
    }
    return 0;
}