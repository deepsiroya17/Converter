document.getElementById('convert1').onclick = distConvert;
document.getElementById('convert2').onclick = timeConvert;
document.getElementById('convert3').onclick = tempConvert;
document.getElementById('convert4').onclick = currencyConvert;

function tempConvert() {
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsius").value;

  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

  document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(2);
  document.getElementById('celsius').value = parseFloat(celsius).toFixed(2);
}

function distConvert() {
  var kilometer = document.getElementById("kilometer").value;
  var meter = document.getElementById("meter").value;
  var centimeter = document.getElementById("centimeter").value;
  var millimeter = document.getElementById("millimeter").value;

  if (kilometer != '') {
        meter = (parseFloat(kilometer))*1000;
        centimeter = (parseFloat(kilometer))*100000;
        millimeter = (parseFloat(kilometer))*1000000;
    } else if (meter != '') {
        kilometer = (parseFloat(meter))/1000;
        centimeter = (parseFloat(meter))*100;
        millimeter = (parseFloat(meter))*1000;
    } else if (centimeter != '') {
        kilometer = (parseFloat(centimeter))/100000;
        meter = (parseFloat(centimeter))/100;
        millimeter = (parseFloat(centimeter))*10;
    } else {
        kilometer = (parseFloat(millimeter))/1000000;
        meter = (parseFloat(millimeter))/1000;
        centimeter = (parseFloat(millimeter))/10;
    }

    document.getElementById('kilometer').value = parseFloat(kilometer).toFixed(6);
    document.getElementById('meter').value = parseFloat(meter).toFixed(4);
    document.getElementById('centimeter').value = parseFloat(centimeter).toFixed(4);
    document.getElementById('millimeter').value = parseFloat(millimeter).toFixed(4);
}

function timeConvert() {
  var hour = document.getElementById("hour").value;
  var minute = document.getElementById("minute").value;
  var second = document.getElementById("second").value;

  if (hour != '') {
        minute = (parseFloat(hour))*60;
        second = (parseFloat(hour))*3600;
    } else if (minute != '') {
        hour = (parseFloat(minute))/60;
        second = (parseFloat(minute))*60;
    } else {
        hour = (parseFloat(second))/3600;
        minute = (parseFloat(second))/60;
    }

  document.getElementById('hour').value = parseFloat(hour).toFixed(0);
  document.getElementById('minute').value = parseFloat(minute).toFixed(0);
  document.getElementById('second').value = parseFloat(second).toFixed(0);
}

function currencyConvert() {

  var rupee = document.getElementById("rupee").value;
  var dollar = document.getElementById("dollar").value;
  var euro = document.getElementById("euro").value;
  var pound = document.getElementById("pound").value;
  var yen = document.getElementById("yen").value;

  if (rupee != '') {
        dollar = (parseFloat(rupee))*0.014;
        euro = (parseFloat(rupee))*0.012;
        pound = (parseFloat(rupee))*0.011;
        yen = (parseFloat(rupee))*1.42;
    } else if (dollar != '') {
      rupee = (parseFloat(dollar))*75;
      euro = (parseFloat(dollar))*0.85;
      pound = (parseFloat(dollar))*0.78
      yen = (parseFloat(dollar))*104.74;
    } else if (euro != '') {
      rupee = (parseFloat(euro))*86.18;
      dollar = (parseFloat(euro))*1.18;
      pound = (parseFloat(euro))*0.92;
      yen = (parseFloat(euro))*123.5;
    } else if (pound != '') {
      rupee = (parseFloat(pound))*94.86;
      dollar = (parseFloat(pound))*1.29
      euro = (parseFloat(pound))*1.09;
      yen = (parseFloat(pound))*134.68
    } else {
      rupee = (parseFloat(yen))*0.7;
      dollar = (parseFloat(yen))*0.0095;
      euro = (parseFloat(yen))*0.0081;
      pound = (parseFloat(yen))*0.0074;
    }

    document.getElementById('rupee').value = parseFloat(rupee).toFixed(4);
    document.getElementById('dollar').value = parseFloat(dollar).toFixed(4);
    document.getElementById('euro').value = parseFloat(euro).toFixed(4);
    document.getElementById('pound').value = parseFloat(pound).toFixed(4);
    document.getElementById('yen').value = parseFloat(yen).toFixed(4);
}

function reset(clicked_id) {
  if (clicked_id == "clear3") {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
  }

  else if (clicked_id == "clear1") {
    document.getElementById('kilometer').value = '';
    document.getElementById('meter').value = '';
    document.getElementById('centimeter').value = '';
    document.getElementById('millimeter').value = '';
  }

  else if (clicked_id == "clear2") {
    document.getElementById('hour').value = '';
    document.getElementById('minute').value = '';
    document.getElementById('second').value = '';
  }

  else {
    document.getElementById('rupee').value = '';
    document.getElementById('dollar').value = '';
    document.getElementById('euro').value = '';
    document.getElementById('pound').value = '';
    document.getElementById('yen').value = '';
  }



}
