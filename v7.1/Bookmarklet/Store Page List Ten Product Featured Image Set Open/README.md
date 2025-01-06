# Store Page List Ten Product Featured Image Set Open

### [License][1]

### Synopsis

Open ten product detail pages from a store page list for use with the **[Store
Page Detail Featured Image Set][3]** bookmarklet.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add code from file **[store page list ten product featured image set
  open.bookmarklet][2]** as the URL for a bookmark in your browser named
  **Store Page List Ten Product Featured Image Set Open**.

## How to Use

* Go to a Store list page and use the bookmarklet to open ten product detail
  pages in windows/tabs. If no windows/tabs open then there are no more products
  to process on that list page. After you use the bookmarklet it will take some
  time for the windows/tabs to load. After a product detail page is fully loaded
  use the **Store Page Detail Featured Image Set** bookmarklet. If you have
  more than 200 products in a category then you'll want to use the list page
  Next navigation to continue on with processing products.
  
* Process each product detail page with the **Store Page Detail Featured Image
  Set** bookmarklet.
  
* Once the ten product detail pages are processed, reload the Store list page,
  and use this bookmarklet again. Reload the page loads the tags that have been
  added to the products by the **Store Page Detail Featured Image Set**
  bookmarklet.
  
* Repeat the previous steps until you have processed all the products you want.

* Optional, remove the tag **twc-spdfis** from the Store page.

## Notes

Your browser may have a pop-up window/tab blocker turned on. If so this code
won't work properly. You will need to allow your Squarespace built-in domain to
open pop-up windows/tabs. Following is documentation on how to allow pop-up for
the most popular browsers.

  * [Block or allow pop-ups in Chrome][4]
  
  * [Allow or block pop-ups in Safari on Mac][5]
  
  * [Block pop-ups in Microsoft Edge][6]

The code is looking for a **twc-spdfis** tag which is added by the **Store Page
Detail Featured Image Set** bookmarklet. Once that tag is added to a product,
those products are filtered out from all the products on the list page, and the
first ten of the remaining product detail pages are opened in new windows/tabs.

## What is a bookmarklet?

Wikipedia has a nice entry on [bookmarklet][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2022-09-21**

  * fix forEach error on HTMLCollection
  * bumped version to 0.1.1
  -->
* **2025-01-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: store%20page%20list%20ten%20product%20featured%20image%20set%20open.bookmarklet#L1
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Bookmarklet/Store%20Page%20Detail%20Featured%20Image%20Set#store-page-detail-featured-image-set#L1
[4]: https://support.google.com/chrome/answer/95472
[5]: https://support.apple.com/guide/safari/block-pop-ups-sfri40696/mac
[6]: https://support.microsoft.com/en-us/microsoft-edge/block-pop-ups-in-microsoft-edge-1d8ba4f8-f385-9a0b-e944-aa47339b6bb5
[7]: https://en.wikipedia.org/wiki/Bookmarklet
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
