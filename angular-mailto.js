/*
 * angular-mailto
 * (c) 2014 Stefan Henze, UpdateZen
 * License: MIT
 *
 * via http://stackoverflow.com/questions/10356329/mailto-link-multiple-body-lines,
 *     http://email.about.com/library/misc/blmailto_encoder.htm,
 *     http://email.about.com/od/mailtoemaillinks/a/mailto_elements.htm
 */

'use strict';
/*global angular*/

angular.module('uz.mailto', [])

.factory('Mailto', [function() {
	var api = {};

	/**
	 * Returns a URL for a mailto-link
	 * @param  {String} recepient    - Recepient email address
	 * @param  {Object} opts         - Options to construct the URL
	 * @param  {String} opts.cc      - Cc recepient email address (optional)
	 * @param  {String} opts.bcc     - Bcc recepient email address (optional)
	 * @param  {String} opts.subject - Email subject (optional)
	 * @param  {String} opts.body    - Email body (optional). Separate lines with the newline character (\n)
	 * @return {String}              - Returns the URL to put into the href-attribute of a mailto link
	 */
	api.url = function(recepient, opts) {
		var link = "mailto:";
		link += window.encodeURIComponent(recepient);
		var params = [];
		angular.forEach(opts, function(value, key) {
			params.push(key.toLowerCase() + "=" + window.encodeURIComponent(value));
		});
		if (params.length > 0) {
			link += "?" + params.join("&");
		}
		return link;
	};

	return api;
}])

;
