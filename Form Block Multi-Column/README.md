# Form Block Multi-Column

### Version 0.1.0

#### SS Versions 7.1, 7.0

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  ```
  
* Site-wide

  * Add code from file **[form block multi-column.html][1]** to  Settings >
    Advanced > Code Injection > FOOTER.
    
* Page Specific

  * Add code from file **[form block multi-column.html][1]** to Page Settings >
    Advanced > Page Header Code Injection for the page. Please see
    [per-page code injection][2].
    
* Read the code for any instructions within.

* Add or edit a form block. For the first field add a line field with a title of
  **twc-fbmc** and a description of **columns : n**. Replace **n** with the
  number of columns you want for the form.

* For groups of fields that you want to have a column effect add a line field
  with a title of **twc-fbmc-begin** before the first field of the column group.
  To end the column effect, after the last field of the column group add a line
  field with a title of **twc-fbmc-end**.

## Note

This effect is not active in SS Preview to test it use [private browsing][3].

## Demo

You can see a [demo of this effect here][4].

## Make a Donation

Please consider [making a donation][5].

## Changes

<!-- * **2022-05-10**

  * support for v7.1 product detail layouts
  * use twcsl
  * bumped version to 0.2.0
  -->
* **2022-06-11**

  * initial version

[1]: form%20block%20multi-column.html#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[3]: https://bit.ly/3f6lhq2
[4]: https://toms-web-consulting-demos.squarespace.com/form-block-multi-column?password=twcdemos
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
