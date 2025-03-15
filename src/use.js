const { loadUsers } = require('./modules/dataLoader'); 
const { sortStringsIgnoreSpaces } = require('./modules/sortStrings');
const { createDir, writeFile } = require('./modules/fsModule');

async function main() {
  // 1. Загружаем всех пользователей
  const { data: users, error } = await loadUsers();
  if (error) {
    console.error('Ошибка при загрузке пользователей:', error);
    return;
  }

  // 2. Извлекаем имена (user.name) и emails (user.email)
  const names = users.map(user => user.name);    // массив имён
  const emails = users.map(user => user.email);  // массив почт

  // 3. Сортируем имена, игнорируя пробелы (если нужно)
  const sortedNames = sortStringsIgnoreSpaces(names);

  // 4. Создаём папку "users" (если нет)
  createDir('users');

  // 5. Записываем в "names.txt" — отсортированные имена
  writeFile('users/names.txt', sortedNames.join('\n'));

  // 6. Записываем в "emails.txt" — почты (здесь не сортируем, но при желании можете тоже отсортировать)
  writeFile('users/emails.txt', emails.join('\n'));

  console.log('Файлы names.txt и emails.txt успешно созданы в папке "users".');
}

main();
