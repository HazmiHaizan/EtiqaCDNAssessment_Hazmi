var editId = null;

function editData(id) {
    editId = id;
    console.log(editId);
    fetch('https://localhost:7205/api/Information/Get/' + id)
        .then(response => response.json())
        .then(data => {
            const editForm = document.getElementById('editForm');
            console.log(data.username);
            document.getElementById('usernameEdit').value = data.username;
            document.getElementById('mailEdit').value = data.mail;
            document.getElementById('phonenumberEdit').value = data.phoneNumber;
            document.getElementById('skillsetEdit').value = data.skillSet;
            document.getElementById('hobbyEdit').value = data.hobby;
        })
        .catch(error => console.error(error));
}

document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(editId);
    const data = {
        id: editId,
        username: document.getElementById('usernameEdit').value,
        mail: document.getElementById('mailEdit').value,
        phoneNumber: document.getElementById('phonenumberEdit').value,
        skillSet: document.getElementById('skillsetEdit').value,
        hobby: document.getElementById('hobbyEdit').value
    };

    var apiUri = 'https://localhost:7205/api/Information/Put/' + editId;

    console.log(apiUri);

    fetch(apiUri, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 204) {
                // Handle the 204 No Content response
                console.log('User updated successfully with no additional data returned.');
                alert('User updated successfully!');
                window.location.href = "EtiqaCDN.html";
                return; // No further processing needed
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // If there's content, parse it as JSON
        })
        .then(data => {
            if (data) {
                console.log('Success:', data);
                alert('User updated successfully with data returned!');
            }
        })
        .catch(error => {
            console.error(error);
            alert('Failed to update user.');
        });
});




