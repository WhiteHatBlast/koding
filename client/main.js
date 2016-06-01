import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {

  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.datawooo = new ReactiveVar();
  this.testJelaaaa = new ReactiveVar();
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  datawooo() {
    return Template.instance().datawooo.get();
  },
  testJelaaaa() {
    return Template.instance().testJelaaaa.get();
  }
});

Template.hello.events({
  'click button'(event, instance) {

    Meteor.call('testJela', function(err, result){

      console.log(1);
      console.log(result);

      if(!err){

        console.log(result);

        instance.testJelaaaa.set(result);
      } else {

        console.log(err.message);

      }
    });

    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
