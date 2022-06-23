#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <stdbool.h>

#define NUM_PHILS 5

enum
{
    THINKING,
    HUNGRY,
    EATING
} state[NUM_PHILS];

pthread_mutex_t mutex_lock;
pthread_cond_t cond_vars[NUM_PHILS]; // 조건변수에 대한 접근은 항상 동기화된다

void init()
{
    for (int i = 0; i < NUM_PHILS; i++)
    {
        state[i] = THINKING;
        pthread_cond_init(&cond_vars[i], NULL);
    }
    pthread_mutex_init(&mutex_lock, NULL);
    srand(time(0));
}

int leftOf(int i)
{
    return (i + NUM_PHILS - 1) % NUM_PHILS;
}

int rightOf(int i)
{
    return (i + 1) % NUM_PHILS;
}

void think(int id)
{
    printf("%d: THINKING\n", id);
    usleep((1 + rand() % 50) * 10000);
}

void eat(int id)
{
    printf("%d: EATING\n", id);
    usleep((1 + rand() % 50) * 10000);
}

void test(int i)
{
    if (state[i] == HUNGRY && state[leftOf(i)] != EATING && state[rightOf(i)] != EATING)
    {
        state[i] = EATING;
        pthread_cond_signal(&cond_vars[i]);
    }
}

void pickup(int i)
{
    pthread_mutex_lock(&mutex_lock);
    // critical section
    state[i] = HUNGRY;
    test(i);
    while (state[i] != EATING)
        pthread_cond_wait(&cond_vars[i], &mutex_lock);
    pthread_mutex_unlock(&mutex_lock);
}

void putdown(int i)
{
    pthread_mutex_lock(&mutex_lock);

    state[i] = THINKING;
    test(leftOf(i));
    test(rightOf(i));

    pthread_mutex_unlock(&mutex_lock);
}

void *philosopher(void *param)
{
    int id = *((int *)param);
    printf("%d: CREATED\n", id);
    for (int i = 0; i < 3; i++)
    {
        think(id);
        pickup(id);
        eat(id);
        putdown(id);
    }
    pthread_exit(0);
}

int main()
{
    int ids[] = {0, 1, 2, 3, 4};
    pthread_t tid[NUM_PHILS];
    init();
    for (int i = 0; i < NUM_PHILS; i++)
        pthread_create(&tid[i], NULL, philosopher, (void *)&ids[i]);
    for (int i = 0; i < NUM_PHILS; i++)
        pthread_join(tid[i], NULL);
    return 0;
}