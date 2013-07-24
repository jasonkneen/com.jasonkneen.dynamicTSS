# Dynamic TSS Widget
## Overview
This is a widget for the [Appcelerator](http://www.appcelerator.com) [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework which provides dynamic TSS styling on device rotation.

## Features
* Simply drop the widget into your view XML file
* Uses existing TSS files / definitions
* Add "landscape" and "portrait" substyles to your existing TSS
* Works on Android, iOS

## Quick Start
* [Download the latest version](https://github.com/jasonkneen/com.jasonkneen.dynamicTSS) of the widget as a ZIP file.
* Unzip the folder to your project under `app/widgets/com.jasonkneen.dynamicTSS`.
* Add the widget as a dependency to your `app/config.json` file:

```javascript
"dependencies": {
	"com.jasonkneen.dynamicTSS":"1.0"
}
```

* Add the widget as the last item in the view container you want to apply dynamic styles too, so your main window or view, just above the closing Window or View tags.

```xml
<Alloy>
    <TabGroup>
        <Tab title="Tab 1" icon="KS_nav_ui.png">
            <Window title="Tab 1">
                <Label>I am Window 1</Label>
                <Widget src="com.jasonkneen.dynamicTSS"/>
            </Window>
        </Tab>
        <Tab title="Tab 2" icon="KS_nav_views.png">
            <Window title="Tab 2">
                <View>
                    <Label>I am Window 2</Label>
                    <Widget src="com.jasonkneen.dynamicTSS"/>
                </View>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

That's it. You simply edit your TSS files to add the portrait and landscape styles e.g.

```javascript
"Label": {
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	color: "#000",
	font: {
		fontSize: 20,
		fontFamily: 'Helvetica Neue'
	},
	textAlign: 'center',
	landscape: {		
		left: 10
	},
	portrait: {		
		right: 10
	}
} 
```

## License

<pre>
Copyright 2013 Jason Kneen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>