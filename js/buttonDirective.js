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
        console.log($window.getComputedStyle(elem[0]));
        elem.css('color', '#C89987');
      });
      elem.on('mouseleave', function(){
        if (elem.parent().hasClass('footer')) {
          elem.css('color', '#4A4A4A');
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
