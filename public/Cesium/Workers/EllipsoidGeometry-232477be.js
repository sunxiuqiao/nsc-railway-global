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
  './Math-73a8bd13',
  './Cartesian2-8c9f79ed',
  './Transforms-7a81c8c2',
  './ComponentDatatype-c2c50230',
  './GeometryAttribute-f9641809',
  './GeometryAttributes-1c7ce91d',
  './IndexDatatype-486e7786',
  './GeometryOffsetAttribute-9ecab91f',
  './VertexFormat-e1477d0a',
], function(t, ut, e, lt, ct, ft, dt, Ct, pt, yt, _t, d) {
  'use strict';
  var vt = new ct.Cartesian3(),
    ht = new ct.Cartesian3(),
    At = new ct.Cartesian3(),
    xt = new ct.Cartesian3(),
    bt = new ct.Cartesian3(),
    l = new ct.Cartesian3(1, 1, 1),
    kt = Math.cos,
    wt = Math.sin;
  function C(t) {
    t = ut.defaultValue(t, ut.defaultValue.EMPTY_OBJECT);
    var e = ut.defaultValue(t.radii, l),
      a = ut.defaultValue(t.innerRadii, e),
      i = ut.defaultValue(t.minimumClock, 0),
      r = ut.defaultValue(t.maximumClock, lt.CesiumMath.TWO_PI),
      n = ut.defaultValue(t.minimumCone, 0),
      o = ut.defaultValue(t.maximumCone, lt.CesiumMath.PI),
      m = Math.round(ut.defaultValue(t.stackPartitions, 64)),
      s = Math.round(ut.defaultValue(t.slicePartitions, 64)),
      u = ut.defaultValue(t.vertexFormat, d.VertexFormat.DEFAULT);
    (this._radii = ct.Cartesian3.clone(e)),
      (this._innerRadii = ct.Cartesian3.clone(a)),
      (this._minimumClock = i),
      (this._maximumClock = r),
      (this._minimumCone = n),
      (this._maximumCone = o),
      (this._stackPartitions = m),
      (this._slicePartitions = s),
      (this._vertexFormat = d.VertexFormat.clone(u)),
      (this._offsetAttribute = t.offsetAttribute),
      (this._workerName = 'createEllipsoidGeometry');
  }
  (C.packedLength =
    2 * ct.Cartesian3.packedLength + d.VertexFormat.packedLength + 7),
    (C.pack = function(t, e, a) {
      return (
        (a = ut.defaultValue(a, 0)),
        ct.Cartesian3.pack(t._radii, e, a),
        (a += ct.Cartesian3.packedLength),
        ct.Cartesian3.pack(t._innerRadii, e, a),
        (a += ct.Cartesian3.packedLength),
        d.VertexFormat.pack(t._vertexFormat, e, a),
        (a += d.VertexFormat.packedLength),
        (e[a++] = t._minimumClock),
        (e[a++] = t._maximumClock),
        (e[a++] = t._minimumCone),
        (e[a++] = t._maximumCone),
        (e[a++] = t._stackPartitions),
        (e[a++] = t._slicePartitions),
        (e[a] = ut.defaultValue(t._offsetAttribute, -1)),
        e
      );
    });
  var a,
    p = new ct.Cartesian3(),
    y = new ct.Cartesian3(),
    _ = new d.VertexFormat(),
    v = {
      radii: p,
      innerRadii: y,
      vertexFormat: _,
      minimumClock: void 0,
      maximumClock: void 0,
      minimumCone: void 0,
      maximumCone: void 0,
      stackPartitions: void 0,
      slicePartitions: void 0,
      offsetAttribute: void 0,
    };
  (C.unpack = function(t, e, a) {
    e = ut.defaultValue(e, 0);
    var i = ct.Cartesian3.unpack(t, e, p);
    e += ct.Cartesian3.packedLength;
    var r = ct.Cartesian3.unpack(t, e, y);
    e += ct.Cartesian3.packedLength;
    var n = d.VertexFormat.unpack(t, e, _);
    e += d.VertexFormat.packedLength;
    var o = t[e++],
      m = t[e++],
      s = t[e++],
      u = t[e++],
      l = t[e++],
      c = t[e++],
      f = t[e];
    return ut.defined(a)
      ? ((a._radii = ct.Cartesian3.clone(i, a._radii)),
        (a._innerRadii = ct.Cartesian3.clone(r, a._innerRadii)),
        (a._vertexFormat = d.VertexFormat.clone(n, a._vertexFormat)),
        (a._minimumClock = o),
        (a._maximumClock = m),
        (a._minimumCone = s),
        (a._maximumCone = u),
        (a._stackPartitions = l),
        (a._slicePartitions = c),
        (a._offsetAttribute = -1 === f ? void 0 : f),
        a)
      : ((v.minimumClock = o),
        (v.maximumClock = m),
        (v.minimumCone = s),
        (v.maximumCone = u),
        (v.stackPartitions = l),
        (v.slicePartitions = c),
        (v.offsetAttribute = -1 === f ? void 0 : f),
        new C(v));
  }),
    (C.createGeometry = function(t) {
      var e = t._radii;
      if (!(e.x <= 0 || e.y <= 0 || e.z <= 0)) {
        var a = t._innerRadii;
        if (!(a.x <= 0 || a.y <= 0 || a.z <= 0)) {
          var i,
            r,
            n = t._minimumClock,
            o = t._maximumClock,
            m = t._minimumCone,
            s = t._maximumCone,
            u = t._vertexFormat,
            l = t._slicePartitions + 1,
            c = t._stackPartitions + 1;
          (l = Math.round((l * Math.abs(o - n)) / lt.CesiumMath.TWO_PI)) < 2 &&
            (l = 2),
            (c = Math.round((c * Math.abs(s - m)) / lt.CesiumMath.PI)) < 2 &&
              (c = 2);
          var f = 0,
            d = [m],
            C = [n];
          for (i = 0; i < c; i++) d.push(m + (i * (s - m)) / (c - 1));
          for (d.push(s), r = 0; r < l; r++)
            C.push(n + (r * (o - n)) / (l - 1));
          C.push(o);
          var p = d.length,
            y = C.length,
            _ = 0,
            v = 1,
            h = a.x !== e.x || a.y !== e.y || a.z !== e.z,
            A = !1,
            x = !1,
            b = !1;
          h &&
            ((v = 2),
            0 < m && ((A = !0), (_ += l - 1)),
            s < Math.PI && ((x = !0), (_ += l - 1)),
            (o - n) % lt.CesiumMath.TWO_PI
              ? ((b = !0), (_ += 2 * (c - 1) + 1))
              : (_ += 1));
          var k = y * p * v,
            w = new Float64Array(3 * k),
            F = _t.arrayFill(new Array(k), !1),
            P = _t.arrayFill(new Array(k), !1),
            g = l * c * v,
            V = 6 * (g + _ + 1 - (l + c) * v),
            M = yt.IndexDatatype.createTypedArray(g, V),
            T = u.normal ? new Float32Array(3 * k) : void 0,
            D = u.tangent ? new Float32Array(3 * k) : void 0,
            G = u.bitangent ? new Float32Array(3 * k) : void 0,
            L = u.st ? new Float32Array(2 * k) : void 0,
            O = new Array(p),
            I = new Array(p);
          for (i = 0; i < p; i++) (O[i] = wt(d[i])), (I[i] = kt(d[i]));
          var E = new Array(y),
            z = new Array(y);
          for (r = 0; r < y; r++) (z[r] = kt(C[r])), (E[r] = wt(C[r]));
          for (i = 0; i < p; i++)
            for (r = 0; r < y; r++)
              (w[f++] = e.x * O[i] * z[r]),
                (w[f++] = e.y * O[i] * E[r]),
                (w[f++] = e.z * I[i]);
          var N,
            R,
            U,
            S,
            B = k / 2;
          if (h)
            for (i = 0; i < p; i++)
              for (r = 0; r < y; r++)
                (w[f++] = a.x * O[i] * z[r]),
                  (w[f++] = a.y * O[i] * E[r]),
                  (w[f++] = a.z * I[i]),
                  (F[B] = !0),
                  0 < i && i !== p - 1 && 0 !== r && r !== y - 1 && (P[B] = !0),
                  B++;
          for (f = 0, i = 1; i < p - 2; i++)
            for (N = i * y, R = (i + 1) * y, r = 1; r < y - 2; r++)
              (M[f++] = R + r),
                (M[f++] = R + r + 1),
                (M[f++] = N + r + 1),
                (M[f++] = R + r),
                (M[f++] = N + r + 1),
                (M[f++] = N + r);
          if (h) {
            var W = p * y;
            for (i = 1; i < p - 2; i++)
              for (N = W + i * y, R = W + (i + 1) * y, r = 1; r < y - 2; r++)
                (M[f++] = R + r),
                  (M[f++] = N + r),
                  (M[f++] = N + r + 1),
                  (M[f++] = R + r),
                  (M[f++] = N + r + 1),
                  (M[f++] = R + r + 1);
          }
          if (h) {
            if (A)
              for (S = p * y, i = 1; i < y - 2; i++)
                (M[f++] = i),
                  (M[f++] = i + 1),
                  (M[f++] = S + i + 1),
                  (M[f++] = i),
                  (M[f++] = S + i + 1),
                  (M[f++] = S + i);
            if (x)
              for (U = p * y - y, S = p * y * v - y, i = 1; i < y - 2; i++)
                (M[f++] = U + i + 1),
                  (M[f++] = U + i),
                  (M[f++] = S + i),
                  (M[f++] = U + i + 1),
                  (M[f++] = S + i),
                  (M[f++] = S + i + 1);
          }
          if (b) {
            for (i = 1; i < p - 2; i++)
              (S = y * p + y * i),
                (U = y * i),
                (M[f++] = S),
                (M[f++] = U + y),
                (M[f++] = U),
                (M[f++] = S),
                (M[f++] = S + y),
                (M[f++] = U + y);
            for (i = 1; i < p - 2; i++)
              (S = y * p + y * (i + 1) - 1),
                (U = y * (i + 1) - 1),
                (M[f++] = U + y),
                (M[f++] = S),
                (M[f++] = U),
                (M[f++] = U + y),
                (M[f++] = S + y),
                (M[f++] = S);
          }
          var Y = new pt.GeometryAttributes();
          u.position &&
            (Y.position = new Ct.GeometryAttribute({
              componentDatatype: dt.ComponentDatatype.DOUBLE,
              componentsPerAttribute: 3,
              values: w,
            }));
          var J,
            X = 0,
            Z = 0,
            j = 0,
            q = 0,
            H = k / 2,
            K = ct.Ellipsoid.fromCartesian3(e),
            Q = ct.Ellipsoid.fromCartesian3(a);
          if (u.st || u.normal || u.tangent || u.bitangent) {
            for (i = 0; i < k; i++) {
              J = F[i] ? Q : K;
              var $ = ct.Cartesian3.fromArray(w, 3 * i, vt),
                tt = J.geodeticSurfaceNormal($, ht);
              if ((P[i] && ct.Cartesian3.negate(tt, tt), u.st)) {
                var et = ct.Cartesian2.negate(tt, bt);
                (L[X++] = Math.atan2(et.y, et.x) / lt.CesiumMath.TWO_PI + 0.5),
                  (L[X++] = Math.asin(tt.z) / Math.PI + 0.5);
              }
              if (
                (u.normal &&
                  ((T[Z++] = tt.x), (T[Z++] = tt.y), (T[Z++] = tt.z)),
                u.tangent || u.bitangent)
              ) {
                var at,
                  it = At,
                  rt = 0;
                if (
                  (F[i] && (rt = H),
                  (at =
                    !A && rt <= i && i < rt + 2 * y
                      ? ct.Cartesian3.UNIT_X
                      : ct.Cartesian3.UNIT_Z),
                  ct.Cartesian3.cross(at, tt, it),
                  ct.Cartesian3.normalize(it, it),
                  u.tangent &&
                    ((D[j++] = it.x), (D[j++] = it.y), (D[j++] = it.z)),
                  u.bitangent)
                ) {
                  var nt = ct.Cartesian3.cross(tt, it, xt);
                  ct.Cartesian3.normalize(nt, nt),
                    (G[q++] = nt.x),
                    (G[q++] = nt.y),
                    (G[q++] = nt.z);
                }
              }
            }
            u.st &&
              (Y.st = new Ct.GeometryAttribute({
                componentDatatype: dt.ComponentDatatype.FLOAT,
                componentsPerAttribute: 2,
                values: L,
              })),
              u.normal &&
                (Y.normal = new Ct.GeometryAttribute({
                  componentDatatype: dt.ComponentDatatype.FLOAT,
                  componentsPerAttribute: 3,
                  values: T,
                })),
              u.tangent &&
                (Y.tangent = new Ct.GeometryAttribute({
                  componentDatatype: dt.ComponentDatatype.FLOAT,
                  componentsPerAttribute: 3,
                  values: D,
                })),
              u.bitangent &&
                (Y.bitangent = new Ct.GeometryAttribute({
                  componentDatatype: dt.ComponentDatatype.FLOAT,
                  componentsPerAttribute: 3,
                  values: G,
                }));
          }
          if (ut.defined(t._offsetAttribute)) {
            var ot = w.length,
              mt = new Uint8Array(ot / 3),
              st =
                t._offsetAttribute === _t.GeometryOffsetAttribute.NONE ? 0 : 1;
            _t.arrayFill(mt, st),
              (Y.applyOffset = new Ct.GeometryAttribute({
                componentDatatype: dt.ComponentDatatype.UNSIGNED_BYTE,
                componentsPerAttribute: 1,
                values: mt,
              }));
          }
          return new Ct.Geometry({
            attributes: Y,
            indices: M,
            primitiveType: Ct.PrimitiveType.TRIANGLES,
            boundingSphere: ft.BoundingSphere.fromEllipsoid(K),
            offsetAttribute: t._offsetAttribute,
          });
        }
      }
    }),
    (C.getUnitEllipsoid = function() {
      return (
        ut.defined(a) ||
          (a = C.createGeometry(
            new C({
              radii: new ct.Cartesian3(1, 1, 1),
              vertexFormat: d.VertexFormat.POSITION_ONLY,
            }),
          )),
        a
      );
    }),
    (t.EllipsoidGeometry = C);
});
