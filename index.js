function distanceFromHqInBlocks (block) {
    return Math.abs((42 - block))
}
  
function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
}
  
function distanceTravelledInFeet (start, end) {
    return Math.abs(start - end) * 264
}
  
function calculatesFarePrice (start, end) {
    const distance = distanceTravelledInFeet(start, end)
  
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}