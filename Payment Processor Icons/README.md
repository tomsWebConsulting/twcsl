# Payment Processor Icons

### [License][1]

### Synopsis

Add some payment processor icons to site footer.

### Version

  * 0.5.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Quick Install

* Add code from file **[payment processor icons.less][2]** to Website > Pages >
  Website Tools > Custom CSS. Read the code for any instructions within.
  
* Add code from file **[payment processor icons svg symbol.html][3]** to
  Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
  code to code injection][4].
  
* Add code from file **[payment processor icons.html][5]** to a code block in
  the footer of your site.

## Configuration

Upon initial install you will see all the icons available over a gray
background. The gray background can be turned off later. Initially it is there
to help you see all the icons. Each icon will also have an index number
near it.

### Hiding Icons

You will need to decide which icons you do not want to be shown. Let's keep the
first Afterpay icon as that is the one AP prefers we use and hide the rest.

The first Afterpay icon has an index number of 1. Note the index
number. In the **payment processor icons** code installed in the first step,
near the top of the code, find the line **#display-order {**. From
there scan down the lines looking for **// index 1** near the end of a line.
Under that we see the line **// display : none;**. This line, for icon index 1,
controls hiding this icon. We want to keep the first icon so we do not make a
change to this line. We do want to hide the rest of the icons. Following the
same previous scan the lines process for icons 2 through 46, when we find the
**// display : none;** line, remove the double forward slash space from the
line. 

Let's say you want to keep the first afterpay, American Express, and Apple Pay
icons. Their icon index numbers are 1, 8, and 20. Note these numbers down.
Now repeat the the same process as before, remove the double forward
slash space from icon index numbers 1, 8, and 20.

The removing the double forward slash space means do not display an icon.

Be very careful editing the lines. Computers don't like it when things are not
just so.

You can of course change your mind later on which icons you want to hide or
show. Remove or restore the double forward slash space from the appropriate
lines as needed.

### Order Icons

The process for ordering the icons is much the same as above but instead you
will change the **@order : 0;** lines, changing the zero to whatever order you
want to display the icons.

### Gray Background and Icon Numbers

Once you are happy with the icons you want to show and the order you can change
the **gray** background color to **unset** and hide the icon index numbers by
changing **unset** to **none**. These settings are just below the display order
section of the code.

## Demo

You can see a [demo of this effect here][6].

## Notes

Not all the payment methods supported trough Squarespace are supported as icons
in this effect. This can be because appropriate official icons aren't available
or other technical issues.

This code is designed to be a site-wide effect. For example you'd want the icons
to show up in the footer for a site. However with some minor tweaks the code
could be restricted to a single page. It is also possible to have different sets
of icons shown on different pages, with some tweaks. If you need custom
installation help, [contact me for paid consulting][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2024-08-23**

  * fix for not being able to hide unionpay
  * bumped version to 0.5.1
  
* **2024-08-21**

  * keep index number and icons together
  * restructuring much of the code for ease of maintenance
  * bumped version to 0.5.0
  
* **2024-08-20**

  * add support for Diners Club, Discover, JCB, link by stripe, and UnionPay
  * bumped version to 0.4.0
  
* **2022-10-08**

  * convert a large chunk of the CSS code to LESS
  * add support for american express
  * bumped version to 0.3.0
  
* **2022-01-30**

  * add missing show/hide code for Clearpay
  * bumped version to 0.2d2
  
* **2022-01-29**

  * added support for --justify-content CSS variable, default is center
  * added support for PayPal
  * added support for Clearpay
  * added Afterpay mint lockup
  * removed unneeded class attributes
  * removed redundant id attributes
  * bumped version to 0.2d1
  
* **2021-09-17**

  * reworked how the user configures icon hide and order
  * bumped version to 0.2d0
  
* **2021-09-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: payment%20processor%20icons.less#L1
[3]: payment%20processor%20icons%20svg%20symbol.html#L1
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[5]: payment%20processor%20icons.html#L1
[6]: https://toms-web-consulting-demos.squarespace.com/payment-processor-icons?password=twcdemos
[7]: http://www.tomsWeb.consulting/contact.html
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
