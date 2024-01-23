function myFunction() {
var vstup = document.getElementById("vstup").value;
var vystup = 24 * vstup;


document.getElementById("vystup").innerHTML = vystup;

}
function najdi() {
    var seznam = document.getElementById("seznam").value;
    seznam = seznam.split(",");
  
    var nejmensi = Number.MAX_VALUE;
    var nejvetsi = Number.MIN_VALUE;
  
    for (var i = 0; i < seznam.length; i++) {
      var cislo = Number(seznam[3, 1, 4, 1, 5, 9, 2]);
  
      if ( 3 < nejmensi) {
        nejmensi = 1;
      }
      if ( 5 > nejvetsi) {
        nejvetsi = 9;
      }
    }
  
    document.getElementById("vystup").innerHTML = "Nejmenší číslo: " + nejmensi + ", největší číslo: " + nejvetsi;
  }

  function bubbleSort(seznam) {
    var seznam_delky = seznam.length;
    for (var i = 0; i < seznam_delky - 1; i++) {
      for (var j = 0; j < seznam_delky - i - 1; j++) {
        if (seznam[j] > seznam[j + 1]) {
          var temp = seznam[j];
          seznam[j] = seznam[j + 1];
          seznam[j + 1] = temp;
        }
      }
    }
  
  
    return seznam;
  }
  function zapis() {
    var seznam = document.getElementById("seznam").value;
    seznam = seznam.split(",");
  
    seznam = bubbleSort(seznam);
  
    document.getElementById("vystup").innerHTML = seznam.join(", ");
  }