        /*
        
          store page detail footer section append
          
          License         : < https://tinyurl.com/s872fb68 >
          
          Version         : 0.2.0
          
          SS Version      : 7.1
          
          Products V2
          Compatible      : Yes
          
          Fluid
          Engine
          Compatible      : Yes
          
          Copyright       : 2023-2025 Thomas Creedon
                            
                            Tom's Web Consulting
                            
                            < http://www.tomsWeb.consulting/ >
          
          */
          
        'body.collection-type-products.view-item #footer-sections section[ data-test="page-section" ]:has( x-twc-spdfsa )' : {
        
          // optional - sourceAncestorSelector, use when you want to first find
          // a source element but then manipulate an ancestor element
          
          sourceAncestorSelector : '[ optional - enter source ancestor selector here between single quotes replacing square brackets ]',
          
          // sourceCopy when true will make a copy of the source element and use
          // it instead of the actual sourceSelector. value is false or true
          
          sourceCopy : true,
          
          // destinationSelector, use the selector x-twc-em-source to use the
          // sourceSelector as the destination
          
          destinationSelector : '#page-regions',
          
          // optional - destinationAncestorSelector, use when you want to first
          // find a destination element but then manipulate an ancestor element
          
          destinationAncestorSelector : '[ enter optional destination ancestor selector here between single quotes replacing square brackets ]',
          
          // optional - rootSelector, use when you want the source and
          // destination elements to have a common ancestor element
          
          rootSelector : '[ optional - enter root selector here between single quotes replacing square brackets ]',
          
          // action value is after, append, before, prepend or replace
          
          action : 'append',
          
          // repeat is a number. the number of times to repeat this specific
          // element manipulation
          
          repeat : 1,
          
          // onEditModeRemove value is true or false. when true the source
          // element will be removed
          
          onEditModeRemove : true,
          
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
          
