document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateSandWeight();
});

function calculateSandWeight() {
  // Retrieve user inputs
  var boxLengthInches = parseFloat(document.getElementById('boxLength').value);
  var boxWidthInches = parseFloat(document.getElementById('boxWidth').value);
  var boxHeightInches = parseFloat(document.getElementById('boxHeight').value);
  var patternLengthCm = parseFloat(document.getElementById('patternLength').value);
  var patternWidthCm = parseFloat(document.getElementById('patternWidth').value);
  var patternMaxHeightCm = parseFloat(document.getElementById('patternMaxHeight').value);
  var sandCost = parseFloat(document.getElementById('sandCost').value);
  var castingWeight = parseFloat(document.getElementById('castingWeight').value);

  // Convert box dimensions from inches to cm
  var boxLengthCm = boxLengthInches * 2.54;
  var boxWidthCm = boxWidthInches * 2.54;
  var boxHeightCm = boxHeightInches * 2.54;

  // Calculate box volume
  var boxVolume = boxLengthCm * boxWidthCm * boxHeightCm;

  // Calculate pattern volume
  var patternVolume = patternLengthCm * patternWidthCm * patternMaxHeightCm;

  // Calculate difference in volumes
  var sandVolume = (boxVolume - patternVolume) / 1000000; // Convert cm^3 to m^3

  // Calculate sand weight
  var sandWeight = sandVolume * 1500; // Density of casting sand is 1500 kg/m^3

  // Calculate sand ratio
  var sandRatio = sandWeight / castingWeight;

  // Calculate cost for sand
  var sandCostTotal = sandWeight * sandCost;

  // Display results
  var resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `
    <div class="result">Box Dimensions (cm): ${boxLengthCm.toFixed(2)} x ${boxWidthCm.toFixed(2)} x ${boxHeightCm.toFixed(2)}</div>
    <div class="result">Volume Difference: ${sandVolume.toFixed(6)} m<sup>3</sup></div>
    <div class="result">Sand Weight: ${sandWeight.toFixed(2)} kg</div>
    <div class="result">Sand Ratio: ${sandRatio.toFixed(6)}</div>
    <div class="result">Cost for Sand: ₹${sandCostTotal.toFixed(2)}</div>
  `;
}
