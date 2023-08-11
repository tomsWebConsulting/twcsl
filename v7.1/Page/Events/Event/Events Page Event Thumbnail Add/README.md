# Events Page Event Thumbnail Add

### [License][1]
    
### Synopsis

Use settings thumbnail as thumbnail for Event.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[events page event thumbnail add.html][6]** to Events
  Settings > Advanced > Page Header Code Injection for the events page. Please
  see [Per-page code injection][7]. Read the code for any instructions within.

## Bookmarklet

**What is a bookmarket?**

Wikipedia has a nice entry on [bookmarklet][9].

By default the code adds the thumbnail to the meta information area of an event.
If you want the thumbnail to be added at the top of the content of the event
follow these steps.

* Create an event to use as a template. Add an inline image block at the top of
  the event.
  
* Set the image block link to **#twc-epefihg**.

* Save the event and exit.
  
You can use spacers to help control the placement, size, and spacing of the
image. Keep the formatting really simple or things may break. This post is only
a template.

* Add code from file **[events page event first image html
  get.bookmarklet][8]** as the URL for a bookmark in your browser named
  **Events Page Event First Image Html Get**.

* In the event template you created select the **Events Page Event First Image
  Html Get** bookmark.
  
A window/tab should pop-up with HTML code in it. If the pop-up doesn't appear be
sure that you don't have a pop-up or ad blocker software that is preventing the
pop-up from opening.

* Copy all the HTML in the pop-up to your clipboard.

* Edit the **Events Page Event Thumbnail Add** code you installed previously and
  paste the HTML where indicated in the code.

## Notes

This effect is not active in SS Preview to test it use [private browsing][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2023-05-30**

  * remove errants break statement, no functional changes
  * bumped version to 0.1.1
  -->
* **2023-08-10**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: https://github.com/tomsWebConsulting/twcsl
[6]: events%20page%20event%20thumbnail%20add.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: events%20page%20event%20first%20image%20html%20get.bookmarklet#L1
[9]: https://en.wikipedia.org/wiki/Bookmarklet
[10]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
