function* ShowL()
{
    var isOk;
    var sum;
    for(let i =1;i<=100000;i++)
    {
        isOk = true;
        sum = 0;
        let liczbaString = i.toString();
        [...liczbaString].forEach(e =>
        {
            var z = parseInt(e);
            if(isOk)
            {
                if(z == 0 || i%z !== 0)
                {
                    isOk = false;
                }
            }
            sum += z;          
        });
        if(isOk && i%sum == 0)
        {
            yield i;
        }
        
    }
}
for(let x of ShowL())
{
    console.log(x);
}