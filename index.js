document.getElementById("fetchTodoBtn").addEventListener("click", function() {
    const todoId = document.getElementById("todoId").value;
    const todoInfoContainer = document.getElementById("todoInfo");
  
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(todo => {
        todoInfoContainer.innerHTML = `
          <p>ToDo ID: ${todo.id}</p>
          <p>Title: ${todo.title}</p>
          <p>Completed: ${todo.completed}</p>
        `;
      })
      .catch(error => {
        todoInfoContainer.innerHTML = "Error fetching ToDo. Please try again.";
        console.error("Error:", error);
      });
  });
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
