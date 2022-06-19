// Date server in java

package dict.cs.os.process;

import java.net.*;
import java.io.*;

public class DateServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(6013);

        // 서버 안닫았다고 warning떠서 내가 추가한 구문
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                try {
                    server.close();
                    System.out.println("The server is shut down!");
                } catch (IOException e) {
                    /* failed */ }
            }
        });

        // now listen for connections
        while (true) {
            Socket client = server.accept();
            PrintWriter pout = new PrintWriter(client.getOutputStream(), true);
            // write the Dat to the socket
            pout.println(new java.util.Date().toString());
            // close the socket and resume listening for connections
            System.out.println("Data send!");
            client.close();
        }
    }
}