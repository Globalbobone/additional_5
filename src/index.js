module.exports = function check(str, bracketsConfig) {
  //var strres = str;
  //var arr = bracketsConfig;
  var arrstek = [];
  var arrstek2 = [];
  var string;
  var n = 0;
  while (n < bracketsConfig.length){													// создаем стэк
  	for (var i = 0; i < str.length; i++){
	  	 if (str[i] == bracketsConfig[n][0]){
  	 		arrstek.push(str[i]);
  			 }
  		}
 		for (var i = 0; i < str.length; i++){										// встречаем друзей - удаляем из стека
  		 if (str[i] == bracketsConfig[n][1]){
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
 var z = 0;
 //var s = 0;



	/*while (string.indexOf(c) + 1) {
		a = [bracketsConfig[z][0]];
 		b = [bracketsConfig[z][1]];
 		c = a + b;
 		string = string.replace(c, "");
 		z = z + 1;
	}*/
 //string = string.replace ((?<=\()[^\(\]]+(?=\), "");
 for (n = 0; n < bracketsConfig.length; n++){	
 		a = [bracketsConfig[z][0]];
 		b = [bracketsConfig[z][1]];
 		c = a + b;
 		string = string.replace(c, "");
 		z = z + 1;
 		if (string.indexOf(c) + 1){
 			z = 0;
 			string = string.replace(c, ""); 
 			n = 0;}                             // строка
 		}
 		



 if (arrstek.length == 0 && string.length == 0) {
 			
 			return true;}

 			//return true;
 			
 			else {
 				return false;
 			}

}

 	  
	/*for (n = 0; n < bracketsConfig.length; n++){	
 		a = [bracketsConfig[n][0]];
 		b = [bracketsConfig[n][1]];
 		c = a + b;
 		n = n + 1;                             // строка
 		string = string.replace(c, "");*/
 		
 		
 		
 
 		//string = string.replace(a, ""); 
 		//string = string.replace(b, "");
 		//string = string.replace(c, "");
 		//string = string.replace(c, "");
 		//string = string.replace(c, "");   
		
//string = string.replace ((/(?=(?:\(.*\)|\[.*\]|<.*>|\{.*\}|[0-9a-f]*)$)^[\[{(<]?[0-9a-f]{32}[\]}>)]?$/i), "");

/*if ((arrstek.length != 0) && (string.length != 0)){
  	return false;
  	}
  else if ((arrstek.length == 0) && (string.length == 0)) {
  	return true; 	
  	 }
  else {
  	return false;
  }	 */
//return string;




	
 /* if ((arrstek.length != 0) && (string.length != 0)){
   		return false;
  		}
  	else if ((arrstek.length = 0) || (string.length != 0)){
  	return true;
  	 }
  	 else{
  	return true; 	
  	 } */
//return string;//bracketsConfig.length;
//return bracketsConfig.length;
//return arrstek[0];//arrstek[0];//bracketsConfig[1][1];

