
obj1 = {A:100,B:50,C:200,D:300,E:400}
obj2 = {E:100,B:50,C:20,F:300,A:100}
obj3 = {F:100,B:500,C:200,D:300,E:400,G:10000}

finalObj = [obj1,obj2,obj3]
total = 0
finalkhaataPage = {}
minv=Math.floor(Math.random()*100000)
maxv =0
finalObj.forEach((page)=>{
  for(khaata in page){
       total += page[khaata]

    if(khaata in finalkhaataPage){
        finalkhaataPage[khaata]+= page[khaata]
}
    else{
         finalkhaataPage[khaata]= page[khaata]

    }
            minv = Math.min(minv,finalkhaataPage[khaata])
        maxv = Math.max(maxv,finalkhaataPage[khaata])
    
  } 
})

console.log(finalkhaataPage,total,minv,maxv)