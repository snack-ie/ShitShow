let blocks = [
  "tdl"
  ]

for (var i = 0; i < blocks.length; i++) {
  require('content/blocks/' + blocks[i])
}