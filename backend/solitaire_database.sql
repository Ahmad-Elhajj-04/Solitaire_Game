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

ALTER TABLE `solitaire_database`
  ADD PRIMARY KEY (`Id`);
ALTER TABLE `solitaire_database`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
