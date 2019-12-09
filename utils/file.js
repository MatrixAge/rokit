'use strict'

const fs = require('fs')

const delDir = (path) => {
	let files = []

	if (fs.existsSync(path)) {
		files = fs.readdirSync(path)

		files.forEach((file) => {
			let curPath = path + '/' + file

			if (fs.statSync(curPath).isDirectory()) {
				delDir(curPath)
			}
			else {
				fs.unlinkSync(curPath)
			}
		})

		fs.rmdirSync(path)
	}
}

module.exports = {
	delDir: delDir
}
