var displayProduct = {
	init: function(cruises) {
		this.cacheDom();
		this.captureTemplate();
		for (var x = 0; x < cruises.length; x++) {
			this.stageClone(cruises[x]);
			this.displayClone(cruises[x]);
		}
	},
	cacheDom: function() {
		this.cruiseDisplayArea = document.getElementById('cruiseDisplayArea');
	},
	captureTemplate: function() {
		this.template = document.getElementById('cruiseTemplate');
		this.templateDivs = this.template.content.querySelectorAll('div');
		this.templateImg = this.template.content.querySelectorAll('img');
		this.templatePs = this.template.content.querySelectorAll('p');
		console.log(this.templatePs);
		console.log(this.templateImg);
	},
	stageClone: function(obj) {
		this.templateImg[0].src = `./images/ships/${obj.path}`;
		this.templateDivs[0].textContent = `Thom's ${obj.ship}`;
		this.templateDivs[1].textContent = `Prices`;
		this.templateDivs[2].textContent = `Region: ${obj.region}`;
		this.templateDivs[3].textContent = `${obj.nights} number of nights.`;
		this.templateDivs[4].innerHTML = `<p>Ports of call: ${this.getPorts(obj.portsOfCall)}`;
		this.templatePs[0].textContent = `Balcony $${obj.price[0]}`;
		this.templatePs[1].textContent = `Oceanview $${obj.price[1]}`;
		this.templatePs[2].textContent = `Inside $${obj.price[2]}`;
		console.log(this.templatePs[0].textContent);
 	},
 	displayClone: function() {
 		var clone2 = document.importNode(this.template.content, true);
 		// console.log(this.template.content);
 		console.log(clone2);
 		this.cruiseDisplayArea.appendChild(clone2);
 	},
 	getPricePoints: function(arg) {
 		var string = '<p>';
 		for (var x = 0; x < arg.length; x++) {
 			string += `${arg[x]},`;
 		}
 		return string + '</p>';
 	},
 	getPorts: function(portsOfCall) {
 		var string = '';
 		var comma = ', ';
 		for (var x = 0; x < portsOfCall.length; x++) {
 			if (x===portsOfCall.length-1) {comma='.'};
 			string += `${portsOfCall[x]}${comma}`;
 		}
 		return string + '</p>';
 	}
};

displayProduct.init(cruises);

