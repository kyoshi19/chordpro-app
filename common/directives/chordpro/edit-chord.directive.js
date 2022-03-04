(function(win) {
  'use strict';

  //  edit chord directive
  function editChord($log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'common/directives/chordpro/edit-chord.html',
      scope: {
        song: "=?"
      },
      link: linkFunc
    };
    return directive;

    function linkFunc(scope) {

      $log.debug('[editChordDirective] initializing...');

      /* --> VALUES <-- */


      /* --> METHODS <-- */


      function setup() {

        if (!scope.song) {

          scope.song = {};

        }
      }

      setup();

    }
  }

  /* --> CONFIGURATION <-- */

  editChord.$inject = [
    '$log'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('editChord', editChord);

})(window);