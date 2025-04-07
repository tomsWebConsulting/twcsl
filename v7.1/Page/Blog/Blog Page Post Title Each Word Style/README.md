# Blog Page Post Title Each Word Style

### [License][1]

### Synopsis

Style each word of a blog post title wrapped in a span tag.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Blog Post Title Each Word Span Tag Add][4]

#### v7.1 Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install **[Blog Post Title Each Word Span Tag Add][5]**. After you install
  the code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single blog page you want to have this
      effect.
      
    * Add code from file **[blog blog page post title each word style.html][6]**
      to Page Settings > Advanced > Page Header Code Injection for the page,
      after the **blog post title each word span tag add** code. Refer to
      [per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple blog pages where you want to have
      this effect.
      
    * Add code from file **[blog blog page post title each word style.html][6]**
      to Website > Pages > Website Tools > Code Injection > FOOTER, after the
      **blog post title each word span tag add** code. Refer to [Add code to
      code injection][8].
      
* Add a tag to each post where you want to style the words of the title. The
  format of the tag is...
  
  ```text
  twc-bpptews [ enter style here replacing square brackets ] [ enter first word number here replacing square brackets ]-[ enter last word number here replacing square brackets ]
  ```
  
  The value for style can be normal or italic.
  
  **Examples**
  
    Lets say you have a blog post title of **Blog Post 001**.
  
    * twc-bpptews italic 2-2
    
      The title would be Blog *Post* 001.
      
    * twc-bpptews italic 2-3
    
      The title would be Blog *Post 001*.

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2025-04-06**

  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.2.0
  -->
* **2025-04-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Blog%20Post%20Title%20Each%20Word%20Span%20Tag%20Add
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Blog%20Post%20Title%20Each%20Word%20Span%20Tag%20Add#blog-post-title-each-word-span-tag-add
[6]: blog%20blog%20page%20post%20title%20each%20word%20style.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
