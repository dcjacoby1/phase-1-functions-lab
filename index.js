// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let distance;
    if (someValue >= 42){
        distance = someValue - 42;
    } else{
        distance = 42 - someValue;
    }
    return distance;
}

function distanceFromHqInFeet(someValue){
    let distanceInBlocks = distanceFromHqInBlocks(someValue);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    let distance;
    if (start >= destination){
        distance = 264 * (start - destination);
    } else{
        distance = 264 * (destination - start);
    }
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance;
    let fare;
    if (start >= destination){
        distance = 264 * (start - destination);
    } else{
        distance = 264 * (destination - start);
    }
    if (distance <= 400){
        fare = 0;
    } else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return fare;
  }