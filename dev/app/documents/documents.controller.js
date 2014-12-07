angular
  .module('documents',['stories'])
  .controller('documentsController',documentsController);

documentsController.$inject = ['$scope','storiesFactory'];

function documentsController($scope,storiesFactory){
  $scope.stories = storiesFactory.stories;
  $scope.displayedDoc;
  $scope.$watchCollection('stories',showDocument,true);
  
  function showDocument(oldValue,newValue){
    if (newValue){
      $scope.displayedDoc = newValue;
    }
  }

}

