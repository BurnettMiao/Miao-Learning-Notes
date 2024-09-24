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
```
