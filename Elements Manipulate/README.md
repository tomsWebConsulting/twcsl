# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a selector source to a selector destination with the action of
append, prepend, or replace.

### Version

  * 0.6.0

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
  Website Tools > Custom CSS. Read the code for any instructions within.
  
* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER. Please see [Add code to code injection][8]. Read the code for any
  instructions within.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  
  <script data-twc-em type="application/json">
  
    {
    
      /*
      
        the format of each data structure is a selector source and destination,
        an action, and optional callback
        
        following is an example data structure. copy the example data structure
        below and paste after the example data structure. remove the forward
        slash asterisk and asterisk forward slash lines from before and after
        the example data structure. repeat for as many as many elements as you
        need to manipulate. this has been done once initially
        
        */
        
      /* "[ enter selector source here between double quotes replacing square brackets ]" : {
      
        "selectorDestination" : "[ enter selector destination here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // selectorParentDestination is optional, use when you want to first
        // find a selector destination but then work up the ancestor hierarchy
        // to manipulate it
        
        "selectorParentDestination" : "[ enter selector parent destination here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        // callback is optional, use when you want to manipulate the structure
        // of the source element. replace undefined with the name of your custom
        // function
        //
        // your callback must accept and return a JavaScript object
        
        "callback" : "[ enter callback name here between double quotes replacing square brackets ]"
        
        }, */
        
      "[ enter selector source here between double quotes replacing square brackets ]" : {
      
        "selectorDestination" : "[ enter selector destination here between double quotes replacing square brackets ]",
        
        // action value is after, append, before, prepend or replace
        
        "action" : "append",
        
        // selectorParentDestination is optional, use when you want to first
        // find a selector destination but then work up the ancestor hierarchy
        // to manipulate it
        
        "selectorParentDestination" : "[ enter selector parent destination here between double quotes replacing square brackets ]",
        
        // sourceCopy when true will make a copy of the source element and use
        // it instead of the actual selectorSource. value is false or true
        
        "sourceCopy" : false,
        
        // callback is optional, use when you want to manipulate the structure
        // of the source element. replace undefined with the name of your custom
        // function
        //
        // your callback must accept and return a JavaScript object
        
        "callback" : "[ enter callback name here between double quotes replacing square brackets ]"
        
        },
        
      }
      
    </script>
  ```
  
* Add code from file **[elements manipulate.html][9]** to Website > Pages >
  Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][8]. Read the code for any instructions within.
  
* Options

  When you want have a common element that is available across a number of pages
  they need to be stored in a commonly accessable area like the footer of the
  site.

  * v7.1
  
    * Add a section to the site footer as the last section. Add your source
      blocks there.
      
  * v7.0
  
    * Brine template family
    
      * Put your blocks in the Footer Bottom Blocks and in the **elements
        manipulate.less** file and set **.v7-0-brine** to **true**.
        
    * Bedford template family
    
      * This template only has one footer so you need to create your own CSS to
        hide the common elements.

## Callbacks

You can optionally add [callback][10] functions to further customize the
processing of the source element.

Your callbacks must accept a jQuery object.

Following is example code. Place your callbacks before the element manipulate
code. Note the use of var.

```html
<script>

  var twcEmLog = ( $element ) => {
  
    console.log ( 'twcEmLog $element', $element );
    
    return $element;
    
    };
    
  </script>
```

## Make a Donation

Please consider [making a donation][11].

## Changes

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
[10]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
