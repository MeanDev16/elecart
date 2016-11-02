'use strict';

angular.module('shopnxApp')
.factory('Modal',['$rootScope','$uibModal', function ($rootScope, $uibModal) {

  var obj = {};
  var selectModalInstanceCtrl = function ($scope,$uibModalInstance, $injector, data, options, toastr, Settings) {
    var api = $injector.get(options.api);
    $scope.data = angular.copy(data);
    $scope.options = options;
    $scope.saveItem = function(item){
      if(Settings.demo){
        toastr.error('Will not be able to create in demo mode');
        $uibModalInstance.close();
        return;
      }
        if($scope.data._id){
          api.update({ id:$scope.data._id }, $scope.data).$promise.then(function() {

          }, function(error) { // error handler
            if(error.data.errors){
              var err = error.data.errors;
              toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
            }
            else{
              var msg = error.data.message;
              toastr.error(msg);
            }
          });
        }
        else{
          if(angular.equals({}, $scope.data)){
            toastr.warning('Nothing to save');
            $uibModalInstance.close(item);
            return;
          }
          api.save($scope.data).$promise.then(function() {
          }, function(error) { // error handler
            if(error.data.errors){
              var err = error.data.errors;
              toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
            }
            else{
              var msg = error.data.message;
              toastr.error(msg);
            }
          });
        }
        $uibModalInstance.close(item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
  };

  // We need to manually inject to be minsafe
  selectModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$injector', 'data', 'options', 'toastr', 'Settings'];

  obj.show = function(data,options){
      var modalOptions = {
          templateUrl: 'components/modal/modal.html',
          controller: selectModalInstanceCtrl,
          controllerAs: 'modal',
          windowClass: 'modal-danger',
          resolve: {
              data: function () { return data; },
              options : function () { return options; }
          }
      };
      $uibModal.open(modalOptions);

  };

  return obj;

}]);
