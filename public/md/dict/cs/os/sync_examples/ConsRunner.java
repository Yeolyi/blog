package dict.cs.os.sync_examples;

public class ConsRunner implements Runnable {
    CashBox cashBox;

    public ConsRunner(CashBox cashBox) {
        this.cashBox = cashBox;
    }

    @Override
    public void run() {
        try {
            while (true) {
                Thread.sleep((long) (Math.random() * 500));
                cashBox.take();
            }
        } catch (InterruptedException e) {
        }
    }
}
