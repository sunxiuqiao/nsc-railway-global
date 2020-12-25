/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define([
  './when-a55a8a4c',
  './RuntimeError-7c184ac0',
  './WebGLConstants-4c11ee5f',
  './createTaskProcessorWorker',
], function(when, RuntimeError, WebGLConstants, createTaskProcessorWorker) {
  'use strict';
  function CompressedTextureBuffer(e, r, t, n) {
    (this._format = e),
      (this._width = r),
      (this._height = t),
      (this._buffer = n);
  }
  Object.defineProperties(CompressedTextureBuffer.prototype, {
    internalFormat: {
      get: function() {
        return this._format;
      },
    },
    width: {
      get: function() {
        return this._width;
      },
    },
    height: {
      get: function() {
        return this._height;
      },
    },
    bufferView: {
      get: function() {
        return this._buffer;
      },
    },
  }),
    (CompressedTextureBuffer.clone = function(e) {
      if (when.defined(e))
        return new CompressedTextureBuffer(
          e._format,
          e._width,
          e._height,
          e._buffer,
        );
    }),
    (CompressedTextureBuffer.prototype.clone = function() {
      return CompressedTextureBuffer.clone(this);
    });
  var PixelDatatype = {
      UNSIGNED_BYTE: WebGLConstants.WebGLConstants.UNSIGNED_BYTE,
      UNSIGNED_SHORT: WebGLConstants.WebGLConstants.UNSIGNED_SHORT,
      UNSIGNED_INT: WebGLConstants.WebGLConstants.UNSIGNED_INT,
      FLOAT: WebGLConstants.WebGLConstants.FLOAT,
      HALF_FLOAT: WebGLConstants.WebGLConstants.HALF_FLOAT_OES,
      UNSIGNED_INT_24_8: WebGLConstants.WebGLConstants.UNSIGNED_INT_24_8,
      UNSIGNED_SHORT_4_4_4_4:
        WebGLConstants.WebGLConstants.UNSIGNED_SHORT_4_4_4_4,
      UNSIGNED_SHORT_5_5_5_1:
        WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_5_5_1,
      UNSIGNED_SHORT_5_6_5: WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_6_5,
      isPacked: function(e) {
        return (
          e === PixelDatatype.UNSIGNED_INT_24_8 ||
          e === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 ||
          e === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 ||
          e === PixelDatatype.UNSIGNED_SHORT_5_6_5
        );
      },
      sizeInBytes: function(e) {
        switch (e) {
          case PixelDatatype.UNSIGNED_BYTE:
            return 1;
          case PixelDatatype.UNSIGNED_SHORT:
          case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
          case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
          case PixelDatatype.UNSIGNED_SHORT_5_6_5:
          case PixelDatatype.HALF_FLOAT:
            return 2;
          case PixelDatatype.UNSIGNED_INT:
          case PixelDatatype.FLOAT:
          case PixelDatatype.UNSIGNED_INT_24_8:
            return 4;
        }
      },
      validate: function(e) {
        return (
          e === PixelDatatype.UNSIGNED_BYTE ||
          e === PixelDatatype.UNSIGNED_SHORT ||
          e === PixelDatatype.UNSIGNED_INT ||
          e === PixelDatatype.FLOAT ||
          e === PixelDatatype.HALF_FLOAT ||
          e === PixelDatatype.UNSIGNED_INT_24_8 ||
          e === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 ||
          e === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 ||
          e === PixelDatatype.UNSIGNED_SHORT_5_6_5
        );
      },
    },
    PixelDatatype$1 = Object.freeze(PixelDatatype),
    PixelFormat = {
      DEPTH_COMPONENT: WebGLConstants.WebGLConstants.DEPTH_COMPONENT,
      DEPTH_STENCIL: WebGLConstants.WebGLConstants.DEPTH_STENCIL,
      ALPHA: WebGLConstants.WebGLConstants.ALPHA,
      RGB: WebGLConstants.WebGLConstants.RGB,
      RGBA: WebGLConstants.WebGLConstants.RGBA,
      LUMINANCE: WebGLConstants.WebGLConstants.LUMINANCE,
      LUMINANCE_ALPHA: WebGLConstants.WebGLConstants.LUMINANCE_ALPHA,
      RGB_DXT1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_S3TC_DXT1_EXT,
      RGBA_DXT1: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT,
      RGBA_DXT3: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT,
      RGBA_DXT5: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT,
      RGB_PVRTC_4BPPV1:
        WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
      RGB_PVRTC_2BPPV1:
        WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
      RGBA_PVRTC_4BPPV1:
        WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
      RGBA_PVRTC_2BPPV1:
        WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
      RGB_ETC1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_ETC1_WEBGL,
      componentsLength: function(e) {
        switch (e) {
          case PixelFormat.RGB:
            return 3;
          case PixelFormat.RGBA:
            return 4;
          case PixelFormat.LUMINANCE_ALPHA:
            return 2;
          case PixelFormat.ALPHA:
          case PixelFormat.LUMINANCE:
          default:
            return 1;
        }
      },
      validate: function(e) {
        return (
          e === PixelFormat.DEPTH_COMPONENT ||
          e === PixelFormat.DEPTH_STENCIL ||
          e === PixelFormat.ALPHA ||
          e === PixelFormat.RGB ||
          e === PixelFormat.RGBA ||
          e === PixelFormat.LUMINANCE ||
          e === PixelFormat.LUMINANCE_ALPHA ||
          e === PixelFormat.RGB_DXT1 ||
          e === PixelFormat.RGBA_DXT1 ||
          e === PixelFormat.RGBA_DXT3 ||
          e === PixelFormat.RGBA_DXT5 ||
          e === PixelFormat.RGB_PVRTC_4BPPV1 ||
          e === PixelFormat.RGB_PVRTC_2BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_4BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_2BPPV1 ||
          e === PixelFormat.RGB_ETC1
        );
      },
      isColorFormat: function(e) {
        return (
          e === PixelFormat.ALPHA ||
          e === PixelFormat.RGB ||
          e === PixelFormat.RGBA ||
          e === PixelFormat.LUMINANCE ||
          e === PixelFormat.LUMINANCE_ALPHA
        );
      },
      isDepthFormat: function(e) {
        return (
          e === PixelFormat.DEPTH_COMPONENT || e === PixelFormat.DEPTH_STENCIL
        );
      },
      isCompressedFormat: function(e) {
        return (
          e === PixelFormat.RGB_DXT1 ||
          e === PixelFormat.RGBA_DXT1 ||
          e === PixelFormat.RGBA_DXT3 ||
          e === PixelFormat.RGBA_DXT5 ||
          e === PixelFormat.RGB_PVRTC_4BPPV1 ||
          e === PixelFormat.RGB_PVRTC_2BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_4BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_2BPPV1 ||
          e === PixelFormat.RGB_ETC1
        );
      },
      isDXTFormat: function(e) {
        return (
          e === PixelFormat.RGB_DXT1 ||
          e === PixelFormat.RGBA_DXT1 ||
          e === PixelFormat.RGBA_DXT3 ||
          e === PixelFormat.RGBA_DXT5
        );
      },
      isPVRTCFormat: function(e) {
        return (
          e === PixelFormat.RGB_PVRTC_4BPPV1 ||
          e === PixelFormat.RGB_PVRTC_2BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_4BPPV1 ||
          e === PixelFormat.RGBA_PVRTC_2BPPV1
        );
      },
      isETC1Format: function(e) {
        return e === PixelFormat.RGB_ETC1;
      },
      compressedTextureSizeInBytes: function(e, r, t) {
        switch (e) {
          case PixelFormat.RGB_DXT1:
          case PixelFormat.RGBA_DXT1:
          case PixelFormat.RGB_ETC1:
            return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8;
          case PixelFormat.RGBA_DXT3:
          case PixelFormat.RGBA_DXT5:
            return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
          case PixelFormat.RGB_PVRTC_4BPPV1:
          case PixelFormat.RGBA_PVRTC_4BPPV1:
            return Math.floor((Math.max(r, 8) * Math.max(t, 8) * 4 + 7) / 8);
          case PixelFormat.RGB_PVRTC_2BPPV1:
          case PixelFormat.RGBA_PVRTC_2BPPV1:
            return Math.floor((Math.max(r, 16) * Math.max(t, 8) * 2 + 7) / 8);
          default:
            return 0;
        }
      },
      textureSizeInBytes: function(e, r, t, n) {
        var i = PixelFormat.componentsLength(e);
        return (
          PixelDatatype$1.isPacked(r) && (i = 1),
          i * PixelDatatype$1.sizeInBytes(r) * t * n
        );
      },
      alignmentInBytes: function(e, r, t) {
        var n = PixelFormat.textureSizeInBytes(e, r, t, 1) % 4;
        return 0 == n ? 4 : 2 == n ? 2 : 1;
      },
      createTypedArray: function(e, r, t, n) {
        var i = PixelDatatype$1.sizeInBytes(r);
        return new (i === Uint8Array.BYTES_PER_ELEMENT
          ? Uint8Array
          : i === Uint16Array.BYTES_PER_ELEMENT
          ? Uint16Array
          : i === Float32Array.BYTES_PER_ELEMENT && r === PixelDatatype$1.FLOAT
          ? Float32Array
          : Uint32Array)(PixelFormat.componentsLength(e) * t * n);
      },
      flipY: function(e, r, t, n, i) {
        if (1 === i) return e;
        for (
          var a = PixelFormat.createTypedArray(r, t, n, i),
            o = PixelFormat.componentsLength(r),
            u = n * o,
            f = 0;
          f < i;
          ++f
        )
          for (var l = f * i * o, s = (i - f - 1) * i * o, c = 0; c < u; ++c)
            a[s + c] = e[l + c];
        return a;
      },
    },
    PixelFormat$1 = Object.freeze(PixelFormat),
    Module;
  Module = Module || (void 0 !== Module ? Module : null) || {};
  var moduleOverrides = {};
  for (var key in Module)
    Module.hasOwnProperty(key) && (moduleOverrides[key] = Module[key]);
  var ENVIRONMENT_IS_WEB = !1,
    ENVIRONMENT_IS_WORKER = !1,
    ENVIRONMENT_IS_NODE = !1,
    ENVIRONMENT_IS_SHELL = !1,
    nodeFS,
    nodePath;
  if (Module.ENVIRONMENT)
    if ('WEB' === Module.ENVIRONMENT) ENVIRONMENT_IS_WEB = !0;
    else if ('WORKER' === Module.ENVIRONMENT) ENVIRONMENT_IS_WORKER = !0;
    else if ('NODE' === Module.ENVIRONMENT) ENVIRONMENT_IS_NODE = !0;
    else {
      if ('SHELL' !== Module.ENVIRONMENT)
        throw new Error(
          "The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.",
        );
      ENVIRONMENT_IS_SHELL = !0;
    }
  else
    (ENVIRONMENT_IS_WEB = 'object' == typeof window),
      (ENVIRONMENT_IS_WORKER = 'function' == typeof importScripts),
      (ENVIRONMENT_IS_NODE =
        'object' == typeof process &&
        'function' == typeof require &&
        !ENVIRONMENT_IS_WEB &&
        !ENVIRONMENT_IS_WORKER),
      (ENVIRONMENT_IS_SHELL =
        !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER);
  if (ENVIRONMENT_IS_NODE)
    Module.print || (Module.print = console.log),
      Module.printErr || (Module.printErr = console.warn),
      (Module.read = function(e, r) {
        (nodeFS = nodeFS || require('fs')),
          (e = (nodePath = nodePath || require('path')).normalize(e));
        var t = nodeFS.readFileSync(e);
        return r ? t : t.toString();
      }),
      (Module.readBinary = function(e) {
        var r = Module.read(e, !0);
        return r.buffer || (r = new Uint8Array(r)), assert(r.buffer), r;
      }),
      (Module.load = function(e) {
        globalEval(read(e));
      }),
      Module.thisProgram ||
        (1 < process.argv.length
          ? (Module.thisProgram = process.argv[1].replace(/\\/g, '/'))
          : (Module.thisProgram = 'unknown-program')),
      (Module.arguments = process.argv.slice(2)),
      'undefined' != typeof module && (module.exports = Module),
      process.on('uncaughtException', function(e) {
        if (!(e instanceof ExitStatus)) throw e;
      }),
      (Module.inspect = function() {
        return '[Emscripten Module object]';
      });
  else if (ENVIRONMENT_IS_SHELL)
    Module.print || (Module.print = print),
      'undefined' != typeof printErr && (Module.printErr = printErr),
      'undefined' != typeof read
        ? (Module.read = read)
        : (Module.read = function() {
            throw 'no read() available';
          }),
      (Module.readBinary = function(e) {
        if ('function' == typeof readbuffer)
          return new Uint8Array(readbuffer(e));
        var r = read(e, 'binary');
        return assert('object' == typeof r), r;
      }),
      'undefined' != typeof scriptArgs
        ? (Module.arguments = scriptArgs)
        : void 0 !== arguments && (Module.arguments = arguments),
      'function' == typeof quit &&
        (Module.quit = function(e, r) {
          quit(e);
        });
  else {
    if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER)
      throw 'Unknown runtime environment. Where are we?';
    if (
      ((Module.read = function(e) {
        var r = new XMLHttpRequest();
        return r.open('GET', e, !1), r.send(null), r.responseText;
      }),
      ENVIRONMENT_IS_WORKER &&
        (Module.readBinary = function(e) {
          var r = new XMLHttpRequest();
          return (
            r.open('GET', e, !1),
            (r.responseType = 'arraybuffer'),
            r.send(null),
            new Uint8Array(r.response)
          );
        }),
      (Module.readAsync = function(e, r, t) {
        var n = new XMLHttpRequest();
        n.open('GET', e, !0),
          (n.responseType = 'arraybuffer'),
          (n.onload = function() {
            200 == n.status || (0 == n.status && n.response)
              ? r(n.response)
              : t();
          }),
          (n.onerror = t),
          n.send(null);
      }),
      void 0 !== arguments && (Module.arguments = arguments),
      'undefined' != typeof console)
    )
      Module.print ||
        (Module.print = function(e) {
          console.log(e);
        }),
        Module.printErr ||
          (Module.printErr = function(e) {
            console.warn(e);
          });
    else {
      var TRY_USE_DUMP = !1;
      Module.print ||
        (Module.print =
          TRY_USE_DUMP && 'undefined' != typeof dump
            ? function(e) {
                dump(e);
              }
            : function(e) {});
    }
    ENVIRONMENT_IS_WORKER && (Module.load = importScripts),
      void 0 === Module.setWindowTitle &&
        (Module.setWindowTitle = function(e) {
          document.title = e;
        });
  }
  function globalEval(e) {
    eval.call(null, e);
  }
  for (var key in (!Module.load &&
    Module.read &&
    (Module.load = function(e) {
      globalEval(Module.read(e));
    }),
  Module.print || (Module.print = function() {}),
  Module.printErr || (Module.printErr = Module.print),
  Module.arguments || (Module.arguments = []),
  Module.thisProgram || (Module.thisProgram = './this.program'),
  Module.quit ||
    (Module.quit = function(e, r) {
      throw r;
    }),
  (Module.print = Module.print),
  (Module.printErr = Module.printErr),
  (Module.preRun = []),
  (Module.postRun = []),
  moduleOverrides))
    moduleOverrides.hasOwnProperty(key) && (Module[key] = moduleOverrides[key]);
  moduleOverrides = void 0;
  var Runtime = {
    setTempRet0: function(e) {
      return (tempRet0 = e);
    },
    getTempRet0: function() {
      return tempRet0;
    },
    stackSave: function() {
      return STACKTOP;
    },
    stackRestore: function(e) {
      STACKTOP = e;
    },
    getNativeTypeSize: function(e) {
      switch (e) {
        case 'i1':
        case 'i8':
          return 1;
        case 'i16':
          return 2;
        case 'i32':
          return 4;
        case 'i64':
          return 8;
        case 'float':
          return 4;
        case 'double':
          return 8;
        default:
          if ('*' === e[e.length - 1]) return Runtime.QUANTUM_SIZE;
          if ('i' !== e[0]) return 0;
          var r = parseInt(e.substr(1));
          return assert(r % 8 == 0), r / 8;
      }
    },
    getNativeFieldSize: function(e) {
      return Math.max(Runtime.getNativeTypeSize(e), Runtime.QUANTUM_SIZE);
    },
    STACK_ALIGN: 16,
    prepVararg: function(e, r) {
      return (
        'double' === r || 'i64' === r
          ? 7 & e && (assert(4 == (7 & e)), (e += 4))
          : assert(0 == (3 & e)),
        e
      );
    },
    getAlignSize: function(e, r, t) {
      return t || ('i64' != e && 'double' != e)
        ? e
          ? Math.min(
              r || (e ? Runtime.getNativeFieldSize(e) : 0),
              Runtime.QUANTUM_SIZE,
            )
          : Math.min(r, 8)
        : 8;
    },
    dynCall: function(e, r, t) {
      return t && t.length
        ? Module['dynCall_' + e].apply(null, [r].concat(t))
        : Module['dynCall_' + e].call(null, r);
    },
    functionPointers: [],
    addFunction: function(e) {
      for (var r = 0; r < Runtime.functionPointers.length; r++)
        if (!Runtime.functionPointers[r])
          return (Runtime.functionPointers[r] = e), 2 * (1 + r);
      throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
    },
    removeFunction: function(e) {
      Runtime.functionPointers[(e - 2) / 2] = null;
    },
    warnOnce: function(e) {
      Runtime.warnOnce.shown || (Runtime.warnOnce.shown = {}),
        Runtime.warnOnce.shown[e] ||
          ((Runtime.warnOnce.shown[e] = 1), Module.printErr(e));
    },
    funcWrappers: {},
    getFuncWrapper: function(r, t) {
      assert(t), Runtime.funcWrappers[t] || (Runtime.funcWrappers[t] = {});
      var e = Runtime.funcWrappers[t];
      return (
        e[r] ||
          (1 === t.length
            ? (e[r] = function() {
                return Runtime.dynCall(t, r);
              })
            : 2 === t.length
            ? (e[r] = function(e) {
                return Runtime.dynCall(t, r, [e]);
              })
            : (e[r] = function() {
                return Runtime.dynCall(
                  t,
                  r,
                  Array.prototype.slice.call(arguments),
                );
              })),
        e[r]
      );
    },
    getCompilerSetting: function(e) {
      throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
    },
    stackAlloc: function(e) {
      var r = STACKTOP;
      return (STACKTOP = ((STACKTOP = (STACKTOP + e) | 0) + 15) & -16), r;
    },
    staticAlloc: function(e) {
      var r = STATICTOP;
      return (STATICTOP = ((STATICTOP = (STATICTOP + e) | 0) + 15) & -16), r;
    },
    dynamicAlloc: function(e) {
      var r = HEAP32[DYNAMICTOP_PTR >> 2],
        t = -16 & ((r + e + 15) | 0);
      if (
        ((HEAP32[DYNAMICTOP_PTR >> 2] = t), TOTAL_MEMORY <= t) &&
        !enlargeMemory()
      )
        return (HEAP32[DYNAMICTOP_PTR >> 2] = r), 0;
      return r;
    },
    alignMemory: function(e, r) {
      return (e = Math.ceil(e / (r || 16)) * (r || 16));
    },
    makeBigInt: function(e, r, t) {
      return t
        ? +(e >>> 0) + 4294967296 * (r >>> 0)
        : +(e >>> 0) + 4294967296 * (0 | r);
    },
    GLOBAL_BASE: 8,
    QUANTUM_SIZE: 4,
    __dummy__: 0,
  };
  Module.Runtime = Runtime;
  var ABORT = 0,
    cwrap,
    ccall;
  function assert(e, r) {
    e || abort('Assertion failed: ' + r);
  }
  function getCFunc(ident) {
    var func = Module['_' + ident];
    if (!func)
      try {
        func = eval('_' + ident);
      } catch (e) {}
    return (
      assert(
        func,
        'Cannot call unknown function ' +
          ident +
          ' (perhaps LLVM optimizations or closure removed it?)',
      ),
      func
    );
  }
  function setValue(e, r, t, n) {
    switch (('*' === (t = t || 'i8').charAt(t.length - 1) && (t = 'i32'), t)) {
      case 'i1':
      case 'i8':
        HEAP8[e >> 0] = r;
        break;
      case 'i16':
        HEAP16[e >> 1] = r;
        break;
      case 'i32':
        HEAP32[e >> 2] = r;
        break;
      case 'i64':
        (tempI64 = [
          r >>> 0,
          ((tempDouble = r),
          1 <= +Math_abs(tempDouble)
            ? 0 < tempDouble
              ? (0 |
                  Math_min(
                    +Math_floor(tempDouble / 4294967296),
                    4294967295,
                  )) >>>
                0
              : ~~+Math_ceil(
                  (tempDouble - (~~tempDouble >>> 0)) / 4294967296,
                ) >>> 0
            : 0),
        ]),
          (HEAP32[e >> 2] = tempI64[0]),
          (HEAP32[(e + 4) >> 2] = tempI64[1]);
        break;
      case 'float':
        HEAPF32[e >> 2] = r;
        break;
      case 'double':
        HEAPF64[e >> 3] = r;
        break;
      default:
        abort('invalid type for setValue: ' + t);
    }
  }
  function getValue(e, r, t) {
    switch (('*' === (r = r || 'i8').charAt(r.length - 1) && (r = 'i32'), r)) {
      case 'i1':
      case 'i8':
        return HEAP8[e >> 0];
      case 'i16':
        return HEAP16[e >> 1];
      case 'i32':
      case 'i64':
        return HEAP32[e >> 2];
      case 'float':
        return HEAPF32[e >> 2];
      case 'double':
        return HEAPF64[e >> 3];
      default:
        abort('invalid type for setValue: ' + r);
    }
    return null;
  }
  !(function() {
    var JSfuncs = {
        stackSave: function() {
          Runtime.stackSave();
        },
        stackRestore: function() {
          Runtime.stackRestore();
        },
        arrayToC: function(e) {
          var r = Runtime.stackAlloc(e.length);
          return writeArrayToMemory(e, r), r;
        },
        stringToC: function(e) {
          var r = 0;
          if (null != e && 0 !== e) {
            var t = 1 + (e.length << 2);
            stringToUTF8(e, (r = Runtime.stackAlloc(t)), t);
          }
          return r;
        },
      },
      toC = { string: JSfuncs.stringToC, array: JSfuncs.arrayToC };
    ccall = function(e, r, t, n, i) {
      var a = getCFunc(e),
        o = [],
        u = 0;
      if (n)
        for (var f = 0; f < n.length; f++) {
          var l = toC[t[f]];
          l
            ? (0 === u && (u = Runtime.stackSave()), (o[f] = l(n[f])))
            : (o[f] = n[f]);
        }
      var s = a.apply(null, o);
      if (('string' === r && (s = Pointer_stringify(s)), 0 !== u)) {
        if (i && i.async)
          return void EmterpreterAsync.asyncFinalizers.push(function() {
            Runtime.stackRestore(u);
          });
        Runtime.stackRestore(u);
      }
      return s;
    };
    var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
    function parseJSFunc(e) {
      var r = e
        .toString()
        .match(sourceRegex)
        .slice(1);
      return { arguments: r[0], body: r[1], returnValue: r[2] };
    }
    var JSsource = null;
    function ensureJSsource() {
      if (!JSsource)
        for (var e in ((JSsource = {}), JSfuncs))
          JSfuncs.hasOwnProperty(e) && (JSsource[e] = parseJSFunc(JSfuncs[e]));
    }
    cwrap = function cwrap(ident, returnType, argTypes) {
      argTypes = argTypes || [];
      var cfunc = getCFunc(ident),
        numericArgs = argTypes.every(function(e) {
          return 'number' === e;
        }),
        numericRet = 'string' !== returnType;
      if (numericRet && numericArgs) return cfunc;
      var argNames = argTypes.map(function(e, r) {
          return '$' + r;
        }),
        funcstr = '(function(' + argNames.join(',') + ') {',
        nargs = argTypes.length;
      if (!numericArgs) {
        ensureJSsource(),
          (funcstr += 'var stack = ' + JSsource.stackSave.body + ';');
        for (var i = 0; i < nargs; i++) {
          var arg = argNames[i],
            type = argTypes[i];
          if ('number' !== type) {
            var convertCode = JSsource[type + 'ToC'];
            (funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';'),
              (funcstr += convertCode.body + ';'),
              (funcstr += arg + '=(' + convertCode.returnValue + ');');
          }
        }
      }
      var cfuncname = parseJSFunc(function() {
        return cfunc;
      }).returnValue;
      if (
        ((funcstr +=
          'var ret = ' + cfuncname + '(' + argNames.join(',') + ');'),
        !numericRet)
      ) {
        var strgfy = parseJSFunc(function() {
          return Pointer_stringify;
        }).returnValue;
        funcstr += 'ret = ' + strgfy + '(ret);';
      }
      return (
        numericArgs ||
          (ensureJSsource(),
          (funcstr +=
            JSsource.stackRestore.body.replace('()', '(stack)') + ';')),
        (funcstr += 'return ret})'),
        eval(funcstr)
      );
    };
  })(),
    (Module.ccall = ccall),
    (Module.cwrap = cwrap),
    (Module.setValue = setValue),
    (Module.getValue = getValue);
  var ALLOC_NORMAL = 0,
    ALLOC_STACK = 1,
    ALLOC_STATIC = 2,
    ALLOC_DYNAMIC = 3,
    ALLOC_NONE = 4;
  function allocate(e, r, t, n) {
    var i, a;
    a = 'number' == typeof e ? ((i = !0), e) : ((i = !1), e.length);
    var o,
      u = 'string' == typeof r ? r : null;
    if (
      ((o =
        t == ALLOC_NONE
          ? n
          : [
              'function' == typeof _malloc ? _malloc : Runtime.staticAlloc,
              Runtime.stackAlloc,
              Runtime.staticAlloc,
              Runtime.dynamicAlloc,
            ][void 0 === t ? ALLOC_STATIC : t](Math.max(a, u ? 1 : r.length))),
      i)
    ) {
      var f;
      n = o;
      for (assert(0 == (3 & o)), f = o + (-4 & a); n < f; n += 4)
        HEAP32[n >> 2] = 0;
      for (f = o + a; n < f; ) HEAP8[n++ >> 0] = 0;
      return o;
    }
    if ('i8' === u)
      return (
        e.subarray || e.slice
          ? HEAPU8.set(e, o)
          : HEAPU8.set(new Uint8Array(e), o),
        o
      );
    for (var l, s, c, _ = 0; _ < a; ) {
      var d = e[_];
      'function' == typeof d && (d = Runtime.getFunctionIndex(d)),
        0 !== (l = u || r[_])
          ? ('i64' == l && (l = 'i32'),
            setValue(o + _, d, l),
            c !== l && ((s = Runtime.getNativeTypeSize(l)), (c = l)),
            (_ += s))
          : _++;
    }
    return o;
  }
  function getMemory(e) {
    return staticSealed
      ? runtimeInitialized
        ? _malloc(e)
        : Runtime.dynamicAlloc(e)
      : Runtime.staticAlloc(e);
  }
  function Pointer_stringify(e, r) {
    if (0 === r || !e) return '';
    for (
      var t, n = 0, i = 0;
      (n |= t = HEAPU8[(e + i) >> 0]), (0 != t || r) && (i++, !r || i != r);

    );
    r = r || i;
    var a = '';
    if (n < 128) {
      for (var o; 0 < r; )
        (o = String.fromCharCode.apply(
          String,
          HEAPU8.subarray(e, e + Math.min(r, 1024)),
        )),
          (a = a ? a + o : o),
          (e += 1024),
          (r -= 1024);
      return a;
    }
    return Module.UTF8ToString(e);
  }
  function AsciiToString(e) {
    for (var r = ''; ; ) {
      var t = HEAP8[e++ >> 0];
      if (!t) return r;
      r += String.fromCharCode(t);
    }
  }
  function stringToAscii(e, r) {
    return writeAsciiToMemory(e, r, !1);
  }
  (Module.ALLOC_NORMAL = ALLOC_NORMAL),
    (Module.ALLOC_STACK = ALLOC_STACK),
    (Module.ALLOC_STATIC = ALLOC_STATIC),
    (Module.ALLOC_DYNAMIC = ALLOC_DYNAMIC),
    (Module.ALLOC_NONE = ALLOC_NONE),
    (Module.allocate = allocate),
    (Module.getMemory = getMemory),
    (Module.Pointer_stringify = Pointer_stringify),
    (Module.AsciiToString = AsciiToString),
    (Module.stringToAscii = stringToAscii);
  var UTF8Decoder =
    'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
  function UTF8ArrayToString(e, r) {
    for (var t = r; e[t]; ) ++t;
    if (16 < t - r && e.subarray && UTF8Decoder)
      return UTF8Decoder.decode(e.subarray(r, t));
    for (var n, i, a, o, u, f = ''; ; ) {
      if (!(n = e[r++])) return f;
      if (128 & n)
        if (((i = 63 & e[r++]), 192 != (224 & n)))
          if (
            ((a = 63 & e[r++]),
            (n =
              224 == (240 & n)
                ? ((15 & n) << 12) | (i << 6) | a
                : ((o = 63 & e[r++]),
                  240 == (248 & n)
                    ? ((7 & n) << 18) | (i << 12) | (a << 6) | o
                    : ((u = 63 & e[r++]),
                      248 == (252 & n)
                        ? ((3 & n) << 24) | (i << 18) | (a << 12) | (o << 6) | u
                        : ((1 & n) << 30) |
                          (i << 24) |
                          (a << 18) |
                          (o << 12) |
                          (u << 6) |
                          (63 & e[r++])))) < 65536)
          )
            f += String.fromCharCode(n);
          else {
            var l = n - 65536;
            f += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
          }
        else f += String.fromCharCode(((31 & n) << 6) | i);
      else f += String.fromCharCode(n);
    }
  }
  function UTF8ToString(e) {
    return UTF8ArrayToString(HEAPU8, e);
  }
  function stringToUTF8Array(e, r, t, n) {
    if (!(0 < n)) return 0;
    for (var i = t, a = t + n - 1, o = 0; o < e.length; ++o) {
      var u = e.charCodeAt(o);
      if (
        (55296 <= u &&
          u <= 57343 &&
          (u = (65536 + ((1023 & u) << 10)) | (1023 & e.charCodeAt(++o))),
        u <= 127)
      ) {
        if (a <= t) break;
        r[t++] = u;
      } else if (u <= 2047) {
        if (a <= t + 1) break;
        (r[t++] = 192 | (u >> 6)), (r[t++] = 128 | (63 & u));
      } else if (u <= 65535) {
        if (a <= t + 2) break;
        (r[t++] = 224 | (u >> 12)),
          (r[t++] = 128 | ((u >> 6) & 63)),
          (r[t++] = 128 | (63 & u));
      } else if (u <= 2097151) {
        if (a <= t + 3) break;
        (r[t++] = 240 | (u >> 18)),
          (r[t++] = 128 | ((u >> 12) & 63)),
          (r[t++] = 128 | ((u >> 6) & 63)),
          (r[t++] = 128 | (63 & u));
      } else if (u <= 67108863) {
        if (a <= t + 4) break;
        (r[t++] = 248 | (u >> 24)),
          (r[t++] = 128 | ((u >> 18) & 63)),
          (r[t++] = 128 | ((u >> 12) & 63)),
          (r[t++] = 128 | ((u >> 6) & 63)),
          (r[t++] = 128 | (63 & u));
      } else {
        if (a <= t + 5) break;
        (r[t++] = 252 | (u >> 30)),
          (r[t++] = 128 | ((u >> 24) & 63)),
          (r[t++] = 128 | ((u >> 18) & 63)),
          (r[t++] = 128 | ((u >> 12) & 63)),
          (r[t++] = 128 | ((u >> 6) & 63)),
          (r[t++] = 128 | (63 & u));
      }
    }
    return (r[t] = 0), t - i;
  }
  function stringToUTF8(e, r, t) {
    return stringToUTF8Array(e, HEAPU8, r, t);
  }
  function lengthBytesUTF8(e) {
    for (var r = 0, t = 0; t < e.length; ++t) {
      var n = e.charCodeAt(t);
      55296 <= n &&
        n <= 57343 &&
        (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++t))),
        n <= 127
          ? ++r
          : (r +=
              n <= 2047
                ? 2
                : n <= 65535
                ? 3
                : n <= 2097151
                ? 4
                : n <= 67108863
                ? 5
                : 6);
    }
    return r;
  }
  (Module.UTF8ArrayToString = UTF8ArrayToString),
    (Module.UTF8ToString = UTF8ToString),
    (Module.stringToUTF8Array = stringToUTF8Array),
    (Module.stringToUTF8 = stringToUTF8),
    (Module.lengthBytesUTF8 = lengthBytesUTF8);
  var UTF16Decoder =
    'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0;
  function demangle(e) {
    var r = Module.___cxa_demangle || Module.__cxa_demangle;
    if (r) {
      try {
        var t = e.substr(1),
          n = lengthBytesUTF8(t) + 1,
          i = _malloc(n);
        stringToUTF8(t, i, n);
        var a = _malloc(4),
          o = r(i, 0, 0, a);
        if (0 === getValue(a, 'i32') && o) return Pointer_stringify(o);
      } catch (e) {
      } finally {
        i && _free(i), a && _free(a), o && _free(o);
      }
      return e;
    }
    return (
      Runtime.warnOnce(
        'warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling',
      ),
      e
    );
  }
  function demangleAll(e) {
    return e.replace(/__Z[\w\d_]+/g, function(e) {
      var r = demangle(e);
      return e === r ? e : e + ' [' + r + ']';
    });
  }
  function jsStackTrace() {
    var r = new Error();
    if (!r.stack) {
      try {
        throw new Error(0);
      } catch (e) {
        r = e;
      }
      if (!r.stack) return '(no stack trace available)';
    }
    return r.stack.toString();
  }
  function stackTrace() {
    var e = jsStackTrace();
    return (
      Module.extraStackTrace && (e += '\n' + Module.extraStackTrace()),
      demangleAll(e)
    );
  }
  Module.stackTrace = stackTrace;
  var WASM_PAGE_SIZE = 65536,
    ASMJS_PAGE_SIZE = 16777216,
    MIN_TOTAL_MEMORY = 16777216,
    HEAP,
    buffer,
    HEAP8,
    HEAPU8,
    HEAP16,
    HEAPU16,
    HEAP32,
    HEAPU32,
    HEAPF32,
    HEAPF64,
    STATIC_BASE,
    STATICTOP,
    staticSealed,
    STACK_BASE,
    STACKTOP,
    STACK_MAX,
    DYNAMIC_BASE,
    DYNAMICTOP_PTR,
    byteLength;
  function alignUp(e, r) {
    return 0 < e % r && (e += r - (e % r)), e;
  }
  function updateGlobalBuffer(e) {
    Module.buffer = buffer = e;
  }
  function updateGlobalBufferViews() {
    (Module.HEAP8 = HEAP8 = new Int8Array(buffer)),
      (Module.HEAP16 = HEAP16 = new Int16Array(buffer)),
      (Module.HEAP32 = HEAP32 = new Int32Array(buffer)),
      (Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer)),
      (Module.HEAPU16 = HEAPU16 = new Uint16Array(buffer)),
      (Module.HEAPU32 = HEAPU32 = new Uint32Array(buffer)),
      (Module.HEAPF32 = HEAPF32 = new Float32Array(buffer)),
      (Module.HEAPF64 = HEAPF64 = new Float64Array(buffer));
  }
  function abortOnCannotGrowMemory() {
    abort(
      'Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' +
        TOTAL_MEMORY +
        ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ',
    );
  }
  function enlargeMemory() {
    var e = Module.usingWasm ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE,
      r = 2147483648 - e;
    if (HEAP32[DYNAMICTOP_PTR >> 2] > r) return !1;
    var t = TOTAL_MEMORY;
    for (
      TOTAL_MEMORY = Math.max(TOTAL_MEMORY, MIN_TOTAL_MEMORY);
      TOTAL_MEMORY < HEAP32[DYNAMICTOP_PTR >> 2];

    )
      TOTAL_MEMORY =
        TOTAL_MEMORY <= 536870912
          ? alignUp(2 * TOTAL_MEMORY, e)
          : Math.min(alignUp((3 * TOTAL_MEMORY + 2147483648) / 4, e), r);
    var n = Module.reallocBuffer(TOTAL_MEMORY);
    return n && n.byteLength == TOTAL_MEMORY
      ? (updateGlobalBuffer(n), updateGlobalBufferViews(), !0)
      : ((TOTAL_MEMORY = t), !1);
  }
  (STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0),
    (staticSealed = !1),
    Module.reallocBuffer ||
      (Module.reallocBuffer = function(e) {
        var r;
        try {
          if (ArrayBuffer.transfer) r = ArrayBuffer.transfer(buffer, e);
          else {
            var t = HEAP8;
            (r = new ArrayBuffer(e)), new Int8Array(r).set(t);
          }
        } catch (e) {
          return !1;
        }
        return !!_emscripten_replace_memory(r) && r;
      });
  try {
    (byteLength = Function.prototype.call.bind(
      Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get,
    )),
      byteLength(new ArrayBuffer(4));
  } catch (e) {
    byteLength = function(e) {
      return e.byteLength;
    };
  }
  var TOTAL_STACK = Module.TOTAL_STACK || 5242880,
    TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216;
  function getTotalMemory() {
    return TOTAL_MEMORY;
  }
  if (
    (TOTAL_MEMORY < TOTAL_STACK &&
      Module.printErr(
        'TOTAL_MEMORY should be larger than TOTAL_STACK, was ' +
          TOTAL_MEMORY +
          '! (TOTAL_STACK=' +
          TOTAL_STACK +
          ')',
      ),
    (buffer = Module.buffer ? Module.buffer : new ArrayBuffer(TOTAL_MEMORY)),
    updateGlobalBufferViews(),
    (HEAP32[0] = 1668509029),
    (HEAP16[1] = 25459),
    115 !== HEAPU8[2] || 99 !== HEAPU8[3])
  )
    throw 'Runtime error: expected the system to be little-endian!';
  function callRuntimeCallbacks(e) {
    for (; 0 < e.length; ) {
      var r = e.shift();
      if ('function' != typeof r) {
        var t = r.func;
        'number' == typeof t
          ? void 0 === r.arg
            ? Module.dynCall_v(t)
            : Module.dynCall_vi(t, r.arg)
          : t(void 0 === r.arg ? null : r.arg);
      } else r();
    }
  }
  (Module.HEAP = HEAP),
    (Module.buffer = buffer),
    (Module.HEAP8 = HEAP8),
    (Module.HEAP16 = HEAP16),
    (Module.HEAP32 = HEAP32),
    (Module.HEAPU8 = HEAPU8),
    (Module.HEAPU16 = HEAPU16),
    (Module.HEAPU32 = HEAPU32),
    (Module.HEAPF32 = HEAPF32),
    (Module.HEAPF64 = HEAPF64);
  var __ATPRERUN__ = [],
    __ATINIT__ = [],
    __ATMAIN__ = [],
    __ATEXIT__ = [],
    __ATPOSTRUN__ = [],
    runtimeInitialized = !1;
  function preRun() {
    if (Module.preRun)
      for (
        'function' == typeof Module.preRun && (Module.preRun = [Module.preRun]);
        Module.preRun.length;

      )
        addOnPreRun(Module.preRun.shift());
    callRuntimeCallbacks(__ATPRERUN__);
  }
  function ensureInitRuntime() {
    runtimeInitialized ||
      ((runtimeInitialized = !0), callRuntimeCallbacks(__ATINIT__));
  }
  function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }
  function exitRuntime() {
    callRuntimeCallbacks(__ATEXIT__);
  }
  function postRun() {
    if (Module.postRun)
      for (
        'function' == typeof Module.postRun &&
        (Module.postRun = [Module.postRun]);
        Module.postRun.length;

      )
        addOnPostRun(Module.postRun.shift());
    callRuntimeCallbacks(__ATPOSTRUN__);
  }
  function addOnPreRun(e) {
    __ATPRERUN__.unshift(e);
  }
  function addOnInit(e) {
    __ATINIT__.unshift(e);
  }
  function addOnPreMain(e) {
    __ATMAIN__.unshift(e);
  }
  function addOnExit(e) {
    __ATEXIT__.unshift(e);
  }
  function addOnPostRun(e) {
    __ATPOSTRUN__.unshift(e);
  }
  function intArrayFromString(e, r, t) {
    var n = 0 < t ? t : lengthBytesUTF8(e) + 1,
      i = new Array(n),
      a = stringToUTF8Array(e, i, 0, i.length);
    return r && (i.length = a), i;
  }
  function intArrayToString(e) {
    for (var r = [], t = 0; t < e.length; t++) {
      var n = e[t];
      255 < n && (n &= 255), r.push(String.fromCharCode(n));
    }
    return r.join('');
  }
  function writeStringToMemory(e, r, t) {
    var n, i;
    Runtime.warnOnce(
      'writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!',
    ),
      t && ((i = r + lengthBytesUTF8(e)), (n = HEAP8[i])),
      stringToUTF8(e, r, 1 / 0),
      t && (HEAP8[i] = n);
  }
  function writeArrayToMemory(e, r) {
    HEAP8.set(e, r);
  }
  function writeAsciiToMemory(e, r, t) {
    for (var n = 0; n < e.length; ++n) HEAP8[r++ >> 0] = e.charCodeAt(n);
    t || (HEAP8[r >> 0] = 0);
  }
  (Module.addOnPreRun = addOnPreRun),
    (Module.addOnInit = addOnInit),
    (Module.addOnPreMain = addOnPreMain),
    (Module.addOnExit = addOnExit),
    (Module.addOnPostRun = addOnPostRun),
    (Module.intArrayFromString = intArrayFromString),
    (Module.intArrayToString = intArrayToString),
    (Module.writeStringToMemory = writeStringToMemory),
    (Module.writeArrayToMemory = writeArrayToMemory),
    (Module.writeAsciiToMemory = writeAsciiToMemory),
    (Math.imul && -5 === Math.imul(4294967295, 5)) ||
      (Math.imul = function(e, r) {
        var t = 65535 & e,
          n = 65535 & r;
        return (t * n + (((e >>> 16) * n + t * (r >>> 16)) << 16)) | 0;
      }),
    (Math.imul = Math.imul),
    Math.clz32 ||
      (Math.clz32 = function(e) {
        e >>>= 0;
        for (var r = 0; r < 32; r++) if (e & (1 << (31 - r))) return r;
        return 32;
      }),
    (Math.clz32 = Math.clz32),
    Math.trunc ||
      (Math.trunc = function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      }),
    (Math.trunc = Math.trunc);
  var Math_abs = Math.abs,
    Math_ceil = Math.ceil,
    Math_floor = Math.floor,
    Math_min = Math.min,
    runDependencies = 0,
    dependenciesFulfilled = null;
  function addRunDependency(e) {
    runDependencies++,
      Module.monitorRunDependencies &&
        Module.monitorRunDependencies(runDependencies);
  }
  function removeRunDependency(e) {
    if (
      (runDependencies--,
      Module.monitorRunDependencies &&
        Module.monitorRunDependencies(runDependencies),
      0 == runDependencies && dependenciesFulfilled)
    ) {
      var r = dependenciesFulfilled;
      (dependenciesFulfilled = null), r();
    }
  }
  (Module.addRunDependency = addRunDependency),
    (Module.removeRunDependency = removeRunDependency),
    (Module.preloadedImages = {}),
    (Module.preloadedAudios = {}),
    (STATIC_BASE = Runtime.GLOBAL_BASE),
    (STATICTOP = STATIC_BASE + 6192),
    __ATINIT__.push(),
    allocate(
      [
        228,
        2,
        0,
        0,
        81,
        16,
        0,
        0,
        12,
        3,
        0,
        0,
        177,
        16,
        0,
        0,
        32,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        3,
        0,
        0,
        94,
        16,
        0,
        0,
        48,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        228,
        2,
        0,
        0,
        127,
        16,
        0,
        0,
        12,
        3,
        0,
        0,
        140,
        16,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        3,
        0,
        0,
        183,
        17,
        0,
        0,
        32,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        3,
        0,
        0,
        147,
        17,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        108,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        32,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        255,
        255,
        255,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        248,
        19,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        224,
        1,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        40,
        20,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        10,
        255,
        255,
        255,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        255,
        255,
        255,
        255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        56,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        3,
        0,
        0,
        0,
        4,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        37,
        115,
        40,
        37,
        117,
        41,
        58,
        32,
        65,
        115,
        115,
        101,
        114,
        116,
        105,
        111,
        110,
        32,
        102,
        97,
        105,
        108,
        117,
        114,
        101,
        58,
        32,
        34,
        37,
        115,
        34,
        10,
        0,
        109,
        95,
        115,
        105,
        122,
        101,
        32,
        60,
        61,
        32,
        109,
        95,
        99,
        97,
        112,
        97,
        99,
        105,
        116,
        121,
        0,
        46,
        47,
        105,
        110,
        99,
        92,
        99,
        114,
        110,
        95,
        100,
        101,
        99,
        111,
        109,
        112,
        46,
        104,
        0,
        109,
        105,
        110,
        95,
        110,
        101,
        119,
        95,
        99,
        97,
        112,
        97,
        99,
        105,
        116,
        121,
        32,
        60,
        32,
        40,
        48,
        120,
        55,
        70,
        70,
        70,
        48,
        48,
        48,
        48,
        85,
        32,
        47,
        32,
        101,
        108,
        101,
        109,
        101,
        110,
        116,
        95,
        115,
        105,
        122,
        101,
        41,
        0,
        110,
        101,
        119,
        95,
        99,
        97,
        112,
        97,
        99,
        105,
        116,
        121,
        32,
        38,
        38,
        32,
        40,
        110,
        101,
        119,
        95,
        99,
        97,
        112,
        97,
        99,
        105,
        116,
        121,
        32,
        62,
        32,
        109,
        95,
        99,
        97,
        112,
        97,
        99,
        105,
        116,
        121,
        41,
        0,
        110,
        117,
        109,
        95,
        99,
        111,
        100,
        101,
        115,
        91,
        99,
        93,
        0,
        115,
        111,
        114,
        116,
        101,
        100,
        95,
        112,
        111,
        115,
        32,
        60,
        32,
        116,
        111,
        116,
        97,
        108,
        95,
        117,
        115,
        101,
        100,
        95,
        115,
        121,
        109,
        115,
        0,
        112,
        67,
        111,
        100,
        101,
        115,
        105,
        122,
        101,
        115,
        91,
        115,
        121,
        109,
        95,
        105,
        110,
        100,
        101,
        120,
        93,
        32,
        61,
        61,
        32,
        99,
        111,
        100,
        101,
        115,
        105,
        122,
        101,
        0,
        116,
        32,
        60,
        32,
        40,
        49,
        85,
        32,
        60,
        60,
        32,
        116,
        97,
        98,
        108,
        101,
        95,
        98,
        105,
        116,
        115,
        41,
        0,
        109,
        95,
        108,
        111,
        111,
        107,
        117,
        112,
        91,
        116,
        93,
        32,
        61,
        61,
        32,
        99,
        85,
        73,
        78,
        84,
        51,
        50,
        95,
        77,
        65,
        88,
        0,
        99,
        114,
        110,
        100,
        95,
        109,
        97,
        108,
        108,
        111,
        99,
        58,
        32,
        115,
        105,
        122,
        101,
        32,
        116,
        111,
        111,
        32,
        98,
        105,
        103,
        0,
        99,
        114,
        110,
        100,
        95,
        109,
        97,
        108,
        108,
        111,
        99,
        58,
        32,
        111,
        117,
        116,
        32,
        111,
        102,
        32,
        109,
        101,
        109,
        111,
        114,
        121,
        0,
        40,
        40,
        117,
        105,
        110,
        116,
        51,
        50,
        41,
        112,
        95,
        110,
        101,
        119,
        32,
        38,
        32,
        40,
        67,
        82,
        78,
        68,
        95,
        77,
        73,
        78,
        95,
        65,
        76,
        76,
        79,
        67,
        95,
        65,
        76,
        73,
        71,
        78,
        77,
        69,
        78,
        84,
        32,
        45,
        32,
        49,
        41,
        41,
        32,
        61,
        61,
        32,
        48,
        0,
        99,
        114,
        110,
        100,
        95,
        114,
        101,
        97,
        108,
        108,
        111,
        99,
        58,
        32,
        98,
        97,
        100,
        32,
        112,
        116,
        114,
        0,
        99,
        114,
        110,
        100,
        95,
        102,
        114,
        101,
        101,
        58,
        32,
        98,
        97,
        100,
        32,
        112,
        116,
        114,
        0,
        102,
        97,
        108,
        115,
        101,
        0,
        40,
        116,
        111,
        116,
        97,
        108,
        95,
        115,
        121,
        109,
        115,
        32,
        62,
        61,
        32,
        49,
        41,
        32,
        38,
        38,
        32,
        40,
        116,
        111,
        116,
        97,
        108,
        95,
        115,
        121,
        109,
        115,
        32,
        60,
        61,
        32,
        112,
        114,
        101,
        102,
        105,
        120,
        95,
        99,
        111,
        100,
        105,
        110,
        103,
        58,
        58,
        99,
        77,
        97,
        120,
        83,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        83,
        121,
        109,
        115,
        41,
        0,
        17,
        18,
        19,
        20,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15,
        16,
        48,
        0,
        110,
        117,
        109,
        95,
        98,
        105,
        116,
        115,
        32,
        60,
        61,
        32,
        51,
        50,
        85,
        0,
        109,
        95,
        98,
        105,
        116,
        95,
        99,
        111,
        117,
        110,
        116,
        32,
        60,
        61,
        32,
        99,
        66,
        105,
        116,
        66,
        117,
        102,
        83,
        105,
        122,
        101,
        0,
        116,
        32,
        33,
        61,
        32,
        99,
        85,
        73,
        78,
        84,
        51,
        50,
        95,
        77,
        65,
        88,
        0,
        109,
        111,
        100,
        101,
        108,
        46,
        109,
        95,
        99,
        111,
        100,
        101,
        95,
        115,
        105,
        122,
        101,
        115,
        91,
        115,
        121,
        109,
        93,
        32,
        61,
        61,
        32,
        108,
        101,
        110,
        0,
        0,
        2,
        3,
        1,
        0,
        2,
        3,
        4,
        5,
        6,
        7,
        1,
        40,
        108,
        101,
        110,
        32,
        62,
        61,
        32,
        49,
        41,
        32,
        38,
        38,
        32,
        40,
        108,
        101,
        110,
        32,
        60,
        61,
        32,
        99,
        77,
        97,
        120,
        69,
        120,
        112,
        101,
        99,
        116,
        101,
        100,
        67,
        111,
        100,
        101,
        83,
        105,
        122,
        101,
        41,
        0,
        105,
        32,
        60,
        32,
        109,
        95,
        115,
        105,
        122,
        101,
        0,
        110,
        101,
        120,
        116,
        95,
        108,
        101,
        118,
        101,
        108,
        95,
        111,
        102,
        115,
        32,
        62,
        32,
        99,
        117,
        114,
        95,
        108,
        101,
        118,
        101,
        108,
        95,
        111,
        102,
        115,
        0,
        1,
        2,
        2,
        3,
        3,
        3,
        3,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        2,
        1,
        2,
        0,
        0,
        0,
        1,
        0,
        2,
        1,
        0,
        2,
        0,
        0,
        1,
        2,
        3,
        110,
        117,
        109,
        32,
        38,
        38,
        32,
        40,
        110,
        117,
        109,
        32,
        61,
        61,
        32,
        126,
        110,
        117,
        109,
        95,
        99,
        104,
        101,
        99,
        107,
        41,
        0,
        17,
        0,
        10,
        0,
        17,
        17,
        17,
        0,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        15,
        10,
        17,
        17,
        17,
        3,
        10,
        7,
        0,
        1,
        19,
        9,
        11,
        11,
        0,
        0,
        9,
        6,
        11,
        0,
        0,
        11,
        0,
        6,
        17,
        0,
        0,
        0,
        17,
        17,
        17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        10,
        10,
        17,
        17,
        17,
        0,
        10,
        0,
        0,
        2,
        0,
        9,
        11,
        0,
        0,
        0,
        9,
        0,
        11,
        0,
        0,
        11,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        9,
        12,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        13,
        0,
        0,
        0,
        4,
        13,
        0,
        0,
        0,
        0,
        9,
        14,
        0,
        0,
        0,
        0,
        0,
        14,
        0,
        0,
        14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        9,
        16,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        16,
        0,
        0,
        18,
        0,
        0,
        0,
        18,
        18,
        18,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        18,
        18,
        18,
        0,
        0,
        0,
        0,
        0,
        0,
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        11,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        0,
        10,
        0,
        0,
        0,
        0,
        9,
        11,
        0,
        0,
        0,
        0,
        0,
        11,
        0,
        0,
        11,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        0,
        0,
        9,
        12,
        0,
        0,
        0,
        0,
        0,
        12,
        0,
        0,
        12,
        0,
        0,
        45,
        43,
        32,
        32,
        32,
        48,
        88,
        48,
        120,
        0,
        40,
        110,
        117,
        108,
        108,
        41,
        0,
        45,
        48,
        88,
        43,
        48,
        88,
        32,
        48,
        88,
        45,
        48,
        120,
        43,
        48,
        120,
        32,
        48,
        120,
        0,
        105,
        110,
        102,
        0,
        73,
        78,
        70,
        0,
        110,
        97,
        110,
        0,
        78,
        65,
        78,
        0,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        65,
        66,
        67,
        68,
        69,
        70,
        46,
        0,
        84,
        33,
        34,
        25,
        13,
        1,
        2,
        3,
        17,
        75,
        28,
        12,
        16,
        4,
        11,
        29,
        18,
        30,
        39,
        104,
        110,
        111,
        112,
        113,
        98,
        32,
        5,
        6,
        15,
        19,
        20,
        21,
        26,
        8,
        22,
        7,
        40,
        36,
        23,
        24,
        9,
        10,
        14,
        27,
        31,
        37,
        35,
        131,
        130,
        125,
        38,
        42,
        43,
        60,
        61,
        62,
        63,
        67,
        71,
        74,
        77,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        99,
        100,
        101,
        102,
        103,
        105,
        106,
        107,
        108,
        114,
        115,
        116,
        121,
        122,
        123,
        124,
        0,
        73,
        108,
        108,
        101,
        103,
        97,
        108,
        32,
        98,
        121,
        116,
        101,
        32,
        115,
        101,
        113,
        117,
        101,
        110,
        99,
        101,
        0,
        68,
        111,
        109,
        97,
        105,
        110,
        32,
        101,
        114,
        114,
        111,
        114,
        0,
        82,
        101,
        115,
        117,
        108,
        116,
        32,
        110,
        111,
        116,
        32,
        114,
        101,
        112,
        114,
        101,
        115,
        101,
        110,
        116,
        97,
        98,
        108,
        101,
        0,
        78,
        111,
        116,
        32,
        97,
        32,
        116,
        116,
        121,
        0,
        80,
        101,
        114,
        109,
        105,
        115,
        115,
        105,
        111,
        110,
        32,
        100,
        101,
        110,
        105,
        101,
        100,
        0,
        79,
        112,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        32,
        110,
        111,
        116,
        32,
        112,
        101,
        114,
        109,
        105,
        116,
        116,
        101,
        100,
        0,
        78,
        111,
        32,
        115,
        117,
        99,
        104,
        32,
        102,
        105,
        108,
        101,
        32,
        111,
        114,
        32,
        100,
        105,
        114,
        101,
        99,
        116,
        111,
        114,
        121,
        0,
        78,
        111,
        32,
        115,
        117,
        99,
        104,
        32,
        112,
        114,
        111,
        99,
        101,
        115,
        115,
        0,
        70,
        105,
        108,
        101,
        32,
        101,
        120,
        105,
        115,
        116,
        115,
        0,
        86,
        97,
        108,
        117,
        101,
        32,
        116,
        111,
        111,
        32,
        108,
        97,
        114,
        103,
        101,
        32,
        102,
        111,
        114,
        32,
        100,
        97,
        116,
        97,
        32,
        116,
        121,
        112,
        101,
        0,
        78,
        111,
        32,
        115,
        112,
        97,
        99,
        101,
        32,
        108,
        101,
        102,
        116,
        32,
        111,
        110,
        32,
        100,
        101,
        118,
        105,
        99,
        101,
        0,
        79,
        117,
        116,
        32,
        111,
        102,
        32,
        109,
        101,
        109,
        111,
        114,
        121,
        0,
        82,
        101,
        115,
        111,
        117,
        114,
        99,
        101,
        32,
        98,
        117,
        115,
        121,
        0,
        73,
        110,
        116,
        101,
        114,
        114,
        117,
        112,
        116,
        101,
        100,
        32,
        115,
        121,
        115,
        116,
        101,
        109,
        32,
        99,
        97,
        108,
        108,
        0,
        82,
        101,
        115,
        111,
        117,
        114,
        99,
        101,
        32,
        116,
        101,
        109,
        112,
        111,
        114,
        97,
        114,
        105,
        108,
        121,
        32,
        117,
        110,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        73,
        110,
        118,
        97,
        108,
        105,
        100,
        32,
        115,
        101,
        101,
        107,
        0,
        67,
        114,
        111,
        115,
        115,
        45,
        100,
        101,
        118,
        105,
        99,
        101,
        32,
        108,
        105,
        110,
        107,
        0,
        82,
        101,
        97,
        100,
        45,
        111,
        110,
        108,
        121,
        32,
        102,
        105,
        108,
        101,
        32,
        115,
        121,
        115,
        116,
        101,
        109,
        0,
        68,
        105,
        114,
        101,
        99,
        116,
        111,
        114,
        121,
        32,
        110,
        111,
        116,
        32,
        101,
        109,
        112,
        116,
        121,
        0,
        67,
        111,
        110,
        110,
        101,
        99,
        116,
        105,
        111,
        110,
        32,
        114,
        101,
        115,
        101,
        116,
        32,
        98,
        121,
        32,
        112,
        101,
        101,
        114,
        0,
        79,
        112,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        32,
        116,
        105,
        109,
        101,
        100,
        32,
        111,
        117,
        116,
        0,
        67,
        111,
        110,
        110,
        101,
        99,
        116,
        105,
        111,
        110,
        32,
        114,
        101,
        102,
        117,
        115,
        101,
        100,
        0,
        72,
        111,
        115,
        116,
        32,
        105,
        115,
        32,
        100,
        111,
        119,
        110,
        0,
        72,
        111,
        115,
        116,
        32,
        105,
        115,
        32,
        117,
        110,
        114,
        101,
        97,
        99,
        104,
        97,
        98,
        108,
        101,
        0,
        65,
        100,
        100,
        114,
        101,
        115,
        115,
        32,
        105,
        110,
        32,
        117,
        115,
        101,
        0,
        66,
        114,
        111,
        107,
        101,
        110,
        32,
        112,
        105,
        112,
        101,
        0,
        73,
        47,
        79,
        32,
        101,
        114,
        114,
        111,
        114,
        0,
        78,
        111,
        32,
        115,
        117,
        99,
        104,
        32,
        100,
        101,
        118,
        105,
        99,
        101,
        32,
        111,
        114,
        32,
        97,
        100,
        100,
        114,
        101,
        115,
        115,
        0,
        66,
        108,
        111,
        99,
        107,
        32,
        100,
        101,
        118,
        105,
        99,
        101,
        32,
        114,
        101,
        113,
        117,
        105,
        114,
        101,
        100,
        0,
        78,
        111,
        32,
        115,
        117,
        99,
        104,
        32,
        100,
        101,
        118,
        105,
        99,
        101,
        0,
        78,
        111,
        116,
        32,
        97,
        32,
        100,
        105,
        114,
        101,
        99,
        116,
        111,
        114,
        121,
        0,
        73,
        115,
        32,
        97,
        32,
        100,
        105,
        114,
        101,
        99,
        116,
        111,
        114,
        121,
        0,
        84,
        101,
        120,
        116,
        32,
        102,
        105,
        108,
        101,
        32,
        98,
        117,
        115,
        121,
        0,
        69,
        120,
        101,
        99,
        32,
        102,
        111,
        114,
        109,
        97,
        116,
        32,
        101,
        114,
        114,
        111,
        114,
        0,
        73,
        110,
        118,
        97,
        108,
        105,
        100,
        32,
        97,
        114,
        103,
        117,
        109,
        101,
        110,
        116,
        0,
        65,
        114,
        103,
        117,
        109,
        101,
        110,
        116,
        32,
        108,
        105,
        115,
        116,
        32,
        116,
        111,
        111,
        32,
        108,
        111,
        110,
        103,
        0,
        83,
        121,
        109,
        98,
        111,
        108,
        105,
        99,
        32,
        108,
        105,
        110,
        107,
        32,
        108,
        111,
        111,
        112,
        0,
        70,
        105,
        108,
        101,
        110,
        97,
        109,
        101,
        32,
        116,
        111,
        111,
        32,
        108,
        111,
        110,
        103,
        0,
        84,
        111,
        111,
        32,
        109,
        97,
        110,
        121,
        32,
        111,
        112,
        101,
        110,
        32,
        102,
        105,
        108,
        101,
        115,
        32,
        105,
        110,
        32,
        115,
        121,
        115,
        116,
        101,
        109,
        0,
        78,
        111,
        32,
        102,
        105,
        108,
        101,
        32,
        100,
        101,
        115,
        99,
        114,
        105,
        112,
        116,
        111,
        114,
        115,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        66,
        97,
        100,
        32,
        102,
        105,
        108,
        101,
        32,
        100,
        101,
        115,
        99,
        114,
        105,
        112,
        116,
        111,
        114,
        0,
        78,
        111,
        32,
        99,
        104,
        105,
        108,
        100,
        32,
        112,
        114,
        111,
        99,
        101,
        115,
        115,
        0,
        66,
        97,
        100,
        32,
        97,
        100,
        100,
        114,
        101,
        115,
        115,
        0,
        70,
        105,
        108,
        101,
        32,
        116,
        111,
        111,
        32,
        108,
        97,
        114,
        103,
        101,
        0,
        84,
        111,
        111,
        32,
        109,
        97,
        110,
        121,
        32,
        108,
        105,
        110,
        107,
        115,
        0,
        78,
        111,
        32,
        108,
        111,
        99,
        107,
        115,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        82,
        101,
        115,
        111,
        117,
        114,
        99,
        101,
        32,
        100,
        101,
        97,
        100,
        108,
        111,
        99,
        107,
        32,
        119,
        111,
        117,
        108,
        100,
        32,
        111,
        99,
        99,
        117,
        114,
        0,
        83,
        116,
        97,
        116,
        101,
        32,
        110,
        111,
        116,
        32,
        114,
        101,
        99,
        111,
        118,
        101,
        114,
        97,
        98,
        108,
        101,
        0,
        80,
        114,
        101,
        118,
        105,
        111,
        117,
        115,
        32,
        111,
        119,
        110,
        101,
        114,
        32,
        100,
        105,
        101,
        100,
        0,
        79,
        112,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        32,
        99,
        97,
        110,
        99,
        101,
        108,
        101,
        100,
        0,
        70,
        117,
        110,
        99,
        116,
        105,
        111,
        110,
        32,
        110,
        111,
        116,
        32,
        105,
        109,
        112,
        108,
        101,
        109,
        101,
        110,
        116,
        101,
        100,
        0,
        78,
        111,
        32,
        109,
        101,
        115,
        115,
        97,
        103,
        101,
        32,
        111,
        102,
        32,
        100,
        101,
        115,
        105,
        114,
        101,
        100,
        32,
        116,
        121,
        112,
        101,
        0,
        73,
        100,
        101,
        110,
        116,
        105,
        102,
        105,
        101,
        114,
        32,
        114,
        101,
        109,
        111,
        118,
        101,
        100,
        0,
        68,
        101,
        118,
        105,
        99,
        101,
        32,
        110,
        111,
        116,
        32,
        97,
        32,
        115,
        116,
        114,
        101,
        97,
        109,
        0,
        78,
        111,
        32,
        100,
        97,
        116,
        97,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        68,
        101,
        118,
        105,
        99,
        101,
        32,
        116,
        105,
        109,
        101,
        111,
        117,
        116,
        0,
        79,
        117,
        116,
        32,
        111,
        102,
        32,
        115,
        116,
        114,
        101,
        97,
        109,
        115,
        32,
        114,
        101,
        115,
        111,
        117,
        114,
        99,
        101,
        115,
        0,
        76,
        105,
        110,
        107,
        32,
        104,
        97,
        115,
        32,
        98,
        101,
        101,
        110,
        32,
        115,
        101,
        118,
        101,
        114,
        101,
        100,
        0,
        80,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        32,
        101,
        114,
        114,
        111,
        114,
        0,
        66,
        97,
        100,
        32,
        109,
        101,
        115,
        115,
        97,
        103,
        101,
        0,
        70,
        105,
        108,
        101,
        32,
        100,
        101,
        115,
        99,
        114,
        105,
        112,
        116,
        111,
        114,
        32,
        105,
        110,
        32,
        98,
        97,
        100,
        32,
        115,
        116,
        97,
        116,
        101,
        0,
        78,
        111,
        116,
        32,
        97,
        32,
        115,
        111,
        99,
        107,
        101,
        116,
        0,
        68,
        101,
        115,
        116,
        105,
        110,
        97,
        116,
        105,
        111,
        110,
        32,
        97,
        100,
        100,
        114,
        101,
        115,
        115,
        32,
        114,
        101,
        113,
        117,
        105,
        114,
        101,
        100,
        0,
        77,
        101,
        115,
        115,
        97,
        103,
        101,
        32,
        116,
        111,
        111,
        32,
        108,
        97,
        114,
        103,
        101,
        0,
        80,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        32,
        119,
        114,
        111,
        110,
        103,
        32,
        116,
        121,
        112,
        101,
        32,
        102,
        111,
        114,
        32,
        115,
        111,
        99,
        107,
        101,
        116,
        0,
        80,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        32,
        110,
        111,
        116,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        80,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        32,
        110,
        111,
        116,
        32,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        0,
        83,
        111,
        99,
        107,
        101,
        116,
        32,
        116,
        121,
        112,
        101,
        32,
        110,
        111,
        116,
        32,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        0,
        78,
        111,
        116,
        32,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        0,
        80,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        32,
        102,
        97,
        109,
        105,
        108,
        121,
        32,
        110,
        111,
        116,
        32,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        0,
        65,
        100,
        100,
        114,
        101,
        115,
        115,
        32,
        102,
        97,
        109,
        105,
        108,
        121,
        32,
        110,
        111,
        116,
        32,
        115,
        117,
        112,
        112,
        111,
        114,
        116,
        101,
        100,
        32,
        98,
        121,
        32,
        112,
        114,
        111,
        116,
        111,
        99,
        111,
        108,
        0,
        65,
        100,
        100,
        114,
        101,
        115,
        115,
        32,
        110,
        111,
        116,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        78,
        101,
        116,
        119,
        111,
        114,
        107,
        32,
        105,
        115,
        32,
        100,
        111,
        119,
        110,
        0,
        78,
        101,
        116,
        119,
        111,
        114,
        107,
        32,
        117,
        110,
        114,
        101,
        97,
        99,
        104,
        97,
        98,
        108,
        101,
        0,
        67,
        111,
        110,
        110,
        101,
        99,
        116,
        105,
        111,
        110,
        32,
        114,
        101,
        115,
        101,
        116,
        32,
        98,
        121,
        32,
        110,
        101,
        116,
        119,
        111,
        114,
        107,
        0,
        67,
        111,
        110,
        110,
        101,
        99,
        116,
        105,
        111,
        110,
        32,
        97,
        98,
        111,
        114,
        116,
        101,
        100,
        0,
        78,
        111,
        32,
        98,
        117,
        102,
        102,
        101,
        114,
        32,
        115,
        112,
        97,
        99,
        101,
        32,
        97,
        118,
        97,
        105,
        108,
        97,
        98,
        108,
        101,
        0,
        83,
        111,
        99,
        107,
        101,
        116,
        32,
        105,
        115,
        32,
        99,
        111,
        110,
        110,
        101,
        99,
        116,
        101,
        100,
        0,
        83,
        111,
        99,
        107,
        101,
        116,
        32,
        110,
        111,
        116,
        32,
        99,
        111,
        110,
        110,
        101,
        99,
        116,
        101,
        100,
        0,
        67,
        97,
        110,
        110,
        111,
        116,
        32,
        115,
        101,
        110,
        100,
        32,
        97,
        102,
        116,
        101,
        114,
        32,
        115,
        111,
        99,
        107,
        101,
        116,
        32,
        115,
        104,
        117,
        116,
        100,
        111,
        119,
        110,
        0,
        79,
        112,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        32,
        97,
        108,
        114,
        101,
        97,
        100,
        121,
        32,
        105,
        110,
        32,
        112,
        114,
        111,
        103,
        114,
        101,
        115,
        115,
        0,
        79,
        112,
        101,
        114,
        97,
        116,
        105,
        111,
        110,
        32,
        105,
        110,
        32,
        112,
        114,
        111,
        103,
        114,
        101,
        115,
        115,
        0,
        83,
        116,
        97,
        108,
        101,
        32,
        102,
        105,
        108,
        101,
        32,
        104,
        97,
        110,
        100,
        108,
        101,
        0,
        82,
        101,
        109,
        111,
        116,
        101,
        32,
        73,
        47,
        79,
        32,
        101,
        114,
        114,
        111,
        114,
        0,
        81,
        117,
        111,
        116,
        97,
        32,
        101,
        120,
        99,
        101,
        101,
        100,
        101,
        100,
        0,
        78,
        111,
        32,
        109,
        101,
        100,
        105,
        117,
        109,
        32,
        102,
        111,
        117,
        110,
        100,
        0,
        87,
        114,
        111,
        110,
        103,
        32,
        109,
        101,
        100,
        105,
        117,
        109,
        32,
        116,
        121,
        112,
        101,
        0,
        78,
        111,
        32,
        101,
        114,
        114,
        111,
        114,
        32,
        105,
        110,
        102,
        111,
        114,
        109,
        97,
        116,
        105,
        111,
        110,
        0,
        0,
        116,
        101,
        114,
        109,
        105,
        110,
        97,
        116,
        105,
        110,
        103,
        32,
        119,
        105,
        116,
        104,
        32,
        37,
        115,
        32,
        101,
        120,
        99,
        101,
        112,
        116,
        105,
        111,
        110,
        32,
        111,
        102,
        32,
        116,
        121,
        112,
        101,
        32,
        37,
        115,
        58,
        32,
        37,
        115,
        0,
        116,
        101,
        114,
        109,
        105,
        110,
        97,
        116,
        105,
        110,
        103,
        32,
        119,
        105,
        116,
        104,
        32,
        37,
        115,
        32,
        101,
        120,
        99,
        101,
        112,
        116,
        105,
        111,
        110,
        32,
        111,
        102,
        32,
        116,
        121,
        112,
        101,
        32,
        37,
        115,
        0,
        116,
        101,
        114,
        109,
        105,
        110,
        97,
        116,
        105,
        110,
        103,
        32,
        119,
        105,
        116,
        104,
        32,
        37,
        115,
        32,
        102,
        111,
        114,
        101,
        105,
        103,
        110,
        32,
        101,
        120,
        99,
        101,
        112,
        116,
        105,
        111,
        110,
        0,
        116,
        101,
        114,
        109,
        105,
        110,
        97,
        116,
        105,
        110,
        103,
        0,
        117,
        110,
        99,
        97,
        117,
        103,
        104,
        116,
        0,
        83,
        116,
        57,
        101,
        120,
        99,
        101,
        112,
        116,
        105,
        111,
        110,
        0,
        78,
        49,
        48,
        95,
        95,
        99,
        120,
        120,
        97,
        98,
        105,
        118,
        49,
        49,
        54,
        95,
        95,
        115,
        104,
        105,
        109,
        95,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        69,
        0,
        83,
        116,
        57,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        0,
        78,
        49,
        48,
        95,
        95,
        99,
        120,
        120,
        97,
        98,
        105,
        118,
        49,
        50,
        48,
        95,
        95,
        115,
        105,
        95,
        99,
        108,
        97,
        115,
        115,
        95,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        69,
        0,
        78,
        49,
        48,
        95,
        95,
        99,
        120,
        120,
        97,
        98,
        105,
        118,
        49,
        49,
        55,
        95,
        95,
        99,
        108,
        97,
        115,
        115,
        95,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        69,
        0,
        112,
        116,
        104,
        114,
        101,
        97,
        100,
        95,
        111,
        110,
        99,
        101,
        32,
        102,
        97,
        105,
        108,
        117,
        114,
        101,
        32,
        105,
        110,
        32,
        95,
        95,
        99,
        120,
        97,
        95,
        103,
        101,
        116,
        95,
        103,
        108,
        111,
        98,
        97,
        108,
        115,
        95,
        102,
        97,
        115,
        116,
        40,
        41,
        0,
        99,
        97,
        110,
        110,
        111,
        116,
        32,
        99,
        114,
        101,
        97,
        116,
        101,
        32,
        112,
        116,
        104,
        114,
        101,
        97,
        100,
        32,
        107,
        101,
        121,
        32,
        102,
        111,
        114,
        32,
        95,
        95,
        99,
        120,
        97,
        95,
        103,
        101,
        116,
        95,
        103,
        108,
        111,
        98,
        97,
        108,
        115,
        40,
        41,
        0,
        99,
        97,
        110,
        110,
        111,
        116,
        32,
        122,
        101,
        114,
        111,
        32,
        111,
        117,
        116,
        32,
        116,
        104,
        114,
        101,
        97,
        100,
        32,
        118,
        97,
        108,
        117,
        101,
        32,
        102,
        111,
        114,
        32,
        95,
        95,
        99,
        120,
        97,
        95,
        103,
        101,
        116,
        95,
        103,
        108,
        111,
        98,
        97,
        108,
        115,
        40,
        41,
        0,
        116,
        101,
        114,
        109,
        105,
        110,
        97,
        116,
        101,
        95,
        104,
        97,
        110,
        100,
        108,
        101,
        114,
        32,
        117,
        110,
        101,
        120,
        112,
        101,
        99,
        116,
        101,
        100,
        108,
        121,
        32,
        114,
        101,
        116,
        117,
        114,
        110,
        101,
        100,
        0,
        78,
        49,
        48,
        95,
        95,
        99,
        120,
        120,
        97,
        98,
        105,
        118,
        49,
        49,
        57,
        95,
        95,
        112,
        111,
        105,
        110,
        116,
        101,
        114,
        95,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        69,
        0,
        78,
        49,
        48,
        95,
        95,
        99,
        120,
        120,
        97,
        98,
        105,
        118,
        49,
        49,
        55,
        95,
        95,
        112,
        98,
        97,
        115,
        101,
        95,
        116,
        121,
        112,
        101,
        95,
        105,
        110,
        102,
        111,
        69,
        0,
      ],
      'i8',
      ALLOC_NONE,
      Runtime.GLOBAL_BASE,
    );
  var tempDoublePtr = STATICTOP;
  function _abort() {
    Module.abort();
  }
  function __ZSt18uncaught_exceptionv() {
    return !!__ZSt18uncaught_exceptionv.uncaught_exception;
  }
  STATICTOP += 16;
  var EXCEPTIONS = {
    last: 0,
    caught: [],
    infos: {},
    deAdjust: function(e) {
      if (!e || EXCEPTIONS.infos[e]) return e;
      for (var r in EXCEPTIONS.infos) {
        if (EXCEPTIONS.infos[r].adjusted === e) return r;
      }
      return e;
    },
    addRef: function(e) {
      e && EXCEPTIONS.infos[e].refcount++;
    },
    decRef: function(e) {
      if (e) {
        var r = EXCEPTIONS.infos[e];
        assert(0 < r.refcount),
          r.refcount--,
          0 !== r.refcount ||
            r.rethrown ||
            (r.destructor && Module.dynCall_vi(r.destructor, e),
            delete EXCEPTIONS.infos[e],
            ___cxa_free_exception(e));
      }
    },
    clearRef: function(e) {
      e && (EXCEPTIONS.infos[e].refcount = 0);
    },
  };
  function ___cxa_begin_catch(e) {
    var r = EXCEPTIONS.infos[e];
    return (
      r &&
        !r.caught &&
        ((r.caught = !0), __ZSt18uncaught_exceptionv.uncaught_exception--),
      r && (r.rethrown = !1),
      EXCEPTIONS.caught.push(e),
      EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(e)),
      e
    );
  }
  function _pthread_once(e, r) {
    _pthread_once.seen || (_pthread_once.seen = {}),
      e in _pthread_once.seen ||
        (Module.dynCall_v(r), (_pthread_once.seen[e] = 1));
  }
  function _emscripten_memcpy_big(e, r, t) {
    return HEAPU8.set(HEAPU8.subarray(r, r + t), e), e;
  }
  var SYSCALLS = {
    varargs: 0,
    get: function(e) {
      return (SYSCALLS.varargs += 4), HEAP32[(SYSCALLS.varargs - 4) >> 2];
    },
    getStr: function() {
      return Pointer_stringify(SYSCALLS.get());
    },
    get64: function() {
      var e = SYSCALLS.get(),
        r = SYSCALLS.get();
      return assert(0 <= e ? 0 === r : -1 === r), e;
    },
    getZero: function() {
      assert(0 === SYSCALLS.get());
    },
  };
  function ___syscall6(e, r) {
    SYSCALLS.varargs = r;
    try {
      var t = SYSCALLS.getStreamFromFD();
      return FS.close(t), 0;
    } catch (e) {
      return (
        ('undefined' != typeof FS && e instanceof FS.ErrnoError) || abort(e),
        -e.errno
      );
    }
  }
  var cttz_i8 = allocate(
      [
        8,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        5,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        6,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        5,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        7,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        5,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        6,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        5,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
      ],
      'i8',
      ALLOC_STATIC,
    ),
    PTHREAD_SPECIFIC = {};
  function _pthread_getspecific(e) {
    return PTHREAD_SPECIFIC[e] || 0;
  }
  function ___setErrNo(e) {
    return (
      Module.___errno_location && (HEAP32[Module.___errno_location() >> 2] = e),
      e
    );
  }
  var PTHREAD_SPECIFIC_NEXT_KEY = 1,
    ERRNO_CODES = {
      EPERM: 1,
      ENOENT: 2,
      ESRCH: 3,
      EINTR: 4,
      EIO: 5,
      ENXIO: 6,
      E2BIG: 7,
      ENOEXEC: 8,
      EBADF: 9,
      ECHILD: 10,
      EAGAIN: 11,
      EWOULDBLOCK: 11,
      ENOMEM: 12,
      EACCES: 13,
      EFAULT: 14,
      ENOTBLK: 15,
      EBUSY: 16,
      EEXIST: 17,
      EXDEV: 18,
      ENODEV: 19,
      ENOTDIR: 20,
      EISDIR: 21,
      EINVAL: 22,
      ENFILE: 23,
      EMFILE: 24,
      ENOTTY: 25,
      ETXTBSY: 26,
      EFBIG: 27,
      ENOSPC: 28,
      ESPIPE: 29,
      EROFS: 30,
      EMLINK: 31,
      EPIPE: 32,
      EDOM: 33,
      ERANGE: 34,
      ENOMSG: 42,
      EIDRM: 43,
      ECHRNG: 44,
      EL2NSYNC: 45,
      EL3HLT: 46,
      EL3RST: 47,
      ELNRNG: 48,
      EUNATCH: 49,
      ENOCSI: 50,
      EL2HLT: 51,
      EDEADLK: 35,
      ENOLCK: 37,
      EBADE: 52,
      EBADR: 53,
      EXFULL: 54,
      ENOANO: 55,
      EBADRQC: 56,
      EBADSLT: 57,
      EDEADLOCK: 35,
      EBFONT: 59,
      ENOSTR: 60,
      ENODATA: 61,
      ETIME: 62,
      ENOSR: 63,
      ENONET: 64,
      ENOPKG: 65,
      EREMOTE: 66,
      ENOLINK: 67,
      EADV: 68,
      ESRMNT: 69,
      ECOMM: 70,
      EPROTO: 71,
      EMULTIHOP: 72,
      EDOTDOT: 73,
      EBADMSG: 74,
      ENOTUNIQ: 76,
      EBADFD: 77,
      EREMCHG: 78,
      ELIBACC: 79,
      ELIBBAD: 80,
      ELIBSCN: 81,
      ELIBMAX: 82,
      ELIBEXEC: 83,
      ENOSYS: 38,
      ENOTEMPTY: 39,
      ENAMETOOLONG: 36,
      ELOOP: 40,
      EOPNOTSUPP: 95,
      EPFNOSUPPORT: 96,
      ECONNRESET: 104,
      ENOBUFS: 105,
      EAFNOSUPPORT: 97,
      EPROTOTYPE: 91,
      ENOTSOCK: 88,
      ENOPROTOOPT: 92,
      ESHUTDOWN: 108,
      ECONNREFUSED: 111,
      EADDRINUSE: 98,
      ECONNABORTED: 103,
      ENETUNREACH: 101,
      ENETDOWN: 100,
      ETIMEDOUT: 110,
      EHOSTDOWN: 112,
      EHOSTUNREACH: 113,
      EINPROGRESS: 115,
      EALREADY: 114,
      EDESTADDRREQ: 89,
      EMSGSIZE: 90,
      EPROTONOSUPPORT: 93,
      ESOCKTNOSUPPORT: 94,
      EADDRNOTAVAIL: 99,
      ENETRESET: 102,
      EISCONN: 106,
      ENOTCONN: 107,
      ETOOMANYREFS: 109,
      EUSERS: 87,
      EDQUOT: 122,
      ESTALE: 116,
      ENOTSUP: 95,
      ENOMEDIUM: 123,
      EILSEQ: 84,
      EOVERFLOW: 75,
      ECANCELED: 125,
      ENOTRECOVERABLE: 131,
      EOWNERDEAD: 130,
      ESTRPIPE: 86,
    };
  function _pthread_key_create(e, r) {
    return 0 == e
      ? ERRNO_CODES.EINVAL
      : ((HEAP32[e >> 2] = PTHREAD_SPECIFIC_NEXT_KEY),
        (PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0),
        PTHREAD_SPECIFIC_NEXT_KEY++,
        0);
  }
  function ___resumeException(e) {
    throw (EXCEPTIONS.last || (EXCEPTIONS.last = e),
    e +
      ' - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.');
  }
  function ___cxa_find_matching_catch() {
    var e = EXCEPTIONS.last;
    if (!e) return 0 | (Runtime.setTempRet0(0), 0);
    var r = EXCEPTIONS.infos[e],
      t = r.type;
    if (!t) return 0 | (Runtime.setTempRet0(0), e);
    var n = Array.prototype.slice.call(arguments);
    Module.___cxa_is_pointer_type(t);
    ___cxa_find_matching_catch.buffer ||
      (___cxa_find_matching_catch.buffer = _malloc(4)),
      (HEAP32[___cxa_find_matching_catch.buffer >> 2] = e),
      (e = ___cxa_find_matching_catch.buffer);
    for (var i = 0; i < n.length; i++)
      if (n[i] && Module.___cxa_can_catch(n[i], t, e))
        return (
          (e = HEAP32[e >> 2]),
          (r.adjusted = e),
          0 | (Runtime.setTempRet0(n[i]), e)
        );
    return (e = HEAP32[e >> 2]), 0 | (Runtime.setTempRet0(t), e);
  }
  function ___gxx_personality_v0() {}
  function _pthread_setspecific(e, r) {
    return e in PTHREAD_SPECIFIC
      ? ((PTHREAD_SPECIFIC[e] = r), 0)
      : ERRNO_CODES.EINVAL;
  }
  function ___syscall140(e, r) {
    SYSCALLS.varargs = r;
    try {
      var t = SYSCALLS.getStreamFromFD(),
        n = (SYSCALLS.get(), SYSCALLS.get()),
        i = SYSCALLS.get(),
        a = SYSCALLS.get(),
        o = n;
      return (
        FS.llseek(t, o, a),
        (HEAP32[i >> 2] = t.position),
        t.getdents && 0 === o && 0 === a && (t.getdents = null),
        0
      );
    } catch (e) {
      return (
        ('undefined' != typeof FS && e instanceof FS.ErrnoError) || abort(e),
        -e.errno
      );
    }
  }
  function ___syscall146(e, r) {
    SYSCALLS.varargs = r;
    try {
      var t = SYSCALLS.get(),
        n = SYSCALLS.get(),
        i = SYSCALLS.get(),
        a = 0;
      ___syscall146.buffer ||
        ((___syscall146.buffers = [null, [], []]),
        (___syscall146.printChar = function(e, r) {
          var t = ___syscall146.buffers[e];
          assert(t),
            0 === r || 10 === r
              ? ((1 === e ? Module.print : Module.printErr)(
                  UTF8ArrayToString(t, 0),
                ),
                (t.length = 0))
              : t.push(r);
        }));
      for (var o = 0; o < i; o++) {
        for (
          var u = HEAP32[(n + 8 * o) >> 2],
            f = HEAP32[(n + (8 * o + 4)) >> 2],
            l = 0;
          l < f;
          l++
        )
          ___syscall146.printChar(t, HEAPU8[u + l]);
        a += f;
      }
      return a;
    } catch (e) {
      return (
        ('undefined' != typeof FS && e instanceof FS.ErrnoError) || abort(e),
        -e.errno
      );
    }
  }
  function ___syscall54(e, r) {
    SYSCALLS.varargs = r;
    try {
      return 0;
    } catch (e) {
      return (
        ('undefined' != typeof FS && e instanceof FS.ErrnoError) || abort(e),
        -e.errno
      );
    }
  }
  function invoke_iiii(e, r, t, n) {
    try {
      return Module.dynCall_iiii(e, r, t, n);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_viiiii(e, r, t, n, i, a) {
    try {
      Module.dynCall_viiiii(e, r, t, n, i, a);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_vi(e, r) {
    try {
      Module.dynCall_vi(e, r);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_ii(e, r) {
    try {
      return Module.dynCall_ii(e, r);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_viii(e, r, t, n) {
    try {
      Module.dynCall_viii(e, r, t, n);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_v(e) {
    try {
      Module.dynCall_v(e);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_viiiiii(e, r, t, n, i, a, o) {
    try {
      Module.dynCall_viiiiii(e, r, t, n, i, a, o);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  function invoke_viiii(e, r, t, n, i) {
    try {
      Module.dynCall_viiii(e, r, t, n, i);
    } catch (e) {
      if ('number' != typeof e && 'longjmp' !== e) throw e;
      Module.setThrew(1, 0);
    }
  }
  __ATEXIT__.push(function() {
    var e = Module._fflush;
    e && e(0);
    var r = ___syscall146.printChar;
    if (r) {
      var t = ___syscall146.buffers;
      t[1].length && r(1, 10), t[2].length && r(2, 10);
    }
  }),
    (DYNAMICTOP_PTR = allocate(1, 'i32', ALLOC_STATIC)),
    (STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP)),
    (STACK_MAX = STACK_BASE + TOTAL_STACK),
    (DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX)),
    (HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE),
    (staticSealed = !0),
    (Module.asmGlobalArg = {
      Math: Math,
      Int8Array: Int8Array,
      Int16Array: Int16Array,
      Int32Array: Int32Array,
      Uint8Array: Uint8Array,
      Uint16Array: Uint16Array,
      Uint32Array: Uint32Array,
      Float32Array: Float32Array,
      Float64Array: Float64Array,
      NaN: NaN,
      Infinity: 1 / 0,
      byteLength: byteLength,
    }),
    (Module.asmLibraryArg = {
      abort: abort,
      assert: assert,
      enlargeMemory: enlargeMemory,
      getTotalMemory: getTotalMemory,
      abortOnCannotGrowMemory: abortOnCannotGrowMemory,
      invoke_iiii: invoke_iiii,
      invoke_viiiii: invoke_viiiii,
      invoke_vi: invoke_vi,
      invoke_ii: invoke_ii,
      invoke_viii: invoke_viii,
      invoke_v: invoke_v,
      invoke_viiiiii: invoke_viiiiii,
      invoke_viiii: invoke_viiii,
      _pthread_getspecific: _pthread_getspecific,
      ___syscall54: ___syscall54,
      _pthread_setspecific: _pthread_setspecific,
      ___gxx_personality_v0: ___gxx_personality_v0,
      ___syscall6: ___syscall6,
      ___setErrNo: ___setErrNo,
      _abort: _abort,
      ___cxa_begin_catch: ___cxa_begin_catch,
      _pthread_once: _pthread_once,
      _emscripten_memcpy_big: _emscripten_memcpy_big,
      _pthread_key_create: _pthread_key_create,
      ___syscall140: ___syscall140,
      ___resumeException: ___resumeException,
      ___cxa_find_matching_catch: ___cxa_find_matching_catch,
      ___syscall146: ___syscall146,
      __ZSt18uncaught_exceptionv: __ZSt18uncaught_exceptionv,
      DYNAMICTOP_PTR: DYNAMICTOP_PTR,
      tempDoublePtr: tempDoublePtr,
      ABORT: ABORT,
      STACKTOP: STACKTOP,
      STACK_MAX: STACK_MAX,
      cttz_i8: cttz_i8,
    });
  var asm = (function(e, r, t) {
      var n = e.Int8Array,
        ce = new n(t),
        i = e.Int16Array,
        V = new i(t),
        a = e.Int32Array,
        _e = new a(t),
        o = e.Uint8Array,
        de = new o(t),
        u = e.Uint16Array,
        Ee = new u(t),
        f = e.Uint32Array,
        l = (new f(t), e.Float32Array),
        s = (new l(t), e.Float64Array),
        N = new s(t),
        c = e.byteLength,
        _ = 0 | r.DYNAMICTOP_PTR,
        d = 0 | r.tempDoublePtr,
        Te = (r.ABORT, 0 | r.STACKTOP),
        E = (r.STACK_MAX, 0 | r.cttz_i8),
        k = (e.NaN, e.Infinity, 0),
        ie =
          (e.Math.floor,
          e.Math.abs,
          e.Math.sqrt,
          e.Math.pow,
          e.Math.cos,
          e.Math.sin,
          e.Math.tan,
          e.Math.acos,
          e.Math.asin,
          e.Math.atan,
          e.Math.atan2,
          e.Math.exp,
          e.Math.log,
          e.Math.ceil,
          e.Math.imul),
        T = (e.Math.min, e.Math.max, e.Math.clz32),
        A = r.abort,
        M = (r.assert, r.enlargeMemory),
        m = r.getTotalMemory,
        b = r.abortOnCannotGrowMemory,
        h =
          (r.invoke_iiii,
          r.invoke_viiiii,
          r.invoke_vi,
          r.invoke_ii,
          r.invoke_viii,
          r.invoke_v,
          r.invoke_viiiiii,
          r.invoke_viiii,
          r._pthread_getspecific),
        S = r.___syscall54,
        R = r._pthread_setspecific,
        P = (r.___gxx_personality_v0, r.___syscall6),
        p = r.___setErrNo,
        C = r._abort,
        v = (r.___cxa_begin_catch, r._pthread_once),
        y = r._emscripten_memcpy_big,
        O = r._pthread_key_create,
        g = r.___syscall140,
        I =
          (r.___resumeException, r.___cxa_find_matching_catch, r.___syscall146);
      r.__ZSt18uncaught_exceptionv;
      function L(e) {
        e |= 0;
        var r,
          t = 0,
          n = 0,
          i = 0,
          a = 0,
          o = 0,
          u = 0,
          f = 0,
          l = 0,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0,
          T = 0,
          A = 0,
          M = 0,
          m = 0,
          b = 0,
          h = 0,
          S = 0;
        (Te = ((r = Te) + 16) | 0), (d = r);
        do {
          if (e >>> 0 < 245) {
            if (
              ((e = (s = e >>> 0 < 11 ? 16 : (e + 11) & -8) >>> 3),
              (3 & (n = (_ = 0 | _e[1144]) >>> e)) | 0)
            )
              return (
                (i =
                  0 |
                  _e[
                    (n =
                      ((e =
                        (4616 + (((t = (((1 & n) ^ 1) + e) | 0) << 1) << 2)) |
                        0) +
                        8) |
                      0) >> 2
                  ]),
                (0 | e) == (0 | (o = 0 | _e[(a = (i + 8) | 0) >> 2]))
                  ? (_e[1144] = _ & ~(1 << t))
                  : ((_e[(o + 12) >> 2] = e), (_e[n >> 2] = o)),
                (S = t << 3),
                (_e[(i + 4) >> 2] = 3 | S),
                (_e[(S = (i + S + 4) | 0) >> 2] = 1 | _e[S >> 2]),
                (Te = r),
                0 | (S = a)
              );
            if ((c = 0 | _e[1146]) >>> 0 < s >>> 0) {
              if (0 | n)
                return (
                  (t =
                    (((t = (n << e) & ((t = 2 << e) | (0 - t))) & (0 - t)) -
                      1) |
                    0),
                  (a =
                    0 |
                    _e[
                      (e =
                        ((t =
                          (4616 +
                            (((i =
                              (((n = ((t >>>= u = (t >>> 12) & 16) >>> 5) & 8) |
                                u |
                                (a = ((t >>>= n) >>> 2) & 4) |
                                (e = ((t >>>= a) >>> 1) & 2) |
                                (i = ((t >>>= e) >>> 1) & 1)) +
                                (t >>> i)) |
                              0) <<
                              1) <<
                              2)) |
                          0) +
                          8) |
                        0) >> 2
                    ]),
                  (0 | t) == (0 | (n = 0 | _e[(u = (a + 8) | 0) >> 2]))
                    ? ((e = _ & ~(1 << i)), (_e[1144] = e))
                    : ((_e[(n + 12) >> 2] = t), (_e[e >> 2] = n), (e = _)),
                  (o = ((i << 3) - s) | 0),
                  (_e[(a + 4) >> 2] = 3 | s),
                  (_e[((i = (a + s) | 0) + 4) >> 2] = 1 | o),
                  (_e[(i + o) >> 2] = o),
                  0 | c &&
                    ((a = 0 | _e[1149]),
                    (n = (4616 + (((t = c >>> 3) << 1) << 2)) | 0),
                    e & (t = 1 << t)
                      ? (t = 0 | _e[(e = (n + 8) | 0) >> 2])
                      : ((_e[1144] = e | t), (e = ((t = n) + 8) | 0)),
                    (_e[e >> 2] = a),
                    (_e[(t + 12) >> 2] = a),
                    (_e[(a + 8) >> 2] = t),
                    (_e[(a + 12) >> 2] = n)),
                  (_e[1146] = o),
                  (_e[1149] = i),
                  (Te = r),
                  0 | (S = u)
                );
              if ((f = 0 | _e[1145])) {
                if (
                  ((n = ((f & (0 - f)) - 1) | 0),
                  (e =
                    0 |
                    _e[
                      (4880 +
                        ((((o = ((n >>>= u = (n >>> 12) & 16) >>> 5) & 8) |
                          u |
                          (l = ((n >>>= o) >>> 2) & 4) |
                          (i = ((n >>>= l) >>> 1) & 2) |
                          (e = ((n >>>= i) >>> 1) & 1)) +
                          (n >>> e)) <<
                          2)) >>
                        2
                    ]),
                  (n = ((-8 & _e[(e + 4) >> 2]) - s) | 0),
                  (i =
                    0 |
                    _e[
                      (e + 16 + (((0 == (0 | _e[(e + 16) >> 2])) & 1) << 2)) >>
                        2
                    ]))
                ) {
                  for (
                    ;
                    (n = (l =
                      (u = ((-8 & _e[(i + 4) >> 2]) - s) | 0) >>> 0 < n >>> 0)
                      ? u
                      : n),
                      (e = l ? i : e),
                      0 !=
                        (0 |
                          (i =
                            0 |
                            _e[
                              (i +
                                16 +
                                (((0 == (0 | _e[(i + 16) >> 2])) & 1) << 2)) >>
                                2
                            ]));

                  );
                  (l = e), (o = n);
                } else (l = e), (o = n);
                if (l >>> 0 < (u = (l + s) | 0) >>> 0) {
                  (a = 0 | _e[(l + 24) >> 2]), (t = 0 | _e[(l + 12) >> 2]);
                  do {
                    if ((0 | t) == (0 | l)) {
                      if (
                        !(t = 0 | _e[(e = (l + 20) | 0) >> 2]) &&
                        !(t = 0 | _e[(e = (l + 16) | 0) >> 2])
                      ) {
                        n = 0;
                        break;
                      }
                      for (;;)
                        if (0 | (i = 0 | _e[(n = (t + 20) | 0) >> 2]))
                          (t = i), (e = n);
                        else {
                          if (!(i = 0 | _e[(n = (t + 16) | 0) >> 2])) break;
                          (t = i), (e = n);
                        }
                      (_e[e >> 2] = 0), (n = t);
                    } else
                      (n = 0 | _e[(l + 8) >> 2]),
                        (_e[(n + 12) >> 2] = t),
                        (_e[(t + 8) >> 2] = n),
                        (n = t);
                  } while (0);
                  do {
                    if (0 | a) {
                      if (
                        ((t = 0 | _e[(l + 28) >> 2]),
                        (0 | l) == (0 | _e[(e = (4880 + (t << 2)) | 0) >> 2]))
                      ) {
                        if (!(_e[e >> 2] = n)) {
                          _e[1145] = f & ~(1 << t);
                          break;
                        }
                      } else if (
                        !(_e[
                          (a +
                            16 +
                            ((((0 | _e[(a + 16) >> 2]) != (0 | l)) & 1) <<
                              2)) >>
                            2
                        ] = n)
                      )
                        break;
                      (_e[(n + 24) >> 2] = a),
                        0 | (t = 0 | _e[(l + 16) >> 2]) &&
                          ((_e[(n + 16) >> 2] = t), (_e[(t + 24) >> 2] = n)),
                        0 | (t = 0 | _e[(l + 20) >> 2]) &&
                          ((_e[(n + 20) >> 2] = t), (_e[(t + 24) >> 2] = n));
                    }
                  } while (0);
                  return (
                    o >>> 0 < 16
                      ? ((S = (o + s) | 0),
                        (_e[(l + 4) >> 2] = 3 | S),
                        (_e[(S = (l + S + 4) | 0) >> 2] = 1 | _e[S >> 2]))
                      : ((_e[(l + 4) >> 2] = 3 | s),
                        (_e[(u + 4) >> 2] = 1 | o),
                        (_e[(u + o) >> 2] = o),
                        0 | c &&
                          ((i = 0 | _e[1149]),
                          (n = (4616 + (((t = c >>> 3) << 1) << 2)) | 0),
                          _ & (t = 1 << t)
                            ? (t = 0 | _e[(e = (n + 8) | 0) >> 2])
                            : ((_e[1144] = _ | t), (e = ((t = n) + 8) | 0)),
                          (_e[e >> 2] = i),
                          (_e[(t + 12) >> 2] = i),
                          (_e[(i + 8) >> 2] = t),
                          (_e[(i + 12) >> 2] = n)),
                        (_e[1146] = o),
                        (_e[1149] = u)),
                    (Te = r),
                    0 | (S = (l + 8) | 0)
                  );
                }
                _ = s;
              } else _ = s;
            } else _ = s;
          } else if (e >>> 0 <= 4294967231)
            if (((s = -8 & (e = (e + 11) | 0)), (l = 0 | _e[1145]))) {
              (i = (0 - s) | 0),
                (f = (e >>>= 8)
                  ? 16777215 < s >>> 0
                    ? 31
                    : ((s >>>
                        (((f =
                          (14 -
                            ((c =
                              ((((h =
                                e << (_ = (((e + 1048320) | 0) >>> 16) & 8)) +
                                520192) |
                                0) >>>
                                16) &
                              4) |
                              _ |
                              (f = ((((h <<= c) + 245760) | 0) >>> 16) & 2)) +
                            ((h << f) >>> 15)) |
                          0) +
                          7) |
                          0)) &
                        1) |
                      (f << 1)
                  : 0),
                (n = 0 | _e[(4880 + (f << 2)) >> 2]);
              e: do {
                if (n)
                  for (
                    u = s << (31 == ((e = 0) | f) ? 0 : (25 - (f >>> 1)) | 0),
                      o = 0;
                    ;

                  ) {
                    if (
                      (a = ((-8 & _e[(n + 4) >> 2]) - s) | 0) >>> 0 <
                      i >>> 0
                    ) {
                      if (!a) {
                        (i = 0), (a = e = n), (h = 61);
                        break e;
                      }
                      (e = n), (i = a);
                    }
                    if (
                      ((o =
                        (0 == (0 | (a = 0 | _e[(n + 20) >> 2]))) |
                        ((0 | a) ==
                          (0 | (n = 0 | _e[(n + 16 + ((u >>> 31) << 2)) >> 2])))
                          ? o
                          : a),
                      (a = 0 == (0 | n)))
                    ) {
                      (n = o), (h = 57);
                      break;
                    }
                    u <<= 1 & (1 ^ a);
                  }
                else (e = n = 0), (h = 57);
              } while (0);
              if (57 == (0 | h)) {
                if ((0 == (0 | n)) & (0 == (0 | e))) {
                  if (!(e = l & ((e = 2 << f) | (0 - e)))) {
                    _ = s;
                    break;
                  }
                  (_ = ((e & (0 - e)) - 1) | 0),
                    (n =
                      (e = 0) |
                      _e[
                        (4880 +
                          ((((o = ((_ >>>= u = (_ >>> 12) & 16) >>> 5) & 8) |
                            u |
                            (f = ((_ >>>= o) >>> 2) & 4) |
                            (c = ((_ >>>= f) >>> 1) & 2) |
                            (n = ((_ >>>= c) >>> 1) & 1)) +
                            (_ >>> n)) <<
                            2)) >>
                          2
                      ]);
                }
                n ? ((a = n), (h = 61)) : ((f = e), (u = i));
              }
              if (61 == (0 | h))
                for (;;) {
                  if (
                    ((h = 0),
                    (n = (_ =
                      (n = ((-8 & _e[(a + 4) >> 2]) - s) | 0) >>> 0 < i >>> 0)
                      ? n
                      : i),
                    (e = _ ? a : e),
                    !(a =
                      0 |
                      _e[
                        (a +
                          16 +
                          (((0 == (0 | _e[(a + 16) >> 2])) & 1) << 2)) >>
                          2
                      ]))
                  ) {
                    (f = e), (u = n);
                    break;
                  }
                  (i = n), (h = 61);
                }
              if (0 != (0 | f) && u >>> 0 < (((0 | _e[1146]) - s) | 0) >>> 0) {
                if ((o = (f + s) | 0) >>> 0 <= f >>> 0)
                  return (Te = r), (S = 0) | S;
                (a = 0 | _e[(f + 24) >> 2]), (t = 0 | _e[(f + 12) >> 2]);
                do {
                  if ((0 | t) == (0 | f)) {
                    if (
                      !(t = 0 | _e[(e = (f + 20) | 0) >> 2]) &&
                      !(t = 0 | _e[(e = (f + 16) | 0) >> 2])
                    ) {
                      t = 0;
                      break;
                    }
                    for (;;)
                      if (0 | (i = 0 | _e[(n = (t + 20) | 0) >> 2]))
                        (t = i), (e = n);
                      else {
                        if (!(i = 0 | _e[(n = (t + 16) | 0) >> 2])) break;
                        (t = i), (e = n);
                      }
                    _e[e >> 2] = 0;
                  } else
                    (S = 0 | _e[(f + 8) >> 2]),
                      (_e[(S + 12) >> 2] = t),
                      (_e[(t + 8) >> 2] = S);
                } while (0);
                do {
                  if (a) {
                    if (
                      ((e = 0 | _e[(f + 28) >> 2]),
                      (0 | f) == (0 | _e[(n = (4880 + (e << 2)) | 0) >> 2]))
                    ) {
                      if (!(_e[n >> 2] = t)) {
                        (i = l & ~(1 << e)), (_e[1145] = i);
                        break;
                      }
                    } else if (
                      !(_e[
                        (a +
                          16 +
                          ((((0 | _e[(a + 16) >> 2]) != (0 | f)) & 1) << 2)) >>
                          2
                      ] = t)
                    ) {
                      i = l;
                      break;
                    }
                    (_e[(t + 24) >> 2] = a),
                      0 | (e = 0 | _e[(f + 16) >> 2]) &&
                        ((_e[(t + 16) >> 2] = e), (_e[(e + 24) >> 2] = t)),
                      (i =
                        ((e = 0 | _e[(f + 20) >> 2]) &&
                          ((_e[(t + 20) >> 2] = e), (_e[(e + 24) >> 2] = t)),
                        l));
                  } else i = l;
                } while (0);
                do {
                  if (16 <= u >>> 0) {
                    if (
                      ((_e[(f + 4) >> 2] = 3 | s),
                      (_e[(o + 4) >> 2] = 1 | u),
                      (t = (_e[(o + u) >> 2] = u) >>> 3),
                      u >>> 0 < 256)
                    ) {
                      (n = (4616 + ((t << 1) << 2)) | 0),
                        (e = 0 | _e[1144]) & (t = 1 << t)
                          ? (t = 0 | _e[(e = (n + 8) | 0) >> 2])
                          : ((_e[1144] = e | t), (e = ((t = n) + 8) | 0)),
                        (_e[e >> 2] = o),
                        (_e[(t + 12) >> 2] = o),
                        (_e[(o + 8) >> 2] = t),
                        (_e[(o + 12) >> 2] = n);
                      break;
                    }
                    if (
                      ((n =
                        (4880 +
                          ((t = (t = u >>> 8)
                            ? 16777215 < u >>> 0
                              ? 31
                              : ((u >>>
                                  (((t =
                                    (14 -
                                      ((b =
                                        ((((S =
                                          t <<
                                          (h =
                                            (((t + 1048320) | 0) >>> 16) & 8)) +
                                          520192) |
                                          0) >>>
                                          16) &
                                        4) |
                                        h |
                                        (t =
                                          ((((S <<= b) + 245760) | 0) >>> 16) &
                                          2)) +
                                      ((S << t) >>> 15)) |
                                    0) +
                                    7) |
                                    0)) &
                                  1) |
                                (t << 1)
                            : 0) <<
                            2)) |
                        0),
                      (_e[(o + 28) >> 2] = t),
                      (_e[((e = (o + 16) | 0) + 4) >> 2] = 0),
                      (_e[e >> 2] = 0),
                      !(i & (e = 1 << t)))
                    ) {
                      (_e[1145] = i | e),
                        (_e[n >> 2] = o),
                        (_e[(o + 24) >> 2] = n),
                        (_e[(o + 12) >> 2] = o),
                        (_e[(o + 8) >> 2] = o);
                      break;
                    }
                    for (
                      e = u << (31 == (0 | t) ? 0 : (25 - (t >>> 1)) | 0),
                        n = 0 | _e[n >> 2];
                      ;

                    ) {
                      if (((-8 & _e[(n + 4) >> 2]) | 0) == (0 | u)) {
                        h = 97;
                        break;
                      }
                      if (
                        !(t =
                          0 | _e[(i = (n + 16 + ((e >>> 31) << 2)) | 0) >> 2])
                      ) {
                        h = 96;
                        break;
                      }
                      (e <<= 1), (n = t);
                    }
                    if (96 == (0 | h)) {
                      (_e[i >> 2] = o),
                        (_e[(o + 24) >> 2] = n),
                        (_e[(o + 12) >> 2] = o),
                        (_e[(o + 8) >> 2] = o);
                      break;
                    }
                    if (97 == (0 | h)) {
                      (S = 0 | _e[(h = (n + 8) | 0) >> 2]),
                        (_e[(S + 12) >> 2] = o),
                        (_e[h >> 2] = o),
                        (_e[(o + 8) >> 2] = S),
                        (_e[(o + 12) >> 2] = n),
                        (_e[(o + 24) >> 2] = 0);
                      break;
                    }
                  } else
                    (S = (u + s) | 0),
                      (_e[(f + 4) >> 2] = 3 | S),
                      (_e[(S = (f + S + 4) | 0) >> 2] = 1 | _e[S >> 2]);
                } while (0);
                return (Te = r), 0 | (S = (f + 8) | 0);
              }
              _ = s;
            } else _ = s;
          else _ = -1;
        } while (0);
        if (_ >>> 0 <= (n = 0 | _e[1146]) >>> 0)
          return (
            (t = (n - _) | 0),
            (e = 0 | _e[1149]),
            15 < t >>> 0
              ? ((S = (e + _) | 0),
                (_e[1149] = S),
                (_e[1146] = t),
                (_e[(S + 4) >> 2] = 1 | t),
                (_e[(S + t) >> 2] = t),
                (_e[(e + 4) >> 2] = 3 | _))
              : ((_e[1146] = 0),
                (_e[1149] = 0),
                (_e[(e + 4) >> 2] = 3 | n),
                (_e[(S = (e + n + 4) | 0) >> 2] = 1 | _e[S >> 2])),
            (Te = r),
            0 | (S = (e + 8) | 0)
          );
        if (_ >>> 0 < (u = 0 | _e[1147]) >>> 0)
          return (
            (b = (u - _) | 0),
            (_e[1147] = b),
            (h = ((S = 0 | _e[1150]) + _) | 0),
            (_e[1150] = h),
            (_e[(h + 4) >> 2] = 1 | b),
            (_e[(S + 4) >> 2] = 3 | _),
            (Te = r),
            0 | (S = (S + 8) | 0)
          );
        if (
          ((f = (_ + 48) | 0),
          (s =
            (o =
              ((e =
                0 | _e[1262]
                  ? 0 | _e[1264]
                  : ((_e[1264] = 4096),
                    (_e[1263] = 4096),
                    (_e[1265] = -1),
                    (_e[1266] = -1),
                    (_e[1267] = 0),
                    (_e[1255] = 0),
                    (e = (-16 & d) ^ 1431655768),
                    (_e[d >> 2] = e),
                    (_e[1262] = e),
                    4096)) +
                (l = (_ + 47) | 0)) |
              0) & (a = (0 - e) | 0)) >>>
            0 <=
            _ >>> 0)
        )
          return (Te = r), (S = 0) | S;
        if (
          0 | (e = 0 | _e[1254]) &&
          ((d = ((c = 0 | _e[1252]) + s) | 0) >>> 0 <= c >>> 0) |
            (e >>> 0 < d >>> 0)
        )
          return (Te = r), (S = 0) | S;
        e: do {
          if (4 & _e[1255]) (t = 0), (h = 133);
          else {
            n = 0 | _e[1150];
            r: do {
              if (n) {
                for (
                  i = 5024;
                  !(
                    (e = 0 | _e[i >> 2]) >>> 0 <= n >>> 0 &&
                    ((e + (0 | _e[(A = (i + 4) | 0) >> 2])) | 0) >>> 0 > n >>> 0
                  );

                ) {
                  if (!(e = 0 | _e[(i + 8) >> 2])) {
                    h = 118;
                    break r;
                  }
                  i = e;
                }
                if ((t = (o - u) & a) >>> 0 < 2147483647)
                  if (
                    (0 | (e = 0 | pe(0 | t))) ==
                    (((0 | _e[i >> 2]) + (0 | _e[A >> 2])) | 0)
                  ) {
                    if (-1 != (0 | e)) {
                      (u = t), (o = e), (h = 135);
                      break e;
                    }
                  } else (i = e), (h = 126);
                else t = 0;
              } else h = 118;
            } while (0);
            do {
              if (118 == (0 | h))
                if (
                  -1 != (0 | (n = 0 | pe(0))) &&
                  ((t = n),
                  (T =
                    ((t =
                      ((0 == (((T = ((E = 0 | _e[1263]) + -1) | 0) & t) | 0)
                        ? 0
                        : (((T + t) & (0 - E)) - t) | 0) +
                        s) |
                      0) +
                      (E = 0 | _e[1252])) |
                    0),
                  (_ >>> 0 < t >>> 0) & (t >>> 0 < 2147483647))
                ) {
                  if (
                    0 | (A = 0 | _e[1254]) &&
                    (T >>> 0 <= E >>> 0) | (A >>> 0 < T >>> 0)
                  ) {
                    t = 0;
                    break;
                  }
                  if ((0 | (e = 0 | pe(0 | t))) == (0 | n)) {
                    (u = t), (o = n), (h = 135);
                    break e;
                  }
                  (i = e), (h = 126);
                } else t = 0;
            } while (0);
            do {
              if (126 == (0 | h)) {
                if (
                  ((n = (0 - t) | 0),
                  !(
                    (t >>> 0 < f >>> 0) &
                    (t >>> 0 < 2147483647) &
                    (-1 != (0 | i))
                  ))
                ) {
                  if (-1 == (0 | i)) {
                    t = 0;
                    break;
                  }
                  (u = t), (o = i), (h = 135);
                  break e;
                }
                if (
                  2147483647 <=
                  (e = (l - t + (e = 0 | _e[1264])) & (0 - e)) >>> 0
                ) {
                  (u = t), (o = i), (h = 135);
                  break e;
                }
                if (-1 == (0 | pe(0 | e))) {
                  pe(0 | n), (t = 0);
                  break;
                }
                (u = (e + t) | 0), (o = i), (h = 135);
                break e;
              }
            } while (0);
            (_e[1255] = 4 | _e[1255]), (h = 133);
          }
        } while (0);
        if (
          (133 == (0 | h) &&
            s >>> 0 < 2147483647 &&
            !(
              (-1 == (0 | (b = 0 | pe(0 | s)))) |
              (1 ^
                (m =
                  ((_ + 40) | 0) >>> 0 <
                  (M = ((A = 0 | pe(0)) - b) | 0) >>> 0)) |
              (((b >>> 0 < A >>> 0) & (-1 != (0 | b)) & (-1 != (0 | A))) ^ 1)
            ) &&
            ((u = m ? M : t), (o = b), (h = 135)),
          135 == (0 | h))
        ) {
          (t = ((0 | _e[1252]) + u) | 0),
            (_e[1252] = t) >>> 0 > (0 | _e[1253]) >>> 0 && (_e[1253] = t),
            (l = 0 | _e[1150]);
          do {
            if (l) {
              for (t = 5024; ; ) {
                if (
                  (0 | o) ==
                  (((e = 0 | _e[t >> 2]) +
                    (i = 0 | _e[(n = (t + 4) | 0) >> 2])) |
                    0)
                ) {
                  h = 145;
                  break;
                }
                if (!(a = 0 | _e[(t + 8) >> 2])) break;
                t = a;
              }
              if (
                145 == (0 | h) &&
                0 == ((8 & _e[(t + 12) >> 2]) | 0) &&
                (l >>> 0 < o >>> 0) & (e >>> 0 <= l >>> 0)
              ) {
                (_e[n >> 2] = i + u),
                  (h =
                    (l +
                      (S =
                        0 == ((7 & (S = (l + 8) | 0)) | 0) ? 0 : (0 - S) & 7)) |
                    0),
                  (S = ((0 | _e[1147]) + (u - S)) | 0),
                  (_e[1150] = h),
                  (_e[1147] = S),
                  (_e[(h + 4) >> 2] = 1 | S),
                  (_e[(h + S + 4) >> 2] = 40),
                  (_e[1151] = _e[1266]);
                break;
              }
              for (
                o >>> 0 < (0 | _e[1148]) >>> 0 && (_e[1148] = o),
                  n = (o + u) | 0,
                  t = 5024;
                ;

              ) {
                if ((0 | _e[t >> 2]) == (0 | n)) {
                  h = 153;
                  break;
                }
                if (!(e = 0 | _e[(t + 8) >> 2])) break;
                t = e;
              }
              if (153 == (0 | h) && 0 == ((8 & _e[(t + 12) >> 2]) | 0)) {
                (_e[t >> 2] = o),
                  (_e[(c = (t + 4) | 0) >> 2] = (0 | _e[c >> 2]) + u),
                  (s =
                    ((c =
                      (o +
                        (0 == ((7 & (c = (o + 8) | 0)) | 0)
                          ? 0
                          : (0 - c) & 7)) |
                      0) +
                      _) |
                    0),
                  (f =
                    ((t =
                      (n +
                        (0 == ((7 & (t = (n + 8) | 0)) | 0)
                          ? 0
                          : (0 - t) & 7)) |
                      0) -
                      c -
                      _) |
                    0),
                  (_e[(c + 4) >> 2] = 3 | _);
                do {
                  if ((0 | t) != (0 | l)) {
                    if ((0 | t) == (0 | _e[1149])) {
                      (S = ((0 | _e[1146]) + f) | 0),
                        (_e[1146] = S),
                        (_e[1149] = s),
                        (_e[(s + 4) >> 2] = 1 | S),
                        (_e[(s + S) >> 2] = S);
                      break;
                    }
                    if (1 == ((3 & (e = 0 | _e[(t + 4) >> 2])) | 0)) {
                      (u = -8 & e), (i = e >>> 3);
                      e: do {
                        if (e >>> 0 < 256) {
                          if (
                            ((e = 0 | _e[(t + 8) >> 2]),
                            (0 | (n = 0 | _e[(t + 12) >> 2])) == (0 | e))
                          ) {
                            _e[1144] = _e[1144] & ~(1 << i);
                            break;
                          }
                          (_e[(e + 12) >> 2] = n), (_e[(n + 8) >> 2] = e);
                          break;
                        }
                        (o = 0 | _e[(t + 24) >> 2]),
                          (e = 0 | _e[(t + 12) >> 2]);
                        do {
                          if ((0 | e) == (0 | t)) {
                            if (
                              !(e =
                                0 | _e[(n = ((i = (t + 16) | 0) + 4) | 0) >> 2])
                            ) {
                              if (!(e = 0 | _e[i >> 2])) {
                                e = 0;
                                break;
                              }
                              n = i;
                            }
                            for (;;)
                              if (0 | (a = 0 | _e[(i = (e + 20) | 0) >> 2]))
                                (e = a), (n = i);
                              else {
                                if (!(a = 0 | _e[(i = (e + 16) | 0) >> 2]))
                                  break;
                                (e = a), (n = i);
                              }
                            _e[n >> 2] = 0;
                          } else
                            (S = 0 | _e[(t + 8) >> 2]),
                              (_e[(S + 12) >> 2] = e),
                              (_e[(e + 8) >> 2] = S);
                        } while (0);
                        if (!o) break;
                        i = (4880 + ((n = 0 | _e[(t + 28) >> 2]) << 2)) | 0;
                        do {
                          if ((0 | t) == (0 | _e[i >> 2])) {
                            if (0 | (_e[i >> 2] = e)) break;
                            _e[1145] = _e[1145] & ~(1 << n);
                            break e;
                          }
                          if (
                            !(_e[
                              (o +
                                16 +
                                ((((0 | _e[(o + 16) >> 2]) != (0 | t)) & 1) <<
                                  2)) >>
                                2
                            ] = e)
                          )
                            break e;
                        } while (0);
                        if (
                          ((_e[(e + 24) >> 2] = o),
                          0 | (i = 0 | _e[(n = (t + 16) | 0) >> 2]) &&
                            ((_e[(e + 16) >> 2] = i), (_e[(i + 24) >> 2] = e)),
                          !(n = 0 | _e[(n + 4) >> 2]))
                        )
                          break;
                        (_e[(e + 20) >> 2] = n), (_e[(n + 24) >> 2] = e);
                      } while (0);
                      (t = (t + u) | 0), (a = (u + f) | 0);
                    } else a = f;
                    if (
                      ((_e[(t = (t + 4) | 0) >> 2] = -2 & _e[t >> 2]),
                      (_e[(s + 4) >> 2] = 1 | a),
                      (t = (_e[(s + a) >> 2] = a) >>> 3),
                      a >>> 0 < 256)
                    ) {
                      (n = (4616 + ((t << 1) << 2)) | 0),
                        (e = 0 | _e[1144]) & (t = 1 << t)
                          ? (t = 0 | _e[(e = (n + 8) | 0) >> 2])
                          : ((_e[1144] = e | t), (e = ((t = n) + 8) | 0)),
                        (_e[e >> 2] = s),
                        (_e[(t + 12) >> 2] = s),
                        (_e[(s + 8) >> 2] = t),
                        (_e[(s + 12) >> 2] = n);
                      break;
                    }
                    t = a >>> 8;
                    do {
                      if (t) {
                        if (16777215 < a >>> 0) {
                          t = 31;
                          break;
                        }
                        t =
                          ((a >>>
                            (((t =
                              (14 -
                                ((b =
                                  ((((S =
                                    t <<
                                    (h = (((t + 1048320) | 0) >>> 16) & 8)) +
                                    520192) |
                                    0) >>>
                                    16) &
                                  4) |
                                  h |
                                  (t =
                                    ((((S <<= b) + 245760) | 0) >>> 16) & 2)) +
                                ((S << t) >>> 15)) |
                              0) +
                              7) |
                              0)) &
                            1) |
                          (t << 1);
                      } else t = 0;
                    } while (0);
                    if (
                      ((i = (4880 + (t << 2)) | 0),
                      (_e[(s + 28) >> 2] = t),
                      (_e[((e = (s + 16) | 0) + 4) >> 2] = 0),
                      !((e = (_e[e >> 2] = 0) | _e[1145]) & (n = 1 << t)))
                    ) {
                      (_e[1145] = e | n),
                        (_e[i >> 2] = s),
                        (_e[(s + 24) >> 2] = i),
                        (_e[(s + 12) >> 2] = s),
                        (_e[(s + 8) >> 2] = s);
                      break;
                    }
                    for (
                      e = a << (31 == (0 | t) ? 0 : (25 - (t >>> 1)) | 0),
                        n = 0 | _e[i >> 2];
                      ;

                    ) {
                      if (((-8 & _e[(n + 4) >> 2]) | 0) == (0 | a)) {
                        h = 194;
                        break;
                      }
                      if (
                        !(t =
                          0 | _e[(i = (n + 16 + ((e >>> 31) << 2)) | 0) >> 2])
                      ) {
                        h = 193;
                        break;
                      }
                      (e <<= 1), (n = t);
                    }
                    if (193 == (0 | h)) {
                      (_e[i >> 2] = s),
                        (_e[(s + 24) >> 2] = n),
                        (_e[(s + 12) >> 2] = s),
                        (_e[(s + 8) >> 2] = s);
                      break;
                    }
                    if (194 == (0 | h)) {
                      (S = 0 | _e[(h = (n + 8) | 0) >> 2]),
                        (_e[(S + 12) >> 2] = s),
                        (_e[h >> 2] = s),
                        (_e[(s + 8) >> 2] = S),
                        (_e[(s + 12) >> 2] = n),
                        (_e[(s + 24) >> 2] = 0);
                      break;
                    }
                  } else
                    (S = ((0 | _e[1147]) + f) | 0),
                      (_e[1147] = S),
                      (_e[1150] = s),
                      (_e[(s + 4) >> 2] = 1 | S);
                } while (0);
                return (Te = r), 0 | (S = (c + 8) | 0);
              }
              for (
                t = 5024;
                !(
                  (e = 0 | _e[t >> 2]) >>> 0 <= l >>> 0 &&
                  l >>> 0 < (S = (e + (0 | _e[(t + 4) >> 2])) | 0) >>> 0
                );

              )
                t = 0 | _e[(t + 8) >> 2];
              for (
                t =
                  ((e =
                    (e =
                      ((a = (S + -47) | 0) +
                        (0 == ((7 & (e = (a + 8) | 0)) | 0)
                          ? 0
                          : (0 - e) & 7)) |
                      0) >>>
                      0 <
                    (a = (l + 16) | 0) >>> 0
                      ? l
                      : e) +
                    8) |
                  0,
                  h =
                    (o +
                      (n =
                        0 == ((7 & (n = (o + 8) | 0)) | 0) ? 0 : (0 - n) & 7)) |
                    0,
                  n = (u + -40 - n) | 0,
                  _e[1150] = h,
                  _e[1147] = n,
                  _e[(h + 4) >> 2] = 1 | n,
                  _e[(h + n + 4) >> 2] = 40,
                  _e[1151] = _e[1266],
                  _e[(n = (e + 4) | 0) >> 2] = 27,
                  _e[t >> 2] = _e[1256],
                  _e[(t + 4) >> 2] = _e[1257],
                  _e[(t + 8) >> 2] = _e[1258],
                  _e[(t + 12) >> 2] = _e[1259],
                  _e[1256] = o,
                  _e[1257] = u,
                  _e[1259] = 0,
                  _e[1258] = t,
                  t = (e + 24) | 0;
                (_e[(t = ((h = t) + 4) | 0) >> 2] = 7),
                  ((h + 8) | 0) >>> 0 < S >>> 0;

              );
              if ((0 | e) != (0 | l)) {
                if (
                  ((o = (e - l) | 0),
                  (_e[n >> 2] = -2 & _e[n >> 2]),
                  (_e[(l + 4) >> 2] = 1 | o),
                  (t = (_e[e >> 2] = o) >>> 3),
                  o >>> 0 < 256)
                ) {
                  (n = (4616 + ((t << 1) << 2)) | 0),
                    (e = 0 | _e[1144]) & (t = 1 << t)
                      ? (t = 0 | _e[(e = (n + 8) | 0) >> 2])
                      : ((_e[1144] = e | t), (e = ((t = n) + 8) | 0)),
                    (_e[e >> 2] = l),
                    (_e[(t + 12) >> 2] = l),
                    (_e[(l + 8) >> 2] = t),
                    (_e[(l + 12) >> 2] = n);
                  break;
                }
                if (
                  ((i =
                    (4880 +
                      ((n = (t = o >>> 8)
                        ? 16777215 < o >>> 0
                          ? 31
                          : ((o >>>
                              (((n =
                                (14 -
                                  ((b =
                                    ((((S =
                                      t <<
                                      (h = (((t + 1048320) | 0) >>> 16) & 8)) +
                                      520192) |
                                      0) >>>
                                      16) &
                                    4) |
                                    h |
                                    (n =
                                      ((((S <<= b) + 245760) | 0) >>> 16) &
                                      2)) +
                                  ((S << n) >>> 15)) |
                                0) +
                                7) |
                                0)) &
                              1) |
                            (n << 1)
                        : 0) <<
                        2)) |
                    0),
                  (_e[(l + 28) >> 2] = n),
                  (_e[(l + 20) >> 2] = 0),
                  !((t = (_e[a >> 2] = 0) | _e[1145]) & (e = 1 << n)))
                ) {
                  (_e[1145] = t | e),
                    (_e[i >> 2] = l),
                    (_e[(l + 24) >> 2] = i),
                    (_e[(l + 12) >> 2] = l),
                    (_e[(l + 8) >> 2] = l);
                  break;
                }
                for (
                  e = o << (31 == (0 | n) ? 0 : (25 - (n >>> 1)) | 0),
                    n = 0 | _e[i >> 2];
                  ;

                ) {
                  if (((-8 & _e[(n + 4) >> 2]) | 0) == (0 | o)) {
                    h = 216;
                    break;
                  }
                  if (
                    !(t = 0 | _e[(i = (n + 16 + ((e >>> 31) << 2)) | 0) >> 2])
                  ) {
                    h = 215;
                    break;
                  }
                  (e <<= 1), (n = t);
                }
                if (215 == (0 | h)) {
                  (_e[i >> 2] = l),
                    (_e[(l + 24) >> 2] = n),
                    (_e[(l + 12) >> 2] = l),
                    (_e[(l + 8) >> 2] = l);
                  break;
                }
                if (216 == (0 | h)) {
                  (S = 0 | _e[(h = (n + 8) | 0) >> 2]),
                    (_e[(S + 12) >> 2] = l),
                    (_e[h >> 2] = l),
                    (_e[(l + 8) >> 2] = S),
                    (_e[(l + 12) >> 2] = n),
                    (_e[(l + 24) >> 2] = 0);
                  break;
                }
              }
            } else {
              for (
                (0 == (0 | (S = 0 | _e[1148]))) | (o >>> 0 < S >>> 0) &&
                  (_e[1148] = o),
                  _e[1256] = o,
                  _e[1257] = u,
                  _e[1259] = 0,
                  _e[1153] = _e[1262],
                  _e[1152] = -1,
                  t = 0;
                (_e[((S = (4616 + ((t << 1) << 2)) | 0) + 12) >> 2] = S),
                  (_e[(S + 8) >> 2] = S),
                  32 != (0 | (t = (t + 1) | 0));

              );
              (h =
                (o +
                  (S = 0 == ((7 & (S = (o + 8) | 0)) | 0) ? 0 : (0 - S) & 7)) |
                0),
                (S = (u + -40 - S) | 0),
                (_e[1150] = h),
                (_e[1147] = S),
                (_e[(h + 4) >> 2] = 1 | S),
                (_e[(h + S + 4) >> 2] = 40),
                (_e[1151] = _e[1266]);
            }
          } while (0);
          if (_ >>> 0 < (t = 0 | _e[1147]) >>> 0)
            return (
              (b = (t - _) | 0),
              (_e[1147] = b),
              (h = ((S = 0 | _e[1150]) + _) | 0),
              (_e[1150] = h),
              (_e[(h + 4) >> 2] = 1 | b),
              (_e[(S + 4) >> 2] = 3 | _),
              (Te = r),
              0 | (S = (S + 8) | 0)
            );
        }
        return (_e[(S = 296) >> 2] = 12), (Te = r), (S = 0) | S;
      }
      function w(e, r, t, n, i, a) {
        (e |= 0), (r = +r), (t |= 0), (n |= 0), (i |= 0), (a |= 0);
        var o,
          u = 0,
          f = 0,
          l = 0,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0,
          T = 0,
          A = 0,
          M = 0,
          m = 0,
          b = 0,
          h = 0,
          S = 0,
          R = 0,
          P = 0,
          p = 0,
          C = 0,
          v = 0,
          y = 0,
          N = 0;
        (Te = ((o = Te) + 560) | 0),
          (l = (o + 8) | 0),
          (y = N = ((M = o) + 524) | 0),
          (v = ((s = (o + 512) | 0) + 12) | (_e[M >> 2] = 0)),
          xe(r),
          (P =
            (0 | k) < 0
              ? ((r = -r), (p = 1), 2087)
              : ((p = (0 != ((2049 & i) | 0)) & 1),
                0 == ((2048 & i) | 0)
                  ? 0 == ((1 & i) | 0)
                    ? 2088
                    : 2093
                  : 2090)),
          xe(r),
          (C = 2146435072 & k);
        do {
          if ((C >>> 0 < 2146435072) | ((2146435072 == (0 | C)) & !1)) {
            if (
              ((u = 0 != (E = 2 * Qe(r, M))) &&
                (_e[M >> 2] = (0 | _e[M >> 2]) - 1),
              97 == (0 | (b = 32 | a)))
            ) {
              (d = 0 == (0 | (T = 32 & a)) ? P : (P + 9) | 0),
                (_ = 2 | p),
                (u = (12 - n) | 0);
              do {
                if (!((11 < n >>> 0) | (0 == (0 | u)))) {
                  for (r = 8; (r *= 16), 0 != (0 | (u = (u + -1) | 0)); );
                  if (45 == (0 | ce[d >> 0])) {
                    r = -(r + (-E - r));
                    break;
                  }
                  r = E + r - r;
                  break;
                }
                r = E;
              } while (0);
              for (
                (0 |
                  (u =
                    0 |
                    Me(
                      (u = (0 | (f = 0 | _e[M >> 2])) < 0 ? (0 - f) | 0 : f),
                      (((0 | u) < 0) << 31) >> 31,
                      v,
                    ))) ==
                  (0 | v) && (ce[(u = (s + 11) | 0) >> 0] = 48),
                  ce[(u + -1) >> 0] = 43 + ((f >> 31) & 2),
                  ce[(c = (u + -2) | 0) >> 0] = a + 15,
                  s = (0 | n) < 1,
                  l = 0 == ((8 & i) | 0),
                  u = N;
                (C = ~~r),
                  (f = (u + 1) | 0),
                  (ce[u >> 0] = de[(2122 + C) >> 0] | T),
                  (r = 16 * (r - (0 | C))),
                  (u =
                    1 != ((f - y) | 0) || l & s & (0 == r)
                      ? f
                      : ((ce[f >> 0] = 46), (u + 2) | 0)),
                  0 != r;

              );
              (C = (u - y) | 0),
                Se(
                  e,
                  32,
                  t,
                  (u =
                    ((y = (v - c) | 0) +
                      _ +
                      (v =
                        (0 != (0 | n)) & (((C + -2) | 0) < (0 | n))
                          ? (n + 2) | 0
                          : C)) |
                    0),
                  i,
                ),
                He(e, d, _),
                Se(e, 48, t, u, 65536 ^ i),
                He(e, N, C),
                Se(e, 48, (v - C) | 0, 0, 0),
                He(e, c, y),
                Se(e, 32, t, u, 8192 ^ i);
              break;
            }
            for (
              f = (0 | n) < 0 ? 6 : n,
                u
                  ? ((u = ((0 | _e[M >> 2]) - 28) | 0),
                    (_e[M >> 2] = u),
                    (r = 268435456 * E))
                  : ((r = E), (u = 0 | _e[M >> 2])),
                l = C = (0 | u) < 0 ? l : (l + 288) | 0;
              (S = ~~r >>> 0),
                (_e[l >> 2] = S),
                (l = (l + 4) | 0),
                0 != (r = 1e9 * (r - (S >>> 0)));

            );
            if (0 < (0 | u))
              for (s = C, _ = l; ; ) {
                if (
                  ((c = (0 | u) < 29 ? u : 29),
                  s >>> 0 <= (u = (_ + -4) | 0) >>> 0)
                ) {
                  for (
                    l = 0;
                    (m =
                      0 |
                      Oe(
                        0 |
                          (h =
                            0 |
                            Be(
                              0 | (h = 0 | Le(0 | _e[u >> 2], 0, 0 | c)),
                              0 | k,
                              0 | l,
                              0,
                            )),
                        0 | (S = k),
                        1e9,
                        0,
                      )),
                      (_e[u >> 2] = m),
                      (l = 0 | Ke(0 | h, 0 | S, 1e9, 0)),
                      s >>> 0 <= (u = (u + -4) | 0) >>> 0;

                  );
                  l && (_e[(s = (s + -4) | 0) >> 2] = l);
                }
                for (
                  l = _;
                  !(l >>> 0 <= s >>> 0 || 0 | _e[(u = (l + -4) | 0) >> 2]);

                )
                  l = u;
                if (
                  ((u = ((0 | _e[M >> 2]) - c) | 0),
                  !(0 < (0 | (_e[M >> 2] = u))))
                )
                  break;
                _ = l;
              }
            else s = C;
            if ((0 | u) < 0) {
              (n = (1 + ((((f + 25) | 0) / 9) | 0)) | 0), (A = 102 == (0 | b));
              do {
                if (
                  ((T = (0 | (T = (0 - u) | 0)) < 9 ? T : 9), s >>> 0 < l >>> 0)
                ) {
                  for (
                    c = ((1 << T) - 1) | 0, _ = 1e9 >>> T, d = 0, u = s;
                    (S = 0 | _e[u >> 2]),
                      (_e[u >> 2] = (S >>> T) + d),
                      (d = 0 | ie(S & c, _)),
                      (u = (u + 4) | 0) >>> 0 < l >>> 0;

                  );
                  (u = 0 == (0 | _e[s >> 2]) ? (s + 4) | 0 : s),
                    (u = d
                      ? ((_e[l >> 2] = d), (s = u), (l + 4) | 0)
                      : ((s = u), l));
                } else (s = 0 == (0 | _e[s >> 2]) ? (s + 4) | 0 : s), (u = l);
                (l =
                  (0 | n) < (((u - (l = A ? C : s)) >> 2) | 0)
                    ? (l + (n << 2)) | 0
                    : u),
                  (u = ((0 | _e[M >> 2]) + T) | 0),
                  (_e[M >> 2] = u);
              } while ((0 | u) < 0);
              (u = s), (n = l);
            } else (u = s), (n = l);
            if (((S = C), u >>> 0 < n >>> 0)) {
              if (
                ((l = (9 * ((S - u) >> 2)) | 0),
                10 <= (c = 0 | _e[u >> 2]) >>> 0)
              )
                for (
                  s = 10;
                  (l = (l + 1) | 0), (s = (10 * s) | 0) >>> 0 <= c >>> 0;

                );
            } else l = 0;
            if (
              (0 |
                (s =
                  (f -
                    (102 != (0 | b) ? l : 0) +
                    ((((m = 0 != (0 | f)) & (A = 103 == (0 | b))) << 31) >>
                      31)) |
                  0)) <
              ((((9 * ((n - S) >> 2)) | 0) - 9) | 0)
            ) {
              if (
                ((T =
                  (C +
                    4 +
                    (((((0 | (s = (s + 9216) | 0)) / 9) | 0) - 1024) << 2)) |
                  0),
                (0 | (s = (1 + ((0 | s) % 9 | 0)) | 0)) < 9)
              )
                for (
                  c = 10;
                  (c = (10 * c) | 0), 9 != (0 | (s = (s + 1) | 0));

                );
              else c = 10;
              if (
                (s = ((T + 4) | 0) == (0 | n)) &
                (0 == (0 | (d = ((_ = 0 | _e[T >> 2]) >>> 0) % (c >>> 0) | 0)))
              )
                s = T;
              else if (
                ((E =
                  0 == ((1 & (((_ >>> 0) / (c >>> 0)) | 0)) | 0)
                    ? 9007199254740992
                    : 9007199254740994),
                (r =
                  d >>> 0 < (h = ((0 | c) / 2) | 0) >>> 0
                    ? 0.5
                    : s & ((0 | d) == (0 | h))
                    ? 1
                    : 1.5),
                p &&
                  ((r = (h = 45 == (0 | ce[P >> 0])) ? -r : r),
                  (E = h ? -E : E)),
                (s = (_ - d) | 0),
                (_e[T >> 2] = s),
                E + r != E)
              ) {
                if (((h = (s + c) | 0), 999999999 < (_e[T >> 2] = h) >>> 0))
                  for (
                    l = T;
                    (s = (l + -4) | 0) >>> (_e[l >> 2] = 0) < u >>> 0 &&
                      (_e[(u = (u + -4) | 0) >> 2] = 0),
                      (h = (1 + (0 | _e[s >> 2])) | 0),
                      999999999 < (_e[s >> 2] = h) >>> 0;

                  )
                    l = s;
                else s = T;
                if (
                  ((l = (9 * ((S - u) >> 2)) | 0),
                  10 <= (_ = 0 | _e[u >> 2]) >>> 0)
                )
                  for (
                    c = 10;
                    (l = (l + 1) | 0), (c = (10 * c) | 0) >>> 0 <= _ >>> 0;

                  );
              } else s = T;
              (s = (s = (s + 4) | 0) >>> 0 < n >>> 0 ? s : n), (h = u);
            } else (s = n), (h = u);
            for (b = s; ; ) {
              if (b >>> 0 <= h >>> 0) {
                M = 0;
                break;
              }
              if (0 | _e[(u = (b + -4) | 0) >> 2]) {
                M = 1;
                break;
              }
              b = u;
            }
            n = (0 - l) | 0;
            do {
              if (A) {
                if (
                  ((f =
                    ((0 | l) < (0 | (u = ((1 & (1 ^ m)) + f) | 0))) &
                    (-5 < (0 | l))
                      ? ((c = (a + -1) | 0), (u + -1 - l) | 0)
                      : ((c = (a + -2) | 0), (u + -1) | 0)),
                  !(u = 8 & i))
                ) {
                  if (M && 0 != (0 | (R = 0 | _e[(b + -4) >> 2])))
                    if ((R >>> 0) % 10 | 0) s = 0;
                    else
                      for (
                        s = 0, u = 10;
                        (s = (s + 1) | 0),
                          !((R >>> 0) % ((u = (10 * u) | 0) >>> 0) | 0);

                      );
                  else s = 9;
                  if (
                    ((u = (((9 * ((b - S) >> 2)) | 0) - 9) | 0),
                    102 == (32 | c))
                  ) {
                    (f =
                      (0 | f) < (0 | (T = 0 < (0 | (T = (u - s) | 0)) ? T : 0))
                        ? f
                        : T),
                      (T = 0);
                    break;
                  }
                  (f =
                    (0 | f) <
                    (0 | (T = 0 < (0 | (T = (u + l - s) | 0)) ? T : 0))
                      ? f
                      : T),
                    (T = 0);
                  break;
                }
                T = u;
              } else (c = a), (T = 8 & i);
            } while (0);
            if (((_ = (0 != (0 | (A = f | T))) & 1), (d = 102 == (32 | c))))
              u = (m = 0) < (0 | l) ? l : 0;
            else {
              if (
                (((s = v) -
                  (u =
                    0 |
                    Me(
                      (u = (0 | l) < 0 ? n : l),
                      (((0 | u) < 0) << 31) >> 31,
                      v,
                    ))) |
                  0) <
                2
              )
                for (; (ce[(u = (u + -1) | 0) >> 0] = 48), ((s - u) | 0) < 2; );
              (ce[(u + -1) >> 0] = 43 + ((l >> 31) & 2)),
                (ce[(u = (u + -2) | 0) >> 0] = c),
                (u = (s - (m = u)) | 0);
            }
            if (
              (Se(e, 32, t, (u = (p + 1 + f + _ + u) | 0), i),
              He(e, P, p),
              Se(e, 48, t, u, 65536 ^ i),
              d)
            ) {
              (_ = T = (N + 9) | 0),
                (d = (N + 8) | 0),
                (s = c = C >>> 0 < h >>> 0 ? C : h);
              do {
                if (((l = 0 | Me(0 | _e[s >> 2], 0, T)), (0 | s) == (0 | c)))
                  (0 | l) == (0 | T) && ((ce[d >> 0] = 48), (l = d));
                else if (N >>> 0 < l >>> 0)
                  for (
                    oe(0 | N, 48, (l - y) | 0);
                    N >>> 0 < (l = (l + -1) | 0) >>> 0;

                  );
                He(e, l, (_ - l) | 0), (s = (s + 4) | 0);
              } while (s >>> 0 <= C >>> 0);
              if (
                (0 | A && He(e, 2138, 1), (s >>> 0 < b >>> 0) & (0 < (0 | f)))
              )
                for (;;) {
                  if (N >>> 0 < (l = 0 | Me(0 | _e[s >> 2], 0, T)) >>> 0)
                    for (
                      oe(0 | N, 48, (l - y) | 0);
                      N >>> 0 < (l = (l + -1) | 0) >>> 0;

                    );
                  if (
                    (He(e, l, (0 | f) < 9 ? f : 9),
                    (l = (f + -9) | 0),
                    !(((s = (s + 4) | 0) >>> 0 < b >>> 0) & (9 < (0 | f))))
                  ) {
                    f = l;
                    break;
                  }
                  f = l;
                }
              Se(e, 48, (f + 9) | 0, 9, 0);
            } else {
              if (((A = M ? b : (h + 4) | 0), -1 < (0 | f))) {
                (T = 0 == (0 | T)),
                  (n = M = (N + 9) | 0),
                  (_ = (0 - y) | 0),
                  (d = (N + 8) | 0),
                  (c = h);
                do {
                  (0 | (l = 0 | Me(0 | _e[c >> 2], 0, M))) == (0 | M) &&
                    ((ce[d >> 0] = 48), (l = d));
                  do {
                    if ((0 | c) == (0 | h)) {
                      if (((s = (l + 1) | 0), He(e, l, 1), T & ((0 | f) < 1))) {
                        l = s;
                        break;
                      }
                      He(e, 2138, 1), (l = s);
                    } else {
                      if (l >>> 0 <= N >>> 0) break;
                      for (
                        oe(0 | N, 48, (l + _) | 0);
                        N >>> 0 < (l = (l + -1) | 0) >>> 0;

                      );
                    }
                  } while (0);
                  He(e, l, (0 | (y = (n - l) | 0)) < (0 | f) ? y : f),
                    (f = (f - y) | 0),
                    (c = (c + 4) | 0);
                } while ((c >>> 0 < A >>> 0) & (-1 < (0 | f)));
              }
              Se(e, 48, (f + 18) | 0, 18, 0), He(e, m, (v - m) | 0);
            }
            Se(e, 32, t, u, 8192 ^ i);
          } else
            (N = 0 != ((32 & a) | 0)),
              Se(e, 32, t, (u = (p + 3) | 0), -65537 & i),
              He(e, P, p),
              He(e, (r != r) | !1 ? (N ? 2114 : 2118) : N ? 2106 : 2110, 3),
              Se(e, 32, t, u, 8192 ^ i);
        } while (0);
        return (Te = o), 0 | ((0 | u) < (0 | t) ? t : u);
      }
      function D(e, r, t, n, i) {
        (e |= 0), (r |= 0), (t |= 0), (n |= 0), (i |= 0);
        var a,
          o,
          u,
          f,
          l,
          s,
          c,
          _,
          d,
          E = 0,
          T = 0,
          A = 0,
          M = 0,
          m = 0,
          b = 0,
          h = 0,
          S = 0,
          R = 0,
          P = 0,
          p = 0,
          C = 0,
          v = 0,
          y = 0;
        (Te = ((d = Te) + 64) | 0),
          (y = ((s = d) + 24) | 0),
          (c = (d + 8) | 0),
          (_ = (d + 20) | 0),
          (_e[(l = (d + 16) | 0) >> 2] = r),
          (a = 0 != (0 | e)),
          (u = o = (y + 40) | 0),
          (y = (y + 39) | 0),
          (f = (4 + c) | 0),
          (b = E = T = 0);
        e: for (;;) {
          do {
            if (-1 < (0 | E)) {
              if (((2147483647 - E) | 0) < (0 | T)) {
                (_e[(E = 296) >> 2] = 75), (E = -1);
                break;
              }
              E = (T + E) | 0;
              break;
            }
          } while (0);
          if (!(((T = 0 | ce[r >> 0]) << 24) >> 24)) {
            v = 87;
            break;
          }
          A = r;
          r: for (;;) {
            switch ((T << 24) >> 24) {
              case 37:
                (T = A), (v = 9);
                break r;
              case 0:
                T = A;
                break r;
            }
            (C = (A + 1) | 0), (_e[l >> 2] = C), (T = 0 | ce[C >> 0]), (A = C);
          }
          r: do {
            if (9 == (0 | v))
              for (;;) {
                if (37 != ((v = 0) | ce[(A + 1) >> 0])) break r;
                if (
                  ((T = (T + 1) | 0),
                  (A = (A + 2) | 0),
                  (_e[l >> 2] = A),
                  37 != (0 | ce[A >> 0]))
                )
                  break;
                v = 9;
              }
          } while (0);
          if (((T = (T - r) | 0), a && He(e, r, T), 0 | T)) r = A;
          else {
            (T = ((0 | ce[(M = (A + 1) | 0) >> 0]) - 48) | 0) >>> 0 < 10
              ? ((p = (C = 36 == (0 | ce[(A + 2) >> 0])) ? T : -1),
                (b = C ? 1 : b),
                (M = C ? (A + 3) | 0 : M))
              : (p = -1),
              (_e[l >> 2] = M),
              (A = ((((T = 0 | ce[M >> 0]) << 24) >> 24) - 32) | 0);
            r: do {
              if (A >>> 0 < 32)
                for (m = 0, h = T; ; ) {
                  if (!(75913 & (T = 1 << A))) {
                    T = h;
                    break r;
                  }
                  if (
                    ((m |= T),
                    (M = (M + 1) | 0),
                    (_e[l >> 2] = M),
                    32 <=
                      (A = ((((T = 0 | ce[M >> 0]) << 24) >> 24) - 32) | 0) >>>
                        0)
                  )
                    break;
                  h = T;
                }
              else m = 0;
            } while (0);
            if ((T << 24) >> 24 == 42) {
              if (
                (T = ((0 | ce[(A = (M + 1) | 0) >> 0]) - 48) | 0) >>> 0 < 10 &&
                36 == (0 | ce[(M + 2) >> 0])
              )
                (_e[(i + (T << 2)) >> 2] = 10),
                  (T = 0 | _e[(n + (((0 | ce[A >> 0]) - 48) << 3)) >> 2]),
                  (b = 1),
                  (M = (M + 3) | 0);
              else {
                if (0 | b) {
                  E = -1;
                  break;
                }
                M =
                  ((b = a
                    ? ((b = (3 + (0 | _e[t >> 2])) & -4),
                      (T = 0 | _e[b >> 2]),
                      (_e[t >> 2] = b + 4),
                      0)
                    : (T = 0)),
                  A);
              }
              (_e[l >> 2] = M),
                (T = (C = (0 | T) < 0) ? (0 - T) | 0 : T),
                (m = C ? 8192 | m : m);
            } else {
              if ((0 | (T = 0 | Ce(l))) < 0) {
                E = -1;
                break;
              }
              M = 0 | _e[l >> 2];
            }
            do {
              if (46 == (0 | ce[M >> 0])) {
                if (42 != (0 | ce[(M + 1) >> 0])) {
                  (_e[l >> 2] = M + 1), (A = 0 | Ce(l)), (M = 0 | _e[l >> 2]);
                  break;
                }
                if (
                  (A = ((0 | ce[(h = (M + 2) | 0) >> 0]) - 48) | 0) >>> 0 <
                    10 &&
                  36 == (0 | ce[(M + 3) >> 0])
                ) {
                  (_e[(i + (A << 2)) >> 2] = 10),
                    (A = 0 | _e[(n + (((0 | ce[h >> 0]) - 48) << 3)) >> 2]),
                    (M = (M + 4) | 0),
                    (_e[l >> 2] = M);
                  break;
                }
                if (0 | b) {
                  E = -1;
                  break e;
                }
                a
                  ? ((C = (3 + (0 | _e[t >> 2])) & -4),
                    (A = 0 | _e[C >> 2]),
                    (_e[t >> 2] = C + 4))
                  : (A = 0),
                  (M = _e[l >> 2] = h);
              } else A = -1;
            } while (0);
            for (P = 0; ; ) {
              if (57 < (((0 | ce[M >> 0]) - 65) | 0) >>> 0) {
                E = -1;
                break e;
              }
              if (
                ((C = (M + 1) | 0),
                (_e[l >> 2] = C),
                !(
                  (((S =
                    255 &
                    (h =
                      0 |
                      ce[
                        ((0 | ce[M >> 0]) - 65 + (1606 + ((58 * P) | 0))) >> 0
                      ])) +
                    -1) |
                    0) >>>
                    0 <
                  8
                ))
              )
                break;
              (P = S), (M = C);
            }
            if (!((h << 24) >> 24)) {
              E = -1;
              break;
            }
            R = -1 < (0 | p);
            do {
              if ((h << 24) >> 24 == 19) {
                if (R) {
                  E = -1;
                  break e;
                }
                v = 49;
              } else {
                if (R) {
                  (_e[(i + (p << 2)) >> 2] = S),
                    (p = 0 | _e[((R = (n + (p << 3)) | 0) + 4) >> 2]),
                    (_e[(v = s) >> 2] = _e[R >> 2]),
                    (_e[(v + 4) >> 2] = p),
                    (v = 49);
                  break;
                }
                if (!a) {
                  E = 0;
                  break e;
                }
                H(s, S, t);
              }
            } while (0);
            if (49 != (0 | v) || ((v = 0), a)) {
              (M =
                (0 != (0 | P)) & (3 == ((15 & (M = 0 | ce[M >> 0])) | 0))
                  ? -33 & M
                  : M),
                (R = -65537 & m),
                (p = 0 == ((8192 & m) | 0) ? m : R);
              r: do {
                switch (0 | M) {
                  case 110:
                    switch (((255 & P) << 24) >> 24) {
                      case 0:
                      case 1:
                        (_e[_e[s >> 2] >> 2] = E), (T = 0), (r = C);
                        continue e;
                      case 2:
                        (T = 0 | _e[s >> 2]),
                          (_e[T >> 2] = E),
                          (_e[(T + 4) >> 2] = (((0 | E) < 0) << 31) >> 31),
                          (T = 0),
                          (r = C);
                        continue e;
                      case 3:
                        (V[_e[s >> 2] >> 1] = E), (T = 0), (r = C);
                        continue e;
                      case 4:
                        (ce[_e[s >> 2] >> 0] = E), (T = 0), (r = C);
                        continue e;
                      case 6:
                        (_e[_e[s >> 2] >> 2] = E), (T = 0), (r = C);
                        continue e;
                      case 7:
                        (T = 0 | _e[s >> 2]),
                          (_e[T >> 2] = E),
                          (_e[(T + 4) >> 2] = (((0 | E) < 0) << 31) >> 31),
                          (T = 0),
                          (r = C);
                        continue e;
                      default:
                        (T = 0), (r = C);
                        continue e;
                    }
                  case 112:
                    (M = 120), (A = 8 < A >>> 0 ? A : 8), (r = 8 | p), (v = 61);
                    break;
                  case 88:
                  case 120:
                    (r = p), (v = 61);
                    break;
                  case 111:
                    (h = 2070),
                      (A =
                        ((m = 0) == ((8 & p) | 0)) |
                        ((0 |
                          (R =
                            (u -
                              (S =
                                0 |
                                ke(
                                  (r = 0 | _e[(M = s) >> 2]),
                                  (M = 0 | _e[(M + 4) >> 2]),
                                  o,
                                ))) |
                            0)) <
                          (0 | A))
                          ? A
                          : (R + 1) | 0),
                      (R = p),
                      (v = 67);
                    break;
                  case 105:
                  case 100:
                    if (
                      ((r = 0 | _e[(M = s) >> 2]),
                      (0 | (M = 0 | _e[(M + 4) >> 2])) < 0)
                    ) {
                      (r = 0 | Fe(0, 0, 0 | r, 0 | M)),
                        (M = k),
                        (_e[(m = s) >> 2] = r),
                        (_e[(m + 4) >> 2] = M),
                        (m = 1),
                        (h = 2070),
                        (v = 66);
                      break r;
                    }
                    (m = (0 != ((2049 & p) | 0)) & 1),
                      (h =
                        0 == ((2048 & p) | 0)
                          ? 0 == ((1 & p) | 0)
                            ? 2070
                            : 2072
                          : 2071),
                      (v = 66);
                    break r;
                  case 117:
                    (h = 2070),
                      (r = (m = 0) | _e[(M = s) >> 2]),
                      (M = 0 | _e[(M + 4) >> 2]),
                      (v = 66);
                    break;
                  case 99:
                    (ce[y >> 0] = _e[s >> 2]),
                      (r = y),
                      (m = 0),
                      (h = 2070),
                      (S = o),
                      (M = 1),
                      (A = R);
                    break;
                  case 109:
                    (M = 0 | Ve(0 | _e[(M = 296) >> 2])), (v = 71);
                    break;
                  case 115:
                    (M = 0 | (M = 0 | _e[s >> 2]) ? M : 2080), (v = 71);
                    break;
                  case 67:
                    (_e[c >> 2] = _e[s >> 2]),
                      (_e[f >> 2] = 0),
                      (S = -1),
                      (M = _e[s >> 2] = c),
                      (v = 75);
                    break;
                  case 83:
                    (r = 0 | _e[s >> 2]),
                      (v = A
                        ? ((S = A), (M = r), 75)
                        : (Se(e, 32, T, 0, p), (r = 0), 84));
                    break;
                  case 65:
                  case 71:
                  case 70:
                  case 69:
                  case 97:
                  case 103:
                  case 102:
                  case 101:
                    (T = 0 | w(e, +N[s >> 3], T, A, p, M)), (r = C);
                    continue e;
                  default:
                    (m = 0), (h = 2070), (S = o), (M = A), (A = p);
                }
              } while (0);
              r: do {
                if (61 == (0 | v))
                  (S =
                    0 |
                    ve(
                      (P = 0 | _e[(p = s) >> 2]),
                      (p = 0 | _e[(p + 4) >> 2]),
                      o,
                      32 & M,
                    )),
                    (m = (h =
                      (0 == ((8 & r) | 0)) | ((0 == (0 | P)) & (0 == (0 | p))))
                      ? 0
                      : 2),
                    (h = h ? 2070 : (2070 + (M >> 4)) | 0),
                    (R = r),
                    (r = P),
                    (M = p),
                    (v = 67);
                else if (66 == (0 | v))
                  (S = 0 | Me(r, M, o)), (R = p), (v = 67);
                else if (71 == (0 | v))
                  (m = v = 0),
                    (h = 2070),
                    (S = (P = 0 == (0 | (p = 0 | ee((r = M), 0, A))))
                      ? (M + A) | 0
                      : p),
                    (M = P ? A : (p - M) | 0),
                    (A = R);
                else if (75 == (0 | v)) {
                  for (
                    h = M, A = r = v = 0;
                    (m = 0 | _e[h >> 2]) &&
                    !(
                      ((0 | (A = 0 | We(_, m))) < 0) |
                      (((S - r) | 0) >>> 0 < A >>> 0)
                    ) &&
                    (r = (A + r) | 0) >>> 0 < S >>> 0;

                  )
                    h = (h + 4) | 0;
                  if ((0 | A) < 0) {
                    E = -1;
                    break e;
                  }
                  if ((Se(e, 32, T, r, p), r))
                    for (m = 0; ; ) {
                      if (!(A = 0 | _e[M >> 2])) {
                        v = 84;
                        break r;
                      }
                      if ((0 | r) < (0 | (m = ((A = 0 | We(_, A)) + m) | 0))) {
                        v = 84;
                        break r;
                      }
                      if ((He(e, _, A), r >>> 0 <= m >>> 0)) {
                        v = 84;
                        break;
                      }
                      M = (M + 4) | 0;
                    }
                  else (r = 0), (v = 84);
                }
              } while (0);
              if (67 == (0 | v))
                (p =
                  ((v = 0) != (0 | A)) | (M = (0 != (0 | r)) | (0 != (0 | M)))),
                  (M = (u - S + (1 & (1 ^ M))) | 0),
                  (r = p ? S : o),
                  (S = o),
                  (M = !p || (0 | M) < (0 | A) ? A : M),
                  (A = -1 < (0 | A) ? -65537 & R : R);
              else if (84 == (0 | v)) {
                (v = 0),
                  Se(e, 32, T, r, 8192 ^ p),
                  (T = (0 | r) < (0 | T) ? T : r),
                  (r = C);
                continue;
              }
              Se(
                e,
                32,
                (T =
                  (0 | T) <
                  (0 |
                    (p =
                      ((R = (0 | M) < (0 | (P = (S - r) | 0)) ? P : M) + m) |
                      0))
                    ? p
                    : T),
                p,
                A,
              ),
                He(e, h, m),
                Se(e, 48, T, p, 65536 ^ A),
                Se(e, 48, R, P, 0),
                He(e, r, P),
                Se(e, 32, T, p, 8192 ^ A),
                (r = C);
            } else (T = 0), (r = C);
          }
        }
        e: do {
          if (87 == (0 | v) && !e)
            if (b) {
              for (E = 1; (r = 0 | _e[(i + (E << 2)) >> 2]); )
                if (
                  (H((n + (E << 3)) | 0, r, t), 10 <= (0 | (E = (E + 1) | 0)))
                ) {
                  E = 1;
                  break e;
                }
              for (;;) {
                if (0 | _e[(i + (E << 2)) >> 2]) {
                  E = -1;
                  break e;
                }
                if (10 <= (0 | (E = (E + 1) | 0))) {
                  E = 1;
                  break;
                }
              }
            } else E = 0;
        } while (0);
        return (Te = d), 0 | E;
      }
      function W(e, r) {
        r |= 0;
        var t,
          n,
          i,
          a,
          o,
          u,
          f,
          l,
          s,
          c,
          _,
          d,
          E,
          T,
          A,
          M = 0,
          m = 0,
          b = 0,
          h = 0,
          S = 0,
          R = 0,
          P = 0,
          p = 0,
          C = 0,
          v = 0;
        if (
          ((Te = ((A = Te) + 704) | 0),
          (E = (A + 144) | 0),
          (d = (A + 128) | 0),
          (_ = (A + 112) | 0),
          (c = (A + 96) | 0),
          (s = (A + 80) | 0),
          (l = (A + 64) | 0),
          (f = (A + 48) | 0),
          (T = (A + 32) | 0),
          (t = (A + 16) | 0),
          (i = ((R = A) + 184) | 0),
          (v = (A + 160) | 0),
          !(a =
            0 |
            (function(e, r) {
              e |= 0;
              var t,
                n,
                i,
                a,
                o = 0,
                u = 0,
                f = 0,
                l = 0;
              if (
                ((Te = ((a = Te) + 528) | 0),
                (t = ((n = a) + 16) | 0),
                !(r |= 0))
              )
                return (Te = a), (l = 0) | l;
              if (r >>> 0 <= 16) return (l = 0 | Q(e, r)), (Te = a), 0 | l;
              if (
                ((i = 0 | Q(e, (r + -16) | 0)),
                (0 | (r = 0 | _e[(l = (e + 20) | 0) >> 2])) < 16)
              )
                for (
                  u = (e + 4) | 0, f = (e + 8) | 0, o = (e + 16) | 0;
                  (e =
                    (0 | (e = 0 | _e[u >> 2])) == (0 | _e[f >> 2])
                      ? 0
                      : ((_e[u >> 2] = e + 1), 0 | de[e >> 0])),
                    (r = (r + 8) | 0),
                    33 <= (0 | (_e[l >> 2] = r)) &&
                      ((_e[n >> 2] = 866),
                      (_e[(n + 4) >> 2] = 3208),
                      (_e[(n + 8) >> 2] = 1366),
                      Ie(t, 812, n),
                      he(t),
                      (r = 0 | _e[l >> 2])),
                    (e = (e << (32 - r)) | _e[o >> 2]),
                    (_e[o >> 2] = e),
                    (0 | r) < 16;

                );
              else e = 0 | _e[(o = e = (e + 16) | 0) >> 2];
              return (
                (_e[o >> 2] = e << 16),
                (_e[l >> 2] = r + -16),
                (Te = a),
                0 | (l = (e >>> 16) | (i << 16))
              );
            })((e |= 0), 14)))
        )
          return (
            (function(e) {
              var r,
                t,
                n,
                i,
                a,
                o = 0;
              (Te = ((a = Te) + 544) | 0),
                (i = (a + 16) | 0),
                (n = ((t = a) + 32) | 0),
                (_e[(e |= 0) >> 2] = 0),
                0 | (r = 0 | _e[(o = (e + 4) | 0) >> 2]) &&
                  (7 & r
                    ? ((_e[t >> 2] = 866),
                      (_e[(t + 4) >> 2] = 2506),
                      (_e[(t + 8) >> 2] = 1232),
                      Ie(n, 812, t),
                      he(n))
                    : le(r, 0, 0, 1, 0),
                  (_e[o >> 2] = 0),
                  (_e[(e + 8) >> 2] = 0),
                  (_e[(e + 12) >> 2] = 0));
              if (
                ((ce[(e + 16) >> 0] = 0),
                !(o = 0 | _e[(e = (e + 20) | 0) >> 2]))
              )
                return (Te = a);
              $(o),
                7 & o
                  ? ((_e[i >> 2] = 866),
                    (_e[(4 + i) >> 2] = 2506),
                    (_e[(8 + i) >> 2] = 1232),
                    Ie(n, 812, i),
                    he(n))
                  : le(o, 0, 0, 1, 0);
              (_e[e >> 2] = 0), (Te = a);
            })(r),
            (Te = A),
            0 | (v = 1)
          );
        if (
          ((o = (r + 4) | 0),
          (0 | (M = 0 | _e[(u = (r + 8) | 0) >> 2])) != (0 | a))
        ) {
          if (M >>> 0 <= a >>> 0) {
            do {
              if ((0 | _e[(r + 12) >> 2]) >>> 0 < a >>> 0) {
                if (0 | X(o, a, ((M + 1) | 0) == (0 | a), 1, 0)) {
                  M = 0 | _e[u >> 2];
                  break;
                }
                return (ce[(r + 16) >> 0] = 1), (Te = A), (v = 0) | v;
              }
            } while (0);
            oe(((0 | _e[o >> 2]) + M) | 0, 0, (a - M) | 0);
          }
          _e[u >> 2] = a;
        }
        if (
          (oe(0 | _e[o >> 2], 0, 0 | a),
          (0 | (M = 0 | _e[(n = (e + 20) | 0) >> 2])) < 5)
        )
          for (
            h = (e + 4) | 0, S = (e + 8) | 0, b = (e + 16) | 0;
            (m =
              (0 | (m = 0 | _e[h >> 2])) == (0 | _e[S >> 2])
                ? 0
                : ((_e[h >> 2] = m + 1), 0 | de[m >> 0])),
              (M = (M + 8) | 0),
              33 <= (0 | (_e[n >> 2] = M)) &&
                ((_e[R >> 2] = 866),
                (_e[(R + 4) >> 2] = 3208),
                (_e[(R + 8) >> 2] = 1366),
                Ie(i, 812, R),
                he(i),
                (M = 0 | _e[n >> 2])),
              (m = (m << (32 - M)) | _e[b >> 2]),
              (_e[b >> 2] = m),
              (0 | M) < 5;

          );
        else m = 0 | _e[(b = m = (e + 16) | 0) >> 2];
        if (
          ((p = m >>> 27),
          (_e[b >> 2] = m << 5),
          (_e[n >> 2] = M + -5),
          20 < ((p + -1) | 0) >>> 0)
        )
          return (Te = A), (v = 0) | v;
        (_e[(v + 20) >> 2] = 0),
          (_e[v >> 2] = 0),
          (_e[(v + 4) >> 2] = 0),
          (_e[(v + 8) >> 2] = 0),
          (_e[(v + 12) >> 2] = 0),
          (M = (v + 4) | (ce[(v + 16) >> 0] = 0)),
          (m = (v + 8) | 0);
        e: do {
          if (0 | X(M, 21, 0, 1, 0)) {
            (h = 0 | _e[m >> 2]),
              oe(((P = 0 | _e[M >> 2]) + h) | 0, 0, (21 - h) | 0),
              (_e[m >> 2] = 21),
              (h = (e + 4) | 0),
              (S = (e + 8) | 0),
              (R = (e + 16) | 0),
              (b = 0);
            do {
              if ((0 | (M = 0 | _e[n >> 2])) < 3)
                for (
                  ;
                  (m =
                    (0 | (m = 0 | _e[h >> 2])) == (0 | _e[S >> 2])
                      ? 0
                      : ((_e[h >> 2] = m + 1), 0 | de[m >> 0])),
                    (M = (M + 8) | 0),
                    33 <= (0 | (_e[n >> 2] = M)) &&
                      ((_e[t >> 2] = 866),
                      (_e[(4 + t) >> 2] = 3208),
                      (_e[(8 + t) >> 2] = 1366),
                      Ie(i, 812, t),
                      he(i),
                      (M = 0 | _e[n >> 2])),
                    (m = (m << (32 - M)) | _e[R >> 2]),
                    (_e[R >> 2] = m),
                    (0 | M) < 3;

                );
              else m = 0 | _e[R >> 2];
              (_e[R >> 2] = m << 3),
                (_e[n >> 2] = M + -3),
                (ce[(P + (0 | de[(1327 + b) >> 0])) >> 0] = m >>> 29),
                (b = (b + 1) | 0);
            } while ((0 | b) != (0 | p));
            if (0 | Z(v)) {
              (R = (e + 4) | 0), (P = (e + 8) | 0), (p = (e + 16) | 0), (M = 0);
              r: do {
                (S = (a - M) | 0), (b = 0 | Ae(e, v));
                t: do {
                  if (b >>> 0 < 17)
                    (0 | _e[u >> 2]) >>> 0 <= M >>> 0 &&
                      ((_e[T >> 2] = 866),
                      (_e[(4 + T) >> 2] = 910),
                      (_e[(8 + T) >> 2] = 1497),
                      Ie(i, 812, T),
                      he(i)),
                      (ce[((0 | _e[o >> 2]) + M) >> 0] = b),
                      (M = (M + 1) | 0);
                  else
                    switch (0 | b) {
                      case 17:
                        if ((0 | (m = 0 | _e[n >> 2])) < 3)
                          for (
                            ;
                            (b =
                              (0 | (b = 0 | _e[R >> 2])) == (0 | _e[P >> 2])
                                ? 0
                                : ((_e[R >> 2] = b + 1), 0 | de[b >> 0])),
                              (m = (m + 8) | 0),
                              33 <= (0 | (_e[n >> 2] = m)) &&
                                ((_e[f >> 2] = 866),
                                (_e[(4 + f) >> 2] = 3208),
                                (_e[(8 + f) >> 2] = 1366),
                                Ie(i, 812, f),
                                he(i),
                                (m = 0 | _e[n >> 2])),
                              (b = (b << (32 - m)) | _e[p >> 2]),
                              (_e[p >> 2] = b),
                              (0 | m) < 3;

                          );
                        else b = 0 | _e[p >> 2];
                        if (
                          ((_e[p >> 2] = b << 3),
                          (_e[n >> 2] = m + -3),
                          (m = S >>> 0 < (b = (3 + (b >>> 29)) | 0) >>> 0))
                        ) {
                          M = 0;
                          break e;
                        }
                        M = ((m ? 0 : b) + M) | 0;
                        break t;
                      case 18:
                        if ((0 | (m = 0 | _e[n >> 2])) < 7)
                          for (
                            ;
                            (b =
                              (0 | (b = 0 | _e[R >> 2])) == (0 | _e[P >> 2])
                                ? 0
                                : ((_e[R >> 2] = b + 1), 0 | de[b >> 0])),
                              (m = (m + 8) | 0),
                              33 <= (0 | (_e[n >> 2] = m)) &&
                                ((_e[l >> 2] = 866),
                                (_e[(4 + l) >> 2] = 3208),
                                (_e[(8 + l) >> 2] = 1366),
                                Ie(i, 812, l),
                                he(i),
                                (m = 0 | _e[n >> 2])),
                              (b = (b << (32 - m)) | _e[p >> 2]),
                              (_e[p >> 2] = b),
                              (0 | m) < 7;

                          );
                        else b = 0 | _e[p >> 2];
                        if (
                          ((_e[p >> 2] = b << 7),
                          (_e[n >> 2] = m + -7),
                          (m = S >>> 0 < (b = (11 + (b >>> 25)) | 0) >>> 0))
                        ) {
                          M = 0;
                          break e;
                        }
                        M = ((m ? 0 : b) + M) | 0;
                        break t;
                      default:
                        if (2 <= ((b + -19) | 0) >>> 0) {
                          C = 81;
                          break r;
                        }
                        if (((m = 0 | _e[n >> 2]), 19 == (0 | b))) {
                          if ((0 | m) < 2)
                            for (
                              b = m;
                              (h =
                                (0 | (m = 0 | _e[R >> 2])) == (0 | _e[P >> 2])
                                  ? 0
                                  : ((_e[R >> 2] = m + 1), 0 | de[m >> 0])),
                                (m = (b + 8) | 0),
                                33 <= (0 | (_e[n >> 2] = m)) &&
                                  ((_e[s >> 2] = 866),
                                  (_e[(4 + s) >> 2] = 3208),
                                  (_e[(8 + s) >> 2] = 1366),
                                  Ie(i, 812, s),
                                  he(i),
                                  (m = 0 | _e[n >> 2])),
                                (b = (h << (32 - m)) | _e[p >> 2]),
                                (_e[p >> 2] = b),
                                (0 | m) < 2;

                            )
                              b = m;
                          else b = 0 | _e[p >> 2];
                          (_e[p >> 2] = b << 2),
                            (b >>>= 30),
                            (h = 3),
                            (m = (m + -2) | 0);
                        } else {
                          if ((0 | m) < 6)
                            for (
                              ;
                              (b =
                                (0 | (b = 0 | _e[R >> 2])) == (0 | _e[P >> 2])
                                  ? 0
                                  : ((_e[R >> 2] = b + 1), 0 | de[b >> 0])),
                                (m = (m + 8) | 0),
                                33 <= (0 | (_e[n >> 2] = m)) &&
                                  ((_e[c >> 2] = 866),
                                  (_e[(4 + c) >> 2] = 3208),
                                  (_e[(8 + c) >> 2] = 1366),
                                  Ie(i, 812, c),
                                  he(i),
                                  (m = 0 | _e[n >> 2])),
                                (b = (b << (32 - m)) | _e[p >> 2]),
                                (_e[p >> 2] = b),
                                (0 | m) < 6;

                            );
                          else b = 0 | _e[p >> 2];
                          (_e[p >> 2] = b << 6),
                            (b >>>= 26),
                            (h = 7),
                            (m = (m + -6) | 0);
                        }
                        if (
                          ((_e[n >> 2] = m),
                          (0 == (0 | M)) | (S >>> 0 < (b = (b + h) | 0) >>> 0))
                        ) {
                          M = 0;
                          break e;
                        }
                        if (
                          ((m = (M + -1) | 0),
                          (0 | _e[u >> 2]) >>> 0 <= m >>> 0 &&
                            ((_e[_ >> 2] = 866),
                            (_e[(4 + _) >> 2] = 910),
                            (_e[(8 + _) >> 2] = 1497),
                            Ie(i, 812, _),
                            he(i)),
                          !(
                            ((h = 0 | ce[((0 | _e[o >> 2]) + m) >> 0]) << 24) >>
                            24
                          ))
                        ) {
                          M = 0;
                          break e;
                        }
                        if ((m = (b + M) | 0) >>> 0 <= M >>> 0) break t;
                        for (
                          ;
                          (0 | _e[u >> 2]) >>> 0 <= M >>> 0 &&
                            ((_e[d >> 2] = 866),
                            (_e[(4 + d) >> 2] = 910),
                            (_e[(8 + d) >> 2] = 1497),
                            Ie(i, 812, d),
                            he(i)),
                            (ce[((0 | _e[o >> 2]) + M) >> 0] = h),
                            (0 | (M = (M + 1) | 0)) != (0 | m);

                        );
                        M = m;
                    }
                } while (0);
              } while (M >>> 0 < a >>> 0);
              if (81 == (0 | C)) {
                (_e[E >> 2] = 866),
                  (_e[(4 + E) >> 2] = 3149),
                  (_e[(8 + E) >> 2] = 1348),
                  Ie(i, 812, E),
                  he(i),
                  (M = 0);
                break;
              }
              M = (0 | a) == (0 | M) ? 0 | Z(r) : 0;
            } else M = 0;
          } else (ce[(v + 16) >> 0] = 1), (M = 0);
        } while (0);
        return ne(v), (Te = A), 0 | (v = M);
      }
      function F(e, r, t, n) {
        t |= 0;
        var i,
          a,
          o,
          u,
          f,
          l,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0,
          T = 0,
          A = 0,
          M = 0,
          m = 0,
          b = 0,
          h = 0,
          S = 0,
          R = 0,
          P = 0,
          p = 0,
          C = 0,
          v = 0,
          y = 0,
          N = 0,
          k = 0,
          O = 0,
          g = 0;
        if (
          ((Te = ((l = Te) + 880) | 0),
          (O = (l + 144) | 0),
          (f = (l + 128) | 0),
          (u = (l + 112) | 0),
          (o = (l + 96) | 0),
          (N = (l + 80) | 0),
          (P = (l + 64) | 0),
          (S = (l + 48) | 0),
          (R = (l + 32) | 0),
          (M = (l + 16) | 0),
          (i = ((A = l) + 360) | 0),
          (a = (l + 296) | 0),
          (g = (l + 224) | 0),
          (h = (l + 156) | 0),
          (0 == (0 | (r |= 0))) | (11 < (n |= 0) >>> 0))
        )
          return (Te = l), (g = 0) | g;
        for (
          _e[(e |= 0) >> 2] = r, c = ((s = g) + 68) | 0;
          (0 | (s = (s + 4) | (_e[s >> 2] = 0))) < (0 | c);

        );
        for (
          s = 0;
          (c = (g + ((255 & (k = 0 | ce[(t + s) >> 0])) << 2)) | 0),
            (k << 24) >> 24 && (_e[c >> 2] = 1 + (0 | _e[c >> 2])),
            (0 | (s = (s + 1) | 0)) != (0 | r);

        );
        for (
          d = _ = c = 0, E = -1, T = 1;
          (s = 0 | _e[(g + (T << 2)) >> 2])
            ? ((c = (s + (_e[(a + ((m = (T + -1) | 0) << 2)) >> 2] = c)) | 0),
              (k = (16 - T) | 0),
              (_e[(e + 28 + (m << 2)) >> 2] =
                1 + (((c + -1) << k) | ((1 << k) - 1))),
              (_e[(e + 96 + (m << 2)) >> 2] = _),
              (m = (s + (_e[(h + (T << 2)) >> 2] = _)) | 0),
              (d = T >>> 0 < d >>> 0 ? d : T),
              (E = E >>> 0 < T >>> 0 ? E : T))
            : ((_e[(e + 28 + ((T + -1) << 2)) >> 2] = 0), (m = _)),
            17 != (0 | (T = (T + 1) | 0));

        )
          (c <<= 1), (_ = m);
        (_e[(e + 4) >> 2] = m), (c = (e + 172) | 0);
        do {
          if (m >>> 0 > (0 | _e[c >> 2]) >>> 0) {
            (s =
              (s = (m + -1) | 0) & m
                ? ((s |= s >>> 16),
                  (s |= s >>> 8),
                  (s |= s >>> 4),
                  r >>> 0 < (s = (1 + (((s |= s >>> 2) >>> 1) | s)) | 0) >>> 0
                    ? r
                    : s)
                : m),
              (_e[c >> 2] = s),
              (s = 0 | _e[(_ = (e + 176) | 0) >> 2]);
            do {
              if (0 | s) {
                if (
                  ((k = 0 | _e[(s + -4) >> 2]),
                  (s = (s + -8) | 0),
                  (0 != (0 | k) && (0 | k) == (0 | ~_e[s >> 2])) ||
                    ((_e[A >> 2] = 866),
                    (_e[(A + 4) >> 2] = 651),
                    (_e[(A + 8) >> 2] = 1579),
                    Ie(i, 812, A),
                    he(i)),
                  7 & s)
                ) {
                  (_e[M >> 2] = 866),
                    (_e[(M + 4) >> 2] = 2506),
                    (_e[(M + 8) >> 2] = 1232),
                    Ie(i, 812, M),
                    he(i);
                  break;
                }
                le(s, 0, 0, 1, 0);
                break;
              }
            } while (0);
            if (
              (c =
                0 |
                ae((8 + ((s = 0 | (s = 0 | _e[c >> 2]) ? s : 1) << 1)) | 0, 0))
            ) {
              (_e[(c + 4) >> 2] = s),
                (_e[c >> 2] = ~s),
                (_e[_ >> 2] = c + 8),
                (b = 24);
              break;
            }
            n = _e[_ >> 2] = 0;
            break;
          }
          b = 24;
        } while (0);
        e: do {
          if (24 == (0 | b)) {
            for (
              ce[(k = (e + 24) | 0) >> 0] = E,
                ce[(e + 25) >> 0] = d,
                _ = (e + 176) | 0,
                c = 0;
              (s = 255 & (y = 0 | ce[(t + c) >> 0])),
                (y << 24) >> 24 &&
                  (0 | _e[(g + (s << 2)) >> 2] ||
                    ((_e[R >> 2] = 866),
                    (_e[(R + 4) >> 2] = 2276),
                    (_e[(R + 8) >> 2] = 977),
                    Ie(i, 812, R),
                    he(i)),
                  (s = 0 | _e[(y = (h + (s << 2)) | 0) >> 2]),
                  (_e[y >> 2] = s + 1),
                  m >>> 0 <= s >>> 0 &&
                    ((_e[S >> 2] = 866),
                    (_e[(S + 4) >> 2] = 2280),
                    (_e[(S + 8) >> 2] = 990),
                    Ie(i, 812, S),
                    he(i)),
                  (V[((0 | _e[_ >> 2]) + (s << 1)) >> 1] = c)),
                (0 | (c = (c + 1) | 0)) != (0 | r);

            );
            if (
              ((v = (0 | de[k >> 0]) >>> 0 < n >>> 0 ? n : 0),
              (C = 0 != (0 | (_e[(y = (e + 8) | 0) >> 2] = v))))
            ) {
              (p = 1 << v), (s = (e + 164) | 0);
              do {
                if (p >>> 0 > (0 | _e[s >> 2]) >>> 0) {
                  (_e[s >> 2] = p), (s = 0 | _e[(_ = (e + 168) | 0) >> 2]);
                  do {
                    if (0 | s) {
                      if (
                        ((R = 0 | _e[(s + -4) >> 2]),
                        (s = (s + -8) | 0),
                        (0 != (0 | R) && (0 | R) == (0 | ~_e[s >> 2])) ||
                          ((_e[P >> 2] = 866),
                          (_e[(P + 4) >> 2] = 651),
                          (_e[(P + 8) >> 2] = 1579),
                          Ie(i, 812, P),
                          he(i)),
                        7 & s)
                      ) {
                        (_e[N >> 2] = 866),
                          (_e[(N + 4) >> 2] = 2506),
                          (_e[(N + 8) >> 2] = 1232),
                          Ie(i, 812, N),
                          he(i);
                        break;
                      }
                      le(s, 0, 0, 1, 0);
                      break;
                    }
                  } while (0);
                  if ((c = 0 | ae(((s = p << 2) + 8) | 0, 0))) {
                    (N = (c + 8) | 0),
                      (_e[(c + 4) >> 2] = p),
                      (_e[c >> 2] = ~p),
                      (c = _e[_ >> 2] = N);
                    break;
                  }
                  n = _e[_ >> 2] = 0;
                  break e;
                }
                (s = p << 2), (c = 0 | _e[(_ = c = (e + 168) | 0) >> 2]);
              } while (0);
              oe(0 | c, -1, 0 | s), (S = (e + 176) | 0), (h = 1);
              do {
                if (
                  0 | _e[(g + (h << 2)) >> 2] &&
                  ((P = 1 << (R = (v - h) | 0)),
                  (c = 0 | _e[(a + ((s = (h + -1) | 0) << 2)) >> 2]),
                  16 <= s >>> 0 &&
                    ((_e[o >> 2] = 866),
                    (_e[(4 + o) >> 2] = 1960),
                    (_e[(8 + o) >> 2] = 1453),
                    Ie(i, 812, o),
                    he(i)),
                  c >>> 0 <=
                    (r =
                      0 == (0 | (r = 0 | _e[(e + 28 + (s << 2)) >> 2]))
                        ? -1
                        : ((r + -1) | 0) >>> ((16 - h) | 0)) >>>
                      0)
                ) {
                  (m = ((0 | _e[(e + 96 + (s << 2)) >> 2]) - c) | 0),
                    (b = h << 16);
                  do {
                    for (
                      s = 0 | Ee[((0 | _e[S >> 2]) + ((m + c) << 1)) >> 1],
                        (0 | de[(t + s) >> 0]) != (0 | h) &&
                          ((_e[u >> 2] = 866),
                          (_e[(4 + u) >> 2] = 2322),
                          (_e[(8 + u) >> 2] = 1019),
                          Ie(i, 812, u),
                          he(i)),
                        M = c << R,
                        T = s | b,
                        E = 0;
                      p >>> 0 <= (A = (E + M) | 0) >>> 0 &&
                        ((_e[f >> 2] = 866),
                        (_e[(4 + f) >> 2] = 2328),
                        (_e[(8 + f) >> 2] = 1053),
                        Ie(i, 812, f),
                        he(i)),
                        (s = 0 | _e[_ >> 2]),
                        -1 != (0 | _e[(s + (A << 2)) >> 2]) &&
                          ((_e[O >> 2] = 866),
                          (_e[(O + 4) >> 2] = 2330),
                          (_e[(O + 8) >> 2] = 1076),
                          Ie(i, 812, O),
                          he(i),
                          (s = 0 | _e[_ >> 2])),
                        (_e[(s + (A << 2)) >> 2] = T),
                        (E = (E + 1) | 0) >>> 0 < P >>> 0;

                    );
                    c = (c + 1) | 0;
                  } while (c >>> 0 <= r >>> 0);
                }
                h = (h + 1) | 0;
              } while (h >>> 0 <= v >>> 0);
            }
            (_e[(s = (e + 96) | 0) >> 2] = (0 | _e[s >> 2]) - (0 | _e[a >> 2])),
              (_e[(s = (e + 100) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(4 + a) >> 2])),
              (_e[(s = (e + 104) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(8 + a) >> 2])),
              (_e[(s = (e + 108) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(12 + a) >> 2])),
              (_e[(s = (e + 112) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(16 + a) >> 2])),
              (_e[(s = (e + 116) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(20 + a) >> 2])),
              (_e[(s = (e + 120) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(24 + a) >> 2])),
              (_e[(s = (e + 124) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(28 + a) >> 2])),
              (_e[(s = (e + 128) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(32 + a) >> 2])),
              (_e[(s = (e + 132) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(36 + a) >> 2])),
              (_e[(s = (e + 136) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(40 + a) >> 2])),
              (_e[(s = (e + 140) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(44 + a) >> 2])),
              (_e[(s = (e + 144) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(48 + a) >> 2])),
              (_e[(s = (e + 148) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(52 + a) >> 2])),
              (_e[(s = (e + 152) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(56 + a) >> 2])),
              (_e[(s = (e + 156) | 0) >> 2] =
                (0 | _e[s >> 2]) - (0 | _e[(60 + a) >> 2])),
              (_e[(s = (e + 16) | 0) >> 2] = 0),
              (_e[(c = (e + 20) | 0) >> 2] = de[k >> 0]);
            r: do {
              if (C) {
                do {
                  if (!n) break r;
                  n = ((O = n) + -1) | 0;
                } while (!(0 | _e[(g + (O << 2)) >> 2]));
                if (
                  ((_e[s >> 2] = _e[(e + 28 + (n << 2)) >> 2]),
                  (n = (v + 1) | 0),
                  (_e[c >> 2] = n) >>> 0 <= d >>> 0)
                ) {
                  for (; !(0 | _e[(g + (n << 2)) >> 2]); )
                    if (d >>> 0 < (n = (n + 1) | 0) >>> 0) break r;
                  _e[c >> 2] = n;
                }
              }
            } while (0);
            (_e[(e + 92) >> 2] = -1),
              (_e[(e + 160) >> 2] = 1048575),
              (_e[(e + 12) >> 2] = 32 - (0 | _e[y >> 2])),
              (n = 1);
          }
        } while (0);
        return (Te = l), 0 | (g = n);
      }
      function x(e) {
        var r = 0,
          t = 0,
          n = 0,
          i = 0,
          a = 0,
          o = 0,
          u = 0,
          f = 0;
        if ((e |= 0)) {
          (t = (e + -8) | 0),
            (i = 0 | _e[1148]),
            (f = (t + (r = -8 & (e = 0 | _e[(e + -4) >> 2]))) | 0);
          do {
            if (1 & e) o = u = t;
            else {
              if (((n = 0 | _e[t >> 2]), !(3 & e))) return;
              if (((a = (n + r) | 0), (o = (t + (0 - n)) | 0) >>> 0 < i >>> 0))
                return;
              if ((0 | o) == (0 | _e[1149])) {
                if (3 == ((3 & (r = 0 | _e[(e = (f + 4) | 0) >> 2])) | 0))
                  return (
                    (_e[1146] = a),
                    (_e[e >> 2] = -2 & r),
                    (_e[(o + 4) >> 2] = 1 | a),
                    void (_e[(o + a) >> 2] = a)
                  );
                (u = o), (r = a);
                break;
              }
              if (((t = n >>> 3), n >>> 0 < 256)) {
                if (
                  ((e = 0 | _e[(o + 8) >> 2]),
                  (0 | (r = 0 | _e[(o + 12) >> 2])) == (0 | e))
                ) {
                  (_e[1144] = _e[1144] & ~(1 << t)), (u = o), (r = a);
                  break;
                }
                (_e[(e + 12) >> 2] = r),
                  (_e[(r + 8) >> 2] = e),
                  (u = o),
                  (r = a);
                break;
              }
              (i = 0 | _e[(o + 24) >> 2]), (e = 0 | _e[(o + 12) >> 2]);
              do {
                if ((0 | e) == (0 | o)) {
                  if (!(e = 0 | _e[(r = ((t = (o + 16) | 0) + 4) | 0) >> 2])) {
                    if (!(e = 0 | _e[t >> 2])) {
                      e = 0;
                      break;
                    }
                    r = t;
                  }
                  for (;;)
                    if (0 | (n = 0 | _e[(t = (e + 20) | 0) >> 2]))
                      (e = n), (r = t);
                    else {
                      if (!(n = 0 | _e[(t = (e + 16) | 0) >> 2])) break;
                      (e = n), (r = t);
                    }
                  _e[r >> 2] = 0;
                } else
                  (u = 0 | _e[(o + 8) >> 2]),
                    (_e[(u + 12) >> 2] = e),
                    (_e[(e + 8) >> 2] = u);
              } while (0);
              if (i) {
                if (
                  ((r = 0 | _e[(o + 28) >> 2]),
                  (0 | o) == (0 | _e[(t = (4880 + (r << 2)) | 0) >> 2]))
                ) {
                  if (!(_e[t >> 2] = e)) {
                    (_e[1145] = _e[1145] & ~(1 << r)), (u = o), (r = a);
                    break;
                  }
                } else if (
                  !(_e[
                    (i +
                      16 +
                      ((((0 | _e[(i + 16) >> 2]) != (0 | o)) & 1) << 2)) >>
                      2
                  ] = e)
                ) {
                  (u = o), (r = a);
                  break;
                }
                (_e[(e + 24) >> 2] = i),
                  0 | (t = 0 | _e[(r = (o + 16) | 0) >> 2]) &&
                    ((_e[(e + 16) >> 2] = t), (_e[(t + 24) >> 2] = e)),
                  (r =
                    ((u =
                      ((r = 0 | _e[(r + 4) >> 2]) &&
                        ((_e[(e + 20) >> 2] = r), (_e[(r + 24) >> 2] = e)),
                      o)),
                    a));
              } else (u = o), (r = a);
            }
          } while (0);
          if (
            !(f >>> 0 <= o >>> 0) &&
            1 & (n = 0 | _e[(e = (f + 4) | 0) >> 2])
          ) {
            if (2 & n)
              (_e[e >> 2] = -2 & n),
                (_e[(u + 4) >> 2] = 1 | r),
                (i = _e[(o + r) >> 2] = r);
            else {
              if (((e = 0 | _e[1149]), (0 | f) == (0 | _e[1150]))) {
                if (
                  ((f = ((0 | _e[1147]) + r) | 0),
                  (_e[1147] = f),
                  (_e[1150] = u),
                  (_e[(u + 4) >> 2] = 1 | f),
                  (0 | u) != (0 | e))
                )
                  return;
                return (_e[1149] = 0), void (_e[1146] = 0);
              }
              if ((0 | f) == (0 | e))
                return (
                  (f = ((0 | _e[1146]) + r) | 0),
                  (_e[1146] = f),
                  (_e[1149] = o),
                  (_e[(u + 4) >> 2] = 1 | f),
                  void (_e[(o + f) >> 2] = f)
                );
              (i = ((-8 & n) + r) | 0), (t = n >>> 3);
              do {
                if (n >>> 0 < 256) {
                  if (
                    ((r = 0 | _e[(f + 8) >> 2]),
                    (0 | (e = 0 | _e[(f + 12) >> 2])) == (0 | r))
                  ) {
                    _e[1144] = _e[1144] & ~(1 << t);
                    break;
                  }
                  (_e[(r + 12) >> 2] = e), (_e[(e + 8) >> 2] = r);
                  break;
                }
                (a = 0 | _e[(f + 24) >> 2]), (e = 0 | _e[(f + 12) >> 2]);
                do {
                  if ((0 | e) == (0 | f)) {
                    if (
                      !(e = 0 | _e[(r = ((t = (f + 16) | 0) + 4) | 0) >> 2])
                    ) {
                      if (!(e = 0 | _e[t >> 2])) {
                        t = 0;
                        break;
                      }
                      r = t;
                    }
                    for (;;)
                      if (0 | (n = 0 | _e[(t = (e + 20) | 0) >> 2]))
                        (e = n), (r = t);
                      else {
                        if (!(n = 0 | _e[(t = (e + 16) | 0) >> 2])) break;
                        (e = n), (r = t);
                      }
                    (_e[r >> 2] = 0), (t = e);
                  } else
                    (t = 0 | _e[(f + 8) >> 2]),
                      (_e[(t + 12) >> 2] = e),
                      (_e[(e + 8) >> 2] = t),
                      (t = e);
                } while (0);
                if (0 | a) {
                  if (
                    ((e = 0 | _e[(f + 28) >> 2]),
                    (0 | f) == (0 | _e[(r = (4880 + (e << 2)) | 0) >> 2]))
                  ) {
                    if (!(_e[r >> 2] = t)) {
                      _e[1145] = _e[1145] & ~(1 << e);
                      break;
                    }
                  } else if (
                    !(_e[
                      (a +
                        16 +
                        ((((0 | _e[(a + 16) >> 2]) != (0 | f)) & 1) << 2)) >>
                        2
                    ] = t)
                  )
                    break;
                  (_e[(t + 24) >> 2] = a),
                    0 | (r = 0 | _e[(e = (f + 16) | 0) >> 2]) &&
                      ((_e[(t + 16) >> 2] = r), (_e[(r + 24) >> 2] = t)),
                    0 | (e = 0 | _e[(e + 4) >> 2]) &&
                      ((_e[(t + 20) >> 2] = e), (_e[(e + 24) >> 2] = t));
                }
              } while (0);
              if (
                ((_e[(u + 4) >> 2] = 1 | i),
                (_e[(o + i) >> 2] = i),
                (0 | u) == (0 | _e[1149]))
              )
                return void (_e[1146] = i);
            }
            if (((e = i >>> 3), i >>> 0 < 256))
              return (
                (t = (4616 + ((e << 1) << 2)) | 0),
                (r = 0 | _e[1144]) & (e = 1 << e)
                  ? (e = 0 | _e[(r = (t + 8) | 0) >> 2])
                  : ((_e[1144] = r | e), (r = ((e = t) + 8) | 0)),
                (_e[r >> 2] = u),
                (_e[(e + 12) >> 2] = u),
                (_e[(u + 8) >> 2] = e),
                void (_e[(u + 12) >> 2] = t)
              );
            (n =
              (4880 +
                ((e = (e = i >>> 8)
                  ? 16777215 < i >>> 0
                    ? 31
                    : ((i >>>
                        (((e =
                          (14 -
                            ((a =
                              ((((f =
                                e << (o = (((e + 1048320) | 0) >>> 16) & 8)) +
                                520192) |
                                0) >>>
                                16) &
                              4) |
                              o |
                              (e = ((((f <<= a) + 245760) | 0) >>> 16) & 2)) +
                            ((f << e) >>> 15)) |
                          0) +
                          7) |
                          0)) &
                        1) |
                      (e << 1)
                  : 0) <<
                  2)) |
              0),
              (_e[(u + 28) >> 2] = e),
              (_e[(u + 20) >> 2] = 0),
              (r = (_e[(u + 16) >> 2] = 0) | _e[1145]),
              (t = 1 << e);
            do {
              if (r & t) {
                for (
                  r = i << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0),
                    t = 0 | _e[n >> 2];
                  ;

                ) {
                  if (((-8 & _e[(t + 4) >> 2]) | 0) == (0 | i)) {
                    e = 73;
                    break;
                  }
                  if (
                    !(e = 0 | _e[(n = (t + 16 + ((r >>> 31) << 2)) | 0) >> 2])
                  ) {
                    e = 72;
                    break;
                  }
                  (r <<= 1), (t = e);
                }
                if (72 == (0 | e)) {
                  (_e[n >> 2] = u),
                    (_e[(u + 24) >> 2] = t),
                    (_e[(u + 12) >> 2] = u),
                    (_e[(u + 8) >> 2] = u);
                  break;
                }
                if (73 == (0 | e)) {
                  (f = 0 | _e[(o = (t + 8) | 0) >> 2]),
                    (_e[(f + 12) >> 2] = u),
                    (_e[o >> 2] = u),
                    (_e[(u + 8) >> 2] = f),
                    (_e[(u + 12) >> 2] = t),
                    (_e[(u + 24) >> 2] = 0);
                  break;
                }
              } else
                (_e[1145] = r | t),
                  (_e[n >> 2] = u),
                  (_e[(u + 24) >> 2] = n),
                  (_e[(u + 12) >> 2] = u),
                  (_e[(u + 8) >> 2] = u);
            } while (0);
            if (((f = ((0 | _e[1152]) - 1) | 0), !(_e[1152] = f))) {
              for (e = 5032; (e = 0 | _e[e >> 2]); ) e = (e + 8) | 0;
              _e[1152] = -1;
            }
          }
        }
      }
      function B(e, r) {
        var t = 0,
          n = 0,
          i = 0,
          a = 0,
          o = 0,
          u = 0,
          f = 0;
        (f = ((e |= 0) + (r |= 0)) | 0), (t = 0 | _e[(e + 4) >> 2]);
        do {
          if (1 & t) (u = e), (t = r);
          else {
            if (((n = 0 | _e[e >> 2]), !(3 & t))) return;
            if (
              ((o = (n + r) | 0),
              (0 | (a = (e + (0 - n)) | 0)) == (0 | _e[1149]))
            ) {
              if (3 == ((3 & (t = 0 | _e[(e = (f + 4) | 0) >> 2])) | 0))
                return (
                  (_e[1146] = o),
                  (_e[e >> 2] = -2 & t),
                  (_e[(a + 4) >> 2] = 1 | o),
                  void (_e[(a + o) >> 2] = o)
                );
              (u = a), (t = o);
              break;
            }
            if (((r = n >>> 3), n >>> 0 < 256)) {
              if (
                ((e = 0 | _e[(a + 8) >> 2]),
                (0 | (t = 0 | _e[(a + 12) >> 2])) == (0 | e))
              ) {
                (_e[1144] = _e[1144] & ~(1 << r)), (u = a), (t = o);
                break;
              }
              (_e[(e + 12) >> 2] = t), (_e[(t + 8) >> 2] = e), (u = a), (t = o);
              break;
            }
            (i = 0 | _e[(a + 24) >> 2]), (e = 0 | _e[(a + 12) >> 2]);
            do {
              if ((0 | e) == (0 | a)) {
                if (!(e = 0 | _e[(t = ((r = (a + 16) | 0) + 4) | 0) >> 2])) {
                  if (!(e = 0 | _e[r >> 2])) {
                    e = 0;
                    break;
                  }
                  t = r;
                }
                for (;;)
                  if (0 | (n = 0 | _e[(r = (e + 20) | 0) >> 2]))
                    (e = n), (t = r);
                  else {
                    if (!(n = 0 | _e[(r = (e + 16) | 0) >> 2])) break;
                    (e = n), (t = r);
                  }
                _e[t >> 2] = 0;
              } else
                (u = 0 | _e[(a + 8) >> 2]),
                  (_e[(u + 12) >> 2] = e),
                  (_e[(e + 8) >> 2] = u);
            } while (0);
            if (i) {
              if (
                ((t = 0 | _e[(a + 28) >> 2]),
                (0 | a) == (0 | _e[(r = (4880 + (t << 2)) | 0) >> 2]))
              ) {
                if (!(_e[r >> 2] = e)) {
                  (_e[1145] = _e[1145] & ~(1 << t)), (u = a), (t = o);
                  break;
                }
              } else if (
                !(_e[
                  (i +
                    16 +
                    ((((0 | _e[(i + 16) >> 2]) != (0 | a)) & 1) << 2)) >>
                    2
                ] = e)
              ) {
                (u = a), (t = o);
                break;
              }
              (_e[(e + 24) >> 2] = i),
                0 | (r = 0 | _e[(t = (a + 16) | 0) >> 2]) &&
                  ((_e[(e + 16) >> 2] = r), (_e[(r + 24) >> 2] = e)),
                (t =
                  ((u =
                    ((t = 0 | _e[(t + 4) >> 2]) &&
                      ((_e[(e + 20) >> 2] = t), (_e[(t + 24) >> 2] = e)),
                    a)),
                  o));
            } else (u = a), (t = o);
          }
        } while (0);
        if (2 & (n = 0 | _e[(e = (f + 4) | 0) >> 2]))
          (_e[e >> 2] = -2 & n),
            (_e[(u + 4) >> 2] = 1 | t),
            (_e[(u + t) >> 2] = t);
        else {
          if (((e = 0 | _e[1149]), (0 | f) == (0 | _e[1150])))
            return (
              (f = ((0 | _e[1147]) + t) | 0),
              (_e[1147] = f),
              (_e[1150] = u),
              (_e[(u + 4) >> 2] = 1 | f),
              (0 | u) == (0 | e) && ((_e[1149] = 0), void (_e[1146] = 0))
            );
          if ((0 | f) == (0 | e))
            return (
              (f = ((0 | _e[1146]) + t) | 0),
              (_e[1146] = f),
              (_e[1149] = u),
              (_e[(u + 4) >> 2] = 1 | f),
              void (_e[(u + f) >> 2] = f)
            );
          (a = ((-8 & n) + t) | 0), (r = n >>> 3);
          do {
            if (n >>> 0 < 256) {
              if (
                ((t = 0 | _e[(f + 8) >> 2]),
                (0 | (e = 0 | _e[(f + 12) >> 2])) == (0 | t))
              ) {
                _e[1144] = _e[1144] & ~(1 << r);
                break;
              }
              (_e[(t + 12) >> 2] = e), (_e[(e + 8) >> 2] = t);
              break;
            }
            (i = 0 | _e[(f + 24) >> 2]), (e = 0 | _e[(f + 12) >> 2]);
            do {
              if ((0 | e) == (0 | f)) {
                if (!(e = 0 | _e[(t = ((r = (f + 16) | 0) + 4) | 0) >> 2])) {
                  if (!(e = 0 | _e[r >> 2])) {
                    r = 0;
                    break;
                  }
                  t = r;
                }
                for (;;)
                  if (0 | (n = 0 | _e[(r = (e + 20) | 0) >> 2]))
                    (e = n), (t = r);
                  else {
                    if (!(n = 0 | _e[(r = (e + 16) | 0) >> 2])) break;
                    (e = n), (t = r);
                  }
                (_e[t >> 2] = 0), (r = e);
              } else
                (r = 0 | _e[(f + 8) >> 2]),
                  (_e[(r + 12) >> 2] = e),
                  (_e[(e + 8) >> 2] = r),
                  (r = e);
            } while (0);
            if (0 | i) {
              if (
                ((e = 0 | _e[(f + 28) >> 2]),
                (0 | f) == (0 | _e[(t = (4880 + (e << 2)) | 0) >> 2]))
              ) {
                if (!(_e[t >> 2] = r)) {
                  _e[1145] = _e[1145] & ~(1 << e);
                  break;
                }
              } else if (
                !(_e[
                  (i +
                    16 +
                    ((((0 | _e[(i + 16) >> 2]) != (0 | f)) & 1) << 2)) >>
                    2
                ] = r)
              )
                break;
              (_e[(r + 24) >> 2] = i),
                0 | (t = 0 | _e[(e = (f + 16) | 0) >> 2]) &&
                  ((_e[(r + 16) >> 2] = t), (_e[(t + 24) >> 2] = r)),
                0 | (e = 0 | _e[(e + 4) >> 2]) &&
                  ((_e[(r + 20) >> 2] = e), (_e[(e + 24) >> 2] = r));
            }
          } while (0);
          if (
            ((_e[(u + 4) >> 2] = 1 | a),
            (_e[(u + a) >> 2] = a),
            (0 | u) == (0 | _e[1149]))
          )
            return void (_e[1146] = a);
          t = a;
        }
        if (((e = t >>> 3), t >>> 0 < 256))
          return (
            (r = (4616 + ((e << 1) << 2)) | 0),
            (t = 0 | _e[1144]) & (e = 1 << e)
              ? (e = 0 | _e[(t = (r + 8) | 0) >> 2])
              : ((_e[1144] = t | e), (t = ((e = r) + 8) | 0)),
            (_e[t >> 2] = u),
            (_e[(e + 12) >> 2] = u),
            (_e[(u + 8) >> 2] = e),
            void (_e[(u + 12) >> 2] = r)
          );
        if (
          ((i =
            (4880 +
              ((e = (e = t >>> 8)
                ? 16777215 < t >>> 0
                  ? 31
                  : ((t >>>
                      (((e =
                        (14 -
                          ((a =
                            ((((f =
                              e << (o = (((e + 1048320) | 0) >>> 16) & 8)) +
                              520192) |
                              0) >>>
                              16) &
                            4) |
                            o |
                            (e = ((((f <<= a) + 245760) | 0) >>> 16) & 2)) +
                          ((f << e) >>> 15)) |
                        0) +
                        7) |
                        0)) &
                      1) |
                    (e << 1)
                : 0) <<
                2)) |
            0),
          (_e[(u + 28) >> 2] = e),
          (_e[(u + 20) >> 2] = 0),
          !((r = (_e[(u + 16) >> 2] = 0) | _e[1145]) & (n = 1 << e)))
        )
          return (
            (_e[1145] = r | n),
            (_e[i >> 2] = u),
            (_e[(u + 24) >> 2] = i),
            (_e[(u + 12) >> 2] = u),
            void (_e[(u + 8) >> 2] = u)
          );
        for (
          r = t << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0),
            n = 0 | _e[i >> 2];
          ;

        ) {
          if (((-8 & _e[(n + 4) >> 2]) | 0) == (0 | t)) {
            e = 69;
            break;
          }
          if (!(e = 0 | _e[(i = (n + 16 + ((r >>> 31) << 2)) | 0) >> 2])) {
            e = 68;
            break;
          }
          (r <<= 1), (n = e);
        }
        return 68 == (0 | e)
          ? ((_e[i >> 2] = u),
            (_e[(u + 24) >> 2] = n),
            (_e[(u + 12) >> 2] = u),
            void (_e[(u + 8) >> 2] = u))
          : 69 == (0 | e) &&
              ((f = 0 | _e[(o = (n + 8) | 0) >> 2]),
              (_e[(f + 12) >> 2] = u),
              (_e[o >> 2] = u),
              (_e[(u + 8) >> 2] = f),
              (_e[(u + 12) >> 2] = n),
              void (_e[(u + 24) >> 2] = 0));
      }
      function G(e, r, t, n, i) {
        i |= 0;
        var a = 0,
          o = 0,
          u = 0,
          f = 0,
          l = 0,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0;
        if (((s = e |= 0), (o = t |= 0), (u = _ = n |= 0), !(l = f = r |= 0)))
          return (
            (a = 0 != (0 | i)),
            u
              ? (a && ((_e[i >> 2] = 0 | e), (_e[(i + 4) >> 2] = 0 & r)),
                (i = _ = 0) | ((k = _), i))
              : (a &&
                  ((_e[i >> 2] = (s >>> 0) % (o >>> 0)),
                  (_e[(i + 4) >> 2] = 0)),
                (_ = 0) | ((k = _), (i = ((s >>> 0) / (o >>> 0)) >>> 0)))
          );
        a = 0 == (0 | u);
        do {
          if (o) {
            if (!a) {
              if ((a = ((0 | T(0 | u)) - (0 | T(0 | l))) | 0) >>> 0 <= 31) {
                (e =
                  ((s >>> ((o = c = (a + 1) | 0) >>> 0)) &
                    (r = (a - 31) >> 31)) |
                  (l << (u = (31 - a) | 0))),
                  (r &= l >>> (c >>> 0)),
                  (a = 0),
                  (u = s << u);
                break;
              }
              return i
                ? ((_e[i >> 2] = 0 | e),
                  (_e[(i + 4) >> 2] = f | (0 & r)),
                  (i = _ = 0) | ((k = _), i))
                : (i = _ = 0) | ((k = _), i);
            }
            if (((a = (o - 1) | 0) & o) | 0) {
              (e =
                ((((c =
                  (32 - (u = (33 + (0 | T(0 | o)) - (0 | T(0 | l))) | 0)) | 0) -
                  1) >>
                  31) &
                  (l >>> ((d = (u - 32) | 0) >>> 0))) |
                (((l << c) | (s >>> ((o = u) >>> 0))) & (r = d >> 31))),
                (r &= l >>> (u >>> 0)),
                (a = (s << (E = (64 - u) | 0)) & (f = c >> 31)),
                (u =
                  (((l << E) | (s >>> (d >>> 0))) & f) |
                  ((s << c) & ((u - 33) >> 31)));
              break;
            }
            return (
              0 | i && ((_e[i >> 2] = a & s), (_e[(i + 4) >> 2] = 0)),
              1 == (0 | o)
                ? 0 | ((k = d = f | (0 & r)), (E = 0 | e))
                : ((E = 0 | ye(0 | o)),
                  0 |
                    ((k = d = (l >>> (E >>> 0)) | 0),
                    (E = (l << (32 - E)) | (s >>> (E >>> 0)) | 0)))
            );
          }
          if (a)
            return (
              0 | i &&
                ((_e[i >> 2] = (l >>> 0) % (o >>> 0)), (_e[(i + 4) >> 2] = 0)),
              (d = 0) | ((k = d), (E = ((l >>> 0) / (o >>> 0)) >>> 0))
            );
          if (!s)
            return (
              0 | i &&
                ((_e[i >> 2] = 0), (_e[(i + 4) >> 2] = (l >>> 0) % (u >>> 0))),
              (d = 0) | ((k = d), (E = ((l >>> 0) / (u >>> 0)) >>> 0))
            );
          if (!((a = (u - 1) | 0) & u))
            return (
              0 | i &&
                ((_e[i >> 2] = 0 | e), (_e[(i + 4) >> 2] = (a & l) | (0 & r))),
              (E = l >>> (((d = 0) | ye(0 | u)) >>> 0)),
              0 | ((k = d), E)
            );
          if ((a = ((0 | T(0 | u)) - (0 | T(0 | l))) | 0) >>> 0 <= 30) {
            (e =
              (l << (u = (31 - a) | 0)) |
              (s >>> ((o = r = (a + 1) | 0) >>> 0))),
              (r = l >>> (r >>> 0)),
              (a = 0),
              (u = s << u);
            break;
          }
          return (
            i && ((_e[i >> 2] = 0 | e), (_e[(i + 4) >> 2] = f | (0 & r))),
            (E = d = 0) | ((k = d), E)
          );
        } while (0);
        if (o) {
          for (
            l = 0 | Be(0 | (c = 0 | t), 0 | (s = _ | (0 & n)), -1, -1),
              t = k,
              f = u,
              u = 0;
            (f = (a >>> 31) | ((n = f) << 1)),
              (a = u | (a << 1)),
              Fe(
                0 | l,
                0 | t,
                0 | (n = (e << 1) | (n >>> 31) | 0),
                0 | (_ = (e >>> 31) | (r << 1) | 0),
              ),
              (u = 1 & (d = ((E = k) >> 31) | (((0 | E) < 0 ? -1 : 0) << 1))),
              (e =
                0 |
                Fe(
                  0 | n,
                  0 | _,
                  (d & c) | 0,
                  (((((0 | E) < 0 ? -1 : 0) >> 31) |
                    (((0 | E) < 0 ? -1 : 0) << 1)) &
                    s) |
                    0,
                )),
              (r = k),
              0 != (0 | (o = (o - 1) | 0));

          );
          (l = f), (f = 0);
        } else (l = u), (u = f = 0);
        return (
          (o = 0) | i && ((_e[i >> 2] = e), (_e[(i + 4) >> 2] = r)),
          0 |
            ((k = d =
              ((0 | a) >>> 31) |
              ((l | o) << 1) |
              (0 & ((o << 1) | (a >>> 31))) |
              f),
            (E = (-2 & ((a << 1) | 0)) | u))
        );
      }
      function Ae(e, r) {
        e |= 0;
        var t,
          n,
          i,
          a,
          o,
          u,
          f,
          l,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0,
          T = 0;
        (Te = ((l = Te) + 576) | 0),
          (i = (l + 48) | 0),
          (o = (l + 32) | 0),
          (a = (l + 16) | 0),
          (f = ((n = l) + 64) | 0),
          (u = 0 | _e[((r |= 0) + 20) >> 2]),
          (0 | (t = 0 | _e[(T = (e + 20) | 0) >> 2])) < 24
            ? ((c =
                (s = 0 | _e[(E = (e + 4) | 0) >> 2]) >>> 0 <
                (_ = 0 | _e[(e + 8) >> 2]) >>> 0),
              (0 | t) < 16
                ? (c
                    ? ((d = (0 | de[s >> 0]) << 8), (s = (s + 1) | 0))
                    : (d = 0),
                  s >>> 0 < _ >>> 0
                    ? ((_ = 0 | de[s >> 0]), (s = (s + 1) | 0))
                    : (_ = 0),
                  (_e[E >> 2] = s),
                  (_e[T >> 2] = 16 + t),
                  (c = 16),
                  (s = _ | d))
                : ((s = c ? ((_e[E >> 2] = s + 1), 0 | de[s >> 0]) : 0),
                  (_e[T >> 2] = 8 + t),
                  (c = 24)),
              (_ = _e[(E = (e + 16) | 0) >> 2] | (s << (c - t))),
              (_e[E >> 2] = _))
            : (_ = 0 | _e[(E = _ = (e + 16) | 0) >> 2]),
          (d = (1 + (_ >>> 16)) | 0);
        do {
          if (!(d >>> 0 <= (0 | _e[(16 + u) >> 2]) >>> 0)) {
            for (
              c = 0 | _e[(20 + u) >> 2];
              d >>> 0 >
              (0 | _e[(28 + u + ((s = (c + -1) | 0) << 2)) >> 2]) >>> 0;

            )
              c = (c + 1) | 0;
            if (
              (s =
                ((_ >>> ((32 - c) | 0)) + (0 | _e[(96 + u + (s << 2)) >> 2])) |
                0) >>>
                0 <
              (0 | _e[r >> 2]) >>> 0
            ) {
              s = 0 | Ee[((0 | _e[(176 + u) >> 2]) + (s << 1)) >> 1];
              break;
            }
            return (
              (_e[i >> 2] = 866),
              (_e[(4 + i) >> 2] = 3275),
              (_e[(8 + i) >> 2] = 1348),
              Ie(f, 812, i),
              he(f),
              (Te = l),
              (T = 0) | T
            );
          }
          -1 ==
            (0 |
              (c =
                0 |
                _e[
                  ((0 | _e[(168 + u) >> 2]) +
                    ((_ >>> ((32 - (0 | _e[(8 + u) >> 2])) | 0)) << 2)) >>
                    2
                ])) &&
            ((_e[n >> 2] = 866),
            (_e[(n + 4) >> 2] = 3253),
            (_e[(n + 8) >> 2] = 1393),
            Ie(f, 812, n),
            he(f)),
            (s = 65535 & c),
            (c >>>= 16),
            (0 | _e[(r + 8) >> 2]) >>> 0 <= s >>> 0 &&
              ((_e[a >> 2] = 866),
              (_e[(4 + a) >> 2] = 909),
              (_e[(8 + a) >> 2] = 1497),
              Ie(f, 812, a),
              he(f)),
            (0 | de[((0 | _e[(r + 4) >> 2]) + s) >> 0]) != (0 | c) &&
              ((_e[o >> 2] = 866),
              (_e[(4 + o) >> 2] = 3257),
              (_e[(8 + o) >> 2] = 1410),
              Ie(f, 812, o),
              he(f));
        } while (0);
        return (
          (_e[E >> 2] = _e[E >> 2] << c),
          (_e[T >> 2] = (0 | _e[T >> 2]) - c),
          (Te = l),
          0 | (T = s)
        );
      }
      function U(e) {
        var r,
          t,
          n,
          i,
          a,
          o = 0,
          u = 0,
          f = 0;
        if (
          ((Te = ((a = Te) + 576) | 0),
          (f = (a + 48) | 0),
          (n = (a + 32) | 0),
          (t = (a + 16) | 0),
          (i = ((r = a) + 64) | 0),
          (_e[(e |= 0) >> 2] = 0) | (u = 0 | _e[(o = (e + 284) | 0) >> 2]) &&
            (7 & u
              ? ((_e[r >> 2] = 866),
                (_e[(r + 4) >> 2] = 2506),
                (_e[(r + 8) >> 2] = 1232),
                Ie(i, 812, r),
                he(i))
              : le(u, 0, 0, 1, 0),
            (_e[o >> 2] = 0),
            (_e[(e + 288) >> 2] = 0),
            (_e[(e + 292) >> 2] = 0)),
          (ce[(e + 296) >> 0] = 0) | (u = 0 | _e[(o = (e + 268) | 0) >> 2]) &&
            (7 & u
              ? ((_e[t >> 2] = 866),
                (_e[(4 + t) >> 2] = 2506),
                (_e[(8 + t) >> 2] = 1232),
                Ie(i, 812, t),
                he(i))
              : le(u, 0, 0, 1, 0),
            (_e[o >> 2] = 0),
            (_e[(e + 272) >> 2] = 0),
            (_e[(e + 276) >> 2] = 0)),
          (ce[(e + 280) >> 0] = 0) | (u = 0 | _e[(o = (e + 252) | 0) >> 2]) &&
            (7 & u
              ? ((_e[n >> 2] = 866),
                (_e[(4 + n) >> 2] = 2506),
                (_e[(8 + n) >> 2] = 1232),
                Ie(i, 812, n),
                he(i))
              : le(u, 0, 0, 1, 0),
            (_e[o >> 2] = 0),
            (_e[(e + 256) >> 2] = 0),
            (_e[(e + 260) >> 2] = 0)),
          !(u = (ce[(e + 264) >> 0] = 0) | _e[(o = (e + 236) | 0) >> 2]))
        )
          return (
            ne((f = (e + 212) | (ce[(f = (e + 248) | 0) >> 0] = 0))),
            ne((f = (e + 188) | 0)),
            ne((f = (e + 164) | 0)),
            ne((f = (e + 140) | 0)),
            ne((f = (e + 116) | 0)),
            void (Te = a)
          );
        7 & u
          ? ((_e[f >> 2] = 866),
            (_e[(f + 4) >> 2] = 2506),
            (_e[(f + 8) >> 2] = 1232),
            Ie(i, 812, f),
            he(i))
          : le(u, 0, 0, 1, 0),
          (_e[o >> 2] = 0),
          (_e[(e + 240) >> 2] = 0),
          (_e[(e + 244) >> 2] = 0),
          ne((f = (e + 212) | (ce[(f = (e + 248) | 0) >> 0] = 0))),
          ne((f = (e + 188) | 0)),
          ne((f = (e + 164) | 0)),
          ne((f = (e + 140) | 0)),
          ne((f = (e + 116) | 0)),
          (Te = a);
      }
      function H(e, r, t) {
        (e |= 0), (r |= 0), (t |= 0);
        var n = 0,
          i = 0,
          a = 0;
        e: do {
          if (r >>> 0 <= 20) {
            switch (0 | r) {
              case 9:
                (n = (3 + (0 | _e[t >> 2])) & -4),
                  (r = 0 | _e[n >> 2]),
                  (_e[t >> 2] = n + 4),
                  (_e[e >> 2] = r);
                break e;
              case 10:
                (n = (3 + (0 | _e[t >> 2])) & -4),
                  (r = 0 | _e[n >> 2]),
                  (_e[t >> 2] = n + 4),
                  (_e[(n = e) >> 2] = r),
                  (_e[(n + 4) >> 2] = (((0 | r) < 0) << 31) >> 31);
                break e;
              case 11:
                (n = (3 + (0 | _e[t >> 2])) & -4),
                  (r = 0 | _e[n >> 2]),
                  (_e[t >> 2] = n + 4),
                  (_e[(n = e) >> 2] = r),
                  (_e[(n + 4) >> 2] = 0);
                break e;
              case 12:
                (n = (7 + (0 | _e[t >> 2])) & -8),
                  (i = 0 | _e[(r = n) >> 2]),
                  (r = 0 | _e[(r + 4) >> 2]),
                  (_e[t >> 2] = n + 8),
                  (_e[(n = e) >> 2] = i),
                  (_e[(n + 4) >> 2] = r);
                break e;
              case 13:
                (i = (3 + (0 | _e[t >> 2])) & -4),
                  (n = 0 | _e[i >> 2]),
                  (_e[t >> 2] = i + 4),
                  (n = ((65535 & n) << 16) >> 16),
                  (_e[(i = e) >> 2] = n),
                  (_e[(i + 4) >> 2] = (((0 | n) < 0) << 31) >> 31);
                break e;
              case 14:
                (i = (3 + (0 | _e[t >> 2])) & -4),
                  (n = 0 | _e[i >> 2]),
                  (_e[t >> 2] = i + 4),
                  (_e[(i = e) >> 2] = 65535 & n),
                  (_e[(i + 4) >> 2] = 0);
                break e;
              case 15:
                (i = (3 + (0 | _e[t >> 2])) & -4),
                  (n = 0 | _e[i >> 2]),
                  (_e[t >> 2] = i + 4),
                  (n = ((255 & n) << 24) >> 24),
                  (_e[(i = e) >> 2] = n),
                  (_e[(i + 4) >> 2] = (((0 | n) < 0) << 31) >> 31);
                break e;
              case 16:
                (i = (3 + (0 | _e[t >> 2])) & -4),
                  (n = 0 | _e[i >> 2]),
                  (_e[t >> 2] = i + 4),
                  (_e[(i = e) >> 2] = 255 & n),
                  (_e[(i + 4) >> 2] = 0);
                break e;
              case 17:
              case 18:
                (i = (7 + (0 | _e[t >> 2])) & -8),
                  (a = +N[i >> 3]),
                  (_e[t >> 2] = i + 8),
                  (N[e >> 3] = a);
                break e;
              default:
                break e;
            }
          }
        } while (0);
      }
      function X(e, r, t, n, i) {
        (r |= 0), (t |= 0), (n |= 0), (i |= 0);
        var a,
          o,
          u,
          f,
          l,
          s,
          c = 0,
          _ = 0,
          d = 0,
          E = 0;
        if (
          ((Te = ((s = Te) + 576) | 0),
          (f = (s + 48) | 0),
          (a = (s + 32) | 0),
          (_ = (s + 16) | 0),
          (u = ((c = s) + 64) | 0),
          (l = (s + 60) | 0),
          (E = ((e |= 0) + 8) | 0),
          (0 | _e[(o = (e + 4) | 0) >> 2]) >>> 0 > (0 | _e[E >> 2]) >>> 0 &&
            ((_e[c >> 2] = 866),
            (_e[(c + 4) >> 2] = 2123),
            (_e[(c + 8) >> 2] = 845),
            Ie(u, 812, c),
            he(u)),
          ((2147418112 / (n >>> 0)) | 0) >>> 0 <= r >>> 0 &&
            ((_e[_ >> 2] = 866),
            (_e[(_ + 4) >> 2] = 2124),
            (_e[(_ + 8) >> 2] = 885),
            Ie(u, 812, _),
            he(u)),
          r >>> 0 <= (c = 0 | _e[E >> 2]) >>> 0)
        )
          return (Te = s), 0 | (E = 1);
        if (
          (9 ==
            (0 |
              (t =
                t && 0 != (((d = (r + -1) | 0) & r) | 0)
                  ? ((r = (d >>> 16) | d),
                    (r |= r >>> 8),
                    (r |= r >>> 4),
                    (r = (1 + (((r |= r >>> 2) >>> 1) | r)) | 0)
                      ? 9
                      : ((r = 0), 10))
                  : 9)) &&
            r >>> 0 <= c >>> 0 &&
            (t = 10),
          10 == (0 | t) &&
            ((_e[a >> 2] = 866),
            (_e[(4 + a) >> 2] = 2133),
            (_e[(8 + a) >> 2] = 933),
            Ie(u, 812, a),
            he(u)),
          (d = 0 | ie(r, n)),
          i)
        )
          if ((_ = 0 | ae(d, l))) {
            ur[0 & i](_, 0 | _e[e >> 2], 0 | _e[o >> 2]), (c = 0 | _e[e >> 2]);
            do {
              if (0 | c) {
                if (7 & c) {
                  (_e[f >> 2] = 866),
                    (_e[(4 + f) >> 2] = 2506),
                    (_e[(8 + f) >> 2] = 1232),
                    Ie(u, 812, f),
                    he(u);
                  break;
                }
                le(c, 0, 0, 1, 0);
                break;
              }
            } while (0);
            (_e[e >> 2] = _), (t = 20);
          } else r = 0;
        else
          (c =
            0 |
            (function(e, r, t, n) {
              (r |= 0), (t |= 0), (n |= 0);
              var i,
                a,
                o,
                u,
                f,
                l = 0;
              if (
                ((Te = ((f = Te) + 560) | 0),
                (l = (f + 32) | 0),
                (a = (f + 16) | 0),
                (o = ((i = f) + 48) | 0),
                (u = (f + 44) | 0),
                (7 & (e |= 0)) | 0)
              )
                return (
                  (_e[i >> 2] = 866),
                  (_e[(i + 4) >> 2] = 2506),
                  (_e[(i + 8) >> 2] = 1210),
                  Ie(o, 812, i),
                  he(o),
                  (Te = f),
                  (l = 0) | l
                );
              if (2147418112 < r >>> 0)
                return (
                  (_e[a >> 2] = 866),
                  (_e[(4 + a) >> 2] = 2506),
                  (_e[(8 + a) >> 2] = 1103),
                  Ie(o, 812, a),
                  he(o),
                  (Te = f),
                  (l = 0) | l
                );
              (_e[u >> 2] = r),
                (e = 0 | le(e, r, u, n, 0)),
                0 | t && (_e[t >> 2] = _e[u >> 2]);
              (7 & e) | 0 &&
                ((_e[l >> 2] = 866),
                (_e[(l + 4) >> 2] = 2558),
                (_e[(l + 8) >> 2] = 1156),
                Ie(o, 812, l),
                he(o));
              return (Te = f), 0 | (l = e);
            })(0 | _e[e >> 2], d, l, 1))
            ? ((_e[e >> 2] = c), (t = 20))
            : (r = 0);
        return (
          20 == (0 | t) &&
            (d >>> 0 < (c = 0 | _e[l >> 2]) >>> 0 &&
              (r = ((c >>> 0) / (n >>> 0)) | 0),
            (_e[E >> 2] = r),
            (r = 1)),
          (Te = s),
          0 | (E = r)
        );
      }
      function Y(e, r, t, n, i, a, o) {
        (r |= 0), (t |= 0), (n |= 0), (i |= 0), (a |= 0), (o |= 0);
        var u,
          f = 0,
          l = 0,
          s = 0;
        if (
          ((s = 0 | _e[((e |= 0) + 88) >> 2]),
          (f =
            (((1 <
            (f = ((de[(s + 12) >> 0] << 8) | de[(s + 13) >> 0]) >>> o) >>> 0
              ? f
              : 1) +
              3) |
              0) >>>
            2),
          (l =
            (((1 <
            (l = ((de[(s + 14) >> 0] << 8) | de[(s + 15) >> 0]) >>> o) >>> 0
              ? l
              : 1) +
              3) |
              0) >>>
            2),
          (o = 0 | ce[(s = (s + 18) | 0) >> 0]),
          (o =
            0 |
            ie(f, ((o << 24) >> 24 == 0) | ((o << 24) >> 24 == 9) ? 8 : 16)),
          a)
        ) {
          if (!((0 == ((3 & a) | 0)) & (o >>> 0 <= a >>> 0)))
            return (i = 0) | i;
          o = a;
        }
        if ((0 | ie(o, l)) >>> 0 > i >>> 0) return (i = 0) | i;
        if (((a = ((f + 1) | 0) >>> 1), (u = ((l + 1) | 0) >>> 1), !t))
          return (i = 0) | i;
        switch (
          ((_e[(e + 92) >> 2] = r),
          (_e[(e + 96) >> 2] = r),
          (_e[(e + 104) >> 2] = t),
          (_e[(e + 100) >> 2] = r + t),
          (_e[(e + 108) >> 2] = 0),
          (_e[(e + 112) >> 2] = 0) | ce[s >> 0])
        ) {
          case 0:
            if (
              !(
                0 |
                (function(e, r, t, n, i, a, o, u) {
                  (r |= 0),
                    (t |= 0),
                    (n |= 0),
                    (i |= 0),
                    (a |= 0),
                    (o |= 0),
                    (u |= 0);
                  var f,
                    l,
                    s,
                    c,
                    _,
                    d,
                    E,
                    T,
                    A,
                    M,
                    m,
                    b,
                    h,
                    S,
                    R,
                    P,
                    p,
                    C,
                    v,
                    y,
                    N,
                    k,
                    O,
                    g,
                    I,
                    L,
                    w,
                    D,
                    F,
                    x,
                    B,
                    G,
                    U = 0,
                    H = 0,
                    V = 0,
                    W = 0,
                    X = 0,
                    Y = 0,
                    K = 0,
                    z = 0,
                    j = 0,
                    J = 0,
                    Z = 0,
                    $ = 0,
                    q = 0,
                    Q = 0,
                    ee = 0,
                    re = 0,
                    te = 0,
                    ne = 0;
                  if (
                    ((Te = ((G = Te) + 656) | 0),
                    (x = (G + 112) | 0),
                    (D = (G + 96) | 0),
                    (w = (G + 80) | 0),
                    (L = (G + 64) | 0),
                    (I = (G + 48) | 0),
                    (B = (G + 32) | 0),
                    (F = (G + 16) | 0),
                    (k = ((g = G) + 144) | 0),
                    (O = (G + 128) | 0),
                    (S = 0 | _e[(h = ((e |= 0) + 240) | 0) >> 2]),
                    (P = 0 | _e[(R = (e + 256) | 0) >> 2]),
                    (p =
                      255 & (re = 0 | ce[(17 + (0 | _e[(e + 88) >> 2])) >> 0])),
                    !((re << 24) >> 24))
                  )
                    return (Te = G), 1;
                  (v = 0 == (0 | u)),
                    (N = (y = (o + -1) | 0) << 4),
                    (re = (u + -1) | 0),
                    (E = 0 != ((1 & a) | 0)),
                    (T = n << 1),
                    (A = (e + 92) | 0),
                    (M = (e + 116) | 0),
                    (m = (e + 140) | 0),
                    (b = (e + 236) | 0),
                    (d = 0 != ((1 & i) | 0)),
                    (_ = (e + 188) | 0),
                    (f = (e + 252) | 0),
                    (l = (1 + (C = n >>> 2)) | 0),
                    (s = (2 + C) | 0),
                    (c = (3 + C) | 0),
                    (t = a = ee = 0),
                    (i = 1);
                  do {
                    if (!v)
                      for (q = 0 | _e[(r + (ee << 2)) >> 2], Q = 0; ; ) {
                        if (
                          ((H = 0 == (0 | (Z = 1 & Q))),
                          (J = (((Z << 5) ^ 32) - 16) | 0),
                          (Z = (((Z << 1) ^ 2) - 1) | 0),
                          ($ = E & (e = (0 | Q) == (0 | re))),
                          (0 | (U = H ? 0 : y)) != (0 | (j = H ? o : -1)))
                        )
                          for (z = (E & e) ^ 1, K = H ? q : (q + N) | 0; ; ) {
                            for (
                              1 == (0 | i) && (i = 512 | Ae(A, M)),
                                Y = 7 & i,
                                i >>>= 3,
                                H = 0 | de[(1539 + Y) >> 0],
                                e = 0;
                              (t =
                                ((X =
                                  (W =
                                    ((V = ((0 | Ae(A, m)) + t) | 0) - S) | 0) >>
                                  31) &
                                  V) |
                                (W & ~X)),
                                (0 | _e[h >> 2]) >>> 0 <= t >>> 0 &&
                                  ((_e[g >> 2] = 866),
                                  (_e[(g + 4) >> 2] = 910),
                                  (_e[(g + 8) >> 2] = 1497),
                                  Ie(k, 812, g),
                                  he(k)),
                                (_e[(O + (e << 2)) >> 2] =
                                  _e[((0 | _e[b >> 2]) + (t << 2)) >> 2]),
                                (e = (e + 1) | 0) >>> 0 < H >>> 0;

                            );
                            if ($ | (X = d & ((0 | U) == (0 | y)))) {
                              W = 0;
                              do {
                                (e = (K + (0 | ie(W, n))) | 0),
                                  (V = (0 == (0 | W)) | z),
                                  (H = W << 1),
                                  (a =
                                    ((a =
                                      (te =
                                        ((ne = ((0 | Ae(A, _)) + a) | 0) - P) |
                                        0) >> 31) &
                                      ne) |
                                    (te & ~a));
                                do {
                                  if (X) {
                                    if (!V) {
                                      a =
                                        ((a =
                                          (ne =
                                            ((te = ((0 | Ae(A, _)) + a) | 0) -
                                              P) |
                                            0) >> 31) &
                                          te) |
                                        (ne & ~a);
                                      break;
                                    }
                                    (_e[e >> 2] =
                                      _e[
                                        (O +
                                          ((0 |
                                            de[(1547 + (Y << 2) + H) >> 0]) <<
                                            2)) >>
                                          2
                                      ]),
                                      (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                        ((_e[D >> 2] = 866),
                                        (_e[(4 + D) >> 2] = 910),
                                        (_e[(8 + D) >> 2] = 1497),
                                        Ie(k, 812, D),
                                        he(k)),
                                      (_e[(e + 4) >> 2] =
                                        _e[((0 | _e[f >> 2]) + (a << 2)) >> 2]),
                                      (a =
                                        ((a =
                                          (ne =
                                            ((te = ((0 | Ae(A, _)) + a) | 0) -
                                              P) |
                                            0) >> 31) &
                                          te) |
                                        (ne & ~a));
                                  } else
                                    V &&
                                      ((_e[e >> 2] =
                                        _e[
                                          (O +
                                            ((0 |
                                              de[(1547 + (Y << 2) + H) >> 0]) <<
                                              2)) >>
                                            2
                                        ]),
                                      (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                        ((_e[w >> 2] = 866),
                                        (_e[(4 + w) >> 2] = 910),
                                        (_e[(8 + w) >> 2] = 1497),
                                        Ie(k, 812, w),
                                        he(k)),
                                      (_e[(e + 4) >> 2] =
                                        _e[
                                          ((0 | _e[f >> 2]) + (a << 2)) >> 2
                                        ])),
                                      (e = (e + 8) | 0),
                                      (a =
                                        ((a =
                                          (ne =
                                            ((te = ((0 | Ae(A, _)) + a) | 0) -
                                              P) |
                                            0) >> 31) &
                                          te) |
                                        (ne & ~a)),
                                      V &&
                                        ((_e[e >> 2] =
                                          _e[
                                            (O +
                                              ((0 |
                                                de[
                                                  (1547 + (Y << 2) + (1 | H)) >>
                                                    0
                                                ]) <<
                                                2)) >>
                                              2
                                          ]),
                                        (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                          ((_e[x >> 2] = 866),
                                          (_e[(4 + x) >> 2] = 910),
                                          (_e[(8 + x) >> 2] = 1497),
                                          Ie(k, 812, x),
                                          he(k)),
                                        (_e[(e + 4) >> 2] =
                                          _e[
                                            ((0 | _e[f >> 2]) + (a << 2)) >> 2
                                          ]));
                                } while (0);
                                W = (W + 1) | 0;
                              } while (2 != (0 | W));
                            } else
                              (_e[K >> 2] =
                                _e[
                                  (O +
                                    ((0 | de[(1547 + (Y << 2)) >> 0]) << 2)) >>
                                    2
                                ]),
                                (a =
                                  ((a =
                                    (ne =
                                      ((te = ((0 | Ae(A, _)) + a) | 0) - P) |
                                      0) >> 31) &
                                    te) |
                                  (ne & ~a)),
                                (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[F >> 2] = 866),
                                  (_e[(4 + F) >> 2] = 910),
                                  (_e[(8 + F) >> 2] = 1497),
                                  Ie(k, 812, F),
                                  he(k)),
                                (_e[(K + 4) >> 2] =
                                  _e[((0 | _e[f >> 2]) + (a << 2)) >> 2]),
                                (_e[(K + 8) >> 2] =
                                  _e[
                                    (O +
                                      ((0 | de[(1547 + (Y << 2) + 1) >> 0]) <<
                                        2)) >>
                                      2
                                  ]),
                                (a =
                                  ((a =
                                    (ne =
                                      ((te = ((0 | Ae(A, _)) + a) | 0) - P) |
                                      0) >> 31) &
                                    te) |
                                  (ne & ~a)),
                                (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[B >> 2] = 866),
                                  (_e[(4 + B) >> 2] = 910),
                                  (_e[(8 + B) >> 2] = 1497),
                                  Ie(k, 812, B),
                                  he(k)),
                                (_e[(K + 12) >> 2] =
                                  _e[((0 | _e[f >> 2]) + (a << 2)) >> 2]),
                                (_e[(K + (C << 2)) >> 2] =
                                  _e[
                                    (O +
                                      ((0 | de[(1547 + (Y << 2) + 2) >> 0]) <<
                                        2)) >>
                                      2
                                  ]),
                                (a =
                                  ((a =
                                    (ne =
                                      ((te = ((0 | Ae(A, _)) + a) | 0) - P) |
                                      0) >> 31) &
                                    te) |
                                  (ne & ~a)),
                                (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[I >> 2] = 866),
                                  (_e[(4 + I) >> 2] = 910),
                                  (_e[(8 + I) >> 2] = 1497),
                                  Ie(k, 812, I),
                                  he(k)),
                                (_e[(K + (l << 2)) >> 2] =
                                  _e[((0 | _e[f >> 2]) + (a << 2)) >> 2]),
                                (_e[(K + (s << 2)) >> 2] =
                                  _e[
                                    (O +
                                      ((0 | de[(1547 + (Y << 2) + 3) >> 0]) <<
                                        2)) >>
                                      2
                                  ]),
                                (a =
                                  ((a =
                                    (ne =
                                      ((te = ((0 | Ae(A, _)) + a) | 0) - P) |
                                      0) >> 31) &
                                    te) |
                                  (ne & ~a)),
                                (0 | _e[R >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[L >> 2] = 866),
                                  (_e[(4 + L) >> 2] = 910),
                                  (_e[(8 + L) >> 2] = 1497),
                                  Ie(k, 812, L),
                                  he(k)),
                                (_e[(K + (c << 2)) >> 2] =
                                  _e[((0 | _e[f >> 2]) + (a << 2)) >> 2]);
                            if ((0 | (U = (Z + U) | 0)) == (0 | j)) break;
                            K = (K + J) | 0;
                          }
                        if ((0 | (Q = (Q + 1) | 0)) == (0 | u)) break;
                        q = (q + T) | 0;
                      }
                    ee = (ee + 1) | 0;
                  } while ((0 | ee) != (0 | p));
                  return (Te = G), 1;
                })(e, n, i, o, f, l, a, u)
              )
            )
              return (i = 0) | i;
            break;
          case 4:
          case 6:
          case 5:
          case 3:
          case 2:
            if (
              !(
                0 |
                (function(e, r, t, n, i, a, o, u) {
                  (r |= 0),
                    (t |= 0),
                    (n |= 0),
                    (i |= 0),
                    (a |= 0),
                    (o |= 0),
                    (u |= 0);
                  var f,
                    l,
                    s,
                    c,
                    _,
                    d,
                    E,
                    T,
                    A,
                    M,
                    m,
                    b,
                    h,
                    S,
                    R,
                    P,
                    p,
                    C,
                    v,
                    y,
                    N,
                    k,
                    O,
                    g,
                    I,
                    L,
                    w,
                    D,
                    F,
                    x,
                    B,
                    G,
                    U,
                    H,
                    V,
                    W = 0,
                    X = 0,
                    Y = 0,
                    K = 0,
                    z = 0,
                    j = 0,
                    J = 0,
                    Z = 0,
                    $ = 0,
                    q = 0,
                    Q = 0,
                    ee = 0,
                    re = 0,
                    te = 0,
                    ne = 0,
                    ie = 0,
                    ae = 0,
                    oe = 0,
                    ue = 0,
                    fe = 0,
                    le = 0,
                    se = 0;
                  if (
                    ((Te = ((V = Te) + 640) | 0),
                    (G = (V + 80) | 0),
                    (B = (V + 64) | 0),
                    (x = (V + 48) | 0),
                    (H = (V + 32) | 0),
                    (U = (V + 16) | 0),
                    (w = ((F = V) + 128) | 0),
                    (D = (V + 112) | 0),
                    (d = (V + 96) | 0),
                    (T = 0 | _e[(E = ((e |= 0) + 240) | 0) >> 2]),
                    (M = 0 | _e[(A = (e + 256) | 0) >> 2]),
                    (b = 0 | _e[(m = (e + 272) | 0) >> 2]),
                    (se = 0 | _e[(e + 88) >> 2]),
                    (h =
                      ((0 | de[(se + 63) >> 0]) << 8) | 0 | de[(se + 64) >> 0]),
                    (S = 255 & (se = 0 | ce[(se + 17) >> 0])),
                    !((se << 24) >> 24))
                  )
                    return (Te = V), 1;
                  (R = 0 == (0 | u)),
                    (p = (P = (o + -1) | 0) << 5),
                    (C = (u + -1) | 0),
                    (v = n << 1),
                    (y = (e + 92) | 0),
                    (N = (e + 116) | 0),
                    (k = (e + 164) | 0),
                    (O = (e + 268) | 0),
                    (g = (e + 140) | 0),
                    (I = (e + 236) | 0),
                    (L = (e + 212) | 0),
                    (se = (e + 188) | 0),
                    (_ = 0 == ((1 & i) | 0)),
                    (c = 0 == ((1 & a) | 0)),
                    (l = (e + 288) | 0),
                    (s = (e + 284) | 0),
                    (f = (e + 252) | 0),
                    (t = i = a = e = le = 0),
                    (W = 1);
                  do {
                    if (!R)
                      for (ue = 0 | _e[(r + (le << 2)) >> 2], fe = 0; ; ) {
                        if (
                          ((Y = 0 == (0 | (oe = 1 & fe))),
                          (ae = (((oe << 6) ^ 64) - 32) | 0),
                          (oe = (((oe << 1) ^ 2) - 1) | 0),
                          (0 | (X = Y ? 0 : P)) != (0 | (ne = Y ? o : -1)))
                        )
                          for (
                            ie = c | ((0 | fe) != (0 | C)),
                              te = Y ? ue : (ue + p) | 0;
                            ;

                          ) {
                            for (
                              1 == (0 | W) && (W = 512 | Ae(y, N)),
                                re = 7 & W,
                                W >>>= 3,
                                K = 0 | de[(1539 + re) >> 0],
                                Y = 0;
                              (a =
                                ((ee =
                                  (Q =
                                    ((q = ((0 | Ae(y, k)) + a) | 0) - b) | 0) >>
                                  31) &
                                  q) |
                                (Q & ~ee)),
                                (0 | _e[m >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[F >> 2] = 866),
                                  (_e[(F + 4) >> 2] = 910),
                                  (_e[(F + 8) >> 2] = 1497),
                                  Ie(w, 812, F),
                                  he(w)),
                                (_e[(d + (Y << 2)) >> 2] =
                                  Ee[((0 | _e[O >> 2]) + (a << 1)) >> 1]),
                                (Y = (Y + 1) | 0) >>> 0 < K >>> 0;

                            );
                            for (
                              Y = 0;
                              (t =
                                ((ee =
                                  (Q =
                                    ((q = ((0 | Ae(y, g)) + t) | 0) - T) | 0) >>
                                  31) &
                                  q) |
                                (Q & ~ee)),
                                (0 | _e[E >> 2]) >>> 0 <= t >>> 0 &&
                                  ((_e[U >> 2] = 866),
                                  (_e[(4 + U) >> 2] = 910),
                                  (_e[(8 + U) >> 2] = 1497),
                                  Ie(w, 812, U),
                                  he(w)),
                                (_e[(D + (Y << 2)) >> 2] =
                                  _e[((0 | _e[I >> 2]) + (t << 2)) >> 2]),
                                (Y = (Y + 1) | 0) >>> 0 < K >>> 0;

                            );
                            for (
                              ee = _ | ((0 | X) != (0 | P)), q = 0, Q = te;
                              ;

                            ) {
                              if (((J = ie | (0 == (0 | q))), (Z = q << 1), ee))
                                for (
                                  z = 0, j = Q;
                                  (e =
                                    ((e =
                                      (K =
                                        (($ = ((0 | Ae(y, L)) + e) | 0) - h) |
                                        0) >> 31) &
                                      $) |
                                    (K & ~e)),
                                    (i =
                                      ((i =
                                        ($ =
                                          ((K = ((0 | Ae(y, se)) + i) | 0) -
                                            M) |
                                          0) >> 31) &
                                        K) |
                                      ($ & ~i)),
                                    J &&
                                      ((Y =
                                        0 |
                                        de[(z + Z + (1547 + (re << 2))) >> 0]),
                                      (K = (3 * e) | 0),
                                      (0 | _e[l >> 2]) >>> 0 <= K >>> 0 &&
                                        ((_e[H >> 2] = 866),
                                        (_e[(4 + H) >> 2] = 910),
                                        (_e[(8 + H) >> 2] = 1497),
                                        Ie(w, 812, H),
                                        he(w)),
                                      ($ = ((0 | _e[s >> 2]) + (K << 1)) | 0),
                                      (_e[j >> 2] =
                                        ((0 | Ee[$ >> 1]) << 16) |
                                        _e[(d + (Y << 2)) >> 2]),
                                      (_e[(j + 4) >> 2] =
                                        ((0 | Ee[($ + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[($ + 2) >> 1]),
                                      (_e[(j + 8) >> 2] =
                                        _e[(D + (Y << 2)) >> 2]),
                                      (0 | _e[A >> 2]) >>> 0 <= i >>> 0 &&
                                        ((_e[x >> 2] = 866),
                                        (_e[(4 + x) >> 2] = 910),
                                        (_e[(8 + x) >> 2] = 1497),
                                        Ie(w, 812, x),
                                        he(w)),
                                      (_e[(j + 12) >> 2] =
                                        _e[
                                          ((0 | _e[f >> 2]) + (i << 2)) >> 2
                                        ])),
                                    2 != (0 | (z = (z + 1) | 0));

                                )
                                  j = (j + 16) | 0;
                              else
                                for (
                                  $ = 1 ^ J,
                                    J = (1547 + (re << 2) + Z) | 0,
                                    z = 0,
                                    j = Q;
                                  (e =
                                    ((e =
                                      (K =
                                        ((Z = ((0 | Ae(y, L)) + e) | 0) - h) |
                                        0) >> 31) &
                                      Z) |
                                    (K & ~e)),
                                    (i =
                                      ((i =
                                        (Z =
                                          ((K = ((0 | Ae(y, se)) + i) | 0) -
                                            M) |
                                          0) >> 31) &
                                        K) |
                                      (Z & ~i)),
                                    (0 != (0 | z)) | $ ||
                                      ((Y = 0 | de[J >> 0]),
                                      (K = (3 * e) | 0),
                                      (0 | _e[l >> 2]) >>> 0 <= K >>> 0 &&
                                        ((_e[B >> 2] = 866),
                                        (_e[(4 + B) >> 2] = 910),
                                        (_e[(8 + B) >> 2] = 1497),
                                        Ie(w, 812, B),
                                        he(w)),
                                      (Z = ((0 | _e[s >> 2]) + (K << 1)) | 0),
                                      (_e[j >> 2] =
                                        ((0 | Ee[Z >> 1]) << 16) |
                                        _e[(d + (Y << 2)) >> 2]),
                                      (_e[(j + 4) >> 2] =
                                        ((0 | Ee[(Z + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(Z + 2) >> 1]),
                                      (_e[(j + 8) >> 2] =
                                        _e[(D + (Y << 2)) >> 2]),
                                      (0 | _e[A >> 2]) >>> 0 <= i >>> 0 &&
                                        ((_e[G >> 2] = 866),
                                        (_e[(4 + G) >> 2] = 910),
                                        (_e[(8 + G) >> 2] = 1497),
                                        Ie(w, 812, G),
                                        he(w)),
                                      (_e[(j + 12) >> 2] =
                                        _e[
                                          ((0 | _e[f >> 2]) + (i << 2)) >> 2
                                        ])),
                                    2 != (0 | (z = (z + 1) | 0));

                                )
                                  j = (j + 16) | 0;
                              if (2 == (0 | (q = (q + 1) | 0))) break;
                              Q = (Q + n) | 0;
                            }
                            if ((0 | (X = (oe + X) | 0)) == (0 | ne)) break;
                            te = (te + ae) | 0;
                          }
                        if ((0 | (fe = (fe + 1) | 0)) == (0 | u)) break;
                        ue = (ue + v) | 0;
                      }
                    le = (le + 1) | 0;
                  } while ((0 | le) != (0 | S));
                  return (Te = V), 1;
                })(e, n, i, o, f, l, a, u)
              )
            )
              return (i = 0) | i;
            break;
          case 9:
            if (
              !(
                0 |
                (function(e, r, t, n, i, a, o, u) {
                  (r |= 0),
                    (t |= 0),
                    (n |= 0),
                    (i |= 0),
                    (a |= 0),
                    (o |= 0),
                    (u |= 0);
                  var f,
                    l,
                    s,
                    c,
                    _,
                    d,
                    E,
                    T,
                    A,
                    M,
                    m,
                    b,
                    h,
                    S,
                    R,
                    P,
                    p,
                    C,
                    v,
                    y,
                    N,
                    k,
                    O,
                    g,
                    I = 0,
                    L = 0,
                    w = 0,
                    D = 0,
                    F = 0,
                    x = 0,
                    B = 0,
                    G = 0,
                    U = 0,
                    H = 0,
                    V = 0,
                    W = 0,
                    X = 0,
                    Y = 0,
                    K = 0,
                    z = 0,
                    j = 0,
                    J = 0;
                  if (
                    ((Te = ((g = Te) + 592) | 0),
                    (N = (g + 48) | 0),
                    (O = (g + 32) | 0),
                    (k = (g + 16) | 0),
                    (C = ((y = g) + 80) | 0),
                    (v = (g + 64) | 0),
                    (d = 0 | _e[(_ = ((e |= 0) + 272) | 0) >> 2]),
                    (J = 0 | _e[(e + 88) >> 2]),
                    (E =
                      ((0 | de[(J + 63) >> 0]) << 8) | 0 | de[(J + 64) >> 0]),
                    (T = 255 & (J = 0 | ce[(J + 17) >> 0])),
                    !((J << 24) >> 24))
                  )
                    return (Te = g), 1;
                  (A = 0 == (0 | u)),
                    (m = (M = (o + -1) | 0) << 4),
                    (b = (u + -1) | 0),
                    (h = n << 1),
                    (S = (e + 92) | 0),
                    (R = (e + 116) | 0),
                    (P = (e + 164) | 0),
                    (p = (e + 268) | 0),
                    (J = (e + 212) | 0),
                    (c = 0 == ((1 & i) | 0)),
                    (s = 0 == ((1 & a) | 0)),
                    (l = (e + 288) | 0),
                    (f = (e + 284) | 0),
                    (t = i = j = 0),
                    (a = 1);
                  do {
                    if (!A)
                      for (K = 0 | _e[(r + (j << 2)) >> 2], z = 0; ; ) {
                        if (
                          ((I = 0 == (0 | (Y = 1 & z))),
                          (X = (((Y << 5) ^ 32) - 16) | 0),
                          (Y = (((Y << 1) ^ 2) - 1) | 0),
                          (0 | (e = I ? 0 : M)) != (0 | (V = I ? o : -1)))
                        )
                          for (
                            W = s | ((0 | z) != (0 | b)),
                              H = I ? K : (K + m) | 0;
                            ;

                          ) {
                            for (
                              1 == (0 | a) && (a = 512 | Ae(S, R)),
                                U = 7 & a,
                                a >>>= 3,
                                L = 0 | de[(1539 + U) >> 0],
                                I = 0;
                              (t =
                                ((G =
                                  (B =
                                    ((x = ((0 | Ae(S, P)) + t) | 0) - d) | 0) >>
                                  31) &
                                  x) |
                                (B & ~G)),
                                (0 | _e[_ >> 2]) >>> 0 <= t >>> 0 &&
                                  ((_e[y >> 2] = 866),
                                  (_e[(y + 4) >> 2] = 910),
                                  (_e[(y + 8) >> 2] = 1497),
                                  Ie(C, 812, y),
                                  he(C)),
                                (_e[(v + (I << 2)) >> 2] =
                                  Ee[((0 | _e[p >> 2]) + (t << 1)) >> 1]),
                                (I = (I + 1) | 0) >>> 0 < L >>> 0;

                            );
                            for (
                              G = c | ((0 | e) != (0 | M)), x = 0, B = H;
                              (F = W | (0 == (0 | x))),
                                (L = x << 1),
                                (D =
                                  ((D =
                                    (w =
                                      ((I = ((0 | Ae(S, J)) + i) | 0) - E) |
                                      0) >> 31) &
                                    I) |
                                  (w & ~D)),
                                G
                                  ? (F &&
                                      ((i = 0 | de[(1547 + (U << 2) + L) >> 0]),
                                      (I = (3 * D) | 0),
                                      (0 | _e[l >> 2]) >>> 0 <= I >>> 0 &&
                                        ((_e[k >> 2] = 866),
                                        (_e[(4 + k) >> 2] = 910),
                                        (_e[(8 + k) >> 2] = 1497),
                                        Ie(C, 812, k),
                                        he(C)),
                                      (w = ((0 | _e[f >> 2]) + (I << 1)) | 0),
                                      (_e[B >> 2] =
                                        ((0 | Ee[w >> 1]) << 16) |
                                        _e[(v + (i << 2)) >> 2]),
                                      (_e[(B + 4) >> 2] =
                                        ((0 | Ee[(w + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(w + 2) >> 1])),
                                    (w = (B + 8) | 0),
                                    (i =
                                      ((i =
                                        (D =
                                          ((I = ((0 | Ae(S, J)) + D) | 0) - E) |
                                          0) >> 31) &
                                        I) |
                                      (D & ~i)),
                                    F &&
                                      ((I =
                                        0 |
                                        de[(1547 + (U << 2) + (1 | L)) >> 0]),
                                      (L = (3 * i) | 0),
                                      (0 | _e[l >> 2]) >>> 0 <= L >>> 0 &&
                                        ((_e[N >> 2] = 866),
                                        (_e[(4 + N) >> 2] = 910),
                                        (_e[(8 + N) >> 2] = 1497),
                                        Ie(C, 812, N),
                                        he(C)),
                                      (F = ((0 | _e[f >> 2]) + (L << 1)) | 0),
                                      (_e[w >> 2] =
                                        ((0 | Ee[F >> 1]) << 16) |
                                        _e[(v + (I << 2)) >> 2]),
                                      (_e[(B + 12) >> 2] =
                                        ((0 | Ee[(F + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(F + 2) >> 1])))
                                  : (F &&
                                      ((i = 0 | de[(1547 + (U << 2) + L) >> 0]),
                                      (I = (3 * D) | 0),
                                      (0 | _e[l >> 2]) >>> 0 <= I >>> 0 &&
                                        ((_e[O >> 2] = 866),
                                        (_e[(4 + O) >> 2] = 910),
                                        (_e[(8 + O) >> 2] = 1497),
                                        Ie(C, 812, O),
                                        he(C)),
                                      (F = ((0 | _e[f >> 2]) + (I << 1)) | 0),
                                      (_e[B >> 2] =
                                        ((0 | Ee[F >> 1]) << 16) |
                                        _e[(v + (i << 2)) >> 2]),
                                      (_e[(B + 4) >> 2] =
                                        ((0 | Ee[(F + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(F + 2) >> 1])),
                                    (i =
                                      ((i =
                                        (F =
                                          ((D = ((0 | Ae(S, J)) + D) | 0) - E) |
                                          0) >> 31) &
                                        D) |
                                      (F & ~i))),
                                2 != (0 | (x = (x + 1) | 0));

                            )
                              B = (B + n) | 0;
                            if ((0 | (e = (Y + e) | 0)) == (0 | V)) break;
                            H = (H + X) | 0;
                          }
                        if ((0 | (z = (z + 1) | 0)) == (0 | u)) break;
                        K = (K + h) | 0;
                      }
                    j = (j + 1) | 0;
                  } while ((0 | j) != (0 | T));
                  return (Te = g), 1;
                })(e, n, i, o, f, l, a, u)
              )
            )
              return (i = 0) | i;
            break;
          case 8:
          case 7:
            if (
              !(
                0 |
                (function(e, r, t, n, i, a, o, u) {
                  (r |= 0),
                    (t |= 0),
                    (n |= 0),
                    (i |= 0),
                    (a |= 0),
                    (o |= 0),
                    (u |= 0);
                  var f,
                    l,
                    s,
                    c,
                    _,
                    d,
                    E,
                    T,
                    A,
                    M,
                    m,
                    b,
                    h,
                    S,
                    R,
                    P,
                    p,
                    C,
                    v,
                    y,
                    N,
                    k,
                    O,
                    g,
                    I,
                    L,
                    w,
                    D = 0,
                    F = 0,
                    x = 0,
                    B = 0,
                    G = 0,
                    U = 0,
                    H = 0,
                    V = 0,
                    W = 0,
                    X = 0,
                    Y = 0,
                    K = 0,
                    z = 0,
                    j = 0,
                    J = 0,
                    Z = 0,
                    $ = 0,
                    q = 0,
                    Q = 0,
                    ee = 0,
                    re = 0,
                    te = 0,
                    ne = 0,
                    ie = 0,
                    ae = 0;
                  if (
                    ((Te = ((w = Te) + 640) | 0),
                    (g = (w + 80) | 0),
                    (O = (w + 64) | 0),
                    (k = (w + 48) | 0),
                    (L = (w + 32) | 0),
                    (I = (w + 16) | 0),
                    (v = ((N = w) + 128) | 0),
                    (y = (w + 112) | 0),
                    (_ = (w + 96) | 0),
                    (E = 0 | _e[(d = ((e |= 0) + 272) | 0) >> 2]),
                    (ae = 0 | _e[(e + 88) >> 2]),
                    (T =
                      ((0 | de[(ae + 63) >> 0]) << 8) | 0 | de[(ae + 64) >> 0]),
                    (A = 255 & (ae = 0 | ce[(ae + 17) >> 0])),
                    !((ae << 24) >> 24))
                  )
                    return (Te = w), 1;
                  (M = 0 == (0 | u)),
                    (b = (m = (o + -1) | 0) << 5),
                    (h = (u + -1) | 0),
                    (S = n << 1),
                    (R = (e + 92) | 0),
                    (P = (e + 116) | 0),
                    (p = (e + 164) | 0),
                    (C = (e + 268) | 0),
                    (ae = (e + 212) | 0),
                    (c = 0 == ((1 & i) | 0)),
                    (s = 0 == ((1 & a) | 0)),
                    (l = (e + 288) | 0),
                    (f = (e + 284) | 0),
                    (t = i = a = e = ie = 0),
                    (D = 1);
                  do {
                    if (!M)
                      for (te = 0 | _e[(r + (ie << 2)) >> 2], ne = 0; ; ) {
                        if (
                          ((x = 0 == (0 | (re = 1 & ne))),
                          (ee = (((re << 6) ^ 64) - 32) | 0),
                          (re = (((re << 1) ^ 2) - 1) | 0),
                          (0 | (F = x ? 0 : m)) != (0 | (q = x ? o : -1)))
                        )
                          for (
                            Q = s | ((0 | ne) != (0 | h)),
                              $ = x ? te : (te + b) | 0;
                            ;

                          ) {
                            for (
                              1 == (0 | D) && (D = 512 | Ae(R, P)),
                                Z = 7 & D,
                                D >>>= 3,
                                B = 0 | de[(1539 + Z) >> 0],
                                x = 0;
                              (t =
                                ((J =
                                  (j =
                                    ((z = ((0 | Ae(R, p)) + t) | 0) - E) | 0) >>
                                  31) &
                                  z) |
                                (j & ~J)),
                                (0 | _e[d >> 2]) >>> 0 <= t >>> 0 &&
                                  ((_e[N >> 2] = 866),
                                  (_e[(N + 4) >> 2] = 910),
                                  (_e[(N + 8) >> 2] = 1497),
                                  Ie(v, 812, N),
                                  he(v)),
                                (_e[(y + (x << 2)) >> 2] =
                                  Ee[((0 | _e[C >> 2]) + (t << 1)) >> 1]),
                                (x = (x + 1) | 0) >>> 0 < B >>> 0;

                            );
                            for (
                              x = 0;
                              (a =
                                ((J =
                                  (j =
                                    ((z = ((0 | Ae(R, p)) + a) | 0) - E) | 0) >>
                                  31) &
                                  z) |
                                (j & ~J)),
                                (0 | _e[d >> 2]) >>> 0 <= a >>> 0 &&
                                  ((_e[I >> 2] = 866),
                                  (_e[(4 + I) >> 2] = 910),
                                  (_e[(8 + I) >> 2] = 1497),
                                  Ie(v, 812, I),
                                  he(v)),
                                (_e[(_ + (x << 2)) >> 2] =
                                  Ee[((0 | _e[C >> 2]) + (a << 1)) >> 1]),
                                (x = (x + 1) | 0) >>> 0 < B >>> 0;

                            );
                            for (
                              J = c | ((0 | F) != (0 | m)), z = 0, j = $;
                              ;

                            ) {
                              if (((X = Q | (0 == (0 | z))), (Y = z << 1), J))
                                for (
                                  V = 0, W = j;
                                  (i =
                                    ((i =
                                      (H =
                                        ((K = ((0 | Ae(R, ae)) + i) | 0) - T) |
                                        0) >> 31) &
                                      K) |
                                    (H & ~i)),
                                    (e =
                                      ((e =
                                        (K =
                                          ((H = ((0 | Ae(R, ae)) + e) | 0) -
                                            T) |
                                          0) >> 31) &
                                        H) |
                                      (K & ~e)),
                                    X &&
                                      ((H =
                                        0 |
                                        de[(V + Y + (1547 + (Z << 2))) >> 0]),
                                      (B = (3 * i) | 0),
                                      (x = 0 | _e[l >> 2]) >>> 0 <= B >>> 0 &&
                                        ((_e[L >> 2] = 866),
                                        (_e[(4 + L) >> 2] = 910),
                                        (_e[(8 + L) >> 2] = 1497),
                                        Ie(v, 812, L),
                                        he(v),
                                        (x = 0 | _e[l >> 2])),
                                      (B =
                                        ((G = 0 | _e[f >> 2]) + (B << 1)) | 0),
                                      (K =
                                        ((x =
                                          (U = (3 * e) | 0) >>> 0 < x >>> 0
                                            ? G
                                            : ((_e[k >> 2] = 866),
                                              (_e[(4 + k) >> 2] = 910),
                                              (_e[(8 + k) >> 2] = 1497),
                                              Ie(v, 812, k),
                                              he(v),
                                              0 | _e[f >> 2])) +
                                          (U << 1)) |
                                        0),
                                      (_e[W >> 2] =
                                        ((0 | Ee[B >> 1]) << 16) |
                                        _e[(y + (H << 2)) >> 2]),
                                      (_e[(W + 4) >> 2] =
                                        ((0 | Ee[(B + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(B + 2) >> 1]),
                                      (_e[(W + 8) >> 2] =
                                        ((0 | Ee[K >> 1]) << 16) |
                                        _e[(_ + (H << 2)) >> 2]),
                                      (_e[(W + 12) >> 2] =
                                        ((0 | Ee[(K + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(K + 2) >> 1])),
                                    2 != (0 | (V = (V + 1) | 0));

                                )
                                  W = (W + 16) | 0;
                              else
                                for (
                                  K = 1 ^ X,
                                    X = (1547 + (Z << 2) + Y) | 0,
                                    V = 0,
                                    W = j;
                                  (i =
                                    ((i =
                                      (H =
                                        ((Y = ((0 | Ae(R, ae)) + i) | 0) - T) |
                                        0) >> 31) &
                                      Y) |
                                    (H & ~i)),
                                    (e =
                                      ((e =
                                        (Y =
                                          ((H = ((0 | Ae(R, ae)) + e) | 0) -
                                            T) |
                                          0) >> 31) &
                                        H) |
                                      (Y & ~e)),
                                    (0 != (0 | V)) | K ||
                                      ((H = 0 | de[X >> 0]),
                                      (B = (3 * i) | 0),
                                      (x = 0 | _e[l >> 2]) >>> 0 <= B >>> 0 &&
                                        ((_e[O >> 2] = 866),
                                        (_e[(4 + O) >> 2] = 910),
                                        (_e[(8 + O) >> 2] = 1497),
                                        Ie(v, 812, O),
                                        he(v),
                                        (x = 0 | _e[l >> 2])),
                                      (B =
                                        ((G = 0 | _e[f >> 2]) + (B << 1)) | 0),
                                      (Y =
                                        ((x =
                                          (U = (3 * e) | 0) >>> 0 < x >>> 0
                                            ? G
                                            : ((_e[g >> 2] = 866),
                                              (_e[(4 + g) >> 2] = 910),
                                              (_e[(8 + g) >> 2] = 1497),
                                              Ie(v, 812, g),
                                              he(v),
                                              0 | _e[f >> 2])) +
                                          (U << 1)) |
                                        0),
                                      (_e[W >> 2] =
                                        ((0 | Ee[B >> 1]) << 16) |
                                        _e[(y + (H << 2)) >> 2]),
                                      (_e[(W + 4) >> 2] =
                                        ((0 | Ee[(B + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(B + 2) >> 1]),
                                      (_e[(W + 8) >> 2] =
                                        ((0 | Ee[Y >> 1]) << 16) |
                                        _e[(_ + (H << 2)) >> 2]),
                                      (_e[(W + 12) >> 2] =
                                        ((0 | Ee[(Y + 4) >> 1]) << 16) |
                                        0 |
                                        Ee[(Y + 2) >> 1])),
                                    2 != (0 | (V = (V + 1) | 0));

                                )
                                  W = (W + 16) | 0;
                              if (2 == (0 | (z = (z + 1) | 0))) break;
                              j = (j + n) | 0;
                            }
                            if ((0 | (F = (re + F) | 0)) == (0 | q)) break;
                            $ = ($ + ee) | 0;
                          }
                        if ((0 | (ne = (ne + 1) | 0)) == (0 | u)) break;
                        te = (te + S) | 0;
                      }
                    ie = (ie + 1) | 0;
                  } while ((0 | ie) != (0 | A));
                  return (Te = w), 1;
                })(e, n, i, o, f, l, a, u)
              )
            )
              return (i = 0) | i;
            break;
          default:
            return (i = 0) | i;
        }
        return 0 | (i = 1);
      }
      function K(e, r, t) {
        (e |= 0), (r |= 0);
        var n,
          i,
          a = 0;
        if (8192 <= (0 | (t |= 0))) return 0 | y(0 | e, 0 | r, 0 | t);
        if (((i = 0 | e), (n = (e + t) | 0), (3 & e) == (3 & r))) {
          for (; 3 & e; ) {
            if (!t) return 0 | i;
            (ce[e >> 0] = 0 | ce[r >> 0]),
              (e = (e + 1) | 0),
              (r = (r + 1) | 0),
              (t = (t - 1) | 0);
          }
          for (a = ((t = (-4 & n) | 0) - 64) | 0; (0 | e) <= (0 | a); )
            (_e[e >> 2] = _e[r >> 2]),
              (_e[(e + 4) >> 2] = _e[(r + 4) >> 2]),
              (_e[(e + 8) >> 2] = _e[(r + 8) >> 2]),
              (_e[(e + 12) >> 2] = _e[(r + 12) >> 2]),
              (_e[(e + 16) >> 2] = _e[(r + 16) >> 2]),
              (_e[(e + 20) >> 2] = _e[(r + 20) >> 2]),
              (_e[(e + 24) >> 2] = _e[(r + 24) >> 2]),
              (_e[(e + 28) >> 2] = _e[(r + 28) >> 2]),
              (_e[(e + 32) >> 2] = _e[(r + 32) >> 2]),
              (_e[(e + 36) >> 2] = _e[(r + 36) >> 2]),
              (_e[(e + 40) >> 2] = _e[(r + 40) >> 2]),
              (_e[(e + 44) >> 2] = _e[(r + 44) >> 2]),
              (_e[(e + 48) >> 2] = _e[(r + 48) >> 2]),
              (_e[(e + 52) >> 2] = _e[(r + 52) >> 2]),
              (_e[(e + 56) >> 2] = _e[(r + 56) >> 2]),
              (_e[(e + 60) >> 2] = _e[(r + 60) >> 2]),
              (e = (e + 64) | 0),
              (r = (r + 64) | 0);
          for (; (0 | e) < (0 | t); )
            (_e[e >> 2] = _e[r >> 2]), (e = (e + 4) | 0), (r = (r + 4) | 0);
        } else
          for (t = (n - 4) | 0; (0 | e) < (0 | t); )
            (ce[e >> 0] = 0 | ce[r >> 0]),
              (ce[(e + 1) >> 0] = 0 | ce[(r + 1) >> 0]),
              (ce[(e + 2) >> 0] = 0 | ce[(r + 2) >> 0]),
              (ce[(e + 3) >> 0] = 0 | ce[(r + 3) >> 0]),
              (e = (e + 4) | 0),
              (r = (r + 4) | 0);
        for (; (0 | e) < (0 | n); )
          (ce[e >> 0] = 0 | ce[r >> 0]), (e = (e + 1) | 0), (r = (r + 1) | 0);
        return 0 | i;
      }
      function z(e, r, t) {
        (r |= 0), (t |= 0);
        var n,
          i,
          a,
          o,
          u,
          f = 0,
          l = 0,
          s = 0,
          c = 0,
          _ = 0,
          d = 0;
        (Te = ((u = Te) + 48) | 0),
          (o = (u + 16) | 0),
          (l = ((s = u) + 32) | 0),
          (f = 0 | _e[(i = ((e |= 0) + 28) | 0) >> 2]),
          (_e[l >> 2] = f),
          (f = ((0 | _e[(a = (e + 20) | 0) >> 2]) - f) | 0),
          (_e[(l + 4) >> 2] = f),
          (_e[(l + 8) >> 2] = r),
          (f = (f + (_e[(l + 12) >> 2] = t)) | 0),
          (n = (e + 60) | 0),
          (_e[s >> 2] = _e[n >> 2]),
          (_e[(s + 4) >> 2] = l),
          (_e[(s + 8) >> 2] = 2),
          (s = 0 | Ge(0 | I(146, 0 | s)));
        e: do {
          if ((0 | f) != (0 | s)) {
            for (r = 2; !((0 | s) < 0); )
              if (
                ((f = (f - s) | 0),
                (r =
                  ((((_ = (d = 0 | _e[(l + 4) >> 2]) >>> 0 < s >>> 0) << 31) >>
                    31) +
                    r) |
                  0),
                (d = (s - (_ ? d : 0)) | 0),
                (_e[(l = _ ? (l + 8) | 0 : l) >> 2] = (0 | _e[l >> 2]) + d),
                (_e[(_ = (l + 4) | 0) >> 2] = (0 | _e[_ >> 2]) - d),
                (_e[o >> 2] = _e[n >> 2]),
                (_e[(4 + o) >> 2] = l),
                (_e[(8 + o) >> 2] = r),
                (0 | f) == (0 | (s = 0 | Ge(0 | I(146, 0 | o)))))
              ) {
                c = 3;
                break e;
              }
            (_e[(e + 16) >> 2] = 0),
              (_e[i >> 2] = 0),
              (_e[a >> 2] = 0),
              (_e[e >> 2] = 32 | _e[e >> 2]),
              (t = 2 == (0 | r) ? 0 : (t - (0 | _e[(l + 4) >> 2])) | 0);
          } else c = 3;
        } while (0);
        return (
          3 == (0 | c) &&
            ((d = 0 | _e[(e + 44) >> 2]),
            (_e[(e + 16) >> 2] = d + (0 | _e[(e + 48) >> 2])),
            (_e[i >> 2] = d),
            (_e[a >> 2] = d)),
          (Te = u),
          0 | t
        );
      }
      function j(e, r, t) {
        (e |= 0), (r |= 0), (t |= 0);
        var n,
          i,
          a,
          o,
          u,
          f = 0,
          l = 0,
          s = 0,
          c = 0,
          _ = 0,
          d = 0,
          E = 0;
        for (
          Te = ((u = Te) + 224) | 0,
            n = (u + 120) | 0,
            o = ((a = u) + 136) | 0,
            l = ((f = i = (u + 80) | 0) + 40) | 0;
          (0 | (f = (f + 4) | (_e[f >> 2] = 0))) < (0 | l);

        );
        return (
          (_e[n >> 2] = _e[t >> 2]),
          (t =
            (0 | D(0, r, n, a, i)) < 0
              ? -1
              : (_e[(e + 76) >> 2],
                (E = 32 & (t = 0 | _e[e >> 2])),
                (0 | ce[(e + 74) >> 0]) < 1 && (_e[e >> 2] = -33 & t),
                0 | _e[(f = (e + 48) | 0) >> 2]
                  ? (t = 0 | D(e, r, n, a, i))
                  : ((s = 0 | _e[(l = (e + 44) | 0) >> 2]),
                    (_e[l >> 2] = o),
                    (_e[(c = (e + 28) | 0) >> 2] = o),
                    (_e[(_ = (e + 20) | 0) >> 2] = o),
                    (_e[f >> 2] = 80),
                    (_e[(d = (e + 16) | 0) >> 2] = 80 + o),
                    (t = 0 | D(e, r, n, a, i)),
                    s &&
                      (nr[7 & _e[(e + 36) >> 2]](e, 0, 0),
                      (t = 0 == (0 | _e[_ >> 2]) ? -1 : t),
                      (_e[l >> 2] = s),
                      (_e[f >> 2] = 0),
                      (_e[d >> 2] = 0),
                      (_e[c >> 2] = 0),
                      (_e[_ >> 2] = 0))),
                (f = 0 | _e[e >> 2]),
                (_e[e >> 2] = f | E),
                0 == ((32 & f) | 0) ? t : -1)),
          (Te = u),
          0 | t
        );
      }
      function J(e, r, t, n) {
        (r |= 0), (t |= 0), (n |= 0);
        var i,
          a,
          o,
          u,
          f,
          l,
          s,
          c = 0,
          _ = 0;
        for (
          Te = ((s = Te) + 64) | 0,
            f = s,
            _ = 0 | _e[(e |= 0) >> 2],
            l = (e + (0 | _e[(_ + -8) >> 2])) | 0,
            _ = 0 | _e[(_ + -4) >> 2],
            _e[f >> 2] = t,
            _e[(f + 4) >> 2] = e,
            _e[(f + 8) >> 2] = r,
            _e[(f + 12) >> 2] = n,
            r = (f + 20) | 0,
            n = (f + 24) | 0,
            i = (f + 28) | 0,
            a = (f + 32) | 0,
            o = (f + 40) | 0,
            u = ((c = e = (f + 16) | 0) + 36) | 0;
          (0 | (c = (c + 4) | (_e[c >> 2] = 0))) < (0 | u);

        );
        (V[(e + 36) >> 1] = 0), (ce[(e + 38) >> 0] = 0);
        e: do {
          if (0 | Xe(_, t))
            (_e[(f + 48) >> 2] = 1),
              lr[3 & _e[(20 + (0 | _e[_ >> 2])) >> 2]](_, f, l, l, 1, 0),
              (e = 1 == (0 | _e[n >> 2]) ? l : 0);
          else {
            switch (
              (ir[3 & _e[(24 + (0 | _e[_ >> 2])) >> 2]](_, f, l, 1, 0),
              0 | _e[(f + 36) >> 2])
            ) {
              case 0:
                e =
                  (1 == (0 | _e[o >> 2])) &
                  (1 == (0 | _e[i >> 2])) &
                  (1 == (0 | _e[a >> 2]))
                    ? 0 | _e[r >> 2]
                    : 0;
                break e;
              case 1:
                break;
              default:
                e = 0;
                break e;
            }
            if (
              1 != (0 | _e[n >> 2]) &&
              !(
                (0 == (0 | _e[o >> 2])) &
                (1 == (0 | _e[i >> 2])) &
                (1 == (0 | _e[a >> 2]))
              )
            ) {
              e = 0;
              break;
            }
            e = 0 | _e[e >> 2];
          }
        } while (0);
        return (Te = s), 0 | e;
      }
      function Z(e) {
        var r,
          t = 0,
          n = 0,
          i = 0,
          a = 0,
          o = 0,
          u = 0,
          f = 0;
        if (
          ((Te = ((r = Te) + 544) | 0),
          (u = (r + 16) | 0),
          (a = ((t = r) + 32) | 0),
          8192 <=
            (((n = 0 | _e[(o = ((e |= 0) + 8) | 0) >> 2]) + -1) | 0) >>> 0 &&
            ((_e[t >> 2] = 866),
            (_e[(t + 4) >> 2] = 3006),
            (_e[(t + 8) >> 2] = 1257),
            Ie(a, 812, t),
            he(a)),
          (_e[e >> 2] = n),
          (f = (t = 0 | _e[(i = (e + 20) | 0) >> 2])
            ? n
            : ((t = 0 | ae(180, 0))
                ? ((_e[(f = (t + 164) | 0) >> 2] = 0),
                  (_e[(f + 4) >> 2] = 0),
                  (_e[(f + 8) >> 2] = 0),
                  (_e[(f + 12) >> 2] = 0))
                : (t = 0),
              (_e[i >> 2] = t),
              0 | _e[e >> 2])),
          (u =
            0 | _e[o >> 2]
              ? f
              : ((_e[u >> 2] = 866),
                (_e[(u + 4) >> 2] = 910),
                (_e[(u + 8) >> 2] = 1497),
                Ie(a, 812, u),
                he(a),
                0 | _e[e >> 2])),
          (a = 0 | _e[(e + 4) >> 2]),
          !(16 < u >>> 0))
        )
          return (e = (e = 0) | F(t, f, a, e)), (Te = r), 0 | e;
        for (n = u, i = 0; (o = (i + 1) | 0), 3 < n >>> 0; )
          (n >>>= 1), (i = o);
        return (
          (e =
            0 |
            F(
              t,
              f,
              a,
              (e =
                255 &
                ((e =
                  (i + 2 + ((32 != (0 | o)) & ((1 << o) >>> 0 < u >>> 0) & 1)) |
                  0) >>>
                  0 <
                11
                  ? e
                  : 11)),
            )),
          (Te = r),
          0 | e
        );
      }
      function $(e) {
        var r,
          t,
          n,
          i,
          a,
          o,
          u = 0,
          f = 0;
        (Te = ((o = Te) + 576) | 0),
          (i = (o + 48) | 0),
          (a = (o + 32) | 0),
          (t = (o + 16) | 0),
          (n = ((r = o) + 64) | 0),
          (u = 0 | _e[((e |= 0) + 168) >> 2]);
        do {
          if (0 | u) {
            if (
              ((f = 0 | _e[(u + -4) >> 2]),
              (u = (u + -8) | 0),
              (0 != (0 | f) && (0 | f) == (0 | ~_e[u >> 2])) ||
                ((_e[r >> 2] = 866),
                (_e[(r + 4) >> 2] = 651),
                (_e[(r + 8) >> 2] = 1579),
                Ie(n, 812, r),
                he(n)),
              7 & u)
            ) {
              (_e[t >> 2] = 866),
                (_e[(4 + t) >> 2] = 2506),
                (_e[(8 + t) >> 2] = 1232),
                Ie(n, 812, t),
                he(n);
              break;
            }
            le(u, 0, 0, 1, 0);
            break;
          }
        } while (0);
        if ((u = 0 | _e[(e + 176) >> 2]))
          return (
            (f = 0 | _e[(u + -4) >> 2]),
            (u = (u + -8) | 0),
            (0 != (0 | f) && (0 | f) == (0 | ~_e[u >> 2])) ||
              ((_e[a >> 2] = 866),
              (_e[(4 + a) >> 2] = 651),
              (_e[(8 + a) >> 2] = 1579),
              Ie(n, 812, a),
              he(n)),
            7 & u
              ? ((_e[i >> 2] = 866),
                (_e[(4 + i) >> 2] = 2506),
                (_e[(8 + i) >> 2] = 1232),
                Ie(n, 812, i),
                he(n))
              : le(u, 0, 0, 1, 0),
            void (Te = o)
          );
        Te = o;
      }
      function q(e, r, t) {
        var n;
        return !(
          (0 != (0 | (e |= 0))) &
          (73 < (r |= 0) >>> 0) &
          (0 != (0 | (t |= 0)))
        ) ||
          40 != (0 | _e[t >> 2]) ||
          18552 != (((0 | de[e >> 0]) << 8) | 0 | de[(e + 1) >> 0] | 0) ||
          (((0 | de[(e + 2) >> 0]) << 8) | 0 | de[(e + 3) >> 0]) >>> 0 < 74 ||
          (((0 | de[(e + 7) >> 0]) << 16) |
            ((0 | de[(e + 6) >> 0]) << 24) |
            ((0 | de[(e + 8) >> 0]) << 8) |
            0 |
            de[(e + 9) >> 0]) >>>
            0 >
            r >>> 0
          ? (t = 0) | t
          : ((_e[(t + 4) >> 2] =
              ((0 | de[(e + 12) >> 0]) << 8) | 0 | de[(e + 13) >> 0]),
            (_e[(t + 8) >> 2] =
              ((0 | de[(e + 14) >> 0]) << 8) | 0 | de[(e + 15) >> 0]),
            (_e[(t + 12) >> 2] = de[(e + 16) >> 0]),
            (_e[(t + 16) >> 2] = de[(e + 17) >> 0]),
            (r = (e + 18) | 0),
            (_e[(n = (t + 32) | 0) >> 2] = de[r >> 0]),
            (r = (_e[(4 + n) >> 2] = 0) | ce[r >> 0]),
            (_e[(t + 20) >> 2] =
              ((r << 24) >> 24 == 0) | ((r << 24) >> 24 == 9) ? 8 : 16),
            (_e[(t + 24) >> 2] =
              ((0 | de[(e + 26) >> 0]) << 16) |
              ((0 | de[(e + 25) >> 0]) << 24) |
              ((0 | de[(e + 27) >> 0]) << 8) |
              0 |
              de[(e + 28) >> 0]),
            (_e[(t + 28) >> 2] =
              ((0 | de[(e + 30) >> 0]) << 16) |
              ((0 | de[(e + 29) >> 0]) << 24) |
              ((0 | de[(e + 31) >> 0]) << 8) |
              0 |
              de[(e + 32) >> 0]),
            0 | (t = 1));
      }
      function Q(e, r) {
        e |= 0;
        var t,
          n,
          i,
          a = 0,
          o = 0,
          u = 0,
          f = 0,
          l = 0;
        if (
          ((Te = ((i = Te) + 544) | 0),
          (l = (i + 16) | 0),
          (f = ((a = i) + 32) | 0),
          33 <= (r |= 0) >>> 0 &&
            ((_e[a >> 2] = 866),
            (_e[(a + 4) >> 2] = 3199),
            (_e[(a + 8) >> 2] = 1350),
            Ie(f, 812, a),
            he(f)),
          (0 | r) <= (0 | (a = 0 | _e[(n = (e + 20) | 0) >> 2])))
        )
          return (
            (f = a),
            (l =
              (o = 0 | _e[(u = o = (e + 16) | 0) >> 2]) >>> (l = (32 - r) | 0)),
            (o <<= r),
            (_e[u >> 2] = o),
            (r = (f - r) | 0),
            (_e[n >> 2] = r),
            (Te = i),
            0 | l
          );
        for (
          o = (e + 4) | 0, u = (e + 8) | 0, t = (e + 16) | 0;
          (e =
            (0 | (e = 0 | _e[o >> 2])) == (0 | _e[u >> 2])
              ? 0
              : ((_e[o >> 2] = e + 1), 0 | de[e >> 0])),
            (a = (a + 8) | 0),
            33 <= (0 | (_e[n >> 2] = a)) &&
              ((_e[l >> 2] = 866),
              (_e[(l + 4) >> 2] = 3208),
              (_e[(l + 8) >> 2] = 1366),
              Ie(f, 812, l),
              he(f),
              (a = 0 | _e[n >> 2])),
            (e = (e << (32 - a)) | _e[t >> 2]),
            (_e[t >> 2] = e),
            (0 | a) < (0 | r);

        );
        return (
          (l = e >>> (l = (32 - r) | 0)),
          (f = e << r),
          (_e[t >> 2] = f),
          (r = (a - r) | 0),
          (_e[n >> 2] = r),
          (Te = i),
          0 | l
        );
      }
      function ee(e, r, t) {
        e |= 0;
        var n = 0,
          i = 0,
          a = 0,
          o = 0;
        (a = 255 & (r |= 0)), (n = 0 != (0 | (t |= 0)));
        e: do {
          if (n & (0 != ((3 & e) | 0)))
            for (i = 255 & r; ; ) {
              if ((0 | ce[e >> 0]) == (i << 24) >> 24) {
                o = 6;
                break e;
              }
              if (
                !(
                  (n = 0 != (0 | (t = (t + -1) | 0))) &
                  (0 != ((3 & (e = (e + 1) | 0)) | 0))
                )
              ) {
                o = 5;
                break;
              }
            }
          else o = 5;
        } while (0);
        5 == (0 | o) && (n ? (o = 6) : (t = 0));
        e: do {
          if (
            6 == (0 | o) &&
            ((i = 255 & r), (0 | ce[e >> 0]) != (i << 24) >> 24)
          ) {
            n = 0 | ie(a, 16843009);
            r: do {
              if (3 < t >>> 0) {
                for (
                  ;
                  !(
                    (((-2139062144 & (a = _e[e >> 2] ^ n)) ^ -2139062144) &
                      (a + -16843009)) |
                    0
                  );

                )
                  if (((e = (e + 4) | 0), (t = (t + -4) | 0) >>> 0 <= 3)) {
                    o = 11;
                    break r;
                  }
              } else o = 11;
            } while (0);
            if (11 == (0 | o) && !t) {
              t = 0;
              break;
            }
            for (;;) {
              if ((0 | ce[e >> 0]) == (i << 24) >> 24) break e;
              if (((e = (e + 1) | 0), !(t = (t + -1) | 0))) {
                t = 0;
                break;
              }
            }
          }
        } while (0);
        return 0 | (0 | t ? e : 0);
      }
      function re(e, r, t, n, i) {
        (r |= 0), (t |= 0), (n |= 0), (i |= 0);
        var a,
          o,
          u,
          f = 0,
          l = 0,
          s = 0;
        return (
          (Te = ((u = Te) + 528) | 0),
          (l = ((s = u) + 16) | 0),
          (a = 0 | _e[((e |= 0) + 88) >> 2]),
          (Te =
            ((s =
              ((o =
                ((0 | de[(70 + a + (i << 2) + 1) >> 0]) << 16) |
                ((0 | de[(70 + a + (i << 2)) >> 0]) << 24) |
                ((0 | de[(70 + a + (i << 2) + 2) >> 0]) << 8) |
                0 |
                de[(70 + a + (i << 2) + 3) >> 0]) >>>
                0 <
                (f =
                  (f = (i + 1) | 0) >>> 0 < (0 | de[(16 + a) >> 0]) >>> 0
                    ? ((0 | de[(70 + a + (f << 2) + 1) >> 0]) << 16) |
                      ((0 | de[(70 + a + (f << 2)) >> 0]) << 24) |
                      ((0 | de[(70 + a + (f << 2) + 2) >> 0]) << 8) |
                      0 |
                      de[(70 + a + (f << 2) + 3) >> 0]
                    : 0 | _e[(e + 8) >> 2]) >>>
                  0 ||
                ((_e[s >> 2] = 866),
                (_e[(s + 4) >> 2] = 3694),
                (_e[(s + 8) >> 2] = 1508),
                Ie(l, 812, s),
                he(l)),
              0 |
                Y(
                  e,
                  (l = ((l = 0 | _e[(l = (e + 4) | 0) >> 2]) + o) | 0),
                  (s = (f - o) | 0),
                  r,
                  t,
                  n,
                  i,
                ))),
            u)),
          0 | s
        );
      }
      function te(e, r, t) {
        (e |= 0), (r |= 0);
        var n = 0,
          i = 0,
          a = 0,
          o = 0,
          u = 0;
        (i = 0 | _e[(n = ((t |= 0) + 16) | 0) >> 2])
          ? (a = 5)
          : 0 | Re(t)
          ? (n = 0)
          : ((i = 0 | _e[n >> 2]), (a = 5));
        e: do {
          if (5 == (0 | a)) {
            if (
              ((i - (n = o = 0 | _e[(u = (t + 20) | 0) >> 2])) | 0) >>> 0 <
              r >>> 0
            ) {
              n = 0 | nr[7 & _e[(t + 36) >> 2]](t, e, r);
              break;
            }
            r: do {
              if (-1 < (0 | ce[(t + 75) >> 0])) {
                for (o = r; ; ) {
                  if (!o) {
                    (a = 0), (i = e);
                    break r;
                  }
                  if (10 == (0 | ce[(e + (i = (o + -1) | 0)) >> 0])) break;
                  o = i;
                }
                if (
                  (n = 0 | nr[7 & _e[(t + 36) >> 2]](t, e, o)) >>> 0 <
                  o >>> 0
                )
                  break e;
                (i = (e + (a = o)) | 0),
                  (r = (r - o) | 0),
                  (n = 0 | _e[u >> 2]);
              } else (a = 0), (i = e);
            } while (0);
            K(0 | n, 0 | i, 0 | r),
              (_e[u >> 2] = (0 | _e[u >> 2]) + r),
              (n = (a + r) | 0);
          }
        } while (0);
        return 0 | n;
      }
      function ne(e) {
        var r,
          t,
          n = 0,
          i = 0,
          a = 0;
        (Te = ((t = Te) + 544) | 0),
          (a = (t + 16) | 0),
          (r = ((i = t) + 32) | 0),
          (n = 0 | _e[((e |= 0) + 20) >> 2]);
        do {
          if (0 | n) {
            if (($(n), 7 & n)) {
              (_e[i >> 2] = 866),
                (_e[(i + 4) >> 2] = 2506),
                (_e[(i + 8) >> 2] = 1232),
                Ie(r, 812, i),
                he(r);
              break;
            }
            le(n, 0, 0, 1, 0);
            break;
          }
        } while (0);
        if (!(i = 0 | _e[(n = (e + 4) | 0) >> 2]))
          return (ce[(a = (e + 16) | 0) >> 0] = 0), void (Te = t);
        7 & i
          ? ((_e[a >> 2] = 866),
            (_e[(a + 4) >> 2] = 2506),
            (_e[(a + 8) >> 2] = 1232),
            Ie(r, 812, a),
            he(r))
          : le(i, 0, 0, 1, 0),
          (_e[n >> 2] = 0),
          (_e[(e + 8) >> 2] = 0),
          (_e[(e + 12) >> 2] = 0),
          (ce[(a = (e + 16) | 0) >> 0] = 0),
          (Te = t);
      }
      function ae(e, r) {
        r |= 0;
        var t,
          n,
          i,
          a,
          o = 0,
          u = 0,
          f = 0;
        return (
          (Te = ((a = Te) + 560) | 0),
          (f = (a + 32) | 0),
          (i = (a + 16) | 0),
          (n = ((o = a) + 48) | 0),
          (t = (a + 44) | 0),
          2147418112 < (u = 0 | (u = ((e |= 0) + 3) & -4) ? u : 4) >>> 0
            ? ((_e[o >> 2] = 866),
              (_e[(o + 4) >> 2] = 2506),
              (_e[(o + 8) >> 2] = 1103),
              Ie(n, 812, o),
              he(n),
              (Te = a),
              (f = 0) | f)
            : ((e = 0 | le(0, (_e[t >> 2] = u), t, 1, 0)),
              (o = 0 | _e[t >> 2]),
              0 | r && (_e[r >> 2] = o),
              (0 == (0 | e)) | (o >>> 0 < u >>> 0)
                ? ((_e[i >> 2] = 866),
                  (_e[(4 + i) >> 2] = 2506),
                  (_e[(8 + i) >> 2] = 1129),
                  Ie(n, 812, i),
                  he(n),
                  (e = 0))
                : 7 & e &&
                  ((_e[f >> 2] = 866),
                  (_e[(f + 4) >> 2] = 2533),
                  (_e[(f + 8) >> 2] = 1156),
                  Ie(n, 812, f),
                  he(n)),
              (Te = a),
              0 | (f = e))
        );
      }
      function oe(e, r, t) {
        r |= 0;
        var n,
          i = 0,
          a = 0,
          o = 0;
        if (((n = ((e |= 0) + (t |= 0)) | 0), (r &= 255), 67 <= (0 | t))) {
          for (; 3 & e; ) (ce[e >> 0] = r), (e = (e + 1) | 0);
          for (
            a = ((i = (-4 & n) | 0) - 64) | 0,
              o = r | (r << 8) | (r << 16) | (r << 24);
            (0 | e) <= (0 | a);

          )
            (_e[e >> 2] = o),
              (_e[(e + 4) >> 2] = o),
              (_e[(e + 8) >> 2] = o),
              (_e[(e + 12) >> 2] = o),
              (_e[(e + 16) >> 2] = o),
              (_e[(e + 20) >> 2] = o),
              (_e[(e + 24) >> 2] = o),
              (_e[(e + 28) >> 2] = o),
              (_e[(e + 32) >> 2] = o),
              (_e[(e + 36) >> 2] = o),
              (_e[(e + 40) >> 2] = o),
              (_e[(e + 44) >> 2] = o),
              (_e[(e + 48) >> 2] = o),
              (_e[(e + 52) >> 2] = o),
              (_e[(e + 56) >> 2] = o),
              (_e[(e + 60) >> 2] = o),
              (e = (e + 64) | 0);
          for (; (0 | e) < (0 | i); ) (_e[e >> 2] = o), (e = (e + 4) | 0);
        }
        for (; (0 | e) < (0 | n); ) (ce[e >> 0] = r), (e = (e + 1) | 0);
        return (n - t) | 0;
      }
      function ue(e, r, t, n, i) {
        (e |= 0), (t |= 0), (n |= 0), (i |= 0);
        var a = 0,
          o = 0,
          u = 0,
          f = 0;
        ce[((r |= 0) + 53) >> 0] = 1;
        do {
          if ((0 | _e[(r + 4) >> 2]) == (0 | n)) {
            if (
              ((ce[(r + 52) >> 0] = 1),
              (u = (r + 54) | 0),
              (f = (r + 48) | 0),
              (o = (r + 24) | 0),
              (e = (r + 36) | 0),
              !(a = 0 | _e[(n = (r + 16) | 0) >> 2]))
            ) {
              if (
                ((_e[n >> 2] = t),
                (_e[o >> 2] = i),
                !(((_e[e >> 2] = 1) == (0 | _e[f >> 2])) & (1 == (0 | i))))
              )
                break;
              ce[u >> 0] = 1;
              break;
            }
            if ((0 | a) != (0 | t)) {
              (_e[e >> 2] = 1 + (0 | _e[e >> 2])), (ce[u >> 0] = 1);
              break;
            }
            2 == (0 | (e = 0 | _e[o >> 2])) && (e = _e[o >> 2] = i),
              (1 == (0 | _e[f >> 2])) & (1 == (0 | e)) && (ce[u >> 0] = 1);
          }
        } while (0);
      }
      function fe(e, r) {
        e |= 0;
        var t,
          n,
          i,
          a = 0,
          o = 0,
          u = 0,
          f = 0;
        (Te = ((i = Te) + 16) | 0),
          (n = 255 & (r |= 0)),
          (ce[(t = i) >> 0] = n),
          (u = 0 | _e[(o = (e + 16) | 0) >> 2])
            ? (f = 4)
            : 0 | Re(e)
            ? (a = -1)
            : ((u = 0 | _e[o >> 2]), (f = 4));
        do {
          if (4 == (0 | f)) {
            if (
              (o = 0 | _e[(f = (e + 20) | 0) >> 2]) >>> 0 < u >>> 0 &&
              (0 | (a = 255 & r)) != (0 | ce[(e + 75) >> 0])
            ) {
              (_e[f >> 2] = o + 1), (ce[o >> 0] = n);
              break;
            }
            a =
              1 == (0 | nr[7 & _e[(e + 36) >> 2]](e, t, 1))
                ? 0 | de[t >> 0]
                : -1;
          }
        } while (0);
        return (Te = i), 0 | a;
      }
      function le(e, r, t, n, i) {
        (e |= 0), (r |= 0), (t |= 0), (n |= 0), (i |= 0);
        do {
          if (e) {
            if (!r) {
              if ((x(e), !t)) {
                r = 0;
                break;
              }
              r = _e[t >> 2] = 0;
              break;
            }
            n ? (e = 0 == (0 | (r = 0 | me(e, r))) ? e : r) : (r = 0),
              t && ((i = 0 | ge(e)), (_e[t >> 2] = i));
          } else
            (r = 0 | L(r)), t && ((e = r ? 0 | ge(r) : 0), (_e[t >> 2] = e));
        } while (0);
        return 0 | r;
      }
      function se(e, r) {
        (e |= 0), (r |= 0);
        var t,
          n,
          i = 0,
          a = 0;
        for (a = 0; ; ) {
          if ((0 | de[(2140 + a) >> 0]) == (0 | e)) {
            e = 2;
            break;
          }
          if (87 == (0 | (i = (a + 1) | 0))) {
            (i = 2228), (a = 87), (e = 5);
            break;
          }
          a = i;
        }
        if (
          (2 == (0 | e) && (a ? ((i = 2228), (e = 5)) : (i = 2228)),
          5 == (0 | e))
        )
          for (;;) {
            for (; (i = ((e = i) + 1) | 0), 0 != (0 | ce[e >> 0]); );
            if (!(a = (a + -1) | 0)) break;
            e = 5;
          }
        return (
          0 |
          ((t = i),
          (n = 0 | _e[(r + 20) >> 2]),
          0 |
            (function(e, r) {
              return (
                (e |= 0),
                0 |
                  (0 |
                  (r = (r |= 0)
                    ? 0 |
                      (function(e, r, t) {
                        (r |= 0), (t |= 0);
                        var n,
                          i = 0,
                          a = 0,
                          o = 0,
                          u = 0,
                          f = 0,
                          l = 0,
                          s = 0,
                          c = 0,
                          _ = 0;
                        (n = (1794895138 + (0 | _e[(e |= 0) >> 2])) | 0),
                          (o = 0 | Ye(0 | _e[(e + 8) >> 2], n)),
                          (i = 0 | Ye(0 | _e[(e + 12) >> 2], n)),
                          (a = 0 | Ye(0 | _e[(e + 16) >> 2], n));
                        e: do {
                          if (
                            o >>> 0 < (r >>> 2) >>> 0 &&
                            ((_ = (r - (o << 2)) | 0),
                            (i >>> 0 < _ >>> 0) & (a >>> 0 < _ >>> 0)) &&
                            0 == ((3 & (a | i)) | 0)
                          ) {
                            for (_ = i >>> 2, c = a >>> 2, s = 0; ; ) {
                              if (
                                ((i =
                                  0 |
                                  Ye(
                                    0 |
                                      _e[
                                        (e +
                                          ((a =
                                            ((u =
                                              (l = (s + (f = o >>> 1)) | 0) <<
                                              1) +
                                              _) |
                                            0) <<
                                            2)) >>
                                          2
                                      ],
                                    n,
                                  )),
                                !(
                                  ((a =
                                    0 |
                                    Ye(
                                      0 | _e[(e + ((a + 1) << 2)) >> 2],
                                      n,
                                    )) >>>
                                    0 <
                                    r >>> 0) &
                                  (i >>> 0 < ((r - a) | 0) >>> 0)
                                ))
                              ) {
                                i = 0;
                                break e;
                              }
                              if (0 | ce[(e + (a + i)) >> 0]) {
                                i = 0;
                                break e;
                              }
                              if (!(i = 0 | Pe(t, (e + a) | 0))) break;
                              if (((i = (0 | i) < 0), 1 == (0 | o))) {
                                i = 0;
                                break e;
                              }
                              (s = i ? s : l), (o = i ? f : (o - f) | 0);
                            }
                            (a =
                              0 |
                              Ye(
                                0 | _e[(e + ((i = (u + c) | 0) << 2)) >> 2],
                                n,
                              )),
                              (i =
                                ((i =
                                  0 |
                                  Ye(0 | _e[(e + ((i + 1) << 2)) >> 2], n)) >>>
                                  0 <
                                  r >>> 0) &
                                  (a >>> 0 < ((r - i) | 0) >>> 0) &&
                                0 == (0 | ce[(e + (i + a)) >> 0])
                                  ? (e + i) | 0
                                  : 0);
                          } else i = 0;
                        } while (0);
                        return 0 | i;
                      })(0 | _e[r >> 2], 0 | _e[(r + 4) >> 2], e)
                    : 0)
                    ? r
                    : e)
              );
            })((t |= 0), (n |= 0)))
        );
      }
      function Me(e, r, t) {
        t |= 0;
        var n = 0;
        if (
          (0 < (r |= 0) >>> 0) |
          ((0 == (0 | r)) & (4294967295 < (e |= 0) >>> 0))
        ) {
          for (
            ;
            (n = 0 | Oe(0 | e, 0 | r, 10, 0)),
              (ce[(t = (t + -1) | 0) >> 0] = (255 & n) | 48),
              (e = 0 | Ke(0 | (n = e), 0 | r, 10, 0)),
              (9 < r >>> 0) | ((9 == (0 | r)) & (4294967295 < n >>> 0));

          )
            r = k;
          r = e;
        } else r = e;
        if (r)
          for (
            ;
            (ce[(t = (t + -1) | 0) >> 0] = (r >>> 0) % 10 | 48),
              !(r >>> 0 < 10);

          )
            r = ((r >>> 0) / 10) | 0;
        return 0 | t;
      }
      function me(e, r) {
        r |= 0;
        var t = 0,
          n = 0;
        return (e |= 0)
          ? 4294967231 < r >>> 0
            ? ((_e[(r = 296) >> 2] = 12), (r = 0) | r)
            : 0 |
              (t =
                0 |
                (function(e, r) {
                  r |= 0;
                  var t,
                    n,
                    i = 0,
                    a = 0,
                    o = 0,
                    u = 0,
                    f = 0,
                    l = 0,
                    s = 0,
                    c = 0;
                  if (
                    ((t =
                      ((e |= 0) +
                        (i = -8 & (s = 0 | _e[(c = (e + 4) | 0) >> 2]))) |
                      0),
                    !(3 & s))
                  )
                    return !(r >>> 0 < 256) &&
                      ((r + 4) | 0) >>> 0 <= i >>> 0 &&
                      ((i - r) | 0) >>> 0 <= (_e[1264] << 1) >>> 0
                      ? 0 | e
                      : (e = 0) | e;
                  if (r >>> 0 <= i >>> 0)
                    return (
                      (i = (i - r) | 0) >>> 0 <= 15 ||
                        ((l = (e + r) | 0),
                        (_e[c >> 2] = (1 & s) | r | 2),
                        (_e[(l + 4) >> 2] = 3 | i),
                        (_e[(c = (l + i + 4) | 0) >> 2] = 1 | _e[c >> 2]),
                        B(l, i)),
                      0 | e
                    );
                  if ((0 | t) == (0 | _e[1150]))
                    return (
                      (i = ((l = ((0 | _e[1147]) + i) | 0) - r) | 0),
                      (a = (e + r) | 0),
                      l >>> 0 <= r >>> 0
                        ? (e = 0) | e
                        : ((_e[c >> 2] = (1 & s) | r | 2),
                          (_e[(a + 4) >> 2] = 1 | i),
                          (_e[1150] = a),
                          (_e[1147] = i),
                          0 | e)
                    );
                  if ((0 | t) == (0 | _e[1149]))
                    return (o = ((0 | _e[1146]) + i) | 0) >>> 0 < r >>> 0
                      ? (e = 0) | e
                      : ((a = 1 & s),
                        15 < (i = (o - r) | 0) >>> 0
                          ? ((l = ((s = (e + r) | 0) + i) | 0),
                            (_e[c >> 2] = a | r | 2),
                            (_e[(s + 4) >> 2] = 1 | i),
                            (_e[l >> 2] = i),
                            (_e[(a = (l + 4) | 0) >> 2] = -2 & _e[a >> 2]),
                            (a = s))
                          : ((_e[c >> 2] = a | o | 2),
                            (_e[(a = (e + o + 4) | 0) >> 2] = 1 | _e[a >> 2]),
                            (i = a = 0)),
                        (_e[1146] = i),
                        (_e[1149] = a),
                        0 | e);
                  if ((2 & (a = 0 | _e[(4 + t) >> 2])) | 0) return (e = 0) | e;
                  if ((n = ((-8 & a) + i) | 0) >>> 0 < r >>> 0)
                    return (e = 0) | e;
                  (l = (n - r) | 0), (o = a >>> 3);
                  do {
                    if (a >>> 0 < 256) {
                      if (
                        ((a = 0 | _e[(8 + t) >> 2]),
                        (0 | (i = 0 | _e[(12 + t) >> 2])) == (0 | a))
                      ) {
                        _e[1144] = _e[1144] & ~(1 << o);
                        break;
                      }
                      (_e[(a + 12) >> 2] = i), (_e[(i + 8) >> 2] = a);
                      break;
                    }
                    (f = 0 | _e[(24 + t) >> 2]), (i = 0 | _e[(12 + t) >> 2]);
                    do {
                      if ((0 | i) == (0 | t)) {
                        if (
                          (i = 0 | _e[(a = ((o = (16 + t) | 0) + 4) | 0) >> 2])
                        )
                          u = a;
                        else {
                          if (!(i = 0 | _e[o >> 2])) {
                            o = 0;
                            break;
                          }
                          u = o;
                        }
                        for (;;)
                          if (0 | (a = 0 | _e[(o = (i + 20) | 0) >> 2]))
                            (i = a), (u = o);
                          else {
                            if (!(o = 0 | _e[(a = (i + 16) | 0) >> 2])) break;
                            (i = o), (u = a);
                          }
                        (_e[u >> 2] = 0), (o = i);
                      } else
                        (o = 0 | _e[(8 + t) >> 2]),
                          (_e[(o + 12) >> 2] = i),
                          (_e[(i + 8) >> 2] = o),
                          (o = i);
                    } while (0);
                    if (0 | f) {
                      if (
                        ((i = 0 | _e[(28 + t) >> 2]),
                        (0 | t) == (0 | _e[(a = (4880 + (i << 2)) | 0) >> 2]))
                      ) {
                        if (!(_e[a >> 2] = o)) {
                          _e[1145] = _e[1145] & ~(1 << i);
                          break;
                        }
                      } else if (
                        !(_e[
                          (f +
                            16 +
                            ((((0 | _e[(f + 16) >> 2]) != (0 | t)) & 1) <<
                              2)) >>
                            2
                        ] = o)
                      )
                        break;
                      (_e[(o + 24) >> 2] = f),
                        0 | (a = 0 | _e[(i = (16 + t) | 0) >> 2]) &&
                          ((_e[(o + 16) >> 2] = a), (_e[(a + 24) >> 2] = o)),
                        0 | (i = 0 | _e[(i + 4) >> 2]) &&
                          ((_e[(o + 20) >> 2] = i), (_e[(i + 24) >> 2] = o));
                    }
                  } while (0);
                  return (
                    (i = 1 & s),
                    l >>> 0 < 16
                      ? ((_e[c >> 2] = n | i | 2),
                        (_e[(c = (e + n + 4) | 0) >> 2] = 1 | _e[c >> 2]))
                      : ((s = (e + r) | 0),
                        (_e[c >> 2] = i | r | 2),
                        (_e[(s + 4) >> 2] = 3 | l),
                        (_e[(c = (s + l + 4) | 0) >> 2] = 1 | _e[c >> 2]),
                        B(s, l)),
                    0 | e
                  );
                })((e + -8) | 0, r >>> 0 < 11 ? 16 : (r + 11) & -8))
            ? 0 | (r = (t + 8) | 0)
            : (t = 0 | L(r))
            ? (K(
                0 | t,
                0 | e,
                0 |
                  ((n =
                    ((-8 & (n = 0 | _e[(e + -4) >> 2])) -
                      (0 == ((3 & n) | 0) ? 8 : 4)) |
                    0) >>>
                    0 <
                  r >>> 0
                    ? n
                    : r),
              ),
              x(e),
              0 | (r = t))
            : (r = 0) | r
          : 0 | (r = 0 | L(r));
      }
      function be(e, r, t, n) {
        (e |= 0), (t |= 0), (n |= 0);
        var i, a, o;
        (i = 0 | _e[(e = ((r |= 0) + 16) | 0) >> 2]),
          (a = (r + 36) | 0),
          (o = (r + 24) | 0);
        do {
          if (i) {
            if ((0 | i) != (0 | t)) {
              (_e[a >> 2] = 1 + (0 | _e[a >> 2])),
                (_e[o >> 2] = 2),
                (ce[(r + 54) >> 0] = 1);
              break;
            }
            2 == (0 | _e[o >> 2]) && (_e[o >> 2] = n);
          } else (_e[e >> 2] = t), (_e[o >> 2] = n), (_e[a >> 2] = 1);
        } while (0);
      }
      function he(e) {
        e |= 0;
        var r,
          t = 0,
          n = 0;
        (r = 0 | _e[119]), _e[(76 + r) >> 2];
        do {
          if ((0 | Ue(e, r)) < 0) e = 1;
          else {
            if (
              10 != (0 | ce[(75 + r) >> 0]) &&
              (n = 0 | _e[(t = (20 + r) | 0) >> 2]) >>> 0 <
                (0 | _e[(16 + r) >> 2]) >>> 0
            ) {
              (_e[t >> 2] = n + 1), (ce[n >> 0] = 10), (e = 0);
              break;
            }
            e = (0 | fe(r, 10)) < 0;
          }
        } while (0);
        return ((e << 31) >> 31) | 0;
      }
      function Se(e, r, t, n, i) {
        (e |= 0), (r |= 0);
        var a, o;
        if (
          ((Te = ((o = Te) + 256) | 0),
          (a = o),
          ((0 | (n |= 0)) < (0 | (t |= 0))) & (0 == ((73728 & (i |= 0)) | 0)))
        ) {
          if (
            (oe(0 | a, 0 | r, 0 | ((i = (t - n) | 0) >>> 0 < 256 ? i : 256)),
            255 < i >>> 0)
          ) {
            for (
              r = (t - n) | 0;
              He(e, a, 256), 255 < (i = (i + -256) | 0) >>> 0;

            );
            i = 255 & r;
          }
          He(e, a, i);
        }
        Te = o;
      }
      function Re(e) {
        var r = 0,
          t = 0;
        return (
          (t = 0 | ce[(r = ((e |= 0) + 74) | 0) >> 0]),
          (ce[r >> 0] = (t + 255) | t),
          0 |
            (e =
              8 & (r = 0 | _e[e >> 2])
                ? ((_e[e >> 2] = 32 | r), -1)
                : ((_e[(e + 8) >> 2] = 0),
                  (t = (_e[(e + 4) >> 2] = 0) | _e[(e + 44) >> 2]),
                  (_e[(e + 28) >> 2] = t),
                  (_e[(e + 20) >> 2] = t),
                  (_e[(e + 16) >> 2] = t + (0 | _e[(e + 48) >> 2])),
                  0))
        );
      }
      function Pe(e, r) {
        r |= 0;
        var t = 0,
          n = 0;
        if (
          ((t = 0 | ce[(e |= 0) >> 0]),
          (n = 0 | ce[r >> 0]),
          (t << 24) >> 24 == 0 || (t << 24) >> 24 != (n << 24) >> 24)
        )
          e = n;
        else {
          for (
            ;
            (r = (r + 1) | 0),
              (t = 0 | ce[(e = (e + 1) | 0) >> 0]),
              (n = 0 | ce[r >> 0]),
              (t << 24) >> 24 != 0 && (t << 24) >> 24 == (n << 24) >> 24;

          );
          e = n;
        }
        return ((255 & t) - (255 & e)) | 0;
      }
      function pe(e) {
        var r, t;
        return ((0 < (0 | (t = (((e |= 0) + 15) & -16) | 0))) &
          ((0 | (e = ((r = 0 | _e[_ >> 2]) + t) | 0)) < (0 | r))) |
          ((0 | e) < 0)
          ? (b(), p(12), -1)
          : (0 | (_e[_ >> 2] = e)) > (0 | m()) && 0 == (0 | M())
          ? ((_e[_ >> 2] = r), p(12), -1)
          : 0 | r;
      }
      function Ce(e) {
        var r = 0,
          t = 0,
          n = 0;
        if (
          ((t = 0 | _e[(e |= 0) >> 2]),
          (n = ((0 | ce[t >> 0]) - 48) | 0) >>> 0 < 10)
        )
          for (
            r = 0;
            (r = (n + ((10 * r) | 0)) | 0),
              (t = (t + 1) | 0),
              (_e[e >> 2] = t),
              (n = ((0 | ce[t >> 0]) - 48) | 0) >>> 0 < 10;

          );
        else r = 0;
        return 0 | r;
      }
      function ve(e, r, t, n) {
        if (
          ((t |= 0), (n |= 0), !((0 == (0 | (e |= 0))) & (0 == (0 | (r |= 0)))))
        )
          for (
            ;
            (ce[(t = (t + -1) | 0) >> 0] = 0 | de[(2122 + (15 & e)) >> 0] | n),
              !(
                (0 == (0 | (e = 0 | we(0 | e, 0 | r, 4)))) &
                (0 == (0 | (r = k)))
              );

          );
        return 0 | t;
      }
      function ye(e) {
        var r = 0;
        return (0 | (r = 0 | ce[(E + (255 & (e |= 0))) >> 0])) < 8
          ? 0 | r
          : (0 | (r = 0 | ce[(E + ((e >> 8) & 255)) >> 0])) < 8
          ? (r + 8) | 0
          : (0 | (r = 0 | ce[(E + ((e >> 16) & 255)) >> 0])) < 8
          ? (r + 16) | 0
          : (24 + (0 | ce[(E + (e >>> 24)) >> 0])) | 0;
      }
      function Ne(e, r, t, n) {
        (t |= 0), (n |= 0);
        var i = 0;
        (0 | _e[((r |= 0) + 4) >> 2]) == (0 | t) &&
          1 != (0 | _e[(i = (r + 28) | 0) >> 2]) &&
          (_e[i >> 2] = n);
      }
      function ke(e, r, t) {
        if (((t |= 0), !((0 == (0 | (e |= 0))) & (0 == (0 | (r |= 0))))))
          for (
            ;
            (ce[(t = (t + -1) | 0) >> 0] = (7 & e) | 48),
              !(
                (0 == (0 | (e = 0 | we(0 | e, 0 | r, 3)))) &
                (0 == (0 | (r = k)))
              );

          );
        return 0 | t;
      }
      function Oe(e, r, t, n) {
        var i, a;
        return (
          (Te = ((a = Te) + 16) | 0),
          G((e |= 0), (r |= 0), (t |= 0), (n |= 0), (i = 0 | a)),
          (Te = a),
          0 | ((k = 0 | _e[(4 + i) >> 2]), 0 | _e[i >> 2])
        );
      }
      function ge(e) {
        var r = 0;
        return (e |= 0)
          ? 0 |
              (1 == (0 | (e = 3 & (r = 0 | _e[(e + -4) >> 2])))
                ? 0
                : ((-8 & r) - (0 == (0 | e) ? 8 : 4)) | 0)
          : 0;
      }
      function Ie(e, r, t) {
        (e |= 0), (r |= 0), (t |= 0);
        var n, i, a, o, u;
        return (
          (Te = ((n = Te) + 16) | 0),
          (_e[(i = n) >> 2] = t),
          (t =
            0 |
            ((a = e),
            (o = r),
            (u = i),
            0 |
              (function(e, r, t, n) {
                (e |= 0), (r |= 0), (t |= 0), (n |= 0);
                var i,
                  a,
                  o = 0,
                  u = 0,
                  f = 0,
                  l = 0,
                  s = 0;
                for (
                  Te = ((a = Te) + 128) | 0,
                    o = (a + 124) | 0,
                    f = 604,
                    i = ((u = s = a) + 124) | 0;
                  (_e[u >> 2] = _e[f >> 2]),
                    (f = (f + 4) | 0),
                    (0 | (u = (u + 4) | 0)) < (0 | i);

                );
                return (
                  2147483646 < ((r + -1) | 0) >>> 0
                    ? r
                      ? ((_e[(r = 296) >> 2] = 75), (r = -1))
                      : ((e = o), (r = 1), (l = 4))
                    : (l = 4),
                  4 == (0 | l) &&
                    ((l = (l = (-2 - e) | 0) >>> 0 < r >>> 0 ? l : r),
                    (_e[(s + 48) >> 2] = l),
                    (_e[(o = (s + 20) | 0) >> 2] = e),
                    (r = ((_e[(s + 44) >> 2] = e) + l) | 0),
                    (_e[(e = (s + 16) | 0) >> 2] = r),
                    (_e[(s + 28) >> 2] = r),
                    (r = 0 | j(s, t, n)),
                    l &&
                      ((s = 0 | _e[o >> 2]),
                      (ce[
                        (s + ((((0 | s) == (0 | _e[e >> 2])) << 31) >> 31)) >> 0
                      ] = 0))),
                  (Te = a),
                  0 | r
                );
              })((a |= 0), 2147483647, (o |= 0), (u |= 0)))),
          (Te = n),
          0 | t
        );
      }
      function Le(e, r, t) {
        return (
          (e |= 0),
          (r |= 0),
          (0 | (t |= 0)) < 32
            ? ((k =
                (r << t) | ((e & (((1 << t) - 1) << (32 - t))) >>> (32 - t))),
              e << t)
            : ((k = e << (t - 32)), 0)
        );
      }
      function we(e, r, t) {
        return (
          (e |= 0),
          (r |= 0),
          (0 | (t |= 0)) < 32
            ? ((k = r >>> t), (e >>> t) | ((r & ((1 << t) - 1)) << (32 - t)))
            : (r >>> (t - 32)) | (k = 0)
        );
      }
      function De(e, r) {
        (e |= 0), (r |= 0);
        var t;
        (Te = ((t = Te) + 16) | 0),
          (_e[t >> 2] = r),
          j((r = 0 | _e[26]), e, t),
          (function(e, r) {
            var t,
              n = 0,
              i = 0,
              a = 0,
              o = 0;
            (n = t = 255 & (e |= 0)), _e[((r |= 0) + 76) >> 2], (o = 3);
            do {
              if (3 == (0 | o)) {
                if (
                  (0 | n) != (0 | ce[(r + 75) >> 0]) &&
                  (a = 0 | _e[(i = (r + 20) | 0) >> 2]) >>> 0 <
                    (0 | _e[(r + 16) >> 2]) >>> 0
                ) {
                  (_e[i >> 2] = a + 1), (ce[a >> 0] = t);
                  break;
                }
                n = 0 | fe(r, e);
              }
            } while (0);
          })(10, r),
          C();
      }
      function Fe(e, r, t, n) {
        return (
          0 |
          ((k = n =
            ((r |= 0) - (n |= 0) - (((e |= 0) >>> 0 < (t |= 0) >>> 0) | 0)) >>>
            0),
          ((e - t) >>> 0) | 0)
        );
      }
      function xe(e) {
        e = +e;
        var r;
        return (
          (N[d >> 3] = e),
          (r = 0 | _e[d >> 2]),
          (k = 0 | _e[(d + 4) >> 2]),
          0 | r
        );
      }
      function Be(e, r, t, n) {
        return (
          0 |
          ((k =
            ((r |= 0) +
              (n |= 0) +
              (((t = ((e |= 0) + (t |= 0)) >>> 0) >>> 0 < e >>> 0) | 0)) >>>
            0),
          0 | t)
        );
      }
      function Ge(e) {
        return (
          4294963200 < (e |= 0) >>> 0 && ((_e[296 >> 2] = 0 - e), (e = -1)),
          0 | e
        );
      }
      function Ue(e, r) {
        r |= 0;
        var t, n, i, a, o, u;
        return (
          (t =
            0 |
            (function(e) {
              var r,
                t = 0,
                n = 0;
              r = e |= 0;
              e: do {
                if (3 & r)
                  for (t = r; ; ) {
                    if (!(0 | ce[e >> 0])) {
                      e = t;
                      break e;
                    }
                    if (!(3 & (t = e = (e + 1) | 0))) {
                      n = 4;
                      break;
                    }
                  }
                else n = 4;
              } while (0);
              if (4 == (0 | n)) {
                for (
                  ;
                  !(
                    ((-2139062144 & (t = 0 | _e[e >> 2])) ^ -2139062144) &
                    (t + -16843009)
                  );

                )
                  e = (e + 4) | 0;
                if (((255 & t) << 24) >> 24)
                  for (; 0 != (0 | ce[(e = (e + 1) | 0) >> 0]); );
              }
              return (e - r) | 0;
            })((e |= 0))),
          ((((0 |
            ((n = e),
            (i = 1),
            (a = t),
            (o = r),
            (n |= 0),
            (o |= 0),
            (u = 0 | ie((a |= 0), (i |= 0))),
            (a = 0 == (0 | i) ? 0 : a),
            (0 | (_e[(o + 76) >> 2], (n = 0 | te(n, u, o)))) != (0 | u) &&
              (a = ((n >>> 0) / (i >>> 0)) | 0),
            0 | a)) !=
            (0 | t)) <<
            31) >>
            31) |
            0
        );
      }
      function He(e, r, t) {
        (r |= 0), (t |= 0), 32 & _e[(e |= 0) >> 2] || te(r, t, e);
      }
      function Ve(e) {
        return 0 | se((e |= 0), 0 | _e[105]);
      }
      function We(e, r) {
        return (
          (r |= 0),
          0 |
            (e = (e |= 0)
              ? 0 |
                (function(e, r) {
                  (e |= 0), (r |= 0);
                  do {
                    if (e) {
                      if (r >>> 0 < 128) {
                        (ce[e >> 0] = r), (e = 1);
                        break;
                      }
                      if (!(0 | _e[_e[420 >> 2] >> 2])) {
                        if (57216 == ((-128 & r) | 0)) {
                          (ce[e >> 0] = r), (e = 1);
                          break;
                        }
                        (_e[(e = 296) >> 2] = 84), (e = -1);
                        break;
                      }
                      if (r >>> 0 < 2048) {
                        (ce[e >> 0] = (r >>> 6) | 192),
                          (ce[(e + 1) >> 0] = (63 & r) | 128),
                          (e = 2);
                        break;
                      }
                      if ((r >>> 0 < 55296) | (57344 == ((-8192 & r) | 0))) {
                        (ce[e >> 0] = (r >>> 12) | 224),
                          (ce[(e + 1) >> 0] = ((r >>> 6) & 63) | 128),
                          (ce[(e + 2) >> 0] = (63 & r) | 128),
                          (e = 3);
                        break;
                      }
                      if (((r + -65536) | 0) >>> 0 < 1048576) {
                        (ce[e >> 0] = (r >>> 18) | 240),
                          (ce[(e + 1) >> 0] = ((r >>> 12) & 63) | 128),
                          (ce[(e + 2) >> 0] = ((r >>> 6) & 63) | 128),
                          (ce[(e + 3) >> 0] = (63 & r) | 128),
                          (e = 4);
                        break;
                      }
                      (_e[(e = 296) >> 2] = 84), (e = -1);
                      break;
                    }
                    e = 1;
                  } while (0);
                  return 0 | e;
                })(e, r)
              : 0)
        );
      }
      function Xe(e, r) {
        return ((0 | (e |= 0)) == (0 | (r |= 0))) | 0;
      }
      function Ye(e, r) {
        var t;
        return (t = 0 | ze(0 | (e |= 0))), 0 | (0 == (0 | (r |= 0)) ? e : t);
      }
      function Ke(e, r, t, n) {
        return 0 | G((e |= 0), (r |= 0), (t |= 0), (n |= 0), 0);
      }
      function ze(e) {
        return (
          ((255 & (e |= 0)) << 24) |
          (((e >> 8) & 255) << 16) |
          (((e >> 16) & 255) << 8) |
          (e >>> 24) |
          0
        );
      }
      function je(e, r, t, n, i, a) {
        A(6);
      }
      function Je(e, r, t, n, i) {
        A(1);
      }
      function Ze(e) {
        var r;
        (r = e |= 0), x((r |= 0));
      }
      function $e(e, r, t, n) {
        A(7);
      }
      function qe(e, r, t) {
        return A(0), 0;
      }
      function Qe(e, r) {
        return +(+(function e(r, t) {
          (r = +r), (t |= 0);
          var n,
            i,
            a = 0;
          switch (
            ((N[d >> 3] = r),
            2047 &
              (i =
                0 |
                we(
                  0 | (a = 0 | _e[d >> 2]),
                  0 | (n = 0 | _e[(d + 4) >> 2]),
                  52,
                )))
          ) {
            case 0:
              (a =
                0 != r
                  ? ((r = +e(0x10000000000000000 * r, t)),
                    ((0 | _e[t >> 2]) - 64) | 0)
                  : 0),
                (_e[t >> 2] = a);
              break;
            case 2047:
              break;
            default:
              (_e[t >> 2] = (2047 & i) - 1022),
                (_e[d >> 2] = a),
                (_e[(d + 4) >> 2] = (-2146435073 & n) | 1071644672),
                (r = +N[d >> 3]);
          }
          return +r;
        })((e = +e), (r |= 0)));
      }
      function er(e) {}
      function rr(e) {
        A(2);
      }
      function tr() {
        A(5);
      }
      var nr = [
          qe,
          z,
          function(e, r, t) {
            var n, i, a;
            return (
              (e |= 0),
              (r |= 0),
              (t |= 0),
              (Te = ((i = Te) + 32) | 0),
              (n = ((a = i) + 20) | 0),
              (_e[a >> 2] = _e[(e + 60) >> 2]),
              (_e[(a + 4) >> 2] = 0),
              (_e[(a + 8) >> 2] = r),
              (_e[(a + 12) >> 2] = n),
              (_e[(a + 16) >> 2] = t),
              (e =
                (0 | Ge(0 | g(140, 0 | a))) < 0
                  ? (_e[n >> 2] = -1)
                  : 0 | _e[n >> 2]),
              (Te = i),
              0 | e
            );
          },
          function(e, r, t) {
            (r |= 0), (t |= 0);
            var n,
              i = 0;
            return (
              (Te = ((n = Te) + 32) | 0),
              (i = n),
              (_e[((e |= 0) + 36) >> 2] = 1),
              0 == ((64 & _e[e >> 2]) | 0) &&
                ((_e[i >> 2] = _e[(e + 60) >> 2]),
                (_e[(i + 4) >> 2] = 21523),
                (_e[(i + 8) >> 2] = n + 16),
                0 | S(54, 0 | i)) &&
                (ce[(e + 75) >> 0] = -1),
              (i = 0 | z(e, r, t)),
              (Te = n),
              0 | i
            );
          },
          function(e, r, t) {
            var n, i;
            return (
              (r |= 0),
              (t |= 0),
              K(
                0 | (i = 0 | _e[(n = ((e |= 0) + 20) | 0) >> 2]),
                0 | r,
                0 |
                  (e =
                    t >>> 0 < (e = ((0 | _e[(e + 16) >> 2]) - i) | 0) >>> 0
                      ? t
                      : e),
              ),
              (_e[n >> 2] = (0 | _e[n >> 2]) + e),
              0 | t
            );
          },
          function(e, r, t) {
            t |= 0;
            var n,
              i,
              a = 0,
              o = 0;
            if (
              ((Te = ((i = Te) + 64) | 0), (n = i), 0 | Xe((e |= 0), (r |= 0)))
            )
              r = 1;
            else if (0 != (0 | r) && 0 != (0 | (o = 0 | J(r, 32, 16, 0)))) {
              for (
                a = ((r = (n + 4) | 0) + 52) | 0;
                (0 | (r = (r + 4) | (_e[r >> 2] = 0))) < (0 | a);

              );
              (_e[n >> 2] = o),
                (_e[(n + 8) >> 2] = e),
                (_e[(n + 12) >> 2] = -1),
                (_e[(n + 48) >> 2] = 1),
                sr[3 & _e[(28 + (0 | _e[o >> 2])) >> 2]](
                  o,
                  n,
                  0 | _e[t >> 2],
                  1,
                ),
                (r =
                  1 == (0 | _e[(n + 24) >> 2])
                    ? ((_e[t >> 2] = _e[(n + 16) >> 2]), 1)
                    : 0);
            } else r = 0;
            return (Te = i), 0 | r;
          },
          qe,
          qe,
        ],
        ir = [
          Je,
          function(e, r, t, n, i) {
            (e |= 0), (r |= 0), (t |= 0), (n |= 0);
            var a = 0;
            do {
              if (0 | Xe(e, 0 | _e[(r + 8) >> 2])) Ne(0, r, t, n);
              else if (0 | Xe(e, 0 | _e[r >> 2])) {
                if (
                  ((e = (r + 32) | 0),
                  (0 | _e[(r + 16) >> 2]) != (0 | t) &&
                    (0 | _e[(a = (r + 20) | 0) >> 2]) != (0 | t))
                ) {
                  (_e[e >> 2] = n),
                    (_e[a >> 2] = t),
                    (_e[(n = (r + 40) | 0) >> 2] = 1 + (0 | _e[n >> 2])),
                    1 == (0 | _e[(r + 36) >> 2]) &&
                      2 == (0 | _e[(r + 24) >> 2]) &&
                      (ce[(r + 54) >> 0] = 1),
                    (_e[(r + 44) >> 2] = 4);
                  break;
                }
                1 == (0 | n) && (_e[e >> 2] = 1);
              }
            } while (0);
          },
          function(e, r, t, n, i) {
            (e |= 0), (r |= 0), (t |= 0), (n |= 0), (i |= 0);
            var a = 0,
              o = 0,
              u = 0,
              f = 0;
            do {
              if (0 | Xe(e, 0 | _e[(r + 8) >> 2])) Ne(0, r, t, n);
              else {
                if (((a = (e + 8) | 0), !(0 | Xe(e, 0 | _e[r >> 2])))) {
                  (u = 0 | _e[a >> 2]),
                    ir[3 & _e[(24 + (0 | _e[u >> 2])) >> 2]](u, r, t, n, i);
                  break;
                }
                if (
                  ((e = (r + 32) | 0),
                  (0 | _e[(r + 16) >> 2]) != (0 | t) &&
                    (0 | _e[(o = (r + 20) | 0) >> 2]) != (0 | t))
                ) {
                  if (
                    ((_e[e >> 2] = n), 4 == (0 | _e[(n = (r + 44) | 0) >> 2]))
                  )
                    break;
                  (ce[(e = (r + 52) | 0) >> 0] = 0),
                    (a = (ce[(f = (r + 53) | 0) >> 0] = 0) | _e[a >> 2]),
                    lr[3 & _e[(20 + (0 | _e[a >> 2])) >> 2]](a, r, t, t, 1, i),
                    0 | ce[f >> 0]
                      ? 0 | ce[e >> 0]
                        ? (e = 3)
                        : ((e = 3), (u = 11))
                      : ((e = 4), (u = 11)),
                    11 == (0 | u) &&
                      ((_e[o >> 2] = t),
                      (_e[(f = (r + 40) | 0) >> 2] = 1 + (0 | _e[f >> 2])),
                      1 == (0 | _e[(r + 36) >> 2]) &&
                        2 == (0 | _e[(r + 24) >> 2]) &&
                        (ce[(r + 54) >> 0] = 1)),
                    (_e[n >> 2] = e);
                  break;
                }
                1 == (0 | n) && (_e[e >> 2] = 1);
              }
            } while (0);
          },
          Je,
        ],
        ar = [
          rr,
          er,
          Ze,
          er,
          er,
          Ze,
          function(e) {
            var r;
            (Te = ((r = Te) + 16) | 0),
              x((e |= 0)),
              0 | R(0 | _e[1285], 0) ? De(4406, r) : (Te = r);
          },
          rr,
        ],
        or = [
          function(e) {
            return A(3), 0;
          },
          function(e) {
            var r, t, n;
            return (
              (Te = ((r = Te) + 16) | 0),
              (t = r),
              (e = 0 | ((n = 0 | _e[((e |= 0) + 60) >> 2]), 0 | (n |= 0))),
              (_e[t >> 2] = e),
              (e = 0 | Ge(0 | P(6, 0 | t))),
              (Te = r),
              0 | e
            );
          },
        ],
        ur = [
          function(e, r, t) {
            A(4);
          },
        ],
        fr = [
          tr,
          function() {
            var e,
              r,
              t,
              n = 0,
              i = 0,
              a = 0,
              o = 0,
              u = 0;
            (Te = ((o = Te) + 48) | 0),
              (t = (o + 32) | 0),
              (e = (o + 24) | 0),
              (u = (o + 16) | 0),
              (o = ((r = o) + 36) | 0),
              0 |
                (n =
                  0 |
                  (function() {
                    var e,
                      r = 0;
                    {
                      if (((Te = ((e = Te) + 16) | 0), !(0 | v(5136, 2))))
                        return (r = 0 | h(0 | _e[1285])), (Te = e), 0 | r;
                      De(4307, e);
                    }
                    return 0;
                  })()) &&
                0 | (a = 0 | _e[n >> 2]) &&
                ((1126902528 ==
                  ((-256 & (i = 0 | _e[(n = (a + 48) | 0) >> 2])) | 0)) &
                  (1129074247 == (0 | (n = 0 | _e[(n + 4) >> 2]))) ||
                  ((_e[e >> 2] = 4168), De(4118, e)),
                (n =
                  (1126902529 == (0 | i)) & (1129074247 == (0 | n))
                    ? 0 | _e[(a + 44) >> 2]
                    : (a + 80) | 0),
                (_e[o >> 2] = n),
                (a = 0 | _e[a >> 2]),
                (n = 0 | _e[(a + 4) >> 2]),
                0 | nr[7 & _e[(16 + (0 | _e[2])) >> 2]](8, a, o)
                  ? ((u = 0 | _e[o >> 2]),
                    (u = 0 | or[1 & _e[(8 + (0 | _e[u >> 2])) >> 2]](u)),
                    (_e[r >> 2] = 4168),
                    (_e[(r + 4) >> 2] = n),
                    (_e[(r + 8) >> 2] = u),
                    De(4032, r))
                  : ((_e[u >> 2] = 4168), (_e[(u + 4) >> 2] = n), De(4077, u))),
              De(4156, t);
          },
          function() {
            var e;
            (Te = ((e = Te) + 16) | 0), 0 | O(5140, 6) ? De(4356, e) : (Te = e);
          },
          tr,
        ],
        lr = [
          je,
          function(e, r, t, n, i, a) {
            (t |= 0),
              (n |= 0),
              (i |= 0),
              0 | Xe((e |= 0), 0 | _e[((r |= 0) + 8) >> 2]) &&
                ue(0, r, t, n, i);
          },
          function(e, r, t, n, i, a) {
            (t |= 0),
              (n |= 0),
              (i |= 0),
              (a |= 0),
              0 | Xe((e |= 0), 0 | _e[((r |= 0) + 8) >> 2])
                ? ue(0, r, t, n, i)
                : ((e = 0 | _e[(e + 8) >> 2]),
                  lr[3 & _e[(20 + (0 | _e[e >> 2])) >> 2]](e, r, t, n, i, a));
          },
          je,
        ],
        sr = [
          $e,
          function(e, r, t, n) {
            (t |= 0),
              (n |= 0),
              0 | Xe((e |= 0), 0 | _e[((r |= 0) + 8) >> 2]) && be(0, r, t, n);
          },
          function(e, r, t, n) {
            (t |= 0),
              (n |= 0),
              0 | Xe((e |= 0), 0 | _e[((r |= 0) + 8) >> 2])
                ? be(0, r, t, n)
                : ((e = 0 | _e[(e + 8) >> 2]),
                  sr[3 & _e[(28 + (0 | _e[e >> 2])) >> 2]](e, r, t, n));
          },
          $e,
        ];
      return {
        stackSave: function() {
          return 0 | Te;
        },
        _i64Subtract: Fe,
        _crn_get_bytes_per_block: function(e, r) {
          (e |= 0), (r |= 0);
          var t,
            n,
            i,
            a = 0;
          switch (
            ((Te = ((i = Te) + 576) | 0),
            (n = (i + 40) | 0),
            (t = (i + 56) | 0),
            (_e[(a = i) >> 2] = 40),
            q(e, r, a),
            (e = 0 | _e[((r = (a + 32) | 0) + 4) >> 2]),
            0 | _e[r >> 2])
          ) {
            case 0:
              if (!e) return (Te = i), 0 | (a = 8);
              e = 14;
              break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              e = e ? 14 : 13;
              break;
            case 9:
            case 10:
              if (!e) return (Te = i), 0 | (a = 8);
              e = 14;
              break;
            default:
              e = 14;
          }
          return 13 == (0 | e)
            ? ((Te = i), 0 | (a = 16))
            : 14 == (0 | e)
            ? ((_e[n >> 2] = 866),
              (_e[(4 + n) >> 2] = 2672),
              (_e[(8 + n) >> 2] = 1251),
              Ie(t, 812, n),
              he(t),
              (Te = i),
              (a = 0) | a)
            : 0;
        },
        setThrew: function(e, r) {},
        dynCall_viii: function(e, r, t, n) {
          (r |= 0), (t |= 0), (n |= 0), ur[0 & (e |= 0)](0 | r, 0 | t, 0 | n);
        },
        _bitshift64Lshr: we,
        _bitshift64Shl: Le,
        dynCall_viiii: function(e, r, t, n, i) {
          (r |= 0),
            (t |= 0),
            (n |= 0),
            (i |= 0),
            sr[3 & (e |= 0)](0 | r, 0 | t, 0 | n, 0 | i);
        },
        setTempRet0: function(e) {
          k = e |= 0;
        },
        _crn_decompress: function(e, r, t, n, i, a) {
          (e |= 0), (r |= 0), (t |= 0), (n |= 0), (i |= 0), (a |= 0);
          var o,
            u,
            f,
            l,
            s = 0,
            c = 0,
            _ = 0,
            d = 0,
            E = 0;
          switch (
            ((Te = ((l = Te) + 592) | 0),
            (f = (l + 56) | 0),
            (_ = (l + 40) | 0),
            (o = (l + 72) | 0),
            (u = ((E = l) + 68) | 0),
            (_e[E >> 2] = 40),
            q(e, r, E),
            (s = (0 | _e[(E + 4) >> 2]) >>> i),
            (c = (0 | _e[(E + 8) >> 2]) >>> i),
            (n = 0 | _e[((E = (E + 32) | 0) + 4) >> 2]),
            0 | _e[E >> 2])
          ) {
            case 0:
              n ? (d = 14) : (E = 8);
              break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              d = n ? 14 : 13;
              break;
            case 9:
            case 10:
              n ? (d = 14) : (E = 8);
              break;
            default:
              d = 14;
          }
          13 == (0 | d)
            ? (E = 16)
            : 14 == (0 | d) &&
              ((_e[_ >> 2] = 866),
              (_e[(_ + 4) >> 2] = 2672),
              (_e[(_ + 8) >> 2] = 1251),
              Ie(o, 812, _),
              he(o),
              (E = 0)),
            (_e[u >> 2] = t),
            (d =
              0 |
              (function(e, r) {
                var t,
                  n,
                  i,
                  a,
                  o,
                  u,
                  f,
                  l,
                  s,
                  c,
                  _ = 0,
                  d = 0;
                if (
                  ((Te = ((c = Te) + 528) | 0),
                  (u = ((s = c) + 16) | 0),
                  (0 == (0 | (e |= 0))) | ((r |= 0) >>> 0 < 62))
                )
                  return (Te = c), (d = 0) | d;
                if (!(f = 0 | ae(300, 0))) return (Te = c), (d = 0) | d;
                (_e[f >> 2] = 519686845),
                  (_e[(4 + f) >> 2] = 0),
                  (_e[(8 + f) >> 2] = 0),
                  (l = (88 + f) | 0),
                  (t = (136 + f) | 0),
                  (n = (160 + f) | 0),
                  (i = (184 + f) | 0),
                  (a = (208 + f) | 0),
                  (o = (232 + f) | 0),
                  (_e[(_ = (252 + f) | 0) >> 2] = 0),
                  (_e[(_ + 4) >> 2] = 0),
                  (_e[(_ + 8) >> 2] = 0),
                  (ce[(_ + 12) >> 0] = 0),
                  (_e[(_ = (268 + f) | 0) >> 2] = 0),
                  (_e[(_ + 4) >> 2] = 0),
                  (_e[(_ + 8) >> 2] = 0),
                  (ce[(_ + 12) >> 0] = 0),
                  (_e[(_ = (284 + f) | 0) >> 2] = 0),
                  (_e[(_ + 4) >> 2] = 0),
                  (_e[(_ + 8) >> 2] = 0),
                  (ce[(_ + 12) >> 0] = 0),
                  (d = (44 + (_ = l)) | 0);
                for (
                  ;
                  (_e[_ >> 2] = 0), (_ = (_ + 4) | 0), (0 | _) < (0 | d);

                );
                if (
                  ((ce[(44 + l) >> 0] = 0),
                  (_e[t >> 2] = 0),
                  (_e[(4 + t) >> 2] = 0),
                  (_e[(8 + t) >> 2] = 0),
                  (_e[(12 + t) >> 2] = 0),
                  (_e[(16 + t) >> 2] = 0),
                  (ce[(20 + t) >> 0] = 0),
                  (_e[n >> 2] = 0),
                  (_e[(4 + n) >> 2] = 0),
                  (_e[(8 + n) >> 2] = 0),
                  (_e[(12 + n) >> 2] = 0),
                  (_e[(16 + n) >> 2] = 0),
                  (ce[(20 + n) >> 0] = 0),
                  (_e[i >> 2] = 0),
                  (_e[(4 + i) >> 2] = 0),
                  (_e[(8 + i) >> 2] = 0),
                  (_e[(12 + i) >> 2] = 0),
                  (_e[(16 + i) >> 2] = 0),
                  (ce[(20 + i) >> 0] = 0),
                  (_e[a >> 2] = 0),
                  (_e[(4 + a) >> 2] = 0),
                  (_e[(8 + a) >> 2] = 0),
                  (_e[(12 + a) >> 2] = 0),
                  (_e[(16 + a) >> 2] = 0),
                  (ce[(20 + a) >> 0] = 0),
                  (_e[o >> 2] = 0),
                  (_e[(4 + o) >> 2] = 0),
                  (_e[(8 + o) >> 2] = 0),
                  (_e[(12 + o) >> 2] = 0),
                  (ce[(16 + o) >> 0] = 0),
                  0 |
                    (function(e, r, t) {
                      e |= 0;
                      var n = 0,
                        i = 0;
                      if (
                        !(
                          (0 == (0 | (r |= 0))) | ((t |= 0) >>> 0 < 74) ||
                          18552 !=
                            (((0 | de[r >> 0]) << 8) | 0 | de[(r + 1) >> 0] | 0)
                        ) &&
                        74 <=
                          (((0 | de[(r + 2) >> 0]) << 8) |
                            0 |
                            de[(r + 3) >> 0]) >>>
                            0 &&
                        (((0 | de[(r + 7) >> 0]) << 16) |
                          ((0 | de[(r + 6) >> 0]) << 24) |
                          ((0 | de[(r + 8) >> 0]) << 8) |
                          0 |
                          de[(r + 9) >> 0]) >>>
                          0 <=
                          t >>> 0
                      ) {
                        if (
                          ((_e[(n = (e + 88) | 0) >> 2] = r),
                          (_e[(e + 4) >> 2] = r),
                          (_e[(e + 8) >> 2] = t),
                          !(
                            0 |
                            (function(e) {
                              var r,
                                t = 0,
                                n = 0,
                                i = 0;
                              if (
                                ((i = (92 + (e |= 0)) | 0),
                                (n = 0 | _e[(r = (e + 88) | 0) >> 2]),
                                (t =
                                  ((0 | _e[(e + 4) >> 2]) +
                                    (((0 | de[(n + 68) >> 0]) << 8) |
                                      ((0 | de[(n + 67) >> 0]) << 16) |
                                      0 |
                                      de[(n + 69) >> 0])) |
                                  0),
                                !(n =
                                  ((0 | de[(n + 65) >> 0]) << 8) |
                                  0 |
                                  de[(n + 66) >> 0]))
                              )
                                return (i = 0) | i;
                              if (
                                ((_e[i >> 2] = t),
                                (_e[(e + 96) >> 2] = t),
                                (_e[(e + 104) >> 2] = n),
                                (_e[(e + 100) >> 2] = t + n),
                                (_e[(e + 108) >> 2] = 0),
                                (_e[(e + 112) >> 2] = 0),
                                !(0 | W(i, (e + 116) | 0)))
                              )
                                return (i = 0) | i;
                              t = 0 | _e[r >> 2];
                              do {
                                if (
                                  ((0 | de[(t + 39) >> 0]) << 8) |
                                  0 |
                                  de[(t + 40) >> 0]
                                ) {
                                  if (!(0 | W(i, (e + 140) | 0)))
                                    return (i = 0) | i;
                                  if (0 | W(i, (e + 188) | 0)) {
                                    t = 0 | _e[r >> 2];
                                    break;
                                  }
                                  return (i = 0) | i;
                                }
                                if (
                                  !(
                                    ((0 | de[(t + 55) >> 0]) << 8) |
                                    0 |
                                    de[(t + 56) >> 0]
                                  )
                                )
                                  return (i = 0) | i;
                              } while (0);
                              if (
                                ((0 | de[(t + 55) >> 0]) << 8) |
                                0 |
                                de[(t + 56) >> 0] |
                                0
                              ) {
                                if (!(0 | W(i, (e + 164) | 0)))
                                  return (i = 0) | i;
                                if (!(0 | W(i, (e + 212) | 0)))
                                  return (i = 0) | i;
                              }
                              return 0 | (i = 1);
                            })(e)
                          ))
                        )
                          return (i = 0) | i;
                        if (
                          ((r = 0 | _e[n >> 2]),
                          ((0 | de[(r + 39) >> 0]) << 8) | 0 | de[(r + 40) >> 0]
                            ? 0 |
                                (function(e) {
                                  var r,
                                    t,
                                    n,
                                    i,
                                    a,
                                    o = 0,
                                    u = 0,
                                    f = 0,
                                    l = 0,
                                    s = 0,
                                    c = 0,
                                    _ = 0,
                                    d = 0;
                                  if (
                                    ((Te = ((a = Te) + 576) | 0),
                                    (l = ((c = a) + 64) | 0),
                                    (d = (a + 16) | 0),
                                    (o =
                                      0 | _e[(f = (88 + (e |= 0)) | 0) >> 2]),
                                    (i =
                                      ((0 | de[(o + 39) >> 0]) << 8) |
                                      0 |
                                      de[(o + 40) >> 0]),
                                    (t = (e + 236) | 0),
                                    (0 |
                                      (u = 0 | _e[(s = (e + 240) | 0) >> 2])) !=
                                      (0 | i))
                                  ) {
                                    if (u >>> 0 <= i >>> 0) {
                                      do {
                                        if (
                                          (0 | _e[(e + 244) >> 2]) >>> 0 <
                                          i >>> 0
                                        ) {
                                          if (
                                            0 |
                                            X(
                                              t,
                                              i,
                                              ((u + 1) | 0) == (0 | i),
                                              4,
                                              0,
                                            )
                                          ) {
                                            o = 0 | _e[s >> 2];
                                            break;
                                          }
                                          return (
                                            (ce[(e + 248) >> 0] = 1),
                                            (Te = a),
                                            (d = 0) | d
                                          );
                                        }
                                        o = u;
                                      } while (0);
                                      oe(
                                        ((0 | _e[t >> 2]) + (o << 2)) | 0,
                                        0,
                                        ((i - o) << 2) | 0,
                                      ),
                                        (o = 0 | _e[f >> 2]);
                                    }
                                    _e[s >> 2] = i;
                                  }
                                  if (
                                    ((n = (e + 92) | 0),
                                    (u =
                                      ((0 | _e[(e + 4) >> 2]) +
                                        (((0 | de[(o + 34) >> 0]) << 8) |
                                          ((0 | de[(o + 33) >> 0]) << 16) |
                                          0 |
                                          de[(o + 35) >> 0])) |
                                      0),
                                    !(o =
                                      ((0 | de[(o + 37) >> 0]) << 8) |
                                      ((0 | de[(o + 36) >> 0]) << 16) |
                                      0 |
                                      de[(o + 38) >> 0]))
                                  )
                                    return (Te = a), (d = 0) | d;
                                  if (
                                    ((_e[n >> 2] = u),
                                    (_e[(e + 96) >> 2] = u),
                                    (_e[(e + 104) >> 2] = o),
                                    (_e[(e + 100) >> 2] = u + o),
                                    (_e[(e + 108) >> 2] = 0),
                                    (_e[(e + 112) >> 2] = 0),
                                    (_ = (d + 20) | 0),
                                    (_e[d >> 2] = 0),
                                    (_e[(d + 4) >> 2] = 0),
                                    (_e[(d + 8) >> 2] = 0),
                                    (_e[(d + 12) >> 2] = 0),
                                    (ce[(d + 16) >> 0] = 0),
                                    (r = (d + 24) | 0),
                                    (_e[(d + 44) >> 2] = 0),
                                    (_e[_ >> 2] = 0),
                                    (_e[(_ + 4) >> 2] = 0),
                                    (_e[(_ + 8) >> 2] = 0),
                                    (_e[(_ + 12) >> 2] = 0),
                                    (_e[(_ + 16) >> 2] = 0),
                                    (ce[(_ + 20) >> 0] = 0),
                                    0 | W(n, d) && 0 | W(n, r))
                                  )
                                    if (
                                      (0 | _e[s >> 2] ||
                                        ((_e[c >> 2] = 866),
                                        (_e[(c + 4) >> 2] = 910),
                                        (_e[(c + 8) >> 2] = 1497),
                                        Ie(l, 812, c),
                                        he(l)),
                                      i)
                                    )
                                      for (
                                        u = (_ = c = 0) | _e[t >> 2],
                                          s = l = o = e = f = 0;
                                        ;

                                      ) {
                                        if (
                                          ((c = ((0 | Ae(n, d)) + c) & 31),
                                          (s = ((0 | Ae(n, r)) + s) & 63),
                                          (l = ((0 | Ae(n, d)) + l) & 31),
                                          (o = ((0 | Ae(n, d)) + o) | 0),
                                          (e = ((0 | Ae(n, r)) + e) & 63),
                                          (f = ((0 | Ae(n, d)) + f) & 31),
                                          (_e[u >> 2] =
                                            (s << 5) |
                                            (c << 11) |
                                            l |
                                            (o << 27) |
                                            (e << 21) |
                                            (f << 16)),
                                          i >>> 0 <= (_ = (_ + 1) | 0) >>> 0)
                                        ) {
                                          o = 1;
                                          break;
                                        }
                                        (u = (u + 4) | 0), (o &= 31);
                                      }
                                    else o = 1;
                                  else o = 0;
                                  return (
                                    ne((d + 24) | 0),
                                    ne(d),
                                    (Te = a),
                                    0 | (d = o)
                                  );
                                })(e) &&
                              0 |
                                (function(e) {
                                  var r,
                                    t,
                                    n,
                                    i,
                                    a,
                                    o,
                                    u = 0,
                                    f = 0,
                                    l = 0,
                                    s = 0,
                                    c = 0,
                                    _ = 0,
                                    d = 0,
                                    E = 0,
                                    T = 0,
                                    A = 0,
                                    M = 0,
                                    m = 0,
                                    b = 0,
                                    h = 0,
                                    S = 0,
                                    R = 0,
                                    P = 0,
                                    p = 0,
                                    C = 0,
                                    v = 0,
                                    y = 0,
                                    N = 0,
                                    k = 0,
                                    O = 0,
                                    g = 0,
                                    I = 0,
                                    L = 0,
                                    w = 0,
                                    D = 0,
                                    F = 0,
                                    x = 0,
                                    B = 0,
                                    G = 0;
                                  if (
                                    ((Te = ((o = Te) + 1008) | 0),
                                    (c = ((_ = o) + 496) | 0),
                                    (C = (o + 472) | 0),
                                    (n = (o + 276) | 0),
                                    (i = (o + 80) | 0),
                                    (a = (o + 16) | 0),
                                    (f = 0 | _e[((e |= 0) + 88) >> 2]),
                                    (r =
                                      ((0 | de[(f + 47) >> 0]) << 8) |
                                      0 |
                                      de[(f + 48) >> 0]),
                                    (t = (e + 92) | 0),
                                    (u =
                                      ((0 | _e[(e + 4) >> 2]) +
                                        (((0 | de[(f + 42) >> 0]) << 8) |
                                          ((0 | de[(f + 41) >> 0]) << 16) |
                                          0 |
                                          de[(f + 43) >> 0])) |
                                      0),
                                    !(f =
                                      ((0 | de[(f + 45) >> 0]) << 8) |
                                      ((0 | de[(f + 44) >> 0]) << 16) |
                                      0 |
                                      de[(f + 46) >> 0]))
                                  )
                                    return (Te = o), (C = 0) | C;
                                  if (
                                    ((_e[t >> 2] = u),
                                    (_e[(e + 96) >> 2] = u),
                                    (_e[(e + 104) >> 2] = f),
                                    (_e[(e + 100) >> 2] = u + f),
                                    (_e[(e + 108) >> 2] = 0),
                                    (_e[(e + 112) >> 2] = 0),
                                    (_e[(C + 20) >> 2] = 0),
                                    (_e[C >> 2] = 0),
                                    (_e[(C + 4) >> 2] = 0),
                                    (_e[(C + 8) >> 2] = 0),
                                    (_e[(C + 12) >> 2] = 0),
                                    (ce[(C + 16) >> 0] = 0) | W(t, C))
                                  ) {
                                    for (
                                      u = 0, l = f = -3;
                                      (_e[(n + (u << 2)) >> 2] = l),
                                        (_e[(i + (u << 2)) >> 2] = f),
                                        (s = 2 < (0 | l)),
                                        49 != (0 | (u = (u + 1) | 0));

                                    )
                                      (f = ((1 & s) + f) | 0),
                                        (l = s ? -3 : (l + 1) | 0);
                                    for (
                                      f = ((u = a) + 64) | 0;
                                      (0 | (u = (u + 4) | (_e[u >> 2] = 0))) <
                                      (0 | f);

                                    );
                                    (l = (e + 252) | 0),
                                      (u = 0 | _e[(f = (e + 256) | 0) >> 2]);
                                    e: do {
                                      if ((0 | u) == (0 | r)) d = 13;
                                      else {
                                        if (u >>> 0 <= r >>> 0) {
                                          do {
                                            if (
                                              (0 | _e[(e + 260) >> 2]) >>> 0 <
                                              r >>> 0
                                            ) {
                                              if (
                                                0 |
                                                X(
                                                  l,
                                                  r,
                                                  ((u + 1) | 0) == (0 | r),
                                                  4,
                                                  0,
                                                )
                                              ) {
                                                u = 0 | _e[f >> 2];
                                                break;
                                              }
                                              (ce[(e + 264) >> 0] = 1), (u = 0);
                                              break e;
                                            }
                                          } while (0);
                                          oe(
                                            ((0 | _e[l >> 2]) + (u << 2)) | 0,
                                            0,
                                            ((r - u) << 2) | 0,
                                          );
                                        }
                                        (_e[f >> 2] = r), (d = 13);
                                      }
                                    } while (0);
                                    do {
                                      if (13 == (0 | d)) {
                                        if (!r) {
                                          (_e[_ >> 2] = 866),
                                            (_e[(_ + 4) >> 2] = 910),
                                            (_e[(_ + 8) >> 2] = 1497),
                                            Ie(c, 812, _),
                                            he(c),
                                            (u = 1);
                                          break;
                                        }
                                        for (
                                          e = (4 + a) | 0,
                                            c = (8 + a) | 0,
                                            _ = (12 + a) | 0,
                                            d = (16 + a) | 0,
                                            E = (20 + a) | 0,
                                            T = (24 + a) | 0,
                                            A = (28 + a) | 0,
                                            M = (32 + a) | 0,
                                            m = (36 + a) | 0,
                                            b = (40 + a) | 0,
                                            h = (44 + a) | 0,
                                            S = (48 + a) | 0,
                                            R = (52 + a) | 0,
                                            P = (56 + a) | 0,
                                            p = (60 + a) | 0,
                                            u = (s = 0) | _e[l >> 2],
                                            f = 0 | _e[e >> 2],
                                            l = 0 | _e[a >> 2];
                                          (B = 0 | Ae(t, C)),
                                            (l =
                                              (l +
                                                (0 | _e[(n + (B << 2)) >> 2])) &
                                              3),
                                            (f =
                                              (f +
                                                (0 | _e[(i + (B << 2)) >> 2])) &
                                              3),
                                            (B = 0 | Ae(t, C)),
                                            (G =
                                              ((0 | _e[c >> 2]) +
                                                (0 | _e[(n + (B << 2)) >> 2])) &
                                              3),
                                            (_e[c >> 2] = G),
                                            (B =
                                              ((0 | _e[_ >> 2]) +
                                                (0 | _e[(i + (B << 2)) >> 2])) &
                                              3),
                                            (_e[_ >> 2] = B),
                                            (F = 0 | Ae(t, C)),
                                            (x =
                                              ((0 | _e[d >> 2]) +
                                                (0 | _e[(n + (F << 2)) >> 2])) &
                                              3),
                                            (_e[d >> 2] = x),
                                            (F =
                                              ((0 | _e[E >> 2]) +
                                                (0 | _e[(i + (F << 2)) >> 2])) &
                                              3),
                                            (_e[E >> 2] = F),
                                            (w = 0 | Ae(t, C)),
                                            (D =
                                              ((0 | _e[T >> 2]) +
                                                (0 | _e[(n + (w << 2)) >> 2])) &
                                              3),
                                            (_e[T >> 2] = D),
                                            (w =
                                              ((0 | _e[A >> 2]) +
                                                (0 | _e[(i + (w << 2)) >> 2])) &
                                              3),
                                            (_e[A >> 2] = w),
                                            (I = 0 | Ae(t, C)),
                                            (L =
                                              ((0 | _e[M >> 2]) +
                                                (0 | _e[(n + (I << 2)) >> 2])) &
                                              3),
                                            (_e[M >> 2] = L),
                                            (I =
                                              ((0 | _e[m >> 2]) +
                                                (0 | _e[(i + (I << 2)) >> 2])) &
                                              3),
                                            (_e[m >> 2] = I),
                                            (O = 0 | Ae(t, C)),
                                            (g =
                                              ((0 | _e[b >> 2]) +
                                                (0 | _e[(n + (O << 2)) >> 2])) &
                                              3),
                                            (_e[b >> 2] = g),
                                            (O =
                                              ((0 | _e[h >> 2]) +
                                                (0 | _e[(i + (O << 2)) >> 2])) &
                                              3),
                                            (_e[h >> 2] = O),
                                            (N = 0 | Ae(t, C)),
                                            (k =
                                              ((0 | _e[S >> 2]) +
                                                (0 | _e[(n + (N << 2)) >> 2])) &
                                              3),
                                            (_e[S >> 2] = k),
                                            (N =
                                              ((0 | _e[R >> 2]) +
                                                (0 | _e[(i + (N << 2)) >> 2])) &
                                              3),
                                            (_e[R >> 2] = N),
                                            (v = 0 | Ae(t, C)),
                                            (y =
                                              ((0 | _e[P >> 2]) +
                                                (0 | _e[(n + (v << 2)) >> 2])) &
                                              3),
                                            (_e[P >> 2] = y),
                                            (v =
                                              ((0 | _e[p >> 2]) +
                                                (0 | _e[(i + (v << 2)) >> 2])) &
                                              3),
                                            (_e[p >> 2] = v),
                                            (_e[u >> 2] =
                                              ((0 | de[(1441 + f) >> 0]) << 2) |
                                              0 |
                                              de[(1441 + l) >> 0] |
                                              ((0 | de[(1441 + G) >> 0]) << 4) |
                                              ((0 | de[(1441 + B) >> 0]) << 6) |
                                              ((0 | de[(1441 + x) >> 0]) << 8) |
                                              ((0 | de[(1441 + F) >> 0]) <<
                                                10) |
                                              ((0 | de[(1441 + D) >> 0]) <<
                                                12) |
                                              ((0 | de[(1441 + w) >> 0]) <<
                                                14) |
                                              ((0 | de[(1441 + L) >> 0]) <<
                                                16) |
                                              ((0 | de[(1441 + I) >> 0]) <<
                                                18) |
                                              ((0 | de[(1441 + g) >> 0]) <<
                                                20) |
                                              ((0 | de[(1441 + O) >> 0]) <<
                                                22) |
                                              ((0 | de[(1441 + k) >> 0]) <<
                                                24) |
                                              ((0 | de[(1441 + N) >> 0]) <<
                                                26) |
                                              ((0 | de[(1441 + y) >> 0]) <<
                                                28) |
                                              ((0 | de[(1441 + v) >> 0]) <<
                                                30)),
                                            !(
                                              r >>> 0 <=
                                              (s = (s + 1) | 0) >>> 0
                                            );

                                        )
                                          u = (u + 4) | 0;
                                        (_e[a >> 2] = l),
                                          (_e[e >> 2] = f),
                                          (u = 1);
                                      }
                                    } while (0);
                                  } else u = 0;
                                  return ne(C), (Te = o), 0 | (G = u);
                                })(e) &&
                              ((r = 0 | _e[n >> 2]), (i = 11))
                            : (i = 11),
                          11 == (0 | i))
                        ) {
                          if (
                            !(
                              ((0 | de[(r + 55) >> 0]) << 8) |
                              0 |
                              de[(r + 56) >> 0]
                            )
                          )
                            return 0 | (i = 1);
                          if (
                            0 |
                              (function(e) {
                                var r,
                                  t,
                                  n,
                                  i,
                                  a = 0,
                                  o = 0,
                                  u = 0,
                                  f = 0,
                                  l = 0;
                                if (
                                  ((Te = ((i = Te) + 560) | 0),
                                  (u = ((r = i) + 40) | 0),
                                  (l = (i + 16) | 0),
                                  (o = 0 | _e[(88 + (e |= 0)) >> 2]),
                                  (t =
                                    ((0 | de[(o + 55) >> 0]) << 8) |
                                    0 |
                                    de[(o + 56) >> 0]),
                                  (n = (e + 92) | 0),
                                  (a =
                                    ((0 | _e[(e + 4) >> 2]) +
                                      (((0 | de[(o + 50) >> 0]) << 8) |
                                        ((0 | de[(o + 49) >> 0]) << 16) |
                                        0 |
                                        de[(o + 51) >> 0])) |
                                    0),
                                  !(o =
                                    ((0 | de[(o + 53) >> 0]) << 8) |
                                    ((0 | de[(o + 52) >> 0]) << 16) |
                                    0 |
                                    de[(o + 54) >> 0]))
                                )
                                  return (Te = i), (l = 0) | l;
                                (_e[n >> 2] = a),
                                  (_e[(e + 96) >> 2] = a),
                                  (_e[(e + 104) >> 2] = o),
                                  (_e[(e + 100) >> 2] = a + o),
                                  (_e[(e + 108) >> 2] = 0),
                                  (_e[(e + 112) >> 2] = 0),
                                  (_e[(l + 20) >> 2] = 0),
                                  (_e[l >> 2] = 0),
                                  (_e[(l + 4) >> 2] = 0),
                                  (_e[(l + 8) >> 2] = 0),
                                  (_e[(l + 12) >> 2] = 0),
                                  (ce[(l + 16) >> 0] = 0);
                                e: do {
                                  if (0 | W(n, l)) {
                                    if (
                                      ((f = (e + 268) | 0),
                                      (0 |
                                        (a =
                                          0 | _e[(o = (e + 272) | 0) >> 2])) !=
                                        (0 | t))
                                    ) {
                                      if (a >>> 0 <= t >>> 0) {
                                        do {
                                          if (
                                            (0 | _e[(e + 276) >> 2]) >>> 0 <
                                            t >>> 0
                                          ) {
                                            if (
                                              0 |
                                              X(
                                                f,
                                                t,
                                                ((a + 1) | 0) == (0 | t),
                                                2,
                                                0,
                                              )
                                            ) {
                                              a = 0 | _e[o >> 2];
                                              break;
                                            }
                                            (ce[(e + 280) >> 0] = 1), (a = 0);
                                            break e;
                                          }
                                        } while (0);
                                        oe(
                                          ((0 | _e[f >> 2]) + (a << 1)) | 0,
                                          0,
                                          ((t - a) << 1) | 0,
                                        );
                                      }
                                      _e[o >> 2] = t;
                                    }
                                    if (!t) {
                                      (_e[r >> 2] = 866),
                                        (_e[(r + 4) >> 2] = 910),
                                        (_e[(r + 8) >> 2] = 1497),
                                        Ie(u, 812, r),
                                        he(u),
                                        (a = 1);
                                      break;
                                    }
                                    for (a = (u = e = o = 0) | _e[f >> 2]; ; ) {
                                      if (
                                        ((f = 0 | Ae(n, l)),
                                        (u = (f + u) & 255),
                                        (e = ((0 | Ae(n, l)) + e) & 255),
                                        (V[a >> 1] = (e << 8) | u),
                                        t >>> 0 <= (o = (o + 1) | 0) >>> 0)
                                      ) {
                                        a = 1;
                                        break;
                                      }
                                      a = (a + 2) | 0;
                                    }
                                  } else a = 0;
                                } while (0);
                                return ne(l), (Te = i), 0 | (l = a);
                              })(e) &&
                            0 |
                              (function(e) {
                                var r,
                                  t,
                                  n,
                                  i,
                                  a,
                                  o,
                                  u = 0,
                                  f = 0,
                                  l = 0,
                                  s = 0,
                                  c = 0,
                                  _ = 0,
                                  d = 0,
                                  E = 0,
                                  T = 0,
                                  A = 0,
                                  M = 0,
                                  m = 0,
                                  b = 0,
                                  h = 0,
                                  S = 0,
                                  R = 0,
                                  P = 0,
                                  p = 0,
                                  C = 0,
                                  v = 0,
                                  y = 0,
                                  N = 0,
                                  k = 0,
                                  O = 0,
                                  g = 0,
                                  I = 0,
                                  L = 0,
                                  w = 0,
                                  D = 0,
                                  F = 0,
                                  x = 0,
                                  B = 0,
                                  G = 0,
                                  U = 0,
                                  H = 0;
                                if (
                                  ((Te = ((o = Te) + 2416) | 0),
                                  (c = ((_ = o) + 1904) | 0),
                                  (G = (o + 1880) | 0),
                                  (n = (o + 980) | 0),
                                  (i = (o + 80) | 0),
                                  (a = (o + 16) | 0),
                                  (f = 0 | _e[((e |= 0) + 88) >> 2]),
                                  (r =
                                    ((0 | de[(f + 63) >> 0]) << 8) |
                                    0 |
                                    de[(f + 64) >> 0]),
                                  (t = (e + 92) | 0),
                                  (u =
                                    ((0 | _e[(e + 4) >> 2]) +
                                      (((0 | de[(f + 58) >> 0]) << 8) |
                                        ((0 | de[(f + 57) >> 0]) << 16) |
                                        0 |
                                        de[(f + 59) >> 0])) |
                                    0),
                                  !(f =
                                    ((0 | de[(f + 61) >> 0]) << 8) |
                                    ((0 | de[(f + 60) >> 0]) << 16) |
                                    0 |
                                    de[(f + 62) >> 0]))
                                )
                                  return (Te = o), (G = 0) | G;
                                if (
                                  ((_e[t >> 2] = u),
                                  (_e[(e + 96) >> 2] = u),
                                  (_e[(e + 104) >> 2] = f),
                                  (_e[(e + 100) >> 2] = u + f),
                                  (_e[(e + 108) >> 2] = 0),
                                  (_e[(e + 112) >> 2] = 0),
                                  (_e[(G + 20) >> 2] = 0),
                                  (_e[G >> 2] = 0),
                                  (_e[(G + 4) >> 2] = 0),
                                  (_e[(G + 8) >> 2] = 0),
                                  (_e[(G + 12) >> 2] = 0),
                                  (ce[(G + 16) >> 0] = 0) | W(t, G))
                                ) {
                                  for (
                                    u = 0, l = f = -7;
                                    (_e[(n + (u << 2)) >> 2] = l),
                                      (_e[(i + (u << 2)) >> 2] = f),
                                      (s = 6 < (0 | l)),
                                      225 != (0 | (u = (u + 1) | 0));

                                  )
                                    (f = ((1 & s) + f) | 0),
                                      (l = s ? -7 : (l + 1) | 0);
                                  for (
                                    f = ((u = a) + 64) | 0;
                                    (0 | (u = (u + 4) | (_e[u >> 2] = 0))) <
                                    (0 | f);

                                  );
                                  (s = (e + 284) | 0),
                                    (f = (3 * r) | 0),
                                    (u = 0 | _e[(l = (e + 288) | 0) >> 2]);
                                  e: do {
                                    if ((0 | u) == (0 | f)) d = 13;
                                    else {
                                      if (u >>> 0 <= f >>> 0) {
                                        do {
                                          if (
                                            (0 | _e[(e + 292) >> 2]) >>> 0 <
                                            f >>> 0
                                          ) {
                                            if (
                                              0 |
                                              X(
                                                s,
                                                f,
                                                ((u + 1) | 0) == (0 | f),
                                                2,
                                                0,
                                              )
                                            ) {
                                              u = 0 | _e[l >> 2];
                                              break;
                                            }
                                            (ce[(e + 296) >> 0] = 1), (u = 0);
                                            break e;
                                          }
                                        } while (0);
                                        oe(
                                          ((0 | _e[s >> 2]) + (u << 1)) | 0,
                                          0,
                                          ((f - u) << 1) | 0,
                                        );
                                      }
                                      (_e[l >> 2] = f), (d = 13);
                                    }
                                  } while (0);
                                  do {
                                    if (13 == (0 | d)) {
                                      if (!r) {
                                        (_e[_ >> 2] = 866),
                                          (_e[(_ + 4) >> 2] = 910),
                                          (_e[(_ + 8) >> 2] = 1497),
                                          Ie(c, 812, _),
                                          he(c),
                                          (u = 1);
                                        break;
                                      }
                                      for (
                                        p = (4 + a) | 0,
                                          C = (8 + a) | 0,
                                          v = (12 + a) | 0,
                                          y = (16 + a) | 0,
                                          N = (20 + a) | 0,
                                          k = (24 + a) | 0,
                                          O = (28 + a) | 0,
                                          g = (32 + a) | 0,
                                          I = (36 + a) | 0,
                                          L = (40 + a) | 0,
                                          w = (44 + a) | 0,
                                          D = (48 + a) | 0,
                                          F = (52 + a) | 0,
                                          x = (56 + a) | 0,
                                          B = (60 + a) | 0,
                                          u = (P = 0) | _e[s >> 2],
                                          f = 0 | _e[a >> 2],
                                          l = 0 | _e[p >> 2],
                                          s = 0 | _e[C >> 2],
                                          e = 0 | _e[v >> 2],
                                          c = 0 | _e[y >> 2],
                                          _ = 0 | _e[N >> 2],
                                          d = 0 | _e[k >> 2],
                                          E = 0 | _e[O >> 2],
                                          T = 0 | _e[g >> 2],
                                          A = 0 | _e[I >> 2],
                                          M = 0 | _e[L >> 2],
                                          m = 0 | _e[w >> 2],
                                          R = S = h = b = 0;
                                        (H = 0 | Ae(t, G)),
                                          (f =
                                            (f +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (l =
                                            (l +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (s =
                                            (s +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (e =
                                            (e +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (c =
                                            (c +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (_ =
                                            (_ +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (d =
                                            (d +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (E =
                                            (E +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (T =
                                            (T +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (A =
                                            (A +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (M =
                                            (M +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (m =
                                            (m +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (b =
                                            (b +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (h =
                                            (h +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | Ae(t, G)),
                                          (S =
                                            (S +
                                              (0 | _e[(n + (H << 2)) >> 2])) &
                                            7),
                                          (R =
                                            (R +
                                              (0 | _e[(i + (H << 2)) >> 2])) &
                                            7),
                                          (H = 0 | de[(1445 + _) >> 0]),
                                          (V[u >> 1] =
                                            ((0 | de[(1445 + l) >> 0]) << 3) |
                                            0 |
                                            de[(1445 + f) >> 0] |
                                            ((0 | de[(1445 + s) >> 0]) << 6) |
                                            ((0 | de[(1445 + e) >> 0]) << 9) |
                                            ((0 | de[(1445 + c) >> 0]) << 12) |
                                            (H << 15)),
                                          (U = 0 | de[(1445 + M) >> 0]),
                                          (V[(u + 2) >> 1] =
                                            ((0 | de[(1445 + d) >> 0]) << 2) |
                                            (H >>> 1) |
                                            ((0 | de[(1445 + E) >> 0]) << 5) |
                                            ((0 | de[(1445 + T) >> 0]) << 8) |
                                            ((0 | de[(1445 + A) >> 0]) << 11) |
                                            (U << 14)),
                                          (V[(u + 4) >> 1] =
                                            ((0 | de[(1445 + m) >> 0]) << 1) |
                                            (U >>> 2) |
                                            ((0 | de[(1445 + b) >> 0]) << 4) |
                                            ((0 | de[(1445 + h) >> 0]) << 7) |
                                            ((0 | de[(1445 + S) >> 0]) << 10) |
                                            ((0 | de[(1445 + R) >> 0]) << 13)),
                                          !(r >>> 0 <= (P = (P + 1) | 0) >>> 0);

                                      )
                                        u = (u + 6) | 0;
                                      (_e[a >> 2] = f),
                                        (_e[p >> 2] = l),
                                        (_e[C >> 2] = s),
                                        (_e[v >> 2] = e),
                                        (_e[y >> 2] = c),
                                        (_e[N >> 2] = _),
                                        (_e[k >> 2] = d),
                                        (_e[O >> 2] = E),
                                        (_e[g >> 2] = T),
                                        (_e[I >> 2] = A),
                                        (_e[L >> 2] = M),
                                        (_e[w >> 2] = m),
                                        (_e[D >> 2] = b),
                                        (_e[F >> 2] = h),
                                        (_e[x >> 2] = S),
                                        (_e[B >> 2] = R),
                                        (u = 1);
                                    }
                                  } while (0);
                                } else u = 0;
                                return ne(G), (Te = o), 0 | (H = u);
                              })(e)
                          )
                            return 0 | (i = 1);
                        }
                        return (i = 0) | i;
                      }
                      return (_e[(e + 88) >> 2] = 0), (i = 0) | i;
                    })(f, e, r))
                )
                  return (Te = c), 0 | (d = f);
                return (
                  U(f),
                  (Te =
                    (7 & f
                      ? ((_e[s >> 2] = 866),
                        (_e[(s + 4) >> 2] = 2506),
                        (_e[(s + 8) >> 2] = 1232),
                        Ie(u, 812, s),
                        he(u))
                      : le(f, 0, 0, 1, 0),
                    c)),
                  (d = 0) | d
                );
              })(e, r)),
            (r = (a + i) | 0);
          do {
            if (i >>> 0 < r >>> 0) {
              if (!d) {
                for (
                  n = t;
                  (n =
                    (n +
                      (0 |
                        ie(
                          0 | ie(((s + 3) | 0) >>> 2, E),
                          ((c + 3) | 0) >>> 2,
                        ))) |
                    0),
                    (0 | (i = (i + 1) | 0)) != (0 | r);

                )
                  (c >>>= 1), (s >>>= 1);
                _e[u >> 2] = n;
                break;
              }
              for (
                e = c, n = t;
                (c = 0 | ie(((s + 3) | 0) >>> 2, E)),
                  (15 < i >>> 0) |
                    ((_ = 0 | ie(c, ((e + 3) | 0) >>> 2)) >>> 0 < 8) ||
                    519686845 != (0 | _e[d >> 2]) ||
                    (re(d, u, _, c, i), (n = 0 | _e[u >> 2])),
                  (n = (n + _) | 0),
                  (_e[u >> 2] = n),
                  (0 | (i = (i + 1) | 0)) != (0 | r);

              )
                (e >>>= 1), (s >>>= 1);
            }
          } while (0);
          if (d) {
            if (519686845 == (0 | _e[d >> 2]))
              return (
                U(d),
                7 & d
                  ? ((_e[f >> 2] = 866),
                    (_e[(4 + f) >> 2] = 2506),
                    (_e[(8 + f) >> 2] = 1232),
                    Ie(o, 812, f),
                    he(o))
                  : le(d, 0, 0, 1, 0),
                void (Te = l)
              );
            Te = l;
          } else Te = l;
        },
        _memset: oe,
        _sbrk: pe,
        _memcpy: K,
        stackAlloc: function(e) {
          var r;
          return (Te = ((Te = ((r = Te) + (e |= 0)) | 0) + 15) & -16), 0 | r;
        },
        _crn_get_height: function(e, r) {
          var t, n;
          return (
            (e |= 0),
            (r |= 0),
            (Te = ((n = Te) + 48) | 0),
            (_e[(t = n) >> 2] = 40),
            q(e, r, t),
            (Te = n),
            0 | _e[(t + 8) >> 2]
          );
        },
        dynCall_vi: function(e, r) {
          (r |= 0), ar[7 & (e |= 0)](0 | r);
        },
        getTempRet0: function() {
          return 0 | k;
        },
        _crn_get_levels: function(e, r) {
          var t, n;
          return (
            (e |= 0),
            (r |= 0),
            (Te = ((n = Te) + 48) | 0),
            (_e[(t = n) >> 2] = 40),
            q(e, r, t),
            (Te = n),
            0 | _e[(t + 12) >> 2]
          );
        },
        _crn_get_uncompressed_size: function(e, r, t) {
          (e |= 0), (r |= 0), (t |= 0);
          var n,
            i,
            a,
            o,
            u = 0,
            f = 0;
          switch (
            ((Te = ((o = Te) + 576) | 0),
            (a = (o + 40) | 0),
            (i = (o + 56) | 0),
            (_e[(f = o) >> 2] = 40),
            q(e, r, f),
            (n = ((3 + ((0 | _e[(f + 4) >> 2]) >>> t)) | 0) >>> 2),
            (r = ((3 + ((0 | _e[(f + 8) >> 2]) >>> t)) | 0) >>> 2),
            (e = 0 | _e[((t = (f + 32) | 0) + 4) >> 2]),
            0 | _e[t >> 2])
          ) {
            case 0:
              e ? (u = 14) : (e = 8);
              break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              u = e ? 14 : 13;
              break;
            case 9:
            case 10:
              e ? (u = 14) : (e = 8);
              break;
            default:
              u = 14;
          }
          return (
            13 == (0 | u)
              ? (e = 16)
              : 14 == (0 | u) &&
                ((_e[a >> 2] = 866),
                (_e[(4 + a) >> 2] = 2672),
                (_e[(8 + a) >> 2] = 1251),
                Ie(i, 812, a),
                he(i),
                (e = 0)),
            (f = 0 | ie(0 | ie(r, n), e)),
            (Te = o),
            0 | f
          );
        },
        _i64Add: Be,
        dynCall_iiii: function(e, r, t, n) {
          return (
            (r |= 0),
            (t |= 0),
            (n |= 0),
            0 | nr[7 & (e |= 0)](0 | r, 0 | t, 0 | n)
          );
        },
        _emscripten_get_global_libc: function() {
          return 5072;
        },
        dynCall_ii: function(e, r) {
          return (r |= 0), 0 | or[1 & (e |= 0)](0 | r);
        },
        ___udivdi3: Ke,
        _llvm_bswap_i32: ze,
        dynCall_viiiii: function(e, r, t, n, i, a) {
          (r |= 0),
            (t |= 0),
            (n |= 0),
            (i |= 0),
            (a |= 0),
            ir[3 & (e |= 0)](0 | r, 0 | t, 0 | n, 0 | i, 0 | a);
        },
        ___cxa_can_catch: function(e, r, t) {
          var n, i;
          return (
            (e |= 0),
            (r |= 0),
            (t |= 0),
            (Te = ((i = Te) + 16) | 0),
            (_e[(n = i) >> 2] = _e[t >> 2]),
            (e = 0 | nr[7 & _e[(16 + (0 | _e[e >> 2])) >> 2]](e, r, n)) &&
              (_e[t >> 2] = _e[n >> 2]),
            (Te = i),
            (1 & e) | 0
          );
        },
        _free: x,
        runPostSets: function() {},
        dynCall_viiiiii: function(e, r, t, n, i, a, o) {
          (r |= 0),
            (t |= 0),
            (n |= 0),
            (i |= 0),
            (a |= 0),
            (o |= 0),
            lr[3 & (e |= 0)](0 | r, 0 | t, 0 | n, 0 | i, 0 | a, 0 | o);
        },
        establishStackSpace: function(e, r) {
          (Te = e |= 0), (r |= 0);
        },
        ___uremdi3: Oe,
        ___cxa_is_pointer_type: function(e) {
          return (1 & (e = (e |= 0) ? 0 != (0 | J(e, 32, 88, 0)) : 0)) | 0;
        },
        stackRestore: function(e) {
          Te = e |= 0;
        },
        _malloc: L,
        _emscripten_replace_memory: function(e) {
          return (
            !(16777215 & c(e) || c(e) <= 16777215 || 2147483648 < c(e)) &&
            ((ce = new n(e)),
            (V = new i(e)),
            (_e = new a(e)),
            (de = new o(e)),
            (Ee = new u(e)),
            new f(e),
            new l(e),
            (N = new s(e)),
            (t = e),
            !0)
          );
        },
        dynCall_v: function(e) {
          fr[3 & (e |= 0)]();
        },
        _crn_get_width: function(e, r) {
          var t, n;
          return (
            (e |= 0),
            (r |= 0),
            (Te = ((n = Te) + 48) | 0),
            (_e[(t = n) >> 2] = 40),
            q(e, r, t),
            (Te = n),
            0 | _e[(t + 4) >> 2]
          );
        },
        _crn_get_dxt_format: function(e, r) {
          var t, n;
          return (
            (e |= 0),
            (r |= 0),
            (Te = ((n = Te) + 48) | 0),
            (_e[(t = n) >> 2] = 40),
            q(e, r, t),
            (Te = n),
            0 | _e[(t + 32) >> 2]
          );
        },
      };
    })(Module.asmGlobalArg, Module.asmLibraryArg, buffer),
    stackSave = (Module.stackSave = asm.stackSave),
    getTempRet0 = (Module.getTempRet0 = asm.getTempRet0),
    _memset = (Module._memset = asm._memset),
    setThrew = (Module.setThrew = asm.setThrew),
    _bitshift64Lshr = (Module._bitshift64Lshr = asm._bitshift64Lshr),
    _bitshift64Shl = (Module._bitshift64Shl = asm._bitshift64Shl),
    setTempRet0 = (Module.setTempRet0 = asm.setTempRet0),
    _crn_decompress = (Module._crn_decompress = asm._crn_decompress),
    _crn_get_bytes_per_block = (Module._crn_get_bytes_per_block =
      asm._crn_get_bytes_per_block),
    _sbrk = (Module._sbrk = asm._sbrk),
    _memcpy = (Module._memcpy = asm._memcpy),
    stackAlloc = (Module.stackAlloc = asm.stackAlloc),
    _crn_get_height = (Module._crn_get_height = asm._crn_get_height),
    _i64Subtract = (Module._i64Subtract = asm._i64Subtract),
    _crn_get_levels = (Module._crn_get_levels = asm._crn_get_levels),
    _crn_get_uncompressed_size = (Module._crn_get_uncompressed_size =
      asm._crn_get_uncompressed_size),
    _i64Add = (Module._i64Add = asm._i64Add),
    _emscripten_get_global_libc = (Module._emscripten_get_global_libc =
      asm._emscripten_get_global_libc),
    ___udivdi3 = (Module.___udivdi3 = asm.___udivdi3),
    _llvm_bswap_i32 = (Module._llvm_bswap_i32 = asm._llvm_bswap_i32),
    ___cxa_can_catch = (Module.___cxa_can_catch = asm.___cxa_can_catch),
    _free = (Module._free = asm._free),
    runPostSets = (Module.runPostSets = asm.runPostSets),
    establishStackSpace = (Module.establishStackSpace =
      asm.establishStackSpace),
    ___uremdi3 = (Module.___uremdi3 = asm.___uremdi3),
    ___cxa_is_pointer_type = (Module.___cxa_is_pointer_type =
      asm.___cxa_is_pointer_type),
    stackRestore = (Module.stackRestore = asm.stackRestore),
    _malloc = (Module._malloc = asm._malloc),
    _emscripten_replace_memory = (Module._emscripten_replace_memory =
      asm._emscripten_replace_memory),
    _crn_get_width = (Module._crn_get_width = asm._crn_get_width),
    _crn_get_dxt_format = (Module._crn_get_dxt_format =
      asm._crn_get_dxt_format),
    dynCall_iiii = (Module.dynCall_iiii = asm.dynCall_iiii),
    dynCall_viiiii = (Module.dynCall_viiiii = asm.dynCall_viiiii),
    dynCall_vi = (Module.dynCall_vi = asm.dynCall_vi),
    dynCall_ii = (Module.dynCall_ii = asm.dynCall_ii),
    dynCall_viii = (Module.dynCall_viii = asm.dynCall_viii),
    dynCall_v = (Module.dynCall_v = asm.dynCall_v),
    dynCall_viiiiii = (Module.dynCall_viiiiii = asm.dynCall_viiiiii),
    dynCall_viiii = (Module.dynCall_viiii = asm.dynCall_viiii),
    initialStackTop;
  function ExitStatus(e) {
    (this.name = 'ExitStatus'),
      (this.message = 'Program terminated with exit(' + e + ')'),
      (this.status = e);
  }
  function run(e) {
    function r() {
      Module.calledRun ||
        ((Module.calledRun = !0),
        ABORT ||
          (ensureInitRuntime(),
          preMain(),
          Module.onRuntimeInitialized && Module.onRuntimeInitialized(),
          Module._main && shouldRunNow && Module.callMain(e),
          postRun()));
    }
    (e = e || Module.arguments),
      0 < runDependencies ||
        (preRun(),
        0 < runDependencies ||
          Module.calledRun ||
          (Module.setStatus
            ? (Module.setStatus('Running...'),
              setTimeout(function() {
                setTimeout(function() {
                  Module.setStatus('');
                }, 1),
                  r();
              }, 1))
            : r()));
  }
  function exit(e, r) {
    (r && Module.noExitRuntime) ||
      (Module.noExitRuntime ||
        ((ABORT = !0),
        (STACKTOP = initialStackTop),
        exitRuntime(),
        Module.onExit && Module.onExit(e)),
      ENVIRONMENT_IS_NODE && process.exit(e),
      Module.quit(e, new ExitStatus(e)));
  }
  (Runtime.stackAlloc = Module.stackAlloc),
    (Runtime.stackSave = Module.stackSave),
    (Runtime.stackRestore = Module.stackRestore),
    (Runtime.establishStackSpace = Module.establishStackSpace),
    (Runtime.setTempRet0 = Module.setTempRet0),
    (Runtime.getTempRet0 = Module.getTempRet0),
    (Module.asm = asm),
    (ExitStatus.prototype = new Error()),
    (ExitStatus.prototype.constructor = ExitStatus),
    (dependenciesFulfilled = function e() {
      Module.calledRun || run(),
        Module.calledRun || (dependenciesFulfilled = e);
    }),
    (Module.callMain = Module.callMain = function(e) {
      (e = e || []), ensureInitRuntime();
      var r = e.length + 1;
      function t() {
        for (var e = 0; e < 3; e++) n.push(0);
      }
      var n = [
        allocate(intArrayFromString(Module.thisProgram), 'i8', ALLOC_NORMAL),
      ];
      t();
      for (var i = 0; i < r - 1; i += 1)
        n.push(allocate(intArrayFromString(e[i]), 'i8', ALLOC_NORMAL)), t();
      n.push(0), (n = allocate(n, 'i32', ALLOC_NORMAL));
      try {
        exit(Module._main(r, n, 0), !0);
      } catch (e) {
        if (e instanceof ExitStatus) return;
        if ('SimulateInfiniteLoop' == e)
          return void (Module.noExitRuntime = !0);
        var a = e;
        e && 'object' == typeof e && e.stack && (a = [e, e.stack]),
          Module.printErr('exception thrown: ' + a),
          Module.quit(1, e);
      }
    }),
    (Module.run = Module.run = run),
    (Module.exit = Module.exit = exit);
  var abortDecorators = [];
  function abort(r) {
    Module.onAbort && Module.onAbort(r),
      (r =
        void 0 !== r
          ? (Module.print(r), Module.printErr(r), JSON.stringify(r))
          : ''),
      (ABORT = !0);
    var t =
      'abort(' +
      r +
      ') at ' +
      stackTrace() +
      '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';
    throw (abortDecorators &&
      abortDecorators.forEach(function(e) {
        t = e(t, r);
      }),
    t);
  }
  if (((Module.abort = Module.abort = abort), Module.preInit))
    for (
      'function' == typeof Module.preInit &&
      (Module.preInit = [Module.preInit]);
      0 < Module.preInit.length;

    )
      Module.preInit.pop()();
  var shouldRunNow = !0;
  Module.noInitialRun && (shouldRunNow = !1),
    (Module.noExitRuntime = !0),
    run();
  var crunch = Module,
    CRN_FORMAT = {
      cCRNFmtInvalid: -1,
      cCRNFmtDXT1: 0,
      cCRNFmtDXT3: 1,
      cCRNFmtDXT5: 2,
    },
    DXT_FORMAT_MAP = {},
    dst,
    dxtData;
  (DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT1] = PixelFormat$1.RGB_DXT1),
    (DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT3] = PixelFormat$1.RGBA_DXT3),
    (DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT5] = PixelFormat$1.RGBA_DXT5);
  var cachedDstSize = 0;
  function arrayBufferCopy(e, r, t, n) {
    var i,
      a = t / 4,
      o = n % 4,
      u = new Uint32Array(e.buffer, 0, (n - o) / 4),
      f = new Uint32Array(r.buffer);
    for (i = 0; i < u.length; i++) f[a + i] = u[i];
    for (i = n - o; i < n; i++) r[t + i] = e[i];
  }
  function transcodeCRNToDXT(e, r) {
    var t = e.byteLength,
      n = new Uint8Array(e),
      i = crunch._malloc(t);
    arrayBufferCopy(n, crunch.HEAPU8, i, t);
    var a = crunch._crn_get_dxt_format(i, t),
      o = DXT_FORMAT_MAP[a];
    if (!when.defined(o))
      throw new RuntimeError.RuntimeError('Unsupported compressed format.');
    var u,
      f = crunch._crn_get_levels(i, t),
      l = crunch._crn_get_width(i, t),
      s = crunch._crn_get_height(i, t),
      c = 0;
    for (u = 0; u < f; ++u)
      c += PixelFormat$1.compressedTextureSizeInBytes(o, l >> u, s >> u);
    cachedDstSize < c &&
      (when.defined(dst) && crunch._free(dst),
      (dst = crunch._malloc(c)),
      (dxtData = new Uint8Array(crunch.HEAPU8.buffer, dst, c)),
      (cachedDstSize = c)),
      crunch._crn_decompress(i, t, dst, c, 0, f),
      crunch._free(i);
    var _ = PixelFormat$1.compressedTextureSizeInBytes(o, l, s),
      d = dxtData.subarray(0, _),
      E = new Uint8Array(_);
    return (
      E.set(d, 0), r.push(E.buffer), new CompressedTextureBuffer(o, l, s, E)
    );
  }
  var transcodeCRNToDXT$1 = createTaskProcessorWorker(transcodeCRNToDXT);
  return transcodeCRNToDXT$1;
});
