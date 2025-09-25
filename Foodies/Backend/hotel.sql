CREATE DATABASE IF NOT EXISTS `hotel`;
USE `hotel`;

-- Table: food_items
DROP TABLE IF EXISTS `food_items`;
CREATE TABLE `food_items` (
  `item_id` INT NOT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `price` DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
);

INSERT INTO `food_items` VALUES 
(1, 'ratatouille', 800),
(2, 'Lobster Bisque', 560),
(3, 'Crêpes', 830),
(4, 'Palmiers', 499),
(5, 'Upma', 150),
(6, 'Biryani', 750),
(7, 'Gulab Jamun', 1000),
(8, 'Palak Paneer', 560),
(9, 'Onigiri', 700),
(10, 'Tonkatsu', 700),
(11, 'Ramen', 500),
(12, 'Udon', 580);

-- Table: order_tracking
DROP TABLE IF EXISTS `order_tracking`;
CREATE TABLE `order_tracking` (
  `order_id` INT NOT NULL,
  `status` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
);

INSERT INTO `order_tracking` VALUES 
(40, 'delivered'),
(41, 'in transit');

-- Table: orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  `quantity` INT DEFAULT NULL,
  `total_price` DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_id`, `item_id`),
  KEY `orders_ibfk_1` (`item_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `food_items` (`item_id`)
);

INSERT INTO `orders` VALUES 
(40, 1, 2, 1600.00),   -- 2 × 800
(40, 3, 1, 830.00),    -- 1 × 830
(41, 4, 3, 1497.00),   -- 3 × 499
(41, 6, 2, 1500.00),   -- 2 × 750
(41, 9, 4, 2800.00);   -- 4 × 700

-- Function: get_price_for_item
DELIMITER ;;
CREATE FUNCTION `get_price_for_item`(p_item_name VARCHAR(255)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_price DECIMAL(10, 2);
    IF (SELECT COUNT(*) FROM food_items WHERE name = p_item_name) > 0 THEN
        SELECT price INTO v_price FROM food_items WHERE name = p_item_name;
        RETURN v_price;
    ELSE
        RETURN -1;
    END IF;
END;;
DELIMITER ;

-- Function: get_total_order_price
DELIMITER ;;
CREATE FUNCTION `get_total_order_price`(p_order_id INT) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_total_price DECIMAL(10, 2);
    IF (SELECT COUNT(*) FROM orders WHERE order_id = p_order_id) > 0 THEN
        SELECT SUM(total_price) INTO v_total_price FROM orders WHERE order_id = p_order_id;
        RETURN v_total_price;
    ELSE
        RETURN -1;
    END IF;
END;;
DELIMITER ;

-- Procedure: insert_order_item
DELIMITER ;;
CREATE PROCEDURE `insert_order_item`(
  IN p_food_item VARCHAR(255),
  IN p_quantity INT,
  IN p_order_id INT
)
BEGIN
    DECLARE v_item_id INT;
    DECLARE v_price DECIMAL(10, 2);
    DECLARE v_total_price DECIMAL(10, 2);

    SET v_item_id = (SELECT item_id FROM food_items WHERE name = p_food_item);
    SET v_price = (SELECT get_price_for_item(p_food_item));
    SET v_total_price = v_price * p_quantity;

    INSERT INTO orders (order_id, item_id, quantity, total_price)
    VALUES (p_order_id, v_item_id, p_quantity, v_total_price);
END;;
DELIMITER ;
