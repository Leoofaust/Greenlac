// JavaScript para controlar a animação do menu na rolagem
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.cabecalho__menu');
  
    // Verifica se a rolagem passou de 50px para adicionar/remover a classe 'sticky'
    if (window.scrollY > 50) {
      menu.classList.add('sticky');  // Menu ficará fixo no topo
    } else {
      menu.classList.remove('sticky');  // Menu volta ao normal
    }
  
    // Se quiser esconder o menu até a rolagem, remova a classe 'hidden'
    if (window.scrollY > 0) {
      menu.classList.remove('hidden');
    }
  });