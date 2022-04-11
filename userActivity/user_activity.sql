-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2022 at 06:07 PM
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
-- Table structure for table `user_activity`
--

CREATE TABLE `user_activity` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `activity` varchar(30) DEFAULT NULL,
  `start_time` varchar(30) DEFAULT NULL,
  `end_time` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_activity`
--

INSERT INTO `user_activity` (`id`, `user_id`, `activity`, `start_time`, `end_time`) VALUES
(1, 1, 'Sleeping', '2022-04-10T15:15:09.608Z', '2022-04-10T15:26:35.850Z'),
(3, 1, 'Sleeping', '2022-04-10T15:28:56.592Z', NULL),
(5, 1, 'Sleeping', '2022-04-10T15:30:06.489Z', NULL),
(6, 1, 'Sleeping', '2022-04-10T15:34:22.789Z', '2022-04-10T15:34:40.346Z'),
(7, 1, 'Reading', '2022-04-10T15:35:54.794Z', '2022-04-10T15:36:00.911Z'),
(8, 1, 'Sleeping', '2022-04-11T13:48:28.499Z', '2022-04-11T13:48:34.749Z'),
(9, 1, 'Sleeping', '2022-04-11T13:49:22.315Z', '2022-04-11T13:49:27.381Z'),
(10, 1, 'Sleeping', '2022-04-11T13:50:40.548Z', '2022-04-11T13:50:46.061Z'),
(11, 1, 'Sleeping', '2022-04-11T13:50:53.595Z', '2022-04-11T13:50:59.861Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_activity`
--
ALTER TABLE `user_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
