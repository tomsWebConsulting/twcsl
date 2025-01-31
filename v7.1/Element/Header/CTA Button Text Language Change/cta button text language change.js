
/*

  begin cta button text language change
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 0.1.0
  
  SS Version    : 7.1
  
  Dependencies  : Brad Good's multi-language technique
                  
                  < https://tinyurl.com/4dch978t >
                 
  Note          : this code must be run after the language switching code has
                  set the lang variable
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  */
  
  const twcCbtlcLanguageTextMap = {
  
    /*
    
      the format of each key-value pair is a language code and text
      
      below is an example key-value pair. copy the example key-value pair and
      paste it after the example provided. remove the double forward slash from
      before the example key-value pair. repeat for as many language code and
      text pairs as you want to map. this has been done once initially for you
      
      */
      
    // [ enter language code here replacing square brackets ] : '[ enter language text here replacing square brackets ]',
    
    [ enter language code here replacing square brackets ] : '[ enter language text here replacing square brackets ]',
     
    }
    
  // do not change anything below, there be the borg here
  
  if ( ( lang in twcCbtlcLanguageTextMap ) ) {
  
    const selector = [
    
      '.header-actions-action--cta .btn,
      
      '.header-menu-cta .btn'
      
      ]
      
      .join ( ', ' );
      
    $( selector )
    
      .text ( twcCbtlcLanguageTextMap [ lang ] );
      
    }
    
  // end cta button text language change

