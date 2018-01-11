import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor(els, offset) {
		// Collection of elements, the order here is important
		this.itemsToReveal = els;
		this.offsetPercentaje = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		var that = this;
		// One waypoint for each element
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem, 
				handler: function() {
					$(currentItem).addClass('reveal-item--is-visible');
				}, 
				offset: that.offsetPercentaje
			});
		});

	}

}

export default RevealOnScroll;