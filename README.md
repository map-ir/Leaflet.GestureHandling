# Leaflet.GestureHandling

`Version 1.1.9`

Brings the basic functionality of [Google Maps Gesture Handling](https://developers.google.com/maps/documentation/javascript/examples/interaction-cooperative) into Leaflet, and Prevents users from getting trapped on the map when scrolling a long page.

#### On Desktop

![alt text](https://elmarquis.github.io/Leaflet.GestureHandling/examples/images/desktop.png "Desktop")

-   The map ignores the mouse scroll wheel.
-   The user is prompted to use ctrl+scroll to zoom the map.

#### On Mobile / Touch devices

![alt text](https://elmarquis.github.io/Leaflet.GestureHandling/examples/images/mobile.png "Mobile")

-   The map ignores single fingered dragging.
-   The user is prompted to use two fingers to pan the map.

## Demo

[View demo](https://elmarquis.github.io/Leaflet.GestureHandling/examples/)

## Install

The latest leaflet-gesture-handling can be downloaded from the dist folder.

## Usage

Include the *css* and *js* files after `leaflet.js`.

```html
<link rel="stylesheet" href="css/leaflet-gesture-handling.min.css" type="text/css">
<script src="js/leaflet-gesture-handling.min.js"></script>
```

Or load this directly from [jsDelivr](https://www.jsdelivr.com):

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/map-ir/Leaflet.GestureHandling/dist/leaflet-gesture-handling.min.css" type="text/css">
<script src="//cdn.jsdelivr.net/gh/map-ir/Leaflet.GestureHandling/dist/leaflet-gesture-handling.min.js"></script>
```

Then, add **gestureHandling: true** in your map initialization options.

```js
var map = L.map("map", {
    center: [-25.2702, 134.2798],
    zoom: 3,
    gestureHandling: true
});
```

To pass in options use the property: `gestureHandlingOptions`:

## options

### Multi Language and Custom Text

The plugin will auto detect a users language from the browser setting and show the appropriate translation, but if you like to specify the locale, you can do as delow:

```js
var map = L.map("map", {
    center: [-25.2702, 134.2798],
    zoom: 3,
    gestureHandling: true,
    gestureHandlingOptions: {
        locale: 'fa' // 'en' is the default
    }
});
```

also if you wish to override this, you can set your own text by supplying `gestureHandlingOptions` and a `text` option as shown below. You must specify text for `touch`, `scroll` and `scrollMac`.

```js
var map = L.map("map", {
    center: [-25.2702, 134.2798],
    zoom: 3,
    gestureHandling: true,
    gestureHandlingOptions: {
        text: {
            touch: "Hey bro, use two fingers to move the map",
            scroll: "Hey bro, use ctrl + scroll to zoom the map",
            scrollMac: "Hey bro, use \u2318 + scroll to zoom the map"
        }
    }
});
```

*Note: Earlier versions used a property called gestureHandlingText for this which still works. 

### Other Options

- **duration** : (int) time in ms before the message should disappear. default: 1000 (1 sec)

```js
var map = L.map("map", {
    center: [-25.2702, 134.2798],
    zoom: 3,
    gestureHandling: true,
    gestureHandlingOptions: {
        duration: 5000 //5 secs
    }
});
```

#### Useful info

GestureHandling disables the following map attributes.

-   dragging
-   tap
-   scrollWheelZoom

They are temporarily enabled for the duration the user scrolls with ctrl+mousewheel or uses two fingers to pan the map on mobile.

### Compatibility with other plugins

I have added compatibility with [Leaflet-MiniMap](https://github.com/Norkart/Leaflet-MiniMap). It allows the user to still pan around the minimap with a single finger.

If there's any other plugins you'd like this to work with, let me know or submit a pull request.

### License

MIT
