angular.module('app')
.directive('buttonDirective', function($window){

    var link = function(scope, elem, attr){
      // elem.on('mouseenter', function(){
      //   elem.css('box-shadow', '0 0 2.3em hsla(0, 0%, 13%, 1)')
      // });
      // elem.on('mouseleave', function(){
      //   elem.css('box-shadow', 'none')
      // });
      elem.on('mouseenter', function(){
        if (elem.parent().hasClass('home-background-container')) {
          elem.css('font-size', '200px')
          elem.css('cursor', 'pointer')
          elem.css('text-shadow', '16px 16px 15px  rgba(0, 0, 0, .5)')
        }
        else {
        elem.css('color', '#AD9691');
        elem.css('cursor', 'pointer')
      }
      });
      elem.on('mouseleave', function(){
        if (elem.parent().hasClass('footer')) {
          elem.css('color', '#4A4A4A');
        }
        else if (elem.parent().hasClass('home-background-container')) {
          elem.css('font-size', '175px')
          elem.css('text-shadow', '1px 1px 5px  rgba(0, 0, 0, .8)')
        }
        else {
          elem.css('color', 'white');
        }

      });
      elem.on('mouseenter', function(){
        elem.css('z-index', '20');
      });
      elem.on('mouseleave', function(){
        elem.css('z-index', '0')
      });

    }

  return {
    restrict: 'A',
    link: link
  }
})
