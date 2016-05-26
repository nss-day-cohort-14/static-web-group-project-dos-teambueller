var cruises = [];

var cruiseFactory = function(ship, price, region, nights, portsOfCall) {

	var cruise = {};
	cruise.ship = ship;
	cruise.price = price;
	cruise.region = region;
	cruise.nights = nights;
	cruise.portsOfCall = portsOfCall;

	return cruise;
};

cruises.push(cruiseFactory(
							'Disney Dream',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Disney Wonder',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Carnival Freedom',
							[1000, 750, 500],
							'Caribbean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));