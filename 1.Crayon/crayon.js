const readline = require('readline');

class Crayon {
	constructor() {
		this._color = null
	}

	getColor() {
		return this._color
	}

	setColor(color) {
		this._color = color
	}
}

module.exports = Crayon