class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        int n=arr.size();
        for(int i=0;i<n;i++){
            int m=arr[i]*2,j=0;
            while(j<n){
                if(arr[j]==m and j!=i){
                    return true;
                    break;
                }
                j++;
            }
        }
        return false;
    }
};
