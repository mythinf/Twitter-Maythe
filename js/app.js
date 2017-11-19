window.addEventListener('load', function(event) {
  var characters = document.getElementById('insert-text');
  var button = document.getElementById('button');
  var textContainer = document.getElementById('text-container');

  button.addEventListener('click', addCharacters);
  //  creando función que almacena los textos a un contenetor
  function addCharacters() {
    if (characters.value) {
      var textDiv = document.createElement('div');
      textDiv.style.background = '#ffff';
      textDiv.style.width = '500px';
      textDiv.style.height = '80px';
      textDiv.style.margin = '20px';
      textDiv.style.borderRadius = '10px';

      var text = document.createElement('p');
      text.textContent = characters.value;
      textContainer.appendChild(textDiv);
      textDiv.appendChild(text);
      characters.value = '';
    };
  };
  characters.addEventListener('keyup', countCharacters);
  //  creando función que cuenta n° de caracteres ingresados
  function countCharacters() {
    var numberCharacters = document.getElementById('number_characters');
    var size = characters.value.length;
    var max = 140;
    numberCharacters.textContent = (max - size);
  };
});
//  countCharacters.value
