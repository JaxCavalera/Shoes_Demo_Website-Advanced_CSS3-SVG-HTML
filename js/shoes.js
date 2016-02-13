(function($, shoes, undefined)
{
    $(function()
    {
		"use strict";

        /*  ===================================================
            The following code will listen for click events
            on anchor tags that link to Div Elements.

            Default scroll will be replaced by a smooth
            scroll dynamically calculating the offset to
            consider the fixed header.

            Info on the css selector (regexp looking code) :
            http://www.w3schools.com/cssref/sel_attr_begin.asp
            ===================================================*/
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();

                var targetId = this.hash;
                var $targetDiv = $(targetId);

                $('html, body').stop().animate({
                    'scrollTop': $targetDiv.offset().top - $(hot).offset().top
                }, 900, 'swing', function() {
                    window.location.hash = targetId;
                });
            });

        /*  =================================================
                        SVG Path Length Calculations
            =================================================*/
            // var path = $('#img_border_path003');
            // var valuesz = path.get(0).getTotalLength();
            // console.log(valuesz);
            // var pathChildren = path.children;
            // var longestPath = 0;
            // for (var i = 0; pathChildren.length > i; i++) {
            //     var currentChild = path.children[i];
            //     var length = currentChild.getTotalLength();
            //
            //     if (length > longestPath) {
            //         longestPath = length;
            //     }
            //     console.log(longestPath);
            // }


        /*  =================================================
                    SVG Line Animation Reset Functions
            =================================================*/
        $('#shoesImg').mouseenter(function() {
            $('#dp_dp001').removeClass('cracksReverse');
            $('#dp_dp001').addClass('cracksForwards');
        });

        $('#shoesImg').mouseleave(function() {
            $('#dp_dp001').removeClass('cracksForwards');
            $('#dp_dp001').addClass('cracksReverse');
        });

	});
})(jQuery, window.shoes = window.shoes || {});
