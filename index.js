const nodeResolve = require('eslint-import-resolver-node').resolve
const path = require('path')

exports.interfaceVersion = 2

exports.resolve = (source, file, config) => {
  if (/^@/.test(source)) {
    return nodeResolve(
      path.relative(file, source.replace('@', config.root)).replace('../', './'),
      file,
      config
    )
  }

  return nodeResolve(source, file, config)
}
