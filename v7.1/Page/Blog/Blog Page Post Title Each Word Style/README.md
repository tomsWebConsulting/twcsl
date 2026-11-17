# Blog Page Post Title Each Word Style

### [License][1]

### Synopsis

Style each word of a blog post title wrapped in a span tag.

### Version

  * 0.2.0

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Blog Post Title Each Word Span Tag Add][4]

---

## Install

* Install **[Blog Post Title Each Word Span Tag Add][5]**. After you install
  the code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Blog Page.
    
    * Add code from file **[blog page post title each word style.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the Page, after
      the **blog post title each word span tag add** code. Refer to [Inject code
      to a specific page][7] for details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Blog Pages.
    
    * Add code from file **[blog page post title each word style.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER, after the
      **blog post title each word span tag add** code. Refer to [Add code to the
      header and footer][8].
      
## How To Use

  * Add a tag to a post starting with **twc-bpptews** space, then text that can
    be used in a CSS class name.
    
  * Example
  
    Lets say you have a blog post title of **Blog Post 001** and want words 2
    and 3 to be italic.
  
    * Add the tag **twc-bpptews words 2-3 italic** to the post.
    
    * Add the following to Website > Pages > Custom Code > Custom CSS. Refer to
      [Add CSS code][9] for details.
    
      ```css
      /* blog post title words 2-3 italicize */
      
      .tag-twc-bpptews-words-2-3-italic .blog-title span:nth-child( n+2 ):nth-child( -n+3 ),
      .tag-twc-bpptews-words-2-3-italic .blog-item-wrapper .blog-item-title h1.entry-title span:nth-child( n+2 ):nth-child( -n+3 )
      
        {
        
          font-style : italic;
          
          }
          
      ```
      
    Notes
    
    The Squarespace UI can diplay lots of characters for tags. Those characters
    can't be represented with CSS restrictions for class names. In addition SS
    also strips some characters like _ (underscore), even though CSS class names
    support that character. If you want to produce an underscore character
    you can enter **--UNDERSCORE--** in your tags.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-04-07**

  * change directions on styling. instead of trying to encode styling in a tag,
    use tags to let the user create their own CSS rule-sets
  * bumped version to 0.2.0
  
* **2025-04-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Blog%20Post%20Title%20Each%20Word%20Span%20Tag%20Add
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Blog%20Post%20Title%20Each%20Word%20Span%20Tag%20Add#blog-post-title-each-word-span-tag-add
[6]: blog%20page%20post%20title%20each%20word%20style.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://support.squarespace.com/hc/en-us/articles/206545567-Add-custom-CSS-to-your-site#h_01JNK62X86KV65WDJ9D9HY1J8C
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
