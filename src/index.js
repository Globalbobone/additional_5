module.exports = function check(str, bracketsConfig) {
  var arrstek = [];
  var arrstek2 = [];
  var string;
  var n = 0;
  while (n < bracketsConfig.length){													// создаем стэк
  	for (var i = 0; i < str.length; i++){
	  	 if (str[i] = bracketsConfig[n][0]){
  	 		arrstek.push(str[i]);
  			 }
  		}
 		for (var i = 0; i < str.length; i++){										// встречаем друзей - удаляем из стека
  		 if (str[i] = bracketsConfig[n][1]){
  	 		arrstek.pop();
  	 		}
  		}
  	n = n + 1;
  }	 

for (var i = 0; i < str.length; i++){                      // массив значений совпадающих с конфигом
		n = 0;
		while (n < bracketsConfig.length){	
	  	if ((str[i] == bracketsConfig[n][0]) || (str[i] == bracketsConfig[n][1])){
  	 			arrstek2.push(str[i]);
  			 	}
  		n = n + 1;
  	 }		
  }
 string = arrstek2.join(""); 
 
 for (n = 0; n < bracketsConfig.length; n++){	
 		a = [bracketsConfig[n][0]];
 		b = [bracketsConfig[n][1]];
 		c = a + b;
 		while (string.indexOf(c) + 1) {string = string.replace(c, "");
 		}
 	}

 	for (n = bracketsConfig.length; n > 0; n--){	
 		a = [bracketsConfig[n-1][0]];
 		b = [bracketsConfig[n-1][1]];
 		c = a + b;
 		while (string.indexOf(c) + 1) {string = string.replace(c, "");
 		}
 	}

 	for (n = 0; n < bracketsConfig.length; n++){	
 		a = [bracketsConfig[n][0]];
 		b = [bracketsConfig[n][1]];
 		c = a + b;
 		while (string.indexOf(c) + 1) {string = string.replace(c, "");
 		}
 	}
 		
 	for (n = bracketsConfig.length; n > 0; n--){	
 		a = [bracketsConfig[n-1][0]];
 		b = [bracketsConfig[n-1][1]];
 		c = a + b;
 		while (string.indexOf(c) + 1) {string = string.replace(c, "");}
 	}

	if (arrstek.length == 0 && string.length == 0) {
	 			return true;
	 		}
 		else {
 				return false;
 			}
}
// не совсем элегантное но решение
// todo оптимизировать

 	  
	