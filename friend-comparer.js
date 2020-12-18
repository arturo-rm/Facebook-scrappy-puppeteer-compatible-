
//your complete friendlist
var friendsComplete = [];

//your friendsadded list
var friendsAdded = [];


friendsComplete.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });

friendsAdded.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });

var lenFc = friendsComplete.length;
var lenFa = friendsAdded.length;
var x = [];


//for(let j = 0; j < lenFa; j++){x.push(friendsAdded[j].slice(0, -1));}

for (let i = 0; i < friendsComplete.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (friendsComplete[i] == x[j]) {
        delete friendsComplete[i];
      }
    }
  }
friendsComplete = friendsComplete.filter(Boolean)
   
  for (let i = 0; i < friendsComplete.length; i++) {
  
  
    console.log("\"" + friendsComplete[i] + "\"" + " " + ",")
  }

