#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <semaphore.h>
#include <stdbool.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];

pthread_mutex_t mutex;
sem_t *empty, *full;

int in = 0, out = 0;

void insert_item(int item)
{
    sem_wait(empty);
    pthread_mutex_lock(&mutex);

    buffer[in] = item;
    in = (in + 1) % BUFFER_SIZE;
    printf("Producer: inserted %d\n", item);

    pthread_mutex_unlock(&mutex);
    sem_post(full);
}

void remove_item(int *item)
{
    sem_wait(full);
    pthread_mutex_lock(&mutex);

    *item = buffer[out];
    out = (out + 1) % BUFFER_SIZE;
    printf("Consumer: removed %d\n", *item);

    pthread_mutex_unlock(&mutex);
    sem_post(empty);
}

void *producer()
{
    int item;
    while (true)
    {
        usleep((1 + rand() % 5) * 100000);
        item = 1000 + rand() % 1000;
        insert_item(item); // critical section
    }
}

void *consumer()
{
    int item;
    while (true)
    {
        usleep((1 + rand() % 5) * 100000);
        remove_item(&item); // critical section
    }
}

int main()
{
    sem_unlink("empty");
    sem_unlink("full");
    int numOfProducers = 1, numOfConsumers = 1;
    pthread_t pid;

    pthread_mutex_init(&mutex, NULL);
    empty = sem_open("empty", O_CREAT | O_EXCL, 0, 5);
    full = sem_open("full", O_CREAT | O_EXCL, 0, 0);
    //sem_init(empty, 0, 5);
    //sem_init(full, 0, 0);
    srand(time(0));

    for (int i = 0; i < numOfProducers; i++)
        pthread_create(&pid, NULL, producer, NULL);

    for (int i = 0; i < numOfConsumers; i++)
        pthread_create(&pid, NULL, consumer, NULL);

    sleep(3);
    return 0;
}