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
!(function(n) {
  var h = 15,
    st = 256,
    p = 573,
    lt = 256,
    ct = -2,
    ht = -5,
    e = [
      0,
      1,
      2,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      0,
      0,
      16,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
    ];
  function pt() {
    var c = this;
    function u(t, e) {
      for (var n = 0; (n |= 1 & t), (t >>>= 1), (n <<= 1), 0 < --e; );
      return n >>> 1;
    }
    c.build_tree = function(t) {
      var e,
        n,
        a,
        i = c.dyn_tree,
        r = c.stat_desc.static_tree,
        _ = c.stat_desc.elems,
        o = -1;
      for (t.heap_len = 0, t.heap_max = p, e = 0; e < _; e++)
        0 !== i[2 * e]
          ? ((t.heap[++t.heap_len] = o = e), (t.depth[e] = 0))
          : (i[2 * e + 1] = 0);
      for (; t.heap_len < 2; )
        (i[2 * (a = t.heap[++t.heap_len] = o < 2 ? ++o : 0)] = 1),
          (t.depth[a] = 0),
          t.opt_len--,
          r && (t.static_len -= r[2 * a + 1]);
      for (c.max_code = o, e = Math.floor(t.heap_len / 2); 1 <= e; e--)
        t.pqdownheap(i, e);
      for (
        a = _;
        (e = t.heap[1]),
          (t.heap[1] = t.heap[t.heap_len--]),
          t.pqdownheap(i, 1),
          (n = t.heap[1]),
          (t.heap[--t.heap_max] = e),
          (t.heap[--t.heap_max] = n),
          (i[2 * a] = i[2 * e] + i[2 * n]),
          (t.depth[a] = Math.max(t.depth[e], t.depth[n]) + 1),
          (i[2 * e + 1] = i[2 * n + 1] = a),
          (t.heap[1] = a++),
          t.pqdownheap(i, 1),
          2 <= t.heap_len;

      );
      (t.heap[--t.heap_max] = t.heap[1]),
        (function(t) {
          var e,
            n,
            a,
            i,
            r,
            _,
            o = c.dyn_tree,
            u = c.stat_desc.static_tree,
            f = c.stat_desc.extra_bits,
            d = c.stat_desc.extra_base,
            s = c.stat_desc.max_length,
            l = 0;
          for (i = 0; i <= h; i++) t.bl_count[i] = 0;
          for (
            o[2 * t.heap[t.heap_max] + 1] = 0, e = t.heap_max + 1;
            e < p;
            e++
          )
            s < (i = o[2 * o[2 * (n = t.heap[e]) + 1] + 1] + 1) &&
              ((i = s), l++),
              (o[2 * n + 1] = i),
              n > c.max_code ||
                (t.bl_count[i]++,
                (r = 0),
                d <= n && (r = f[n - d]),
                (_ = o[2 * n]),
                (t.opt_len += _ * (i + r)),
                u && (t.static_len += _ * (u[2 * n + 1] + r)));
          if (0 !== l) {
            do {
              for (i = s - 1; 0 === t.bl_count[i]; ) i--;
              t.bl_count[i]--,
                (t.bl_count[i + 1] += 2),
                t.bl_count[s]--,
                (l -= 2);
            } while (0 < l);
            for (i = s; 0 !== i; i--)
              for (n = t.bl_count[i]; 0 !== n; )
                (a = t.heap[--e]) > c.max_code ||
                  (o[2 * a + 1] != i &&
                    ((t.opt_len += (i - o[2 * a + 1]) * o[2 * a]),
                    (o[2 * a + 1] = i)),
                  n--);
          }
        })(t),
        (function(t, e, n) {
          var a,
            i,
            r,
            _ = [],
            o = 0;
          for (a = 1; a <= h; a++) _[a] = o = (o + n[a - 1]) << 1;
          for (i = 0; i <= e; i++)
            0 !== (r = t[2 * i + 1]) && (t[2 * i] = u(_[r]++, r));
        })(i, c.max_code, t.bl_count);
    };
  }
  function xt(t, e, n, a, i) {
    var r = this;
    (r.static_tree = t),
      (r.extra_bits = e),
      (r.extra_base = n),
      (r.elems = a),
      (r.max_length = i);
  }
  (pt._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    28,
  ]),
    (pt.base_length = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      10,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      160,
      192,
      224,
      0,
    ]),
    (pt.base_dist = [
      0,
      1,
      2,
      3,
      4,
      6,
      8,
      12,
      16,
      24,
      32,
      48,
      64,
      96,
      128,
      192,
      256,
      384,
      512,
      768,
      1024,
      1536,
      2048,
      3072,
      4096,
      6144,
      8192,
      12288,
      16384,
      24576,
    ]),
    (pt.d_code = function(t) {
      return t < 256 ? e[t] : e[256 + (t >>> 7)];
    }),
    (pt.extra_lbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
    ]),
    (pt.extra_dbits = [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
    ]),
    (pt.extra_blbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
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
      3,
      7,
    ]),
    (pt.bl_order = [
      16,
      17,
      18,
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
    ]),
    (xt.static_ltree = [
      12,
      8,
      140,
      8,
      76,
      8,
      204,
      8,
      44,
      8,
      172,
      8,
      108,
      8,
      236,
      8,
      28,
      8,
      156,
      8,
      92,
      8,
      220,
      8,
      60,
      8,
      188,
      8,
      124,
      8,
      252,
      8,
      2,
      8,
      130,
      8,
      66,
      8,
      194,
      8,
      34,
      8,
      162,
      8,
      98,
      8,
      226,
      8,
      18,
      8,
      146,
      8,
      82,
      8,
      210,
      8,
      50,
      8,
      178,
      8,
      114,
      8,
      242,
      8,
      10,
      8,
      138,
      8,
      74,
      8,
      202,
      8,
      42,
      8,
      170,
      8,
      106,
      8,
      234,
      8,
      26,
      8,
      154,
      8,
      90,
      8,
      218,
      8,
      58,
      8,
      186,
      8,
      122,
      8,
      250,
      8,
      6,
      8,
      134,
      8,
      70,
      8,
      198,
      8,
      38,
      8,
      166,
      8,
      102,
      8,
      230,
      8,
      22,
      8,
      150,
      8,
      86,
      8,
      214,
      8,
      54,
      8,
      182,
      8,
      118,
      8,
      246,
      8,
      14,
      8,
      142,
      8,
      78,
      8,
      206,
      8,
      46,
      8,
      174,
      8,
      110,
      8,
      238,
      8,
      30,
      8,
      158,
      8,
      94,
      8,
      222,
      8,
      62,
      8,
      190,
      8,
      126,
      8,
      254,
      8,
      1,
      8,
      129,
      8,
      65,
      8,
      193,
      8,
      33,
      8,
      161,
      8,
      97,
      8,
      225,
      8,
      17,
      8,
      145,
      8,
      81,
      8,
      209,
      8,
      49,
      8,
      177,
      8,
      113,
      8,
      241,
      8,
      9,
      8,
      137,
      8,
      73,
      8,
      201,
      8,
      41,
      8,
      169,
      8,
      105,
      8,
      233,
      8,
      25,
      8,
      153,
      8,
      89,
      8,
      217,
      8,
      57,
      8,
      185,
      8,
      121,
      8,
      249,
      8,
      5,
      8,
      133,
      8,
      69,
      8,
      197,
      8,
      37,
      8,
      165,
      8,
      101,
      8,
      229,
      8,
      21,
      8,
      149,
      8,
      85,
      8,
      213,
      8,
      53,
      8,
      181,
      8,
      117,
      8,
      245,
      8,
      13,
      8,
      141,
      8,
      77,
      8,
      205,
      8,
      45,
      8,
      173,
      8,
      109,
      8,
      237,
      8,
      29,
      8,
      157,
      8,
      93,
      8,
      221,
      8,
      61,
      8,
      189,
      8,
      125,
      8,
      253,
      8,
      19,
      9,
      275,
      9,
      147,
      9,
      403,
      9,
      83,
      9,
      339,
      9,
      211,
      9,
      467,
      9,
      51,
      9,
      307,
      9,
      179,
      9,
      435,
      9,
      115,
      9,
      371,
      9,
      243,
      9,
      499,
      9,
      11,
      9,
      267,
      9,
      139,
      9,
      395,
      9,
      75,
      9,
      331,
      9,
      203,
      9,
      459,
      9,
      43,
      9,
      299,
      9,
      171,
      9,
      427,
      9,
      107,
      9,
      363,
      9,
      235,
      9,
      491,
      9,
      27,
      9,
      283,
      9,
      155,
      9,
      411,
      9,
      91,
      9,
      347,
      9,
      219,
      9,
      475,
      9,
      59,
      9,
      315,
      9,
      187,
      9,
      443,
      9,
      123,
      9,
      379,
      9,
      251,
      9,
      507,
      9,
      7,
      9,
      263,
      9,
      135,
      9,
      391,
      9,
      71,
      9,
      327,
      9,
      199,
      9,
      455,
      9,
      39,
      9,
      295,
      9,
      167,
      9,
      423,
      9,
      103,
      9,
      359,
      9,
      231,
      9,
      487,
      9,
      23,
      9,
      279,
      9,
      151,
      9,
      407,
      9,
      87,
      9,
      343,
      9,
      215,
      9,
      471,
      9,
      55,
      9,
      311,
      9,
      183,
      9,
      439,
      9,
      119,
      9,
      375,
      9,
      247,
      9,
      503,
      9,
      15,
      9,
      271,
      9,
      143,
      9,
      399,
      9,
      79,
      9,
      335,
      9,
      207,
      9,
      463,
      9,
      47,
      9,
      303,
      9,
      175,
      9,
      431,
      9,
      111,
      9,
      367,
      9,
      239,
      9,
      495,
      9,
      31,
      9,
      287,
      9,
      159,
      9,
      415,
      9,
      95,
      9,
      351,
      9,
      223,
      9,
      479,
      9,
      63,
      9,
      319,
      9,
      191,
      9,
      447,
      9,
      127,
      9,
      383,
      9,
      255,
      9,
      511,
      9,
      0,
      7,
      64,
      7,
      32,
      7,
      96,
      7,
      16,
      7,
      80,
      7,
      48,
      7,
      112,
      7,
      8,
      7,
      72,
      7,
      40,
      7,
      104,
      7,
      24,
      7,
      88,
      7,
      56,
      7,
      120,
      7,
      4,
      7,
      68,
      7,
      36,
      7,
      100,
      7,
      20,
      7,
      84,
      7,
      52,
      7,
      116,
      7,
      3,
      8,
      131,
      8,
      67,
      8,
      195,
      8,
      35,
      8,
      163,
      8,
      99,
      8,
      227,
      8,
    ]),
    (xt.static_dtree = [
      0,
      5,
      16,
      5,
      8,
      5,
      24,
      5,
      4,
      5,
      20,
      5,
      12,
      5,
      28,
      5,
      2,
      5,
      18,
      5,
      10,
      5,
      26,
      5,
      6,
      5,
      22,
      5,
      14,
      5,
      30,
      5,
      1,
      5,
      17,
      5,
      9,
      5,
      25,
      5,
      5,
      5,
      21,
      5,
      13,
      5,
      29,
      5,
      3,
      5,
      19,
      5,
      11,
      5,
      27,
      5,
      7,
      5,
      23,
      5,
    ]),
    (xt.static_l_desc = new xt(xt.static_ltree, pt.extra_lbits, 257, 286, h)),
    (xt.static_d_desc = new xt(xt.static_dtree, pt.extra_dbits, 0, 30, h)),
    (xt.static_bl_desc = new xt(null, pt.extra_blbits, 0, 19, 7));
  function t(t, e, n, a, i) {
    var r = this;
    (r.good_length = t),
      (r.max_lazy = e),
      (r.nice_length = n),
      (r.max_chain = a),
      (r.func = i);
  }
  var a,
    vt = [
      new t(0, 0, 0, 0, 0),
      new t(4, 4, 8, 4, 1),
      new t(4, 5, 16, 8, 1),
      new t(4, 6, 32, 32, 1),
      new t(4, 4, 16, 16, 2),
      new t(8, 16, 32, 32, 2),
      new t(8, 16, 128, 128, 2),
      new t(8, 32, 128, 256, 2),
      new t(32, 128, 258, 1024, 2),
      new t(32, 258, 258, 4096, 2),
    ],
    bt = [
      'need dictionary',
      'stream end',
      '',
      '',
      'stream error',
      'data error',
      '',
      'buffer error',
      '',
      '',
    ],
    gt = 113,
    wt = 666,
    mt = 258,
    yt = 262;
  function Mt(t, e, n, a) {
    var i = t[2 * e],
      r = t[2 * n];
    return i < r || (i == r && a[e] <= a[n]);
  }
  function i() {
    var u,
      f,
      d,
      s,
      l,
      c,
      h,
      p,
      i,
      x,
      v,
      b,
      g,
      _,
      w,
      m,
      y,
      M,
      A,
      U,
      E,
      k,
      z,
      q,
      D,
      I,
      P,
      S,
      L,
      j,
      o,
      B,
      C,
      F,
      G,
      H,
      J,
      r,
      K,
      N,
      O,
      Q = this,
      R = new pt(),
      T = new pt(),
      V = new pt();
    function W() {
      var t;
      for (t = 0; t < 286; t++) o[2 * t] = 0;
      for (t = 0; t < 30; t++) B[2 * t] = 0;
      for (t = 0; t < 19; t++) C[2 * t] = 0;
      (o[512] = 1), (Q.opt_len = Q.static_len = 0), (H = r = 0);
    }
    function X(t, e) {
      var n,
        a,
        i = -1,
        r = t[1],
        _ = 0,
        o = 7,
        u = 4;
      for (
        0 === r && ((o = 138), (u = 3)), t[2 * (e + 1) + 1] = 65535, n = 0;
        n <= e;
        n++
      )
        (a = r),
          (r = t[2 * (n + 1) + 1]),
          (++_ < o && a == r) ||
            (_ < u
              ? (C[2 * a] += _)
              : 0 !== a
              ? (a != i && C[2 * a]++, C[32]++)
              : _ <= 10
              ? C[34]++
              : C[36]++,
            (i = a),
            (u =
              (_ = 0) === r
                ? ((o = 138), 3)
                : a == r
                ? ((o = 6), 3)
                : ((o = 7), 4)));
    }
    function Y(t) {
      Q.pending_buf[Q.pending++] = t;
    }
    function Z(t) {
      Y(255 & t), Y((t >>> 8) & 255);
    }
    function $(t, e) {
      var n,
        a = e;
      16 - a < O
        ? (Z((N |= ((n = t) << O) & 65535)),
          (N = n >>> (16 - O)),
          (O += a - 16))
        : ((N |= (t << O) & 65535), (O += a));
    }
    function tt(t, e) {
      var n = 2 * t;
      $(65535 & e[n], 65535 & e[1 + n]);
    }
    function et(t, e) {
      var n,
        a,
        i = -1,
        r = t[1],
        _ = 0,
        o = 7,
        u = 4;
      for (0 === r && ((o = 138), (u = 3)), n = 0; n <= e; n++)
        if (((a = r), (r = t[2 * (n + 1) + 1]), !(++_ < o && a == r))) {
          if (_ < u) for (; tt(a, C), 0 != --_; );
          else
            0 !== a
              ? (a != i && (tt(a, C), _--), tt(16, C), $(_ - 3, 2))
              : _ <= 10
              ? (tt(17, C), $(_ - 3, 3))
              : (tt(18, C), $(_ - 11, 7));
          (i = a),
            (u =
              (_ = 0) === r
                ? ((o = 138), 3)
                : a == r
                ? ((o = 6), 3)
                : ((o = 7), 4));
        }
    }
    function nt() {
      16 == O
        ? (Z(N), (O = N = 0))
        : 8 <= O && (Y(255 & N), (N >>>= 8), (O -= 8));
    }
    function at(t, e) {
      var n, a, i;
      if (
        ((Q.pending_buf[J + 2 * H] = (t >>> 8) & 255),
        (Q.pending_buf[J + 2 * H + 1] = 255 & t),
        (Q.pending_buf[F + H] = 255 & e),
        H++,
        0 === t
          ? o[2 * e]++
          : (r++,
            t--,
            o[2 * (pt._length_code[e] + st + 1)]++,
            B[2 * pt.d_code(t)]++),
        0 == (8191 & H) && 2 < P)
      ) {
        for (n = 8 * H, a = E - y, i = 0; i < 30; i++)
          n += B[2 * i] * (5 + pt.extra_dbits[i]);
        if (((n >>>= 3), r < Math.floor(H / 2) && n < Math.floor(a / 2)))
          return !0;
      }
      return H == G - 1;
    }
    function it(t, e) {
      var n,
        a,
        i,
        r,
        _ = 0;
      if (0 !== H)
        for (
          ;
          (n =
            ((Q.pending_buf[J + 2 * _] << 8) & 65280) |
            (255 & Q.pending_buf[J + 2 * _ + 1])),
            (a = 255 & Q.pending_buf[F + _]),
            _++,
            0 === n
              ? tt(a, t)
              : (tt((i = pt._length_code[a]) + st + 1, t),
                0 !== (r = pt.extra_lbits[i]) && $((a -= pt.base_length[i]), r),
                tt((i = pt.d_code(--n)), e),
                0 !== (r = pt.extra_dbits[i]) && $((n -= pt.base_dist[i]), r)),
            _ < H;

        );
      tt(lt, t), (K = t[513]);
    }
    function rt() {
      8 < O ? Z(N) : 0 < O && Y(255 & N), (O = N = 0);
    }
    function _t(t, e, n) {
      var a, i, r;
      $(0 + (n ? 1 : 0), 3),
        (a = t),
        (i = e),
        (r = !0),
        rt(),
        (K = 8),
        r && (Z(i), Z(~i)),
        Q.pending_buf.set(p.subarray(a, a + i), Q.pending),
        (Q.pending += i);
    }
    function e(t, e, n) {
      var a,
        i,
        r = 0;
      0 < P
        ? (R.build_tree(Q),
          T.build_tree(Q),
          (r = (function() {
            var t;
            for (
              X(o, R.max_code), X(B, T.max_code), V.build_tree(Q), t = 18;
              3 <= t && 0 === C[2 * pt.bl_order[t] + 1];
              t--
            );
            return (Q.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
          })()),
          (a = (Q.opt_len + 3 + 7) >>> 3),
          (i = (Q.static_len + 3 + 7) >>> 3) <= a && (a = i))
        : (a = i = e + 5),
        e + 4 <= a && -1 != t
          ? _t(t, e, n)
          : i == a
          ? ($(2 + (n ? 1 : 0), 3), it(xt.static_ltree, xt.static_dtree))
          : ($(4 + (n ? 1 : 0), 3),
            (function(t, e, n) {
              var a;
              for ($(t - 257, 5), $(e - 1, 5), $(n - 4, 4), a = 0; a < n; a++)
                $(C[2 * pt.bl_order[a] + 1], 3);
              et(o, t - 1), et(B, e - 1);
            })(R.max_code + 1, T.max_code + 1, r + 1),
            it(o, B)),
        W(),
        n && rt();
    }
    function ot(t) {
      e(0 <= y ? y : -1, E - y, t), (y = E), u.flush_pending();
    }
    function ut() {
      var t, e, n, a;
      do {
        if (0 === (a = i - z - E) && 0 === E && 0 === z) a = l;
        else if (-1 == a) a--;
        else if (l + l - yt <= E) {
          for (
            p.set(p.subarray(l, l + l), 0), k -= l, E -= l, y -= l, n = t = g;
            (e = 65535 & v[--n]), (v[n] = l <= e ? e - l : 0), 0 != --t;

          );
          for (
            n = t = l;
            (e = 65535 & x[--n]), (x[n] = l <= e ? e - l : 0), 0 != --t;

          );
          a += l;
        }
        if (0 === u.avail_in) return;
        (t = u.read_buf(p, E + z, a)),
          3 <= (z += t) &&
            (b = (((b = 255 & p[E]) << m) ^ (255 & p[E + 1])) & w);
      } while (z < yt && 0 !== u.avail_in);
    }
    function ft(t) {
      var e,
        n,
        a = D,
        i = E,
        r = q,
        _ = l - yt < E ? E - (l - yt) : 0,
        o = j,
        u = h,
        f = E + mt,
        d = p[i + r - 1],
        s = p[i + r];
      L <= q && (a >>= 2), z < o && (o = z);
      do {
        if (
          p[(e = t) + r] == s &&
          p[e + r - 1] == d &&
          p[e] == p[i] &&
          p[++e] == p[i + 1]
        ) {
          (i += 2), e++;
          do {} while (
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            p[++i] == p[++e] &&
            i < f
          );
          if (((n = mt - (f - i)), (i = f - mt), r < n)) {
            if (((k = t), o <= (r = n))) break;
            (d = p[i + r - 1]), (s = p[i + r]);
          }
        }
      } while ((t = 65535 & x[t & u]) > _ && 0 != --a);
      return r <= z ? r : z;
    }
    function dt(t) {
      return (
        (t.total_in = t.total_out = 0),
        (t.msg = null),
        (Q.pending = 0),
        (Q.pending_out = 0),
        (f = gt),
        (s = 0),
        (R.dyn_tree = o),
        (R.stat_desc = xt.static_l_desc),
        (T.dyn_tree = B),
        (T.stat_desc = xt.static_d_desc),
        (V.dyn_tree = C),
        (V.stat_desc = xt.static_bl_desc),
        (O = N = 0),
        (K = 8),
        W(),
        (function() {
          var t;
          for (i = 2 * l, t = v[g - 1] = 0; t < g - 1; t++) v[t] = 0;
          (I = vt[P].max_lazy),
            (L = vt[P].good_length),
            (j = vt[P].nice_length),
            (D = vt[P].max_chain),
            (M = q = 2),
            (b = U = z = y = E = 0);
        })(),
        0
      );
    }
    (Q.depth = []),
      (Q.bl_count = []),
      (Q.heap = []),
      (o = []),
      (B = []),
      (C = []),
      (Q.pqdownheap = function(t, e) {
        for (
          var n = Q.heap, a = n[e], i = e << 1;
          i <= Q.heap_len &&
          (i < Q.heap_len && Mt(t, n[i + 1], n[i], Q.depth) && i++,
          !Mt(t, a, n[i], Q.depth));

        )
          (n[e] = n[i]), (e = i), (i <<= 1);
        n[e] = a;
      }),
      (Q.deflateInit = function(t, e, n, a, i, r) {
        return (
          (a = a || 8),
          (i = i || 8),
          (r = r || 0),
          (t.msg = null),
          -1 == e && (e = 6),
          i < 1 ||
          9 < i ||
          8 != a ||
          n < 9 ||
          15 < n ||
          e < 0 ||
          9 < e ||
          r < 0 ||
          2 < r
            ? ct
            : ((t.dstate = Q),
              (h = (l = 1 << (c = n)) - 1),
              (w = (g = 1 << (_ = i + 7)) - 1),
              (m = Math.floor((_ + 3 - 1) / 3)),
              (p = new Uint8Array(2 * l)),
              (x = []),
              (v = []),
              (G = 1 << (i + 6)),
              (Q.pending_buf = new Uint8Array(4 * G)),
              (d = 4 * G),
              (J = Math.floor(G / 2)),
              (F = 3 * G),
              (P = e),
              (S = r),
              dt(t))
        );
      }),
      (Q.deflateEnd = function() {
        return 42 != f && f != gt && f != wt
          ? ct
          : ((Q.pending_buf = null),
            (p = x = v = null),
            (Q.dstate = null),
            f == gt ? -3 : 0);
      }),
      (Q.deflateParams = function(t, e, n) {
        var a = 0;
        return (
          -1 == e && (e = 6),
          e < 0 || 9 < e || n < 0 || 2 < n
            ? ct
            : (vt[P].func != vt[e].func &&
                0 !== t.total_in &&
                (a = t.deflate(1)),
              P != e &&
                ((I = vt[(P = e)].max_lazy),
                (L = vt[P].good_length),
                (j = vt[P].nice_length),
                (D = vt[P].max_chain)),
              (S = n),
              a)
        );
      }),
      (Q.deflateSetDictionary = function(t, e, n) {
        var a,
          i = n,
          r = 0;
        if (!e || 42 != f) return ct;
        if (i < 3) return 0;
        for (
          l - yt < i && (r = n - (i = l - yt)),
            p.set(e.subarray(r, r + i), 0),
            y = E = i,
            b = (((b = 255 & p[0]) << m) ^ (255 & p[1])) & w,
            a = 0;
          a <= i - 3;
          a++
        )
          (b = ((b << m) ^ (255 & p[a + 2])) & w),
            (x[a & h] = v[b]),
            (v[b] = a);
        return 0;
      }),
      (Q.deflate = function(t, e) {
        var n, a, i, r, _, o;
        if (4 < e || e < 0) return ct;
        if (
          !t.next_out ||
          (!t.next_in && 0 !== t.avail_in) ||
          (f == wt && 4 != e)
        )
          return (t.msg = bt[4]), ct;
        if (0 === t.avail_out) return (t.msg = bt[7]), ht;
        if (
          ((u = t),
          (r = s),
          (s = e),
          42 == f &&
            ((a = (8 + ((c - 8) << 4)) << 8),
            3 < (i = ((P - 1) & 255) >> 1) && (i = 3),
            (a |= i << 6),
            0 !== E && (a |= 32),
            (f = gt),
            Y(((o = a += 31 - (a % 31)) >> 8) & 255),
            Y(255 & o)),
          0 !== Q.pending)
        ) {
          if ((u.flush_pending(), 0 === u.avail_out)) return (s = -1), 0;
        } else if (0 === u.avail_in && e <= r && 4 != e)
          return (u.msg = bt[7]), ht;
        if (f == wt && 0 !== u.avail_in) return (t.msg = bt[7]), ht;
        if (0 !== u.avail_in || 0 !== z || (0 != e && f != wt)) {
          switch (((_ = -1), vt[P].func)) {
            case 0:
              _ = (function(t) {
                var e,
                  n = 65535;
                for (d - 5 < n && (n = d - 5); ; ) {
                  if (z <= 1) {
                    if ((ut(), 0 === z && 0 == t)) return 0;
                    if (0 === z) break;
                  }
                  if (
                    ((E += z),
                    (e = y + n),
                    ((z = 0) === E || e <= E) &&
                      ((z = E - e), (E = e), ot(!1), 0 === u.avail_out))
                  )
                    return 0;
                  if (l - yt <= E - y && (ot(!1), 0 === u.avail_out)) return 0;
                }
                return (
                  ot(4 == t),
                  0 === u.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
              break;
            case 1:
              _ = (function(t) {
                for (var e, n = 0; ; ) {
                  if (z < yt) {
                    if ((ut(), z < yt && 0 == t)) return 0;
                    if (0 === z) break;
                  }
                  if (
                    (3 <= z &&
                      ((b = ((b << m) ^ (255 & p[E + 2])) & w),
                      (n = 65535 & v[b]),
                      (x[E & h] = v[b]),
                      (v[b] = E)),
                    0 !== n &&
                      ((E - n) & 65535) <= l - yt &&
                      2 != S &&
                      (M = ft(n)),
                    3 <= M)
                  )
                    if (((e = at(E - k, M - 3)), (z -= M), M <= I && 3 <= z)) {
                      for (
                        M--;
                        (b = ((b << m) ^ (255 & p[++E + 2])) & w),
                          (n = 65535 & v[b]),
                          (x[E & h] = v[b]),
                          (v[b] = E),
                          0 != --M;

                      );
                      E++;
                    } else
                      (E += M),
                        (M = 0),
                        (b = (((b = 255 & p[E]) << m) ^ (255 & p[E + 1])) & w);
                  else (e = at(0, 255 & p[E])), z--, E++;
                  if (e && (ot(!1), 0 === u.avail_out)) return 0;
                }
                return (
                  ot(4 == t),
                  0 === u.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
              break;
            case 2:
              _ = (function(t) {
                for (var e, n, a = 0; ; ) {
                  if (z < yt) {
                    if ((ut(), z < yt && 0 == t)) return 0;
                    if (0 === z) break;
                  }
                  if (
                    (3 <= z &&
                      ((b = ((b << m) ^ (255 & p[E + 2])) & w),
                      (a = 65535 & v[b]),
                      (x[E & h] = v[b]),
                      (v[b] = E)),
                    (q = M),
                    (A = k),
                    (M = 2),
                    0 !== a &&
                      q < I &&
                      ((E - a) & 65535) <= l - yt &&
                      (2 != S && (M = ft(a)),
                      M <= 5 &&
                        (1 == S || (3 == M && 4096 < E - k)) &&
                        (M = 2)),
                    3 <= q && M <= q)
                  ) {
                    for (
                      n = E + z - 3,
                        e = at(E - 1 - A, q - 3),
                        z -= q - 1,
                        q -= 2;
                      ++E <= n &&
                        ((b = ((b << m) ^ (255 & p[E + 2])) & w),
                        (a = 65535 & v[b]),
                        (x[E & h] = v[b]),
                        (v[b] = E)),
                        0 != --q;

                    );
                    if (
                      ((U = 0), (M = 2), E++, e && (ot(!1), 0 === u.avail_out))
                    )
                      return 0;
                  } else if (0 !== U) {
                    if (
                      ((e = at(0, 255 & p[E - 1])) && ot(!1),
                      E++,
                      z--,
                      0 === u.avail_out)
                    )
                      return 0;
                  } else (U = 1), E++, z--;
                }
                return (
                  0 !== U && ((e = at(0, 255 & p[E - 1])), (U = 0)),
                  ot(4 == t),
                  0 === u.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                );
              })(e);
          }
          if (((2 != _ && 3 != _) || (f = wt), 0 == _ || 2 == _))
            return 0 === u.avail_out && (s = -1), 0;
          if (1 == _) {
            if (1 == e)
              $(2, 3),
                tt(lt, xt.static_ltree),
                nt(),
                1 + K + 10 - O < 9 && ($(2, 3), tt(lt, xt.static_ltree), nt()),
                (K = 7);
            else if ((_t(0, 0, !1), 3 == e)) for (n = 0; n < g; n++) v[n] = 0;
            if ((u.flush_pending(), 0 === u.avail_out)) return (s = -1), 0;
          }
        }
        return 4 != e ? 0 : 1;
      });
  }
  function r() {
    var t = this;
    (t.next_in_index = 0),
      (t.next_out_index = 0),
      (t.avail_in = 0),
      (t.total_in = 0),
      (t.avail_out = 0),
      (t.total_out = 0);
  }
  function _(t) {
    var o = new r(),
      u = new Uint8Array(512);
    void 0 === t && (t = -1),
      o.deflateInit(t),
      (o.next_out = u),
      (this.append = function(t, e) {
        var n,
          a = [],
          i = 0,
          r = 0,
          _ = 0;
        if (t.length) {
          (o.next_in_index = 0), (o.next_in = t), (o.avail_in = t.length);
          do {
            if (
              ((o.next_out_index = 0), (o.avail_out = 512), 0 != o.deflate(0))
            )
              throw 'deflating: ' + o.msg;
            o.next_out_index &&
              (512 == o.next_out_index
                ? a.push(new Uint8Array(u))
                : a.push(new Uint8Array(u.subarray(0, o.next_out_index)))),
              (_ += o.next_out_index),
              e &&
                0 < o.next_in_index &&
                o.next_in_index != i &&
                (e(o.next_in_index), (i = o.next_in_index));
          } while (0 < o.avail_in || 0 === o.avail_out);
          return (
            (n = new Uint8Array(_)),
            a.forEach(function(t) {
              n.set(t, r), (r += t.length);
            }),
            n
          );
        }
      }),
      (this.flush = function() {
        var t,
          e,
          n = [],
          a = 0,
          i = 0;
        do {
          if (
            ((o.next_out_index = 0),
            (o.avail_out = 512),
            1 != (t = o.deflate(4)) && 0 != t)
          )
            throw 'deflating: ' + o.msg;
          0 < 512 - o.avail_out &&
            n.push(new Uint8Array(u.subarray(0, o.next_out_index))),
            (i += o.next_out_index);
        } while (0 < o.avail_in || 0 === o.avail_out);
        return (
          o.deflateEnd(),
          (e = new Uint8Array(i)),
          n.forEach(function(t) {
            e.set(t, a), (a += t.length);
          }),
          e
        );
      });
  }
  (r.prototype = {
    deflateInit: function(t, e) {
      return (
        (this.dstate = new i()),
        (e = e || h),
        this.dstate.deflateInit(this, t, e)
      );
    },
    deflate: function(t) {
      return this.dstate ? this.dstate.deflate(this, t) : ct;
    },
    deflateEnd: function() {
      if (!this.dstate) return ct;
      var t = this.dstate.deflateEnd();
      return (this.dstate = null), t;
    },
    deflateParams: function(t, e) {
      return this.dstate ? this.dstate.deflateParams(this, t, e) : ct;
    },
    deflateSetDictionary: function(t, e) {
      return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : ct;
    },
    read_buf: function(t, e, n) {
      var a = this,
        i = a.avail_in;
      return (
        n < i && (i = n),
        0 === i
          ? 0
          : ((a.avail_in -= i),
            t.set(a.next_in.subarray(a.next_in_index, a.next_in_index + i), e),
            (a.next_in_index += i),
            (a.total_in += i),
            i)
      );
    },
    flush_pending: function() {
      var t = this,
        e = t.dstate.pending;
      e > t.avail_out && (e = t.avail_out),
        0 !== e &&
          (t.next_out.set(
            t.dstate.pending_buf.subarray(
              t.dstate.pending_out,
              t.dstate.pending_out + e,
            ),
            t.next_out_index,
          ),
          (t.next_out_index += e),
          (t.dstate.pending_out += e),
          (t.total_out += e),
          (t.avail_out -= e),
          (t.dstate.pending -= e),
          0 === t.dstate.pending && (t.dstate.pending_out = 0));
    },
  }),
    n.zip
      ? (n.zip.Deflater = _)
      : ((a = new _()),
        n.addEventListener(
          'message',
          function(t) {
            var e = t.data;
            e.init && ((a = new _(e.level)), n.postMessage({ oninit: !0 })),
              e.append &&
                n.postMessage({
                  onappend: !0,
                  data: a.append(e.data, function(t) {
                    n.postMessage({ progress: !0, current: t });
                  }),
                }),
              e.flush && n.postMessage({ onflush: !0, data: a.flush() });
          },
          !1,
        ));
})(this);
