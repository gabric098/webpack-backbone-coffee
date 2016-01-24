module.exports =
  class Person extends Backbone.Model
    @name = ''
    @surname = ''
    @age = 0

    initialize: (name, surname, age) ->
      @name = name
      @surname = surname
      @age = age