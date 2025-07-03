Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-accordion gov-accordion-no-bottom ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'"  data-module="govuk-accordion" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\r\n    ';
 if (ctx.component.collapsible) { ;
__p += '\r\n    <div class="govuk-accordion__section ' +
((__t = (!ctx.collapsed ? 'govuk-accordion__section--expanded': '')) == null ? '' : __t) +
'">\r\n        <div class="govuk-accordion__section-header" ref="header">\r\n            <h3 class="govuk-accordion__section-heading">\r\n                <span class="govuk-accordion__section-button" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading">\r\n                   ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n                </span>\r\n                <span class="govuk-accordion__icon"></span>\r\n            </h3>\r\n        </div>\r\n        ';
 if (!ctx.collapsed ) { ;
__p += '\r\n        <div id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-content"\r\n             aria-labelledby="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading"\r\n             class="govuk-accordion__section-content" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n            ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n        </div>\r\n        ';
 } ;
__p += '\r\n    </div>\r\n    ';
 } else { ;
__p += '\r\n    <div class="govuk-accordion__section govuk-accordion__section--expanded">\r\n        <div class="govuk-accordion__section-header" ref="header">\r\n            <h3 class="govuk-accordion__section-heading">\r\n                <span class="govuk-accordion__section-button" id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading">\r\n                   ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n                </span>\r\n            </h3>\r\n        </div>\r\n        <div class="govuk-accordion__section-content"\r\n             id="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-content"\r\n             aria-labelledby="accordion-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-heading"\r\n             ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n            ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n        </div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}