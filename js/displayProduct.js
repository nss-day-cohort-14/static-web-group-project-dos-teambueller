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
		console.log(this.templateImg);
	},
	stageClone: function(obj) {
		this.templateImg[0].src = `./images/${obj.path}`;
		this.templateDivs[0].textContent = obj.ship;
		this.templateDivs[2].textContent = obj.region;
		this.templateDivs[3].textContent = obj.nights;
		this.templateDivs[4].innerHTML = this.getPorts(obj.portsOfCall);
		this.templatePs[0].textContent = obj.price[0];
		this.templatePs[1].textContent = obj.price[1];
		this.templatePs[2].textContent = obj.price[2];
 	},
 	displayClone: function() {
 		var clone2 = document.importNode(this.template.content, true);
 		this.cruiseDisplayArea.appendChild(clone2);
 	},
 	getPricePoints: function(arg) {
 		var string = '';
 		for (var x = 0; x < arg.length; x++) {
 			string += `<p>${arg[x]}</p>`;
 		}
 		return string;
 	},
 	getPorts: function(portsOfCall) {
 		var string = '';
 		for (var x = 0; x < portsOfCall.length; x++) {
 			string += `<p>${portsOfCall[x]}</p>`;
 		}
 		return string;
 	}
};

displayProduct.init(cruises);

