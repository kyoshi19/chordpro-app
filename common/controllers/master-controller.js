(function (win) {
  'use strict';

  var masterController = function ($log, storage) {

    $log.debug('[masterController] Initializing...');

    /*
    ==============
    VALUES
    ==============
    */

    // VM

    var vm = this;
    vm.storage = storage;
    vm.storage.messages = [];

    var setup = function () {

    };

    setup();

  };
  masterController.$inject = [
    '$log',
    '$sessionStorage'
  ];

  win.MainApp.Controllers
    .controller('masterController', masterController);

}(window));