(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('leafletGestureHandling', ['exports'], factory) :
    (factory((global.leafletGestureHandling = {})));
}(this, (function (exports) { 'use strict';

    var LanguageContent = {
        //Arabic
        ar: {
            touch: "\u0627\u0633\u062a\u062e\u062f\u0645 \u0625\u0635\u0628\u0639\u064a\u0646 \u0644\u062a\u062d\u0631\u064a\u0643 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
            scroll: "\u200f\u0627\u0633\u062a\u062e\u062f\u0645 ctrl + scroll \u0644\u062a\u0635\u063a\u064a\u0631/\u062a\u0643\u0628\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
            scrollMac: "\u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u2318 + \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u062a\u0643\u0628\u064a\u0631/\u062a\u0635\u063a\u064a\u0631 \u0627\u0644\u062e\u0631\u064a\u0637\u0629"
        },
        //German
        de: {
            touch: "Verschieben der Karte mit zwei Fingern",
            scroll: "Verwende Strg+Scrollen zum Zoomen der Karte",
            scrollMac: "\u2318"
        },
        //English
        en: {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //English (Australian)
        "en-AU": {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //English (Great Britain)
        "en-GB": {
            touch: "Use two fingers to move the map",
            scroll: "Use ctrl + scroll to zoom the map",
            scrollMac: "Use \u2318 + scroll to zoom the map"
        },
        //Spanish
        es: {
            touch: "Para mover el mapa, utiliza dos dedos",
            scroll: "Mant\u00e9n pulsada la tecla Ctrl mientras te desplazas para acercar o alejar el mapa",
            scrollMac: "Mant\u00e9n pulsada la tecla \u2318 mientras te desplazas para acercar o alejar el mapa"
        },
        //Farsi
        fa: {
            touch: "\u0628\u0631\u0627\u06cc \u062d\u0631\u06a9\u062a \u062f\u0627\u062f\u0646 \u0646\u0642\u0634\u0647 \u0627\u0632 \u062f\u0648 \u0627\u0646\u06af\u0634\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.",
            scroll: "\u200f\u0628\u0631\u0627\u06cc \u0628\u0632\u0631\u06af\u200c\u0646\u0645\u0627\u06cc\u06cc \u0646\u0642\u0634\u0647 \u0627\u0632 ctrl + scroll \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f",
            scrollMac: "\u0628\u0631\u0627\u06cc \u0628\u0632\u0631\u06af\u200c\u0646\u0645\u0627\u06cc\u06cc \u0646\u0642\u0634\u0647\u060c \u0627\u0632 \u2318 + \u067e\u06cc\u0645\u0627\u06cc\u0634 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."
        },
        //French
        fr: {
            touch: "Utilisez deux\u00a0doigts pour d\u00e9placer la carte",
            scroll: "Vous pouvez zoomer sur la carte \u00e0 l'aide de CTRL+Molette de d\u00e9filement",
            scrollMac: "Vous pouvez zoomer sur la carte \u00e0 l'aide de \u2318+Molette de d\u00e9filement"
        },
        //Italian
        it: {
            touch: "Utilizza due dita per spostare la mappa",
            scroll: "Utilizza CTRL + scorrimento per eseguire lo zoom della mappa",
            scrollMac: "Utilizza \u2318 + scorrimento per eseguire lo zoom della mappa"
        },
        //Russian
        ru: {
            touch: "\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443, \u043f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e \u043d\u0435\u0439 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438",
            scroll: "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0443, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0448\u0443 Ctrl.",
            scrollMac: "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u2318\u00a0+ \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430"
        },
        //Turkish
        tr: {
            touch: "Haritada gezinmek i\u00e7in iki parma\u011f\u0131n\u0131z\u0131 kullan\u0131n",
            scroll: "Haritay\u0131 yak\u0131nla\u015ft\u0131rmak i\u00e7in ctrl + kayd\u0131rma kombinasyonunu kullan\u0131n",
            scrollMac: "Haritay\u0131 yak\u0131nla\u015ft\u0131rmak i\u00e7in \u2318 tu\u015funa bas\u0131p ekran\u0131 kayd\u0131r\u0131n"
        }
    };

    /*
    * * Leaflet Gesture Handling **
    * * Version 1.1.8
    */

    L.Map.mergeOptions({
        gestureHandlingOptions: {
            text: {},
            locale: 'en',
            duration: 1000
        }
    });

    var draggingMap = false;

    var GestureHandling = L.Handler.extend({
        addHooks: function () {
            this._handleTouch = this._handleTouch.bind(this);

            this._setupPluginOptions();
            this._setLanguageContent();
            this._disableInteractions();

            //Uses native event listeners instead of L.DomEvent due to issues with Android touch events
            //turning into pointer events
            this._map._container.addEventListener("touchstart", this._handleTouch);
            this._map._container.addEventListener("touchmove", this._handleTouch);
            this._map._container.addEventListener("touchend", this._handleTouch);
            this._map._container.addEventListener("touchcancel", this._handleTouch);
            this._map._container.addEventListener("click", this._handleTouch);

            L.DomEvent.on(this._map._container, "mousewheel", this._handleScroll, this);
            L.DomEvent.on(this._map, "mouseover", this._handleMouseOver, this);
            L.DomEvent.on(this._map, "mouseout", this._handleMouseOut, this);

            // Listen to these events so will not disable dragging if the user moves the mouse out the boundary of the map container whilst actively dragging the map.
            L.DomEvent.on(this._map, "movestart", this._handleDragging, this);
            L.DomEvent.on(this._map, "move", this._handleDragging, this);
            L.DomEvent.on(this._map, "moveend", this._handleDragging, this);
        },

        removeHooks: function () {
            this._enableInteractions();

            this._map._container.removeEventListener("touchstart", this._handleTouch);
            this._map._container.removeEventListener("touchmove", this._handleTouch);
            this._map._container.removeEventListener("touchend", this._handleTouch);
            this._map._container.removeEventListener("touchcancel", this._handleTouch);
            this._map._container.removeEventListener("click", this._handleTouch);

            L.DomEvent.off(this._map._container, "mousewheel", this._handleScroll, this);
            L.DomEvent.off(this._map, "mouseover", this._handleMouseOver, this);
            L.DomEvent.off(this._map, "mouseout", this._handleMouseOut, this);

            L.DomEvent.off(this._map, "movestart", this._handleDragging, this);
            L.DomEvent.off(this._map, "move", this._handleDragging, this);
            L.DomEvent.off(this._map, "moveend", this._handleDragging, this);
        },

        _handleDragging: function (e) {
            if (e.type == "movestart" || e.type == "move") {
                draggingMap = true;
            } else if (e.type == "moveend") {
                draggingMap = false;
            }
        },

        _disableInteractions: function () {
            this._map.dragging.disable();
            this._map.scrollWheelZoom.disable();
            if (this._map.tap) {
                this._map.tap.disable();
            }
        },

        _enableInteractions: function () {
            this._map.dragging.enable();
            this._map.scrollWheelZoom.enable();
            if (this._map.tap) {
                this._map.tap.enable();
            }
        },

        _setupPluginOptions: function () {
            //For backwards compatibility, merge gestureHandlingText into the new options object
            if (this._map.options.gestureHandlingText) {
                this._map.options.gestureHandlingOptions.text = this._map.options.gestureHandlingText;
            }
        },

        _setLanguageContent: function () {
            var languageContent;
            //If user has supplied custom language, use that
            if (this._map.options.gestureHandlingOptions && this._map.options.gestureHandlingOptions.text && this._map.options.gestureHandlingOptions.text.touch && this._map.options.gestureHandlingOptions.text.scroll && this._map.options.gestureHandlingOptions.text.scrollMac) {
                languageContent = this._map.options.gestureHandlingOptions.text;
            } else {
                //Otherwise auto set it from the language files

                //Determine their language e.g fr or en-US
                var lang = this._getUserLanguage();

                //If we couldn't find it default to en
                if (!lang) {
                    lang = "en";
                }

                //Lookup the appropriate language content
                if (LanguageContent[lang]) {
                    languageContent = LanguageContent[lang];
                }

                //If no result, try searching by the first part only. e.g en-US just use en.
                if (!languageContent && lang.indexOf("-") !== -1) {
                    lang = lang.split("-")[0];
                    languageContent = LanguageContent[lang];
                }

                if (!languageContent) {
                    // If still nothing, default to English
                    // console.log("No lang found for", lang);
                    lang = "en";
                    languageContent = LanguageContent[lang];
                }
            }

            //TEST
            // languageContent = LanguageContent["bg"];

            //Check if they're on a mac for display of command instead of ctrl
            var mac = false;
            if (navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
                mac = true;
            }

            var scrollContent = languageContent.scroll;
            if (mac) {
                scrollContent = languageContent.scrollMac;
            }

            this._map._container.setAttribute("data-gesture-handling-touch-content", languageContent.touch);
            this._map._container.setAttribute("data-gesture-handling-scroll-content", scrollContent);
        },

        _getUserLanguage: function () {
            var lang = this._map.options.gestureHandlingOptions.locale ? this._map.options.gestureHandlingOptions.locale : navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
            return lang;
        },

        _handleTouch: function (e) {
            //Disregard touch events on the minimap if present
            var ignoreList = ["leaflet-control-minimap", "leaflet-interactive", "leaflet-popup-content", "leaflet-popup-content-wrapper", "leaflet-popup-close-button", "leaflet-control-zoom-in", "leaflet-control-zoom-out"];

            var ignoreElement = false;
            for (var i = 0; i < ignoreList.length; i++) {
                if (L.DomUtil.hasClass(e.target, ignoreList[i])) {
                    ignoreElement = true;
                }
            }

            if (ignoreElement) {
                if (L.DomUtil.hasClass(e.target, "leaflet-interactive") && e.type === "touchmove" && e.touches.length === 1) {
                    L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                    this._disableInteractions();
                } else {
                    L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                }
                return;
            }
            // screenLog(e.type+' '+e.touches.length);
            if (e.type !== "touchmove" && e.type !== "touchstart") {
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                return;
            }
            if (e.touches.length === 1) {
                L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-touch-warning");
                this._disableInteractions();
            } else {
                this._enableInteractions();
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-touch-warning");
            }
        },

        _isScrolling: false,

        _handleScroll: function (e) {
            if (e.metaKey || e.ctrlKey) {
                e.preventDefault();
                L.DomUtil.removeClass(this._map._container, "leaflet-gesture-handling-scroll-warning");
                this._map.scrollWheelZoom.enable();
            } else {
                L.DomUtil.addClass(this._map._container, "leaflet-gesture-handling-scroll-warning");
                this._map.scrollWheelZoom.disable();

                clearTimeout(this._isScrolling);

                // Set a timeout to run after scrolling ends
                this._isScrolling = setTimeout(function () {
                    // Run the callback
                    var warnings = document.getElementsByClassName("leaflet-gesture-handling-scroll-warning");
                    for (var i = 0; i < warnings.length; i++) {
                        L.DomUtil.removeClass(warnings[i], "leaflet-gesture-handling-scroll-warning");
                    }
                }, this._map.options.gestureHandlingOptions.duration);
            }
        },

        _handleMouseOver: function (e) {
            this._enableInteractions();
        },

        _handleMouseOut: function (e) {
            if (!draggingMap) {
                this._disableInteractions();
            }
        }

    });

    L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

    exports.GestureHandling = GestureHandling;
    exports.default = GestureHandling;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
