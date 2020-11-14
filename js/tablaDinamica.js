    //Aca se guarda el tipo de automata ingresado

    function identificaDatos() {
        const TipoAuto = document.querySelector("#tipoAutomata").value;
        const TipoAuto2 = document.querySelector("#tipoAutomata").value;
        const TipoAutoDuo = document.querySelector("#tipoAutomata").value;
        if (TipoAuto === 'AFD') {
            console.log("Es AFD ");
            return TipoAuto;
        } else if (TipoAuto2 === 'AFND') {

            console.log("Es AFND");
            return TipoAuto2;
        } else if (TipoAutoDuo === 'AFD/AFND') {
            console.log("Es combinacion");
            return TipoAutoDuo;
        }
    }


    //Formulario
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
        texto1.className = "alert alert-warning py-4 mx-2";
        var TipoDato = identificaDatos(); //La agregue
        if (TipoDato === 'AFD') {
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
            texto2.className = "alert alert-warning py-4 mx-2";

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
            texto3.textContent = "Variables automata 1";
            texto3.className = "alert alert-warning py-3 mr-2";
            var leEntrada = document.getElementById("nEntradas").value;
            console.log(leEntrada);
            var count = 1;
            var x = leEntrada;
            let k = 1;
            while (k <= x) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
                document.getElementById('mostrarLenguaje').appendChild(div);
                k++;
                count++;
            }

            const texto4 = document.querySelector("#mostrarLenguaje2");
            texto4.textContent = "Variables Automata 2 ";
            texto4.className = "alert alert-warning py-3 ml-2";
            var leEntrada2 = document.getElementById("nEntradas2").value;
            console.log(leEntrada2);
            var count5 = 1;
            var p = leEntrada2;
            let m = 1;
            while (m <= p) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
                document.getElementById('mostrarLenguaje2').appendChild(div);
                m++;
                count5++;
            }


            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline', 'a', 'style');
            div.innerHTML = '<div class="row d-flex justify-content-center">' +
                '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
                '</div>';
            document.getElementById('confirmar').appendChild(div);

        } else if (TipoDato === 'AFND') {
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
            texto2.className = "alert alert-warning py-4 mx-2";

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
            texto3.textContent = "Variables automata 1";
            texto3.className = "alert alert-warning py-3 mr-2";
            var leEntrada = document.getElementById("nEntradas").value;
            console.log(leEntrada);
            var count = 1;
            var x = leEntrada;
            let k = 1;
            while (k <= x) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
                document.getElementById('mostrarLenguaje').appendChild(div);
                k++;
                count++;
            }

            const texto4 = document.querySelector("#mostrarLenguaje2");
            texto4.textContent = "Variables Automata 2 ";
            texto4.className = "alert alert-warning py-3 ml-2";
            var leEntrada2 = document.getElementById("nEntradas2").value;
            console.log(leEntrada2);
            var count5 = 1;
            var p = leEntrada2;
            let m = 1;
            while (m <= p) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
                document.getElementById('mostrarLenguaje2').appendChild(div);
                m++;
                count5++;
            }


            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline', 'a', 'style');
            div.innerHTML = '<div class="row d-flex justify-content-center">' +
                '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
                '</div>';
            document.getElementById('confirmar').appendChild(div);

        } else if (TipoDato === 'AFD/AFND') {
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
            texto2.className = "alert alert-warning py-4 mx-2";

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
            texto3.textContent = "Variables automata 1";
            texto3.className = "alert alert-warning py-3 mr-2";
            var leEntrada = document.getElementById("nEntradas").value;
            console.log(leEntrada);
            var count = 1;
            var x = leEntrada;
            let k = 1;
            while (k <= x) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
                document.getElementById('mostrarLenguaje').appendChild(div);
                k++;
                count++;
            }

            const texto4 = document.querySelector("#mostrarLenguaje2");
            texto4.textContent = "Variables Automata 2 ";
            texto4.className = "alert alert-warning py-3 ml-2";
            var leEntrada2 = document.getElementById("nEntradas2").value;
            console.log(leEntrada2);
            var count5 = 1;
            var p = leEntrada2;
            let m = 1;
            while (m <= p) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
                document.getElementById('mostrarLenguaje2').appendChild(div);
                m++;
                count5++;
            }


            var div = document.createElement('div');
            div.setAttribute('class', 'form-inline', 'a', 'style');
            div.innerHTML = '<div class="row d-flex justify-content-center">' +
                '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
                '</div>';
            document.getElementById('confirmar').appendChild(div);

        }
        /* while (a <= numero) {
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
         texto2.className = "alert alert-warning py-4 mx-2";

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
             div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                 '" class="form-control" style="margin-bottom: 2px;"  placeholder="letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
             document.getElementById('mostrarLenguaje').appendChild(div);
             k++;
             count++;
         }


         var div = document.createElement('div');
         div.setAttribute('class', 'form-inline', 'a', 'style');
         div.innerHTML = '<div class="row d-flex justify-content-center">' +
             '<a onclick="confirmar()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
             '</div>';
         document.getElementById('confirmar').appendChild(div); */


    }

    function llenar() {
        var arrayEntradas = [];
        var arraySalidas = [];
        var arrayConjunto1 = [];
        var arrayConjunto2 = [];
        var arrayEntradas2 = [];
        var arraySalidas2 = [];
        var arrayReturn = [];
        var count1 = 1;
        var count2 = 1;
        let numero2 = document.getElementById("Automata2").value;
        let numero = document.getElementById("Automata1").value;

        while (count1 <= numero) {
            var automata1 = document.getElementById("a1valor" + count1).value;
            var p = document.getElementById("A1inicial" + count1).checked;
            var f = document.getElementById("A1final" + count1).checked;
            if (p == true && f == false) {
                arrayEntradas.push(automata1);
                console.log("arrayEntrada1: ", arrayEntradas);
            } else {
                if (p == false && f == true) {
                    arraySalidas.push(automata1);
                    console.log("arraySalida1: ", arraySalidas);
                }
            }
            arrayConjunto1.push(automata1);
            count1++;
        }

        console.log("Estos son los estados para el automata 1: ", arrayConjunto1);

        while (count2 <= numero2) {
            var automata2 = document.getElementById("a2valor" + count2).value;
            var p2 = document.getElementById("A2inicial" + count2).checked;
            var f2 = document.getElementById("A2final" + count2).checked;
            if (p2 == true && f2 == false) {
                arrayEntradas2.push(automata2);
                console.log("arrayentrada2: ", arrayEntradas2);
            } else {
                if (p2 == false && f2 == true) {
                    arraySalidas2.push(automata2);
                    console.log("arraysalida2: ", arraySalidas2);
                }
            }
            arrayConjunto2.push(automata2);
            count2++;

        }
        console.log("Estos son los estados para el automata 2: ", arrayConjunto2);

        arrayReturn.push(arrayConjunto1); //0
        arrayReturn.push(arrayConjunto2); //1
        arrayReturn.push(arrayEntradas); //2
        arrayReturn.push(arraySalidas); //3
        arrayReturn.push(arrayEntradas2); //4
        arrayReturn.push(arraySalidas2); //5
        //console.log("aqui sabre que onda : ", arrayReturn[0][1]);


        return arrayReturn;

    }

    function llenarLEN() {
        var leEntrada = document.getElementById("nEntradas").value;
        var leEntrada2 = document.getElementById("nEntradas2").value;
        console.log(leEntrada);
        var arraylenguaje = [];
        var arraylenguaje2 = [];
        var ArrayDefinitivo = [];
        var contador = 1;
        var contador2 = 1;

        while (contador <= leEntrada) {
            var lenguaje = document.getElementById("lenENvalor" + contador).value;
            arraylenguaje.push(lenguaje);
            contador++;


        }

        while (contador2 <= leEntrada2) {
            var lenguaje = document.getElementById("2enENvalor" + contador2).value;
            arraylenguaje2.push(lenguaje);
            contador2++;


        }

        console.log("estos son los lenguajes: ", arraylenguaje);

        ArrayDefinitivo.push(arraylenguaje); //Lenguajes 1°er Automata [0]
        ArrayDefinitivo.push(arraylenguaje2); //Lenguajes 2°do Automata [1]
        return ArrayDefinitivo;


    }

    var transiciones = ['Entrada', 'Lectura', 'Destino'];

    //Variables para tabla dcion1
    const tablaTransicion1 = document.querySelector("#tablaTransicion1");
    //Variables para tabla dcion2
    const tablaTransicion2 = document.querySelector("#tablaTransicion2");

    //Funcion llenar tabla
    function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
        var count4 = 0;
        var arrayTra = [];
        var tablaPadre = document.createElement('table'),
            filaTitulo = document.createElement('tr');
        tablaPadre.style.marginLeft = "93px";
        //tablaPadre.style.marginRight = "10px";
        tablaPadre.style.paddingBottom = "80px";
        tablaPadre.style.paddingTop = "80px";
        for (let i = 0; i < transiciones.length; i++) {
            var colTitulo = document.createElement('td');
            colTitulo.className = 'formatoTablaTitulo ';
            colTitulo.textContent = transiciones[i];
            colTitulo.style.width = "100px";
            colTitulo.style.height = "30px";
            colTitulo.style.backgroundColor = "#CDA434";
            colTitulo.style.textAlign = "center";

            filaTitulo.appendChild(colTitulo);
        }
        tablaPadre.appendChild(filaTitulo);
        for (let i = 0; i < arrayConjunto.length; i++) {
            for (let j = 0; j < arraylenguaje.length; j++) {
                var filaDatos = document.createElement('tr'),
                    colEstados = document.createElement('td'),
                    collenguaje = document.createElement('td'),
                    colInput = document.createElement('td');
                input = document.createElement('input')
                    //estilos y contenido a las columnas
                filaDatos.style.width = "100px";
                filaDatos.style.height = "30px";
                filaDatos.style.backgroundColor = "#cda4345b";
                filaDatos.style.textAlign = "center";
                filaDatos.style.borderColor = "#1a1a1a";
                filaDatos.style.marginBottom = "10px";
                colEstados.className = 'formatoTabla';
                colEstados.textContent = arrayConjunto[i];
                collenguaje.className = 'formatoTabla';
                collenguaje.textContent = arraylenguaje[j];
                input.className = 'forma-control';
                input.setAttribute('placeholder', 'Estado Destino');
                input.setAttribute('type', 'text');
                input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;
                arrayTra.push(input.id);
                count4++;

                //agrego los elementos a sus nodos padres
                colInput.appendChild(input);
                filaDatos.appendChild(colEstados);
                filaDatos.appendChild(collenguaje);
                filaDatos.appendChild(colInput);
                tablaPadre.appendChild(filaDatos);
            }

        }

        tablaTransicion1.appendChild(tablaPadre);
        console.log("este es el array", arrayTra);

        return arrayTra;

    }

    function confirmar() {
        var aux1 = llenar();
        var aux = llenarLEN();
        TablaTransicion(aux1[0], aux[0], tablaTransicion1);
        const TipoAuto = document.querySelector("#tipoAutomata").value;

        TablaTransicion(aux1[1], aux[1], tablaTransicion2);
        const TipoAuto2 = document.querySelector("#tipoAutomata").value;
        console.log(TipoAuto2);
        const TipoAutoDuo = document.querySelector("#tipoAutomata").value;

        //llenarTransicion(aux[0], aux)

        if (TipoAuto === 'AFD') {
            console.log("Es AFD ");
            return true;
        } else if (TipoAuto === 'AFND') {

            console.log("Es AFND");
            return true;
        } else if (TipoAutoDuo == 'AFD/AFND') {
            console.log("Es combinacion");
            return true;

        }
    }


    function llenarTransicion1() {
        var aux = llenar()[0];
        var len = llenarLEN()[0];

        var arrayTransiciones = [];
        cont = 0;

        for (let i = 0; i < aux.length; i++) {
            for (let j = 0; j < len.length; j++) {
                var t1 = document.getElementById(`${aux[i]}-${len[j]}`).value;
                arrayTransiciones.push(t1);
            }

        }

        console.log("las transiciones son", arrayTransiciones);


        return arrayTransiciones;

    }

    function llenarTransicion2() {
        var aux = llenar()[1];
        var len = llenarLEN()[1];

        var arrayTransiciones = [];
        cont = 0;

        for (let i = 0; i < aux.length; i++) {
            for (let j = 0; j < len.length; j++) {
                var t1 = document.getElementById(`${aux[i]}-${len[j]}`).value;
                arrayTransiciones.push(t1);
            }

        }

        console.log("las transiciones son", arrayTransiciones);


        return arrayTransiciones;

    }


    function primeraQuintupla() {
        var conjunto1 = llenar()[0];
        var entrada1 = llenar()[2];
        var salida1 = llenar()[3];
        var lenguaje = llenarLEN()[0];
        var transicion1 = transicionCompleta()[0];

        var conjunto2 = llenar()[1];
        var lenguaje2 = llenarLEN()[1];
        var entrada2 = llenar()[4];
        var salida2 = llenar()[5];
        var transicion2 = transicionCompleta()[1];

        const output1 = document.querySelector("#primeraQuintupla1");
        const output2 = document.querySelector("#primeraQuintupla2");
        const output3 = document.querySelector("#primeraQuintupla3");
        const output4 = document.querySelector("#primeraQuintupla4");
        const output5 = document.querySelector("#primeraQuintupla5");

        const output6 = document.querySelector("#segundaQuintupla1");
        const output7 = document.querySelector("#segundaQuintupla2");
        const output8 = document.querySelector("#segundaQuintupla3");
        const output9 = document.querySelector("#segundaQuintupla4");
        const output10 = document.querySelector("#segundaQuintupla5");

        output1.textContent = (`El conjunto Q de estados es:  [${conjunto1}]:`);
        //output1.className = "alert alert-warning text-aling-center";

        output2.textContent = (`El estado inicial es:  [${entrada1}]`);
        //output2.className = "alert alert-warning text-aling-center";

        output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
        //output3.className = "alert alert-warning text-aling-center";

        output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
        //output4.className = "alert alert-warning text-aling-center";

        output5.textContent = (`La transición 1 es:  [${transicion1}]:`);
        //output5.className = "alert alert-warning text-aling-center";


        output6.textContent = (`El conjunto Q de estados es:  [${conjunto2}]:`);
        //output6.className = "alert alert-warning text-aling-center";

        output7.textContent = (`El estado inicial es:  [${entrada2}]`);
        //output7.className = "alert alert-warning text-aling-center";

        output8.textContent = (`El conjunto de salidas del automata 2 es:  [${salida2}]`);
        //output8.className = "alert alert-warning text-aling-center";

        output9.textContent = (`El alfabeto asociado es:  [${lenguaje2}]:`);
        //output9.className = "alert alert-warning text-aling-center";

        output10.textContent = (`La transición 2 es:  [${transicion2}]:`);
        output10.className = "mb-5";


    }

    function confirmarTRA() {
        llenarTransicion1();
        llenarTransicion2();
        primeraQuintupla();
        validadorGeneral();
        transicionCompleta();
        //const mostrar = document.querySelector("#quintupla");
        //mostrar.appendChild(primeraQuintupla());
    }


    function TablaTransicionVacia(arrayConjunto, arraylenguaje, tablaTransicion1) {
        var count4 = 0;
        var arrayTra = [];
        var tablaPadre = document.createElement('table'),
            filaTitulo = document.createElement('tr');
        tablaPadre.style.marginLeft = "50px";
        tablaPadre.style.marginRight = "50px";
        tablaPadre.style.paddingBottom = "80px";
        tablaPadre.style.paddingTop = "80px";
        for (let i = 0; i < transiciones.length; i++) {
            var colTitulo = document.createElement('td');
            colTitulo.className = 'formatoTablaTitulo';
            colTitulo.textContent = transiciones[i];
            colTitulo.style.width = "100px";
            colTitulo.style.height = "30px";
            colTitulo.style.backgroundColor = "#CDA434";
            colTitulo.style.textAlign = "center";


        }

        for (let i = 0; i < arrayConjunto.length; i++) {
            for (let j = 0; j < arraylenguaje.length; j++) {
                var filaDatos = document.createElement('tr'),
                    colEstados = document.createElement('td'),
                    collenguaje = document.createElement('td'),
                    colInput = document.createElement('td');
                input = document.createElement('input')
                    //estilos y contenido a las columnas
                filaDatos.style.width = "100px";
                filaDatos.style.height = "30px";
                filaDatos.style.backgroundColor = "#cda4345b";
                filaDatos.style.textAlign = "center";
                filaDatos.style.borderColor = "#1a1a1a";
                filaDatos.style.marginBottom = "10px";
                colEstados.className = 'formatoTabla';
                colEstados.textContent = arrayConjunto[i];
                collenguaje.className = 'formatoTabla';
                collenguaje.textContent = arraylenguaje[j];
                input.className = 'forma-control';
                input.setAttribute('placeholder', 'Estado Destino');
                input.setAttribute('type', 'text');
                input.id = `${arrayConjunto[i]}-${arraylenguaje[j]}`;

                arrayTra.push(input.id);
                count4++;

            }

        }

        console.log("este es el array", arrayTra);


        return arrayTra;

    }

    function transicionCompleta() {
        var array1 = [];
        var array2 = [];
        var arrayresultante = [];

        const tablaTransicion4 = document.querySelector("#tablaTransicion3");

        const tablaTransicion3 = document.querySelector("#tablaTransicion4");

        var aux1 = llenar();
        var aux = llenarLEN();
        var idTra1 = TablaTransicionVacia(aux1[0], aux[0], tablaTransicion4);
        var idTra2 = TablaTransicionVacia(aux1[1], aux[1], tablaTransicion3);

        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();

        for (let i = 0; i < idTra1.length; i++) {
            var conca = [idTra1[i] + " --> " + transicion1[i]];
            array1.push(conca);
        }

        for (let j = 0; j < idTra2.length; j++) {
            var conca2 = [idTra2[j] + " --> " + transicion2[j]];
            array2.push(conca2);
        }

        console.log("este es el array: ", array1);
        console.log("este es el array: ", array2);

        arrayresultante.push(array1);
        arrayresultante.push(array2);

        return arrayresultante;


    }

    function Complemento() {
        var arrayEntradaComplemento = llenar()[2];
        var arraySalidaComplemento = llenar()[3];
        var arrayEntradaComplemento2 = llenar()[4];
        var arraySalidaComplemento2 = llenar()[5];
        var arrayEcomplementada = [];
        var arrayScomplementada = [];
        var arrayEcomplementada2 = [];
        var arrayScomplementada2 = [];
        const TipoAuto5 = document.querySelector("#tipoAutomata").value;
        if (TipoAuto5 === 'AFD') {
            arrayEcomplementada = arraySalidaComplemento;
            arrayScomplementada = arrayEntradaComplemento;
            arrayEcomplementada2 = arraySalidaComplemento2;
            arrayScomplementada2 = arrayEntradaComplemento2;

            var conjunto1 = llenar()[0];
            var conjunto2 = llenar()[1];
            var lenguaje1 = llenarLEN()[0];
            var lenguaje2 = llenarLEN()[1];
            var transicionAutomata1 = transicionCompleta()[0];
            var transicionAutomata2 = transicionCompleta()[1];

            console.log("Los complemtentos del primer Automata para las entradas son: ", arrayEcomplementada);
            console.log("Los complemtentos del primer Automata para las salidas son: ", arrayScomplementada);

            console.log("Los complementos del segundo automata para las entradas son: ", arrayEcomplementada2);
            console.log("Los complementos del segundo automata para las salidas son: ", arrayScomplementada2);

            const output1 = document.querySelector("#mensajeComplemento");
            const output2 = document.querySelector("#automata1Com");
            const output3 = document.querySelector("#conjuntoComplemento"); //conjunto a1
            const output4 = document.querySelector("#entradaComplemento"); // entrada
            const output5 = document.querySelector("#salidaComplemento"); // salidas
            const output6 = document.querySelector("#lenguajeComplemento"); // lenguaje
            const output7 = document.querySelector("#transicionComplemento"); // transicion
            const output8 = document.querySelector("#mensajeComplemento1");
            const output9 = document.querySelector("#conjuntoComplemento1"); //conjunto a2
            const output10 = document.querySelector("#entradaComplemento1"); // entrada
            const output11 = document.querySelector("#salidaComplemento1"); // salidas
            const output12 = document.querySelector("#lenguajeComplemento1"); // lenguaje
            const output13 = document.querySelector("#transicionComplemento1"); // transicion


            output1.textContent = (`El Complemento pasa los estados iniciales a finales y viceversa`);
            output1.style.className = "divider";
            output2.textContent = (`Complemento del Automata 1`);
            output2.style.className = "py-3";
            output3.textContent = (`El conjunto del automata 1 complemento:  [${conjunto1}]`);
            output3.style.className = "ml-3";
            output4.textContent = (`El estado inicial del automata 1 complemento:  [${arrayEcomplementada}]`);
            output4.style.className = "ml-3";
            output5.textContent = (`Los estados finales del automata 1 complemento:  [${arrayScomplementada}]`);
            output5.style.className = "ml-3";
            output6.textContent = (`El lenguaje del automata 1 complemento:  [${lenguaje1}]`);
            output6.style.className = "ml-3";
            output7.textContent = (`Las transiciones del automata 1 complemento:  [${transicionAutomata1}]`);
            output7.style.className = "ml-3";
            //Automata 2//
            output8.textContent = (`Complemento del Automata 2`);
            output8.style.className = "py-3";
            output9.textContent = (`El conjunto del automata 2 complemento:  [${conjunto2}]`);
            output10.textContent = (`El estado inicial del automata 2 complemento:  [${arrayEcomplementada2}]`);
            output11.textContent = (`Los estados finales del automata 2 complemento:  [${arrayScomplementada2}]`);
            output12.textContent = (`El lenguaje del automata 2 complemento:  [${lenguaje2}]`);
            output13.textContent = (`Las transiciones del automata 2 complemento:  [${transicionAutomata2}]`);


        }

        if (TipoAuto5 == 'AFD/AFND') {
            arrayEcomplementada = arraySalidaComplemento;
            arrayScomplementada = arrayEntradaComplemento;
        }

    }



    function validador1() {
        var arrayvali = llenar()[0];
        var transi = llenarTransicion1();
        var contador = 0;
        var aux1;
        for (let i = 0; i < arrayvali.length; i++) {
            aux1 = arrayvali[i];
            for (let j = 0; j < transi.length; j++) { //para afd no sirve el @
                if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                } else if (aux1 === transi[j]) { // || transi[j] == "@") {
                    contador++;
                }
            }
        }
        if (contador !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        }
    }

    function validador2() {
        var arrayvali = llenar()[1];
        var transi = llenarTransicion2();
        var contador = 0;
        var aux1;
        for (let i = 0; i < arrayvali.length; i++) {
            aux1 = arrayvali[i];
            for (let j = 0; j < transi.length; j++) {
                if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata N°2!");
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        if (contador !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
        }
    }

    function validador3() { //para afnd 
        var arrayvali = llenar()[0];
        var transi = llenarTransicion1();
        var contador = 0;
        var contador2 = 0;
        var aux1;
        console.log("valor de ultimo if:", transi.length, transi);
        for (let k = 0; k < transi.length; k++) {
            if (transi[k] === "@") {
                contador2++;
            }
        }
        for (let i = 0; i < arrayvali.length; i++) {
            aux1 = arrayvali[i];
            for (let j = 0; j < transi.length; j++) { //para afd no sirve el @
                if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                } else if (aux1 === transi[j]) { // || transi[j] == "@") {
                    contador++;
                }
            }
        }
        if ((contador + contador2) !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
        }
    }


    function validador4() { //para afnd 
        var arrayvali = llenar()[1];
        var transi = llenarTransicion2();
        var contador = 0;
        var contador2 = 0;
        var aux1;
        for (let k = 0; k < transi.length; k++) {
            if (transi[k] === "@") {
                contador2++;
            }
        }
        for (let i = 0; i < arrayvali.length; i++) {
            aux1 = arrayvali[i];
            for (let j = 0; j < transi.length; j++) {
                if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°2!");
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        console.log("VALOR FINAL CONTADOR4", contador);
        if ((contador + contador2) !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
        }
    }

    function validadorGeneral() {
        var TipoDatos = identificaDatos();
        if (TipoDatos === 'AFD') {
            console.log("entro a validador AFD");
            validador1();
            validador2();
        } else if (TipoDatos === 'AFND') {
            console.log("entro a validador AFND");
            validador3();
            validador4();
        } else if (TipoDatos === 'AFD/AFND') {
            console.log("entro a validador AFD/AFND");
            validador1();
            validador4();
        }
    }



    // Q0 es un nuevo estado que te une a traves de un epsilon los estados iniciales
    /* Ejemplo:
                                        Iniciales = q0,w1
                                        Creamos el nuevo estado inicial Q0
                                        Unimos mediante el Q0 ambos estados iniciales, mediante el uso del @

                                        Nos quedaria: (Q0-@-->q0) , (Q0-@-->w1)
                
                                        */
    function union() {
        var newEstados = ['Q0'];
        var automata1 = llenar()[0]; //conjunto del automata 1 q0, q1
        var automata2 = llenar()[1]; // conjunto del automata 2 q2, q3
        var salidas1 = llenar()[3];
        var salidas2 = llenar()[5];
        var entradas1 = llenar()[2];
        var entradas2 = llenar()[4];

        var lenguajeUnion = [];

        var lenguaje1 = llenarLEN()[0];
        var lenguaje2 = llenarLEN()[1];
        var conjuntoUnion = [],
            unionSalidaas = [],
            transicionUnion = [];

        conjuntoUnion.push(newEstados);

        for (let i = 0; i < automata1.length; i++) { // nuevo conjunto es [Q0, q0, q1]
            conjuntoUnion.push(automata1[i]);
        }

        for (let k = 0; k < automata2.length; k++) { // nuevo conjunto es [Q0, q0, q1,q2,q3]
            conjuntoUnion.push(automata2[k]);
        }

        for (let a = 0; a < salidas1.length; a++) {
            unionSalidaas.push(salidas1[a]);
        }
        for (let b = 0; b < salidas2.length; b++) {
            unionSalidaas.push(salidas2[b]);
        }
        lenguajeUnion.push(lenguaje1);
        lenguajeUnion.push(lenguaje2);
        lenguajeUnion.push("@");

        var transicionAutomata1 = transicionCompleta()[0];
        var transicionAutomata2 = transicionCompleta()[1];

        transicionUnion.push(newEstados[0] + "-@-->" + entradas1[0]);
        transicionUnion.push(newEstados[0] + "-@-->" + entradas2[0]);

        for (let c = 0; c < transicionAutomata1.length; c++) {
            transicionUnion.push(transicionAutomata1[c]);
        }
        for (let d = 0; d < transicionAutomata2.length; d++) {
            transicionUnion.push(transicionAutomata2[d]);
        }
        const output1 = document.querySelector("#conjuntoUnion");
        const output2 = document.querySelector("#entradaUnion");
        const output3 = document.querySelector("#salidaUnion");
        const output4 = document.querySelector("#lenguajeUnion");
        const output5 = document.querySelector("#transicionUnion");

        output1.textContent = (`El conjunto unión de estados es =  [${conjuntoUnion}]:`);
        output1.className = "mb-2 ml-3";
        output2.textContent = (`El estado inicial viene dado por =  [${newEstados}]`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`Las salidas de Union del automata 1 es =  [${unionSalidaas}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`El alfabeto asociado es =  [${lenguajeUnion}]:`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`La transición de unión es =  [${transicionUnion}]:`);
        output5.className = "mb-2 ml-3";

    }

    function ObtenerDatos() {
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();
        var aux1 = [];
        var aux2 = llenarLEN()[0]; // x y
        var aux7 = llenarLEN()[1];
        var ayuda1;
        var ayuda2;
        var ayuda3;
        var ayuda4;
        var conjunto1 = llenar()[0];
        var conjunto2 = llenar()[1];
        var aux3 = [],
            aux4 = [],
            aux5 = [],
            aux6 = [];
        for (let i = 0; i < conjunto1.length; i++) {
            for (let j = 0; j < aux2.length; j++) {
                ayuda1 = conjunto1[i];
                aux3.push(ayuda1);
                ayuda2 = aux2[j];
                aux4.push(ayuda2);
            }
        }
        aux1.push(aux3); //Conjunto1 [0]
        aux1.push(aux4); //Lenguaje1 [1]
        aux1.push(transicion1); //transicion1 [2]
        for (let k = 0; k < conjunto2.length; k++) {
            for (let l = 0; l < aux7.length; l++) {
                ayuda3 = conjunto2[k];
                aux5.push(ayuda1);
                ayuda4 = aux7[l];
                aux6.push(ayuda2);
            }
        }
        aux1.push(aux5); //Conjunto2 [3]
        aux1.push(aux6); //Lenguaje2 [4]
        aux1.push(transicion2); //transicion2 [5]
        return aux1;
    }

    function simplificar() { //simplificar 1°er Automata
        var Conjunto1 = ObtenerDatos()[0]; // x e y ----> q0, q1 y q2 ------> [q0 q0 q1 q1 q2 q2]
        console.log(" A :", Conjunto1);
        var Lenguaje1 = ObtenerDatos()[1]; // x e y ----> q0, q1 y q2 ------> [x y x y x y]
        console.log(" B :", Lenguaje1);
        var Transicion1 = ObtenerDatos()[2]; // [q1 q2 q0 q1 q2 q1]
        console.log(" C :", Transicion1);
        var arrayResultado = [];
        var rescatado = "";
        var rescatado2 = "";
        var aux1, aux2, aux3;
        var aux4 = [],
            aux5 = [],
            aux6 = [];
        Conjunto1.sort();
        for (let i = 0; i < Conjunto1.length; i++) {
            aux = Conjunto1[i];
            if (Conjunto1[i] === Transicion1[i]) {
                if (rescatado !== aux) {
                    aux1 = Conjunto1[i];
                    console.log("Resultado como quedo el conjunto1 debe ser igual a la transicion1", aux1);
                    aux4.push(aux1);
                    aux2 = Lenguaje1[i];
                    console.log("Resultado como quedo el lenguaje1 cuando conjunto1 debe ser igual a la transicion1 ", aux2);
                    aux5.push(aux2);
                    aux3 = Transicion1[i];
                    console.log("Resultado como quedo el nueva transicion1 debe ser igual al conjunto1", aux3);
                    aux6.push(aux3);
                }
            } else {
                for (let j = 0; j < Transicion1.length; j++) {
                    console.log("VALORES TRABAJANDO :", aux, i, Transicion1[j], j);
                    if (aux !== rescatado && rescatado2 !== Transicion1[j]) {
                        if (aux === Transicion1[j]) {
                            if (Conjunto1[j] === Transicion1[i]) {
                                aux1 = Conjunto1[i];
                                console.log("Resultado como quedo el conjunto1", aux1);
                                aux4.push(aux1);
                                aux2 = Lenguaje1[i];
                                console.log("Resultado como quedo el lenguaje1", aux2);
                                aux5.push(aux2);
                                aux3 = Transicion1[j];
                                console.log("Resultado como quedo el nueva transicion1", aux3);
                                aux6.push(aux3);
                                rescatado = Conjunto1[j];
                                rescatado2 = Conjunto1[i];
                                console.log("RESCATADO :", rescatado);
                                console.log("RESCATADO2 :", rescatado2);

                            } else {
                                aux1 = Conjunto1[i];
                                console.log("Resultado como quedo el conjunto1 debe ser igual a la transicion1", aux1);
                                aux4.push(aux1);
                                aux2 = Lenguaje1[j];
                                console.log("Resultado como quedo el lenguaje1 cuando conjunto1 debe ser igual a la transicion1 ", aux2);
                                aux5.push(aux2);
                                aux3 = Transicion1[j];
                                console.log("Resultado como quedo el nueva transicion1 debe ser igual al conjunto1", aux3);
                                aux6.push(aux3);
                            }
                        }
                    }
                }
            }
        }
        arrayResultado.push(aux4);
        arrayResultado.push(aux5);
        arrayResultado.push(aux6);
        return arrayResultado;
    }


    function imprimirSimplificar() {
        var simplificar1 = simplificar();
        const output1 = document.querySelector("#simplicar");
        output1.textContent = (`El conjunto Union de estados es:  [${simplificar1}]`);

    }
    //CONCATENACION:orden de concatenacion importaejemplo: A--concat--B != B--concat--A
    //Los finales del primer automata se unen con el(los) inical(es) del segundo mediante un epsilon, luegopasana dejar de ser finales,C/+/**//
    //Los finales del primer automata se unen con el(los) inical(es) del segundo mediante un epsilon, luegopasana dejar de ser finales,C/+/**//A


    /* Se unen los estados finales con los iniciales del segundo automata
            A; inicial = q0 , final = q1
            B; inicial = w1 , final = w0

            Si se une B-->A

            Quiere decir que el nuevo inicial del conjunto unido sera: w1 y el final sera q1, se unen atraves de un epsilon 
    */

    function concatenacion() {

        var conjunto1 = llenar()[0];
        var conjunto2 = llenar()[1];
        var entrada1 = llenar()[2];
        var salida2 = llenar()[5];

        console.log("este es el conjunto 1:", conjunto1);
        console.log("este es el conjunto 2 :", conjunto2);

        var transicion1 = transicionCompleta()[0];
        var transicion2 = transicionCompleta()[1];

        var lenguaje1 = llenarLEN()[0];
        var lenguaje2 = llenarLEN()[1];


        var arrayConjuntoConca = [];
        var entradaConca = [];
        var salidaConca = [];
        var transicionConca = [];
        var lenguajesConca = [];


        for (let i = 0; i < conjunto1.length; i++) {
            arrayConjuntoConca.push(conjunto1[i]);
        }

        for (let j = 0; j < conjunto2.length; j++) {
            arrayConjuntoConca.push(conjunto2[j]);
        }

        entradaConca.push(entrada1[0]);


        for (w = 0; w < salida2.length; w++) {
            salidaConca.push(salida2[w]);
        }




        transicionConca.push(entrada1[0] + "-@-->" + salida2[0]);

        for (let a = 0; a < transicion1.length; a++) {
            transicionConca.push(transicion1[a]);
        }

        for (let b = 0; b < transicion1.length; b++) {
            transicionConca.push(transicion2[b]);
        }

        for (let c = 0; c < lenguaje1.length; c++) {
            lenguajesConca.push(lenguaje1[c]);
        }

        for (let d = 0; d < lenguaje2.length; d++) {
            lenguajesConca.push(lenguaje2[d]);
        }

        lenguajesConca.push("@");

        const output1 = document.querySelector("#conjuntoConca");
        const output2 = document.querySelector("#entradaConca");
        const output3 = document.querySelector("#salidaConca");
        const output4 = document.querySelector("#lenguajeConca");
        const output5 = document.querySelector("#transicionConca");

        output1.textContent = (`El conjunto de concatenacion de estados es =  [${arrayConjuntoConca}]:`);
        output1.className = "mb-2 ml-3";
        output2.textContent = (`El estado inicial viene dado por =  [${entradaConca}]`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`Las salida de concatenacion del automata 1 es =  [${salidaConca}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`El alfabeto asociado es =  [${lenguajesConca}]:`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`La transición de concatenacion es =  [${transicionConca}]:`);
        output5.className = "mb-2 ml-3";


    }

    function interseccion1() {
        var conjunto1 = ObtenerDatos()[0]; //q0 q0 q1 q1
        var conjunto2 = ObtenerDatos()[1]; //w0 w0 w1 w1
        var entrada1 = llenar()[2];
        var finales1 = llenar()[3];
        var entrada2 = llenar()[4];
        var finales2 = llenar()[5];
        var Lenguaje1 = ObtenerDatos()[1];
        var Lenguaje2 = ObtenerDatos()[4];
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();
        var aux2 = [];
        for (let i = 0; i < entrada1.length; i++) {
            var aux = entrada1[i];
            for (let j = 0; j < Lenguaje1.length; j++) {
                if (aux === conjunto1[j]) {
                    aux2.push(conjunto1[j]);
                    aux3.push(Lenguaje1[j]);
                    aux4.push(transicion1[j]);

                }
            }
        }
        for (let i = 0; i < entrada1.length; i++) {
            var aux = entrada2[i];
            for (let j = 0; j < Lenguaje2.length; j++) {
                if (aux === conjunto1[j]) {
                    aux5.push(conjunto2[j]);
                    aux6.push(Lenguaje2[j]);
                    aux7.push(transicion12[j]);
                }
            }
        }
        for (let i = 0; i < entrada1.length; i++) {
            var aux8 = Lenguaje1[i];
            for (let j = 0; j < Lenguaje2.length; j++) {


            }
        }
    }


    function interseccion() {
        var conju1 = llenar()[0];
        var conju2 = llenar()[1];
        var entra1 = llenar()[2];
        var entra2 = llenar()[4];
        var sal1 = llenar()[3];
        var sal2 = llenar()[5];
        var lengua1 = llenarLEN()[0];
        var lengua2 = llenarLEN()[1];
        var transicion1 = transicionCompleta()[0];
        var transicion2 = transicionCompleta()[1];
        var arrayTraInter = [];

        var entradasinter = [];
        var salidasinter = [];
        var conjuntointer = [];
        var confirma = false;
        for (let t = 0; t < lengua1.length; t++) {
            if (lengua1[t] !== lengua2[t]) {
                confirma = false;
                window.alert("Los lenguajes no son iguales, deben serlo para la interseccion");
            } else {
                confirma = true;
            }
        }
        if (confirma === true) {
            for (let i = 0; i < conju1.length; i++) {
                for (let j = 0; j < conju2.length; j++) {
                    conjuntointer.push(conju1[i].concat(conju2[j]));
                }
            }
            console.log(conjuntointer);

            for (let k = 0; k < entra1.length; k++) {
                for (let r = 0; r < entra2.length; r++) {
                    entradasinter.push(entra1[k].concat(entra2[r]));
                }
            }
            console.log(entradasinter);

            for (let m = 0; m < sal1.length; m++) {
                for (let w = 0; w < sal2.length; w++) {
                    salidasinter.push(sal1[m].concat(sal2[w]));

                }
            }
            console.log(salidasinter);



        }
        var largo = (transicion1.length) + (transicion2.length);


        for (let t = 0; t < largo; t++) {



        }

    }

    Array.prototype.unique = function(a) {
        return function() { return this.filter(a) }
    }(function(a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    function convertirAFNDtoAFD() {

        var conjunto1 = llenar()[0];
        var conjunto2 = llenar()[1];
        var entrada1 = llenar()[2];
        var salida1 = llenar()[3];
        var entrada2 = llenar()[4];
        var salida2 = llenar()[5];


        var lenguaje1 = llenarLEN()[0];
        var lenguaje2 = llenarLEN()[1];


        var arrayDestino = [];
        var arrayDestino2 = [];
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();
        var count = 1;
        //Automata 1//
        for (let i = 0; i < transicion1.length; i++) {
            if (transicion1[i] === "@") {
                conjunto1.push("S" + count);
                arrayDestino.push("S" + count);
            } else {
                arrayDestino.push(transicion1[i]);
            }
        }
        console.log(conjunto1);
        var conjuntoAFND = conjunto1.unique();
        console.log(conjuntoAFND);
        console.log(arrayDestino);
        var array1 = [];
        const tablaTransicion4 = document.querySelector("#tablaTransicion3");
        var aux = llenarLEN();
        var idTra1 = TablaTransicionVacia(conjuntoAFND, aux[0], tablaTransicion4);
        console.log(idTra1);
        cont = 1;

        for (let k = 0; k < idTra1.length; k++) {
            var t = "S" + cont + "-" + aux[0][0];
            var p = "S" + cont + "-" + aux[0][1];
            if (idTra1[k] === t) {
                arrayDestino.push("S" + cont);
            } else {
                if (idTra1[k] === p) {
                    arrayDestino.push("S" + cont);
                }
            }
        }
        for (let i = 0; i < idTra1.length; i++) {
            var conca = [idTra1[i] + " --> " + arrayDestino[i]];
            array1.push(conca);
        }
        console.log(array1);

        // automata 2//

        const tablaTransicion3 = document.querySelector("#tablaTransicion4");


        for (let v = 0; v < transicion2.length; v++) {
            if (transicion2[v] === "@") {
                conjunto2.push("S" + count);
                arrayDestino2.push("S" + count);



            } else {
                arrayDestino2.push(transicion2[v]);

            }

        }


        console.log(conjunto2);

        var conjuntoAFND2 = conjunto2.unique();

        console.log(conjuntoAFND2);
        console.log(arrayDestino2);



        var idTra2 = TablaTransicionVacia(conjuntoAFND2, aux[1], tablaTransicion3);

        var array2 = [];

        var aux6 = llenarLEN();
        console.log(idTra2);


        for (let n = 0; n < idTra2.length; n++) {
            var j = "S" + cont + "-" + aux6[1][0];
            var r = "S" + cont + "-" + aux6[1][1];

            if (idTra2[n] === j) {
                arrayDestino2.push("S" + cont);

            } else {
                if (idTra2[n] === r) {
                    arrayDestino2.push("S" + cont);
                }

            }

        }

        for (let g = 0; g < idTra2.length; g++) {
            var conca2 = [idTra2[g] + " --> " + arrayDestino2[g]];
            array2.push(conca2);
        }
        console.log(array2);

        const output1 = document.querySelector("#mensajeGeneral");
        const output2 = document.querySelector("#mensajeConvertido");
        const output3 = document.querySelector("#conjuntoConvertido"); //conjunto a1
        const output4 = document.querySelector("#entradaConvertido"); // entrada
        const output5 = document.querySelector("#salidaConvertido"); // salidas
        const output6 = document.querySelector("#lenguajeConvertido"); // lenguaje
        const output7 = document.querySelector("#transicionConvertido"); // transicion
        const output8 = document.querySelector("#mensajeConvertido1");
        const output9 = document.querySelector("#conjuntoConvertido1"); //conjunto a2
        const output10 = document.querySelector("#entradaConvertido1"); // entrada
        const output11 = document.querySelector("#salidaConvertido1"); // salidas
        const output12 = document.querySelector("#lenguajeConvertido1"); // lenguaje
        const output13 = document.querySelector("#transicionConvertido1"); // transicion


        output1.textContent = (`Se convierten los automatas AFND a AFD`);
        output1.style.className = "mb-4";
        output2.textContent = (`AFND a AFD Automata 1`);
        output2.style.className = "py-3";
        output3.textContent = (`El conjunto del automata 1 :  [${conjuntoAFND}]`);
        output3.style.className = "ml-3";
        output4.textContent = (`El estado inicial del automata 1:  [${entrada1}]`);
        output4.style.className = "ml-3";
        output5.textContent = (`Los estados finales del automata 1 :  [${salida1}]`);
        output5.style.className = "ml-3";
        output6.textContent = (`El lenguaje del automata 1 :  [${lenguaje1}]`);
        output6.style.className = "ml-3";
        output7.textContent = (`Las transiciones del automata 1:  [${array1}]`);
        output7.style.className = "ml-3";
        //Automata 2//
        output8.textContent = (`AFND a AFD del Automata 2`);
        output8.style.className = "py-3";
        output9.textContent = (`El conjunto del automata 2:  [${conjuntoAFND2}]`);
        output10.textContent = (`El estado inicial del automata 2:  [${entrada2}]`);
        output11.textContent = (`Los estados finales del automata 2:  [${salida2}]`);
        output12.textContent = (`El lenguaje del automata 2:  [${lenguaje2}]`);
        output13.textContent = (`Las transiciones del automata 2:  [${array2}]`);
    }
    //