# Row Column Finder

### [License][99]

### Version 0.1.2

---

## Quick Install

* Add code from file **[row column finder.bookmarklet][1]** as the URL for a
  bookmark in your browser named **Row Column Finder**.
  
* Go to a page in a site and use the bookmarklet to tag the row and column
  elements of the page. To remove the tags use the bookmarklet again.

## Note

It is quite easy to get into a situation where blocks are not behaving the way
you think they should. Some of those issues are a how you think they should work
versus how they actually work.

But one issue that is really hard to tell is nested blocks which are virtually
undetectable visually.

The following image shows two similar looking page sections. The target layout
is a row with three evenly spaced columns of text. Although they appear to be
similar visually. They are not structurally.

![sections appear similar](read%20me%20assets/sections%20appear%20similar.png)

With the Row Column Finder bookmarklet you begin to have a chance at detecting
layout issues that may be making your blocks behave in unexpected ways or are
difficult to work with using CSS or JavaScript.

![sections are dissimilar](read%20me%20assets/sections%20are%20dissimilar.png)

In the first page section we see the target layout as desired. The second page
section does not meet our target layout. We have a row with two columns. The
first row first column contains a row with two columns. Undesirable nesting!

## What is a bookmarklet?

Wikipedia has a nice entry on [bookmarklet][2].

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2022-05-18**

  * simplify CSS, hopefully better display of tags
  * bumped version to v0.1.2
  
* **2022-05-15**

  * fix for when site is not in config
  * bumped version to v0.1.1
  
* **2022-05-15**

  * initial version

[1]: row%20column%20finder.bookmarklet#L1
[2]: https://en.wikipedia.org/wiki/Bookmarklet
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
