window.addEventListener('resize', (e) => { 
  width = e.target.innerWidth 
  var appDemo = document.getElementById('app-demo');

  if (width < 768) { 
    appDemo.classList.add('text-center')
  } else {
    appDemo.classList.remove('text-center')
  }
})