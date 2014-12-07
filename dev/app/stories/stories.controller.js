angular
  .module('stories',[])
  .controller('storiesController',storiesController);

storiesController.$inject = ['$scope','storiesFactory'];

function storiesController($scope,storiesFactory){
  
  $scope.stories = storiesFactory.stories;

  $scope.linkedDoc = linkedDoc;
  $scope.lastStoryI;
  $scope.lastLinkI;

  function linkedDoc(storyIndex,linkIndex){
    if ($scope.lastLinkI > -1){
      $scope.stories[$scope.lastStoryI].links[$scope.lastLinkI].viewingLink = false;
    }
    if ($scope.lastLinkI !== linkIndex){
      $scope.stories[storyIndex].links[linkIndex].viewingLink = true;
      $scope.lastStoryI = storyIndex;
      $scope.lastLinkI = linkIndex;
    } else {
      $scope.lastStoryI = -1;
      $scope.lastLinkI = -1;
    }
  }
}

  // actual future data structure:
  // [
  //   {
    //  viewing: false,
    //  links: [
    //     {'text':'link1','viewingStory':false},
    //     {'text':'link2','viewingStory':false},
    //   ]
    //  },
    // {
    //  viewing: false,
    //  links:
    //   [
    //     {'text':'link1','viewingLink':false},
    //     {'text':'link2','viewingLink':false},
    //   ]
    //  }
  // ]
