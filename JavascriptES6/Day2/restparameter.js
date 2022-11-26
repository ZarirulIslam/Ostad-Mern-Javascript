function Calculation(a,b,...number)
{
    let sum=0;
    for(let i of number){
        sum = sum+i;
    }
    console.log(sum);
}
Calculation(10,20,1,2,3,4,5,6);