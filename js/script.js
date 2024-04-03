// Get the context of the canvas element we want to select
window.onload = function () {
    
    document.getElementById('download').addEventListener('click', function() {
        var canvas = document.getElementById('myChart');
        var imgURI = canvas.toDataURL('image/png');

        // Create a new anchor element
        var link = document.createElement('a');

        // Set the href and download attributes of the anchor
        link.href = imgURI;
        link.download = 'chart.png';

        // Append the anchor to the body (this is necessary for Firefox)
        document.body.appendChild(link);

        // Programmatically click the anchor
        link.click();

        // Remove the anchor from the body
        document.body.removeChild(link);
    });
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [], // Set the data for the income dataset
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [], // Set the data for the expenses dataset
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('chart-tab').addEventListener('click', function () {

        let incomeAndExpenses = {   
            january: {
                income: document.getElementById('income-january').value,
                expenses: document.getElementById('expenses-january').value
            },
            february: {
                income: document.getElementById('income-february').value,
                expenses: document.getElementById('expenses-february').value
            },
            march: {
                income: document.getElementById('income-march').value,
                expenses: document.getElementById('expenses-march').value
            },
            april: {
                income: document.getElementById('income-april').value,
                expenses: document.getElementById('expenses-april').value
            },
            may: {
                income: document.getElementById('income-may').value,
                expenses: document.getElementById('expenses-may').value
            },
            june: {
                income: document.getElementById('income-june').value,
                expenses: document.getElementById('expenses-june').value
            },
            july: {
                income: document.getElementById('income-july').value,
                expenses: document.getElementById('expenses-july').value
            },
            august: {
                income: document.getElementById('income-august').value,
                expenses: document.getElementById('expenses-august').value
            },
            september: {
                income: document.getElementById('income-september').value,
                expenses: document.getElementById('expenses-september').value
            },
            october: {
                income: document.getElementById('income-october').value,
                expenses: document.getElementById('expenses-october').value
            },
            november: {
                income: document.getElementById('income-november').value,
                expenses: document.getElementById('expenses-november').value
            },
            december: {
                income: document.getElementById('income-december').value,
                expenses: document.getElementById('expenses-december').value
            }
        };

        // Create arrays for income and expenses
        let incomeData = [];
        let expensesData = [];

        // Iterate over the incomeAndExpenses object
        for (let month in incomeAndExpenses) {
            // Push the income and expenses for each month into the respective arrays
            incomeData.push(incomeAndExpenses[month].income);
            expensesData.push(incomeAndExpenses[month].expenses);
        }

        // Create the chart
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();

    });
};