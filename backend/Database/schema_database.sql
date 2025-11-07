SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `solitaire_database` (
  `Id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `score` int(11) UNSIGNED NOT NULL,
  `duration` int(11) UNSIGNED NOT NULL,
  `submit` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `solitaire_database` (`Id`, `name`, `score`, `duration`, `submit`) VALUES
(1, 'messi', 10, 40, '2025-11-06 22:59:18'),
(2, 'neymar', 11, 31, '2025-11-06 22:59:18'),
(10, 'messi', 800, 40, '2025-11-06 23:04:31'),
(11, 'neymar', 500, 31, '2025-11-06 23:04:31'),
(14, 'messi', 800, 120, '2025-11-06 23:21:25'),
(26, 'najjar', 1000, 110, '2025-11-06 23:09:42'),
(33, 'said', 500, 130, '2025-11-06 23:07:08'),
(41, 'neymar', 500, 120, '2025-11-06 23:21:25'),
(77, 'rami', 800, 120, '2025-11-06 23:07:08'),
(97, 'kassem', 900, 120, '2025-11-06 23:09:42');

ALTER TABLE `solitaire_database`
  ADD PRIMARY KEY (`Id`);
ALTER TABLE `solitaire_database`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
COMMIT;
