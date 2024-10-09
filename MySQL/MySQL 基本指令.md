### MySQL 基本指令

```sql
CREATE DATABASE `gj_accounts_db`;


SHOW DATABASES;


DROP DATABASE `gj_accounts_db`;


USE `gj_accounts_db`;


CREATE TABLE `gj_accounts`(
	`gj_account` VARCHAR(100) PRIMARY KEY,
    `gj_password` VARCHAR(100)
);
CREATE TABLE `gj_accounts`(
	`gj_account` VARCHAR(100),
    `gj_password` VARCHAR(100),
    PRIMARY KEY(`gj_account`)
);


DESCRIBE `gj_accounts`;


DROP TABLE `gj_accounts`;


ALTER TABLE `gj_accounts` ADD gpa DECIMAL(3, 2);
ALTER TABLE `gj_accounts` DROP COLUMN gpa;


INSERT INTO `gj_accounts` VALUES('gjun_awf@pcschool.tv', 'Awf23881275');


SELECT * FROM `gj_accounts`;


ALTER TABLE `gj_courses`
ADD `course_number` VARCHAR(100);


UPDATE `gj_courses_db`
SET `recording_enable` = TRUE
WHERE `meet_id` = 'osr-ninh-auo';


UPDATE `gj_courses`
SET `recording_enabled` = TRUE
WHERE `meet_id` IN ('swj-vahs-cqm', 'abc-def-ghi', 'xyz-uvw-rst');

```

```sql
CREATE DATABASE `gj_courses_db`;
USE `gj_courses_db`;
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
DROP TABLE `gj_accounts`;
DESCRIBE `gj_courses`;
INSERT INTO `gj_courses` VALUES('osr-ninh-auo', 'GJ 取得 Google Meet API', 'https://meet.google.com/osr-ninh-auo', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-23 17:30:00', '2024-09-23 18:00:00', TRUE, 'https://drive.google.com/file/d/1XUtdfsnBBUhnnLzKkGXdswe934xvfJ_7/view?usp=drive_link');
INSERT INTO `gj_courses` VALUES('ber-dpzn-ddx', 'GJ API Test 測試-2', 'https://meet.google.com/ber-dpzn-ddx', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-24 11:10:00', '2024-09-24 11:50:00', FALSE, NULL);
INSERT INTO `gj_courses` VALUES('hax-xdiz-wkc', 'GJ API Test 0924下午測試', 'https://meet.google.com/hax-xdiz-wkc', 'gjun_awf@pcschool.tv', 'Awf23881275', '2024-09-24 13:25:00', '2024-09-24 14:55:00', TRUE, 'https://drive.google.com/file/d/1c63pwYHhQQFfHqvTWqnzomm288C8kLjx/view');
SELECT * FROM `gj_courses`;

DELETE FROM `gj_courses`
WHERE `meet_id` = 'hax-xdiz-wkc';
```

**Left join 語法**
在 MySQL 中，LEFT JOIN 是一種連接方式，用來從左表中返回所有的記錄，即使在右表中沒有對應的匹配記錄。如果右表沒有匹配的記錄，則右表的相關欄位將返回 NULL。
table1 是左表，table2 是右表。
LEFT JOIN 返回左表中的所有記錄，並將右表中符合條件的記錄連接起來。如果右表中沒有匹配的記錄，則相應的欄位為 NULL。

```sql
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;
```

**Left join 實例**

```sql
SELECT students.name, courses.course_name
FROM students
LEFT JOIN courses
ON students.student_id = courses.student_id;
```

**刪除 table 裡面的 column**

```sql
ALTER TABLE table_name
DROP COLUMN column_name;

```

**刪除 table 裡面的 column 的實例**
從 gj_courses 的 table 刪除 gj_password 這個 column

```sql
ALTER TABLE `gj_courses`
DROP COLUMN `gj_password`;
```

**在 gj_accounts 表中新增一個名為 in_use 的欄位**
增加預設值為 0 和不允許 NULL

```sql
ALTER TABLE `gj_accounts`
ADD `in_use` INT NOT NULL DEFAULT 0;
```

**在 gj_courses 表中新增一個名為 forbidden_anyone_join 的布林值欄位**

```sql
ALTER TABLE `gj_courses`
ADD `forbidden_anyone_join` BOOLEAN;
```

**在 gj_ccounts 新增多筆數值的方式**

```sql
INSERT INTO `gj_accounts` (gj_account, gj_password, in_use)
VALUES ('GJ-test-01@pcschool.tv', 'GJ-test-01-1009', 0), ('GJ-test-02@pcschool.tv', 'GJ-test-02-1009', 0), ('GJ-en-01@pcschool.tv', 'GJ-en-01-1009', 0), ('GJ-en-02@pcschool.tv', 'GJ-en-02-1009', 0), ('GJ-jp-01@pcschool.tv', 'GJ-jp-01-1009', 0), ('GJ-jp-02@pcschool.tv', 'GJ-jp-02-1009', 0), ('GJ-germany-01@pcschool.tv', 'GJ-germany-01-1009', 0), ('GJ-germany-02@pcschool.tv', 'GJ-germany-02-1009', 0);
```

**修改 mysql 密碼**

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'GJ_db_test_2024';
```

**假設想根據 gj_account 欄位的值修改多個不同的 gj_password 和 in_use 狀態，你可以這樣做：**

```sql
UPDATE gj_accounts
SET
    gj_password = CASE
        WHEN gj_account = 'GJ-test-01@pcschool.tv' THEN 'new_password_1'
        WHEN gj_account = 'GJ-test-02@pcschool.tv' THEN 'new_password_2'
        ELSE gj_password  -- 不符合條件的行保持原值
    END,
    in_use = CASE
        WHEN gj_account = 'GJ-test-01@pcschool.tv' THEN 1
        WHEN gj_account = 'GJ-test-02@pcschool.tv' THEN 0
        ELSE in_use  -- 不符合條件的行保持原值
    END
WHERE gj_account IN ('GJ-test-01@pcschool.tv', 'GJ-test-02@pcschool.tv');
```
