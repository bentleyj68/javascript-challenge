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
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form button
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(people);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

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