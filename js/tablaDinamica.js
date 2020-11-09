    function addFormulario() {
        let a = 1;
        let cont = 0;
        let numero = document.getElementById("Automata1").value;
        let numero2 = document.getElementById("Automata2").value;
        console.log(numero);
        var aux1 = [];
        var aux2 = [];
        count1 = 1;
        const texto1 = document.querySelector("#formulario");
        texto1.textContent = "Nombres para el autómata 1";
        texto1.className = "alert alert-warning py-4";
        while (a <= numero) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + a + ' col-md-offset-1 col-md-6"><input id="a1valor' + count1 +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [a] + ' "  ' + a + '" type="text"/> <input type="radio" id="A1inicial' + count1 + '" name="inicia" required>Inicial <input type="checkbox" id="A1final' + count1 + '" name="final" required> Final</div>';
            document.getElementById('formulario').appendChild(div);
            a++;
            count1++;



        }

        const texto2 = document.querySelector("#formulario2");
        texto2.textContent = "Nombres para el autómata 2";
        texto2.className = "alert alert-warning py-4";

        count2 = 1;

        let b = 1;
        while (b <= numero2) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + b + ' col-md-offset-1 col-md-6"><input id="a2valor' + count2 +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="Nombre del estado ' + [b] + ' " ' + b + '" type="text"/> <input type="radio" id="A2inicial' + count2 +
                '" name="inicial" required>Inicial <input type="checkbox" id="A2final' + count2 + '" name="final" required> Final</div>';
            document.getElementById('formulario2').appendChild(div);
            b++;
            count2++;
        }

        const texto3 = document.querySelector("#mostrarLenguaje");
        texto3.textContent = "Ingrese las variables del lenguaje";
        texto3.className = "alert alert-warning py-3";
        var leEntrada = document.getElementById("nEntradas").value;
        console.log(leEntrada);
        var count = 1;
        var x = leEntrada;
        let k = 1;
        while (k <= x) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + x + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="letra de entrada ' + [k] + ' " ' + x + '" type="text"/>';
            document.getElementById('mostrarLenguaje').appendChild(div);
            k++;
            count++;
        }


        var div = document.createElement('div');
        div.setAttribute('class', 'form-inline', 'a', 'style');
        div.innerHTML = '<div class="row d-flex justify-content-center">' +
            '<a onclick="llenar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
            '</div>';
        document.getElementById('confirmar').appendChild(div);
    }



    function llenar() {

        var aux = [];
        var aux2 = [];
        var arrayEntradas = [];
        var arraySalidas = [];
        var arrayConjunto1 = [];
        var arrayConjunto2 = [];
        var arrayEntradas2 = [];
        var arraySalidas2 = [];
        var count1 = 1;
        var count2 = 1;
        var count3 = 1;
        let numero2 = document.getElementById("Automata2").value;
        let numero = document.getElementById("Automata1").value;
        let numero3 = document.getElementById("lenENvalor").value;



        while (count1 <= numero) {
            var automata1 = document.getElementById("a1valor" + count1).value;
            var p = document.getElementById("A1inicial" + count1).checked;
            var f = document.getElementById("A1final" + count1).checked;
            if (p == true && f == false) {
                arrayEntradas.push(automata1);
                arrayConjunto1.push(automata1);
                console.log("arrayEntrada1: ", arrayEntradas);
            } else {
                if (p == false && f == true) {
                    arraySalidas.push(automata1);
                    arrayConjunto1.push(automata1);
                    console.log("arraySalida1: ", arraySalidas);
                } else {
                    arrayConjunto1.push(automata1);
                }
            }
            aux.push(automata1);
            count1++;
        }

        console.log(aux);

        while (count2 <= numero2) {
            var automata2 = document.getElementById("a2valor" + count2).value;
            var p2 = document.getElementById("A2inicial" + count2).checked;
            var f2 = document.getElementById("A2final" + count2).checked;
            if (p2 == true && f2 == false) {
                arrayEntradas2.push(automata2);
                arrayConjunto2.push(automata2);
                console.log("arrayentrada2: ", arrayEntradas2);
            } else {
                if (p2 == false && f2 == true) {
                    arraySalidas2.push(automata2);
                    arrayConjunto2.push(automata2);
                    console.log("arraysalida2: ", arraySalidas2);
                } else {
                    arrayConjunto2.push(automata2);
                }
            }
            aux2.push(automata2);
            count2++;
        }

        console.log(aux2);

    }


    function agregarLEN() {
        var leEntrada = document.getElementById("nEntradas").value;
        console.log(leEntrada);
        var count = 1;
        var x = leEntrada;
        let b = 1;
        while (b <= x) {
            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline');
            div.innerHTML = '<div style="clear:both" class=" "' + x + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                '" class="form-control" style="margin-bottom: 5px;"  placeholder="letra de entrada ' + [b] + ' " ' + x + '" type="text"/>';
            document.getElementById('mostrarLenguaje').appendChild(div);
            b++;
            count++;
        }

    }

    // function confirmar() {
    //     llenar();
    //     agregarLEN();
    // }