function draw(n = 0){
    for(let i=n;i>=1;i--){
        let str = ""
        for(let j=1;j<=n;j++){
            if(i>j){
                str += "_";
            }
            else{
                str += "*";
            }
            
        }
        for(let j=n-1;j>=1;j--){
            if(i>j){
                str += "_";
            }
            else{
                str += "*";
            }
            
        }
        console.log(str);

    }
}
draw(5);