"use strict"

var fs = require('fs')

fs.open('db/imdb.db', 'wx', function (err, fd) {
  fs.close(fd, function (err) {
    // console.error("Ooopps, something happen! ", err)
  })
})
