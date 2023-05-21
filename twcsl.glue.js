( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : glue
  
  Version       : 0.1.0
  
  SS Versions   : Not Applicable
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'glue' ]
    
    =
    
    '0.1.0';
    
  self.getFormFieldLabel =
  
    self.block.form.get.fieldLabel;
    
  self.getFormNth =
  
    self.block.form.get.nth;
    
  self.isElementInPage =
  
    self.element.is.in.page;
    
  self.isElementInViewport =
  
    self.element.is.in.viewport;
    
  self.getUrlParser =
  
    self.miscellaneous.getUrlParser;
    
  self.scrollEffect =
  
    self.miscellaneous.scrollEffect;
    
  self.urlToCssClassName =
  
    self.miscellaneous.urlToCssClassName;
    
  self.getPageSectionNth =
  
    self.section.get.nth;
    
  return self;
  
  } ) ( twcsl );
