# Section Date Hide

### [License][1]

### Synopsis

Hide page sections using dates.

### Version

  * 0.3.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[section date hide.html][4]** to Store Settings >
      Advanced > Page Header Code Injection for the store page. Please see
      [Per-page code injection][5].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[section date hide.html][4]** to Website >
      Pages > Website Tools > Code Injection > FOOTER. Please see [Add code to
      code injection][6].
      
  * Read the code for any instructions within.

## How To Use

Add a code block to a section and add the following example code.

```html
<x-twc-sdh data-date-start="2024-04-11" data-date-stop="2024-04-12" />
```

For a Classic Editor section I suggest the code block should be the first block
of the section and on a row by iteself. For a Fluid Editor section I suggest the
code block can be on the first row of the grid and be behind another block.

The format of dates are **YYYY-MM-DD**.

The **data-date-stop** attribute is optional.

**Using the year 1970 tells the code to replace the year with the current 
one.**

It is also possible to hide Squarespace supplied sections such as gallery and
auto layout. You need the data-section-id attribute value of the section which
can be entered into the code along with dates.

You can find a data-section-id by using Heather Tovey's [Squarespace ID
Finder][7].

To use SIF go to your page and use SIF. You will see something like the
following. You only need the data-section-id value which is the number within
the quotes to use in the code.

![squarespace id finder example](read%20me%20assets/data%20section%20id.png)

Add the following script tag to Website > Pages > Website Tools >
Code Injection > HEADER[[1][6]] and/or Page Settings > Advanced >
Page Header Code Injection[[2][5]].

```html
<script type="application/vnd.twc.sdh">

  {
  
    /*
    
      the format of each data structure is a section id start date, and
      optional stop date
      
      following is an example data structure. copy the example data structure
      below and paste after the example data structure. remove the forward
      slash asterisk and asterisk forward slash lines from before and after
      the example data structure. repeat for as many as many elements as you
      need to manipulate. this has been done once initially
      
      */
      
    /* "[ enter section id here between double quotes replacing square brackets ]" : {
    
      "dateStart" : "[ enter start date here between double quotes replacing square brackets ]",
      
      "dateStop" : "[ optional, enter stop date here between double quotes replacing square brackets ]"
        
      }, */
      
    "[ enter section id here between double quotes replacing square brackets ]" : {
    
      "dateStart" : "[ enter start date here between double quotes replacing square brackets ]",
      
      "dateStop" : "[ optional, enter stop date here between double quotes replacing square brackets ]"
      
      },
      
    }
    
  </script>
```

#### Examples

Hide a section beginning on date.

```html
<x-twc-sdh data-date-start="2024-04-11" />
```

Hide a section for a date range.

```html
<x-twc-sdh data-date-start="2024-04-10" data-date-stop="2024-04-11" />
```

Hide a section annually for a date range.

```html
<x-twc-sdh data-date-start="1970-04-10" data-date-stop="1970-04-12" />
```

Hide a gallery section beginning on date.

```html
<script type="application/vnd.twc.sdh">

  {
  
    /*
    
      the format of each data structure is a section id start date, and
      optional stop date
      
      following is an example data structure. copy the example data structure
      below and paste after the example data structure. remove the forward
      slash asterisk and asterisk forward slash lines from before and after
      the example data structure. repeat for as many as many elements as you
      need to manipulate. this has been done once initially
      
      */
      
    /* "[ enter section id here between double quotes replacing square brackets ]" : {
    
      "dateStart" : "[ enter start date here between double quotes replacing square brackets ]",
      
      "dateStop" : "[ optional, enter stop date here between double quotes replacing square brackets ]"
        
      }, */
      
    "123456789012345678901234" : {
    
      "dateStart" : "2024-04-11",
      
      "dateStop" : "[ optional, enter stop date here between double quotes replacing square brackets ]"
      
      },
      
    }
    
  </script>
```

## Notes

The code runs when the page loads. It will not hide a section if the visitor
loads the page and the page sits there as the various dates come and go.

The time zone calculations may not be perfect. The state of the art of
JavaScript date time zone calculations are a bit of a mess at present.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2024-09-29**

  * workaround for SS page picker hiding issue
  * bumped version to 0.3.1
  
* **2024-09-25**

  * remove jQuery dependency
  * check local date against the site regional time zone setting date
  * make work when in the editor but not editing a page
  * bumped version to 0.3.0
  
* **2024-04-11**

  * support date ranges
  * make work with more than one section
  * bumped version to 0.2.0
  
* **2021-11-18**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: section%20date%20hide.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://www.heathertovey.com/squarespace-id-finder/
[9]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
