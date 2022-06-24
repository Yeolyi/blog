package dict.cs.os.sync_examples;

public class ProdRunner implements Runnable {
    CashBox cashBox;

    public ProdRunner(CashBox cashBox) {
        this.cashBox = cashBox;
    }

    @Override
    public void run() {
        try {
            while (true) {
                Thread.sleep((long) (Math.random() * 500));
                int money = ((int) (1 + Math.random() * 9));
                cashBox.give(money);
            }
        } catch (InterruptedException e) {
        }
    }
}
