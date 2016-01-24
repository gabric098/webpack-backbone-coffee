Person = require './person.coffee'

module.exports =
  class PersonCollection extends Backbone.Collection

    @model: Person
