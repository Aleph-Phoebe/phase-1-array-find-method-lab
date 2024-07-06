// code your solution here
function superbowlWin(collection) {
    const yearW = collection.find(years => years.result === "W")
   
    if( yearW) {
     return yearW.year
    } else {
     return undefined
    }
   }

   //Do some testing here
console.log(superbowlWin(record));
   