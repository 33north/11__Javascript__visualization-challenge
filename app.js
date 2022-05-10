// Filepath to belly button data json file
filepath = "data/samples.json";

// Console log check to see promise and json data
const bioData = d3.json(filepath);

function init() {
  selDataset();
  // sampleMetadata();
};

init();

// Updates the function on dropdown menu change
function optionChanged(value) {
  sampleMetadata(value);
  charts(value);
};

// On change to the DOM, call getData()
d3.select("#selDataset").on("change", selDataset);

// Function called by DOM changes and populate dropdownMenu
function selDataset() {
  // Select selDataset id in html file
  let dropdownMenu = d3.select("#selDataset");

  // Getting data for the dropdown menu
  bioData.then(function(data) {
    let name = data.names;
    name.forEach(function(num) {
      dropdownMenu.append("option").text(num);
    });

    // Initial data to display on webpage
    sampleMetadata(dropdownMenu.node().value);
    charts(dropdownMenu.node().value);
  });

};

// Function for getting metadata for demographic section
function sampleMetadata(value) {
  // Select sample-metadata in html file
  let demobox = d3.select("#sample-metadata");
  demobox.text("");

  bioData.then(function(data) {
    let metadata = data.metadata;

    // Grabbing the elements within the metadata list
    let metadataKey;
    for (let metadataObject of metadata) {
      if (metadataObject.id == value) {
        metadataKey = metadataObject;
        break;
      };
    };

    // Display each keyvalue pair within the metadataKey list
    let displayText;
    for (let element in metadataKey) {
      displayText = element + ": " + metadataKey[element] + "\n";
      demobox.append("p").text(displayText);
    };

    // Calling the gauge chart
    gaugeChart(metadataKey.wfreq);
  });
};

// Function for bar and bubble chart
function charts(value) {
  bioData.then(function(data) {
    let sample = data.samples;
    let sampleData;
    for (let sampleObj of sample) {
      if (sampleObj.id == value) {
        sampleData = sampleObj;
        break;
      }
    };

    console.log(sampleData);
    
    // Grabbing the first 10 elements in the list for the corresponding key
    let otu_sample_values = sampleData.sample_values.slice(0, 10);
    let otu_ids = sampleData.otu_ids.slice(0, 10);
    let otu_labels = sampleData.otu_labels.slice(0, 10);

    console.log(otu_sample_values);
    console.log(otu_ids);
    console.log(otu_labels);

    for (let i = 0; i < otu_ids.length; i++) {
      otu_ids[i] = "OTU" + otu_ids[i].toString();
    };
    
    // Bar Chart
    let barData = [{
      x: otu_sample_values,
      y: otu_ids,
      type: "bar",
      orientation: "h",
      hovertemplate: "%{text}<extra></extra>",
      text: otu_labels
    }];

    let barLayout = {
      title: {
        text: "Top 10 OTUs"
      },
      yaxis: {
        autorange: "reversed"
      }
    };

    Plotly.newPlot("bar", barData, barLayout);

    // Bubble Chart
    let bubbleData = [{
      x: sampleData.otu_ids,
      y: sampleData.sample_values,
      mode: "markers",
      marker: {
        size: sampleData.sample_values,
        color: sampleData.otu_ids,
      },
      hovertemplate: "%{text}<extra></extra>",
      text: otu_sample_values
    }];

    let bubbleLayout = {
      title: {
        text: "Frequency of OTU Ids"
      },
      xaxis: {
        title: "OTU Ids"
      },
      width: 1200,
      height: 700
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
};

// Displays the gauge chart for wfreq
function gaugeChart(freq){
  let gaugeData = [{
      domain: { x:[0,1], y:[0,1] },
      value: freq,
      title: {
        text: "Belly Button Washing Frequency"
      },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [0,9] },
        steps: [
          { range: [0,1], color:'rgb(241,248,233)' },
          { range: [1,2], color:'rgb(220,237,200)' },
          { range: [2,3], color:'rgb(197,225,165)' },
          { range: [3,4], color:'rgb(174,213,129)' },
          { range: [4,5], color:'rgb(156,204,101)' },
          { range: [5,6], color:'rgb(139,195,74)' },
          { range: [6,7], color:'rgb(124,179,66)' },
          { range: [7,8], color:'rgb(104,159,56)' },
          { range: [8,9], color:'rgb(85,139,47)' },
        ]
      }
    }];
    Plotly.newPlot("gauge",gaugeData);
};