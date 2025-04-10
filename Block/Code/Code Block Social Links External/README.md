# Code Block Social Links External

### [License][1]

### Synopsis

Create Social Links for entities outside your site.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Tom's Web Consulting Squarespace Library][5]

---

## Install

* Install [twcsl][6]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[code block social links external.html][7]** to Website >
  Pages > Website Tools > Code Injection > FOOTER. Refer to [Per-page code
  injection][9] for details.
  
* Create a blank page in the Not Linked area and set the PAGE TITLE, NAVIGATION
  TITLE, AND URL SLUG to **twc-cbsle** and add the following to Page Settings >
  Advanced > Page Header Code Injection for the page. Refer to [Per-page code
  injection][8] for details.
  
  ```html
  <meta name="robots" content="noindex" />
  ```
    
  Add a Code block to the page and add the following as the content.
  
  ```html
  <style>
  
    /* 7.1 */
    
    #page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href*="twc-cbsle" ],
    #page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href="mailto:89222753@cbsle.twc" ],
    #page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href="tel:89222753" ],
    #page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href*="twc-cbsle" ],
    #page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href="mailto:89222753@cbsle.twc" ],
    #page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href="tel:89222753" ],
    
    /* 7.0 Brine */
    
    .Main--page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href*="twc-cbsle" ],
    .Main--page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href="mailto:89222753@cbsle.twc" ],
    .Main--page .social-account-links-v2-block .sqs-svg-icon--wrapper[ href="tel:89222753" ],
    .Main--page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href*="twc-cbsle" ],
    .Main--page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href="mailto:89222753@cbsle.twc" ],
    .Main--page .sqs-block-socialaccountlinks-v2 .sqs-svg-icon--wrapper[ href="tel:89222753" ]
    
      {
      
        display : inline-block;
        
        }
        
    </style>
  ```
  
  Add a Social Links block to the page. Add the following social media links to
  your site. For your own social media links you are already using for your site
  needs, you can skip that service in the list.
  
  ```text
  http://discord.gg/twc-cbsle
  
  http://facebook.com/twc-cbsle
  
  http://instagram.com/twc-cbsle
  
  http://linkedin.com/twc-cbsle
  
  http://pinterest.com/twc-cbsle
  
  https://reddit.com/user/twc-cbsle
  
  http://open.spotify.com/artist/twc-cbsle
  
  https://threads.net/@twc-cbsle
  
  http://tiktok.com/@twc-cbsle
  
  http://tumblr.com/twc-cbsle
  
  http://twitch.tv/twc-cbsle
  
  http://twitter.com/twc-cbsle
  
  https://vevo.com/profiles/twc-cbsle
  
  http://x.com/twc-cbsle
  
  http://youtube.com/@twc-cbsle
  
  http://default.com/twc-cbsle
  
  mailto:89222753@cbsle.twc
  
  tel:89222753
  ```
  
  Your site visitors will not be able to see the links in the list.
  
  If the site is v7.1 and the section is a Classic Editor section remove the
  default Text block added by Squarespace.
  
  Save the page.
  
* Add a code block to a page and set the content similarly to the following
  example. You will of course want to customize the links for the external
  entity you want to represent.
  
  ```html
  <x-twc-cbsle>
  
    https://discord.gg/twc-cbsle
    
    https://facebook.com/twc-cbsle
    
    https://instagram.com/twc-cbsle
    
    https://linkedin.com/twc-cbsle
    
    https://pinterest.com/twc-cbsle
    
    https://reddit.com/user/twc-cbsle
    
    http://open.spotify.com/artist/twc-cbsle
    
    https://threads.net/@twc-cbsle
    
    https://tiktok.com/@twc-cbsle
    
    https://tumblr.com/twc-cbsle
    
    https://twitch.tv/twc-cbsle
    
    https://twitter.com/twc-cbsle
    
    https://vevo.com/profiles/twc-cbsle
    
    https://x.com/twc-cbsle
    
    https://youtube.com/twc-cbsle
    
    https://default.com/twc-cbsle
    
    mailto:89222753@cbsle.twc
    
    tel:89222753
    
    </x-twc-cbsle>
  ```

## Notes

The Social Links block Squarespace provides are meant only to provide social
media links for the site's online presense. It is not designed to provide links
for external entities. For example if you were creating a community directory
and wanted to include a Social Links block for each member of the community,
Squarespace can't do it by default. This code provides a method to create
individualized Social Links blocks.

When editing your site you may see the **x-twc-cbsle** tag contents flash for a
moment and then turn into social links. This is normal and won't be seen by your
site visitors.

The code has a cache for storing elements of the Social Links block you added to
the twc-cbsle page you created. The cache is not used when in Squarespace
Preview. The use of a cache means it is possible that the information will
become stale. This effects the design of the social links, not links themselves.
The design will update when the browser session is restared.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2024-12-06**

  * refined the CSS for hiding/showing social links
  * added class name and aria-label to Social Links block link elements
  * bumped version to 0.3.0
  
* **2024-12-05**

  * added support for reddit, threads, and vevo
  * bumped version to 0.2.0
  
* **2024-05-16**

  * added support for spotify
  * bumped version to 0.1.1
  
* **2024-05-15**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl
[6]: https://github.com/tomsWebConsulting/twcsl#install-options
[7]: code%20block%20social%20links%20external.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://toms-web-consulting-demos.squarespace.com/code-block-social-links-external?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
