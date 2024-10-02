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
