const {Maybe} = require('monet')
const {addExclamation, capitalize, log} = require('./utils')
const Crayon = require('./crayon')

log('(Maybe)')

const crayon = new Crayon()
crayon.setColor('green')

log(crayon.getColor())

Maybe.fromNull(crayon.getColor())
	.map(addExclamation)
	.map(capitalize)
	.map(log)

log('')
log('---------')
log('')