var cruises = [];

var cruiseFactory = function(ship, path, price, region, nights, portsOfCall) {

	var cruise = {};
	cruise.ship = ship;
	cruise.path = path;
	cruise.price = price;
	cruise.region = region;
	cruise.nights = nights;
	cruise.portsOfCall = portsOfCall;

	return cruise;
};

cruises.push(cruiseFactory(
							'Thom\'s Dream',
							'spacey.jpg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Thom\'s Wonder',
							'spacey.jpg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Thom\'s Freedom',
							'spacey.jpg',
							[1000, 750, 500],
							'Asia',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Thom\'s Dream',
							'spacey.jpg',
							[1500, 1000, 750],
							'Australia',
							14,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Thom\'s Wonder',
							'spacey.jpg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Thom\'s Freedom',
							'spacey.jpg',
							[1000, 750, 500],
							'Caribbean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Thom\'s Ipsum Lorem',
							'spacey.jpg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Thom\'s Aqua-Haulic',
							'spacey.jpg',
							[1000, 750, 500],
							'Baltic',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Thom\'s Codfather',
							'spacey.jpg',
							[1000, 750, 500],
							'Mediterranean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));