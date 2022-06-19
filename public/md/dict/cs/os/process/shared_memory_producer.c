// Producer process illustrating POSIX shared-memory API
// gcc test.c -lrt
// maxOS는 lrt 필요없는듯~!

#include <stdio.h>
#include <unistd.h>   // ftruncate
#include <sys/mman.h> // shm_open, mmap, PROT_READ
#include <fcntl.h>    // O_CREAT
#include <string.h>   // strlen

int main()
{
    // the size of shared memory
    const int SIZE = 4096;
    // the name of shared memory
    const char *name = "OS";
    const char *message_0 = "Hello, ";
    const char *message_1 = "Shared Memory!\n";

    // the file descriptor of shared memory
    int shm_fd;
    // pointer to shared memory
    char *ptr;

    // create the shared memory object
    shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666);

    // configure the size of the shared memory
    ftruncate(shm_fd, SIZE);

    // map the shared memory object
    ptr = mmap(0, SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);

    // write to the shared memory
    sprintf(ptr, "%s", message_0);
    ptr += strlen(message_0);
    sprintf(ptr, "%s", message_1);
    ptr += strlen(message_1);

    return 0;
}