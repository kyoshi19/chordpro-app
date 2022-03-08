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

      scope.notes = ChordProjectParser.MusicLetter;

      $log.info(scope.notes);


      /* --> METHODS <-- */

      scope.showChordProParsedSong = function(fromTansponse) {

        scope.chordSong = fromTansponse ? scope.chordSong : getJsonSong();

        scope.newKey = angular.copy(scope.chordSong.key)

        scope.chordproSongHtml = generateHtmlFormatedSong()

        let my_element = document.getElementById('chordelement');
        my_element.innerHTML = scope.chordproSongHtml;

      }

      scope.transpose = function() {

        scope.chordSong = ChordProjectParser.Transposer.transpose(scope.chordSong, scope
          .newKey.note);

        scope.showChordProParsedSong(true);

        let chordoproFormatter = new ChordProjectParser.ChordProFormatter();
        let formatedChordproSong = chordoproFormatter.format(scope.chordSong);

        scope.song.chordpro = '';
        formatedChordproSong.forEach(element => {
          scope.song.chordpro += element
          if (formatedChordproSong.indexOf(element) != formatedChordproSong.length - 1) {
            scope.song.chordpro += '\n';
          }
        });
      }

      function generateHtmlFormatedSong() {
        let formatterHtml = new ChordProjectParser.HtmlFormatter();
        let parsedHtmlChordpro = formatterHtml.format(scope.chordSong);
        let chordproSongHtml = '';

        parsedHtmlChordpro.forEach(element => {
          chordproSongHtml += element
        });

        return chordproSongHtml;
      }

      function getJsonSong() {

        let chordProParser = new ChordProjectParser.ChordProParser();
        return chordProParser.parse(scope.song.chordpro);

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