window.addEventListener('load', function(event) {
  var countCharacters = document.getElementById('insert-text');
  var button = document.getElementById('button');
  var textContainer = document.getElementById('text-container');
  //  creando función que agrega los texto a un contenetor
  button.addEventListener('click', function() {
    if (countCharacters.value) {
      var textDiv = document.createElement('div');
      var text = document.createElement('p');
      text.textContent = countCharacters.value;

      textContainer.appendChild(textDiv);
      textDiv.appendChild(text);
      countCharacters.value = '';
    };
  });
});
