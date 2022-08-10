# Calendar Block Multi Day Event First Day Class Add

### Version 0.1.1

#### SS Version 7.1

#### Fluid Engine Compatible : Yes

---

## Quick Install

* Install the code from **[Calendar Block Event Change][1]**.
  
* Add code from file **[calendar block multi day event first day class
  add.html][2]** to Page Settings > Advanced > Page Header Code Injection for
  the page **before** the **calendar block event change** code. Read the code
  for any instructions within.
  
* In the **calendar block event change** code set the constant itemCallback to
  **cbmdefdca**.
  
  ```javascript
  const itemFlyOutCallbacks = [
  
    cbmdefdca,
    
    ];
  ```

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2021-08-09**

  * fix for first day of multi day event not spanning two days because of local
    time zone
  * bumped version to 0.1.1
  
* **2022-08-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Calendar%20Block%20Event%20Change#calendar-block-event-change
[2]: calendar%20block%20multi%20day%20event%20first%20day%20class%20add.html#L1
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
