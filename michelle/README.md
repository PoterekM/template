`$ apm install react`
`$npm init`
create .gitignore
`npm install react@15.5.4 react-dom@15.5.4 --save `
`npm install webpack@2.6.0 --save-dev`
`npm install webpack@2.6.0 -g`

```
michelle/webpack.config.js
onst webpack = require('webpack');
const { resolve } = require('path');


module.exports = {

  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }

};
```
`npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev`
