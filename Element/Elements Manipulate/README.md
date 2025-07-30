# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a source element to a destination element with the action of after,
append, before, prepend, or replace.

### Version

  * 0.9.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Bedford template family][3])

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][4] that supports [JavaScript][5].

---

## Install

* Add code from file **[elements manipulate.less][6]** to Website > Pages >
  Custom Code > Custom CSS.
  
* Add code from file **[elements manipulate options.html][7]** to Website >
  Pages > Custom Code > Code Injection > FOOTER. Refer to [Per-page code
  injection][8] for details. Read the code for any instructions within.
  
* Add code from file **[elements manipulate.html][9]** to Website > Pages >
  Custom Code > Code Injection > FOOTER. Refer to [Per-page code injection][8]
  for details.

## Pptions Data Structure Templates

* [Product Additional Info Specific Video Block Before Quantity][10]
  
* [Product Additional Info First Row Video Block Before Quantity][11]

## Callbacks

You can optionally add [callback][12] functions to further customize the
processing of the source element. Your callbacks must accept and return a node.
Add your callbacks to Website > Pages > Custom Code > Code Injection > FOOTER.
Refer to [Add code to code injection][8]. Order is not important.

* Log the source element.

  ```html
  <script>
  
    ( ( ) => {
    
      const
      
        version = '0.1.0',
        
        s = `
        
          TWC EM Log v${ version }
          
          License < https://tinyurl.com/s872fb68 >
          
          © 2022-2025 Thomas Creedon
          
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
      
        const callback = ( element ) => {
        
          console.log ( 'twcEmLog element', element );
          
          return element;
          
          };
          
        self [ 'twcEmLog' ] = callback;
        
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
          
          © 2022-2025 Thomas Creedon
          
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

## Note

You can install **elements manipulate options** anywhere you can add an HTML
script tag.

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2025-07-30**

  * change options from json script tag to JavaScript object
  * removed dependency on jQuery
  * bumped version to 0.9.0
  
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
[6]: elements%20manipulate.less#L1
[7]: elements%20manipulate%20options.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: elements%20manipulate.html#L1
[10]: options%20data%20structure%20templates/product%20additional%20info%20specific%20video%20block%20before%20quantity.js
[11]: options%20data%20structure%20templates/product%20additional%20info%20first%20row%20video%20block%20before%20quantity.js
[12]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
