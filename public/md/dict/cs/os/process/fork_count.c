#include <stdio.h>
#include <unistd.h>

// How many processes are created?
int main()
{
    int i;
    for (i = 0; i < 4; i++)
        fork();
    printf("Hello, world!\n");
    return 0;
}