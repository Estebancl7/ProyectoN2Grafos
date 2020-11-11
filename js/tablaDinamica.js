    //Aca se guarda el tipo de automata ingresado

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
        document.getElementById('confirmar').appendChild(div);


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
        console.log(leEntrada);
        var arraylenguaje = [];
        contador = 1;

        while (contador <= leEntrada) {
            var lenguaje = document.getElementById("lenENvalor" + contador).value;
            arraylenguaje.push(lenguaje);
            contador++;


        }
        console.log("estos son los lenguajes: ", arraylenguaje);

        return arraylenguaje;


    }

    var transiciones = ['Entrada', 'Lectura', 'Destino'];

    //Variables para tabla de transicion1
    const tablaTransicion1 = document.querySelector("#tablaTransicion1");
    //Variables para tabla de transicion2
    const tablaTransicion2 = document.querySelector("#tablaTransicion2");

    //Funcion llenar tabla
    function TablaTransicion(arrayConjunto, arraylenguaje, tablaTransicion1) {
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
                //input.id = `${"transicion"}-${arrayConjunto[i] + count4 }`;
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

        // var div = document.createElement('div');
        // div.setAttribute('class', 'form-inline', 'a', 'style');
        // div.innerHTML = '<div class="row d-flex justify-content-center">' +
        //     '<a onclick="llenarTransicion()" class="btn btn-outline-light px-2 mb-3" style="text-align: center; max-width: 850px;">Confirme los datos</a>' +
        //     '</div>';
        // document.getElementById('confirmar').appendChild(div);



        // var arrayresultante = llenarTransicion(arrayConjunto, arraylenguaje);
        //console.log(arrayresultante);

        //return arrayresultante;

        return arrayTra;




    }

    function confirmar() {
        var aux1 = llenar();
        var aux = llenarLEN();
        TablaTransicion(aux1[0], aux, tablaTransicion1);
        const TipoAuto = document.querySelector("#tipoAutomata").value;

        TablaTransicion(aux1[1], aux, tablaTransicion2);
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
        var len = llenarLEN();

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
        var len = llenarLEN();

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
        var lenguaje = llenarLEN();
        var transicion1 = transicionCompleta()[0];

        var conjunto2 = llenar()[1];
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

        output5.textContent = (`La transicion 1 es:  [${transicion1}]:`);
        //output5.className = "alert alert-warning text-aling-center";


        output6.textContent = (`El conjunto Q de estados es:  [${conjunto2}]:`);
        //output6.className = "alert alert-warning text-aling-center";

        output7.textContent = (`El estado inicial es:  [${entrada2}]`);
        //output7.className = "alert alert-warning text-aling-center";

        output8.textContent = (`El conjunto de salidas del automata 2 es:  [${salida2}]`);
        //output8.className = "alert alert-warning text-aling-center";

        output9.textContent = (`El alfabeto asociado es:  [${lenguaje}]:`);
        //output9.className = "alert alert-warning text-aling-center";

        output10.textContent = (`La transicion 2 es:  [${transicion2}]:`);
        //output10.className = "alert alert-warning text-aling-center";


    }

    function confirmarTRA() {
        llenarTransicion1();
        llenarTransicion2();
        primeraQuintupla();

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
        var idTra1 = TablaTransicionVacia(aux1[0], aux, tablaTransicion4);
        var idTra2 = TablaTransicionVacia(aux1[1], aux, tablaTransicion3);

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
        var arrayEntradaComplemento = llenar()[2]
        var arraySalidaComplemento = llenar()[3]
        var arrayEntradaComplemento2 = llenar()[4]
        var arraySalidaComplemento2 = llenar()[5]
        var arrayEcomplementada = [];
        var arrayScomplementada = [];
        var arrayEcomplementada2 = [];
        var arrayScomplementada2 = [];
        const TipoAuto5 = document.querySelector("#tipoAutomata").value;
        if (TipoAuto5 === 'AFD') {
            arrayEcomplementada = arraySalidaComplemento;
            arrayScomplementada = arrayEntradaComplemento;
            arrayEcomplementada2 = arraySalidaComplemento2;
            arrayScomplementada = arrayScomplementada2;
        }

        if (TipoAutoDuo == 'AFD/AFND') {
            arrayEcomplementada = arraySalidaComplemento;
            arrayScomplementada = arrayEntradaComplemento;
        }

    }