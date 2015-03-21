define([
  "celium/celium",
  "celium/lang/array"
  ], function(celium, array) {
    var win = window
      , doc = win.document;

    function compatList (domlist) {
      var ret = [];

      array.each(domlist, function (el) { ret.push(el); });

      

    }

    return {
      win: win,
      doc: doc
    };
});
