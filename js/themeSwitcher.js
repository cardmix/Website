(function clickMe() {
  const button = document.getElementById("switcher-icon");
  button.addEventListener("click", event => {
    themeSwitcher();
  });
})();

function themeSwitcher() {
  var body = document.body;
  body.classList.toggle("lightthemebody");
  
  var navLinks = document.getElementsByClassName("nav-link");
  for (i=0; i < navLinks.length; i++)
  {
  	navLinks[i].classList.toggle("lightthemenavlink");
  }
  
  var imgLightDark = document.getElementsByClassName("imagelightdark");
  imgLightDark[0].classList.toggle("lightthemeimagelightdark");
  
  var imgIcon = document.getElementsByClassName("icon");
  imgIcon[0].classList.toggle("lightthemeicon");
  
  var links = document.getElementsByClassName("link");
  for (i=0; i < links.length; i++)
  {
  	links[i].classList.toggle("lightthemelink");
  }
  
  var accordions = document.getElementsByClassName("accordion-item");
  for (i=0; i < accordions.length; i++)
  {
  	accordions[i].classList.toggle("lightthemeaccordion");
  }
  
  var pictograms = document.getElementsByClassName("pictogram");
  for (i=0; i < pictograms.length; i++)
  {
  	pictograms[i].classList.toggle("lightthemepictogram");
  }
    
  var backgroundgradient = document.getElementsByClassName("backgroundgradient");
  for (i=0; i < backgroundgradient.length; i++)
  {
        backgroundgradient[i].classList.toggle("lightthemebackgroundgradient");
  }
    
  var imagesalut = document.getElementsByClassName("imagesalut");
  for (i=0; i < imagesalut.length; i++)
  {
        imagesalut[i].classList.toggle("lightthemeimagesalut");
  }
}
