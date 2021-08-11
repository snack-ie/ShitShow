let units = [
  "sentry"
  ]

for (var i = 0; i < units.length; i++) {
  require('content/units/' + units[i])
}