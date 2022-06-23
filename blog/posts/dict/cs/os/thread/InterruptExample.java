package dict.cs.os.thread;

public class InterruptExample {
    public static final void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            try {
                while (true) {
                    System.out.println("Hello, Lambda Runnable!");
                    Thread.sleep(100);
                }
            } catch (InterruptedException ie) {
                System.out.println("I'm interupted");
            }
        };
        Thread thread = new Thread(task);
        thread.start();
        Thread.sleep(500); // 이거 주석처리하면 부모 다음 자식 실행됨!!
        thread.interrupt();
        System.out.println("Hello, My Interrupted Child!");
    }
}
