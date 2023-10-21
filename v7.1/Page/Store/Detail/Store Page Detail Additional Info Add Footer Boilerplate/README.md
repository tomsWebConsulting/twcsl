# Store Page Detail Additional Info Add Footer Boilerplate

### [License][1]

### Synopsis

Add footer boilerplate section elements to product detail additional info.

### Version

  * 0.2.1

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
  
* Add code from file **[store page detail additional info add footer
  boilerplate.css][6]** to Website > Website Tools > Custom CSS. Read the code
  for any instructions within.
  
* Add code from file **[store page detail additional info add footer
  boilerplate.html][7]** to Store Settings > Advanced > Page Header Code
  Injection for the store page. Please see [per-page code injection][8].
  
* Add a [Classic Editor][9] section to the footer.

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
      
You can find data section ids by using Heather Tovey's [Squarespace ID
Finder][10]. When using SIF you only need the number from between the quotes.
For example if SIF put **section[data-section-id="123456789012345678901234"]**
on your clipboard you would only need to enter **123456789012345678901234** in
Website > Website Tools > Custom CSS for the **store page detail additional info
add footer boilerplate.css** you added there.

This effect is not active in SS Preview to test it use [private browsing][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2023-10-21**

  * fix for page section displaying when it shouldn't
  * bumped version to 0.2.1
  
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
[6]: store%20page%20detail%20additional%20info%20add%20footer%20boilerplate.css#L1
[7]: store%20page%20detail%20additional%20info%20add%20footer%20boilerplate.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/6421525446541-Editing-your-site-with-Fluid-Engine#toc-fluid-engine-vs--classic-editor
[10]: https://www.heathertovey.com/squarespace-id-finder/
[11]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
