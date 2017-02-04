System.config({
	baseURL: "/",
	defaultJSExtensions: true,
	transpiler: "babel",
  // transpiler: false,
	babelOptions: {
		"optional": [
			"runtime",
			"optimisation.modules.system"
		]
	},
	paths: {
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*"
	},
	separateCSS: false,
	buildCSS: true,

	meta: {
		"*.scss": {
			"loader": "sass"
		},
		"*.sass": {
			"loader": "sass"
		},
    'React': {
      globals: {
        'React': 'preact'
      }
    }  
	},

	packages: {
		"jspm-react-component": {
			"main": "index.js",
			"format": "esm",
			"meta": {
				"*.js": {
					"babelOptions": {
						"plugins": ["babel-plugin-transform-react-jsx"]
					}
				}
			}
		}
	},

	map: {
		"babel": "npm:babel-core@5.8.38",
		"babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.22.0",
		"babel-runtime": "npm:babel-runtime@5.8.38",
		"barbarojs-http": "npm:barbarojs-http@1.0.8",
		"barbarojs-stream": "npm:barbarojs-stream@1.0.1",
		"core-js": "npm:core-js@2.4.1",
		"preact": "npm:preact@7.1.0",
		"preact-compat": "npm:preact-compat@3.13.1",
		"preact-router": "npm:preact-router@2.4.1",
		"proptypes": "npm:proptypes@0.14.4",
		"react": "npm:preact@7.1.0",
		"react-dom": "npm:preact-compat@3.13.1",
		"sass": "github:mobilexag/plugin-sass@0.5.1",
		"github:jspm/nodelibs-assert@0.1.0": {
			"assert": "npm:assert@1.4.1"
		},
		"github:jspm/nodelibs-buffer@0.1.0": {
			"buffer": "npm:buffer@3.6.0"
		},
		"github:jspm/nodelibs-constants@0.1.0": {
			"constants-browserify": "npm:constants-browserify@0.0.1"
		},
		"github:jspm/nodelibs-crypto@0.1.0": {
			"crypto-browserify": "npm:crypto-browserify@3.11.0"
		},
		"github:jspm/nodelibs-events@0.1.1": {
			"events": "npm:events@1.0.2"
		},
		"github:jspm/nodelibs-http@1.7.1": {
			"Base64": "npm:Base64@0.2.1",
			"events": "github:jspm/nodelibs-events@0.1.1",
			"inherits": "npm:inherits@2.0.1",
			"stream": "github:jspm/nodelibs-stream@0.1.0",
			"url": "github:jspm/nodelibs-url@0.1.0",
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"github:jspm/nodelibs-https@0.1.0": {
			"https-browserify": "npm:https-browserify@0.0.0"
		},
		"github:jspm/nodelibs-os@0.1.0": {
			"os-browserify": "npm:os-browserify@0.1.2"
		},
		"github:jspm/nodelibs-path@0.1.0": {
			"path-browserify": "npm:path-browserify@0.0.0"
		},
		"github:jspm/nodelibs-process@0.1.2": {
			"process": "npm:process@0.11.9"
		},
		"github:jspm/nodelibs-stream@0.1.0": {
			"stream-browserify": "npm:stream-browserify@1.0.0"
		},
		"github:jspm/nodelibs-string_decoder@0.1.0": {
			"string_decoder": "npm:string_decoder@0.10.31"
		},
		"github:jspm/nodelibs-url@0.1.0": {
			"url": "npm:url@0.10.3"
		},
		"github:jspm/nodelibs-util@0.1.0": {
			"util": "npm:util@0.10.3"
		},
		"github:jspm/nodelibs-vm@0.1.0": {
			"vm-browserify": "npm:vm-browserify@0.0.4"
		},
		"github:mobilexag/plugin-sass@0.5.1": {
			"autoprefixer": "npm:autoprefixer@6.7.2",
			"css-asset-copier": "npm:css-asset-copier@1.0.2",
			"css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"postcss": "npm:postcss@5.2.11",
			"reqwest": "github:ded/reqwest@2.0.5",
			"sass.js": "npm:sass.js@0.9.13",
			"url": "github:jspm/nodelibs-url@0.1.0"
		},
		"npm:asn1.js@4.9.1": {
			"bn.js": "npm:bn.js@4.11.6",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"inherits": "npm:inherits@2.0.1",
			"minimalistic-assert": "npm:minimalistic-assert@1.0.0",
			"vm": "github:jspm/nodelibs-vm@0.1.0"
		},
		"npm:assert@1.4.1": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"util": "npm:util@0.10.3"
		},
		"npm:autoprefixer@6.7.2": {
			"browserslist": "npm:browserslist@1.7.1",
			"caniuse-db": "npm:caniuse-db@1.0.30000619",
			"normalize-range": "npm:normalize-range@0.1.2",
			"num2fraction": "npm:num2fraction@1.2.2",
			"postcss": "npm:postcss@5.2.11",
			"postcss-value-parser": "npm:postcss-value-parser@3.3.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:babel-helper-builder-react-jsx@6.22.0": {
			"babel-runtime": "npm:babel-runtime@6.22.0",
			"babel-types": "npm:babel-types@6.22.0",
			"esutils": "npm:esutils@2.0.2",
			"lodash": "npm:lodash@4.17.4"
		},
		"npm:babel-plugin-transform-react-jsx@6.22.0": {
			"babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.22.0",
			"babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
			"babel-runtime": "npm:babel-runtime@6.22.0"
		},
		"npm:babel-runtime@5.8.38": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:babel-runtime@6.22.0": {
			"core-js": "npm:core-js@2.4.1",
			"regenerator-runtime": "npm:regenerator-runtime@0.10.1"
		},
		"npm:babel-types@6.22.0": {
			"babel-runtime": "npm:babel-runtime@6.22.0",
			"esutils": "npm:esutils@2.0.2",
			"lodash": "npm:lodash@4.17.4",
			"to-fast-properties": "npm:to-fast-properties@1.0.2"
		},
		"npm:barbarojs-http@1.0.8": {
			"whatwg-fetch": "npm:whatwg-fetch@2.0.2"
		},
		"npm:barbarojs-stream@1.0.1": {
			"rxjs": "npm:rxjs@5.1.0"
		},
		"npm:bn.js@4.11.6": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0"
		},
		"npm:brace-expansion@1.1.6": {
			"balanced-match": "npm:balanced-match@0.4.2",
			"concat-map": "npm:concat-map@0.0.1"
		},
		"npm:browserify-aes@1.0.6": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"buffer-xor": "npm:buffer-xor@1.0.3",
			"cipher-base": "npm:cipher-base@1.0.3",
			"create-hash": "npm:create-hash@1.1.2",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"inherits": "npm:inherits@2.0.1",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:browserify-cipher@1.0.0": {
			"browserify-aes": "npm:browserify-aes@1.0.6",
			"browserify-des": "npm:browserify-des@1.0.0",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"evp_bytestokey": "npm:evp_bytestokey@1.0.0"
		},
		"npm:browserify-des@1.0.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"cipher-base": "npm:cipher-base@1.0.3",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"des.js": "npm:des.js@1.0.0",
			"inherits": "npm:inherits@2.0.1"
		},
		"npm:browserify-rsa@4.0.1": {
			"bn.js": "npm:bn.js@4.11.6",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"constants": "github:jspm/nodelibs-constants@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"randombytes": "npm:randombytes@2.0.3"
		},
		"npm:browserify-sign@4.0.0": {
			"bn.js": "npm:bn.js@4.11.6",
			"browserify-rsa": "npm:browserify-rsa@4.0.1",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hash": "npm:create-hash@1.1.2",
			"create-hmac": "npm:create-hmac@1.1.4",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"elliptic": "npm:elliptic@6.3.2",
			"inherits": "npm:inherits@2.0.1",
			"parse-asn1": "npm:parse-asn1@5.0.0",
			"stream": "github:jspm/nodelibs-stream@0.1.0"
		},
		"npm:browserslist@1.7.1": {
			"caniuse-db": "npm:caniuse-db@1.0.30000619",
			"electron-to-chromium": "npm:electron-to-chromium@1.2.1",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:buffer-xor@1.0.3": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:buffer@3.6.0": {
			"base64-js": "npm:base64-js@0.0.8",
			"child_process": "github:jspm/nodelibs-child_process@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"ieee754": "npm:ieee754@1.1.8",
			"isarray": "npm:isarray@1.0.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:chalk@1.1.3": {
			"ansi-styles": "npm:ansi-styles@2.2.1",
			"escape-string-regexp": "npm:escape-string-regexp@1.0.5",
			"has-ansi": "npm:has-ansi@2.0.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"strip-ansi": "npm:strip-ansi@3.0.1",
			"supports-color": "npm:supports-color@2.0.0"
		},
		"npm:cipher-base@1.0.3": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"inherits": "npm:inherits@2.0.1",
			"stream": "github:jspm/nodelibs-stream@0.1.0",
			"string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
		},
		"npm:constants-browserify@0.0.1": {
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:core-js@2.4.1": {
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:core-util-is@1.0.2": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0"
		},
		"npm:create-ecdh@4.0.0": {
			"bn.js": "npm:bn.js@4.11.6",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"elliptic": "npm:elliptic@6.3.2"
		},
		"npm:create-hash@1.1.2": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"cipher-base": "npm:cipher-base@1.0.3",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"inherits": "npm:inherits@2.0.1",
			"ripemd160": "npm:ripemd160@1.0.1",
			"sha.js": "npm:sha.js@2.4.8"
		},
		"npm:create-hmac@1.1.4": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hash": "npm:create-hash@1.1.2",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"inherits": "npm:inherits@2.0.1",
			"stream": "github:jspm/nodelibs-stream@0.1.0"
		},
		"npm:crypto-browserify@3.11.0": {
			"browserify-cipher": "npm:browserify-cipher@1.0.0",
			"browserify-sign": "npm:browserify-sign@4.0.0",
			"create-ecdh": "npm:create-ecdh@4.0.0",
			"create-hash": "npm:create-hash@1.1.2",
			"create-hmac": "npm:create-hmac@1.1.4",
			"diffie-hellman": "npm:diffie-hellman@5.0.2",
			"inherits": "npm:inherits@2.0.1",
			"pbkdf2": "npm:pbkdf2@3.0.9",
			"public-encrypt": "npm:public-encrypt@4.0.0",
			"randombytes": "npm:randombytes@2.0.3"
		},
		"npm:css-asset-copier@1.0.2": {
			"babel-runtime": "npm:babel-runtime@6.22.0",
			"fs-extra": "npm:fs-extra@0.30.0",
			"path": "github:jspm/nodelibs-path@0.1.0"
		},
		"npm:css-url-rewriter-ex@1.0.6": {
			"babel-runtime": "npm:babel-runtime@6.22.0",
			"path": "github:jspm/nodelibs-path@0.1.0"
		},
		"npm:des.js@1.0.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"inherits": "npm:inherits@2.0.1",
			"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
		},
		"npm:diffie-hellman@5.0.2": {
			"bn.js": "npm:bn.js@4.11.6",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"miller-rabin": "npm:miller-rabin@4.0.0",
			"randombytes": "npm:randombytes@2.0.3",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:electron-to-chromium@1.2.1": {
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"https": "github:jspm/nodelibs-https@0.1.0"
		},
		"npm:elliptic@6.3.2": {
			"bn.js": "npm:bn.js@4.11.6",
			"brorand": "npm:brorand@1.0.6",
			"hash.js": "npm:hash.js@1.0.3",
			"inherits": "npm:inherits@2.0.1",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:evp_bytestokey@1.0.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hash": "npm:create-hash@1.1.2",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0"
		},
		"npm:fs-extra@0.30.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"graceful-fs": "npm:graceful-fs@4.1.11",
			"jsonfile": "npm:jsonfile@2.4.0",
			"klaw": "npm:klaw@1.3.1",
			"os": "github:jspm/nodelibs-os@0.1.0",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"path-is-absolute": "npm:path-is-absolute@1.0.1",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"rimraf": "npm:rimraf@2.5.4"
		},
		"npm:fs.realpath@1.0.0": {
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:glob@7.1.1": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"events": "github:jspm/nodelibs-events@0.1.1",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"fs.realpath": "npm:fs.realpath@1.0.0",
			"inflight": "npm:inflight@1.0.6",
			"inherits": "npm:inherits@2.0.1",
			"minimatch": "npm:minimatch@3.0.3",
			"once": "npm:once@1.4.0",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"path-is-absolute": "npm:path-is-absolute@1.0.1",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"npm:graceful-fs@4.1.11": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"constants": "github:jspm/nodelibs-constants@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"stream": "github:jspm/nodelibs-stream@0.1.0",
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"npm:has-ansi@2.0.0": {
			"ansi-regex": "npm:ansi-regex@2.1.1"
		},
		"npm:has-flag@1.0.0": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:hash.js@1.0.3": {
			"inherits": "npm:inherits@2.0.1"
		},
		"npm:https-browserify@0.0.0": {
			"http": "github:jspm/nodelibs-http@1.7.1"
		},
		"npm:inflight@1.0.6": {
			"once": "npm:once@1.4.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"wrappy": "npm:wrappy@1.0.2"
		},
		"npm:inherits@2.0.1": {
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"npm:js-base64@2.1.9": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0"
		},
		"npm:jsonfile@2.4.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"graceful-fs": "npm:graceful-fs@4.1.11"
		},
		"npm:klaw@1.3.1": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"graceful-fs": "npm:graceful-fs@4.1.11",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"stream": "github:jspm/nodelibs-stream@0.1.0",
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"npm:miller-rabin@4.0.0": {
			"bn.js": "npm:bn.js@4.11.6",
			"brorand": "npm:brorand@1.0.6"
		},
		"npm:minimatch@3.0.3": {
			"brace-expansion": "npm:brace-expansion@1.1.6",
			"path": "github:jspm/nodelibs-path@0.1.0"
		},
		"npm:once@1.4.0": {
			"wrappy": "npm:wrappy@1.0.2"
		},
		"npm:os-browserify@0.1.2": {
			"os": "github:jspm/nodelibs-os@0.1.0"
		},
		"npm:parse-asn1@5.0.0": {
			"asn1.js": "npm:asn1.js@4.9.1",
			"browserify-aes": "npm:browserify-aes@1.0.6",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hash": "npm:create-hash@1.1.2",
			"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
			"pbkdf2": "npm:pbkdf2@3.0.9",
			"systemjs-json": "github:systemjs/plugin-json@0.1.2"
		},
		"npm:path-browserify@0.0.0": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:path-is-absolute@1.0.1": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:pbkdf2@3.0.9": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hmac": "npm:create-hmac@1.1.4",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:postcss@5.2.11": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"chalk": "npm:chalk@1.1.3",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"js-base64": "npm:js-base64@2.1.9",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"source-map": "npm:source-map@0.5.6",
			"supports-color": "npm:supports-color@3.2.3"
		},
		"npm:preact-compat@3.13.1": {
			"path": "github:jspm/nodelibs-path@0.1.0",
			"preact": "npm:preact@7.1.0",
			"preact-render-to-string": "npm:preact-render-to-string@3.5.0",
			"preact-transition-group": "npm:preact-transition-group@1.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"proptypes": "npm:proptypes@0.14.4",
			"standalone-react-addons-pure-render-mixin": "npm:standalone-react-addons-pure-render-mixin@0.1.1"
		},
		"npm:preact-render-to-string@3.5.0": {
			"preact": "npm:preact@7.1.0",
			"pretty-format": "npm:pretty-format@3.8.0"
		},
		"npm:preact-router@2.4.1": {
			"preact": "npm:preact@7.1.0"
		},
		"npm:preact-transition-group@1.1.0": {
			"preact": "npm:preact@7.1.0"
		},
		"npm:preact@7.1.0": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:process@0.11.9": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"vm": "github:jspm/nodelibs-vm@0.1.0"
		},
		"npm:public-encrypt@4.0.0": {
			"bn.js": "npm:bn.js@4.11.6",
			"browserify-rsa": "npm:browserify-rsa@4.0.1",
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"create-hash": "npm:create-hash@1.1.2",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"parse-asn1": "npm:parse-asn1@5.0.0",
			"randombytes": "npm:randombytes@2.0.3"
		},
		"npm:punycode@1.3.2": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:randombytes@2.0.3": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:readable-stream@1.1.14": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"core-util-is": "npm:core-util-is@1.0.2",
			"events": "github:jspm/nodelibs-events@0.1.1",
			"inherits": "npm:inherits@2.0.1",
			"isarray": "npm:isarray@0.0.1",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"stream-browserify": "npm:stream-browserify@1.0.0",
			"string_decoder": "npm:string_decoder@0.10.31"
		},
		"npm:regenerator-runtime@0.10.1": {
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:rimraf@2.5.4": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"glob": "npm:glob@7.1.1",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:ripemd160@1.0.1": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:rxjs@5.1.0": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2",
			"symbol-observable": "npm:symbol-observable@1.0.4"
		},
		"npm:sass.js@0.9.13": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"crypto": "github:jspm/nodelibs-crypto@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"path": "github:jspm/nodelibs-path@0.1.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:sha.js@2.4.8": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0",
			"fs": "github:jspm/nodelibs-fs@0.1.2",
			"inherits": "npm:inherits@2.0.1",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:source-map@0.5.6": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:stream-browserify@1.0.0": {
			"events": "github:jspm/nodelibs-events@0.1.1",
			"inherits": "npm:inherits@2.0.1",
			"readable-stream": "npm:readable-stream@1.1.14"
		},
		"npm:string_decoder@0.10.31": {
			"buffer": "github:jspm/nodelibs-buffer@0.1.0"
		},
		"npm:strip-ansi@3.0.1": {
			"ansi-regex": "npm:ansi-regex@2.1.1"
		},
		"npm:supports-color@2.0.0": {
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:supports-color@3.2.3": {
			"has-flag": "npm:has-flag@1.0.0",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:url@0.10.3": {
			"assert": "github:jspm/nodelibs-assert@0.1.0",
			"punycode": "npm:punycode@1.3.2",
			"querystring": "npm:querystring@0.2.0",
			"util": "github:jspm/nodelibs-util@0.1.0"
		},
		"npm:util@0.10.3": {
			"inherits": "npm:inherits@2.0.1",
			"process": "github:jspm/nodelibs-process@0.1.2"
		},
		"npm:vm-browserify@0.0.4": {
			"indexof": "npm:indexof@0.0.1"
		}
	}
});