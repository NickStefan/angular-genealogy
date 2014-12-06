(function(){
  'use strict';
  angular
    .module('app',[
      'ui.router'
    ])
    .config(function($stateProvider){
      $stateProvider
        .state('index',{
          url: "",
          views: {
            "storiesView": {
              templateUrl: "app/stories/stories.html"
            },
            "documentsView": {
              templateUrl: "app/documents/documents.html"
            }
          }
        });
    });
})();