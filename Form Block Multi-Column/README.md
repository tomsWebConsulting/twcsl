# Form Block Multi-Column

### [License][1]

### Version 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### v7.1 Fluid Engine Compatible

  * Not Applicable

---

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Site-wide

  * Add code from file **[form block multi-column.html][5]** to Settings >
    Developer Tools > Code Injection > FOOTER.
    
* Page Specific

  * Add code from file **[form block multi-column.html][5]** to Page Settings >
    Advanced > Page Header Code Injection for the page. Please see
    [per-page code injection][6].
    
* Read the code for any instructions within.

* Add or edit a form block. For the first field add a line field with a label of
  **twc-fbmc** and a description of **columns : n**. Replace **n** with the
  number of columns you want for the form.

* For groups of fields that you want to have a column effect add a line field
  with a label of **twc-fbmc-begin** before the first field of the column group.
  To end the column effect, after the last field of the column group add a line
  field with a title of **twc-fbmc-end**.

## Note

This effect is not active in SS Preview to test it use [private browsing][7].

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2022-05-10**

  * support for v7.1 product detail layouts
  * use twcsl
  * bumped version to 0.2.0
  -->
* **2022-06-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: form%20block%20multi-column.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://toms-web-consulting-demos.squarespace.com/form-block-multi-column?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
