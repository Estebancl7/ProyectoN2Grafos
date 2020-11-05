    function addFormulario() {
        let a = 1;
        let numero = document.getElementById("Automata1").value;
        let numero2 = document.getElementById("Automata2").value;
        console.log(numero);
        const texto1 = document.querySelector("#formulario");
        texto1.textContent = "Nombres para el autómata 1";
        while (a <= numero) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + a + ' col-md-offset-1 col-md-6"><input class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [a] + ' "  ' + a + '" type="text"/></div>';
            document.getElementById('formulario').appendChild(div);
            document.getElementById('formulario').appendChild(div);
            a++;
        }

        //var aux = document.createElement('aux');
        //aux.innerHTML = '<div class="col" style="margin-bottom: 5px;">Nombres para el autómata 2</div>';
        //document.getElementById('formulario').appendChild(aux);
        const texto2 = document.querySelector("#formulario2");
        texto2.textContent = "Nombres para el autómata 2";
        texto2.className = "pb-5 warning warning-alert";


        let b = 1;
        while (b <= numero2) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + b + ' col-md-offset-1 col-md-6"><input class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [b] + ' "  ' + b + '" type="text"/></div>';
            document.getElementById('formulario2').appendChild(div);
            document.getElementById('formulario2').appendChild(div);
            b++;
        }
    }