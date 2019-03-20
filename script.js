$('document').ready(function() {
	formTable(".wrapper");

	$('tbody').on('click','td', function(){
			$(this).parent().remove();
	});

});


function formTable(selector){
  var wrapper = document.querySelector(selector);
  var form = wrapper.getElementsByTagName("form")[0];
  var table = wrapper.getElementsByTagName("table")[0];
  var tbody = table.getElementsByTagName("tbody")[0];
  
  form.onsubmit = function(ev){
    ev = ev || event;
    ev.preventDefault();
    
    var tr = document.createElement("tr"), td;
    var a, b, c, D, fin, fin1, fin2;
	a = this.elements[0].value;
	b = this.elements[1].value;
	c = this.elements[2].value;
	
	if(a =="" || b =="" || c == "") {
		alert("Введите все коэффициенты");
	}
	
		else {
		for(let i = 0; i < 3; i++){
		  td = document.createElement("td");
		  td.innerHTML = this.elements[i].value;
		  tr.appendChild(td);
		}   
			a = this.elements[0].value;
			b = this.elements[1].value;
			c = this.elements[2].value;
			
			
			
			if (a == 0 && b == 0 && c == 0) {
				td = document.createElement("td");
				td.innerHTML = 'Уравнение имеет бесконечно много корней';
				tr.appendChild(td);
			}
			
			else if (a == 0 && b == 0 && c != 0) {
				td = document.createElement("td");
				td.innerHTML = 'Уравнение не имеет корней';
				tr.appendChild(td);
			}	
			
			else if (a == 0 && b != 0) {
				fin = -c / b;
				td = document.createElement("td");
				td.innerHTML = 'x = ' + fin;
				tr.appendChild(td);
			}
			
			else {
				D = b * b - 4 * a * c;
				
				if (D < 0) {
					td = document.createElement("td");
					td.innerHTML = 'Уравнение не имеет действительных корней';
					tr.appendChild(td);
				}
				
				else if (D == 0) {
					fin = -b / (2 * a);
					td = document.createElement("td");
					td.innerHTML = 'x = ' + fin;
					tr.appendChild(td);   
				}
				
				else if (D > 0) {
					fin1 = (-b + Math.sqrt(D)) / (2 * a);
					fin2 = (-b - Math.sqrt(D)) / (2 * a);
					td = document.createElement("td");
					td.innerHTML = 'x1 = ' + fin1 + ', \n x2 = ' + fin2;
					tr.appendChild(td);
					
				}			
			}
			
		tbody.appendChild(tr);    
	}

		var clearForms = document.getElementsByClassName("raz");
		for (var i = 0; i <clearForms.length; i++) {
				clearForms[i].value = "";
		}
		
  }
}