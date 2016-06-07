angular.module('app').directive('contactDirective', function() {

  var link = function(scope, elem, attr){

    elem.on('mouseenter', function(){
      elem.css('box-shadow', '0 0 1.8em rgba(0, 0, 0, 1)')
      // elem.find('h2').css('font-size', '6.2rem')
      // elem.find('h2').css('color', 'rgba(255, 255, 255, 1)')
      elem.css('cursor', 'pointer')
      elem.find('h2').css('transition', '.2s')
      elem.find('h3').css('color', 'rgba(255, 255, 255, 1)')
      elem.find('a').css('color', 'rgba(255, 255, 255, 1)')

    })
    elem.on('mouseleave', function(){
      elem.css('box-shadow', 'none')
      // elem.find('h2').css('font-size', '6rem')
      elem.find('h3').css('color', 'rgba(255, 255, 255, .0)')
      elem.find('a').css('color', 'rgba(255, 255, 255, .0)')

    })

  }


  return {
    restrict: 'A',
    link: link
  }
})
