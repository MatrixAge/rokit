'use strict'

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

require('../config/env')

const webpack = require('webpack')
const config = require('../config/lib_index_webpack.config')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')

function build (previousFileSizes){
	console.log('building components...')

	const compiler = webpack(config)

	return new Promise((resolve, reject) => {
		compiler.run((err, stats) => {
			let messages

			if (err) {
				if (!err.message) {
					return reject(err)
				}
				messages = formatWebpackMessages({
					errors: [ err.message ],
					warnings: []
				})
			}
			else {
				messages = formatWebpackMessages(stats.toJson({ all: false, warnings: true, errors: true }))
			}

			if (messages.errors.length) {
				if (messages.errors.length > 1) {
					messages.errors.length = 1
				}
				return reject(new Error(messages.errors.join('\n\n')))
			}

			console.log('components building success!')

			return resolve({
				stats,
				previousFileSizes,
				warnings: messages.warnings
			})
		})
	})
}

build()
