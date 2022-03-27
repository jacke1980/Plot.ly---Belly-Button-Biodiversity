d3.json("samples.json").then(function(data){
    console.log(data)
    
let ids = data.samples[0].otu_ids;
console.log(ids);

let values= data.samples[0].sample_values.slice(0,10).reverse();
console.log(values);

let labels = data.samples[0].otu_labels.slice(0,10);
console.log(labels);
});

