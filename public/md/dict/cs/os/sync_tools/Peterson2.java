package dict.cs.os.sync_tools;

import java.util.concurrent.atomic.AtomicBoolean;

public class Peterson2 {
    static int count = 0;
    static int turn = 0;
    static AtomicBoolean[] flag;
    static {
        flag = new AtomicBoolean[2];
        for (int i = 0; i < flag.length; i++)
            flag[i] = new AtomicBoolean();
    }

    public static void main(String[] args) throws Exception {
        Thread t1 = new Thread(new Producer());
        Thread t2 = new Thread(new Consumer());
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(Peterson2.count);
    }

    static class Producer implements Runnable {
        public void run() {
            for (int i = 0; i < 100000; i++) {
                flag[0].set(true);
                turn = 1;
                while (flag[1].get() && turn == 1)
                    ;
                count++;
                flag[0].set(false);
            }
        }
    }

    static class Consumer implements Runnable {
        public void run() {
            for (int i = 0; i < 100000; i++) {
                flag[1].set(true);
                turn = 0;
                while (flag[0].get() && turn == 0)
                    ;
                count--;
                flag[1].set(false);
            }
        }
    }

}
