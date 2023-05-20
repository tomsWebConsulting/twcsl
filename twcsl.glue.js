// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
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
  
    element.is.in.page;
    
  self.isElementInViewport =
  
    element.is.in.viewport;
    
  self.getUrlParser =
  
    miscellaneous.getUrlParser;
    
  self.scrollEffect =
  
    miscellaneous.scrollEffect;
    
  self.urlToCssClassName =
  
    miscellaneous.urlToCssClassName;
    
  self.getPageSectionNth =
  
    section.get.nth;
    
  return self;
  
  } ) ( twcsl );