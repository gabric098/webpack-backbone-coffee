PersonCollection = require './person_collection.coffee'

module.exports =
  class PersonView extends Backbone.View
    el: $ 'body'

    initialize: ->
      @people = new PersonCollection()
      @people.add([
        {
        name: 'John'
        surname: 'Doe'
        age: 37
        }
        {
        name: 'Mary'
        surname: 'Rose'
        age: 25
        }
      ])
      @render()

    render: ->
      content = '<ul>'
      for person in @people.models
        content += '<li>' + person.get('name') + ' ' + person.get('surname') + ' age: ' + person.get('age') + '</li>'
      content += '</ul>'
      $(@el).append content