# Form Block Multi-Language

### [License][1]

### Synopsis

Facilitates the translation of auto-generated Form block field elements for a
manually maintained multi-language site.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * A manually translated site.

---

## Install

* Add code from file **[form block multi-language.html][2]** to Page Settings >
  Advanced > Page Header Code Injection for the page. Please see [per-page code
  injection][3].

* Add code from one of the following language files **before** the **form block
  multi-language** code.
  
  * [English][4]
  
  * [Finnish][5]
  
  * [Swedish][6]

## Create Your Own Translations

You can easily create your own translations using the following template. If you
do, feel free to [share][7] them with me and let me know which language they are
in. I'll gladly consider incorporating them in future updates.

```html
<style>

  #siteWrapper {
  
    --twc-fbml-l-email-signup : '[ enter email signup text here between single quotes replacing square brackets ]';
    --twc-fbml-l-first-name: '[ enter first name text here between single quotes replacing square brackets ]';
    --twc-fbml-l-last-name : '[ enter last name text here between single quotes replacing square brackets ]';
    --twc-fbml-l-required : '[ enter required text here between single quotes replacing square brackets ]';
    
    }
    
  </style>
```

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2024-08-16**

  * control decimal places in format instead of a single setting
  * use site measurement standard setting for conversions
  * bumped version to 0.2.0
  -->
* **2025-02-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: form%20block%20multi-language.html#L1
[3]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[4]: form%20block%20multi-language%20en.html#L1
[5]: form%20block%20multi-language%20fi.html#L1
[6]: form%20block%20multi-language%20sv.html#L1
[7]: mailto:tomsWebConsulting@gmail.com?subject=Form%20Block%20Multi-Language%20Template&body=%3Cstyle%3E%0A%0A%20%20%2F*%20%5B%20enter%20language%20here%20replacing%20square%20brackets%20%5D%20*%2F%0A%0A%20%20%23siteWrapper%20%7B%0A%0A%20%20%20%20--twc-fbml-l-email-signup%20%3A%20'%5B%20enter%20email%20signup%20text%20here%20between%20single%20quotes%20replacing%20square%20brackets%20%5D'%3B%0A%20%20%20%20--twc-fbml-l-first-name%3A%20'%5B%20enter%20first%20name%20text%20here%20between%20single%20quotes%20replacing%20square%20brackets%20%5D'%3B%0A%20%20%20%20--twc-fbml-l-last-name%20%3A%20'%5B%20enter%20last%20name%20text%20here%20between%20single%20quotes%20replacing%20square%20brackets%20%5D'%3B%0A%20%20%20%20--twc-fbml-l-required%20%3A%20'%5B%20enter%20required%20text%20here%20between%20single%20quotes%20replacing%20square%20brackets%20%5D'%3B%0A%20%20%20%20%0A%20%20%7D%0A%0A%3C%2Fstyle%3E
[8]: https://toms-web-consulting-demos.squarespace.com/form-block-multi-language?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
