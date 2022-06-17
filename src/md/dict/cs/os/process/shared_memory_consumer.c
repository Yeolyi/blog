// Consumer process illustrating POSIX shared-memory API

#include <stdio.h>
#include <sys/mman.h>
#include <fcntl.h>

int main()
{
    const int SIZE = 4096;
    const char *name = "OS";

    int shm_fd;
    char *ptr;

    shm_fd = shm_open(name, O_RDONLY, 0666);
    // 오 write 있으니까 안되네??
    ptr = mmap(0, SIZE, PROT_READ, MAP_SHARED, shm_fd, 0);
    printf("%s", ptr);
    shm_unlink(name);
    return 0;
}