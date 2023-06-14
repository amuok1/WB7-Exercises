document.addEventListener("DOMContentLoaded", function() {
    const usersTableBody = document.getElementById("usersData");
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
            <td>${user.website}</td>
          `;
          usersTableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  