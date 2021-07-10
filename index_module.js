var arr=new Array();
function maximum(arr)
{
    let x=arr[0]
    for(var a=1;a<arr.length;a++)
    {
       if(x<arr[a])
       {
          x=arr[a];
       }
    }
    return x;
}

function minimum(a ,b)
{
    // let x=arr[0]
    // for(var a=1;a<arr.length;a++)
    // {
    //    if(x>arr[a])
    //    {
    //       x=arr[a];
    //    }
    // }
    if(a>b)
      return b;
    else
      return a;
}

function average(arr)
{
   x=0;
   for(a=0;a<arr.length;a++)
   {
       x=x+arr[a];
   }
   return x/arr.length;
}

    exports.avg=average;
    exports.max=maximum;
    exports.min=minimum;
