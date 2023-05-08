# Form Block Track Field Block IDs

### [License][1]

### Synopsis

Track tagged form block field block ids for later use in other code.

### Version 0.1.1

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Site-wide

  * Add code from file **[form block track field block ids.html][5]** to
    Settings > Advanced > Code Injection > FOOTER.
    
* Page Specific

  * Add code from file **[form block track field block ids.html][5]** to Page
    Settings > Advanced > Page Header Code Injection for the page. Please see
    [per-page code injection][6].
    
* Read the code for any instructions within.

* Add or edit a form block. For the first field add a line field with a label of
  **twc-fbtfbi**.

* For each field you want to track add **twc-fbtfbi** to the field description.
  What gets tracked? The field block ids are added to an attribute
  **data-twc-fbtfbi** on the form wrapper element. You can then use the data
  later for whatever purpose you can imagine.

## Note

This code is a base for other effects. On its own it doesn't produce visible
results. This effect is not active in SS Preview to test it use [private
browsing][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2023-05-07**

  * fix for cooperative elements hide/show code not working
  * bumped version to 0.1.1
  
* **2023-05-07**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: form%20block%20track%20field%20block%20ids.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
