window.addEventListener('load', function(event) {
  var characters = document.getElementById('insert-text');
  var button = document.getElementById('button');
  var textContainer = document.getElementById('text-container');

  button.addEventListener('click', addCharacters);
  //  creando función que almacena los textos a un contenetor
  function addCharacters() {
    if (characters.value) {
      var commitDiv = document.createElement('div');
      commitDiv.style.background = '#ffff';
      commitDiv.style.width = '500px';
      commitDiv.style.height = 'auto';
      commitDiv.style.margin = '20px';
      commitDiv.style.borderRadius = '10px';
      var textDiv = document.createElement('div');
      var text = document.createElement('p');
      text.textContent = characters.value ;
      commitDiv.appendChild(textDiv);
      textDiv.appendChild(text);
      textContainer.appendChild(commitDiv);
      characters.value = '';

      //  agregando hora de publicación
      var time = moment().format('LLLL');
      var timeDiv = document.createElement('div');
      timeDiv.textContent = time;
      timeDiv.style.color = 'red';
      commitDiv.appendChild(timeDiv);
    };

    characters.addEventListener('keydown', pressEnter);
    //  creando función que agrandará el contenetor al presionar 'Enter'
    function pressEnter() {
      characters.style.cssText = 'height:' + characters.scrollHeight + 'px';
    }
    characters.addEventListener('keyup', countCharacters);
    //  creando función que cuenta n° de caracteres ingresados
    function countCharacters() {
      var numberCharacters = document.getElementById('number_characters');
      var size = characters.value.length;
      var max = 140;
      var finalSize = numberCharacters.textContent = (max - size);

      // deshabilitando botón y cambiar de color si los caracteres pasan los 140
      if (finalSize <= 0) {
        button.disabled = true;
        numberCharacters.style.color = 'red';

      // cambiar contador a color morado si hay más de 120 caracteres
      } else if (finalSize <= 20 && finalSize > 10) {
        button.disabled = false;
        numberCharacters.style.color = 'purple';
      // cambiar contador a color fucsia si hay más de 130 caracteres
      } else if (finalSize < 10 && finalSize >= 0) {
        button.disabled = false;
        numberCharacters.style.color = '#FF1493';
      } else if (finalSize < 0) {
        button.disabled = false;
        numberCharacters.style.color = 'red';
      } else {
        button.disabled = false;
        numberCharacters.style.color = '#7788' ;
      }
    };
  };
});
