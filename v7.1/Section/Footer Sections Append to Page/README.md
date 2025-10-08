# Footer Sections Append to Page

### [License][1]

### Synopsis

Append footer sections to the page site wide.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Elements Manipulate][4]

---

## Install

* Install **[Elements Manipulate][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* In the **elements manipulate** code add the following data structure per that
  codes instructions.
  
  ```JavaScript
        /*
        
          footer sections append to page
          
          License     : < https://tinyurl.com/s872fb68 >
          
          Version     : 0.1.0
          
          SS Version  : 7.1
          
          Copyright   : 2022-2025 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
          
          */
          
        '#footer-sections [ data-test="page-section" ]:has( x-twc-fsatp )' : {
        
          // sourceAncestorSelector is optional, use when you want to first find
          // a source element but then work up the ancestor hierarchy to
          // manipulate an ancestor element
          
          sourceAncestorSelector : '[ enter optional source ancestor selector here between single quotes replacing square brackets ]',
          
          // sourceCopy when true will make a copy of the source element and use
          // it instead of the actual sourceSelector. value is false or true
          
          sourceCopy : false,
          
          // destinationSelector is required. use the selector x-twc-em-source
          // to use the sourceSelector as the destination
          
          destinationSelector : '#sections',
          
          // destinationAncestorSelector is optional, use when you want to first
          // find a destination element but then work up the ancestor hierarchy
          // to manipulate an ancestor element
          
          destinationAncestorSelector : '[ enter optional destination ancestor selector here between single quotes replacing square brackets ]',
          
          // rootSelector is optional, use when you want the source and
          // destination elements to have a common ancestor element
          
          rootSelector : '[ enter optional root selector here between single quotes replacing square brackets ]',
          
          // action value is after, append, before, prepend or replace
          
          action : 'append',
          
          // repeat is a number. the number of times to repeat this specific
          // element manipulation
          
          repeat : 1,
          
          // callbacks is optional, use when you want to manipulate the
          // structure of the source element. the value is an array. you can add
          // one or multiple callback names. when adding multiple callback names
          // separate the names with commas. some examples...
          //
          // [ 'callback' ]
          //
          // [ 'callback1', 'callback2', 'callback3' ]
          //
          // your callbacks must accept and return a node
          
          callbacks : [ 'twcFsatp' ]
          
          },
          
  ```
  
* Add code from file **[footer sections append to page observe.html][6]** to
  Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
  
* Add code from file **[footer sections append to page.less][7]** to
  Website > Pages > Website Tools > Custom Code > Custom CSS.

* Create a section in your footer and design it as desired.

* Add a Code block with the content set to the following.

  ```html
  <x-twc-fsatp />
  ```
  
  If you only add the Code block I suggest removing the default Text block.
  
* Save the section.

## Note

There are some pages that can not be altered with custom code like the checkout
page.

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2023-10-20**

  * set sku to empty string when no variant is selected
  * bumped version to 0.2.0
  -->
* **2025-10-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate#elements-manipulate
[6]: footer%20sections%20append%20to%20page%20observe.html#L1
[7]: footer%20sections%20append%20to%20page.less#L1
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
