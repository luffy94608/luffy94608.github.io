(function ($) {

    "use strict";

    /* ==========================================================================
                            check document is ready, then
   ========================================================================== */

    $(document).ready(function () {
        
            var $boyCounter = $(".boycounter");

            if ($boyCounter.length) {
                //
                // $.backstretch([
                //              '../assets/images/slider/1.jpg'
                //              , '../assets/images/slider/2.jpg'
                //              , '../assets/images/slider/3.jpg'
                // ],
                //          { duration: 4000, fade: 1000 })
                // ;

                //enter the last menstrual period date using the date format  year, month, day
                $boyCounter.tictic({
                    date: {
                        year: 2016,
                        month: 8,
                        day: 13
                    },
                    charts: {
                        disableAnimation: false,
                        darkerColor: '#598DCC',
                        lighterColor: '#83B7EF',
                        size: 80,
                        bigchart: {
                            scaleColor: !1,
                            lineCap: "square",
                            lineWidth: 5
                        },
                        smallchart: {
                            scaleColor: !1,
                            lineCap: "square",
                            lineWidth: 3
                        }
                    }
                });

                // $('.chart-set,.chart-set canvas').css({'width':'100px','height':'100px'});
                // $('.chart-title').css({'paddingTop':'20px'});

            }
    });

})(window.jQuery);

