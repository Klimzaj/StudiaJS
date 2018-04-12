function* liczby(n)
{
    var i = 0;
    while (i < n)
    {
        yield i++;
    }
}

for(let x of liczby(10))
{
    console.log(x);
}

console.log("======================");


function* dzielnik(x)
{
    for(let i = 2; i<=x;i++)
    {
        if(x%i == 0)
        {
            yield i;
        }
    }
}

for(let x of dzielnik(99))
{
    console.log(x);
}

console.log("======================");

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

function* pierwsze(x)
{
    for(let i = 0; i < x; i++)
    {
        if(isPrime(i))
        {
            yield i;
        }
    }
}

for(let x of pierwsze(99))
{
    console.log(x);
}

console.log("======================");

//query selector of ?? pkt c zad 2

