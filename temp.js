  
  let obj={}
  for(let i=0;i<n;i++){
      if(obj[arr[i]]==undefined){
          obj[arr[i]]=1
      }
  }
  let count=0
  let bag=""
  for(let key in obj){
      if(obj[key]==1){
          bag+=key+" "
          count++
      }
  }
  console.log(count)
  console.log(bag)
