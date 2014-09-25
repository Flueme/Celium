define(function () {
  return {
    each: function (arr, fn) {
      var i;

      for (i = 0; i < arr.length; i++) {
        fn(arr[i]);
      }

      return arr;
    },
    map: function (arr, fn) {
      var i, ret = [];

      for (i = 0; i < arr.length; i++) {
        ret.push(fn(arr[i]));
      }

      return ret;
    }
  }
});