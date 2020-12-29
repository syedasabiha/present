$('#fullpage').fullpage({
    bigSectionsDestination: top,
    scrollOverflow: true,
  });
  
  document.addEventListener('click', event => {
    if (event.target.matches('btn')) {
      event.target.focus()
    }
  })