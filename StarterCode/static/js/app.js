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

// function getSampleData() {
//     let dropdownMenu = d3.select("#selDataset");
//     let dataset = dropdownMenu.property("value");
//     let data = [];

//     if (dataset == "") {
//         data = 
//     }
// }

