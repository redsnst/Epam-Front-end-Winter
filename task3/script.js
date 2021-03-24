var enterBlock = document.getElementById("enter");
enterBlock.innerHTML = "Enter end element:<input id=\"enterMax\" type=\"text\"></input>"
var calcBlock = document.getElementById("calcul");

function calc(){
    var min = 1, 
    max = Number(document.getElementById("enterMax").value);
    
    calcBlock.innerHTML = "Start: " + min + "<br>End:" + max +"<br>";
    if(min > max){
        calcBlock.innerText += "Numbers set incorrectly, try again!";
    }
    else{
        
        gauss(max);

        
    }
}

var gauss = (function() {
    var memo = {};
  
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
        if(value > Number.MAX_SAFE_INTEGER)
        {
            calcBlock.innerHTML += "The result exceeds the maximum possible";
        }
        else{
        calcBlock.innerHTML += "Result in cache: " + value;
        }
      } else {
        if (n === 1)
          value = n;
        else
          value = n * (n + 1) / 2;
  
        memo[n] = value;
        if(value > Number.MAX_SAFE_INTEGER){
            calcBlock.innerHTML += "The result exceeds the maximum possible";
        }
        else{
        calcBlock.innerHTML += "Result: " + value;
        }
      }
  
      return value;
    }
  
    return f;
  })();
  