package dict.cs.os.sync_tools;

public class RaceCondition {
    public static void main(String[] args) throws Exception {
        RunnableOne run1 = new RunnableOne();
        RunnableOne run2 = new RunnableOne();
        Thread t1 = new Thread(run1);
        Thread t2 = new Thread(run2);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Result: " + RunnableOne.count);
    }
}
