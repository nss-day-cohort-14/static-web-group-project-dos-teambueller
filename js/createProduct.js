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
							'Dream',
							'spacey.jpg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Wonder',
							'spacey.jpg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Freedom',
							'spacey.jpg',
							[1000, 750, 500],
							'Asia',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Dream',
							'spacey.jpg',
							[1500, 1000, 750],
							'Australia',
							14,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Wonder',
							'spacey.jpg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Freedom',
							'spacey.jpg',
							[1000, 750, 500],
							'Caribbean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Ipsum Lorem',
							'spacey.jpg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Aqua-Haulic',
							'spacey.jpg',
							[1000, 750, 500],
							'Baltic',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Codfather',
							'spacey.jpg',
							[1000, 750, 500],
							'Mediterranean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));