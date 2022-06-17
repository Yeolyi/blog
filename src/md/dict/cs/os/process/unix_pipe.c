// Ordinary pipe in UNIX

#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <string.h>

#define BUFFER_SIZE 25
#define READ_END 0
#define WRITE_END 1

int main()
{
    char parent_msg[BUFFER_SIZE] = "Hi, child";
    char child_msg[BUFFER_SIZE] = "Hi, parent";
    char read_msg[BUFFER_SIZE];
    int fd[2];
    pid_t pid;

    // create the pipe
    pipe(fd);

    // fork a new process
    pid = fork();
    // parent process
    if (pid > 0)
    {
        // wait(NULL); 이거 쓰면 안끝남!!
        // write to the pipe
        write(fd[WRITE_END], parent_msg, strlen(parent_msg) + 1);
        read(fd[READ_END], read_msg, BUFFER_SIZE);
        printf("parent read: %s\n", read_msg);
        close(fd[WRITE_END]);
        close(fd[READ_END]);
    }
    // child process
    else if (pid == 0)
    {
        write(fd[WRITE_END], child_msg, strlen(child_msg) + 1);
        // read to the pipe;
        read(fd[READ_END], read_msg, BUFFER_SIZE);
        printf("Child read %s\n", read_msg);
        close(fd[READ_END]);
        close(fd[WRITE_END]);
    }
    return 0;
}