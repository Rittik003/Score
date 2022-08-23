let count1=0;
let count2=0;
let first=document.getElementById("x");
let second=document.getElementById("y")

function add1()
{
    count1++;
    first.textContent=count1;
}

function add2()
{
    count1+=2;
    first.textContent=count1;
}

function add3()
{
    count1+=3;
    first.textContent=count1;
}

function add11()
{
    count2++;
    second.textContent=count2;
}

function add12()
{
    count2+=2;
    second.textContent=count2;
}

function add13()
{
    count2+=3;
    second.textContent=count2;
}

function res()
{
    count1=0;
    count2=0;
    first.textContent=count2;
    second.textContent=count2;
}