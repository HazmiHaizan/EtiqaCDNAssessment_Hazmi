fetch('https://localhost:7205/api/Information/GetAll')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('tablebody');
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.username}</td>
            <td>${item.phoneNumber}</td>
            <td>${item.skillSet}</td>
            <td>${item.hobby}</td>
            <td>
              <a href="#editEmployeeModal" class="edit" onclick="editData(${item.id})" data-toggle="modal" data-target="#editModal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
              <a href="#deleteEmployeeModal" class="delete" onclick="deleteData(${item.id})"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
          `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));

function deleteData(id) {

  const confirmation = window.confirm('Are you sure you want to delete this item?');

  if (confirmation) {
    fetch('https://localhost:7205/api/Information/Delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          row.remove();
        } else {
          console.error('Failed to delete item');
        }
      })
      .finally(() => {
        window.location.reload();
      })
      .catch(error => console.error('Error:', error));
  }
}
