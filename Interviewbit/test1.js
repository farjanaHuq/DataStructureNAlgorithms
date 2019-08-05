//How many distinct Max Heap can be made from n distinct integers
//Let us take an example of 4 distinct integers. Without loss of generality let us take 1 2 3 4 as our 4 distinct integers

// Verify if the following is true :

// The structure of the heap tree will be fixed.
// Given the numbers in a subtree, the root value is going to be fixed.
// Are the numbers in left and right subtree independent of each other?

//Solution approach
//
public class  Solution {
    
    long[] dp;  	/* dp[i] = number of max heaps for i distinct integers */
    long[][] nck;	/* nck[i][j] = i choose j if i>=j else 0 */
    int[] log2;		/* log2[i] = int(log base 2 of i) */
    
    final long MOD = 1000000007;
    
    public long choose(int n,int k)
    {
        if(k>n)
            return 0;
	if(n<=1)
	    return 1;
	if(k==0)
	    return 1;

        if(nck[n][k]!=-1)
            return nck[n][k];
        long answer = choose(n-1,k-1) + choose(n-1,k);
        answer%=MOD;
        nck[n][k] = answer;
        return answer;
    }
    
    public int getL(int n)
    {
        if(n==1)
            return 0;
            
        int h = log2[n];
        int p = n - ((1<<(h)) - 1);
        int m = (1<<h);
        if(p>=(m/2))
            return (1<<(h)) - 1;
        else
            return (1<<(h)) - 1 - ((m/2) - p);
    }
    
    public int solve(int n)
    {
        dp = new long[n+1];
        for(int i=0;i<=n;i++)
            dp[i]=-1;
            
        nck = new long[n+1][n+1];
        for(int i=0;i<=n;i++)
            for(int j=0;j<=n;j++)
                nck[i][j] = -1;
                
        log2 = new int[n+1];
        int currLogAnswer = -1;
        int currPower2 = 1;
        for(int i=1;i<=n;i++)
        {
	    if(currPower2==i)
            {
                currLogAnswer++;
                currPower2*=2;
            }
            log2[i] = currLogAnswer;
        }
        
        return (int)getNumberOfMaxHeaps(n);
    }
    
    public long getNumberOfMaxHeaps(int n)
    {
        if(n<=1)
            return 1;
            
        if(dp[n]!=-1)
            return dp[n];

        int L = getL(n);
        long ans = (choose(n-1,L)*getNumberOfMaxHeaps(L))%MOD*(getNumberOfMaxHeaps(n-1-L));
        ans%=MOD;
        dp[n] = ans;
        return ans;
    }
}
