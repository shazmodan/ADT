const {Either} = require('monet')
const {addExclamation, capitalize, log} = require('./utils')
const Crayon = require('./crayon')

const crayon = new Crayon()
crayon.setColor('green')

log(crayon.getColor())

// eitherColor:: Any -> Either
const eitherColor = x => x != null ? Either.Right(x) : Either.Left('Color not set')

eitherColor(crayon.getColor())
	.map(addExclamation)
	.map(capitalize)
	.map(log)
	.cata(e => log(`Oh no, we failed! "${e}"`), color => `we have color ${color}`)