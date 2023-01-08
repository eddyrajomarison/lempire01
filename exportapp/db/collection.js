import { Mongo } from 'meteor/mongo';
export const Exports = new Mongo.Collection('exports');

if(Meteor.isServer) {

  const links = [
    "https://www.lempire.com/",
    "https://www.lemlist.com/",
    "https://www.lemverse.com/",
    "https://www.lemstash.com/"
  ]

  Meteor.publish('exports',  function() {
    return Exports.find();
  });
  
  function ProgressSimulator(Id) {
    var progress = 0;
    var intervalId = Meteor.setInterval(function(){
      progress += 5;
      Exports.update(Id, { $set: { progress: progress } });
      if (progress == 100) {
        Meteor.clearInterval(intervalId);
        const randomLink = links[Math.floor(Math.random() * 4)];
        Exports.update(Id, { $set: { link: randomLink } });
      }
    }, 1000);
  }

  Meteor.methods({
    'exports.insert'() {
      Exports.insert({
        progress: 0, 
        link: null,
      }, function(err, Id){ 
        if (!err) {
          ProgressSimulator(Id);
        }
      });
    },
  })
}