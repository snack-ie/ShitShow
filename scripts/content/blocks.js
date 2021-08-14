let blocks = [
  "payload-launcher",
  "box",
  "unit-reciever",
  "unit-caller"
  ]

for (var i = 0; i < blocks.length; i++) {
  require('content/blocks/' + blocks[i])
}