{% load i18n %}
L.drawLocal.draw.toolbar.actions.title = "{% trans "Cancel drawing" %}";
L.drawLocal.draw.toolbar.actions.text = "{% trans "Cancel" %}";
L.drawLocal.draw.toolbar.undo.title = "{% trans "Delete last point drawn" %}";
L.drawLocal.draw.toolbar.undo.text = "{% trans "Delete last point" %}";
L.drawLocal.draw.toolbar.buttons.polyline = "{% trans "Draw a polyline" %}";
L.drawLocal.draw.toolbar.buttons.polygon = "{% trans "Draw a polygon" %}";
L.drawLocal.draw.toolbar.buttons.rectangle = "{% trans "Draw a rectangle" %}";
L.drawLocal.draw.toolbar.buttons.circle = "{% trans "Draw a circle" %}";
L.drawLocal.draw.toolbar.buttons.circlemarker = "{% trans "Draw a circle" %}";
L.drawLocal.draw.toolbar.buttons.marker = "{% trans "Draw a marker" %}";
L.drawLocal.draw.handlers.circle.tooltip.start = "{% trans "Click and drag to draw circle." %}";
L.drawLocal.draw.handlers.marker.tooltip.start = "{% trans "Click map to place marker." %}";
L.drawLocal.draw.handlers.circlemarker.tooltip.start = "{% trans "Click and drag to draw circle." %}";
L.drawLocal.draw.handlers.polygon.tooltip.start = "{% trans "Click to start drawing shape." %}";
L.drawLocal.draw.handlers.polygon.tooltip.cont = "{% trans "Click to continue drawing shape." %}";
L.drawLocal.draw.handlers.polygon.tooltip.end = "{% trans "Click first point to close this shape." %}";
L.drawLocal.draw.handlers.polyline.error = "{% trans "<strong>Error:</strong> shape edges cannot cross!" %}";
L.drawLocal.draw.handlers.polyline.tooltip.start = "{% trans "Click to start drawing line." %}";
L.drawLocal.draw.handlers.polyline.tooltip.cont = "{% trans "Click to continue drawing line." %}";
L.drawLocal.draw.handlers.polyline.tooltip.end = "{% trans "Click last point to finish line." %}";
L.drawLocal.draw.handlers.rectangle.tooltip.start = "{% trans "Click and drag to draw rectangle." %}";
L.drawLocal.draw.handlers.simpleshape.tooltip.end = "{% trans "Release mouse to finish drawing." %}";


L.drawLocal.edit.toolbar.actions.save.title = "{% trans "Save changes." %}";
L.drawLocal.edit.toolbar.actions.save.text = "{% trans "Save" %}";
L.drawLocal.edit.toolbar.actions.cancel.title = "{% trans "Cancel editing, discards all changes." %}";
L.drawLocal.edit.toolbar.actions.cancel.text = "{% trans "Cancel" %}";
L.drawLocal.edit.toolbar.buttons.edit = "{% trans "Edit layers" %}";
L.drawLocal.edit.toolbar.buttons.editDisabled = "{% trans "No layers to edit." %}";
L.drawLocal.edit.toolbar.buttons.remove = "{% trans "Delete layers" %}";
L.drawLocal.edit.toolbar.buttons.removeDisabled = "{% trans "No layers to delete." %}";
L.drawLocal.edit.handlers.edit.tooltip.text = "{% trans "Drag handles, or marker to edit feature." %}";
L.drawLocal.edit.handlers.edit.tooltip.subtext = "{% trans "Click cancel to undo changes." %}";
L.drawLocal.edit.handlers.remove.tooltip.text = "{% trans "Click on a feature to remove" %}";

