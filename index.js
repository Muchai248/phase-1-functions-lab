// Code your solution in this file!
function  distanceFromHqInBlocks(someValue){
   if(someValue<=40){
    return(42-someValue);
   } else{
    return(someValue-42);
   } 
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
    
}


//function distanceTravelledInFeet(someValue){
   // return distanceFromHqInBlocks(someValue)*264;


   function distanceTravelledInFeet(x, y){
    if (x>y){
        return ((x-y)*264)
    } else{
        return ((y-x)*264)
    }
    
   }


   function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }