-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2025 at 05:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(100) NOT NULL,
  `name` varchar(56) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`) VALUES
(1, 'Ice Cream Flavors'),
(2, 'Toppings & Add-ons'),
(3, 'Available Scoop Counts'),
(4, 'Ice Cream Holder'),
(5, 'More Snacks & Treats'),
(6, 'Drinks to Chill With');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(100) NOT NULL,
  `categoryID` int(50) NOT NULL,
  `name` varchar(40) NOT NULL,
  `acronym` varchar(10) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `acronym`, `image`, `price`) VALUES
(1, 1, 'Vanilla', 'VAN', 'vanilla.png', 50),
(2, 1, 'Chocolate', 'CHO', 'choco.png', 50),
(3, 1, 'Strawberry', 'STR', 'strawberry.png', 55),
(4, 1, 'Matcha', 'MAT', 'matcha.png', 60),
(5, 1, 'Cookies & Cream', 'CNC', 'cnc.png', 55),
(6, 1, 'Mango', 'MNG', 'mango.png', 50),
(7, 1, 'Rocky Road', 'RRD', 'rockyroad.png', 60),
(8, 1, 'Ube', 'UBE', 'ube.png', 60),
(9, 1, 'Bubblegum', 'BBG', 'bubblegum.png', 55),
(10, 2, 'Chocolate Syrup', 'CHS', 'chocosyrup.png', 10),
(11, 2, 'Caramel Syrup', 'CRS', 'caramelsyrup.png', 10),
(12, 2, 'Rainbow Sprinkles', 'RSP', 'springkles.png', 10),
(13, 2, 'Crushed Oreos', 'ORE', 'oreo.png', 15),
(14, 2, 'Marshmallow', 'MSH', 'marshmallow.png', 10),
(15, 2, 'Stick-O', 'STO', 'stick-o.png', 10),
(16, 2, 'Banana Slices', 'BNS', 'banana.png', 10),
(17, 2, 'Whipped Cream', 'WHC', 'whippedcream.png', 10),
(18, 2, 'Chopped Nuts', 'NUT', 'nut.png', 15),
(19, 3, 'Single Scoop', 'SSP', 'single.png', 10),
(20, 3, 'Double Scoop', 'DSP', 'double.png', 20),
(21, 3, 'Triple Scoop', 'TSP', 'triple.png', 30),
(22, 3, 'Mega Scoop', 'MSP', 'mega.png', 40),
(23, 3, 'Your Own Scoop', 'BSP', 'own.png', 50),
(24, 4, 'Waffle Cone', 'WFL', 'waffle.png', 10),
(25, 4, 'Bread (Sandwich)', 'BRD', 'bread.png', 10),
(26, 4, 'CUP', 'CUP', 'cup.png', 10),
(27, 4, 'Wafer Cone', 'WAF', 'wafer.png', 5),
(28, 4, 'Pint (Takeout Tub)', 'PNT', 'pint.png', 20),
(29, 4, 'Quart (Big Tub)', 'QRT', 'quart.png', 30),
(30, 5, 'Chocolate Cookie', 'CCC', 'chococookie.png', 25),
(31, 5, 'Double Choco Cookie', 'DCC', 'dccookie.png', 30),
(32, 5, 'Brownies', 'BRW', 'brownies.png', 20),
(33, 5, 'Mini Donut (3 pcs)', 'MND', 'donut.png', 30),
(34, 5, 'Waffle Sticks', 'WFS', 'wafflesticks.png', 20),
(35, 6, 'Milkshake', 'MKL', 'milkshake.png', 60),
(36, 6, 'Iced Tea', 'ICT', 'icedtea.png', 30),
(37, 6, 'Milk Tea', 'MLT', 'milktea.png', 40),
(38, 6, 'Bottled Water', 'BTW', 'water.png', 20),
(39, 6, 'Softdrink', 'SDC', 'softdrink.png', 30),
(40, 6, 'Ice Cream Float', 'FLT', 'float.png', 65),
(41, 6, 'Ice Coffee', 'ICF', 'icedcoffee.png', 50),
(42, 6, 'Choco Frappe', 'CFP', 'frappe.png', 60);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
