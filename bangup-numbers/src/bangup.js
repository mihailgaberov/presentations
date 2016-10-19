class Bangup {
	constructor(container, fromSum, toSum) {
		this.container = container;
		this.fromSum = Math.round(fromSum);
		this.toSum = Math.round(toSum);

		// http://paulirish.com/2011/requestanimationframe-for-smart-animating
		// shim layer with setTimeout fallback
		window.requestAnimFrame = (function () {
			return  window.requestAnimationFrame       ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				function (callback){
					window.setTimeout(callback, 1000 / 60);
				};
		})();

		this.pileNumbers();
	}


	pileNumbers() {
		if((this.fromSum + 1) > this.toSum) {
			this.fromSum = this.toSum;
			// stop the piling
			return;
		} else {
			this.fromSum += 1;
		}

		this.container.innerHTML = this.fromSum;

		console.log('>>> res = ', this.fromSum);

		window.requestAnimationFrame(this.pileNumbers.bind(this));
	}
}

let bangup = new Bangup(document.querySelector('#prize'), 5, 55);