CREATE DATABASE galaxweb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'phpgalax'@'localhost' IDENTIFIED BY '1234'; 
GRANT ALL PRIVILEGES ON `GALAXWEB`.* TO 'phpgalax'@'localhost';
FLUSH PRIVILEGES;