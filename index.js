let superviews = require('superviews.js')
let MagicString = require( 'magic-string' )
let createFilter = require('rollup-pluginutils').createFilter

module.exports = function(options = {}){
  let filter = createFilter( options.include, options.exclude )
  return {
    transform(code, id){
      if ( !filter( id ) ) return null

      let s = new MagicString( code )
      let out = superviews(code, options.name || 'render', options.argstr || 'ctrl', options.mode || 'es6')
      // let out = jsx.fromString(code, options)
      s.overwrite( 0, code.length, out.toString() )

      return  {
        code: s.toString(),
        map: s.generateMap({ hires: true })
      }
    }
  }
}
