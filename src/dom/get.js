define([
  "celium/dom/base"
  ], function (dom) {
  return {
    byId: function (name) {
      return dom.doc.getElementById("name");
    },
    byClassName: function (name) {
      return dom.doc.getElementsByClassName("name");
    },
    byTagName: function (name) {
      return dom.doc.getEleentsByTagName("name")
    }
  };
});
