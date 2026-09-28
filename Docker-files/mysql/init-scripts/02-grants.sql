-- Extra privileges / additional databases
CREATE DATABASE IF NOT EXISTS analytics
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

GRANT ALL PRIVILEGES ON analytics.* TO 'myuser'@'%';
FLUSH PRIVILEGES;
