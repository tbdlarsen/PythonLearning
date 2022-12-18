let startTime, endTime;
startTime = performance.now();

// Funktion til at generere tilfældige x- og y-værdier inden for kvadraten
function tilfældigePunkter() {
  var tilfældigePunkter1 = [Math.random(), Math.random()];
  //console.log(tilfældigePunkter1)
  return tilfældigePunkter1;


}

// Funktion til at tælle, hvor mange punkter der ligger inden for cirklen
function punkterICirkel(punkter1) {
  let Indeni = 0;
  for (const punkter of punkter1) {
    const x = punkter[0];
    const y = punkter[1];
    if (x * x + y * y <= 1) {
      Indeni++;
    }
  }
  return Indeni;
}

// Funktion til at estimere Pi ved hjælp af Monte Carlo-algoritmen
function Pi(numpunkter1) {
  const punkter1 = [];
  for (let i = 0; i < numpunkter1; i++) {
    punkter1.push(tilfældigePunkter());
  }
  const Indeni = punkterICirkel(punkter1);
  return 4 * Indeni / numpunkter1;
}

// Test af algoritmen med 1000 punkter
console.log(Pi(10000000));



endTime = performance.now();
console.log(Koden tog ${endTime - startTime} millisekunder at køre.);