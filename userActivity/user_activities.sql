-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2022 at 03:30 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `activity_record`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_activities`
--

CREATE TABLE `user_activities` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `activity` varchar(30) DEFAULT NULL,
  `cdate` varchar(30) DEFAULT NULL,
  `start_time` varchar(30) DEFAULT NULL,
  `end_time` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_activities`
--

INSERT INTO `user_activities` (`id`, `user_id`, `activity`, `cdate`, `start_time`, `end_time`) VALUES
(4, 1, 'Sleeping', '12 Apr 2022', '8:45 pm', '8:45 pm'),
(5, 1, 'Reading', '12 Apr 2022', '8:45 pm', '11:16 pm'),
(6, 1, 'Reading', '11 Apr 2022', '3:45 pm', '4:45 pm'),
(24, 1, 'Cooking', '12 Apr 2022', '11:41 pm', '11:44 pm'),
(25, 1, 'Sleeping', '12 Apr 2022', '11:48 pm', '11:48 pm'),
(26, 1, 'Sleeping', '13 Apr 2022', '12:13 pm', '12:14 pm'),
(27, 1, 'Sleeping', '13 Apr 2022', '12:23 pm', '12:23 pm'),
(28, 1, 'Sleeping', '13 Apr 2022', '12:23 pm', '12:23 pm'),
(38, 1, 'Sleeping', '13 Apr 2022', '12:41 pm', '12:41 pm'),
(39, 1, 'Sleeping', '13 Apr 2022', '12:52 pm', '12:52 pm'),
(40, 1, 'Sleeping', '13 Apr 2022', '2:58 pm', '3:00 pm'),
(41, 1, 'Walking', '13 Apr 2022', '3:28 pm', '3:28 pm'),
(42, 1, 'Working', '13 Apr 2022', '3:28 pm', '3:28 pm'),
(43, 1, 'Sleeping', '13 Apr 2022', '4:21 pm', '4:21 pm'),
(44, 1, 'Sleeping', '13 Apr 2022', '4:28 pm', '4:29 pm'),
(45, 1, 'Sleeping', '13 Apr 2022', '4:36 pm', '4:37 pm'),
(46, 1, 'Sleeping', '13 Apr 2022', '6:39 pm', '6:40 pm'),
(47, 1, 'Sleeping', '13 Apr 2022', '6:57 pm', '6:58 pm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_activities`
--
ALTER TABLE `user_activities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_activities`
--
ALTER TABLE `user_activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
