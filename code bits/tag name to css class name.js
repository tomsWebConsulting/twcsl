// License < https://tinyurl.com/s872fb68 > | © 2025 Thomas Creedon | Tom's Web Consulting < http://www.tomsWeb.consulting/ >

const tagNameToCssClassName = ( name ) => {

  const className = 'tag-'
  
    +
    
    name
    
      .replaceAll ( ' ', '-' )
      
      .toLowerCase ( )
      
      .replace ( /[^\w-]+/g, '' )
      
      .replaceAll ( '--', '-' );
      
  return className;
  
  };
  
/*

  Example Usage :
  
    className = tagNameToCssClassName ( 'a tag name' );
    
  
  License       : < https://tinyurl.com/s872fb68 >
  
  Version       : 1.0.0
  
  SS Versions   : 7.1, 7.0
  
  Copyright     : 2025 Thomas Creedon
                  
                  Tom's Web Consulting < http://www.tomsWeb.consulting/ >
  
  Changes
  
    * initial version
    
  */
