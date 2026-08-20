# Overlay Modal Dialog

### [License][1]

### Synopsis

Simple overlay modal dialog module.

### Version

  * 0.2.0

#### SS Version

  * 7.1

---

## How to Use

The [overlay modal dialog][2] module is installed via a dependency‑injected
IIFE. Pass in the window context where you want the overlay module to be
attached.

```JavaScript
( ( wndw ) => {

  wndw.twcOverlayModalDialog = ( ( ) => {
  
    // module internals
    
    } ) ( );
    
  } ) ( /* window context goes here */ );
```

Replace /* window context goes here */ with the browsing context you want to
target (e.g., window, iframe.contentWindow, etc.). The module will be attached
to a window context.

### Window Context Examples

```JavaScript
window
```

```JavaScript
var wndw = document

  .querySelector (
  
    'iframe[ data-testid = "sqs-site-frame" ]'
    
    )
    
  .contentWindow;
```

You can then call its methods from that same window context.

### Methods

  * twcOverlayModalDialog.close
  
  * twcOverlayModalDialog.setMessage
  
    this method updates the message in the dialog
  
  * twcOverlayModalDialog.setTitle
  
  * twcOverlayModalDialog.showMessage
  
    this method brings up the dialog
    
  * twcOverlayModalDialog.showProgress
  
    this method is a stub for potential future development

# Design Rationale

This module uses a dependency‑injected double‑IIFE pattern designed specifically
for bookmarklet environments. Bookmarklets execute in the top‑level browsing
context, but often need to interact with a different window (e.g., an iframe's
contentWindow). Because bookmarklets have no build step, no module loader, and
no isolation, the module must be able to install itself directly into an
arbitrary window context at runtime.

The outer IIFE accepts a window context:

```JavaScript
( ( wndw ) => {

  wndw.twcOverlayModalDialog = ( ( ) => {
  
    // module internals
    
    } ) ( );
    
  } ) ( /* window context goes here */ );
```

This allows the caller to determine exactly where the module is installed. The
module does not assume window, does not assume window.top, and does not attempt
to locate frames internally. This avoids hard‑coding environment assumptions and
makes the module portable across:

* main page windows

* iframe browsing contexts

* embedded editors

* synthetic windows used for testing

The inner IIFE constructs the module instance and attaches it directly to the
provided window. This avoids global leakage in the bookmarklet's execution
context and ensures the module lives inside the same DOM/CSS environment where
its UI will be rendered.

This pattern is intentionally simple and avoids any external dependencies. It is
optimized for bookmarklets, where:

* code must be self‑contained

* initialization must be synchronous

* UI must be injected into an existing DOM

* the target window may vary per use case

* developers often need to adapt the module to different frames

The result is a lightweight, frame‑agnostic installer that gives developers full
control over where the module is deployed.

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2026-08-15**

  * fixed dialog layout
  * bumped version to 0.2.0
  
* **2026-08-01**

  * fixed syntax error
  * bumped version to 0.1.1
  
* **2026-08-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: overlay%20modal%20dialog.js#L1
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
