$(document).ready(function(){      
    
    //Turn the page to white
    $('.c1').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "white"});
                  $("h1" && "p").css({"color": "black"});
                    $("h2").css({"color": "black"});
      }
    });
    
    //turn off the light
    $('.light_off').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "black"});
                  $("h1" && "p").css({"color": "white"});
                $("h2").css({"color": "white"});
      }
    });
    
    //stay the same color as the last one
    $('#c3').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "black"});
          $('#love').css({"color": "deeppink"});
      }
    });

    //love chapter
    $('#c_love').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "deeppink"});
                  $("h1" && "p").css({"color": "white"});
                $("h2").css({"color": "white"});
          $('#love').css({"color": "black"});
      }
    });

    //art_technology
    $('#c_at').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "blue"});
                  $("h1" && "p").css({"color": "cyan"});
                $("h2").css({"color": "cyan"});

      }
    });
    
    //exploration
    $('#c_exp').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "black"});
                  $("h1" && "p").css({"color": "darkviolet"});
                $("h2").css({"color": "darkviolet"});

      }
    });
    
    //Me or US?
    $('#c_mu').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "darkviolet"});
                  $("h1" && "p").css({"color": "white"});
                $("h2").css({"color": "white"});

      }
    });
    
    //Me or US?
    $('.c_end').on('inview', function(event, isInView) {
      if (isInView) {
                   $("body").css({ transition : 'background-color 0.6s ease-in-out', "background-color": "white"});
                  $("h1" && "p").css({"color": "black"});
                $("h2").css({"color": "black"});

      }
    });
    
    // this is the text changing animation loop

    var textArray = ["#Designer?","#Human?","#Student?", "#Chinese?", "#DfIer?"];
    var textArray_friends = ["Explorer (Yin)","Authentic (Ale)","Platonic (Benni)","Interesting freaky (Andrea)", "Unique (Janet)", "Gut Guy (Qian)", "Visual Weirdo (Liangyi)", "Romantic (Yu)", "Emotional detail picker (Zart)", "Immersive (Jonne)"];
    var index = 0;
    
    
    setInterval(function(){        
    $("#changeText").animate({
    },function()
    {
       if(textArray.length > index) {
       $(this).text(textArray[index]).animate({opacity:1})
       index++; 
       }
       else
       index = 0;
    });
    },400);
    
    
    setInterval(function(){        
    $("#changeText_friends").animate({
    }, function(){
       if(textArray_friends.length > index) {
       $(this).text(textArray_friends[index]).animate({opacity:1})
       index++; 
       }
       else
       index = 0;
    });
    },700);
    
    

    
});
