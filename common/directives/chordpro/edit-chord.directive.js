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

      scope.parsedChordpro = {};

      /* --> METHODS <-- */

      scope.getChordProParsedSong = function() {

        let chordProParser = new ChordProjectParser.ChordProParser();
        let formatter = new ChordProjectParser.TextFormatter();

        let chordSong = chordProParser.parse(scope.song.chordpro);

        // var tag_id = document.getElementById('tagid');
        // var newNode = document.createElement('p');
        // newNode.appendChild(document.createTextNode('html string'));

        scope.parsedChordpro = formatter.format(chordSong);

      }

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