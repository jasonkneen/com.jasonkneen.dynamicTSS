Ti.Gesture.addEventListener("orientationchange", applyOrientiation);

__parentSymbol.addEventListener('close', function() {
    Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
});

function applyOrientiation() {

    var view = __parentSymbol;

    function updateControls(children) {

        var orientName = "portrait", lastOrientName = "landscape";

        if ((Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) || (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT)) {
            orientName = "landscape";
            lastOrientName = "portrait";
        }
        
       
        if (children) {
            children.forEach(function(control) {

                for (var property in control[lastOrientName]) {
                    control[property] = null;
                }

                if (control[orientName]) {
                    control.applyProperties(control[orientName]);
                }

                updateControls(control.views || control.children);
            });
        }
    }

    updateControls([view]);
}

applyOrientiation();

exports.refresh = function() {
    applyOrientiation();
}
