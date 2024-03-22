// Overview //
var telep = '0962332538 - Anh Hoàng';
// Validation //

var stateValidation = true;
var errormark = document.getElementsByClassName("imgerror");

for (let i = 0; i < errormark.length; i++) {
    errormark[i].style.display = "none";
}



function checkError() {
    var namer = document.getElementById("buyer");
    var tel = document.getElementById("btel");
    var buyercalendar = document.getElementById("bcal");
    var buyertime = document.getElementById("btcal");
    var buyerquantityplayer = document.getElementById("bqtpl");
    var buyerquantityteam = document.getElementById("bqtt");
    var buyerregulation = document.getElementById("breg");


    // Buyer //
    if (namer.value == "") {
        document.getElementById("index0").innerText = "Hãy điền tên của bạn";
        document.getElementById("index0").style.visibility = "visible";
        errormark[0].style.display = "inline";


    } else if (namer.length > 50) {
        document.getElementById("index0").innerText = "Tên không dài quá 50 kí tự.";
        document.getElementById("index0").style.visibility = "visible";
        errormark[0].style.display = "inline";


    } else {
        document.getElementById("index0").style.visibility = "hidden";
        errormark[0].style.display = "none";



    }
    // Telephone //
    if (tel.value == "") {
        document.getElementById("index1").innerText = "Hãy điền số điện thoại của bạn.";
        document.getElementById("index1").style.visibility = "visible";
        errormark[1].style.display = "inline";

    } else if (tel.value.length > 50) {
        document.getElementById("index1").innerText = "Số điện thoại không dài quá 50 kí tự.";
        document.getElementById("index1").style.visibility = "visible";
        errormark[1].style.display = "inline";

    } else {
        document.getElementById("index1").style.visibility = "hidden";
        errormark[1].style.display = "none";

    }
    // BuyerCalendar //
    if (buyercalendar.value.length == "") {
        document.getElementById("index2").innerHTML = "Hãy chọn khung giờ muốn đặt sân.";
        document.getElementById("index2").style.visibility = "visible";
        errormark[2].style.display = "inline";



    } else {
        document.getElementById("index2").style.visibility = "hidden";
        errormark[2].style.display = "none";
    }
    // BuyerTime //
    if (buyertime.value == "") {
        document.getElementById("index3").innerHTML = "Hãy nhập số giờ muốn đặt sân.";
        document.getElementById("index3").style.visibility = "visible";
        errormark[3].style.display = "inline";


    } else if (buyertime.value < 0) {
        document.getElementById("index3").innerHTML = "Chỉ được phép nhập số dương.";
        document.getElementById("index3").style.visibility = "visible";
        errormark[3].style.display = "inline";

    } else {
        document.getElementById("index3").style.visibility = "hidden";
        errormark[3].style.display = "none";

    }
    // Player's Quantity //
    if (buyerquantityplayer.value == "") {
        document.getElementById("index4").innerHTML = "Hãy nhập số người chơi.";
        document.getElementById("index4").style.visibility = "visible";
        errormark[4].style.display = "inline";

    } else {
        document.getElementById("index4").style.visibility = "hidden";
        errormark[4].style.display = "none";
    }
    // Quantity Of Team //
    if (buyerquantityteam.value == "") {
        document.getElementById("index5").innerHTML = "Hãy nhập số đội chơi.";
        document.getElementById("index5").style.visibility = "visible";
        errormark[5].style.display = "inline";


    } else if (buyerquantityteam.value < 0 || Number.isInteger(buyerquantityteam.value) == false) {
        document.getElementById("index5").innerHTML = "Chỉ được phép nhập số nguyên dương.";
        document.getElementById("index5").style.visibility = "visible";
        errormark[5].style.display = "inline";



    } else {
        document.getElementById("index5").style.visibility = "hidden";
        errormark[5].style.display = "none";
    }
    // Final Validation //
    if (namer.length == 0 || namer.length > 50 || tel.value == "" || tel.value.length > 50 || buyercalendar.value.length == "" || buyertime.value == "" || buyertime.value < 0 || buyerquantityplayer.value == 0 || buyerquantityteam == "" || buyerquantityteam.value < 0 || Number.isInteger(parseFloat(buyerquantityteam.value)) == false) {
        return false;
    }
    if (namer.length > 0 & namer.length < 51 & tel.value.length > 0 & tel.value.length < 51 & buyercalendar.value.length > 0 & buyertime.value > 0 & buyerquantityplayer.value > 0 & Number.isInteger(parseFloat(buyerquantityteam.value)) == true & buyerquantityteam.value > -1) {
        return true;
    }
}
// Choosen Field //
function checkField(tthis) {


    var fieldname_1 = "Sân bóng nhân tạo Trung Hòa";
    var fieldname_2 = "Sân bóng đá Làng sinh viên Hacinco";
    var fieldname_3 = "Sân bóng Minh Kiệt, Dương Nội";
    var faddr1 = "Ngõ 55 - 57, đường Trần Phú, Hà Đông (trong trường đại học Nghệ thuật Trung ương)";
    var faddr2 = "190, Làng sinh viên Hacinco, Nguyễn Tuân(Quận Thanh Xuân, Hà Nội)";
    var faddr3 = "Khu Đô thị Dương Nội (Quận Hà Đông, Hà Nội)";




    // Fixing phase //
    if (tthis == "San1") {
        localStorage.setItem("checker1", fieldname_1);
        localStorage.setItem("checker2", faddr1);
        return true;

    }
    if (tthis == "San2") {
        localStorage.setItem("checker1", fieldname_2);
        localStorage.setItem("checker2", faddr2);
        return true;
    }
    if (tthis == "San3") {
        localStorage.setItem("checker1", fieldname_3);
        localStorage.setItem("checker2", faddr3);

        return true;

    }
    // Check //

    if (window.location.pathname.includes("book.html")) {

        // Insert After //
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        // Let //
        let span1 = document.createElement("span");
        span1.setAttribute('class', 'label-content');
        let span2 = document.createElement("span");
        span2.setAttribute('class', 'label-content');
        let span3 = document.createElement("span");
        span3.setAttribute('class', 'label-content')
            // Change //
        span1.textContent = localStorage.getItem('checker1');
        span2.textContent = localStorage.getItem('checker2');
        span3.textContent = telep;
        // Action //
        insertAfter(span1, document.getElementById('flname'));
        insertAfter(span2, document.getElementById("adr"));
        insertAfter(span3, document.getElementById("contact"));
    }






}
// Result //
if (window.location.pathname.includes("book.html")) {
    //Begin to load //
    if (document.readyState !== 'complete') {
        // The page is fully loaded
        document.getElementById('totalpayment').innerHTML = "Hãy lựa chọn và kiểm tra lại thông tin đặt sân";
        document.getElementById('totalpayment').style.color = 'red';
        document.getElementById('totalpayment').style.fontStyle = 'italic';
    }
    // Insert After //
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }
    // Let //
    let span1 = document.createElement("span");
    span1.setAttribute('class', 'label-content');
    let span2 = document.createElement("span");
    span2.setAttribute('class', 'label-content');
    let span3 = document.createElement("span");
    span3.setAttribute('class', 'label-content')
        // Change //
    span1.textContent = localStorage.getItem('checker1');
    span2.textContent = localStorage.getItem('checker2');
    span3.textContent = telep;
    // Action //

    insertAfter(span1, document.getElementById('flname'));
    insertAfter(span2, document.getElementById("adr"));
    insertAfter(span3, document.getElementById("contact"));
}
// Total Payment //
function checkPayment() {
    //Validate Again //
    var namer = document.getElementById("buyer");
    var tel = document.getElementById("btel");
    var buyercalendar = document.getElementById("bcal");
    var buyertime = document.getElementById("btcal");
    var buyerquantityplayer = document.getElementById("bqtpl");
    var buyerquantityteam = document.getElementById("bqtt");
    if (tel.value == "" | tel.value.length > 50 | buyercalendar.value.length == "" | buyertime.value == "" | buyertime.value < 0 | buyerquantityplayer.value == 0 | buyerquantityteam == "" | buyerquantityteam.value < 0 | Number.isInteger(parseFloat(buyerquantityteam.value)) == false | namer.value.length == 0 | namer.value.length > 50) {
        document.getElementById('totalpayment').innerHTML = "Hãy lựa chọn và kiểm tra lại thông tin đặt sân";
        document.getElementById('totalpayment').style.color = 'red';
        document.getElementById('totalpayment').style.fontStyle = 'italic';
        console.log('something\'s wrong here');
    }

    // Field Payment //
    if (namer.value.length > 0 & namer.value.length < 51 & tel.value.length > 0 & tel.value.length < 51 & buyercalendar.value.length > 0 & buyertime.value > 0 & buyerquantityplayer.value > 0 & Number.isInteger(parseFloat(buyerquantityteam.value)) == true & buyerquantityteam.value > -1) {

        console.log("IT WORKED");

        var timeframe = document.getElementById('bcal').options[document.getElementById('bcal').selectedIndex].value;
        var time = document.getElementById('btcal').value;
        var fieldpayment = timeframe * time;
        // Addition //

        var team = document.getElementById('bqtt').value;

        var clothes = document.getElementsByName('bsupl');
        var addition = 0;
        var addition2 = 0;
        for (var i = 0; i < clothes.length; i++) {
            if (clothes[i].checked) {
                if (clothes[i].value == "300") {
                    addition += 300;

                }
                if (clothes[i].value == "200") {
                    addition2 += 200;

                }

            }

        }
        var additionTotal = team * addition + time * addition2;
        // Total //
        var total = fieldpayment + additionTotal;
        var trueTotal = total * 1000;
        var finalTotal = trueTotal.toLocaleString("en-US").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('totalpayment').innerHTML = finalTotal + "VND";
        document.getElementById('totalpayment').style.color = 'black';

    }

}