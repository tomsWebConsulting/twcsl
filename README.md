# Tom's Web Consulting Squarespace Library

This is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) of code for adding
various effects to Squarespace v7.0 and v7.1 sites.

## General Layout Overview

* v7.0 and v7.1 effects

* v7.0 only effects

  * effects for all v7.0 templates
  
  * template specific effects
  
* v7.1 only effects

* twcsl

twcsl contains over 50 effects. To find an effect browse the repository.
Each effect has it's own version number, code, read me, and etc.

## Make a Donation

Please consider making a donation.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=FSPYTKHXHRU5U)

Your donations help me to continue to help you realize your website goals! The
donation amounts are suggested amounts. Any donation amount is greatly appreciated!

## Need Help Installing or Customizing the Code?

I'm [available for consulting](http://www.tomsWeb.consulting/).

---

**The rest of this document covers twcsl.js**.

# twcsl.js

twcsl.js is a Javascript library of common properties and methods useful for
building effects in Squarespace sites.

### Version 0.1d11

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d11/twcsl.js"></script>
```

## Example

You want to build an effect that does something when you are on a store category
product grid page. You can use twcsl to test if you are on such a page with the
following.

```javascript
if ( twcsl.storePage.hasCategory ) console.log ( 'has category' );
```

## Methods

* getFirstPageSection
  <br><br>
  * getFirstPageSection ( );
    <br><br>
    * Returns jQuery object.
      <br><br>
* getFormFieldLabel
  <br><br>
  * getFormFieldLabel ( [ form field, jQuery Object );
    <br><br>
    * Returns form field label as entered in SS form editor interface.
      <br><br>
* getFormNth
  <br><br>
  * getFormNth ( [nth form on page] );
    <br><br>
    * Default is the first form on the page.
    * Returns jQuery object or undefined for no form.
      <br><br>
* getUrlParser
  <br><br>
  * getUrlParser ( url );
    <br><br>
    * Returns an anchor element.
      <br><br>
* scrollEffect
  <br><br>
  * scrollEffect ( callback [, easingFunction, invertScale ] );
    <br><br>
    * Calculates the scroll postion as a ratio that is passed to your callback.
      <br><br>
      easingFunction ( string ), default is linear
      <br><br>
      invertScale ( boolean ), default is false

## Properties

* blogPage ( object )
  <br><br>
  * categories ( array, for detail page only )
    <br><br>
  * category ( string )
    <br><br>
  * categoryUrlSlug ( string )
    <br><br>
  * categoryUrlSlugs ( array, for detail page only )
    <br><br>
  * hasCategory ( boolean )
    <br><br>
  * hasTag ( boolean )
    <br><br>
  * isBlogPage ( boolean )
    <br><br>
  * isDetail ( boolean )
    <br><br>
  * tag ( string )
    <br><br>
  * tags ( array, for detail page only )
    <br><br>
  * tagUrlSlug ( string )
    <br><br>
  * tagUrlSlugs ( array, for detail page only )
    <br><br>
  * urlSlug ( string )
    <br><br>
* eventPage ( object )
  <br><br>
  * categories ( array, for detail page only )
    <br><br>
  * category ( string )
    <br><br>
  * categoryUrlSlug ( string )
    <br><br>
  * categoryUrlSlugs ( array, for detail page only )
    <br><br>
  * hasCategory ( boolean )
    <br><br>
  * hasTag ( boolean )
    <br><br>
  * isDetail ( boolean )
    <br><br>
  * isEventPage ( boolean )
    <br><br>
  * tag ( string )
    <br><br>
  * tags ( array, for detail page only )
    <br><br>
  * tagUrlSlug ( string )
    <br><br>
  * tagUrlSlugs ( array, for detail page only )
    <br><br>
  * urlSlug ( string )
    <br><br>
* is70 ( boolean )
  <br><br>
* is71 ( boolean )
  <br><br>
* isCart ( boolean )
  <br><br>
* isSearch ( boolean )
  <br><br>
* navigator ( object )
  <br><br>
  * hasTouchScreen ( boolean )
    <br><br>
* ssVersion ( string )
  <br><br>
* storePage ( object )
  <br><br>
  * category ( string )
    <br><br>
  * categoryUrlSlug ( string )
    <br><br>
  * classTags ( array, for detail page only )
    <br><br>
  * hasCategory ( boolean )
    <br><br>
  * hasTag ( boolean )
    <br><br>
  * isDetail ( boolean )
    <br><br>
  * isStorePage ( boolean )
    <br><br>
  * tag ( string )
    <br><br>
  * tagUrlSlug ( string )
    <br><br>
  * urlSlug ( string )
    <br><br>
* version ( string, twcsl version )

## Changes


* **2021-07-25**
<br><br>
  * fix for firstPageSection, changed to method getFirstPageSection
  * bumped version to 0.1d11
  <br><br>
* **2021-07-25**
<br><br>
  * fix for getUrlParser not defined
  * bumped version to 0.1d10
  <br><br>
* **2021-07-24**
<br><br>
  * added getUrlParser method
  * added getFormFieldLabel method
  * checked Avenue template support
  * consolidated nearly identical code into _getClassEventlistFilterText
    function
  * bumped version to 0.1d9
  <br><br>
* **2021-06-27**
<br><br>
  * added firstPageSection
  * added storePage.classCategories
  * added blogPage
  * bumped version to 0.1d8
  <br><br>
* **2021-06-07**
<br><br>
  * fix for _urlSlug undefined error on non-collection pages
  * added isCart and isSearch properties
  * bumped version to 0.1d7
  <br><br>
* **2021-06-04**
<br><br>
  * reworked what was being labeled as category and tag, in many cases what was
    being return was not what the user enters in SS but classes or url search
    parameters as generated by SS
  * fix for is70 check
  * bumped version to 0.1d6
  <br><br>
* **2021-06-02**
<br><br>
  * fix storePage.category being erroneously populated
  * bumped version to 0.1d5
  <br><br>
* **2021-06-01**
<br><br>
  * added eventPage property
  * bumped version to 0.1d4
  <br><br>
* **2021-05-31**
<br><br>
  * fix for library not initializing
  * bumped version to 0.1d3
  <br><br>
* **2021-05-29**
<br><br>
  * added tags property for storePage
  * bumped version to 0.1d2
  <br><br>
* **2021-05-26**
<br><br>
  * added version property for twcsl
  * filled out the documentation a bit
  * added getFormNth method
  * changed order of parameters for scrollEffect method
  * bumped version to 0.1d1
  <br><br>
* **2021-05-22**
<br><br>
  * initial version
