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
  'exports',
  './when-a55a8a4c',
  './Check-bc1d37d9',
  './Cartesian2-8c9f79ed',
  './Transforms-7a81c8c2',
  './WebGLConstants-4c11ee5f',
], function(t, a, e, O, v, n) {
  'use strict';
  var r = Object.freeze({ NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 });
  function M(t, e, n, r) {
    (this[0] = a.defaultValue(t, 0)),
      (this[1] = a.defaultValue(n, 0)),
      (this[2] = a.defaultValue(e, 0)),
      (this[3] = a.defaultValue(r, 0));
  }
  (M.packedLength = 4),
    (M.pack = function(t, e, n) {
      return (
        (n = a.defaultValue(n, 0)),
        (e[n++] = t[0]),
        (e[n++] = t[1]),
        (e[n++] = t[2]),
        (e[n++] = t[3]),
        e
      );
    }),
    (M.unpack = function(t, e, n) {
      return (
        (e = a.defaultValue(e, 0)),
        a.defined(n) || (n = new M()),
        (n[0] = t[e++]),
        (n[1] = t[e++]),
        (n[2] = t[e++]),
        (n[3] = t[e++]),
        n
      );
    }),
    (M.clone = function(t, e) {
      if (a.defined(t))
        return a.defined(e)
          ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
          : new M(t[0], t[2], t[1], t[3]);
    }),
    (M.fromArray = function(t, e, n) {
      return (
        (e = a.defaultValue(e, 0)),
        a.defined(n) || (n = new M()),
        (n[0] = t[e]),
        (n[1] = t[e + 1]),
        (n[2] = t[e + 2]),
        (n[3] = t[e + 3]),
        n
      );
    }),
    (M.fromColumnMajorArray = function(t, e) {
      return M.clone(t, e);
    }),
    (M.fromRowMajorArray = function(t, e) {
      return a.defined(e)
        ? ((e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]), e)
        : new M(t[0], t[1], t[2], t[3]);
    }),
    (M.fromScale = function(t, e) {
      return a.defined(e)
        ? ((e[0] = t.x), (e[1] = 0), (e[2] = 0), (e[3] = t.y), e)
        : new M(t.x, 0, 0, t.y);
    }),
    (M.fromUniformScale = function(t, e) {
      return a.defined(e)
        ? ((e[0] = t), (e[1] = 0), (e[2] = 0), (e[3] = t), e)
        : new M(t, 0, 0, t);
    }),
    (M.fromRotation = function(t, e) {
      var n = Math.cos(t),
        r = Math.sin(t);
      return a.defined(e)
        ? ((e[0] = n), (e[1] = r), (e[2] = -r), (e[3] = n), e)
        : new M(n, -r, r, n);
    }),
    (M.toArray = function(t, e) {
      return a.defined(e)
        ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
        : [t[0], t[1], t[2], t[3]];
    }),
    (M.getElementIndex = function(t, e) {
      return 2 * t + e;
    }),
    (M.getColumn = function(t, e, n) {
      var r = 2 * e,
        a = t[r],
        i = t[1 + r];
      return (n.x = a), (n.y = i), n;
    }),
    (M.setColumn = function(t, e, n, r) {
      var a = 2 * e;
      return ((r = M.clone(t, r))[a] = n.x), (r[1 + a] = n.y), r;
    }),
    (M.getRow = function(t, e, n) {
      var r = t[e],
        a = t[e + 2];
      return (n.x = r), (n.y = a), n;
    }),
    (M.setRow = function(t, e, n, r) {
      return ((r = M.clone(t, r))[e] = n.x), (r[e + 2] = n.y), r;
    });
  var i = new O.Cartesian2();
  M.getScale = function(t, e) {
    return (
      (e.x = O.Cartesian2.magnitude(O.Cartesian2.fromElements(t[0], t[1], i))),
      (e.y = O.Cartesian2.magnitude(O.Cartesian2.fromElements(t[2], t[3], i))),
      e
    );
  };
  var u = new O.Cartesian2();
  (M.getMaximumScale = function(t) {
    return M.getScale(t, u), O.Cartesian2.maximumComponent(u);
  }),
    (M.multiply = function(t, e, n) {
      var r = t[0] * e[0] + t[2] * e[1],
        a = t[0] * e[2] + t[2] * e[3],
        i = t[1] * e[0] + t[3] * e[1],
        u = t[1] * e[2] + t[3] * e[3];
      return (n[0] = r), (n[1] = i), (n[2] = a), (n[3] = u), n;
    }),
    (M.add = function(t, e, n) {
      return (
        (n[0] = t[0] + e[0]),
        (n[1] = t[1] + e[1]),
        (n[2] = t[2] + e[2]),
        (n[3] = t[3] + e[3]),
        n
      );
    }),
    (M.subtract = function(t, e, n) {
      return (
        (n[0] = t[0] - e[0]),
        (n[1] = t[1] - e[1]),
        (n[2] = t[2] - e[2]),
        (n[3] = t[3] - e[3]),
        n
      );
    }),
    (M.multiplyByVector = function(t, e, n) {
      var r = t[0] * e.x + t[2] * e.y,
        a = t[1] * e.x + t[3] * e.y;
      return (n.x = r), (n.y = a), n;
    }),
    (M.multiplyByScalar = function(t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        n
      );
    }),
    (M.multiplyByScale = function(t, e, n) {
      return (
        (n[0] = t[0] * e.x),
        (n[1] = t[1] * e.x),
        (n[2] = t[2] * e.y),
        (n[3] = t[3] * e.y),
        n
      );
    }),
    (M.negate = function(t, e) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e;
    }),
    (M.transpose = function(t, e) {
      var n = t[0],
        r = t[2],
        a = t[1],
        i = t[3];
      return (e[0] = n), (e[1] = r), (e[2] = a), (e[3] = i), e;
    }),
    (M.abs = function(t, e) {
      return (
        (e[0] = Math.abs(t[0])),
        (e[1] = Math.abs(t[1])),
        (e[2] = Math.abs(t[2])),
        (e[3] = Math.abs(t[3])),
        e
      );
    }),
    (M.equals = function(t, e) {
      return (
        t === e ||
        (a.defined(t) &&
          a.defined(e) &&
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[3] === e[3])
      );
    }),
    (M.equalsArray = function(t, e, n) {
      return (
        t[0] === e[n] &&
        t[1] === e[n + 1] &&
        t[2] === e[n + 2] &&
        t[3] === e[n + 3]
      );
    }),
    (M.equalsEpsilon = function(t, e, n) {
      return (
        t === e ||
        (a.defined(t) &&
          a.defined(e) &&
          Math.abs(t[0] - e[0]) <= n &&
          Math.abs(t[1] - e[1]) <= n &&
          Math.abs(t[2] - e[2]) <= n &&
          Math.abs(t[3] - e[3]) <= n)
      );
    }),
    (M.IDENTITY = Object.freeze(new M(1, 0, 0, 1))),
    (M.ZERO = Object.freeze(new M(0, 0, 0, 0))),
    (M.COLUMN0ROW0 = 0),
    (M.COLUMN0ROW1 = 1),
    (M.COLUMN1ROW0 = 2),
    (M.COLUMN1ROW1 = 3),
    Object.defineProperties(M.prototype, {
      length: {
        get: function() {
          return M.packedLength;
        },
      },
    }),
    (M.prototype.clone = function(t) {
      return M.clone(this, t);
    }),
    (M.prototype.equals = function(t) {
      return M.equals(this, t);
    }),
    (M.prototype.equalsEpsilon = function(t, e) {
      return M.equalsEpsilon(this, t, e);
    }),
    (M.prototype.toString = function() {
      return (
        '(' + this[0] + ', ' + this[2] + ')\n(' + this[1] + ', ' + this[3] + ')'
      );
    });
  var o = {
      POINTS: n.WebGLConstants.POINTS,
      LINES: n.WebGLConstants.LINES,
      LINE_LOOP: n.WebGLConstants.LINE_LOOP,
      LINE_STRIP: n.WebGLConstants.LINE_STRIP,
      TRIANGLES: n.WebGLConstants.TRIANGLES,
      TRIANGLE_STRIP: n.WebGLConstants.TRIANGLE_STRIP,
      TRIANGLE_FAN: n.WebGLConstants.TRIANGLE_FAN,
      validate: function(t) {
        return (
          t === o.POINTS ||
          t === o.LINES ||
          t === o.LINE_LOOP ||
          t === o.LINE_STRIP ||
          t === o.TRIANGLES ||
          t === o.TRIANGLE_STRIP ||
          t === o.TRIANGLE_FAN
        );
      },
    },
    s = Object.freeze(o);
  function f(t) {
    (t = a.defaultValue(t, a.defaultValue.EMPTY_OBJECT)),
      (this.attributes = t.attributes),
      (this.indices = t.indices),
      (this.primitiveType = a.defaultValue(t.primitiveType, s.TRIANGLES)),
      (this.boundingSphere = t.boundingSphere),
      (this.geometryType = a.defaultValue(t.geometryType, r.NONE)),
      (this.boundingSphereCV = t.boundingSphereCV),
      (this.offsetAttribute = t.offsetAttribute);
  }
  f.computeNumberOfVertices = function(t) {
    var e = -1;
    for (var n in t.attributes)
      if (
        t.attributes.hasOwnProperty(n) &&
        a.defined(t.attributes[n]) &&
        a.defined(t.attributes[n].values)
      ) {
        var r = t.attributes[n];
        e = r.values.length / r.componentsPerAttribute;
      }
    return e;
  };
  var R = new O.Cartographic(),
    P = new O.Cartesian3(),
    V = new v.Matrix4(),
    G = [new O.Cartographic(), new O.Cartographic(), new O.Cartographic()],
    _ = [new O.Cartesian2(), new O.Cartesian2(), new O.Cartesian2()],
    W = [new O.Cartesian2(), new O.Cartesian2(), new O.Cartesian2()],
    B = new O.Cartesian3(),
    F = new v.Quaternion(),
    k = new v.Matrix4(),
    Y = new M();
  (f._textureCoordinateRotationPoints = function(t, e, n, r) {
    var a,
      i = O.Rectangle.center(r, R),
      u = O.Cartographic.toCartesian(i, n, P),
      o = v.Transforms.eastNorthUpToFixedFrame(u, n, V),
      s = v.Matrix4.inverse(o, V),
      f = _,
      c = G;
    (c[0].longitude = r.west),
      (c[0].latitude = r.south),
      (c[1].longitude = r.west),
      (c[1].latitude = r.north),
      (c[2].longitude = r.east),
      (c[2].latitude = r.south);
    var l = B;
    for (a = 0; a < 3; a++)
      O.Cartographic.toCartesian(c[a], n, l),
        (l = v.Matrix4.multiplyByPointAsVector(s, l, l)),
        (f[a].x = l.x),
        (f[a].y = l.y);
    var d = v.Quaternion.fromAxisAngle(O.Cartesian3.UNIT_Z, -e, F),
      y = v.Matrix3.fromQuaternion(d, k),
      m = t.length,
      p = Number.POSITIVE_INFINITY,
      h = Number.POSITIVE_INFINITY,
      N = Number.NEGATIVE_INFINITY,
      I = Number.NEGATIVE_INFINITY;
    for (a = 0; a < m; a++)
      (l = v.Matrix4.multiplyByPointAsVector(s, t[a], l)),
        (l = v.Matrix3.multiplyByVector(y, l, l)),
        (p = Math.min(p, l.x)),
        (h = Math.min(h, l.y)),
        (N = Math.max(N, l.x)),
        (I = Math.max(I, l.y));
    var C = M.fromRotation(e, Y),
      b = W;
    (b[0].x = p),
      (b[0].y = h),
      (b[1].x = p),
      (b[1].y = I),
      (b[2].x = N),
      (b[2].y = h);
    var T = f[0],
      E = f[2].x - T.x,
      x = f[1].y - T.y;
    for (a = 0; a < 3; a++) {
      var L = b[a];
      M.multiplyByVector(C, L, L),
        (L.x = (L.x - T.x) / E),
        (L.y = (L.y - T.y) / x);
    }
    var w = b[0],
      g = b[1],
      S = b[2],
      A = new Array(6);
    return (
      O.Cartesian2.pack(w, A),
      O.Cartesian2.pack(g, A, 2),
      O.Cartesian2.pack(S, A, 4),
      A
    );
  }),
    (t.Geometry = f),
    (t.GeometryAttribute = function(t) {
      (t = a.defaultValue(t, a.defaultValue.EMPTY_OBJECT)),
        (this.componentDatatype = t.componentDatatype),
        (this.componentsPerAttribute = t.componentsPerAttribute),
        (this.normalize = a.defaultValue(t.normalize, !1)),
        (this.values = t.values);
    }),
    (t.GeometryType = r),
    (t.Matrix2 = M),
    (t.PrimitiveType = s);
});