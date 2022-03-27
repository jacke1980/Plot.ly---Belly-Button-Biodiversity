
d3.json("samples.json").then(function(data){
console.log(data)
    
let ids = data.samples[0].otu_ids;
//console.log(ids);
let allValues = data.samples[0].sample_values;
let values= data.samples[0].sample_values.slice(0,10).reverse();
//console.log(values);
let allLabels=data.samples[0].otu_labels;
let labels = data.samples[0].otu_labels.slice(0,10);
//console.log(labels);

let OTU_top = ( data.samples[0].otu_ids.slice(0, 10)).reverse();
console.log(OTU_top);

// get the otu id's to the desired form for the plot
let OTU_id = OTU_top.map(d => "OTU " + d);
console.log(`OTU IDS: ${OTU_id}`);
// get the top 10 labels for the plot
console.log(`OTU_labels:${labels}`);

// create layout variable to set plots layout
var trace = {
    x:values,
    y:OTU_id,
    text: labels,
    marker:{
        color:'blue'},
    type:'bar',
    orientation:'h',    
};
let dataPlot = [trace];

var layout = {
    title:'Top 10 OTUs ',
    yaxis:{
        tickmode:'linear'
    },
    margin:{
        l:100,
        r:100,
        t:100,
        b:30
    }
};

Plotly.newPlot('bar', dataPlot, layout);

// set the layout for the bubble plot
var trace1={
    x:ids,
    y:allValues,
    mode:'markers',
    marker: {
        size:allValues,
        color:ids,
    },
    text: allLabels
};
var layout1 = {
    xaxis:{title:'OTU ID'},
    height:600,
    width:1000
};
let dataPlot1=[trace1];
Plotly.newPlot('bubble', dataPlot1, layout1)



});

// create the function to get the necessary data


  
