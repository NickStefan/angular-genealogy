(function(){
  'use strict';
  angular
    .module('app',[
      'stories',
      'documents',
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