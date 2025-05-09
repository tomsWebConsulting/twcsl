# Announcement Bar Observe Changes

### [License][1]

### Synopsis

Observe announcement bar changes.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Add code from file **[announcement bar observe changes.html][4]** to Website >
  Pages > Custom Code > Code Injection > FOOTER. Refer to [Per-page code
  injection][5] for details.
  
* Read the code for any instructions within.
  
* Add your custom callback names to the code. Your callbacks must be installed
  before the code.

## Example Callbacks

Following are example callbacks. They don't do anything except log to the
console nodes that were added or removed to/from the announcement bar dropzone.
Note the use of var.

```html
<script>

  var abocNodeAddedLog = ( node ) => {
  
    console.log ( 'abocNodeAddedLog : ', node );
    
    };
    
  </script>
```

```html
<script>

  var abocNodeRemovedLog = ( node ) => {
  
    console.log ( 'abocNodeRemovedLog : ', node );
    
    };
    
  </script>
```

## Make a Donation

Please consider [making a donation][6].

## Changes

<!-- * **2022-02-25**

  * changed a const name, no functional changes
  * added example callback to read me
  * bumped version to 0.1d1
  -->
* **2024-06-10**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: announcement%20bar%20observe%20changes.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
