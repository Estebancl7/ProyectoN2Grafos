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
            console.log("Es Combinacion");
            return TipoAutoDuo;
        }
    }

    function addFormulario() {
        let a = 1;
        let cont = 0;
        let numero = document.getElementById("Automata1").value;
        let numero2 = document.getElementById("Automata2").value;
        var aux1 = [];
        var aux2 = [];
        count1 = 1;
        const texto1 = document.querySelector("#formulario");
        texto1.textContent = "Nombres para el automata 1";
        texto1.className = "alert alert-warning py-4 mx-2";
        var TipoDato = identificaDatos();

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
            texto2.textContent = "Nombres para el automata 2";
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
            console.log("Lenguaje Automata N°1 :", leEntrada);
            var count = 1;
            var x = leEntrada;
            let k = 1;

            while (k <= x) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
                document.getElementById('mostrarLenguaje').appendChild(div);
                k++;
                count++;
            }

            const texto4 = document.querySelector("#mostrarLenguaje2");
            texto4.textContent = "Variables Automata 2 ";
            texto4.className = "alert alert-warning py-3 ml-2";
            var leEntrada2 = document.getElementById("nEntradas2").value;
            console.log("Lenguaje Automata N°2 :", leEntrada2);
            var count5 = 1;
            var p = leEntrada2;
            let m = 1;

            while (m <= p) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
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
            texto2.textContent = "Nombres para el automata 2";
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
            console.log("Lenguaje Automata N°2 :", leEntrada);
            var count = 1;
            var x = leEntrada;
            let k = 1;

            while (k <= x) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + k + ' col-md-offset-1 col-md-6"><input id="lenENvalor' + count +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [k] + ' " ' + k + '" type="text"/>';
                document.getElementById('mostrarLenguaje').appendChild(div);
                k++;
                count++;
            }

            const texto4 = document.querySelector("#mostrarLenguaje2");
            texto4.textContent = "Variables Automata 2 ";
            texto4.className = "alert alert-warning py-3 ml-2";
            var leEntrada2 = document.getElementById("nEntradas2").value;
            console.log("Lenguaje Automata N°2 :", leEntrada2);
            var count5 = 1;
            var p = leEntrada2;
            let m = 1;

            while (m <= p) {
                var div = document.createElement('div');
                div.setAttribute('class', 'form-inline');
                div.innerHTML = '<div style="clear:both" class=" "' + m + ' col-md-offset-1 col-md-6"><input id="2enENvalor' + count5 +
                    '" class="form-control" style="margin-bottom: 2px;"  placeholder="Letra de entrada ' + [m] + ' " ' + m + '" type="text"/>';
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
            texto2.textContent = "Nombres para el automata 2";
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
            console.log("Lenguaje Automata N°1 :", leEntrada);
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
                console.log("arrayEntrada1 :", arrayEntradas);
            } else {
                if (p == false && f == true) {
                    arraySalidas.push(automata1);
                    console.log("arraySalida1 :", arraySalidas);
                }
            }
            arrayConjunto1.push(automata1);
            count1++;
        }

        console.log("Estos Son Los Estados Para El Automata N°1 :", arrayConjunto1);

        while (count2 <= numero2) {
            var automata2 = document.getElementById("a2valor" + count2).value;
            var p2 = document.getElementById("A2inicial" + count2).checked;
            var f2 = document.getElementById("A2final" + count2).checked;
            if (p2 == true && f2 == false) {
                arrayEntradas2.push(automata2);
                console.log("arrayentrada2 :", arrayEntradas2);
            } else {
                if (p2 == false && f2 == true) {
                    arraySalidas2.push(automata2);
                    console.log("arraysalida2 :", arraySalidas2);
                }
            }
            arrayConjunto2.push(automata2);
            count2++;
        }
        console.log("Estos Son Los Estados Para El Automata N°2 :", arrayConjunto2);

        arrayReturn.push(arrayConjunto1);
        arrayReturn.push(arrayConjunto2);
        arrayReturn.push(arrayEntradas);
        arrayReturn.push(arraySalidas);
        arrayReturn.push(arrayEntradas2);
        arrayReturn.push(arraySalidas2);
        return arrayReturn;
    }

    function llenarLEN() {
        var leEntrada = document.getElementById("nEntradas").value;
        var leEntrada2 = document.getElementById("nEntradas2").value;
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
        ArrayDefinitivo.push(arraylenguaje);
        ArrayDefinitivo.push(arraylenguaje2);
        return ArrayDefinitivo;
    }

    var transiciones = ['Entrada', 'Lectura', 'Destino'];

    const tablaTransicion1 = document.querySelector("#tablaTransicion1");
    const tablaTransicion2 = document.querySelector("#tablaTransicion2");

    function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
        var count4 = 0;
        var arrayTra = [];
        var tablaPadre = document.createElement('table'),
            filaTitulo = document.createElement('tr');
        tablaPadre.style.marginLeft = "93px";
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
                colInput.appendChild(input);
                filaDatos.appendChild(colEstados);
                filaDatos.appendChild(collenguaje);
                filaDatos.appendChild(colInput);
                tablaPadre.appendChild(filaDatos);
            }
        }
        tablaTransicion1.appendChild(tablaPadre);

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
        console.log("Las Transiciones Son :", arrayTransiciones);

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
        console.log("Las Transiciones Son :", arrayTransiciones);

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
        output2.textContent = (`El estado inicial es:  [${entrada1}]`);
        output3.textContent = (`El conjunto de salidas del automata 1 es:  [${salida1}]`);
        output4.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
        output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
        output6.textContent = (`El conjunto Q de estados es:  [${conjunto2}]:`);
        output7.textContent = (`El estado inicial es:  [${entrada2}]`);
        output8.textContent = (`El conjunto de salidas del automata 2 es:  [${salida2}]`);
        output9.textContent = (`El alfabeto asociado es:  [${lenguaje2}]:`);
        output10.textContent = (`La transicion 2 es:  [${transicion2}]:`);
        output10.className = "mb-5";
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

        console.log("Este Es El Array1: ", array1);
        console.log("Este Es El Array2: ", array2);

        arrayresultante.push(array1);
        arrayresultante.push(array2);
        arrayresultante.push(idTra1);
        arrayresultante.push(transicion1);
        arrayresultante.push(idTra2);
        arrayresultante.push(transicion2);

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

            console.log("Los Complementos Del Primer Automata Para Las Entradas Son :", arrayEcomplementada);
            console.log("Los Complementos Del Primer Automata Para Las Salidas Son :", arrayScomplementada);

            console.log("Los Complementos Del Segundo Automata Para Las Entradas Son :", arrayEcomplementada2);
            console.log("Los Complementos Del Segundo Automata Para Las Salidas Son :", arrayScomplementada2);

            const output1 = document.querySelector("#mensajeComplemento");
            const output2 = document.querySelector("#automata1Com");
            const output3 = document.querySelector("#conjuntoComplemento");
            const output4 = document.querySelector("#entradaComplemento");
            const output5 = document.querySelector("#salidaComplemento");
            const output6 = document.querySelector("#lenguajeComplemento");
            const output7 = document.querySelector("#transicionComplemento");
            const output8 = document.querySelector("#mensajeComplemento1");
            const output9 = document.querySelector("#conjuntoComplemento1");
            const output10 = document.querySelector("#entradaComplemento1");
            const output11 = document.querySelector("#salidaComplemento1");
            const output12 = document.querySelector("#lenguajeComplemento1");
            const output13 = document.querySelector("#transicionComplemento1");

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
            const output1 = document.querySelector("#mensajeComplemento");
            const output2 = document.querySelector("#automata1Com");
            const output3 = document.querySelector("#conjuntoComplemento");
            const output4 = document.querySelector("#entradaComplemento");
            const output5 = document.querySelector("#salidaComplemento");
            const output6 = document.querySelector("#lenguajeComplemento");
            const output7 = document.querySelector("#transicionComplemento");

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
        } else if (TipoAuto5 == 'AFND') {
            const output1 = document.querySelector("#mensajeComplemento");
            output1.textContent = "El complemento es solo para Automatas del tipo AFD";
        }

    }

    function validador1() {
        var arrayvali = llenar()[0];
        var transi = llenarTransicion1();
        var contador = 0;
        var aux1;
        for (let i = 0; i < arrayvali.length; i++) {
            aux1 = arrayvali[i];
            for (let j = 0; j < transi.length; j++) {
                if (transi[j] === "" || transi[j] === " " || transi[j] === "  " || transi[j] === "   ") {
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                    return 0;
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        if (contador !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
            return 0;
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
                    return 0;
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        if (contador !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
            return 0;
        }
    }

    function validador3() {
        var arrayvali = llenar()[0];
        var transi = llenarTransicion1();
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
                    window.alert("Por favor llenar el/los Destino(s) faltantes en el Automata  N°1!");
                    return 0;
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        if ((contador + contador2) !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°1!");
            return 0;
        }
    }

    function validador4() {
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
                    return 0;
                } else if (aux1 === transi[j]) {
                    contador++;
                }
            }
        }
        if ((contador + contador2) !== transi.length) {
            window.alert("Hay un estado que no existe o puede haber un espacio(s) extra(s), Por favor reingresa tu(s) opción(es) para el Automata N°2!");
            return 0;
        }
    }

    function confirmarTRA() {
        var TipoDatos = identificaDatos();
        if (TipoDatos === 'AFD') {
            console.log("entro a validador AFD");
            var aux1 = validador1();
            var aux2 = validador2();
            if (aux1 === 0) {
                return 0;
            } else if (aux2 === 0) {
                return 0;
            } else {
                llenarTransicion1();
                llenarTransicion2();
                primeraQuintupla();
                transicionCompleta();
            }
        } else if (TipoDatos === 'AFND') {
            console.log("entro a validador AFND");
            var aux3 = validador3();
            var aux4 = validador4();
            if (aux3 === 0) {
                return 0;
            } else if (aux4 === 0) {
                return 0;
            } else {
                llenarTransicion1();
                llenarTransicion2();
                primeraQuintupla();
                transicionCompleta();
            }
        } else if (TipoDatos === 'AFD/AFND') {
            console.log("entro a validador AFD/AFND");
            var aux5 = validador1();
            var aux6 = validador4();
            if (aux5 === 0) {
                window.alert("El llenado de los Automatas AFD/AFND se debe llenar el Automata N°1 como AFD y el Automata N°2 como AFND, Por favor reingresa tu(s) opción(es) para el Automata N°1!");
                return 0;

            } else if (aux6 === 0) {
                window.alert("El llenado de los Automatas AFD/AFND se debe llenar el Automata N°1 como AFD y el Automata N°2 como AFND, Por favor reingresa tu(s) opción(es) para el Automata N°2!");
                return 0;
            } else {
                llenarTransicion1();
                llenarTransicion2();
                primeraQuintupla();
                transicionCompleta();
            }
        }
    }

    function union() {
        var newEstados = ['Q0'];
        var automata1 = llenar()[0];
        var automata2 = llenar()[1];
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

        for (let i = 0; i < automata1.length; i++) {
            conjuntoUnion.push(automata1[i]);
        }

        for (let k = 0; k < automata2.length; k++) {
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

        output1.textContent = (`El conjunto union de estados es =  [${conjuntoUnion}]:`);
        output1.className = "mb-2 ml-3";
        output2.textContent = (`El estado inicial viene dado por =  [${newEstados}]`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`Las salidas de Union del automata 1 es =  [${unionSalidaas}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`El alfabeto asociado es =  [${lenguajeUnion}]:`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`La transicion de union es =  [${transicionUnion}]:`);
        output5.className = "mb-2 ml-3";

        ChilevsPeru2(conjuntoUnion, newEstados, unionSalidaas, lenguajeUnion, transicionUnion);
    }

    function ObtenerDatos() {
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();
        var aux1 = [];
        var aux2 = llenarLEN()[0];
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
        aux1.push(aux3);
        aux1.push(aux4);
        aux1.push(transicion1);
        for (let k = 0; k < conjunto2.length; k++) {
            for (let l = 0; l < aux7.length; l++) {
                ayuda3 = conjunto2[k];
                aux5.push(ayuda3);
                ayuda4 = aux7[l];
                aux6.push(ayuda4);
            }
        }
        aux1.push(aux5);
        aux1.push(aux6);
        aux1.push(transicion2);
        return aux1;
    }

    function simplificar1() {
        var Conjunto1 = ObtenerDatos()[0];
        var Lenguaje1 = ObtenerDatos()[1];
        var Transicion1 = ObtenerDatos()[2];
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
        entrada1 = llenar()[2];
        entrada2 = llenar()[4];
        salida1 = llenar()[3];
        salida2 = llenar()[5];
        lenguaje1 = llenarLEN()[0];
        lenguaje2 = llenarLEN()[1];
        var transicionFinal = [];

        for (let l = 0; l < aux4.length; l++) {
            var final = arrayResultado[0][l] + "-" + arrayResultado[1][l] + " ---> " + arrayResultado[2][l];
            transicionFinal.push(final);
        }

        const output1 = document.querySelector("#mensajeSimpli");
        const output2 = document.querySelector("#conjuntoSimpli");
        const output3 = document.querySelector("#entradaSimpli");
        const output4 = document.querySelector("#salidaSimpli");
        const output5 = document.querySelector("#lenguajeSimpli");
        const output6 = document.querySelector("#transicionSimpli");

        output1.textContent = (`El Automata 1 simplicado viene dado por: `);
        output1.className = "my-4 ml-3 text-center";
        output2.textContent = (`El conjunto simplificado =  [${arrayResultado[0]}]:`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`El estado inicial viene dado por =  [${entrada1}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`Las salida de concatenacion del automata 1 es =  [${salida1}]`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`El alfabeto asociado es =  [${arrayResultado[1]}]:`);
        output5.className = "mb-2 ml-3";
        output6.textContent = (`La transicion de concatenacion es =  [${transicionFinal}]:`);
        output6.className = "mb-2 ml-3";
        return arrayResultado;
    }

    function imprimirSim() {
        var simplificarA1 = simplificar1();
        var simplificarA2 = simplificar2();
    }

    function simplificar2() {
        var Conjunto1 = ObtenerDatos()[3];
        var Lenguaje1 = ObtenerDatos()[4];
        var Transicion1 = ObtenerDatos()[5];
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
        var transicionFinal = [];

        for (let l = 0; l < aux4.length; l++) {
            var final = arrayResultado[0][l] + "-" + arrayResultado[1][l] + " ---> " + arrayResultado[2][l];
            transicionFinal.push(final);
        }

        entrada2 = llenar()[4];
        salida2 = llenar()[5];

        const output1 = document.querySelector("#mensajeSimpli1");
        const output2 = document.querySelector("#conjuntoSimpli1");
        const output3 = document.querySelector("#entradaSimpli1");
        const output4 = document.querySelector("#salidaSimpli1");
        const output5 = document.querySelector("#lenguajeSimpli1");
        const output6 = document.querySelector("#transicionSimpli1");

        output1.textContent = (`El Automata 2 simplicado viene dado por: `);
        output1.className = "my-4 ml-3 text-center";
        output2.textContent = (`El conjunto simplificado =  [${arrayResultado[0]}]:`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`El estado inicial viene dado por =  [${entrada2}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`Las salida de concatenacion del automata 1 es =  [${salida2}]`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`El alfabeto asociado es =  [${arrayResultado[1]}]:`);
        output5.className = "mb-2 ml-3";
        output6.textContent = (`La transicion de concatenacion es =  [${transicionFinal[2]}]:`);
        output6.className = "mb-2 ml-3";
        return arrayResultado;
    }

    function imprimirSim() {
        var simplificarA1 = simplificar1();
        var simplificarA2 = simplificar2();
    }



    function concatenacion() {

        var conjunto1 = llenar()[0];
        var conjunto2 = llenar()[1];
        var entrada1 = llenar()[2];
        var salida2 = llenar()[5];

        console.log("Este Es El Conjunto N°1 :", conjunto1);
        console.log("Este Es El Conjunto N°2 :", conjunto2);

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
        output5.textContent = (`La transicion de concatenacion es =  [${transicionConca}]:`);
        output5.className = "mb-2 ml-3";


        ChilevsPeru(arrayConjuntoConca, entradaConca, salidaConca, lenguajesConca, transicionConca);
    }

    function ChilevsPeru(arrayConjunto, entradaFun, salidasFun, lenguajeFun, transicionFun) {

        var newLenguaje = [];
        var newConjunto = arrayConjunto;
        var newTransicion = [];
        var transicionAnt = [];
        var transicionfinal = [];
        var idCon1 = transicionCompleta()[2];
        var traCon = transicionCompleta()[3];
        var idCon2 = transicionCompleta()[4];
        var traCon2 = transicionCompleta()[5];
        count = 1;

        for (let i = 0; i < lenguajeFun.length; i++) {
            var validador = lenguajeFun[i];

            if (validador === "@") {
                newConjunto.push("S" + count);
                newLenguaje.push("S" + count);
            } else {
                newLenguaje.push(validador);
            }
        }
        const tablaTransicion3 = document.querySelector("#tablaTransicion4");
        var idTra1 = TablaTransicionVacia(newConjunto, newLenguaje, tablaTransicion3);

        for (let j = 0; j < idCon1.length; j++) {
            newTransicion.push(idCon1[j]);
        }

        for (let k = 0; k < idCon2.length; k++) {
            newTransicion.push(idCon2[k]);
        }

        for (let p = 0; p < traCon.length; p++) {
            transicionAnt.push(traCon[p]);
        }

        for (let t = 0; t < traCon2.length; t++) {
            transicionAnt.push(traCon2[t]);
        }

        for (let r = 0; r < idTra1.length; r++) {
            for (let t = 0; t < newTransicion.length; t++) {
                if (idTra1[r] === newTransicion[t]) {
                    transicionfinal.push(transicionAnt[t]);
                    t = newTransicion.length;
                } else if (t === (newTransicion.length - 1)) {
                    transicionfinal.push("S1");
                }
            }
        }

        console.log("Esta Es La Transicion Antigua :", newTransicion);
        console.log("Este Es El Nuevo ID :", idTra1);
        console.log("TRANSICION FINAL :", transicionfinal);
        var array2 = [];

        for (let g = 0; g < idTra1.length; g++) {
            var conca2 = [idTra1[g] + " --> " + transicionfinal[g]];
            array2.push(conca2);
        }

        const output1 = document.querySelector("#mensajeConcaAFD");
        const output2 = document.querySelector("#conjuntoConcaAFD");
        const output3 = document.querySelector("#entradaConcaAFD");
        const output4 = document.querySelector("#salidaConcaAFD");
        const output5 = document.querySelector("#lenguajeConcaAFD");
        const output6 = document.querySelector("#transicionConcaAFD");

        output1.textContent = (`El Automata transformado a AFD viene dado por: `);
        output1.className = "my-4 ml-3 text-center";
        output2.textContent = (`El conjunto esta dado por =  [${newConjunto}]:`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`El estado inicial viene dado por =  [${entradaFun}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`Las salidas de  del automata 1 es =  [${salidasFun}]`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`El alfabeto asociado es =  [${newLenguaje}]:`);
        output5.className = "mb-2 ml-3";
        output6.textContent = (`La transicion es =  [${array2}]:`);
        output6.className = "mb-2 ml-3";

    }

    function ChilevsPeru2(arrayConjunto, entradaFun, salidasFun, lenguajeFun, transicionFun) {

        var newLenguaje = [];
        var newConjunto = arrayConjunto;
        var newTransicion = [];
        var transicionAnt = [];
        var transicionfinal = [];
        var idCon1 = transicionCompleta()[2];
        var traCon = transicionCompleta()[3];
        var idCon2 = transicionCompleta()[4];
        var traCon2 = transicionCompleta()[5];
        count = 1;

        for (let i = 0; i < lenguajeFun.length; i++) {
            var validador = lenguajeFun[i];

            if (validador === "@") {
                newConjunto.push("S" + count);
                newLenguaje.push("S" + count);
            } else {
                newLenguaje.push(validador);
            }

        }
        const tablaTransicion3 = document.querySelector("#tablaTransicion4");
        var idTra1 = TablaTransicionVacia(newConjunto, newLenguaje, tablaTransicion3);

        for (let j = 0; j < idCon1.length; j++) {
            newTransicion.push(idCon1[j]);
        }

        for (let k = 0; k < idCon2.length; k++) {
            newTransicion.push(idCon2[k]);
        }

        for (let p = 0; p < traCon.length; p++) {
            transicionAnt.push(traCon[p]);
        }
        for (let t = 0; t < traCon2.length; t++) {
            transicionAnt.push(traCon2[t]);
        }

        for (let r = 0; r < idTra1.length; r++) {
            for (let t = 0; t < newTransicion.length; t++) {
                if (idTra1[r] === newTransicion[t]) {
                    transicionfinal.push(transicionAnt[t]);
                    t = newTransicion.length;
                } else if (t === (newTransicion.length - 1)) {
                    transicionfinal.push("S1");
                }
            }
        }


        console.log("Esta Es La Transicion Antigua :", newTransicion);
        console.log("Este Es El Nuevo Conjunto :", newConjunto);
        console.log("TRANSICION FINAL :", transicionfinal);
        var array2 = [];

        for (let g = 0; g < idTra1.length; g++) {
            var conca2 = [idTra1[g] + " --> " + transicionfinal[g]];
            array2.push(conca2);
        }

        const output1 = document.querySelector("#mensajeUnionAFD");
        const output2 = document.querySelector("#conjuntoUnionAFD");
        const output3 = document.querySelector("#entradaUnionAFD");
        const output4 = document.querySelector("#salidaUnionAFD");
        const output5 = document.querySelector("#lenguajeUnionAFD");
        const output6 = document.querySelector("#transicionUnionAFD");

        output1.textContent = (`El Automata transformado a AFD viene dado por: `);
        output1.className = "my-4 ml-3 text-center";
        output2.textContent = (`El conjunto viene dado por =  [${newConjunto}]:`);
        output2.className = "mb-2 ml-3";
        output3.textContent = (`El estado inicial viene dado por =  [${entradaFun}]`);
        output3.className = "mb-2 ml-3";
        output4.textContent = (`Las salidas es =  [${salidasFun}]`);
        output4.className = "mb-2 ml-3";
        output5.textContent = (`El alfabeto asociado es =  [${newLenguaje}]:`);
        output5.className = "mb-2 ml-3";
        output6.textContent = (`La transicion es =  [${array2}]:`);
        output6.className = "mb-2 ml-3";

    }

    function interseccion() {
        var conjunto1 = ObtenerDatos()[0];
        conjunto1.sort();
        var conjunto2 = ObtenerDatos()[3];
        conjunto2.sort();
        var entrada1 = llenar()[2];
        var finales1 = llenar()[3];
        var entrada2 = llenar()[4];
        var finales2 = llenar()[5];
        var lengua1 = llenarLEN()[0];
        var lengua2 = llenarLEN()[1];
        var Lenguaje1 = ObtenerDatos()[1];
        var Lenguaje2 = ObtenerDatos()[4];
        var transicion1 = llenarTransicion1();
        var transicion2 = llenarTransicion2();
        var transicionFinal = [];
        var aux2 = [],
            aux3 = [],
            aux4 = [],
            aux5 = [],
            aux6 = [],
            aux7 = [],
            aux9 = [],
            aux10 = [],
            aux11 = [],
            aux12 = [],
            aux13 = [],
            aux14 = [],
            aux15 = [],
            aux16 = [],
            aux17 = [],
            aux18 = [],
            aux19 = [],
            aux20 = [];
        var Entra = llenar()[2];
        var Sale = llenar()[3];
        var Entra2 = llenar()[4];
        var Sale2 = llenar()[5];
        var arrayEinter = [];
        var arraySinter = [];
        for (let t = 0; t < lengua1.length; t++) {
            if (lengua1[t] !== lengua2[t]) {
                confirma = false;
                window.alert("Los lenguajes no son iguales, deben serlo para la interseccion");
                return 0;
            } else {
                confirma = true;
            }
        }
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
        for (let l = 0; l < entrada2.length; l++) {
            var aux1 = entrada2[l];
            for (let k = 0; k < Lenguaje2.length; k++) {
                if (aux1 === conjunto2[k]) {
                    aux5.push(conjunto2[k]);
                    aux6.push(Lenguaje2[k]);
                    aux7.push(transicion2[k]);
                }
            }
        }
        for (let r = 0; r < aux3.length; r++) {
            for (let l = 0; l < aux6.length; l++) {
                if (aux3[r] === aux6[l]) {
                    var final = aux2[r] + aux5[l] + "-" + aux3[r] + " ---> " + aux4[r] + aux7[l];
                    transicionFinal.push(final);
                }
            }
        }

        for (let g = 0; g < conjunto1.length; g++) {
            var aux8 = conjunto1[g];
            if (aux8 !== entrada1[0]) {
                for (let f = 0; f < finales1.length; f++) {
                    if (aux8 === finales1[f]) {
                        aux9.push(conjunto1[g]);
                        aux10.push(Lenguaje1[g]);
                        aux11.push(transicion1[g]);
                    }
                }
            }

        }
        for (let o = 0; o < conjunto1.length; o++) {
            var aux8 = conjunto2[o];
            if (aux8 !== entrada2[0]) {
                for (let y = 0; y < finales2.length; y++) {
                    if (aux8 === finales2[y]) {
                        aux12.push(conjunto2[o]);
                        aux13.push(Lenguaje2[o]);
                        aux14.push(transicion2[o]);
                    }
                }
            }
        }
        for (let p = 0; p < aux3.length; p++) {
            for (let q = 0; q < aux6.length; q++) {
                if (aux10[p] === aux13[q]) {
                    var final = aux9[p] + aux12[q] + "-" + aux10[p] + " ---> " + aux11[p] + aux14[q];
                    transicionFinal.push(final);
                }
            }
        }

        for (let n = 0; n < finales1.length; n++) {
            for (let w = 0; w < conjunto1.length; w++) {
                if (conjunto1[w] !== entrada1[0]) {
                    if (conjunto1[w] !== finales1[n]) {
                        aux15.push(conjunto1[w]);
                        aux16.push(Lenguaje1[w]);
                        aux17.push(transicion1[w]);
                    }

                }
            }
        }

        for (let z = 0; z < finales2.length; z++) {
            for (let u = 0; u < conjunto2.length; u++) {
                if (conjunto2[u] !== entrada2[0]) {
                    if (conjunto2[u] !== finales2[z]) {
                        aux18.push(conjunto2[u]);
                        aux19.push(Lenguaje2[u]);
                        aux20.push(transicion2[u]);
                    }

                }
            }
        }

        for (let h = 0; h < aux16.length; h++) {
            for (let v = 0; v < aux19.length; v++) {
                if (aux16[h] === aux19[v]) {
                    var final = aux15[h] + aux18[v] + "-" + aux16[h] + " ---> " + aux17[h] + aux20[v];
                    transicionFinal.push(final);
                }
            }

        }
        console.log("Este es el Arreglo de Transicion Final :", transicionFinal);
        const output1 = document.querySelector("#mensajeInter");
        const output3 = document.querySelector("#conjuntoInter");
        const output4 = document.querySelector("#entradaInter");
        const output5 = document.querySelector("#salidaInter");
        const output6 = document.querySelector("#lenguajeInter");
        const output7 = document.querySelector("#transicionInter");

        output7.textContent = (`Las transicion viene dada por:  [${transicionFinal}]`);

        return transicionFinal;
    }

    Array.prototype.unique = function(a) {
        return function() { return this.filter(a) }
    }(function(a, b, c) {
        return c.indexOf(a, b + 1) < 0
    });

    function convertirAFNDtoAFD() {
        var TipoAutomata = identificaDatos();
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





        if (TipoAutomata === 'AFD') {
            const output1 = document.querySelector("#mensajeGeneral");
            output1.textContent = "Los automatas ya son AFD :D ";
            output1.style.className = "text-center";
        } else if (TipoAutomata === 'AFND') {
            {
                for (let i = 0; i < transicion1.length; i++) {
                    if (transicion1[i] === "@") {
                        conjunto1.push("S" + count);
                        arrayDestino.push("S" + count);
                    } else {
                        arrayDestino.push(transicion1[i]);
                    }
                }

                var conjuntoAFND = conjunto1.unique();
                console.log("Conjunto Automata N°1 :", conjuntoAFND);
                var array1 = [];
                const tablaTransicion4 = document.querySelector("#tablaTransicion3");
                var aux = llenarLEN();
                var idTra1 = TablaTransicionVacia(conjuntoAFND, aux[0], tablaTransicion4);
                console.log(idTra1);
                cont = 1;

                for (let k = 0; k < idTra1.length; k++) {
                    var t = "S" + cont + "-" + aux[0][0];
                    var p = "S" + cont + "-" + aux[0][1];
                    var m = "S" + cont + "-" + aux[0][2];
                    var l = "S" + cont + "-" + aux[0][3];
                    var q = "S" + cont + "-" + aux[0][4];
                    if (idTra1[k] === t) {
                        arrayDestino.push("S" + cont);
                    } else {
                        if (idTra1[k] === p) {
                            arrayDestino.push("S" + cont);
                        } else {
                            if (idTra1[k] === m) {
                                arrayDestino.push("S" + cont);
                            } else {
                                if (idTra1[k] === l) {
                                    arrayDestino.push("S" + cont);
                                } else {
                                    if (idTra1[k] === q) {
                                        arrayDestino.push("S" + cont);
                                    }
                                }
                            }
                        }
                    }
                }
                for (let i = 0; i < idTra1.length; i++) {
                    var conca = [idTra1[i] + " --> " + arrayDestino[i]];
                    array1.push(conca);
                }
                console.log("Transicion Automata N°1 :", array1);



                const tablaTransicion3 = document.querySelector("#tablaTransicion4");

                for (let v = 0; v < transicion2.length; v++) {
                    if (transicion2[v] === "@") {
                        conjunto2.push("S" + count);
                        arrayDestino2.push("S" + count);
                    } else {
                        arrayDestino2.push(transicion2[v]);
                    }
                }

                var conjuntoAFND2 = conjunto2.unique();
                var idTra2 = TablaTransicionVacia(conjuntoAFND2, aux[1], tablaTransicion3);
                var array2 = [];
                var aux6 = llenarLEN();

                for (let n = 0; n < idTra2.length; n++) {
                    var j = "S" + cont + "-" + aux6[1][0];
                    var r = "S" + cont + "-" + aux6[1][1];
                    var x = "S" + cont + "-" + aux6[1][2];
                    var h = "S" + cont + "-" + aux6[1][3];
                    var v = "S" + cont + "-" + aux6[1][4];

                    if (idTra2[n] === j) {
                        arrayDestino2.push("S" + cont);
                    } else {
                        if (idTra2[n] === r) {
                            arrayDestino2.push("S" + cont);
                        } else {
                            if (idTra2[n] === x) {
                                arrayDestino2.push("S" + cont);
                            } else {
                                if (idTra2[n] === h) {
                                    arrayDestino2.push("S" + cont);

                                } else {
                                    if (idTra2[n] === v) {
                                        arrayDestino2.push("S" + cont);

                                    }
                                }

                            }
                        }
                    }
                }

                for (let g = 0; g < idTra2.length; g++) {
                    var conca2 = [idTra2[g] + " --> " + arrayDestino2[g]];
                    array2.push(conca2);
                }
                console.log("Transicion Automata N°2 :", array2);

                const output1 = document.querySelector("#mensajeGeneral");
                const output2 = document.querySelector("#mensajeConvertido");
                const output3 = document.querySelector("#conjuntoConvertido");
                const output4 = document.querySelector("#entradaConvertido");
                const output5 = document.querySelector("#salidaConvertido");
                const output6 = document.querySelector("#lenguajeConvertido");
                const output7 = document.querySelector("#transicionConvertido");
                const output8 = document.querySelector("#mensajeConvertido1");
                const output9 = document.querySelector("#conjuntoConvertido1");
                const output10 = document.querySelector("#entradaConvertido1");
                const output11 = document.querySelector("#salidaConvertido1");
                const output12 = document.querySelector("#lenguajeConvertido1");
                const output13 = document.querySelector("#transicionConvertido1");


                output1.textContent = (`Se convierten los automatas AFND a AFD`);
                output1.style.className = "mb-4";
                output2.textContent = (`AFND a AFD Automata 1`);
                output2.style.className = "py-3";
                output3.textContent = (`El conjunto = [${conjuntoAFND}]`);
                output3.style.className = "ml-3";
                output4.textContent = (`El estado inicial = [${entrada1}]`);
                output4.style.className = "ml-3";
                output5.textContent = (`Los estados finales =  [${salida1}]`);
                output5.style.className = "ml-3";
                output6.textContent = (`El lenguaje =  [${lenguaje1}]`);
                output6.style.className = "ml-3";
                output7.textContent = (`Las transiciones =  [${array1}]`);
                output7.style.className = "ml-3";

                output8.textContent = (`AFND a AFD del Automata 2`);
                output8.style.className = "py-3";
                output9.textContent = (`El conjunto =  [${conjuntoAFND2}]`);
                output10.textContent = (`El estado inicial =  [${entrada2}]`);
                output11.textContent = (`Los estados finales =  [${salida2}]`);
                output12.textContent = (`El lenguaje = [${lenguaje2}]`);
                output13.textContent = (`Las transiciones = [${array2}]`);
                var nuevoArreglo = [];

                var conjuntoNuevo = [];
                conjuntoNuevo = array1;

                for (let h = 0; h < conjuntoNuevo.length; h++) {
                    var nue = new String(conjuntoNuevo[h]);
                    nue.split("-", 1);
                    nuevoArreglo.push(nue);
                }
                //console.log("Nuevo Arreglo :", nuevoArreglo); // VER SI BORRAR O NO!!!!

                var arregloAux = [];
                for (let d = 0; d < nuevoArreglo.length; d++) {
                    for (let n = 0; n < nuevoArreglo[d].length; n++) {
                        var aux21 = nuevoArreglo[d][n];
                        if (aux21 !== '-') {
                            var concate = concate + aux21;
                            arregloAux.push(concate);
                        }
                    }
                }



            }

        } else if (TipoAutomata === 'AFD/AFND') {

            const tablaTransicion3 = document.querySelector("#tablaTransicion4");

            for (let v = 0; v < transicion2.length; v++) {
                if (transicion2[v] === "@") {
                    conjunto2.push("S" + count);
                    arrayDestino2.push("S" + count);

                } else {
                    arrayDestino2.push(transicion2[v]);
                }
            }

            var conjuntoAFND2 = conjunto2.unique();
            console.log("Conjunto Automata N°2 :", conjuntoAFND2);

            var aux = llenarLEN();
            var idTra2 = TablaTransicionVacia(conjuntoAFND2, aux[1], tablaTransicion3);
            var array2 = [];
            var aux6 = llenarLEN();

            for (let n = 0; n < idTra2.length; n++) {
                var j = "S" + cont + "-" + aux6[1][0];
                var r = "S" + cont + "-" + aux6[1][1];
                var x = "S" + cont + "-" + aux6[1][2];
                var h = "S" + cont + "-" + aux6[1][3];
                var v = "S" + cont + "-" + aux6[1][4];


                if (idTra2[n] === j) {
                    arrayDestino2.push("S" + cont);

                } else {
                    if (idTra2[n] === r) {
                        arrayDestino2.push("S" + cont);
                    } else {
                        if (idTra2[n] === x) {
                            arrayDestino2.push("S" + cont);
                        } else {
                            if (idTra2[n] === h) {
                                arrayDestino2.push("S" + cont);
                            } else {
                                if (idTra2[n] === v) {
                                    arrayDestino2.push("S" + cont);
                                }
                            }
                        }
                    }

                }

            }

            for (let g = 0; g < idTra2.length; g++) {
                var conca2 = [idTra2[g] + " --> " + arrayDestino2[g]];
                array2.push(conca2);
            }
            console.log("Transicion Automata N°2 :", array2);

            const output1 = document.querySelector("#mensajeGeneral");
            const output2 = document.querySelector("#mensajeConvertido");
            const output3 = document.querySelector("#conjuntoConvertido");
            const output4 = document.querySelector("#entradaConvertido");
            const output5 = document.querySelector("#salidaConvertido");
            const output6 = document.querySelector("#lenguajeConvertido");
            const output7 = document.querySelector("#transicionConvertido");
            const output8 = document.querySelector("#mensajeConvertido1");
            const output9 = document.querySelector("#conjuntoConvertido1");
            const output10 = document.querySelector("#entradaConvertido1");
            const output11 = document.querySelector("#salidaConvertido1");
            const output12 = document.querySelector("#lenguajeConvertido1");
            const output13 = document.querySelector("#transicionConvertido1");

            output1.textContent = (`Se convierten los automatas AFND a AFD`);
            output1.style.className = "my-4 text-center";
            output2.textContent = "Ups detectamos que el Automata 1 ya es AFD :D !!";
            output2.style.className = "pb-3";

            output8.textContent = (`AFND a AFD del Automata 2`);
            output8.style.className = "py-3";
            output9.textContent = (`El conjunto =  [${conjuntoAFND2}]`);
            output10.textContent = (`El estado inicial =  [${entrada2}]`);
            output11.textContent = (`Los estados finales =  [${salida2}]`);
            output12.textContent = (`El lenguaje =  [${lenguaje2}]`);
            output13.textContent = (`Las transiciones =  [${array2}]`);

        }
    }