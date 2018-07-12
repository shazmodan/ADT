const addExclamation = text => text + '!'

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

const log = text => {
	if (text != null) {
		console.log(text)
	}
	
	return text
}

module.exports = {
	addExclamation,
	capitalize,
	log,
}