(function (win) {
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

      scope.getChordProParsedSong = function () {

        let chordProParser = new ChordProjectParser.ChordProParser();
        let formatterHtml = new ChordProjectParser.HtmlFormatter();

        let chordSong = chordProParser.parse(scope.song.chordpro);

        scope.parsedChordproHtml = formatterHtml.format(chordSong);
        scope.chordproSongHtml = '';

        // TRANSFORMAR A HTML
        scope.parsedChordproHtml.forEach(element => {
          scope.chordproSongHtml += element
        });

        let my_element = document.getElementById('chordelement');
        my_element.innerHTML = scope.chordproSongHtml;


      }

      scope.transpose = function () {

        let transposer = new ChordProjectParser.Transposer();
        
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