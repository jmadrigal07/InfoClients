INSERT INTO `cities` (`id`, `name`, `state_id`, `createdAt`, `updatedAt`) VALUES
(1,	'Jacksonville',	1,	'2019-10-01 00:13:28',	'2019-10-01 00:13:28'),
(2,	'Miami',	1,	'2019-10-01 00:13:43',	'2019-10-01 00:13:43'),
(3,	'Tampa',	1,	'2019-10-01 00:14:05',	'2019-10-01 00:14:05'),
(4,	'Nevada',	2,	'2019-10-01 00:16:30',	'2019-10-01 00:16:30'),
(5,	'Orange',	2,	'2019-10-01 00:16:43',	'2019-10-01 00:16:43');

INSERT INTO `countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'USA',	'2019-10-01 00:12:36',	'2019-10-01 00:12:36');

INSERT INTO `salesRepresentatives` (`id`, `name`, `email`, `createdAt`, `updatedAt`) VALUES
(1,	'Jorge Madrigal',	'sales1@gmail.com',	'2019-10-01 00:17:10',	'2019-10-01 00:17:10'),
(2,	'Jose Madrigal',	'sales2@gmail.com',	'2019-10-01 00:17:40',	'2019-10-01 00:17:40');


INSERT INTO `states` (`id`, `name`, `country_id`, `createdAt`, `updatedAt`) VALUES
(1,	'Florida',	1,	'2019-10-01 00:13:00',	'2019-10-01 00:13:00'),
(2,	'California',	1,	'2019-10-01 00:15:50',	'2019-10-01 00:15:50');
