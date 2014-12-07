angular
  .module('stories')
  .factory('storiesFactory',storiesFactory);

function storiesFactory(){
  var service = {
    stories: loremIpsum()
  };
  return service;
  
  function loremIpsum(){
    return _.map(new Array(5),function(){
      return {
        viewing: false,
        links: _.map(new Array(10),function(v,k,c){
          return {
            viewingLink: false,
            text:_.map(new Array(10),function(){ 
              return Math.random().toString(36).slice(2);
            }).join(" ")
          };
        })
      };
    });
  }
}

