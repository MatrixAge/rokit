const path = require('path')
const glob = require('glob')

console.log(path.join(__dirname, '../src/components/**/*.tsx'))

const getComponents = (path) => {
	const files = glob.sync(path)

	let entry = {}

	files.map((item) => {
		entry[item.substr(-15, 5)] = item
	})

	return entry
}

module.exports = [
	{
		entry: getComponents(path.resolve(__dirname, '../src/components/Image/index.tsx')),
		target: 'web',
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(css|less)$/,
					use: [
						{ loader: 'style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						{
							loader: 'less-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},
		output: {
			filename: '[name]/[name].js',
			path: path.resolve(__dirname, '../lib')
		}
	}
]
