function fibonacci(num){
    if(num>0 && num<2){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}