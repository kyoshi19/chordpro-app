
angular
.module(appName)
.config(config);

config.$inject= [
  '$translateProvider'
];

var EStranslate = {

  // TITULOS PRINCIPALES
  'global.main.title'               : 'Enfocados chordpro application',
  'global.song.edit'                : 'Editar canción',
  'global.song.title'               : 'Título',
  'global.song.artist'              : 'Artista',
  'global.song.key'                 : 'Nota',
  'global.song.key.mode'            : 'Modo',
  'global.chordpro.code'            : 'Código chordpro',
  'global.preview'                  : 'Vista previa'

};

function config($translateProvider) {

  $translateProvider.translations('es',EStranslate);

  $translateProvider.preferredLanguage('es');

  $translateProvider.useSanitizeValueStrategy('sce');

}
