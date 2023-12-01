function openLink(...links) {
  links.forEach(link => {
    setTimeout(() => {
      window.open(link, '_blank');
    }, 0);
  });
}