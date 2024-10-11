### MySQL 基本指令

```sql
-- 建立資料庫
CREATE DATABASE `gj_accounts_db`;

-- 列出當前 MySQL 伺服器上的所有數據庫名稱
SHOW DATABASES;

-- 刪除 gj_accounts_db 資料庫
DROP DATABASE `gj_accounts_db`;

-- 使用 gj_accounts_db 資料庫
USE `gj_accounts_db`;

-- 建立 gj_accounts 資料表
CREATE TABLE `gj_accounts`(
	`gj_account` VARCHAR(100),
    `gj_password` VARCHAR(100),
    PRIMARY KEY(`gj_account`)
);

-- 顯示 gj_accounts 資料表的結構
DESCRIBE `gj_accounts`;

-- 刪除 gj_accounts 資料表
DROP TABLE `gj_accounts`;

-- 這條語句是向 gj_accounts 資料表中新增一個名為 gpa 的欄位，gpa 的資料型態是 DECIMAL(3, 2)，表示這個欄位可以存儲最多 3 位數字，其中 2 位是小數
ALTER TABLE `gj_accounts` ADD gpa DECIMAL(3, 2);

-- 從 gj_accounts 資料表中刪除名為 gpa 的欄位
ALTER TABLE `gj_accounts` DROP COLUMN gpa;

-- 在資料表 gj_accounts 中插入一筆記錄，具體是插入兩個值
INSERT INTO `gj_accounts` VALUES('gjun_awf@pcschool.tv', 'Awf23881275');
INSERT INTO `gj_accounts` VALUES('gjun.awf@pcschool.tv', 'Awf23881275');

-- 在資料表 gj_accounts 資料表中新增一個名為 number_of_meetings 的欄位，並且這個欄位可以存儲最多 100 個字元的文字資料
ALTER TABLE `gj_accounts`
ADD `number_of_meetings` VARCHAR(100);

-- 新增 in_use 欄位且預設值為0
ALTER TABLE `gj_accounts`
ADD `in_use` INT NOT NULL DEFAULT 0;

-- 在 gj_ccounts 新增多筆數值的方式
INSERT INTO `gj_accounts` (gj_account, gj_password, in_use)
VALUES ('GJ-test-01@pcschool.tv', 'GJ-test-01-1009', 0), ('GJ-test-02@pcschool.tv', 'GJ-test-02-1009', 0), ('GJ-en-01@pcschool.tv', 'GJ-en-01-1009', 0), ('GJ-en-02@pcschool.tv', 'GJ-en-02-1009', 0), ('GJ-jp-01@pcschool.tv', 'GJ-jp-01-1009', 0), ('GJ-jp-02@pcschool.tv', 'GJ-jp-02-1009', 0), ('GJ-germany-01@pcschool.tv', 'GJ-germany-01-1009', 0), ('GJ-germany-02@pcschool.tv', 'GJ-germany-02-1009', 0);

-- 插入值
UPDATE `gj_accounts`
SET `gj_password` = 'GJ-germany-02-1009_test'
WHERE `gj_account` = 'GJ-germany-02@pcschool.tv';

-- 插入值
UPDATE `gj_accounts`
SET `in_use` = 0
WHERE `gj_account` = 'GJ-germany-02@pcschool.tv' ;

-- 多行中插入同一個值
UPDATE `gj_accounts`
SET `in_use` = 0
WHERE `gj_account` IN ('GJ-en-01@pcschool.tv', 'GJ-en-02@pcschool.tv', 'GJ-germany-01@pcschool.tv', 'GJ-germany-02@pcschool.tv', 'GJ-jp-01@pcschool.tv', 'GJ-jp-02@pcschool.tv', 'GJ-test-01@pcschool.tv', 'GJ-test-02@pcschool.tv', 'gjun_awf@pcschool.tv', 'gjun.awf@pcschool.tv');

-- 選擇 gj_accounts 資料表
SELECT * FROM `gj_accounts`;

-- 建立 gj_courses_db 資料庫
CREATE DATABASE `gj_courses_db`;

-- 使用 gj_courses_db 資料庫
USE `gj_courses_db`;

-- 建立 gj_courses 資料表
CREATE TABLE `gj_courses`(
	`meet_id` VARCHAR(100) ,
    `meet_title` VARCHAR(100),
    `meet_link` VARCHAR(255),
    `gj_account` VARCHAR(100),
    `gj_password` VARCHAR(100),
    `start_time` TIMESTAMP,
    `end_time` TIMESTAMP,
    `recording_enabled` BOOLEAN,
    `recording_link` VARCHAR(255),
    PRIMARY KEY(`meet_id`)
);

-- 在資料表 gj_courses 資料表中新增一個名為 course_number 的欄位，並且這個欄位可以存儲最多 100 個字元的文字資料
ALTER TABLE `gj_courses`
ADD `course_number` VARCHAR(100);

-- 在資料表 gj_courses 中新增一個名為 forbidden_anyone_join 的欄位，並且這個欄位的資料類型是 BOOLEAN，也就是布林值。布林值只能存儲兩種值：TRUE 或 FALSE（在 MySQL 中，通常 1 代表 TRUE，0 代表 FALSE）
ALTER TABLE `gj_courses`
ADD `forbidden_anyone_join` BOOLEAN;

-- 刪除 gj_accounts 資料表
DROP TABLE `gj_accounts`;

-- 顯示 gj_courses 資料表的結構
DESCRIBE `gj_courses`;

-- 在 gj_courses 資料表中插入一整行的資料
INSERT INTO `gj_courses` VALUES('osr-ninh-auo', 'GJ 取得 Google Meet API', 'https://meet.google.com/osr-ninh-auo', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-23 17:30:00', '2024-09-23 18:00:00', TRUE, 'https://drive.google.com/file/d/1XUtdfsnBBUhnnLzKkGXdswe934xvfJ_7/view?usp=drive_link');
INSERT INTO `gj_courses` VALUES('ber-dpzn-ddx', 'GJ API Test 測試-2', 'https://meet.google.com/ber-dpzn-ddx', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-24 11:10:00', '2024-09-24 11:50:00', FALSE, NULL);
INSERT INTO `gj_courses` VALUES('hax-xdiz-wkc', 'GJ API Test 0924下午測試', 'https://meet.google.com/hax-xdiz-wkc', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-24 13:25:00', '2024-09-24 14:55:00', TRUE, 'https://drive.google.com/file/d/1c63pwYHhQQFfHqvTWqnzomm288C8kLjx/view');

-- 選擇 gj_courses 資料表
SELECT * FROM `gj_courses`;

-- 使用 left join
SELECT gj_courses.gj_account, gj_accounts.gj_password
FROM gj_courses
LEFT JOIN gj_accounts
ON gj_courses.gj_account = gj_accounts.gj_account;

-- 更新 gj_courses 資料表中的 recording_enabled 欄位，使其值設置為 FALSE
UPDATE `gj_courses`
SET `recording_enabled` = FALSE
-- WHERE `meet_id` = 'swj-vahs-cqm';
WHERE `meet_id` IN ('kse-ctys-yzg', 'ryy-rnra-xzd', 'qve-gfdm-emv', 'ygy-wxgx-fkh', 'sti-utjp-kwi');

-- 從 gj_courses 資料表中刪除 meet_id 等於 'ttt-aaaa-bbb' 的那一行記錄。
DELETE FROM `gj_courses`
WHERE `meet_id` = 'ttt-aaaa-bbb';

-- 從 gj_courses 資料表中刪除名為 gj_password 的欄位
ALTER TABLE `gj_courses`
DROP COLUMN `gj_password`;

-- 更改 MySQL 資料庫中使用者 'root' 在 localhost 主機上的密碼，將其設置為 'GJ_db_test_2024'
ALTER USER 'root'@'localhost' IDENTIFIED BY 'GJ_db_test_2024';
```
