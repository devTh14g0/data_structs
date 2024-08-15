var avgTemp= []

avgTemp[0]=31
avgTemp[1]=10
avgTemp[2]=20
avgTemp[3]=5

console.log(avgTemp[0])
console.log(avgTemp[1])

var daysWeek =["sunday","munday","yearstuday","tuenesday"]
for(var i=0;i < daysWeek.length;i++){
 console.log(daysWeek[i])
}

var fibonacci = []
fibonacci[0]=0
fibonacci[1]=1
fibonacci[2]=1

for (var i = 3; i < 20;i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}
console.log(fibonacci)

var numbers= [0,1,2,3,4,5,6,7,8,9,10]
numbers.push(11,12,13,14
) // adiciona no final
numbers.unshift(-1) // adiciona no comeco
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)

numbers.pop()  //remove um item do final
numbers.shift()//remove do comeco
console.log(numbers)
numbers.splice(6,3)
console.log(numbers)

numbers.splice(6,0,3,4,5)

console.log(numbers)

var month = []

var firstWeeks = []
var lastWeeks=[]

var avgtempweek1=[33,4,4,5,5,2,1]
var avgtempweek2=[11,12,3,3,5,6,1]
var avgtempweek3=[22,33,44,66,77,10,2]
var avgtempweek4=[10,12,33,44,60,50,1]

firstWeeks= [avgtempweek1,avgtempweek2]
lastWeeks=[avgtempweek3,avgtempweek4]
month = [firstWeeks,lastWeeks]
console.log(month[0][1][5])

for(var x=0;x < month.length;x++){
  for(var y=0;y < month[x].length;y++){
    for  (var z=0; z < month[x][y].length;z++){
      console.log(month[x][y][z])
    }
  }
}

