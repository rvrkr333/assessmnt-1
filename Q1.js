const n = parseInt(prompt('Enter the number  '))
var t1=0;
var t2=1;
var next=0,i;
if(n==1 || n==2){
    comsole.log(n);
}
else {
    next = t1 + t2;
    for(i=3;i<=n;i++){
        t1=t2;
        t2=next;
        next=t1+t2;
    }
    console.log(t2);
}