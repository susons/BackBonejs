// WebsiteModel = Backbone.Model.extend({
//   defaults: {
//     name: 'an unknown website',
//     barcode: -1
//   },
//   initialize: function() {

//   }
// });

// $(document).ready(function() {
//   var page1 = new WebsiteModel();
//   // var page1 = new WebsiteModel({ name: "test123", barcode: 1 });
//   // page1.set({ name: 'not a test 123' });
//   // page1.set({ barcode: 78 });
//   alert('page 1 title is ' + page1.get('name') + 'and barcode is ' + page1.get('barcode'));
// });

// SandwitchModel = Backbone.Model.extend({
//   defaults: {
//     bread: 'wheat',
//   },
//   initialize: function() {
//     this.bindEvents();
//   },
//   bindEvents: function(){
//     this.on("change:bread", function(model) {
//       var mynewbread = model.get('bread');
//       alert('the bread changed to ' + mynewbread)
//     })
//   }
// });

// $(document).ready(function() {
//   var sandwitch = new SandwitchModel();
//   sandwitch.set({ bread: "whole grain"});
//   sandwitch.set({ bread: "random bread"});
// });

// Todo: 7

// TheWiew = Backbone.View.extend({
//   defaults: {

//   },
//   initialize: function() {
//     console.log(this.el);
//     console.log(this.$el);
//     this.$el.append("test12345");
//     const test1 = document.createElement('div');
//     const test = document.createTextNode('div');
//     test1.appendChild(test)
//     this.el.appendChild(test1)

//   }
// });

// $(document).ready(function() {
//   var aView = new TheWiew({el: $('#unique')});
// });

// el // references dom object
// $el // it is a jquerry object, references dom object

// Todo: 8

// TheWiew = Backbone.View.extend({
//   tagName: 'span', // 'div, span, p'
//   className: 'test',
//   id: 'testsss',
//   defaults: {

//   },
//   initialize: function() {
//     console.log(this.el);
//     console.log(this.$el);
//     $('#unique').append(this.el);
//   }
// });

// $(document).ready(function() {
//   var aView = new TheWiew();
// });

// Todo: 9

// TheWiew = Backbone.View.extend({
//     defaults: {

//     },
//     initialize: function() {
//       this.render();
//     },
//     render:  function() {
//       var template = _.template($('#template').html(), {});
//       this.$el.html(template);
//     },
//     events: {
//       "click .hello": "clicked",
//       "mouseover .hello": "mousedOver",
//     },
//     clicked: function() {
//       alert('u clicked it');
//     },
//     mousedOver: function() {
//       alert('moused over');
//     }
//   });

//   $(document).ready(function() {
//     var aView = new TheWiew({ el: $("#unique") });
//   });

  // StudentModel = Backbone.Model.extend({
  //   default: {
  //     name: 'unknown',
  //   },
  // });

  // StudentCollection = Backbone.Collection.extend({
  //   model: StudentModel,
  //   initialize: function() {

  //   },
  // });

  // $(document).ready(function() {
  //   var jony = new StudentModel({ name: "Johny", id: 0 });
  //   var vicky = new StudentModel({ name: "Vickey", id: 1 });
  //   var lola = new StudentModel({ name: "Lola", id: 2 });
  //   var alice = new StudentModel({ name: "Alice", id: 3 });
  //   var class_1 = new StudentCollection([jony, vicky]);
  //   displayCollectionContents('Two elements: ', class_1);
  //   var pepe = new StudentModel({ name: "Pepe", id: 2 });
  //   class_1.add(pepe);
  //   class_1.remove(vicky);
  //   displayCollectionContents('Two elements: ', class_1);
  //   class_1.add([lola, alice, vicky].sort((a, b) => {
  //     if (a.id > b.id) return -1;
  //     if (a.id < b.id) return 1;
  //     return 0;
  //   }));
  //   displayCollectionContents('Four elements: ', class_1);
  // });

  // $(document).ready(function() {
  //   var jony = new StudentModel({ name: "Johny", id: 0 });
  //   var vicky = new StudentModel({ name: "Vickey", id: 1 });
  //   var student_group = new StudentCollection([jony, vicky]);
  //   let student = student_group.get(0);
  //   student.set({name: 'John vick'});
  //   displayCollectionContents('Four elements: ', student_group);
  //   jony.set({name: 'johny'});
  //   displayCollectionContents('Four elements: ', student_group);
  // });

  // function displayCollectionContents(string, collection) {
  //   console.log(string + ' ' + JSON.stringify(collection.toJSON()));
  // }

  // pepe - student
  // steve - student
  // macaroni - student


  StudentModel = Backbone.Model.extend({
    default: {
      name: 'unknown',
    },
  });

  StudentCollection = Backbone.Collection.extend({
    model: StudentModel,
    initialize: function() {
      this.bindEvents();
    },
    bindEvents: function() {
      this.on("change:name", function(model) {
        alert('hey the name changed to ' + model.get("name"));
      });
      this.on("add", function(model) {
        alert('hey, added name ' + model.get("name"));
      });
      this.on("remove", function(model) {
        alert('hey, removed a student ' + model.get("name"));
      });
    },
  });


  $(document).ready(function() {
    var jony = new StudentModel({ name: "Johny", id: 0 });
    var vicky = new StudentModel({ name: "Vickey", id: 1 });
    var student_group = new StudentCollection([jony, vicky]);
    displayCollectionContents('Four elements: ', student_group);
    student_group.remove(vicky);
    student_group.add(vicky);
    jony.set({name: 'sandwitch'})
  });

  function displayCollectionContents(string, collection) {
    console.log(string + ' ' + JSON.stringify(collection.toJSON()));
  }