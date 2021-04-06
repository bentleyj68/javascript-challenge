// from data.js
var tableData = data;

// Load the table with all data
var tbody = d3.select("tbody");
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the button
var fil_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");

// Create event handlers 
fil_button.on("click", runEnter);
clear_button.on("click", clearFilter)

// Complete the event handler function for the form button
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var datetm = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value").toLowerCase();
    var state = d3.select("#state").property("value").toLowerCase();
    var country = d3.select("#country").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();
    
    // get all data and filter
    var filteredData = tableData.filter(sighting => 
        (datetm === "" || sighting.datetime === datetm) && 
        (city === "" || sighting.city === city) &&        
        (state === "" || sighting.state === state) &&
        (country === "" || sighting.country === country) &&
        (shape === "" || sighting.shape === shape));
    
    // Clear the table
    d3.selectAll('tbody tr').remove();
    
    // Add filtered rows
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        row.attr("class", "table-row");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

};

function clearFilter() {
    d3.select("#datetime").property("value", "");
    d3.select("#city").property("value", "");
    d3.select("#state").property("value", "");
    d3.select("#country").property("value", "");
    d3.select("#shape").property("value", "");

    d3.selectAll('tbody tr').remove();

    var tbody = d3.select("tbody");
    tableData.forEach((sighting) => {
      var row = tbody.append("tr");
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
    
};