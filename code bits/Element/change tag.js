// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const changeTag = ( element, tag ) => {

  const newElement = document
  
    .createElement ( tag );
  
  [
  
    ...
    
    element
    
    .attributes
    
    ]
    
    .forEach (
    
      a => newElement.setAttribute ( a.name, a.value )
      
      );
      
  newElement
  
    .append (
    
      ...
      
      element
      
        .childNodes
        
      );
      
  element.replaceWith ( newElement );
  
  return newElement;
  
  };
  
/*

  Example Usage :
  
    element = changeTag ( element, 'a' );
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Note          : the new element is a deep copy structurally but is devoid of
                  events
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
