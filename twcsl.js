// debugger;

const twcsl = ( ( ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License     : < https://bit.ly/3F8sn8W >
  
  Version     : 0.4.0
  
  SS Versions : 7.1, 7.0
  
  By          : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // private property
  
  const _ssVersion = Static
    
      .SQUARESPACE_CONTEXT
      
      .templateVersion;
      
  const self = {
  
    _ : { // shared private
    
      initialize : [ ],
      
      // property
      
      urlSlug : ( ( ) => {
      
        let urlSlug = '';
        
        try {
        
          urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
          
          } catch ( e ) { }
          
        return urlSlug;
        
        } ) ( ),
        
      // method
      
      },
      
    _seal : ( ) => {
    
      delete self._;
      
      delete self._seal;
      
      delete self._unseal;
      
      },
      
    ss : {
    
      is70    : _ssVersion == '7',
      
      is71    : _ssVersion == '7.1',
      
      version : _ssVersion,
      
      },
      
    version : {
    
      'twcsl' : '0.4.0',
      
      initializer : { },
      
      submodule : { }
      
      },
    
    /*
    
    _unseal : ( ) => {
    
      self._ = _;
      
      self._seal = _seal;
      
      self._unseal = _unseal;
      
      },
      
    */
    
    };
    
  return self;
  
  } ) ( );
