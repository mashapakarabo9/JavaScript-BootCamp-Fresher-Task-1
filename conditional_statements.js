//Exercise 1: Tempareture check

let temparature=70;

if(temparature < 0 )
    {
        console.log("its freezing");
    }

else if(temparature >=0 && temparature <=15)
    {
        console.log("Its cold");
    }
else if(temparature >=16 && temparature <= 25 )
    {
        console.log("its mild");
    }
    else if(temparature>25)
        {
            console.log("its warm");
        }

    //Exercise 2: switch case

    switch(temparature)
    {
    

    }

    //Exercise 1 :Divisibility  check
let num =12;

if((num % 2)==0)
    {
        console.log("Divisible by 2");
    }

    else if((num % 3)==0)
        {
            console.log("Divisible by 3");
        }

        
else if((num % 2)==0)
    {
        console.log("Divisible by 3");
    }

else if((num % 2)==0 && (num % 3)==0)
    {
        console.log("Divisible by both");
    }

    else if((num % 2)!=0 && (num % 3)!=0)
        {
            console.log("Not Divisible by 2 or 3");
        }



//Exercise 3 : For Loops 

for(i=1;i<=10;i++)
    {

        console.log(i);

    }

for(x=1;x<=20;x++)
    {
        if(x % 2 ==0)
            {
                console.log(x % 2);
            }
    }

let sum=0; //sum declaration
for(a=1; a<=100;a++)
{
    sum += a;
    console.log("sum = "+sum);
}



const numArry1 =[1,2,3,4,5];

for(i=0;i<5;i++)
    {
        console.log(numArry1[i]);
    }

const numArr2 = [3,7,2,5,10,6];
        let bigNum=numArr2[0];
        
   for(k=0;k<numArr2.length;k++)
     {
        
        if(numArr2[k]>bigNum)
            {
                bigNum=numArr2[i];
            }
    };
    console.log(bigNum);

    //Exercise 4: while loops

    let m=0;

    while(m < 10)
        {
            console.log(m+1)
            m++;
        }
        
        let v = 1;

    while(v <= 20)
    {
        if(v%2 ==0)
            {
            console.log(v);
            }
    }

    v =1;
    let total=0;
    while(v <= 100 )
        {
             tot +=v;
             v++;
        }
    console.log("sum = "+total);

    counter=0;
    v=5;
    
while(1 <= 50)
    {
        if(v % 5 ==0)
            {
                counter+=1;
            }
            v++;;
    }