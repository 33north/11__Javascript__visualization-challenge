// Filepath to belly button data json file
filepath = "../data/samples.json";

// Console log check to see promise and json data
const bioData = d3.json(filepath);
console.log("Data Promise: ", bioData);

bioData.then(function(data) {
    console.log(data);
    let name = data.names;
    let metadata = data.metadata;
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    };
    for (let i = 0; i < metadata.length; i++) {
        console.log(metadata[i])
    };
});

// function displayData(jsonFile) {
//     jsonElement = jsonFile.names
//     for (let i = 0; i < jsonElement.length; i++) {
//         console.log(jsonElement[i])
//     }
//     // let data = [{
//     //     sample_values: ,
//     //     otu_ids: ,
//     //     otu_labels: 
//     //     values: ,
//     //     labels: ,
//     //     type: "bar"
//     // }];

//     // let layout = {
//     //     height: 600,
//     //     width: 800
//     // };

//     // Plotly.newPlot("bar", data, layout);
// };


// function getSampleData(data) {
//     let dropdownMenu = d3.select("#selDataset");
//     let dataset = dropdownMenu.property("value");
//     let data = [];

//     if (dataset == "") {
//         data = 
//     }
// }

// Initializes the page with a default plot
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("plot", data);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();