        /*
        
          store page detail additional info footer section append
          
          License     : < https://tinyurl.com/s872fb68 >
          
          Version     : 0.3.0
          
          SS Version  : 7.1
          
          Copyright   : 2021-2025 Thomas Creedon
                        
                        Tom's Web Consulting < http://www.tomsWeb.consulting/ >
          
          */
          
        '#footer-sections [ data-test="page-section" ]:has( x-twc-fsspdaia )' : {
        
          // sourceAncestorSelector is optional, use when you want to first find
          // a source element but then work up the ancestor hierarchy to
          // manipulate an ancestor element
          
          sourceAncestorSelector : '[ enter optional source ancestor selector here between single quotes replacing square brackets ]',
          
          // sourceCopy when true will make a copy of the source element and use
          // it instead of the actual sourceSelector. value is false or true
          
          sourceCopy : true,
          
          // destinationSelector is required. use the selector x-twc-em-source
          // to use the sourceSelector as the destination
          
          destinationSelector : '.product-detail .ProductItem-additional .sqs-grid-12',
          
          // destinationAncestorSelector is optional, use when you want to first
          // find a destination element but then work up the ancestor hierarchy
          // to manipulate an ancestor element
          
          destinationAncestorSelector : '[ enter optional destination ancestor selector here between single quotes replacing square brackets ]',
          
          // rootSelector is optional, use when you want the source and
          // destination elements to have a common ancestor element
          
          rootSelector : '[ enter optional root selector here between single quotes replacing square brackets ]',
          
          // action value is after, append, before, prepend or replace
          
          action : 'append',
          
          // repeat is a number. the number of times to repeat this specific
          // element manipulation
          
          repeat : 1,
          
          // callbacks is optional, use when you want to manipulate the
          // structure of the source element. the value is an array. you can add
          // one or multiple callback names. when adding multiple callback names
          // separate the names with commas. some examples...
          //
          // [ 'callback' ]
          //
          // [ 'callback1', 'callback2', 'callback3' ]
          //
          // your callbacks must accept and return a node
          
          callbacks : [ ]
          
          },
          
