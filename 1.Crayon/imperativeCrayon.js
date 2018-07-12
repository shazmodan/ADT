const {addExclamation, capitalize, log} = require('./utils')

const Crayon = require('./crayon')

const crayon = new Crayon()
crayon.setColor('green')

log(crayon.getColor())

const prettifyColor = color => {
	if (color !== null) {
		const exclamationedColor = addExclamation(color)
		const capitalizedExclamationedColor = capitalize(exclamationedColor)
		return capitalizedExclamationedColor
	}
}

const prettyColor = prettifyColor(crayon.getColor())
log(prettyColor)