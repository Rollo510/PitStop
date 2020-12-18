# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "kevin")
Trip.create(name: "Touring the South")
Stop.create(name: "Atlanta, GA", position: '{lat: 33.727317797736106, lng: -84.45557912528147}', review: "It was just ok.", user_id: 1, trip_id: 1)