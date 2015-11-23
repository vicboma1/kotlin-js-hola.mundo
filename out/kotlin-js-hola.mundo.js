(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$: function (args) {
      var tmp$0;
      var h1 = document.createElement('h1');
      h1.textContent = 'Hello Vicboma!!!!!';
      ((tmp$0 = document.body) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(h1);
      Kotlin.println('Hello World!');
    }
  });
  Kotlin.defineModule('kotlin-js-hola.mundo', _);
  _.main_kand9s$([]);
}(Kotlin));
