document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        {name: "Товар 1", quantity: 2},
        {name: "Товар 2", quantity: 3},
        {name: "Товар 3", quantity: 4},
        {name: "Товар 4", quantity: 5},
        {name: "Товар 5", quantity: 6},
    ];

    const ctx = document.getElementById('popularityChart').getContext('2d');
    const labels = cartItems.map(item => item.name);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Популярність товару',
            data: cartItems.map(item => item.quantity),
            backgroundColor: [
                'rgba(255, 255, 255, 1)', 
                'rgba(255, 192, 203, 1)', 
                'rgba(238, 130, 238, 1)', 
                'rgba(0, 0, 0, 1)',      
                'rgba(173, 216, 230, 1)' 
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)', 
                'rgba(255, 192, 203, 1)', 
                'rgba(238, 130, 238, 1)',
                'rgba(0, 0, 0, 1)',      
                'rgba(173, 216, 230, 1)'  
            ],
            
            borderWidth: 1
        }]
    };

    const popularityChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
