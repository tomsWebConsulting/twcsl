          /*
          
            footer page sections after page sections
            
            License         : < https://tinyurl.com/s872fb68 >
            
            SS Version      : 7.1
            
            Note            : to each footer section you want to move add a code
                              block with the following html
                              
                              <x-twc-fpsmtp />
            
            Copyright       : 2022-2026 Thomas Creedon
                              
                              Tom's Web Consulting
                              
                              < http://www.tomsWeb.consulting/ >
            
            */
            
          '#footer-sections [ data-test = "page-section" ]:has( x-twc-fpsmtp )' : {
          
            // optional - sourceAncestorSelector, use when you want to first find
            // a source element but then manipulate an ancestor element
            
            sourceAncestorSelector : '[ optional - enter source ancestor selector here between single quotes replacing square brackets ]',
            
            // sourceCopy when true will make a copy of the source element and use
            // it instead of the actual sourceSelector. value is false or true
            
            sourceCopy : false,
            
            // destinationSelector, use the selector x-twc-em-source to use the
            // sourceSelector as the destination
            
            destinationSelector : '#page-regions .page-section:last-child',
            
            // optional - destinationAncestorSelector, use when you want to first
            // find a destination element but then manipulate an ancestor element
            
            destinationAncestorSelector : '[ enter optional destination ancestor selector here between single quotes replacing square brackets ]',
            
            // optional - rootSelector, use when you want the source and
            // destination elements to have a common ancestor element
            
            rootSelector : '[ optional - enter root selector here between single quotes replacing square brackets ]',
            
            // action value is after, append, before, prepend or replace
            
            action : 'after',
            
            // repeat is a number. the number of times to repeat this specific
            // element manipulation
            
            repeat : 1,
            
            // onEditModeRemove value is true or false. when true the source
            // element will be removed
            
            onEditModeRemove : false,
            
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
            
