# Store Product Detail Additional Info Add Footer Boilerplate

### Version 0.1.0

#### SS Version 7.1

#### Fluid Engine Compatible : No

---

## Install

* Install [twcsl][1].
  
* Add code from file **[store product detail additional info add footer
  boilerplate.css][2]** to Design > Custom CSS. Read the code for any
  instructions within.

* Add code from file **[store product detail additional info add footer
  boilerplate.html][3]** to Store Settings > Advanced > Page Header Code
  Injection for the store page.

* Add a classic editor section as the last section of the site footer.

  * Add a code block as the first block of the section. Make sure it spans the
    entire width of the section. Set the Content to the following.
    
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
Finder][4]. When using SIF you only need the number from between the quotes. For
example if SIF put **section[data-section-id="123456789012345678901234"]** on
your clipboard you would only need to enter **123456789012345678901234** in
Design > Custom CSS for the **store product detail additional info add footer
boilerplate.css** you added there.

## Make a Donation

Please consider [making a donation][5].

## Changes

<!-- * **2022-08-14**

  * fix some spacing issues
  * bumped version to 0.2.0
  -->
* **2021-08-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl#install-options
[2]: store%20product%20detail%20additional%20info%20add%20footer%20boilerplate.css#L1
[3]: store%20product%20detail%20additional%20info%20add%20footer%20boilerplate.html#L1
[4]: https://www.heathertovey.com/squarespace-id-finder/
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
