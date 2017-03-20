define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('ascene',['exports', 'aframe'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ascene = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Ascene = exports.Ascene = function Ascene() {
        _classCallCheck(this, Ascene);
    };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', 'material-design-lite'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-mdl-plugin');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"material-design-lite/material.css\"></require><require from=\"./ascene\"></require><h1>${message}</h1><style>a-scene{height:300px}</style><div class=\"demo-layout-transparent mdl-layout mdl-js-layout\"><header class=\"mdl-layout__header mdl-layout__header--transparent\"><div class=\"mdl-layout__header-row\"><span class=\"mdl-layout-title\">Title</span><div class=\"mdl-layout-spacer\"></div><nav class=\"mdl-navigation\"><a class=\"mdl-navigation__link\" href=\"\">Link</a> <a class=\"mdl-navigation__link\" href=\"\">Link</a> <a class=\"mdl-navigation__link\" href=\"\">Link</a> <a class=\"mdl-navigation__link\" href=\"\">Link</a></nav></div></header><main class=\"mdl-layout__content\"><ascene></ascene></main></div></template>"; });
define('text!ascene.html', ['module'], function(module) { module.exports = "<template><a-scene embedded><a-sphere position=\"0 1.25 -1\" radius=\"1.25\" color=\"#EF2D5E\"></a-sphere><a-sky color=\"#000000\"></a-sky><a-entity position=\"0 0 3.8\"><a-camera></a-camera></a-entity></a-scene></template>"; });
//# sourceMappingURL=app-bundle.js.map