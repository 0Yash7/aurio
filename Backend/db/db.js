import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',     // or your DB host
  user: 'root',
  password: 'Anupaksh@123#', // your DB password
  database: 'photo_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
