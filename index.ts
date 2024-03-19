
let Client = require('ssh2-sftp-client');

const sftp = new Client();

(async () => {

  try {


    // Connect to the SFTP server
    await sftp.connect({
      host: 'sftp://student116.files.com/files/',
      port: 22,
      username: 'mukuljha302@gmail.com',
      password: 'Filessftp',
    });

    console.log('Connected to SFTP server');
    // Your SFTP actions will go here

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Disconnect from the SFTP server after all actions
    sftp.end();
  }
})();
