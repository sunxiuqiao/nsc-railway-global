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
  './Check-bc1d37d9',
  './Math-73a8bd13',
  './Cartesian2-8c9f79ed',
  './Transforms-7a81c8c2',
  './RuntimeError-7c184ac0',
  './WebGLConstants-4c11ee5f',
  './ComponentDatatype-c2c50230',
  './GeometryAttribute-f9641809',
  './GeometryAttributes-1c7ce91d',
  './IndexDatatype-486e7786',
  './IntersectionTests-3bb891b7',
  './Plane-a6a20716',
  './GeometryOffsetAttribute-9ecab91f',
  './arrayRemoveDuplicates-9c727c83',
  './EllipsoidTangentPlane-7f2f6dd6',
  './EllipsoidRhumbLine-cddfa697',
  './PolygonPipeline-c12287cd',
  './PolylineVolumeGeometryLibrary-94a0865b',
  './EllipsoidGeodesic-4c7a7786',
  './PolylinePipeline-a7e2c020',
  './CorridorGeometryLibrary-0081c1ac',
], function(R, e, y, B, g, t, i, U, F, Y, q, r, o, E, b, a, n, C, W, s, l, J) {
  'use strict';
  var j = new B.Cartesian3(),
    z = new B.Cartesian3(),
    K = new B.Cartesian3();
  function G(e, t) {
    var i,
      r,
      o,
      a = [],
      n = e.positions,
      s = e.corners,
      l = e.endPositions,
      d = new Y.GeometryAttributes(),
      u = 0,
      p = 0,
      f = 0;
    for (r = 0; r < n.length; r += 2)
      (u += o = n[r].length - 3),
        (f += (o / 3) * 4),
        (p += n[r + 1].length - 3);
    for (u += 3, p += 3, r = 0; r < s.length; r++) {
      i = s[r];
      var h = s[r].leftPositions;
      R.defined(h)
        ? (u += o = h.length)
        : (p += o = s[r].rightPositions.length),
        (f += (o / 3) * 2);
    }
    var c,
      y = R.defined(l);
    y && ((u += c = l[0].length - 3), (p += c), (f += 4 * (c /= 3)));
    var g,
      b,
      m,
      v,
      A,
      _,
      E = u + p,
      C = new Float64Array(E),
      G = 0,
      T = E - 1,
      P = c / 2,
      w = q.IndexDatatype.createTypedArray(E / 3, f + 4),
      L = 0;
    if (((w[L++] = G / 3), (w[L++] = (T - 2) / 3), y)) {
      a.push(G / 3), (_ = j), (A = z);
      var D = l[0];
      for (r = 0; r < P; r++)
        (_ = B.Cartesian3.fromArray(D, 3 * (P - 1 - r), _)),
          (A = B.Cartesian3.fromArray(D, 3 * (P + r), A)),
          J.CorridorGeometryLibrary.addAttribute(C, A, G),
          J.CorridorGeometryLibrary.addAttribute(C, _, void 0, T),
          (v = (b = G / 3) + 1),
          (m = (g = (T - 2) / 3) - 1),
          (w[L++] = g),
          (w[L++] = m),
          (w[L++] = b),
          (w[L++] = v),
          (G += 3),
          (T -= 3);
    }
    var k = 0,
      N = n[k++],
      O = n[k++];
    for (
      C.set(N, G),
        C.set(O, T - O.length + 1),
        o = O.length - 3,
        a.push(G / 3, (T - 2) / 3),
        r = 0;
      r < o;
      r += 3
    )
      (v = (b = G / 3) + 1),
        (m = (g = (T - 2) / 3) - 1),
        (w[L++] = g),
        (w[L++] = m),
        (w[L++] = b),
        (w[L++] = v),
        (G += 3),
        (T -= 3);
    for (r = 0; r < s.length; r++) {
      var V,
        x,
        H = (i = s[r]).leftPositions,
        I = i.rightPositions,
        S = K;
      if (R.defined(H)) {
        for (T -= 3, x = m, a.push(v), V = 0; V < H.length / 3; V++)
          (S = B.Cartesian3.fromArray(H, 3 * V, S)),
            (w[L++] = x - V - 1),
            (w[L++] = x - V),
            J.CorridorGeometryLibrary.addAttribute(C, S, void 0, T),
            (T -= 3);
        a.push(x - Math.floor(H.length / 6)),
          t === W.CornerType.BEVELED && a.push((T - 2) / 3 + 1),
          (G += 3);
      } else {
        for (G += 3, x = v, a.push(m), V = 0; V < I.length / 3; V++)
          (S = B.Cartesian3.fromArray(I, 3 * V, S)),
            (w[L++] = x + V),
            (w[L++] = x + V + 1),
            J.CorridorGeometryLibrary.addAttribute(C, S, G),
            (G += 3);
        a.push(x + Math.floor(I.length / 6)),
          t === W.CornerType.BEVELED && a.push(G / 3 - 1),
          (T -= 3);
      }
      for (
        N = n[k++],
          O = n[k++],
          N.splice(0, 3),
          O.splice(O.length - 3, 3),
          C.set(N, G),
          C.set(O, T - O.length + 1),
          o = O.length - 3,
          V = 0;
        V < O.length;
        V += 3
      )
        (b = (v = G / 3) - 1),
          (g = (m = (T - 2) / 3) + 1),
          (w[L++] = g),
          (w[L++] = m),
          (w[L++] = b),
          (w[L++] = v),
          (G += 3),
          (T -= 3);
      (G -= 3), (T += 3), a.push(G / 3, (T - 2) / 3);
    }
    if (y) {
      (G += 3), (T -= 3), (_ = j), (A = z);
      var M = l[1];
      for (r = 0; r < P; r++)
        (_ = B.Cartesian3.fromArray(M, 3 * (c - r - 1), _)),
          (A = B.Cartesian3.fromArray(M, 3 * r, A)),
          J.CorridorGeometryLibrary.addAttribute(C, _, void 0, T),
          J.CorridorGeometryLibrary.addAttribute(C, A, G),
          (b = (v = G / 3) - 1),
          (g = (m = (T - 2) / 3) + 1),
          (w[L++] = g),
          (w[L++] = m),
          (w[L++] = b),
          (w[L++] = v),
          (G += 3),
          (T -= 3);
      a.push(G / 3);
    } else a.push(G / 3, (T - 2) / 3);
    return (
      (w[L++] = G / 3),
      (w[L++] = (T - 2) / 3),
      (d.position = new F.GeometryAttribute({
        componentDatatype: U.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: C,
      })),
      { attributes: d, indices: w, wallIndices: a }
    );
  }
  function h(e) {
    var t = (e = R.defaultValue(e, R.defaultValue.EMPTY_OBJECT)).positions,
      i = e.width,
      r = R.defaultValue(e.height, 0),
      o = R.defaultValue(e.extrudedHeight, r);
    (this._positions = t),
      (this._ellipsoid = B.Ellipsoid.clone(
        R.defaultValue(e.ellipsoid, B.Ellipsoid.WGS84),
      )),
      (this._width = i),
      (this._height = Math.max(r, o)),
      (this._extrudedHeight = Math.min(r, o)),
      (this._cornerType = R.defaultValue(e.cornerType, W.CornerType.ROUNDED)),
      (this._granularity = R.defaultValue(
        e.granularity,
        y.CesiumMath.RADIANS_PER_DEGREE,
      )),
      (this._offsetAttribute = e.offsetAttribute),
      (this._workerName = 'createCorridorOutlineGeometry'),
      (this.packedLength =
        1 +
        t.length * B.Cartesian3.packedLength +
        B.Ellipsoid.packedLength +
        6);
  }
  h.pack = function(e, t, i) {
    i = R.defaultValue(i, 0);
    var r = e._positions,
      o = r.length;
    t[i++] = o;
    for (var a = 0; a < o; ++a, i += B.Cartesian3.packedLength)
      B.Cartesian3.pack(r[a], t, i);
    return (
      B.Ellipsoid.pack(e._ellipsoid, t, i),
      (i += B.Ellipsoid.packedLength),
      (t[i++] = e._width),
      (t[i++] = e._height),
      (t[i++] = e._extrudedHeight),
      (t[i++] = e._cornerType),
      (t[i++] = e._granularity),
      (t[i] = R.defaultValue(e._offsetAttribute, -1)),
      t
    );
  };
  var c = B.Ellipsoid.clone(B.Ellipsoid.UNIT_SPHERE),
    m = {
      positions: void 0,
      ellipsoid: c,
      width: void 0,
      height: void 0,
      extrudedHeight: void 0,
      cornerType: void 0,
      granularity: void 0,
      offsetAttribute: void 0,
    };
  return (
    (h.unpack = function(e, t, i) {
      t = R.defaultValue(t, 0);
      for (
        var r = e[t++], o = new Array(r), a = 0;
        a < r;
        ++a, t += B.Cartesian3.packedLength
      )
        o[a] = B.Cartesian3.unpack(e, t);
      var n = B.Ellipsoid.unpack(e, t, c);
      t += B.Ellipsoid.packedLength;
      var s = e[t++],
        l = e[t++],
        d = e[t++],
        u = e[t++],
        p = e[t++],
        f = e[t];
      return R.defined(i)
        ? ((i._positions = o),
          (i._ellipsoid = B.Ellipsoid.clone(n, i._ellipsoid)),
          (i._width = s),
          (i._height = l),
          (i._extrudedHeight = d),
          (i._cornerType = u),
          (i._granularity = p),
          (i._offsetAttribute = -1 === f ? void 0 : f),
          i)
        : ((m.positions = o),
          (m.width = s),
          (m.height = l),
          (m.extrudedHeight = d),
          (m.cornerType = u),
          (m.granularity = p),
          (m.offsetAttribute = -1 === f ? void 0 : f),
          new h(m));
    }),
    (h.createGeometry = function(e) {
      var t = e._positions,
        i = e._width,
        r = e._ellipsoid;
      t = (function(e, t) {
        for (var i = 0; i < e.length; i++)
          e[i] = t.scaleToGeodeticSurface(e[i], e[i]);
        return e;
      })(t, r);
      var o = b.arrayRemoveDuplicates(t, B.Cartesian3.equalsEpsilon);
      if (!(o.length < 2 || i <= 0)) {
        var a,
          n = e._height,
          s = e._extrudedHeight,
          l = !y.CesiumMath.equalsEpsilon(n, s, 0, y.CesiumMath.EPSILON2),
          d = {
            ellipsoid: r,
            positions: o,
            width: i,
            cornerType: e._cornerType,
            granularity: e._granularity,
            saveAttributes: !1,
          };
        if (l)
          (d.height = n),
            (d.extrudedHeight = s),
            (d.offsetAttribute = e._offsetAttribute),
            (a = (function(e) {
              var t = e.ellipsoid,
                i = G(
                  J.CorridorGeometryLibrary.computePositions(e),
                  e.cornerType,
                ),
                r = i.wallIndices,
                o = e.height,
                a = e.extrudedHeight,
                n = i.attributes,
                s = i.indices,
                l = n.position.values,
                d = l.length,
                u = new Float64Array(d);
              u.set(l);
              var p,
                f = new Float64Array(2 * d);
              if (
                ((l = C.PolygonPipeline.scaleToGeodeticHeight(l, o, t)),
                (u = C.PolygonPipeline.scaleToGeodeticHeight(u, a, t)),
                f.set(l),
                f.set(u, d),
                (n.position.values = f),
                (d /= 3),
                R.defined(e.offsetAttribute))
              ) {
                var h = new Uint8Array(2 * d);
                if (e.offsetAttribute === E.GeometryOffsetAttribute.TOP)
                  h = E.arrayFill(h, 1, 0, d);
                else {
                  var c =
                    e.offsetAttribute === E.GeometryOffsetAttribute.NONE
                      ? 0
                      : 1;
                  h = E.arrayFill(h, c);
                }
                n.applyOffset = new F.GeometryAttribute({
                  componentDatatype: U.ComponentDatatype.UNSIGNED_BYTE,
                  componentsPerAttribute: 1,
                  values: h,
                });
              }
              var y = s.length,
                g = q.IndexDatatype.createTypedArray(
                  f.length / 3,
                  2 * (y + r.length),
                );
              g.set(s);
              var b,
                m,
                v = y;
              for (p = 0; p < y; p += 2) {
                var A = s[p],
                  _ = s[p + 1];
                (g[v++] = A + d), (g[v++] = _ + d);
              }
              for (p = 0; p < r.length; p++)
                (m = (b = r[p]) + d), (g[v++] = b), (g[v++] = m);
              return { attributes: n, indices: g };
            })(d));
        else if (
          (((a = G(
            J.CorridorGeometryLibrary.computePositions(d),
            d.cornerType,
          )).attributes.position.values = C.PolygonPipeline.scaleToGeodeticHeight(
            a.attributes.position.values,
            n,
            r,
          )),
          R.defined(e._offsetAttribute))
        ) {
          var u = a.attributes.position.values.length,
            p = new Uint8Array(u / 3),
            f = e._offsetAttribute === E.GeometryOffsetAttribute.NONE ? 0 : 1;
          E.arrayFill(p, f),
            (a.attributes.applyOffset = new F.GeometryAttribute({
              componentDatatype: U.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: p,
            }));
        }
        var h = a.attributes,
          c = g.BoundingSphere.fromVertices(h.position.values, void 0, 3);
        return new F.Geometry({
          attributes: h,
          indices: a.indices,
          primitiveType: F.PrimitiveType.LINES,
          boundingSphere: c,
          offsetAttribute: e._offsetAttribute,
        });
      }
    }),
    function(e, t) {
      return (
        R.defined(t) && (e = h.unpack(e, t)),
        (e._ellipsoid = B.Ellipsoid.clone(e._ellipsoid)),
        h.createGeometry(e)
      );
    }
  );
});
