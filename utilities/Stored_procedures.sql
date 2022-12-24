-> Insert QUERY:

USE `fullstack`;
DROP procedure IF EXISTS `insert_data`;

DELIMITER $$
USE `fullstack`$$
CREATE PROCEDURE `insert_data` (
IN fname VARCHAR(45),
IN lname VARCHAR(45),
IN mob VARCHAR(11),
IN pass VARCHAR(100)
)
BEGIN
INSERT INTO user_details (first_name, last_name, mobile_num, password) VALUES (fname, lname, mob, pass);
END$$

DELIMITER ;


-> Select Query:

USE `fullstack`;
DROP procedure IF EXISTS `select_procedure`;

DELIMITER $$
USE `fullstack`$$
CREATE PROCEDURE `select_procedure` ()
BEGIN
select * from user_details;
END$$

DELIMITER ;

-> Update Query:

USE `fullstack`;
DROP procedure IF EXISTS `update_procedure`;

DELIMITER $$
USE `fullstack`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_procedure`(
IN fname VARCHAR(45),
IN lname VARCHAR(45),
IN mob VARCHAR(11),
IN id INT
)
BEGIN
UPDATE user_details SET first_name = fname, last_name = lname, mobile_num = mob WHERE user_id = id;
END$$

DELIMITER ;
;

-> Delete query:

USE `fullstack`;
DROP procedure IF EXISTS `delete_procedure`;

DELIMITER $$
USE `fullstack`$$
CREATE PROCEDURE `delete_procedure` (
IN id INT
)
BEGIN
DELETE FROM user_details WHERE user_id = id;
END$$

DELIMITER ;