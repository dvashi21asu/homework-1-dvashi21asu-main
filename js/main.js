// Declare your global variables here
var svg;

// This function is called once the HTML page is fully loaded by the browser
document.addEventListener('DOMContentLoaded', function () {
    // Select the 'myDataVis' div and append an SVG element
    var myDataVisDiv = d3.select('#myDataVis');
    svg = myDataVisDiv.append('svg')
        .attr('width', 1000)
        .attr('height', 600);

    // This will load your two CSV files and store them into two arrays.
    Promise.all([d3.csv('data/females_data.csv'), d3.csv('data/males_data.csv')])
        .then(function (values) {
            console.log('loaded females_data.csv and males_data.csv');
            female_data = values[0];
            male_data = values[1];
            console.log(male_data);

            // Hint: This is a good spot for doing data wrangling

            drawLolliPopChart();
        });
});

// Use this function to draw the lollipop chart.
function drawLolliPopChart() {
    console.log('trace:drawLollipopChart()');
    // You can now use the 'svg' variable to add visualizations to the SVG element.
}
