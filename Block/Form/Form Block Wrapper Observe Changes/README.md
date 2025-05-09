# Form Block Wrapper Observe Changes

### [License][1]

### Synopsis

Observe changes to the form wrapper of a form block and call custom callbacks as
nodes are added or removed from the [DOM][2].

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[form block wrapper observe changes.html][5]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [per-page code injection][6] for details. Read the code for any
      instructions within.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[form block wrapper observe changes.html][5]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][7]. Read the code for any instructions within.
      
* Add or edit a form block.

* Add a Line field as the first field with a LABEL of **twc-fbwoc** and
  DESCRIPTION of the following...
  
  ```
  "callbacks" : {
  
    "added" : [
    
      /*
      
        the format of each line is the name of a function. following is an
        example line. copy the example line below and paste after the example
        line. remove '// ' at the beginning of the pasted line. this has been
        done once initially
        
        */
        
      // "[ optional, enter callback name here between double quotes replacing square brackets ]",
      
      "[ optional, enter callback name here between double quotes replacing square brackets ]",
      
      ],
      
    "removed" : [
    
      /*
      
        the format of each line is the name of a function. following is an
        example line. copy the example line below and paste after the example
        line. remove '// ' at the beginning of the pasted line. this has been
        done once initially
        
        */
        
      // "[ optional, enter callback name here between double quotes replacing square brackets ]",
      
      "[ optional, enter callback name here between double quotes replacing square brackets ]",
      
      ]
      
    }    
  ```

## Callbacks

Your callbacks must accept an element as a parameter.

Following is a very generalized example of a callback.

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc fbwoc sub-module
    
    twc.fbwoc = ( ( self ) => self ) ( twc.fbwoc || { } );
    
    // initialize twc fbwoc callbacks sub-module
    
    twc.fbwoc.callbacks = ( ( self ) => {
    
      self
      
        [ 'twcFbwocLog' ]
        
        =
        
        ( element ) => {
        
          console.log ( 'twcFbwocLog : ', element );
          
          };
          
      return self;
      
      } ) ( twc.fbwoc.callbacks || { } );
      
    } ) ( );
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-03-01**

  * restructure how user callbacks are added
  * code is active in Preview
  * remove jQuery dependency
  * bumped version to 0.4.0
  
* **2024-04-27**

  * restructured the code
  * fix for user callbacks not running
  * bumped version to 0.3.0
  
* **2023-10-09**

  * remove some guard checks that prevented some nodes being passed to callbacks
  * bumped version to 0.2.1
  
* **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  
* **2023-07-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: form%20block%20wrapper%20observe%20changes.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
