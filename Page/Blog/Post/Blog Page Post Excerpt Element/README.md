# Blog Page Post Excerpt Element

### [License][1]

### Synopsis

Create a blog page post excerpt element.

### Version

  * 0.1.0

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
  
  ```text
      "head meta[ name=\"description\" ]" : {
      
        "selectorDestination" : ".blog-item-top-wrapper",
        
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
        
        "callback" : "twcBlogPagePostExcerptElement"
        
        },
        
  ```
  
* Options

  * Blog Page Specific
  
    * This option will be the one most will want to use if you have only a
      single blog page you want to have this effect.
      
    * Add code from file **[blog page post excerpt element.html][8]** to Blog
      Settings > Advanced > Page Header Code Injection for the blog page.
      Please see [Per-page code injection][9].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple blog pages
      where you want to have this effect.
      
    * Add code from file **[blog page post excerpt element.html][10]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][10].
      
## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2023-05-31**

  * add ability to append and prepend to selector destination
  * bumped version to 0.2.0
  -->
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
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
