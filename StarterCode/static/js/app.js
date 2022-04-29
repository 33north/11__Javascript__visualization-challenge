filepath = "../data/samples.json";


const dataPromise = d3.json(filepath);
console.log("Data Promise: ", dataPromise);

d3.json(filepath).then(function(data){
    console.log(data)
});


