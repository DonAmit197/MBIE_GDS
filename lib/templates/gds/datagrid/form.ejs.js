Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<!-- @format -->\n\n<div class="' +
((__t = ( ctx.component.customClass )) == null ? '' : __t) +
'" ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-tbody">\n  ';
 if (ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n  <button\n    class="govuk-button govuk-button--secondary"\n    aria-label="' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'"\n    ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\n    ' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'\n  </button>\n  ';
 } ;
__p += ' ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\n  <div ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-row" class="govuk-grid-row">\n    <div class="govuk-grid-column-full">\n      <div class="govuk-grid-row">\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <div\n          class="govuk-column"\n          ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'"\n          data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'">\n          ';
 if (!ctx.component.hideLabel) { ;
__p += '\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\n          ';
 } ;
__p += '\n          ' +
((__t = ( row[col.key] )) == null ? '' : __t) +
'\n        </div>\n        ';
 }) ;
__p += '\n      </div>\n      <div class="govuk-grid-row govuk-!-margin-top-3">\n        <div class="govuk-grid-column-full">\n          ';
 if (ctx.component.reorder) { ;
__p += '\n          <button\n            aria-label="' +
((__t = (
              ctx.t(
                ctx.component.properties['reorderItemLabel'] || 'Reorder item'
              )
            )) == null ? '' : __t) +
'"\n            type="button"\n            title="' +
((__t = (
              ctx.t(
                ctx.component.properties['reorderItemLabel'] || 'Reorder item'
              )
            )) == null ? '' : __t) +
'"\n            class="formio-drag-button govuk-button govuk-button--secondary">\n            ' +
((__t = (
              ctx.t(ctx.component.properties['reorderItemLabel'] || 'Reorder')
            )) == null ? '' : __t) +
'\n          </button>\n          ';
 } ;
__p += ' ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\n          <button\n            aria-label="' +
((__t = (
              ctx.t(
                ctx.component.properties['removeItemLabel'] || 'Remove item'
              )
            )) == null ? '' : __t) +
'"\n            title="' +
((__t = (
              ctx.t(
                ctx.component.properties['removeItemLabel'] || 'Remove item'
              )
            )) == null ? '' : __t) +
'"\n            type="button"\n            class="govuk-button govuk-button--warning"\n            ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-removeRow">\n            ' +
((__t = ( ctx.t(ctx.component.properties['removeItemLabel'] || 'Remove') )) == null ? '' : __t) +
'\n          </button>\n          ';
 } ;
__p += '\n        </div>\n      </div>\n      <hr class="dataGrid-hr" />\n    </div>\n  </div>\n  ';
 }) ;
__p += ' ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n  <button\n    class="govuk-button govuk-button--secondary"\n    aria-label="' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'"\n    ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\n    ' +
((__t = ( ctx.t(ctx.component.addAnother || 'Add Another') )) == null ? '' : __t) +
'\n  </button>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}