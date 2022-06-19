package dict.cs.os.thread;

public class MyThread2 implements Runnable {
    public void run() {
        try {
            while (true) {
                System.out.println("Hello, Runnable!");
                Thread.sleep(500);
            }
        } catch (InterruptedException ie) {
            System.out.println("I'm interrupted");
        }
    }
}
