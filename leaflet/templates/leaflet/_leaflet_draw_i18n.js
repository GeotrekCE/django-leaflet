{% load i18n %}
L.drawLocal = {
    draw: {
        toolbar: {
            actions: {
                title: '{% trans "Cancel drawing" %}',
                text: '{% trans "Cancel" %}'
            },
            finish: {
                title: '{% trans "Finish drawing" %}',
                text: '{% trans "Finish" %}'
            },
            undo: {
                title: '{% trans "Delete last point drawn" %}',
                text: '{% trans "Delete last point" %}'
            },
            buttons: {
                polyline: '{% trans "Draw a polyline" %}',
                polygon: '{% trans "Draw a polygon" %}',
                rectangle: '{% trans "Draw a rectangle" %}',
                circle: '{% trans "Draw a circle" %}',
                marker: '{% trans "Draw a marker" %}',
                circlemarker: '{% trans "Draw a circlemarker" %}'
            }
        },
        handlers: {
            circle: {
                tooltip: {
                    start: '{% trans "Click and drag to draw circle." %}'
                },
                radius: '{% trans "Radius" %}'
            },
            circlemarker: {
                tooltip: {
                    start: '{% trans "Click map to place circle marker." %}'
                }
            },
            marker: {
                tooltip: {
                    start: '{% trans "Click map to place marker." %}'
                }
            },
            polygon: {
                tooltip: {
                    start: '{% trans "Click to start drawing shape." %}',
                    cont: '{% trans "Click to continue drawing shape." %}',
                    end: '{% trans "Click first point to close this shape." %}'
                }
            },
            polyline: {
                error: '{% trans "<strong>Error:</strong> shape edges cannot cross!" %}',
                tooltip: {
                    start: '{% trans "Click to start drawing line." %}',
                    cont: '{% trans "Click to continue drawing line." %}',
                    end: '{% trans "Click last point to finish line." %}'
                }
            },
            rectangle: {
                tooltip: {
                    start: '{% trans "Click and drag to draw rectangle." %}'
                }
            },
            simpleshape: {
                tooltip: {
                    end: '{% trans "Release mouse to finish drawing." %}'
                }
            }
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {
                    title: '{% trans "Save changes" %}',
                    text: '{% trans "Save" %}'
                },
                cancel: {
                    title: '{% trans "Cancel editing, discards all changes" %}',
                    text: '{% trans "Cancel" %}'
                },
                clearAll:{
                    title: '{% trans "Clear all layers" %}',
                    text: '{% trans "Clear All" %}'
                }
            },
            buttons: {
                edit: '{% trans "Edit layers" %}',
                editDisabled: '{% trans "No layers to edit" %}',
                remove: '{% trans "Delete layers" %}',
                removeDisabled: '{% trans "No layers to delete" %}'
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: '{% trans "Drag handles or markers to edit features." %}',
                    subtext: '{% trans "Click cancel to undo changes." %}'
                }
            },
            remove: {
                tooltip: {
                    text: '{% trans "Click on a feature to remove." %}'
                }
            }
        }
    }
};
