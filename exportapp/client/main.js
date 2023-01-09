import { Template } from 'meteor/templating';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.html';
import { Exports } from "../db/collection.js";


Template.body.events({
  'click .export-btn'(event, instance) {
    event.preventDefault();
    Meteor.call('exports.insert');
  },
});
 
Template.list.onCreated(function bodyOnCreated() {
   Meteor.subscribe('exports');
});

Template.list.helpers({
  exports() {
    return Exports.find().fetch();  
  },
  progressStyle(w) { return {
    style: `width: ${w}%;`
    }
  },
  getAnimated(w) { return w ==100 ? "success" : "progress-bar-animated progress-bar-striped ";},
});


