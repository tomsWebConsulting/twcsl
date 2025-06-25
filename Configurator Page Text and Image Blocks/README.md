# Configurator Page Text and Image Blocks

### [License][1]

### Synopsis

Create a simple product configurator.

### Version

  * 0.2.1

#### SS Versions

  * 7.1
  
  * 7.0 ([Bedford template family][2], [Brine template family][3])

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][4] that supports [JavaScript][5].
  
  * [Tom's Web Consulting Squarespace Library][6]

---

## Install

* Install [twcsl][7]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[configurator page text and image blocks.html][8]** to
  Page Settings > Advanced > Page Header Code Injection for the page. Read the
  code for any instructions within.
  
* Add code from file **[cptaib variant url redirect.html][9]** to
  Page Settings > Advanced > Page Header Code Injection for the page **before**
  the **configurator page text and image blocks** code. If you write your own
  doneCallback code then you can skip this step.
  
* In the first page section add a code block and enter the following code.

  ```html
  <x-twc-cptaib data-label="[enter the label for this configurator replacing square brackets]"></x-twc-cptaib>
  ```
  
  If you have multiple configurator pages be sure your data-label attributes are
  unique. Note the code block only needs to be added once per page.
  
* In the same section you want to set up a layout similar to the following
  example.

  ![option variant text][10]
  
  Note the first text block and its special formatting. The first line
  (**twc-cptaib,Option 1**) tells the code that the text blocks are to be used
  to delineate an option and its variants. It also provides the label for the
  option. In this example the option is **Option 1**. But you would use more
  common options like Color, Size, or etc.
  
  The last line is **exclude** and that tells the code not to use this text
  block as a variant label.
  
  Any text block in the page section without the last line of exclude will be
  used as a variant label for the option.
  
* Add a new section after the previous section with image blocks that contain
  one image for each of the variants in the previous section. Note the order of
  these sections is important.
  
  ![option variant image][11]
  
* You can repeat the previous text section followed by image section for as many
  options and variants as needed.
  
* Once you have set up all options and variants add a final section at the very
  bottom of the page similar to the following.
  
  ![done options variants links][12]
  
  Set the button Link to **#twc-cptaib**. The last text block of the section is
  how you link the various combinations of variants to a URL. The first line
  is optional. You can use it to keep track of the option labels in the
  following lines. If your link points to a SS product page and the product has
  options/variants then your option and variant labels must match the
  information you entered in the SS product editor interface.
  
  If you have a lot of lines you may find the [Text Block Easy Links][13]
  bookmarklet of use.
  
* Add code from file **[cptaib store page product detail options and variants
  select.html][14]** to Store Settings > Advanced > Page Header Code Injection
  for the page.

## Note

The configurator is simple but configuring it is not.

## Demo

You can see a [demo of this effect here][15].

## Make a Donation

Please consider [making a donation][16].

## Changes

* **2023-08-11**

  * fix is product detail check
  * bumped version to 0.2.1
  
* **2023-02-01**

  * support v7.0 Bedford template family
  * bumped version to 0.2.0
  
* **2023-01-16**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[4]: https://www.squarespace.com/pricing
[5]: https://en.wikipedia.org/wiki/JavaScript
[6]: https://github.com/tomsWebConsulting/twcsl
[7]: https://github.com/tomsWebConsulting/twcsl#install-options
[8]: configurator%20page%20text%20and%20image%20blocks.html#L1
[9]: cptaib%20variant%20url%20redirect.html#L1
[10]: read%20me%20assets/option%20variant%20text.png
[11]: read%20me%20assets/option%20variant%20image.png
[12]: read%20me%20assets/done%20options%20variants%20links.png
[13]: https://github.com/tomsWebConsulting/twcsl/tree/main/Bookmarklet/Text%20Block%20Easy%20Links#text-block-easy-links
[14]: cptaib%20store%20page%20product%20detail%20options%20and%20variants%20select.html#L1
[15]: https://toms-web-consulting-demos.squarespace.com/configurator-page-text-and-image-blocks?password=twcdemos
[16]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
