# Analytics Traffic Geography Visits By Country Remove

### [License][1]

### Synopsis

Remove countries from Analytics > Traffic Geography > Visits By Country data.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

---

## Quick Install

Add code from file **[analytics traffic geography visits by country
remove.bookmarklet][2]** as the URL for a bookmark in your browser named **TWC
Analytics Traffic Geography Visits By Country Remove**.

## How to Use

* Go to Analytics > Traffic > Geography. Be sure you see the Visits by Country
  data.

* Use the bookmarklet.

* Enter a comma separated list countries you want to remove from the data. You
  of course can enter just one country.

## Notes

This bookmarklet only addresses the Visits By Country data. It does not address
any other kind of data.

The bookmarklet will remember the last list of countries you entered. You can of
course create lists and store the them somewhere if you need to work with a set
of lists.

Countries will be colored red to remind you they have been removed.

When the page is reloaded you need to run the bookmarklet again.

This code does not respond to the date range pop-up menu. If you use the menu
the page will be left in a spurious state. The use the menu first reload the
page and then use the bookmarklet.

## What is a bookmarklet?

Wikipedia has a nice entry on [bookmarklet][3].

## Make a Donation

Please consider [making a donation][4].

## Changes

* **2026-02-20**

  * added code to update chart choropleth map and legend
  * bumped version to 0.3.0
  
* **2026-02-16**

  * added code to reapply changes to the map after a dive/surface cycle
  * bumped version to 0.2.0
  
* **2026-02-15**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: analytics%20traffic%20geography%20visits%20by%20country%20remove.bookmarklet#L1
[3]: https://en.wikipedia.org/wiki/Bookmarklet
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
