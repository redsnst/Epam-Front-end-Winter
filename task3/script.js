let enterBlock = document.getElementById("enter");
enterBlock.innerHTML = "Enter end element:<input id=\"enterMax\" type=\"text\"></input>"
let calcBlock = document.getElementById("calcul");

function output(value, n){
  if(n == 1){
    calcBlock.innerHTML += "Result in cache: " + value;
  }
  else if(n == 2){
    calcBlock.innerHTML += "The result exceeds the maximum possible";
  }
  else if(n == 3){
    calcBlock.innerHTML += "Result: " + value;
  }
  else if(n == 4){
    calcBlock.innerText += "Numbers set incorrectly, try again!";
  }
   
}

function calc(){
    let min = 1, 
    max = Number(document.getElementById("enterMax").value);
    
    calcBlock.innerHTML = "Start: " + min + "<br>End:" + max +"<br>";
    if(min > max){
        output(0, 4);
    }
    else{
        
        gauss(max);

        
    }
}



var gauss = (function() {
    let memo = {};
    
  
    function f(n) {
      let value;
  
      if (n in memo) {
        value = memo[n];
        
        output(value, 1);
        
      } else {
        if (n === 1)
          value = n;
        else
          value = n * (n + 1) / 2;
  
        
        if(value > Number.MAX_SAFE_INTEGER){
            output(value, 2);
        }
        else{
        memo[n] = value;
        output(value, 3)
        }
      }
  
      return value;
    }
  
    return f;
  })();
  