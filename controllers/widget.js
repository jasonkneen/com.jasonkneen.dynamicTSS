
// add our main event listener
Ti.Gesture.addEventListener("orientationchange", applyOrientiation);

if ( typeof (__parentSymbol.close) == "function") {
    __parentSymbol.addEventListener('close', function() {
        Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
    });
}

function applyOrientiation() {

    function updateControls(children) {

        // defaults
        var orientName = "portrait", lastOrientName = "landscape";


        // override defaults based on orientation
        if ((Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) || (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT)) {
            orientName = "landscape";
            lastOrientName = "portrait";
        }

        // Iterate controls
        if (children) {
            children.forEach(function(control) {

                // nullify any properties we just set/used and 
                // delete them
                for (var property in control[lastOrientName]) {
                    control[property] = null;
                    delete control[property];
                }

                // apply the new orientation
                if (control[orientName]) {
                    control.applyProperties(control[orientName]);
                }
                
                // think about the children!
                updateControls(control.views || control.children);
            });
        }
    }
    
    // initial call, wrap in an array
    updateControls([__parentSymbol]);
}

// init
applyOrientiation();

// manual function if needed to refresh
exports.refresh = function() {
    applyOrientiation();
}
