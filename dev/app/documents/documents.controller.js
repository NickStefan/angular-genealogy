angular
  .module('documents',['stories'])
  .controller('documentsController',documentsController);

documentsController.$inject = ['$scope','storiesFactory'];

function documentsController($scope,storiesFactory){
  $scope.stories = storiesFactory.stories;
  $scope.displayedDoc;
  $scope.$watch('stories',showDocument,true);
  
  function showDocument(oldValue,newValue){
    var earlyBreak = false;
    _.forEach($scope.stories,function(story){
      if (!earlyBreak){
        _.forEach(story.links,function(v,k,c){
          if (v.viewingLink){
            earlyBreak = true;
            $scope.displayedDoc = v.text;
            return false;
          }
        });
      } else {
        return false;
      }
    });
    if (!earlyBreak){
      $scope.displayedDoc = null;
    }
  }

}

