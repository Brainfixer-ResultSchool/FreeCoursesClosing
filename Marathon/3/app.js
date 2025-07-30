document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Поиск по имени...';
  container.appendChild(input);

  const userList = document.createElement('div');
  container.appendChild(userList);

  const style = document.createElement('style');
  style.textContent = `
			.container { max-width: 800px; margin: 0 auto; padding: 20px; }
			input { width: 100%; padding: 10px; margin-bottom: 20px; }
			.user-card { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
	`;
  document.head.appendChild(style);

  let users = [];

  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Loading Error!!!');
      users = await response.json();
      renderUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      userList.innerHTML = '<p>Ошибка загрузки данных</p>';
    }
  }

  function renderUsers(usersToDisplay) {
    userList.innerHTML = '';
    usersToDisplay.forEach((user) => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
							<h3>${user.name}</h3>
							<p>Email: ${user.email}</p>
							<p>Phone: ${user.phone}</p>
					`;
      userList.appendChild(userCard);
    });
  }

  input.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm));
    renderUsers(filteredUsers);
  });

  fetchUsers();
});
