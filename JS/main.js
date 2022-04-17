window.addEventListener('scroll', () => {
  console.log('Scrolled!');
  let content = document.querySelector('hidden');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if(contentPosition < screenPosition){
    content.classlist.add('div5animation');
  }
});