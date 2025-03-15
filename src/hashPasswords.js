const bcrypt = require('bcrypt');

async function hashAllPasswords() {
  const passwords = [
    'pass1', 'pass2', 'pass3','pass4', 'pass5', 'pass6', 'pass7', 'pass8', 'pass9', 'pass10', 'pass11', 'pass12', 'pass13'  ];
  const startTime = Date.now();

  // Запускаем шифрование параллельно (Promise.all)
  const promises = passwords.map(async (pwd, idx) => {
    const singleStart = Date.now();
    const hash = await bcrypt.hash(pwd, 10);
    const singleEnd = Date.now();
    console.log(`Пароль #${idx+1} зашифрован за ${singleEnd - singleStart} мс`);
    return hash;
  });

  const hashes = await Promise.all(promises);
  const totalEnd = Date.now();

  console.log(`Все пароли зашифрованы за: ${totalEnd - startTime} мс`);
}

hashAllPasswords();
