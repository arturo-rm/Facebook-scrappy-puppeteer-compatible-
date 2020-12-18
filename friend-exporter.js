//paste this code on inspect console from desired friend url

var all = document.querySelectorAll("a");
var lenA = all.length;
var myarray = [];
for (var i=0; i< lenA; i++){
var nametext = all[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = all[i].href;



myarray.push([cleantext,cleanlink]);
};
function friendTable() {
var table = '<table><tbody>';
var lenM = myarray.length;
var lenM1 = 0;
var xd = 0; 
for (let i=0; i< lenM; i++) {

if(myarray[i][0] != "" && myarray[i][1] != "" && !myarray[i][1].contains("&sk=") && !myarray[i][1].contains("friends_mutual")){

lenM1++;
}
};

for (let i=0; i< lenM; i++) {
if(myarray[i][0] != "" && myarray[i][1] != "" && !myarray[i][1].contains("&sk=") && !myarray[i][1].contains("friends_mutual")){

  if (xd == lenM1 -1){
    table += '<tr><td>'+ "\"" + myarray[i][1]+  "\""   +'</td></tr>' ;

}
 else{
  table += '<tr><td>'+ "\"" + myarray[i][1] +  "\"" + " " +", "  +'</td></tr>' ;
  xd++ }
  
}
};




    var w = window.open("");
w.document.write(table); 
}
friendTable()




   