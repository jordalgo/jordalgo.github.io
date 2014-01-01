define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["library/scripts/templates/work.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="work-site">\n\t<div class="site-image" id="' +
((__t = ( site.name )) == null ? '' : __t) +
'">\n\t\t<img src="' +
((__t = ( site.image )) == null ? '' : __t) +
'" class="img-swap" />\n\t</div>\n\t<div class="site-info" id="' +
((__t = ( site.name )) == null ? '' : __t) +
'">\n\t\t<h6>' +
((__t = ( site.name )) == null ? '' : __t) +
'</h6>\n\t\t' +
((__t = ( site.details )) == null ? '' : __t) +
'\n\t\t';
 if (site.designer) { ;
__p += '\n\t\t\t<p>Designed by <a href="' +
((__t = ( site.designer.site )) == null ? '' : __t) +
'">' +
((__t = ( site.designer.name )) == null ? '' : __t) +
'</a></p>\n\t\t';
 } ;
__p += '\n\t\t';
 if (site.link) { ;
__p += '\n\t\t\t<p><a href="' +
((__t = ( site.link.url )) == null ? '' : __t) +
'" title="' +
((__t = ( site.link.name )) == null ? '' : __t) +
'">' +
((__t = ( site.link.text )) == null ? '' : __t) +
'</a></p>\n\t\t';
 } ;
__p += '\n\t</div>\n</div>';

}
return __p
};

  return this["JST"];

});