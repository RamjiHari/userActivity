-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2022 at 05:26 PM
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(9) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'ramesh', 'ramesh@gmail.com', 'goodluck');

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
(5, 1, 'Reading', '12 Apr 2022', '8:45 pm', '8:45 pm'),
(6, 1, 'Reading', '11 Apr 2022', '3:45 pm', '4:45 pm');

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
(11, 1, 'Sleeping', '2022-04-11T13:50:53.595Z', '2022-04-11T13:50:59.861Z'),
(12, 1, 'Sleeping', '2022-04-11T16:12:32.854Z', '2022-04-11T16:12:40.024Z'),
(13, 1, 'Sleeping', '2022-04-11T16:13:35.197Z', '2022-04-11T16:13:48.667Z'),
(14, 1, 'Walking', '2022-04-11T16:13:51.694Z', '2022-04-11T16:13:53.934Z'),
(15, 1, 'Sleeping', '2022-04-11T16:22:55.206Z', '2022-04-11T16:24:17.963Z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_activities`
--
ALTER TABLE `user_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_activities`
--
ALTER TABLE `user_activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_activity`
--
ALTER TABLE `user_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
