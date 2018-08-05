function fullExample() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">form</span><span>=</span>"form1" ' +
    '<span class="crimson">name</span><span>=</span>"x1" ' +
    '<span class="crimson">min</span><span>=</span>"0"  ' +
    '<span class="crimson">low</span><span>=</span>"40" ' +
    '<span class="crimson">high</span><span>=</span>"90" ' +
    '<span class="crimson">max</span><span>=</span>"100" ' +
    '<span class="crimson">value</span><span>=</span>"95" ' +
    '<span class="crimson">optimum</span><span>=</span>"50"&gt;&lt;<span class="brown">/meter</span>&gt;</span>';
    meterValues.min = "0";
    meterValues.low = "40";
    meterValues.high = "90";
    meterValues.max = "100";
    meterValues.optimum = "50";
    meterValues.value = "95";
}

function optimum1() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">min</span><span>=</span>"0" ' +
    '<span class="crimson">low</span><span>=</span>"50" ' +
    '<span class="crimson">high</span><span>=</span>"130" ' +
    '<span class="crimson">max</span><span>=</span>"200" ' +
    '<span class="crimson">value</span><span>=</span>"105" ' +
    '<span class="crimson">optimum</span><span>=</span>"40"&gt;&lt;<span class="brown">/meter</span>&gt;</span>';
  meterValues.min = "0";
  meterValues.low = "50";
  meterValues.high = "130";
  meterValues.max = "200";
  meterValues.value = "105";
  meterValues.optimum = "40";
}

function optimum2() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">min</span><span>=</span>"0" ' +
    '<span class="crimson">low</span><span>=</span>"50" ' +
    '<span class="crimson">high</span><span>=</span>"130" ' +
    '<span class="crimson">max</span><span>=</span>"200" ' +
    '<span class="crimson">value</span><span>=</span>"105" ' +
    '<span class="crimson">optimum</span><span>=</span>"60"&gt;&lt;<span class="brown">/meter</span>&gt;</span>';
  meterValues.min = "0";
  meterValues.low = "50";
  meterValues.high = "130";
  meterValues.max = "200";
  meterValues.value = "105";
  meterValues.optimum = "60";
}

function value1() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">min</span><span>=</span>"0" ' +
    '<span class="crimson">low</span><span>=</span>"50" ' +
    '<span class="crimson">high</span><span>=</span>"130" ' +
    '<span class="crimson">max</span><span>=</span>"200" ' +
    '<span class="crimson">value</span><span>=</span>"105"&gt;';
  meterValues.min = "0";
  meterValues.low = "50";
  meterValues.high = "130";
  meterValues.max = "200";
  meterValues.value = "105";
}

function value2() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">min</span><span>=</span>"0" ' +
    '<span class="crimson">low</span><span>=</span>"50" ' +
    '<span class="crimson">high</span><span>=</span>"130" ' +
    '<span class="crimson">max</span><span>=</span>"200" ' +
    '<span class="crimson">value</span><span>=</span>"170"&gt;';
  meterValues.min = "0";
  meterValues.low = "50";
  meterValues.high = "130";
  meterValues.max = "200";
  meterValues.value = "170";
}

function value3() {
  meterText.innerHTML =
    '<span class="blue">&lt;<span class="brown">meter</span> ' +
    '<span class="crimson">min</span><span>=</span>"0" ' +
    '<span class="crimson">low</span><span>=</span>"50" ' +
    '<span class="crimson">high</span><span>=</span>"130" ' +
    '<span class="crimson">max</span><span>=</span>"200" ' +
    '<span class="crimson">value</span><span>=</span>"10"&gt;';
  meterValues.min = "0";
  meterValues.low = "50";
  meterValues.high = "130";
  meterValues.max = "200";
  meterValues.value = "10";
}

function withoutRp() {
  rubyTextRp.style.display = "none";
  rubyText.style.display = "block";
  rt.style.display = "block";
  rp.style.display = "none";
}

function withRp() {
  rubyTextRp.style.display = "block";
  rubyText.style.display = "none";
  rt.style.display = "none";
  rp.style.display = "block";
}

function showTemplate() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}

function showTime() {
  showDatetimeText.style.display = "none";
  showTimeText.style.display = "block";
  showTimeValue.style.display = "block";
  showDatetimeValue.style.display = "none";
}

function showDatetime() {
  showDatetimeText.style.display = "block";
  showTimeText.style.display = "none";
  showTimeValue.style.display = "none";
  showDatetimeValue.style.display = "block";
}

function width80() {
  wbrWidthValue.style.width = "80px";
  wbrText80.style.display = "block";
  wbrText120.style.display = "none";
  wbrText200.style.display = "none";
}

function width120() {
  wbrWidthValue.style.width = "120px";
  wbrText80.style.display = "none";
  wbrText120.style.display = "block";
  wbrText200.style.display = "none";

}

function width200() {
  wbrWidthValue.style.width = "200px";
  wbrText80.style.display = "none";
  wbrText120.style.display = "none";
  wbrText200.style.display = "block";
}
