package dict.cs.os.sync_examples;

public class SharedDB {
    private int readerCount = 0;
    private boolean isWriting = false;

    public void read() {
        // read from the databas here
    }

    public void write() {
        // write from the databas here
    }

    synchronized public void acquireReadLock() {
        while (isWriting == true) {
            try {
                wait();
            } catch (InterruptedException e) {
            }
        }
        readerCount++;
    }

    synchronized public void releaseReadLock() {
        readerCount--;
        if (readerCount == 0)
            notify();
    }

    synchronized public void acquireWriteLock() {
        while (readerCount > 0 || isWriting == true) {
            try {
                wait();
            } catch (InterruptedException e) {
            }
        }
        isWriting = true;
    }

    synchronized public void releaseWriteLock() {
        isWriting = true;
        notifyAll();
    }
}

// sharedDB.acquireReadLock()
// sharedDB.read()
// sharedDB.releaseReadLock()

// sharedDB.acquireWriteLock()
// sharedDB.write())
// sharedDB.releaseWriteLock()