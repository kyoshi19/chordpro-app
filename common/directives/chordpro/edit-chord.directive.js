(function(win) {
  'use strict';

  //  edit chord directive
  function editChord($log, isEmpty, bgValue, filter) {

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
      var musicBaseNotes = bgValue('musicBaseNotes')

      var chordsheet = ChordSheetJS;

      /* --> METHODS <-- */

      scope.showChordProParsedSong = function(fromTansponse) {

        scope.chordSong = fromTansponse ? scope.chordSong : getJsonSong();

        scope.newKey = angular.copy(scope.chordSong.key)

        scope.chordproSongHtml = generateHtmlFormatedSong()

        let my_element = document.getElementById('chordelement');
        my_element.innerHTML = scope.chordproSongHtml;

      }

      scope.transpose = function(step) {

        if (isEmpty(scope.song.chordpro))
          return;

        let newNote = '';
        let noteArray = scope.song.chordpro.matchAll(bgValue('patterns').notePattern);

        for (const note of noteArray) {
          console.log(note);
          var baseNote = note[1][0];

          var valueNote = filter('filter')(musicBaseNotes, baseNote)[0];
         
          var newIndex = musicBaseNotes.indexOf(valueNote);

          newIndex = newIndex == (musicBaseNotes.length -1) ? 0 : newIndex + 1

          newNote = musicBaseNotes[newIndex].name;

          if (note[1][1] == 'b') {
            
          }else{

          }

        }

      }

      function changeNote(note, step) {

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

        let chordProCode = "";

        if (!isEmpty(scope.song.title)) {
          chordProCode += "{title:" + scope.song.title + "}\n";
        }

        if (!isEmpty(scope.song.artist)) {
          chordProCode += "{artist:" + scope.song.artist + "}\n";
        }

        if (!isEmpty(scope.song.key)) {
          chordProCode += "{key:" + scope.song.key + "}\n";
        }

        chordProCode += scope.song.chordpro ? scope.song.chordpro : '';

        let chordProParser = new ChordProjectParser.ChordProParser();
        return chordProParser.parse(chordProCode);

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
    '$log',
    'isEmptyFilter',
    'bgValueFilter',
    '$filter'
  ];

  /* --> MODULE <-- */

  win.MainApp.Directives
    .directive('editChord', editChord);

})(window);