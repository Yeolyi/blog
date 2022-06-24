package dict.cs.os.sync_tools;

public class RunnableOne implements Runnable {

    // int count = 0; 이거면 문제 없음.
    static int count = 0;

    public void run() {
        for (int i = 0; i < 10000; i++)
            count++;
    }
}
