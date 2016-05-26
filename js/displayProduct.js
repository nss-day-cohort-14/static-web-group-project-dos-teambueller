var displayProduct = {
	init: function() {
		this.cacheDom();
		this.captureTemplate();
		this.stageClone();
		this.displayClone();
	},
	cacheDom: function() {
		this.cruiseDisplayArea = document.getElementById('cruiseDisplayArea');
		console.log(this.cruiseDisplayArea);
	},
	captureTemplate: function() {
		this.template = document.getElementById('cruiseTemplate');
		this.templateDivs = this.template.content.querySelectorAll('div');
		console.log(this.template);
		console.log(this.templateDivs);
	},
	stageClone: function() {
		this.templateDivs[0].textContent = 'Disney Dream';
		this.templateDivs[1].textContent = '$1000';
		console.log(this.templateDivs);
 	},
 	displayClone: function() {
 		var clone2 = document.importNode(this.template.content, true)
 		this.cruiseDisplayArea.appendChild(clone2);
 	}
};

displayProduct.init();

