function fetchHealthCheck() {
    fetch('/api/health')
        .then(response => response.json())
        .then(data => {
            document.getElementById('health-status').innerText = `API Status: ${data.status}`;
        })
        .catch(error => {
            document.getElementById('health-status').innerText = 'Error fetching API health';
            console.error('Error:', error);
        });
}

console.log("Frontend loaded successfully");
