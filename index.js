document.getElementById('about').onclick = function() {
    document.getElementById('id').classList.add('a');
    document.getElementById('ia').classList.add('a1');
    document.getElementById('id').classList.remove('a3');
    document.getElementById('ia').classList.remove('a4');

  }
  document.getElementById('home').onclick = function() {
    document.getElementById('id').classList.add('a3');
    document.getElementById('ia').classList.add('a4');
    document.getElementById('id').classList.remove('a');
    document.getElementById('ia').classList.remove('a1');

    
  }