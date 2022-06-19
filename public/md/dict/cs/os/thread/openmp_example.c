#include <stdio.h>
// #include <omp.h> 안깔려있어서 테스트 못해봄.

#define SIZE 100000000

int a[SIZE], b[SIZE], c[SIZE];

int main()
{
    for (int i = 0; i < SIZE; i++)
    {
        a[i] = b[i] = i;
    }
#pragma omp parallel for
    for (int i = 0; i < SIZE; i++)
    {
        c[i] = a[i] + b[i];
    }
    return 0;
}