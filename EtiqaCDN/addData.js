document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        id: 0,
        username: document.getElementById('username').value,
        mail: document.getElementById('mail').value,
        phoneNumber: document.getElementById('phonenumber').value,
        skillSet: document.getElementById('skillset').value,
        hobby: document.getElementById('hobby').value
    };

    fetch('https://localhost:7205/api/Information/Post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data added successfully');
        
        // Redirect to a new page after successful submission
        window.location.href = 'EtiqaCDN.html';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding data.');
    });
});