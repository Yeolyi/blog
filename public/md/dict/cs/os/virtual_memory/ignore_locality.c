#include <stdio.h>
#define SIZE 10000
int arr[SIZE][SIZE];
int main()
{
    for (int i = 0; i < SIZE; i++)
        for (int j = 0; j < SIZE; j++)
            arr[j][i] = 0;
}
