# Payment Processor Icons

### Version 0.3.0

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Not Applicable

---

## Quick Install

* Add code from file **[payment processor icons.less][1]** to Design >
  Custom CSS.
  
* Add code from file **[payment processor icons svg symbol.html][2]** to
  Settings > Advanced > Code Injection > FOOTER.
  
* Add code from file **[payment processor icons.html][3]** to a code block in
  the footer of your site.

## Configuration

Upon initial install you will see all the icons available over a gray
background. The gray background can be turned off later. Initially it is there
to help you see all the icons. Each icon will also have an index number
proceeding it.

### Hiding Icons

You will need to decide which icons you do not want to be shown. Let's keep the
first Afterpay icon as that is the one AP prefers you use and hide the rest.

The first Afterpay icon has an index number of 1 proceeding it. Note the index
number. In the **payment processor icons** code installed in the first step,
near the top of the code, you will find the line **// display order**. From
there scan down the lines looking for **// index 2**. Under that you will see
the line **display : unset;**. Change **unset** to **none**. In this example
since you are only keeping one icon you'd continue down the lines repeating the
above process until you get to icon index 39.

Let's say you want to keep the first afterpay and American Express, and Apple
Pay icons. Their icon index numbers are 1, 8, and 20. Note these number down.
Now repeat the the same process as before but you set icon index numbers 1, 8,
and 20 to **unset** and all others to *none*.

The value **none** means do not display the icon and **unset** means use the
default, which shows the icon.

Be very careful editing the lines. Computers don't like it when things are not
just so.

You can of course change your mind later on which icons you want to hide or
show.

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

You can see a [demo of this effect here][4].

## Note

This code is designed to be a site-wide effect. For example you'd want the icons
to show up in the footer for a site. However with some minor tweaks the code
could be restricted to a single page. It is also possible to have different sets
of icons shown on different pages, with some tweaks. If you need custom
installation help, [contact me for paid consulting][5].

## Make a Donation

Please consider [making a donation][6].

## Changes

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

[1]: payment%20processor%20icons.less#L1
[2]: payment%20processor%20icons%20svg%20symbol.html#L1
[3]: payment%20processor%20icons.html#L1
[4]: https://toms-web-consulting-demos.squarespace.com/payment-processor-icons?password=twcdemos
[5]: http://www.tomsWeb.consulting/contact
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
