package dict.cs.os.thread;

public class MyThread1 extends Thread {
    public void run() {
        try {
            while (true) {
                System.out.println("Hello, Thread!");
                Thread.sleep(500);
            }
        } catch (InterruptedException ie) {
            System.out.println("I'm interrupted");
        }
    }
}
