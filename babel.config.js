module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '87',
          firefox: '82',
          safari: '14',
          node: 'current'
        }
      }
    ]
  ]
}
