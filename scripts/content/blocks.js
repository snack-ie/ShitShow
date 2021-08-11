let blocks = [
  "payload-launcher",
  "box"
  ]

for (var i = 0; i < blocks.length; i++) {
  require('content/blocks/' + blocks[i])
}