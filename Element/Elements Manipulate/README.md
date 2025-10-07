# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a source element to a destination element with the action of after,
append, before, prepend, or replace.

### Version

  * 0.10.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

  * v7.1
  
    * Add code from file **[elements manipulate.less][4]** to Website > Pages >
      Custom Code > Custom CSS.
      
    * Add code from file **[elements manipulate options.html][5]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Per-page code
      injection][6] for details. Read the code for any instructions within.
      
    * Add code from file **[elements manipulate.html][7]** to Website > Pages >
      Custom Code > Code Injection > FOOTER. Refer to [Per-page code injection][6]
      for details.
      
  * v7.0
  
    * Add code from file **[elements manipulate.less][4]** to Website > Pages >
      Website Tools > Custom Code > Custom CSS.
      
    * Add code from file **[elements manipulate options.html][5]** to Website >
      Pages > Website Tools > Custom Code > Code Injection > FOOTER. Refer to
      [Per-page code injection][6] for details. Read the code for any
      instructions within.
      
    * Add code from file **[elements manipulate.html][7]** to Website > Pages >
      Website Tools > Custom Code > Code Injection > FOOTER. Refer to [Per-page
      code injection][6] for details.
      
## Options Data Structure Templates

  * v7.1
  
    * [Footer Site Wide Divider Append to Page][8]
    
      * After installing the previous code into Elements Manipulate Options add
        code from file **[footer site wide divider append to page.html][9]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
      * Add code from file **[footer site wide divider append to
        page.less][10]** to Website > Pages > Website Tools > Custom Code >
        Custom CSS.
        
      * Create a section in your footer. Style the way you want with a divider.
      
      * Add a Code block with the content set to the following.
      
        ```html
        <x-twc-fswdatp />
        ```
        
        I suggest removing the default Text block and Save the section.
        
      There are some pages that can not be altered with custom code like the
      checkout page.
      
    * [Product Additional Info First N Blocks to End Of Product Meta][11]
    
    * [Product Additional Info First Row Video Block Before Quantity][12]
    
    * [Product Additional Info Specific Video Block Before Quantity][13]

## Callbacks

You can optionally add [callback][14] functions to further customize the
processing of the source element. Your callbacks must accept and return a node.
Add your callbacks to Website > Pages > Custom Code > Code Injection > FOOTER.
Refer to [Add code to code injection][6]. Order is not important.

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

Please consider [making a donation][15].

## Changes

* **2025-10-01**

  * added product additional info first n blocks to end of product meta template
  * added repeat option
  * bumped version to 0.10.0
  
* **2025-07-30**

  * changed options from json script tag to JavaScript object
  * removed dependency on jQuery
  * bumped version to 0.9.0
  
* **2024-10-29**

  * use module pattern for adding callbacks
  * fixed for missing codeKey variable
  * bumped version to 0.8.0
  
* **2024-10-28**

  * support for multiple callbacks
  * added source ancestor selector
  * bumped version to 0.7.0
  
* **2024-08-22**

  * use a custom mime type for script tag type attribute
  * bumped version to 0.6.1
  
* **2024-08-22**

  * support for callbacks
  * bumped version to 0.6.0
  
* **2024-05-10**

  * added after and before options
  * support Bedford template family
  * bumped version to 0.5.0
  
* **2023-06-10**

  * added source selector copy feature
  * bumped version to 0.4.0
  
* **2023-06-08**

  * fixed syntax errors
  * bumped version to 0.3.1
  
* **2023-06-06**

  * added a selector parent destination
  * bumped version to 0.3.0
  
* **2023-05-31**

  * added ability to append and prepend to selector destination
  * bumped version to 0.2.0
  
* **2022-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: elements%20manipulate.less#L1
[5]: elements%20manipulate%20options.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: elements%20manipulate.html#L1
[8]: options%20data%20structure%20templates/Footer%20Site%20Wide%20Divider%20Append%20to%20Page/footer%20site%20wide%20divider%20append%20to%20page.js
[9]: options%20data%20structure%20templates/Footer%20Site%20Wide%20Divider%20Append%20to%20Page/footer%20site%20wide%20divider%20append%20to%20page%20observe.html
[10]: options%20data%20structure%20templates/Footer%20Site%20Wide%20Divider%20Append%20to%20Page/footer%20site%20wide%20divider%20append%20to%20page.less
[11]: options%20data%20structure%20templates/product%20additional%20info%20first%20n%20blocks%20to%20end%20of%20product%20meta.js
[12]: options%20data%20structure%20templates/product%20additional%20info%20first%20row%20video%20block%20before%20quantity.js
[13]: options%20data%20structure%20templates/product%20additional%20info%20specific%20video%20block%20before%20quantity.js
[14]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[15]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
