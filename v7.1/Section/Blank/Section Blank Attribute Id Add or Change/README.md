# Section Blank Attribute Id Add or Change

### [License][1]

### Synopsis

Add or change the section id attribute.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Quick Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[section blank attribute id add or change.html][5]** to
  Page Settings > Advanced > Page Header Code Injection for the page. Please see
  [Per-page code injection][6]. 
  
* For each section you want to add an id add a code block to the section. In the
  code add the following.
  
  ```html
  <x-twc-sbaiaoc>[enter id here replacing square brackets]</x-twc-sbaiaoc>
  ```

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-10-25**

  * assume that if x-twc-sbaiaoc is used then the want to add or change the
    section id
  * bumped version to 0.2.1
  
* **2023-01-26**

  * use code blocks to configure code
  * bumped version to 0.2.0
  
* **2021-04-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: section%20blank%20attribute%20id%20add%20or%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
