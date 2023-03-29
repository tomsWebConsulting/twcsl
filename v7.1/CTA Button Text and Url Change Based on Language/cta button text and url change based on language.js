/*

  begin cta button text and url change based on language
  
  License      : < https://bit.ly/3F8sn8W >
  
  Version      : 0.2d0
  
  SS Version   : 7.1
  
  Dependencies : jQuery
                 
                 lang variable being set by language switching code
                 
  Note         : this code must be run after the language switching code has
                 set the lang variable
                 
  By           : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  const languageTextUrlMap = {
  
    /*
    
      the format of each language code/text/url data structure is as follows
      
      [enter language code here] : {
      
      text : '[enter language text here]',
      
      url : '[enter url here]'
      
      },
      
      */
      
    [enter language code here] : {
    
      text : '[enter language text here]',
      
      url : '[enter url here]'
      
      },
      
    }
    
  // do not change anything below, there be the borg here
  
  if ( ( lang in languageTextUrlMap ) )
  
    $( '.header-actions-action--cta .btn, .header-menu-cta .btn' )
    
      .attr ( 'href', languageTextUrlMap [ lang ].url )
      
      .text ( languageTextUrlMap [ lang ].text );
      
  // end cta button text and url change based on language
