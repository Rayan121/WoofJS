
setBackdropURL("./docs/images/boss-backdrop.jpg")
setBackdropStyle("cover")

var crab = new Image({
  url: "./docs/images/crab.png",
  width: 150, 
  height: 100,
})

var pikachu = new Image({
  url: "./docs/images/pikachu.png",
  width: 120, 
  height: 100,
})
pikachu.x=-100
pikachu.y=100
var score=0
var time=30
 every(1, "seconds", () => {
 time=time-1
 if(time<0)
    {
      freeze()
    }
})
 
 var score1= new Text({
  text: () => "score " + score,
  x: -180,
  y: 150,
  size: 20

})
 
var time1= new Text({
  text: () => "time " +time,
  x: -180,
  y: 170,
  size: 30
})
 score1.color='green'
 time1.color='green'
forever(() => {
  
  if (pikachu.touching(crab)) {
    pikachu.x=random(-200,200)
    pikachu.y=random(-100,100)
    score=score+1
  }
  
 
  if(keysDown.includes ('UP'))
  {
    crab.y=crab.y+10
  }
if(keysDown.includes ('DOWN'))
  {
    crab.y=crab.y-10
  }
if(keysDown.includes ('RIGHT'))
  {
    crab.x=crab.x+10
  }
  
  if(keysDown.includes ('LEFT'))
  {
    crab.x=crab.x-10
  }
  
if (crab.x>240) {
  crab.x=-240
}
  
  if (crab.x<-240) {
  crab.x=240
}
  
  if (crab.y>200) {
  crab.y=-180
}
  
  if (crab.y<-200) {
  crab.y=180
  
  
}
})









