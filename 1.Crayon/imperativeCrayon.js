const Crayon = require('./crayon')

const initialColors = ['red', 'blue', 'white']

const crayon = new Crayon()
crayon.setColor('green')
const crayonColor = crayon.getColor()

console.log(`We have crayonColor: ${crayonColor} \n`)

const addExclamation = text => text + '!'

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

if (crayonColor !== null) {
	const allColors = initialColors.concat([crayonColor])

	for (var i = 0; i < allColors.length; i++) {
		const exclamationedColor = addExclamation(allColors[i])
		const capitalizedExclamationedColor = capitalize(exclamationedColor)
		allColors[i] = capitalizedExclamationedColor
	}

	console.log(allColors)
}