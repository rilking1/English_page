var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Speaking',
            data: [5, 10, 8, 15, 7, 12, 9],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Writing',
            data: [8, 15, 7, 12, 9, 5, 10],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Reading',
            data: [12, 9, 5, 10, 8, 15, 7],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Listening',
            data: [10, 8, 15, 7, 12, 9, 5],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
