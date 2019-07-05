// JavaScript Document
var store = [],
  input = '';

function bksp() {
  "use strict";
  input = input.substring(0, input.length - 1);
  document.calc.screen.value = input;
}

function allClr() {
  "use strict";
  store = [];
  input = '';
  document.calc.screen.value = '0';
}

function fixNum(n) {
  "use strict";
  if (document.calc.screen.value === "LAPSE" ||
    (document.calc.screen.value == "0" && n != ".")) {
    document.calc.screen.value = "";
  }
  if (!(n === ".") || !input.match(/[.]/)) {
    input += n;
    document.calc.screen.value += n;
  }
}

function toStore(input) {
  "use strict";
  store.push(input);
}

function oper(val) {
  "use strict";
  if (input !== 0 && input !== '-') {
    input = parseFloat(input);
    toStore(input);
    toStore(val);
    document.calc.screen.value += val;
    input = 0;
  }
  if (val === '-' && isNaN(store[0]) && input !== '-') {
    input = '-';
    document.calc.screen.value = '-';
  }
}

function plsMin() {
  "use strict";
  input = (input.indexOf('-') === 0) ? input.substring(1) : '-' + input;
  document.calc.screen.value = input;
}

function solve() {
  var a = store;
  var b = a.concat(input).join("");
  if (b.indexOf('%') >= 0 && b.indexOf('=') === -1) {
    var c = eval(b.substring(-1, b.length - 2)) / 100;
    document.calc.screen.value = c;
  } else if (b.indexOf('=') === -1) {
    var k = a.concat(input.substr(1, input.length));
    var c = k.join("");
    document.calc.screen.value = eval(c);
  }
}
