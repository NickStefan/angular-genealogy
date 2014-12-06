angular
  .module('stories',[])
  .controller('storiesController',storiesController);

storiesController.$inject = ['$scope'];

function storiesController($scope){
  $scope.stories = [
    [{'text':'link1'},{'text':'link2'}],
    [{'text':'link3'},{'text':'link4'}],
  ]
  $scope.linkedDoc = linkedDoc;
};

function linkedDoc(storyIndex,linkIndex){
  console.log(storyIndex,"storyIndex")
  console.log(linkIndex,"linkIndex")
};
