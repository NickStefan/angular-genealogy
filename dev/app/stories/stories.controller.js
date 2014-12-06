angular
  .module('stories',[])
  .controller('storiesController',storiesController);

storiesController.$inject = ['$scope'];

function storiesController($scope){
  $scope.stories = _.map(new Array(5),function(){
    return {
      viewing: false,
      links: _.map(new Array(10),function(v,k,c){
        return {
          viewing: false,
          text:_.map(new Array(10),function(){ 
            return Math.random().toString(36).slice(2);
          }).join(" ")
        };
      })
    };
  });

  // actual future data structure:
  // [
  //   {
    //  viewing: false,
    //  links: [
    //     {'text':'link1','viewing':false},
    //     {'text':'link2','viewing':false},
    //   ]
    //  },
    // {
    //  viewing: false,
    //  links:
    //   [
    //     {'text':'link1','viewing':false},
    //     {'text':'link2','viewing':false},
    //   ]
    //  }
  // ]

  $scope.linkedDoc = linkedDoc;
}

function linkedDoc(storyIndex,linkIndex){
  console.log(storyIndex,"storyIndex");
  console.log(linkIndex,"linkIndex");
  $scope.stories[storyIndex][linkIndex].viewing = false;
}
