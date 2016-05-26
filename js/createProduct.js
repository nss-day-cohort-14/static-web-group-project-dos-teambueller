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
							'Seas The Day',
							'carnival.jpg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'A Boat Time',
							'cruise.jpg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Eggs 2 Sea',
							'msc.jpg',
							[1000, 750, 500],
							'Asia',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Unsinkable',
							'oasis.jpg',
							[1500, 1000, 750],
							'Australia',
							14,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Unsinkable 2',
							'princess.jpeg',
							[1000, 750, 500],
							'Alaska',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Sea U L8R',
							'princess2.jpeg',
							[1000, 750, 500],
							'Caribbean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));
cruises.push(cruiseFactory(
							'Ipsum Lorem',
							'princess3.jpeg',
							[1000, 750, 500],
							'Bahamas',
							7,
							['Nassau', 'Castaway Cay', 'St. Thomas', 'St. Kitts']));
cruises.push(cruiseFactory(
							'Aqua-Haulic',
							'princess4.jpeg',
							[1000, 750, 500],
							'Baltic',
							7,
							['Skagway', 'Juneau', 'Glacier National Park', 'Victoria']));
cruises.push(cruiseFactory(
							'Codfather',
							'princess6.jpeg',
							[1000, 750, 500],
							'Mediterranean',
							7,
							['Cozumel', 'Grand Caymans', 'Montego Bay']));