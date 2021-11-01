    //  Display Date in Browser
    document.getElementById("time").innerHTML=new Date().toLocaleDateString();

    // Display on Console the Browser
    console.log("Welcome to JavaScript");
    
    // Function to Capitalize First Letter
    function capitalize(string) {  
      return string.split(' ').map(string => string.charAt(0).toUpperCase() + string.substring(1)).join(' '); 
    }

    // Function the game 
    function game(){
        var num = parseInt(Math.random() * 10 + 1);
        var inputNumber = prompt("input a guess number between 1 to 10");
        if(isNaN(inputNumber)) {
        alert("Please, write a Number");
        
        } else {
            if(num == inputNumber){
                alert("Good Work");
            } else {
                alert("Not matched Number is = " + num);
            }
        }
    }
    // Display on Browser
          // methode 1 
          document.getElementById("game").innerHTML=combinations("dog");
          // Methode 2 
    //document.write(combinations("dog"));

    // Function Alert Message
    function Alert(){
        alert("Hello User");
    }

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
    // display on Console the Browser
    console.log(capitalize("hi my name is abderrahman soufiane"));