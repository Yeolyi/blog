package dict.cs.os.process;

import java.io.*;
import java.net.*;

public class DateClient {
    public static void main(String[] args) throws Exception {
        // make connection to server socket
        Socket socket = new Socket("127.0.0.1", 6013);

        InputStream in = socket.getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(in));

        // read date from the socket
        String line = null;
        while ((line = br.readLine()) != null)
            System.out.println(line);

        // close the socket connections
        socket.close();
    }
}