# CALIDC Language Translate

### [License][1]

### Synopsis

Manually translate customer account log in dialogs English (United States)
language to other language not supported by Squarespace.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Customer Account Log In Dialog Change][4]

#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Set Settings > Website > Site Languages > Site Language and Region Format >
  Language / Region to English (United States).
  
* Install [Customer Account Log In Dialog Change][5]. After you install the code
  be sure to continue on with the rest of the steps.
  
* Add the code from file **[calidc language translate.html][6]** to Website >
  Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to code
  injection][7] for details.

* Add code from one of the following language files **before** the **calidc
  language translate** code.
  
  * [English][8] (template)
  
  * [Slovak][9]

## Create Your Own Translations

You can easily create your own translations using the English language template
above. If you do, feel free to [share][10] them with me and let me know which
language they are in. I'll gladly consider incorporating them in future updates.

## Note

The code only supports one translation at a time. It is not Weglot nor other
translation techniques aware.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-06-22**

  * translated more english phrases
  * bumped version to 0.2.0
  
* **2025-06-17**

  * fixed code to get json from body instead of head
  * bumped version to 0.1.1
  
* **2025-04-13**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Customer%20Account/Log%20In%20Dialog/Customer%20Account%20Log%20In%20Dialog%20Change
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Customer%20Account/Log%20In%20Dialog/Customer%20Account%20Log%20In%20Dialog%20Change#customer-account-log-in-dialog-change
[6]: calidc%20language%20translate.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: calidc%20language%20translate%20english.html#L1
[9]: calidc%20language%20translate%20slovak.html#L1
[10]: mailto:tomsWebConsulting@gmail.com?subject=CALIDC%20Language%20Translate&body=%3C!--%20begin%20TWC%20CALIDC%20Language%20Translate%20English%20--%3E%0A%0A%20%20%3C!--%0A%20%20%0A%20%20%20%20calidc%20language%20translate%20english%0A%20%20%20%20%0A%20%20%20%20License%20%20%20%20%20%20%20%3A%20%3C%20https%3A%2F%2Ftinyurl.com%2Fs872fb68%20%3E%0A%20%20%20%20%0A%20%20%20%20Version%20%20%20%20%20%20%20%3A%200.2.0%0A%20%20%20%20%0A%20%20%20%20SS%20Versions%20%20%20%3A%207.1%2C%207.0%0A%20%20%20%20%0A%20%20%20%20Fluid%0A%20%20%20%20Engine%0A%20%20%20%20Compatible%20%20%20%20%3A%20Not%20Applicable%0A%20%20%20%20%0A%20%20%20%20Dependencies%20%20%3A%20Customer%20Account%20Log%20In%20Dialog%20Change%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%20https%3A%2F%2Ftinyurl.com%2Fvs5n4tpd%20%3E%0A%20%20%20%20%0A%20%20%20%20Copyright%20%20%20%20%20%3A%202025%20Thomas%20Creedon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Tom's%20Web%20Consulting%20%3C%20http%3A%2F%2Fwww.tomsWeb.consulting%2F%20%3E%0A%20%20%20%20%0A%20%20%20%20--%3E%0A%20%20%20%20%0A%20%20%3Cscript%20type%3D%22application%2Fvnd.twc.clt%22%3E%0A%20%20%0A%20%20%20%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20English%20to%20%5B%20enter%20the%20language%20here%20replacing%20square%20brackets%20%5D%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Already%20have%20an%20account%3F%20Sign%20in%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Back%20to%20sign%20in%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22By%20joining%2C%20you%20may%20receive%20emails%20and%20updates%20related%20to%20your%20account.%20You%20can%20unsubscribe%20at%20anytime.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Create%20account%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Create%20an%20account%20to%20unlock%20exclusive%20content.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Create%20Password%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22First%20Name%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Forgot%20Password%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Last%20Name%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Not%20you%3F%20Sign%20out%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Password%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Passwords%20do%20not%20match%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Please%20sign%20in%20again%20to%20access%20your%20account%20information.%20Your%20session%20has%20expired.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Re-type%20Password%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Reset%20Link%20Sent%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Reset%20Password%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Send%20Reset%20Link%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Sending%20reset%20link%E2%80%A6%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Sign%20In%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Sign%20in%20to%20unlock%20exclusive%20content.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%2F%2F%20note%20the%20space%20at%20the%20end%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Sign%20in%20with%20%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22You%20entered%20an%20invalid%20email%20or%20password.%20Please%20try%20again.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%2C%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%22Your%20account%20has%20been%20verified%20successfully.%22%20%3A%20%22%5B%20enter%20translated%20english%20phrase%20here%20between%20double%20quotes%20replacing%20square%20brackets%20%5D%22%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%3C%2Fscript%3E%0A%20%20%20%20%0A%20%20%3C!--%20end%20TWC%20CALIDC%20Language%20Translate%20English%20--%3E%0A
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
