# Text Block Formats Phrase Filter

### [License][99]

### Version 0.1.0

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Unknown

---

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Page Specific

  * Add code from file **[text block formats phrase filter.html][1]** to Page
    Settings > Advanced > Page Header Code Injection for the page. Please see
    [per-page code injection][2].
    
* Site-wide

  * Add code from file **[text block formats phrase filter.html][1]** to
    Settings > Developer Tools > Code Injection > FOOTER.
    
* Add a Classic Editor blank page section.

* Above the text block add a code block with the following code.

  ```html
  <x-twc-tbfpf data-filter-text="[enter comma separated filter text phrases here between double quotes replacing the square brackets]">
  ```
  
  Example.
  
  ```html
  <x-twc-tbfpf data-filter-text="All, Bird, Cat, Dog">
  ```
  
  The term **format** here referes to Headings 1 thru 4, Paragraphs 1 thru 3,
  and Monospace formats of the text editing toolbar.
  
  The first phrase is the show all formats phrase. When the phrase is clicked
  in the text block all formats will be shown.
  
  To skip the first nth formats from filtering you can add a
  data-format-first-nth-skip attribute to the x-twc-tbfpf tag.
  
  ```html
  <x-twc-tbfpf data-filter-text="All, Bird, Cat, Dog" data-format-first-nth-skip="1">
  ```
  
  To change the default filter title (Filter) add a data-filter-title attribute
  to the x-twc-tbfpf tag.
  
  ```html
  <x-twc-tbfpf data-filter-text="All, Bird, Cat, Dog" data-filter-title="Show">
  ```
  
* Enter your text into the text block.

  Formatting your text like a table will likely produce poor results because of
  the way text wraps on narrow windows. You might be able to get away with
  really short text in this format.
  
  I reccomned that for longer text you are better off with a tagged field
  format.
  
  Example.
  
  ```text
  Name    : Bonnie
  Species : Bird
  
  Name    : Carol
  Species : Cat
  
  Name    : Dorris
  Species : Dog
  ```
  
  **Tip** When you want to keep bits of text together in a format type
  shift-return.
  
## Demo

You can see a [demo of this effect here][3].

## Make a Donation

Please consider [making a donation][4].

## Changes

<!-- * **2021-08-03**

  * added support for v7.0 Brine template family and Adirondack template
  * bumped version to 1.1
  -->
* **2022-07-17**

  * initial version

[1]: text%20block%20formats%20phrase%20filter.html#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[3]: https://toms-web-consulting-demos.squarespace.com/text-block-formats-phrase-filter?password=twcdemos
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
