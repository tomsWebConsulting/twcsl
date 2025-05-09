# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a source element to a destination element with the action of after,
append, before, prepend, or replace.

### Version

  * 0.8.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Bedford template family][3])

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][4] that supports [JavaScript][5].
  
  * [jQuery][6]

---

## Install

* Add code from file **[elements manipulate.less][7]** to Website > Pages >
  Custom Code > Custom CSS.
  
* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER. Refer to [Add code to code injection][8] for details.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  
  <script type="application/vnd.twc.em">
  
    {
    
      /*
      
        the format of each data structure is a source, source ancestor,
        destination, and destination ancestor selectors, an action, and optional
        callback
        
        following is an example data structure. copy the example data structure
        below and paste after the example data structure. remove the forward
        slash asterisk and asterisk forward slash lines from before and after
        the example data structure. repeat for as many as many elements as you
        need to manipulate. this has been done once initially
        
        */
        
      /* "[ enter source selector here between double quotes replacing square brackets ]" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : "[ enter destination selector here between double quotes replacing square brackets ]",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        }, */
        
      "[ enter source selector here between double quotes replacing square brackets ]" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : "[ enter destination selector here between double quotes replacing square brackets ]",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        },
        
      }
      
    </script>
  ```
  
* Add code from file **[elements manipulate.html][9]** to Website > Pages >
  Custom Code > Code Injection > FOOTER. Refer to [Per-page code injection][8]
  for details.
  
* Read the code for any instructions within.

* Options

  When you want have a common element that is available across a number of pages
  they need to be stored in a commonly accessable area like the footer of the
  site.

  * v7.1
  
    * Add a section to the site footer as the last section. Add your source
      blocks there. In the **elements manipulate.less** code set **.v7-1** to
      **true**.
      
  * v7.0
  
    * Brine template family
    
      * Add your source blocks to the Footer Bottom Blocks. In the **elements
        manipulate.less** code set **.v7-0-brine** to **true**.
        
    * Bedford template family
    
      * This template only has one footer so you need to create your own CSS to
        hide the common elements.
        
  This is not the only task the code can perform. It can move or copy anything
  that you can express with a [jQuery selector][10].

## Settings Examples

* **Product Additional Info Specific Video Block Before Quantity**
  
  ```html
  <script type="application/vnd.twc.em">
  
    {
    
      /*
      
        the format of each data structure is a source, source ancestor,
        destination, and destination ancestor selectors, an action, and optional
        callback
        
        following is an example data structure. copy the example data structure
        below and paste after the example data structure. remove the forward
        slash asterisk and asterisk forward slash lines from before and after
        the example data structure. repeat for as many as many elements as you
        need to manipulate. this has been done once initially
        
        */
        
      /* "[ enter source selector here between double quotes replacing square brackets ]" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : "[ enter destination selector here between double quotes replacing square brackets ]",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        }, */
        
      "#block-yui_3_17_2_1_1728593423043_10015" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".ProductItem-quantity-add-to-cart",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "before",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        },
        
      }
      
    </script>
  ```

* **Product Additional Info First Row Video Block Before Quantity**

  ```html
  <script type="application/vnd.twc.em">
  
    {
    
      /*
      
        the format of each data structure is a source, source ancestor,
        destination, and destination ancestor selectors, an action, and optional
        callback
        
        following is an example data structure. copy the example data structure
        below and paste after the example data structure. remove the forward
        slash asterisk and asterisk forward slash lines from before and after
        the example data structure. repeat for as many as many elements as you
        need to manipulate. this has been done once initially
        
        */
        
      /* "[ enter source selector here between double quotes replacing square brackets ]" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : "[ enter destination selector here between double quotes replacing square brackets ]",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        }, */
        
      ".ProductItem .ProductItem-additional .sqs-layout > .sqs-row:first-child > .sqs-col-12 > .sqs-block-video" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".ProductItem-quantity-add-to-cart",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "before",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        },
        
      }
      
    </script>
  ```
  
* **Product Additional Info Button Block With Text "VIEW DEMO" Details Append**

  Note the use of the twcEmIdAttributeRemove callback for some data structures.
  
  ```html
  <script type="application/vnd.twc.em">
  
    {
    
      /*
      
        the format of each data structure is a source, source ancestor,
        destination, and destination ancestor selectors, an action, and optional
        callback
        
        following is an example data structure. copy the example data structure
        below and paste after the example data structure. remove the forward
        slash asterisk and asterisk forward slash lines from before and after
        the example data structure. repeat for as many as many elements as you
        need to manipulate. this has been done once initially
        
        */
        
      /* "[ enter source selector here between double quotes replacing square brackets ]" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : "[ enter source ancestor selector here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : "[ enter destination selector here between double quotes replacing square brackets ]",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        }, */
        
      ".product-layout-side-by-side .ProductItem-additional .sqs-block-button a:contains('VIEW DEMO')" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : ".sqs-block-button",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".ProductItem-quantity-add-to-cart",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "after",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        },
        
      ".pdp-layout-full-width-carousel .ProductItem-additional .sqs-block-button a:contains('VIEW DEMO')" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : ".sqs-block-button",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".pdp-selection",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ ]
        
        },
        
      ".pdp-layout-full-bleed .ProductItem-additional .sqs-block-button a:contains(\"VIEW DEMO\")" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : ".sqs-block-button",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".pdp-details",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ "twcEmIdAttributeRemove" ]
        
        },
        
      ".pdp-layout-wrap-around .ProductItem-additional .sqs-block-button a:contains(\"VIEW DEMO\")" : {
      
        // sourceAncestorSelector is optional, use when you want to first find a
        // source element but then work up the ancestor hierarchy to manipulate
        // an ancestor element
        
        "sourceAncestorSelector" : ".sqs-block-button",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        "destinationSelector" : ".pdp-details",
        
        // destinationAncestorSelector is optional, use when you want to first
        // find a destination element but then work up the ancestor hierarchy to
        // manipulate an ancestor element
        
        "destinationAncestorSelector" : "[ enter destination ancestor selector here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // callbacks is optional, use when you want to manipulate the structure
        // of the source element. the value is an array. you can add one or
        // multiple callback names. when adding multiple callback names seperate
        // the names with commas. some examples...
        //
        // [ "callback" ]
        //
        // [ "callback1", "callback2", "callback3" ]
        //
        // your callbacks must accept and return a JavaScript object
        
        "callbacks" : [ "twcEmIdRemove" ]
        
        },
        
      }
      
    </script>
  ```

## Callbacks

You can optionally add [callback][11] functions to further customize the
processing of the source element. Your callbacks must accept and return a jQuery
object. Add you callbacks to Website > Pages > Custom Code > Code Injection >
FOOTER. Refer to [Add code to code injection][8] Order is not important.

* Log the source element.

  ```html
  <script>
  
    ( ( ) => {
    
      const
      
        version = '0.1.0',
        
        s = `
        
          TWC EM Log v${ version }
          
          License < https://tinyurl.com/s872fb68 >
          
          © 2024 Thomas Creedon
          
          Tom's Web Consulting < http://www.tomsWeb.consulting >
          
          `
          
          .replace ( /^\s+/gm, '' );
          
      console.log ( s );
      
      // initialize twc module
      
      window.twc = ( ( self ) => self ) ( window.twc || { } );
      
      // initialize twc em sub-module
      
      twc.em = ( ( self ) => self ) ( twc.em || { } );
      
      // initialize twc em callbacks sub-module
      
      twc.em.callbacks = ( ( self ) => {
      
        self [ 'twcEmLog' ] = ( $element ) => {
        
          console.log ( 'twcEmLog $element', $element );
          
          return $element;
          
          };
          
        return self;
        
        } ) ( twc.em.callbacks || { } );
        
      } ) ( );
      
    </script>
  ```

* Remove the id attribute from the element.

  ```html
  <script>
  
    ( ( ) => {
    
      const
      
        version = '0.1.0',
        
        s = `
        
          TWC EM Id Attribute Remove v${ version }
          
          License < https://tinyurl.com/s872fb68 >
          
          © 2024 Thomas Creedon
          
          Tom's Web Consulting < http://www.tomsWeb.consulting >
          
          `
          
          .replace ( /^\s+/gm, '' );
          
      console.log ( s );
      
      // initialize twc module
      
      window.twc = ( ( self ) => self ) ( window.twc || { } );
      
      // initialize twc em sub-module
      
      twc.em = ( ( self ) => self ) ( twc.em || { } );
      
      // initialize twc em callbacks sub-module
      
      twc.em.callbacks = ( ( self ) => {
      
        self [ 'twcEmIdAttributeRemove' ] = ( $element ) => {
        
          $element.removeAttr ( 'id' );
          
          return $element;
          
          };
          
        return self;
        
        } ) ( twc.em.callbacks || { } );
        
      } ) ( );
      
    </script>
  ```

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2024-10-29**

  * use module pattern for adding callbacks
  * fix for missing codeKey variable
  * bumped version to 0.8.0
  
* **2024-10-28**

  * support for multiple callbacks
  * add source ancestor selector
  * bumped version to 0.7.0
  
* **2024-08-22**

  * use a custom mime type for script tag type attribute
  * bumped version to 0.6.1
  
* **2024-08-22**

  * support for callbacks
  * bumped version to 0.6.0
  
* **2024-05-10**

  * add after and before options
  * support Bedford template family
  * bumped version to 0.5.0
  
* **2023-06-10**

  * add source selector copy feature
  * bumped version to 0.4.0
  
* **2023-06-08**

  * fix syntax errors
  * bumped version to 0.3.1
  
* **2023-06-06**

  * add a selector parent destination
  * bumped version to 0.3.0
  
* **2023-05-31**

  * add ability to append and prepend to selector destination
  * bumped version to 0.2.0
  
* **2022-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[4]: https://www.squarespace.com/pricing
[5]: https://en.wikipedia.org/wiki/JavaScript
[6]: https://jquery.com/
[7]: elements%20manipulate.less#L1
[9]: elements%20manipulate.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://api.jquery.com/category/selectors/
[11]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
