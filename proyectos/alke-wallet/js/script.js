$(document).ready(function () {

// CREAR SALDO INICIAL

if (localStorage.getItem("saldo") === null) {

    localStorage.setItem("saldo", 100000);

}

// OBTENER SALDO

let saldo = parseInt(localStorage.getItem("saldo"));

// MOSTRAR SALDOS

$("#saldoMenu").text("$" + saldo.toLocaleString("es-CL"));

$("#saldo").text("$" + saldo.toLocaleString("es-CL"));

$("#saldoTransferencia").text("$" + saldo.toLocaleString("es-CL"));

// LOGIN

$("#loginForm").submit(function (e) {

    e.preventDefault();

    let email = $("#email").val();

    let password = $("#password").val();

    if (email === "admin@alkewallet.com" && password === "1234") {

        window.location.href = "menu.html";

    } else {

        $("#mensaje").text("Correo o contraseña incorrectos");

    }

});

// DEPÓSITO

$("#depositar").click(function () {

    let monto = parseInt($("#monto").val());

    if (monto > 0) {

        saldo += monto;

        localStorage.setItem("saldo", saldo);

        $("#saldo").text("$" + saldo.toLocaleString("es-CL"));

        $("#mensajeDeposito")
            .removeClass("text-danger")
            .addClass("text-success")
            .text("Depósito realizado correctamente");

        $("#monto").val("");

    } else {

        $("#mensajeDeposito")
            .removeClass("text-success")
            .addClass("text-danger")
            .text("Ingrese un monto válido");

    }

});

// TRANSFERENCIA

$("#enviarDinero").click(function () {

    let contacto = $("#contacto").val();

    let monto = parseInt($("#montoTransferencia").val());

    if (contacto === "" || isNaN(monto) || monto <= 0) {

        $("#mensajeTransferencia")
            .removeClass("text-success")
            .addClass("text-danger")
            .text("Complete todos los campos correctamente");

        return;

    }

    if (monto > saldo) {

        $("#mensajeTransferencia")
            .removeClass("text-success")
            .addClass("text-danger")
            .text("Saldo insuficiente");

        return;

    }

    saldo -= monto;

    localStorage.setItem("saldo", saldo);

    $("#saldoTransferencia").text("$" + saldo.toLocaleString("es-CL"));

    $("#mensajeTransferencia")
        .removeClass("text-danger")
        .addClass("text-success")
        .text("Transferencia realizada a " + contacto);

    $("#contacto").val("");

    $("#montoTransferencia").val("");

});

// MOVIMIENTOS

$("#agregarMovimiento").click(function () {

    $("#tablaMovimientos").append(`

        <tr>

            <td>13/06/2026</td>

            <td>Transferencia</td>

            <td>Pago realizado</td>

            <td class="text-danger">
                -$15.000
            </td>

        </tr>

    `);

    $("#mensajeMovimiento").text("Nuevo movimiento agregado");

});
// EFECTO HOVER EN TARJETAS

$(".card").hover(

function () {

    $(this).stop().animate({

        marginTop: "-10px"

    }, 200);

},

function () {

    $(this).stop().animate({

        marginTop: "0px"

    }, 200);

}

);

// EFECTO BOTONES

$(".btn-dark").hover(

function () {

    $(this).fadeTo(200, 0.8);

},

function () {

    $(this).fadeTo(200, 1);

}

);

// EF
});