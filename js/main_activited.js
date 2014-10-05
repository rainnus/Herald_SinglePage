AdobeEdge.bootstrapCallback(function(compId) {
    $('body').css('height','10000px');
    $(window).on('scroll',function(){
        checkScroll();
    }).resize(function(){
        checkScroll();
    }); 

    function checkScroll() {
        var myComposition = AdobeEdge.getComposition('main');
        var scrollPos = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var duration = myComposition.getStage().getDuration();
        var scrollPercent = scrollPos / (winHeight - docHeight);
        var animPosition = Math.floor(duration * (scrollPercent * - 1));

        myComposition.getStage().stop(animPosition*2);
        myComposition.getStage().getSymbol('logoCopy2').stop(animPosition + 4385);
    }
    (function($){var _=["DOMMouseScroll","mousewheel"];if($.event.fixHooks)for(var B=_.length;B;)$.event.fixHooks[_[--B]]=$.event.mouseHooks;$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var $=_.length;$;)this.addEventListener(_[--$],A,false)}else this.onmousewheel=A},teardown:function(){if(this.removeEventListener){for(var $=_.length;$;)this.removeEventListener(_[--$],A,false)}else this.onmousewheel=null}};$.fn.extend({mousewheel:function($){return $?this.bind("mousewheel",$):this.trigger("mousewheel")},unmousewheel:function($){return this.unbind("mousewheel",$)}});function A(B){var _=B||window.event,A=[].slice.call(arguments,1),D=0,C=true,E=0,F=0;B=$.event.fix(_);B.type="mousewheel";if(_.wheelDelta)D=_.wheelDelta/120;if(_.detail)D=-_.detail/3;F=D;if(_.axis!==undefined&&_.axis===_.HORIZONTAL_AXIS){F=0;E=-1*D}if(_.wheelDeltaY!==undefined)F=_.wheelDeltaY/120;if(_.wheelDeltaX!==undefined)E=-1*_.wheelDeltaX/120;A.unshift(B,D,E,F);return($.event.dispatch||$.event.handle).apply(this,A)}})(jQuery);
    
});
