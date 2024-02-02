
//{ Driver Code Starts
//Initial Template for Java


import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();
            System.out.println(ob.evenlyDivides(N));
        }
    }
}
// } Driver Code Ends


//User function Template for Java


class Solution{
    static int evenlyDivides(int N){
        // code here
        int d=0;
        int f=N;
        int n=0;
        boolean flag=true;
        while(f!=0){
            d=f%10;
            if(N%d==0)
            {
              flag=true;
            }
            else
            {
                flag=false;
            }
            n++;
            f=f/10;
         }
            if(flag==true){
                return n;  
            }
            return n;
             
        
    }
}