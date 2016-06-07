angular.module('app').directive('portfolioDirective', function() {

  var link = function(scope, elem, attr){

    elem.on('mouseenter', function(){
      elem.css('box-shadow', '0 0 1.8em rgba(0, 0, 0, 1)')
      // elem.find('h2').css('font-size', '3.6rem')
      elem.find('h2').css('color', 'rgba(255, 255, 255, 1)')
      elem.css('cursor', 'pointer')
      elem.find('h2').css('transition', '1s')
    })
    elem.on('mouseleave', function(){
      elem.css('box-shadow', 'none')
      // elem.find('h2').css('font-size', '3.5rem')
      elem.find('h2').css('color', 'rgba(255, 255, 255, .0)')
    })
    elem.on('click', function(){
      if(elem.find('h2').text() ==='Twitter Clone') {
        window.open('http://taylormunnerlyn.github.io/twitter-clone', '_blank')
      }
    })

  }


  return {
    restrict: 'A',
    link: link
  }
})
