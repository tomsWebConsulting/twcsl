# Page Sections Slide Toggle

### Version 0.2d2

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

Add code from file **slide toggle page sections.html** to Store Settings >
Advanced > Page Header Code Injection for the store page.

For each page section you want to be able to toggle set it's height to small and
alignment to top in the SS editor. Add a code block as the first block for the
page section. In the code block add the following.

```html
<div class="twc-psst"></div>
```

After the code block add a text block with the label text for the page section.

## Make a Donation

Please consider [making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-07-28**
<br><br>
  * take a less tortuous route for CSS
  * fix for page section blocks being hidden without code block tag being set
  * bumped version to 0.2d2
  <br><br>
* **2021-07-28**
<br><br>
  * fix for .nextUntil ( ) skipping .sqs-row
  * bumped version to 0.2d1
  <br><br>
* **2021-07-19**
<br><br>
  * initial version
