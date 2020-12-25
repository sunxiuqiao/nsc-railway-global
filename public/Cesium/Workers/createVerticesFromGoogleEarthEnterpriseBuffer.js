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
  './AttributeCompression-fbcb3321',
  './IntersectionTests-3bb891b7',
  './Plane-a6a20716',
  './WebMercatorProjection-dcdddfe6',
  './createTaskProcessorWorker',
  './EllipsoidTangentPlane-7f2f6dd6',
  './OrientedBoundingBox-3bad3d73',
  './TerrainEncoding-af621bee',
], function(Wt, t, Ft, Ot, Yt, kt, e, i, a, n, r, Ut, o, Vt, Ht, Lt) {
  'use strict';
  var Dt = Uint16Array.BYTES_PER_ELEMENT,
    Gt = Int32Array.BYTES_PER_ELEMENT,
    jt = Uint32Array.BYTES_PER_ELEMENT,
    zt = Float32Array.BYTES_PER_ELEMENT,
    qt = Float64Array.BYTES_PER_ELEMENT;
  function Jt(t, e, i) {
    i = Wt.defaultValue(i, Ft.CesiumMath);
    for (var a = t.length, n = 0; n < a; ++n)
      if (i.equalsEpsilon(t[n], e, Ft.CesiumMath.EPSILON12)) return n;
    return -1;
  }
  var Kt = new Ot.Cartographic(),
    Qt = new Ot.Cartesian3(),
    Xt = new Ot.Cartesian3(),
    Zt = new Ot.Cartesian3(),
    $t = new Yt.Matrix4();
  function te(t, e, i, a, n, r, o, s, u, h) {
    for (var c = o.length, d = 0; d < c; ++d) {
      var g = o[d],
        l = g.cartographic,
        m = g.index,
        p = t.length,
        v = l.longitude,
        I = l.latitude;
      I = Ft.CesiumMath.clamp(
        I,
        -Ft.CesiumMath.PI_OVER_TWO,
        Ft.CesiumMath.PI_OVER_TWO,
      );
      var E = l.height - r.skirtHeight;
      (r.hMin = Math.min(r.hMin, E)),
        Ot.Cartographic.fromRadians(v, I, E, Kt),
        u && (Kt.longitude += s),
        u
          ? d === c - 1
            ? (Kt.latitude += h)
            : 0 === d && (Kt.latitude -= h)
          : (Kt.latitude += s);
      var f = r.ellipsoid.cartographicToCartesian(Kt);
      t.push(f),
        e.push(E),
        i.push(Ot.Cartesian2.clone(i[m])),
        0 < a.length && a.push(a[m]),
        Yt.Matrix4.multiplyByPoint(r.toENU, f, Qt);
      var T = r.minimum,
        C = r.maximum;
      Ot.Cartesian3.minimumByComponent(Qt, T, T),
        Ot.Cartesian3.maximumByComponent(Qt, C, C);
      var M = r.lastBorderPoint;
      if (Wt.defined(M)) {
        var N = M.index;
        n.push(N, p - 1, p, p, m, N);
      }
      r.lastBorderPoint = g;
    }
  }
  return o(function(t, e) {
    (t.ellipsoid = Ot.Ellipsoid.clone(t.ellipsoid)),
      (t.rectangle = Ot.Rectangle.clone(t.rectangle));
    var i = (function(t, e, i, a, n, r, o, s, u, h) {
        var c, d, g, l, m, p;
        p = Wt.defined(a)
          ? ((c = a.west),
            (d = a.south),
            (g = a.east),
            (l = a.north),
            (m = a.width),
            a.height)
          : ((c = Ft.CesiumMath.toRadians(n.west)),
            (d = Ft.CesiumMath.toRadians(n.south)),
            (g = Ft.CesiumMath.toRadians(n.east)),
            (l = Ft.CesiumMath.toRadians(n.north)),
            (m = Ft.CesiumMath.toRadians(a.width)),
            Ft.CesiumMath.toRadians(a.height));
        var v,
          I,
          E = [d, l],
          f = [c, g],
          T = Yt.Transforms.eastNorthUpToFixedFrame(e, i),
          C = Yt.Matrix4.inverseTransformation(T, $t);
        s &&
          ((v = Ut.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d)),
          (I =
            1 /
            (Ut.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l) - v)));
        var M = new DataView(t),
          N = Number.POSITIVE_INFINITY,
          x = Number.NEGATIVE_INFINITY,
          b = Xt;
        (b.x = Number.POSITIVE_INFINITY),
          (b.y = Number.POSITIVE_INFINITY),
          (b.z = Number.POSITIVE_INFINITY);
        var S = Zt;
        (S.x = Number.NEGATIVE_INFINITY),
          (S.y = Number.NEGATIVE_INFINITY),
          (S.z = Number.NEGATIVE_INFINITY);
        var w,
          P,
          B = 0,
          y = 0,
          A = 0;
        for (P = 0; P < 4; ++P) {
          var R = B;
          (w = M.getUint32(R, !0)), (R += jt);
          var _ = Ft.CesiumMath.toRadians(180 * M.getFloat64(R, !0));
          (R += qt), -1 === Jt(f, _) && f.push(_);
          var W = Ft.CesiumMath.toRadians(180 * M.getFloat64(R, !0));
          (R += qt), -1 === Jt(E, W) && E.push(W), (R += 2 * qt);
          var F = M.getInt32(R, !0);
          (R += Gt),
            (y += F),
            (F = M.getInt32(R, !0)),
            (A += 3 * F),
            (B += w + jt);
        }
        var O = [],
          Y = [],
          k = new Array(y),
          U = new Array(y),
          V = new Array(y),
          H = s ? new Array(y) : [],
          L = new Array(A),
          D = [],
          G = [],
          j = [],
          z = [],
          q = 0,
          J = 0;
        for (P = B = 0; P < 4; ++P) {
          w = M.getUint32(B, !0);
          var K = (B += jt),
            Q = Ft.CesiumMath.toRadians(180 * M.getFloat64(B, !0));
          B += qt;
          var X = Ft.CesiumMath.toRadians(180 * M.getFloat64(B, !0));
          B += qt;
          var Z = Ft.CesiumMath.toRadians(180 * M.getFloat64(B, !0)),
            $ = 0.5 * Z;
          B += qt;
          var tt = Ft.CesiumMath.toRadians(180 * M.getFloat64(B, !0)),
            et = 0.5 * tt;
          B += qt;
          var it = M.getInt32(B, !0);
          B += Gt;
          var at = M.getInt32(B, !0);
          (B += Gt), (B += Gt);
          for (var nt = new Array(it), rt = 0; rt < it; ++rt) {
            var ot = Q + M.getUint8(B++) * Z;
            Kt.longitude = ot;
            var st = X + M.getUint8(B++) * tt;
            Kt.latitude = st;
            var ut = M.getFloat32(B, !0);
            if (
              ((B += zt),
              0 !== ut && ut < h && (ut *= -Math.pow(2, u)),
              (ut *= 6371010 * r),
              (Kt.height = ut),
              -1 !== Jt(f, ot) || -1 !== Jt(E, st))
            ) {
              var ht = Jt(O, Kt, Ot.Cartographic);
              if (-1 !== ht) {
                nt[rt] = Y[ht];
                continue;
              }
              O.push(Ot.Cartographic.clone(Kt)), Y.push(q);
            }
            (nt[rt] = q),
              Math.abs(ot - c) < $
                ? D.push({ index: q, cartographic: Ot.Cartographic.clone(Kt) })
                : Math.abs(ot - g) < $
                ? j.push({ index: q, cartographic: Ot.Cartographic.clone(Kt) })
                : Math.abs(st - d) < et
                ? G.push({ index: q, cartographic: Ot.Cartographic.clone(Kt) })
                : Math.abs(st - l) < et &&
                  z.push({ index: q, cartographic: Ot.Cartographic.clone(Kt) }),
              (N = Math.min(ut, N)),
              (x = Math.max(ut, x)),
              (V[q] = ut);
            var ct = i.cartographicToCartesian(Kt);
            (k[q] = ct),
              s &&
                (H[q] =
                  (Ut.WebMercatorProjection.geodeticLatitudeToMercatorAngle(
                    st,
                  ) -
                    v) *
                  I),
              Yt.Matrix4.multiplyByPoint(C, ct, Qt),
              Ot.Cartesian3.minimumByComponent(Qt, b, b),
              Ot.Cartesian3.maximumByComponent(Qt, S, S);
            var dt = (ot - c) / (g - c);
            dt = Ft.CesiumMath.clamp(dt, 0, 1);
            var gt = (st - d) / (l - d);
            (gt = Ft.CesiumMath.clamp(gt, 0, 1)),
              (U[q] = new Ot.Cartesian2(dt, gt)),
              ++q;
          }
          for (var lt = 3 * at, mt = 0; mt < lt; ++mt, ++J)
            (L[J] = nt[M.getUint16(B, !0)]), (B += Dt);
          if (w !== B - K) throw new kt.RuntimeError('Invalid terrain tile.');
        }
        (k.length = q), (U.length = q), (V.length = q), s && (H.length = q);
        var pt = q,
          vt = J,
          It = {
            hMin: N,
            lastBorderPoint: void 0,
            skirtHeight: o,
            toENU: C,
            ellipsoid: i,
            minimum: b,
            maximum: S,
          };
        D.sort(function(t, e) {
          return e.cartographic.latitude - t.cartographic.latitude;
        }),
          G.sort(function(t, e) {
            return t.cartographic.longitude - e.cartographic.longitude;
          }),
          j.sort(function(t, e) {
            return t.cartographic.latitude - e.cartographic.latitude;
          }),
          z.sort(function(t, e) {
            return e.cartographic.longitude - t.cartographic.longitude;
          });
        var Et = 1e-5;
        if (
          (te(k, V, U, H, L, It, D, -Et * m, !0, -Et * p),
          te(k, V, U, H, L, It, G, -Et * p, !1),
          te(k, V, U, H, L, It, j, Et * m, !0, Et * p),
          te(k, V, U, H, L, It, z, Et * p, !1),
          0 < D.length && 0 < z.length)
        ) {
          var ft = D[0].index,
            Tt = z[z.length - 1].index,
            Ct = k.length - 1;
          L.push(Tt, Ct, pt, pt, ft, Tt);
        }
        y = k.length;
        var Mt,
          Nt = Yt.BoundingSphere.fromPoints(k);
        Wt.defined(a) &&
          (Mt = Ht.OrientedBoundingBox.fromRectangle(a, N, x, i));
        for (
          var xt = new Lt.EllipsoidalOccluder(
              i,
            ).computeHorizonCullingPointPossiblyUnderEllipsoid(e, k, N),
            bt = new Vt.AxisAlignedBoundingBox(b, S, e),
            St = new Lt.TerrainEncoding(bt, It.hMin, x, T, !1, s),
            wt = new Float32Array(y * St.getStride()),
            Pt = 0,
            Bt = 0;
          Bt < y;
          ++Bt
        )
          Pt = St.encode(wt, Pt, k[Bt], U[Bt], V[Bt], void 0, H[Bt]);
        var yt = D.map(function(t) {
            return t.index;
          }).reverse(),
          At = G.map(function(t) {
            return t.index;
          }).reverse(),
          Rt = j
            .map(function(t) {
              return t.index;
            })
            .reverse(),
          _t = z
            .map(function(t) {
              return t.index;
            })
            .reverse();
        return (
          At.unshift(Rt[Rt.length - 1]),
          At.push(yt[0]),
          _t.unshift(yt[yt.length - 1]),
          _t.push(Rt[0]),
          {
            vertices: wt,
            indices: new Uint16Array(L),
            maximumHeight: x,
            minimumHeight: N,
            encoding: St,
            boundingSphere3D: Nt,
            orientedBoundingBox: Mt,
            occludeePointInScaledSpace: xt,
            vertexCountWithoutSkirts: pt,
            indexCountWithoutSkirts: vt,
            westIndicesSouthToNorth: yt,
            southIndicesEastToWest: At,
            eastIndicesNorthToSouth: Rt,
            northIndicesWestToEast: _t,
          }
        );
      })(
        t.buffer,
        t.relativeToCenter,
        t.ellipsoid,
        t.rectangle,
        t.nativeRectangle,
        t.exaggeration,
        t.skirtHeight,
        t.includeWebMercatorT,
        t.negativeAltitudeExponentBias,
        t.negativeElevationThreshold,
      ),
      a = i.vertices;
    e.push(a.buffer);
    var n = i.indices;
    return (
      e.push(n.buffer),
      {
        vertices: a.buffer,
        indices: n.buffer,
        numberOfAttributes: i.encoding.getStride(),
        minimumHeight: i.minimumHeight,
        maximumHeight: i.maximumHeight,
        boundingSphere3D: i.boundingSphere3D,
        orientedBoundingBox: i.orientedBoundingBox,
        occludeePointInScaledSpace: i.occludeePointInScaledSpace,
        encoding: i.encoding,
        vertexCountWithoutSkirts: i.vertexCountWithoutSkirts,
        indexCountWithoutSkirts: i.indexCountWithoutSkirts,
        westIndicesSouthToNorth: i.westIndicesSouthToNorth,
        southIndicesEastToWest: i.southIndicesEastToWest,
        eastIndicesNorthToSouth: i.eastIndicesNorthToSouth,
        northIndicesWestToEast: i.northIndicesWestToEast,
      }
    );
  });
});
