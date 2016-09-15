"use strict"

let model = require("./models/index")

// 
// model.Artist.create({ first_name: 'TESTDate', last_name: 'Email3', updatedAt: new Date(),createdAt:new Date(),dob: new Date('December 20, 2000 23:00:00')}).then(function(task) {
//   // you can now access the newly created task via the variable task
// })
//
//
// model.Artist.create({ first_name: 'Ivan', last_name: 'Gerard', updatedAt: new Date(),createdAt:new Date(),dob: new Date('December 20, 2000 23:00:00')}).then(function(task) {
//   // you can now access the newly created task via the variable task
// })
//
//
// model.Artist.create({ first_name: 'Gerardus', last_name: 'Roly', updatedAt: new Date(),createdAt:new Date(),dob: new Date('December 20, 2000 23:00:00')}).then(function(task) {
//   // you can now access the newly created task via the variable task
// })
//
//
// model.Artist.create({ first_name: 'Rani', last_name: 'Jana', updatedAt: new Date(),createdAt:new Date(),dob: new Date('December 20, 2000 23:00:00')}).then(function(task) {
//   // you can now access the newly created task via the variable task
// })


//
// model.Artist.findAll().then(function(artist) {
//   for (var i = 0; i < artist.length; i++) {
//     console.log(`first_name : ${artist[i].first_name} || last_name: ${artist[i].last_name}|| dob : ${artist[i].dob}`)
//
//   }
//
// })
//

model.Artist.findAll().then(function(artist) {
  console.log(artist)
})
