# Blog Page Post Excerpt Element

### [License][1]

### Synopsis

Create a blog page post excerpt element.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Bedford template family][3])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][4] that supports [JavaScript][5].
  
  * [Elements Manipulate][6]

---

## Install

* Install **[Elements Manipulate][7]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* In the **elements manipulate** code add the following data structure per that
  codes instructions.
  
  ```JavaScript
        /*
        
          blog page post excerpt element
          
          License     : < https://tinyurl.com/s872fb68 >
          
          Version     : 0.2.0
          
          SS Version  : 7.1
          
          Copyright   : 2024-2025 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
          
          */
          
        'head meta[ name="description" ]' : {
        
          // sourceAncestorSelector is optional, use when you want to first find
          // a source element but then work up the ancestor hierarchy to
          // manipulate an ancestor element
          
          sourceAncestorSelector : '[ enter optional source ancestor selector here between single quotes replacing square brackets ]',
          
          // sourceCopy when true will make a copy of the source element and use
          // it instead of the actual sourceSelector. value is false or true
          
          sourceCopy : false,
          
          // destinationSelector is required. use the selector x-twc-em-source
          // to use the sourceSelector as the destination
          
          destinationSelector : '.blog-item-top-wrapper',
          
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
          
          callbacks : [ 'twcBlogPagePostExcerptElement' ]
          
          },
          
  ```
  
* Options

  * 7.1
  
    * Page Specific
    
      * Use this option if you have only a single page you want to have this
        effect.
        
      * Add code from file **[blog page post excerpt element.html][8]** to Blog
        Settings > Advanced > Page Header Code Injection for the blog page.
        Refer to [Per-page code injection][9] for details.
        
    * Site-wide
    
      * Use this option if you have multiple pages where you want to have this
        effect.
        
      * Add code from file **[blog page post excerpt element.html][10]** to
        Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
        code to code injection][9] for details.
        
  * 7.0
  
    * Page Specific
    
      * Use this option if you have only a single page you want to have this
        effect.
        
      * Add code from file **[blog page post excerpt element.html][8]** to Blog
        Settings > Advanced > Page Header Code Injection for the blog page.
        Refer to [Per-page code injection][9] for details.
        
    * Site-wide
    
      * Use this option if you have multiple pages where you want to have this
        effect.
        
      * Add code from file **[blog page post excerpt element.html][10]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        Refer to [Add code to code injection][9] for details.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-10-08**

  * updated to work with elements manipulate v0.9.0
  * updated data structure
  * removed dependency on jQuery
  * bumped version to 0.2.0
  
* **2024-08-22**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[4]: https://www.squarespace.com/pricing
[5]: https://en.wikipedia.org/wiki/JavaScript
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Elements%20Manipulate
[7]: https://github.com/tomsWebConsulting/twcsl/tree/main/Elements%20Manipulate#elements-manipulate
[8]: blog%20page%20post%20excerpt%20element.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
