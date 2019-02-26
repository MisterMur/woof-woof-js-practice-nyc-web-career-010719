function mySort(arr)
{
  sorted = []
  for(let i = 0;i<arr.length;i++)
  {
    for(let j = 0;j<arr.length;j++)
    {

      var lower;
      if (!!lower )
      lower =arr[i]
      if (arr[i] >arr[j])
      {
        lower = arr[i]
        sorted.push(arr[i])
      }
      // console.log(arr[i])
    }
  }
  return sorted
}

myArr = [5,3,2,6,39,1]
console.log(mySort(myArr))
