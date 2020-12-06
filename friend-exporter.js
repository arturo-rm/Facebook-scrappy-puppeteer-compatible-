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

for (var i=0; i< lenM; i++) {

if(myarray[i][0] != "" && myarray[i][1] != "" && !myarray[i][1].contains("&sk=") && !myarray[i][1].contains("friends_mutual")){
 
 table += '<tr><td>'+ "\"" + myarray[i][1]+ + " " +  "\"" +", "  +'</td></tr>' ;
  }
};

var tt = "<script type=\"text/javascript\" src=\"jquery-1.3.2.js\" ></script>";
table += tt

    var w = window.open("");
w.document.write(table); 
}
friendTable()




   