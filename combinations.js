// Function combinations 
function combinations(string) {
    list = new Array();
    for(i=0 ; i<string.length ; i++) {
      for(j=i+1 ; j<string.length+1 ; j++) {
        list.push(string.slice(i, j));  
      }
    }
    return list;
}