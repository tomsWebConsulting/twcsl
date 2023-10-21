# Store Page Detail Additional Info Add Footer Boilerplate

### [License][1]

### Synopsis

Add footer boilerplate section elements to product detail additional info.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * No

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store product detail additional info add footer
  boilerplate.html][6]** to Store Settings > Advanced > Page Header Code
  Injection for the store page. Please see [per-page code injection][7].
  
* Add a [Classic Editor][8] section to the footer.

  * Add a code block as the first block of the section. Make sure it spans the
    entire width of the section. Set the content to the following.
    
    ```html
    <x-twc-spdaiafb/>
    ```
    
  * Below the code block build up your boilerplate content you want to be added
    to the Additional Info of each product.
    
  * Save the section.

## Notes

If you want the boilerplate content to be added to the beginning of Additional
Info set the code block content to the following.

```html
<x-twc-spdaiafb data-position="top"/>
```
      
## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-10-21**

  * make what gets moved from the footer to additional info broader
  * bumped version to 0.2.0
  
* **2021-08-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20detail%20additional%20info%20add%20footer%20boilerplate.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/6421525446541-Editing-your-site-with-Fluid-Engine?platform=v6&websiteId=60374efe93a6cb725a5c6856#toc-fluid-engine-vs--classic-editor
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
