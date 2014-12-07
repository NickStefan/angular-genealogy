angular
  .module('documents',['stories'])
  .controller('documentsController',documentsController);

documentsController.$inject = ['$scope','storiesFactory'];

function documentsController($scope,storiesFactory){
  $scope.stories = storiesFactory.stories;
  $scope.displayedDoc = undefined;
  $scope.$watch('stories',showDocument,true);
  
  function showDocument(oldValue,newValue){
    console.log("hiiii")
    if (newValue !== oldValue){
      _.forEach(newValue,function(story){
        _.forEach(story.links,function(v,k,c){
          if (v.viewingLink){
            console.log(k)
            $scope.displayedDoc = v.text;
            return false;
          }
        });
      });
    }
  }

}

