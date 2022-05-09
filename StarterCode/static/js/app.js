// Filepath to belly button data json file
filepath = "../data/samples.json";

// Console log check to see promise and json data
const bioData = d3.json(filepath);

function init() {
  selDataset();
  sampleMetadata();
};

init();

// On change to the DOM, call getData()
d3.select("#selDataset").on("change", selDataset);

// Function called by DOM changes
function selDataset() {
  // Select selDataset id in html file
  let dropdownMenu = d3.select("#selDataset");

  // Getting data for the dropdown menu
  bioData.then(function(data) {
    let name = data.names;
    let dataset = dropdownMenu.property("value");
    name.forEach(function(num) {
      dropdownMenu.append("option").text(num);
    });

    console.log(name[0]);
    let startValue = name[0];
    console.log(startValue);
    sampleMetadata(startValue);

  });

};

function sampleMetadata(value) {
  // Select sample-metadata in html file
  let demobox = d3.select("#sample-metadata");
  demobox.text("");


  bioData.then(function(data) {
    let metadata = data.metadata;
    // console.log(metadata[0]);

    let metadataKey;
    for (let metadataObject of metadata) {
      // demobox.append("description").text(metadata[i])
      // console.log(metadata[i])
      if (metadataObject.id == value) {
        metadataKey = metadataObject;
        console.log(metadataKey);
        break;
      };
    };

    let displayText;
    for (let object in metadataKey) {
      displayText = object + ": " + metadataKey[object] + "\n";
      demobox.append("p").text(displayText);
    };
    
  });

  


};

// function charts(value) {
//   bioData.then(function(data) {
//     let sample = data.samples;
//     let sampleData;
//     for (let sampleObj of sample) {
//       if (sampleObj.id == value) {
//         sampleData = sampleObj;
//         break
//       };
//     };

//     let otu_sample_values = sampleData.sample_values.slice(0, 10);
//     let otu_ids = sampleData.otu_ids.slice(0, 10);

//     for (let i; i < otu_ids.length(); i++) {
//       otu_ids[i] = "OTU" + otu_ids[i].toString();
//     };
    
//     let otu_labels = sampleData.otu_labels.slice(0, 10);

//     let barData = [{
//       x: otu_sample_values,
//       y: otu_ids,
//       type: "bar",
//       orientation: "h",
//       text: otu_labels
//     }];

//     let layout = {
//       yaxis: {
//         autorange: "reversed"
//       }
//     };

//     Plotly.newPlot("bar", barData, layout);

//   });
// };

// Updates the function on dropdown menu change
function optionChanged(value) {
  sampleMetadata(value);
};