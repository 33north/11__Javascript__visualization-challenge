// Filepath to belly button data json file
filepath = "../data/samples.json";

// Console log check to see promise and json data
const bioData = d3.json(filepath);
console.log("Data Promise: ", bioData);

// Type 1
// d3.json(filepath).then(function(data) {
//     console.log(data);
//     let name = data.names;
//     for (let i = 0; i < name.length; i++) {
//         console.log(name[i]);
//     };
// });

// Type 2
// bioData.then(function(data) {
//     console.log(data);
//     let name = data.names;
//     let metadata = data.metadata;
//     for (let i = 0; i < name.length; i++) {
//         console.log(name[i]);
//     };
//     for (let i = 0; i < metadata.length; i++) {
//         console.log(metadata[i])
//     };
// });

// bioData.then((data) => {
//     console.log(typeof(data));
//     console.log(data);
// });

// Type 3
// const bioDataset = d3.json(filepath).then(function(data) {console.log(data)});
// const bioDataset = d3.json(filepath).then(function(data) {
//     return data;
// });
// const moreData = bioDataset.then((data) => {
//     // console.log(data);
//     // let name = data.names;
//     // for (let i = 0; i < names.length; i++) {
//     //     console.log(names[i]);
//     // };
//     console.log(Promise.all(data.names));
// });

// function printstuff(data) {
//     console.log(typeof(data));
//     console.log(data);
// }

// printstuff(bioDataset)

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

