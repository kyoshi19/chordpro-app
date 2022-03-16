(function(win) {
  'use strict';

  win.MainApp.Values
    .value('patterns', {
      notePattern: /\[([^\]]*)\]|\:([^\]]*)\}/g
    })


    .value('musicBaseNotes', [
      {id: 0,name: 'A'},
      {id: 1,name: 'B'},
      {id: 2,name: 'C'},
      {id: 3,name: 'D'},
      {id: 4,name: 'E'},
      {id: 5,name: 'F'},
      {id: 6,name: 'G'}
    ])

    .value('musicNotesSelect',[
      {id: 0,name: 'C'},
      {id: 1,name: 'C#'},
      {id: 2,name: 'D'},
      {id: 3,name: 'D#'},
      {id: 4,name: 'E'},
      {id: 5,name: 'F'},
      {id: 6,name: 'F#'},
      {id: 7,name: 'G'},
      {id: 8,name: 'G#'},
      {id: 9,name: 'A'},
      {id: 10,name: 'A#'},
      {id: 11,name: 'B'}
    ])

    .value('accidentals',[
      {id:0,name:'b'},
      {id:2, name:'#'},
      {id:4, name:'Natural'}
    ])

    .value('selectOption', {
      id: null,
      name: 'Seleccionar'
    });

}(window));