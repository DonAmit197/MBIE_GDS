Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<!-- @format -->\n\n<table\n  class="table datagrid-table table-bordered\n    ' +
((__t = ( ctx.component.striped ? 'table-striped' : '' )) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.hover ? 'table-hover' : '' )) == null ? '' : __t) +
'\n    ' +
((__t = ( ctx.component.condensed ? 'table-condensed' : '' )) == null ? '' : __t) +
'\n    "\n  ';

  if
  (ctx.component.layoutFixed)
  {
  ;
__p += 'style="table-layout: fixed;"\n  ';

  }
  ;
__p += '>\n  ';
 if (ctx.hasHeader) { ;
__p += '\n  <thead>\n    <tr>\n      ';
 if (ctx.component.reorder) { ;
__p += '\n      <th></th>\n      ';
 } ;
__p += ' ';
 ctx.columns.forEach(function(col) { ;
__p += '\n      <th\n        class="' +
((__t = (
          col.validate && col.validate.required ? 'field-required' : ''
        )) == null ? '' : __t) +
'">\n        ' +
((__t = (
          col.hideLabel
            ? ''
            : ctx.t(col.label || col.title, { _userInput: true })
        )) == null ? '' : __t) +
'\n        ';
 if (col.tooltip) { ;
__p += '\n        <i\n          ref="tooltip"\n          data-title="' +
((__t = ( col.tooltip )) == null ? '' : __t) +
'"\n          class="' +
((__t = ( ctx.iconClass('question-sign') )) == null ? '' : __t) +
' text-muted"\n          data-tooltip="' +
((__t = ( col.tooltip )) == null ? '' : __t) +
'"></i\n        >';
 } ;
__p += '\n      </th>\n      ';
 }) ;
__p += ' ';
 if (ctx.hasExtraColumn) { ;
__p += '\n      <th>\n        ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n        <button\n          class="btn btn-primary formio-button-add-row"\n          ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\n          <i class="' +
((__t = ( ctx.iconClass('plus') )) == null ? '' : __t) +
'"></i>\n          ' +
((__t = (
            ctx.t(ctx.component.addAnother || 'Add Another', {
              _userInput: true
            })
          )) == null ? '' : __t) +
'\n        </button>\n        ';
 } ;
__p += '\n      </th>\n      ';
 } ;
__p += '\n    </tr>\n  </thead>\n  ';
 } ;
__p += '\n  <tbody ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-tbody" data-key="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'">\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += ' ';
 if (ctx.hasGroups &&
    ctx.groups[index]) { ;
__p += '\n    <tr\n      ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-group-header"\n      class="datagrid-group-header' +
((__t = ( ctx.hasToggle ? ' clickable' : '' )) == null ? '' : __t) +
'">\n      <td\n        ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-group-label"\n        colspan="' +
((__t = ( ctx.numColumns )) == null ? '' : __t) +
'"\n        class="datagrid-group-label">\n        ' +
((__t = ( ctx.groups[index].label )) == null ? '' : __t) +
'\n      </td>\n    </tr>\n    ';
 } ;
__p += '\n    <tr ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-row">\n      ';
 if (ctx.component.reorder) { ;
__p += '\n      <td class="col-md-1">\n        <button\n          type="button"\n          class="formio-drag-button btn btn-default fa fa-bars"\n          data-key="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'"></button>\n      </td>\n      ';
 } ;
__p += ' ';
 ctx.columns.forEach(function(col) { ;
__p += '\n      <td ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'">\n        ' +
((__t = ( row[col.key] )) == null ? '' : __t) +
'\n      </td>\n      ';
 }) ;
__p += ' ';
 if (ctx.hasExtraColumn) { ;
__p += ' ';
 if (ctx.hasRemoveButtons) { ;
__p += '\n      <td class="col-md-1">\n        <button\n          type="button"\n          class="btn btn-default formio-button-remove-row"\n          ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-removeRow">\n          <i class="' +
((__t = ( ctx.iconClass('remove-circle') )) == null ? '' : __t) +
'"></i>\n        </button>\n      </td>\n      ';
 } ;
__p += ' ';
 if (ctx.canAddColumn) { ;
__p += '\n      <td ref="' +
((__t = ( ctx.key )) == null ? '' : __t) +
'-container" class="col-md-1">\n        ' +
((__t = ( ctx.placeholder )) == null ? '' : __t) +
'\n      </td>\n      ';
 } ;
__p += ' ';
 } ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n  ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n  <tfoot>\n    <tr>\n      <td\n        colspan="' +
((__t = (
          ctx.component.layoutFixed ? ctx.numColumns : ctx.numColumns + 1
        )) == null ? '' : __t) +
'">\n        <button\n          class="btn btn-primary formio-button-add-row"\n          ref="' +
((__t = ( ctx.datagridKey )) == null ? '' : __t) +
'-addRow">\n          <i class="' +
((__t = ( ctx.iconClass('plus') )) == null ? '' : __t) +
'"></i>\n          ' +
((__t = (
            ctx.t(ctx.component.addAnother || 'Add Another', {
              _userInput: true
            })
          )) == null ? '' : __t) +
'\n        </button>\n      </td>\n    </tr>\n  </tfoot>\n  ';
 } ;
__p += '\n</table>\n';
return __p
}