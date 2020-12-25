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
!(function(e) {
  var L = 0,
    P = 1,
    j = -2,
    q = -3,
    x = -4,
    B = -5,
    C = [
      0,
      1,
      3,
      7,
      15,
      31,
      63,
      127,
      255,
      511,
      1023,
      2047,
      4095,
      8191,
      16383,
      32767,
      65535,
    ],
    F = 1440,
    a = [
      96,
      7,
      256,
      0,
      8,
      80,
      0,
      8,
      16,
      84,
      8,
      115,
      82,
      7,
      31,
      0,
      8,
      112,
      0,
      8,
      48,
      0,
      9,
      192,
      80,
      7,
      10,
      0,
      8,
      96,
      0,
      8,
      32,
      0,
      9,
      160,
      0,
      8,
      0,
      0,
      8,
      128,
      0,
      8,
      64,
      0,
      9,
      224,
      80,
      7,
      6,
      0,
      8,
      88,
      0,
      8,
      24,
      0,
      9,
      144,
      83,
      7,
      59,
      0,
      8,
      120,
      0,
      8,
      56,
      0,
      9,
      208,
      81,
      7,
      17,
      0,
      8,
      104,
      0,
      8,
      40,
      0,
      9,
      176,
      0,
      8,
      8,
      0,
      8,
      136,
      0,
      8,
      72,
      0,
      9,
      240,
      80,
      7,
      4,
      0,
      8,
      84,
      0,
      8,
      20,
      85,
      8,
      227,
      83,
      7,
      43,
      0,
      8,
      116,
      0,
      8,
      52,
      0,
      9,
      200,
      81,
      7,
      13,
      0,
      8,
      100,
      0,
      8,
      36,
      0,
      9,
      168,
      0,
      8,
      4,
      0,
      8,
      132,
      0,
      8,
      68,
      0,
      9,
      232,
      80,
      7,
      8,
      0,
      8,
      92,
      0,
      8,
      28,
      0,
      9,
      152,
      84,
      7,
      83,
      0,
      8,
      124,
      0,
      8,
      60,
      0,
      9,
      216,
      82,
      7,
      23,
      0,
      8,
      108,
      0,
      8,
      44,
      0,
      9,
      184,
      0,
      8,
      12,
      0,
      8,
      140,
      0,
      8,
      76,
      0,
      9,
      248,
      80,
      7,
      3,
      0,
      8,
      82,
      0,
      8,
      18,
      85,
      8,
      163,
      83,
      7,
      35,
      0,
      8,
      114,
      0,
      8,
      50,
      0,
      9,
      196,
      81,
      7,
      11,
      0,
      8,
      98,
      0,
      8,
      34,
      0,
      9,
      164,
      0,
      8,
      2,
      0,
      8,
      130,
      0,
      8,
      66,
      0,
      9,
      228,
      80,
      7,
      7,
      0,
      8,
      90,
      0,
      8,
      26,
      0,
      9,
      148,
      84,
      7,
      67,
      0,
      8,
      122,
      0,
      8,
      58,
      0,
      9,
      212,
      82,
      7,
      19,
      0,
      8,
      106,
      0,
      8,
      42,
      0,
      9,
      180,
      0,
      8,
      10,
      0,
      8,
      138,
      0,
      8,
      74,
      0,
      9,
      244,
      80,
      7,
      5,
      0,
      8,
      86,
      0,
      8,
      22,
      192,
      8,
      0,
      83,
      7,
      51,
      0,
      8,
      118,
      0,
      8,
      54,
      0,
      9,
      204,
      81,
      7,
      15,
      0,
      8,
      102,
      0,
      8,
      38,
      0,
      9,
      172,
      0,
      8,
      6,
      0,
      8,
      134,
      0,
      8,
      70,
      0,
      9,
      236,
      80,
      7,
      9,
      0,
      8,
      94,
      0,
      8,
      30,
      0,
      9,
      156,
      84,
      7,
      99,
      0,
      8,
      126,
      0,
      8,
      62,
      0,
      9,
      220,
      82,
      7,
      27,
      0,
      8,
      110,
      0,
      8,
      46,
      0,
      9,
      188,
      0,
      8,
      14,
      0,
      8,
      142,
      0,
      8,
      78,
      0,
      9,
      252,
      96,
      7,
      256,
      0,
      8,
      81,
      0,
      8,
      17,
      85,
      8,
      131,
      82,
      7,
      31,
      0,
      8,
      113,
      0,
      8,
      49,
      0,
      9,
      194,
      80,
      7,
      10,
      0,
      8,
      97,
      0,
      8,
      33,
      0,
      9,
      162,
      0,
      8,
      1,
      0,
      8,
      129,
      0,
      8,
      65,
      0,
      9,
      226,
      80,
      7,
      6,
      0,
      8,
      89,
      0,
      8,
      25,
      0,
      9,
      146,
      83,
      7,
      59,
      0,
      8,
      121,
      0,
      8,
      57,
      0,
      9,
      210,
      81,
      7,
      17,
      0,
      8,
      105,
      0,
      8,
      41,
      0,
      9,
      178,
      0,
      8,
      9,
      0,
      8,
      137,
      0,
      8,
      73,
      0,
      9,
      242,
      80,
      7,
      4,
      0,
      8,
      85,
      0,
      8,
      21,
      80,
      8,
      258,
      83,
      7,
      43,
      0,
      8,
      117,
      0,
      8,
      53,
      0,
      9,
      202,
      81,
      7,
      13,
      0,
      8,
      101,
      0,
      8,
      37,
      0,
      9,
      170,
      0,
      8,
      5,
      0,
      8,
      133,
      0,
      8,
      69,
      0,
      9,
      234,
      80,
      7,
      8,
      0,
      8,
      93,
      0,
      8,
      29,
      0,
      9,
      154,
      84,
      7,
      83,
      0,
      8,
      125,
      0,
      8,
      61,
      0,
      9,
      218,
      82,
      7,
      23,
      0,
      8,
      109,
      0,
      8,
      45,
      0,
      9,
      186,
      0,
      8,
      13,
      0,
      8,
      141,
      0,
      8,
      77,
      0,
      9,
      250,
      80,
      7,
      3,
      0,
      8,
      83,
      0,
      8,
      19,
      85,
      8,
      195,
      83,
      7,
      35,
      0,
      8,
      115,
      0,
      8,
      51,
      0,
      9,
      198,
      81,
      7,
      11,
      0,
      8,
      99,
      0,
      8,
      35,
      0,
      9,
      166,
      0,
      8,
      3,
      0,
      8,
      131,
      0,
      8,
      67,
      0,
      9,
      230,
      80,
      7,
      7,
      0,
      8,
      91,
      0,
      8,
      27,
      0,
      9,
      150,
      84,
      7,
      67,
      0,
      8,
      123,
      0,
      8,
      59,
      0,
      9,
      214,
      82,
      7,
      19,
      0,
      8,
      107,
      0,
      8,
      43,
      0,
      9,
      182,
      0,
      8,
      11,
      0,
      8,
      139,
      0,
      8,
      75,
      0,
      9,
      246,
      80,
      7,
      5,
      0,
      8,
      87,
      0,
      8,
      23,
      192,
      8,
      0,
      83,
      7,
      51,
      0,
      8,
      119,
      0,
      8,
      55,
      0,
      9,
      206,
      81,
      7,
      15,
      0,
      8,
      103,
      0,
      8,
      39,
      0,
      9,
      174,
      0,
      8,
      7,
      0,
      8,
      135,
      0,
      8,
      71,
      0,
      9,
      238,
      80,
      7,
      9,
      0,
      8,
      95,
      0,
      8,
      31,
      0,
      9,
      158,
      84,
      7,
      99,
      0,
      8,
      127,
      0,
      8,
      63,
      0,
      9,
      222,
      82,
      7,
      27,
      0,
      8,
      111,
      0,
      8,
      47,
      0,
      9,
      190,
      0,
      8,
      15,
      0,
      8,
      143,
      0,
      8,
      79,
      0,
      9,
      254,
      96,
      7,
      256,
      0,
      8,
      80,
      0,
      8,
      16,
      84,
      8,
      115,
      82,
      7,
      31,
      0,
      8,
      112,
      0,
      8,
      48,
      0,
      9,
      193,
      80,
      7,
      10,
      0,
      8,
      96,
      0,
      8,
      32,
      0,
      9,
      161,
      0,
      8,
      0,
      0,
      8,
      128,
      0,
      8,
      64,
      0,
      9,
      225,
      80,
      7,
      6,
      0,
      8,
      88,
      0,
      8,
      24,
      0,
      9,
      145,
      83,
      7,
      59,
      0,
      8,
      120,
      0,
      8,
      56,
      0,
      9,
      209,
      81,
      7,
      17,
      0,
      8,
      104,
      0,
      8,
      40,
      0,
      9,
      177,
      0,
      8,
      8,
      0,
      8,
      136,
      0,
      8,
      72,
      0,
      9,
      241,
      80,
      7,
      4,
      0,
      8,
      84,
      0,
      8,
      20,
      85,
      8,
      227,
      83,
      7,
      43,
      0,
      8,
      116,
      0,
      8,
      52,
      0,
      9,
      201,
      81,
      7,
      13,
      0,
      8,
      100,
      0,
      8,
      36,
      0,
      9,
      169,
      0,
      8,
      4,
      0,
      8,
      132,
      0,
      8,
      68,
      0,
      9,
      233,
      80,
      7,
      8,
      0,
      8,
      92,
      0,
      8,
      28,
      0,
      9,
      153,
      84,
      7,
      83,
      0,
      8,
      124,
      0,
      8,
      60,
      0,
      9,
      217,
      82,
      7,
      23,
      0,
      8,
      108,
      0,
      8,
      44,
      0,
      9,
      185,
      0,
      8,
      12,
      0,
      8,
      140,
      0,
      8,
      76,
      0,
      9,
      249,
      80,
      7,
      3,
      0,
      8,
      82,
      0,
      8,
      18,
      85,
      8,
      163,
      83,
      7,
      35,
      0,
      8,
      114,
      0,
      8,
      50,
      0,
      9,
      197,
      81,
      7,
      11,
      0,
      8,
      98,
      0,
      8,
      34,
      0,
      9,
      165,
      0,
      8,
      2,
      0,
      8,
      130,
      0,
      8,
      66,
      0,
      9,
      229,
      80,
      7,
      7,
      0,
      8,
      90,
      0,
      8,
      26,
      0,
      9,
      149,
      84,
      7,
      67,
      0,
      8,
      122,
      0,
      8,
      58,
      0,
      9,
      213,
      82,
      7,
      19,
      0,
      8,
      106,
      0,
      8,
      42,
      0,
      9,
      181,
      0,
      8,
      10,
      0,
      8,
      138,
      0,
      8,
      74,
      0,
      9,
      245,
      80,
      7,
      5,
      0,
      8,
      86,
      0,
      8,
      22,
      192,
      8,
      0,
      83,
      7,
      51,
      0,
      8,
      118,
      0,
      8,
      54,
      0,
      9,
      205,
      81,
      7,
      15,
      0,
      8,
      102,
      0,
      8,
      38,
      0,
      9,
      173,
      0,
      8,
      6,
      0,
      8,
      134,
      0,
      8,
      70,
      0,
      9,
      237,
      80,
      7,
      9,
      0,
      8,
      94,
      0,
      8,
      30,
      0,
      9,
      157,
      84,
      7,
      99,
      0,
      8,
      126,
      0,
      8,
      62,
      0,
      9,
      221,
      82,
      7,
      27,
      0,
      8,
      110,
      0,
      8,
      46,
      0,
      9,
      189,
      0,
      8,
      14,
      0,
      8,
      142,
      0,
      8,
      78,
      0,
      9,
      253,
      96,
      7,
      256,
      0,
      8,
      81,
      0,
      8,
      17,
      85,
      8,
      131,
      82,
      7,
      31,
      0,
      8,
      113,
      0,
      8,
      49,
      0,
      9,
      195,
      80,
      7,
      10,
      0,
      8,
      97,
      0,
      8,
      33,
      0,
      9,
      163,
      0,
      8,
      1,
      0,
      8,
      129,
      0,
      8,
      65,
      0,
      9,
      227,
      80,
      7,
      6,
      0,
      8,
      89,
      0,
      8,
      25,
      0,
      9,
      147,
      83,
      7,
      59,
      0,
      8,
      121,
      0,
      8,
      57,
      0,
      9,
      211,
      81,
      7,
      17,
      0,
      8,
      105,
      0,
      8,
      41,
      0,
      9,
      179,
      0,
      8,
      9,
      0,
      8,
      137,
      0,
      8,
      73,
      0,
      9,
      243,
      80,
      7,
      4,
      0,
      8,
      85,
      0,
      8,
      21,
      80,
      8,
      258,
      83,
      7,
      43,
      0,
      8,
      117,
      0,
      8,
      53,
      0,
      9,
      203,
      81,
      7,
      13,
      0,
      8,
      101,
      0,
      8,
      37,
      0,
      9,
      171,
      0,
      8,
      5,
      0,
      8,
      133,
      0,
      8,
      69,
      0,
      9,
      235,
      80,
      7,
      8,
      0,
      8,
      93,
      0,
      8,
      29,
      0,
      9,
      155,
      84,
      7,
      83,
      0,
      8,
      125,
      0,
      8,
      61,
      0,
      9,
      219,
      82,
      7,
      23,
      0,
      8,
      109,
      0,
      8,
      45,
      0,
      9,
      187,
      0,
      8,
      13,
      0,
      8,
      141,
      0,
      8,
      77,
      0,
      9,
      251,
      80,
      7,
      3,
      0,
      8,
      83,
      0,
      8,
      19,
      85,
      8,
      195,
      83,
      7,
      35,
      0,
      8,
      115,
      0,
      8,
      51,
      0,
      9,
      199,
      81,
      7,
      11,
      0,
      8,
      99,
      0,
      8,
      35,
      0,
      9,
      167,
      0,
      8,
      3,
      0,
      8,
      131,
      0,
      8,
      67,
      0,
      9,
      231,
      80,
      7,
      7,
      0,
      8,
      91,
      0,
      8,
      27,
      0,
      9,
      151,
      84,
      7,
      67,
      0,
      8,
      123,
      0,
      8,
      59,
      0,
      9,
      215,
      82,
      7,
      19,
      0,
      8,
      107,
      0,
      8,
      43,
      0,
      9,
      183,
      0,
      8,
      11,
      0,
      8,
      139,
      0,
      8,
      75,
      0,
      9,
      247,
      80,
      7,
      5,
      0,
      8,
      87,
      0,
      8,
      23,
      192,
      8,
      0,
      83,
      7,
      51,
      0,
      8,
      119,
      0,
      8,
      55,
      0,
      9,
      207,
      81,
      7,
      15,
      0,
      8,
      103,
      0,
      8,
      39,
      0,
      9,
      175,
      0,
      8,
      7,
      0,
      8,
      135,
      0,
      8,
      71,
      0,
      9,
      239,
      80,
      7,
      9,
      0,
      8,
      95,
      0,
      8,
      31,
      0,
      9,
      159,
      84,
      7,
      99,
      0,
      8,
      127,
      0,
      8,
      63,
      0,
      9,
      223,
      82,
      7,
      27,
      0,
      8,
      111,
      0,
      8,
      47,
      0,
      9,
      191,
      0,
      8,
      15,
      0,
      8,
      143,
      0,
      8,
      79,
      0,
      9,
      255,
    ],
    r = [
      80,
      5,
      1,
      87,
      5,
      257,
      83,
      5,
      17,
      91,
      5,
      4097,
      81,
      5,
      5,
      89,
      5,
      1025,
      85,
      5,
      65,
      93,
      5,
      16385,
      80,
      5,
      3,
      88,
      5,
      513,
      84,
      5,
      33,
      92,
      5,
      8193,
      82,
      5,
      9,
      90,
      5,
      2049,
      86,
      5,
      129,
      192,
      5,
      24577,
      80,
      5,
      2,
      87,
      5,
      385,
      83,
      5,
      25,
      91,
      5,
      6145,
      81,
      5,
      7,
      89,
      5,
      1537,
      85,
      5,
      97,
      93,
      5,
      24577,
      80,
      5,
      4,
      88,
      5,
      769,
      84,
      5,
      49,
      92,
      5,
      12289,
      82,
      5,
      13,
      90,
      5,
      3073,
      86,
      5,
      193,
      192,
      5,
      24577,
    ],
    w = [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0,
    ],
    c = [
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
      112,
      112,
    ],
    v = [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
    ],
    h = [
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
    ],
    D = 15;
  function G() {
    var f, o, E, S, U, z;
    function b(i, t, e, n, a, r, _, l, d, s, f) {
      var o, b, u, x, w, c, v, h, k, m, y, g, p, A, I;
      for (m = 0, w = e; E[i[t + m]]++, m++, 0 !== --w; );
      if (E[0] == e) return (_[0] = -1), (l[0] = 0), L;
      for (h = l[0], c = 1; c <= D && 0 === E[c]; c++);
      for (h < (v = c) && (h = c), w = D; 0 !== w && 0 === E[w]; w--);
      for ((u = w) < h && (h = w), l[0] = h, A = 1 << c; c < w; c++, A <<= 1)
        if ((A -= E[c]) < 0) return q;
      if ((A -= E[w]) < 0) return q;
      for (E[w] += A, z[1] = c = 0, m = 1, p = 2; 0 != --w; )
        (z[p] = c += E[m]), p++, m++;
      for (m = w = 0; 0 !== (c = i[t + m]) && (f[z[c]++] = w), m++, ++w < e; );
      for (
        e = z[u], z[0] = w = 0, x = -1, g = -h, I = y = U[(m = 0)] = 0;
        v <= u;
        v++
      )
        for (o = E[v]; 0 != o--; ) {
          for (; g + h < v; ) {
            if (
              (x++,
              (I = h < (I = u - (g += h)) ? h : I),
              (b = 1 << (c = v - g)) > o + 1 && ((b -= o + 1), (p = v), c < I))
            )
              for (; ++c < I && !((b <<= 1) <= E[++p]); ) b -= E[p];
            if (((I = 1 << c), s[0] + I > F)) return q;
            (U[x] = y = s[0]),
              (s[0] += I),
              0 !== x
                ? ((z[x] = w),
                  (S[0] = c),
                  (c = w >>> (g - (S[1] = h))),
                  (S[2] = y - U[x - 1] - c),
                  d.set(S, 3 * (U[x - 1] + c)))
                : (_[0] = y);
          }
          for (
            S[1] = v - g,
              e <= m
                ? (S[0] = 192)
                : f[m] < n
                ? ((S[0] = f[m] < 256 ? 0 : 96), (S[2] = f[m++]))
                : ((S[0] = r[f[m] - n] + 16 + 64), (S[2] = a[f[m++] - n])),
              b = 1 << (v - g),
              c = w >>> g;
            c < I;
            c += b
          )
            d.set(S, 3 * (y + c));
          for (c = 1 << (v - 1); 0 != (w & c); c >>>= 1) w ^= c;
          for (w ^= c, k = (1 << g) - 1; (w & k) != z[x]; )
            x--, (k = (1 << (g -= h)) - 1);
        }
      return 0 !== A && 1 != u ? B : L;
    }
    function u(i) {
      var t;
      for (
        f ||
          ((f = []),
          (o = []),
          (E = new Int32Array(D + 1)),
          (S = []),
          (U = new Int32Array(D)),
          (z = new Int32Array(D + 1))),
          o.length < i && (o = []),
          t = 0;
        t < i;
        t++
      )
        o[t] = 0;
      for (t = 0; t < D + 1; t++) E[t] = 0;
      for (t = 0; t < 3; t++) S[t] = 0;
      U.set(E.subarray(0, D), 0), z.set(E.subarray(0, D + 1), 0);
    }
    (this.inflate_trees_bits = function(i, t, e, n, a) {
      var r;
      return (
        u(19),
        (r = b(i, (f[0] = 0), 19, 19, null, null, e, t, n, f, o)) == q
          ? (a.msg = 'oversubscribed dynamic bit lengths tree')
          : (r != B && 0 !== t[0]) ||
            ((a.msg = 'incomplete dynamic bit lengths tree'), (r = q)),
        r
      );
    }),
      (this.inflate_trees_dynamic = function(i, t, e, n, a, r, _, l, d) {
        var s;
        return (
          u(288),
          (s = b(e, (f[0] = 0), i, 257, w, c, r, n, l, f, o)) != L || 0 === n[0]
            ? (s == q
                ? (d.msg = 'oversubscribed literal/length tree')
                : s != x &&
                  ((d.msg = 'incomplete literal/length tree'), (s = q)),
              s)
            : (u(288),
              (s = b(e, i, t, 0, v, h, _, a, l, f, o)) != L ||
              (0 === a[0] && 257 < i)
                ? (s == q
                    ? (d.msg = 'oversubscribed distance tree')
                    : s == B
                    ? ((d.msg = 'incomplete distance tree'), (s = q))
                    : s != x &&
                      ((d.msg = 'empty distance tree with lengths'), (s = q)),
                  s)
                : L)
        );
      });
  }
  G.inflate_trees_fixed = function(i, t, e, n) {
    return (i[0] = 9), (t[0] = 5), (e[0] = a), (n[0] = r), L;
  };
  var U = 0,
    z = 1,
    M = 2,
    H = 3,
    J = 4,
    K = 5,
    N = 6,
    O = 7,
    Q = 8,
    R = 9;
  function n() {
    var u,
      x,
      w,
      c,
      v = 0,
      h = 0,
      k = 0,
      m = 0,
      y = 0,
      g = 0,
      p = 0,
      A = 0,
      I = 0,
      E = 0;
    function S(i, t, e, n, a, r, _, l) {
      var d, s, f, o, b, u, x, w, c, v, h, k, m, y, g, p;
      (x = l.next_in_index),
        (w = l.avail_in),
        (b = _.bitb),
        (u = _.bitk),
        (v = (c = _.write) < _.read ? _.read - c - 1 : _.end - c),
        (h = C[i]),
        (k = C[t]);
      do {
        for (; u < 20; ) w--, (b |= (255 & l.read_byte(x++)) << u), (u += 8);
        if (0 !== (o = (s = e)[(p = 3 * ((f = n) + (d = b & h)))]))
          for (;;) {
            if (((b >>= s[p + 1]), (u -= s[p + 1]), 0 != (16 & o))) {
              for (
                o &= 15, m = s[p + 2] + (b & C[o]), b >>= o, u -= o;
                u < 15;

              )
                w--, (b |= (255 & l.read_byte(x++)) << u), (u += 8);
              for (o = (s = a)[(p = 3 * ((f = r) + (d = b & k)))]; ; ) {
                if (((b >>= s[p + 1]), (u -= s[p + 1]), 0 != (16 & o))) {
                  for (o &= 15; u < o; )
                    w--, (b |= (255 & l.read_byte(x++)) << u), (u += 8);
                  if (
                    ((y = s[p + 2] + (b & C[o])),
                    (b >>= o),
                    (u -= o),
                    (v -= m),
                    y <= c)
                  )
                    0 < c - (g = c - y) && c - g < 2
                      ? ((_.window[c++] = _.window[g++]),
                        (_.window[c++] = _.window[g++]))
                      : (_.window.set(_.window.subarray(g, g + 2), c),
                        (c += 2),
                        (g += 2)),
                      (m -= 2);
                  else {
                    for (g = c - y; (g += _.end) < 0; );
                    if ((o = _.end - g) < m) {
                      if (((m -= o), 0 < c - g && c - g < o))
                        for (; (_.window[c++] = _.window[g++]), 0 != --o; );
                      else
                        _.window.set(_.window.subarray(g, g + o), c),
                          (c += o),
                          (g += o),
                          (o = 0);
                      g = 0;
                    }
                  }
                  if (0 < c - g && c - g < m)
                    for (; (_.window[c++] = _.window[g++]), 0 != --m; );
                  else
                    _.window.set(_.window.subarray(g, g + m), c),
                      (c += m),
                      (g += m),
                      (m = 0);
                  break;
                }
                if (0 != (64 & o))
                  return (
                    (l.msg = 'invalid distance code'),
                    (w += m = u >> 3 < (m = l.avail_in - w) ? u >> 3 : m),
                    (x -= m),
                    (u -= m << 3),
                    (_.bitb = b),
                    (_.bitk = u),
                    (l.avail_in = w),
                    (l.total_in += x - l.next_in_index),
                    (l.next_in_index = x),
                    (_.write = c),
                    q
                  );
                (d += s[p + 2]), (o = s[(p = 3 * (f + (d += b & C[o])))]);
              }
              break;
            }
            if (0 != (64 & o))
              return 0 != (32 & o)
                ? ((w += m = u >> 3 < (m = l.avail_in - w) ? u >> 3 : m),
                  (x -= m),
                  (u -= m << 3),
                  (_.bitb = b),
                  (_.bitk = u),
                  (l.avail_in = w),
                  (l.total_in += x - l.next_in_index),
                  (l.next_in_index = x),
                  (_.write = c),
                  P)
                : ((l.msg = 'invalid literal/length code'),
                  (w += m = u >> 3 < (m = l.avail_in - w) ? u >> 3 : m),
                  (x -= m),
                  (u -= m << 3),
                  (_.bitb = b),
                  (_.bitk = u),
                  (l.avail_in = w),
                  (l.total_in += x - l.next_in_index),
                  (l.next_in_index = x),
                  (_.write = c),
                  q);
            if (
              ((d += s[p + 2]), 0 === (o = s[(p = 3 * (f + (d += b & C[o])))]))
            ) {
              (b >>= s[p + 1]),
                (u -= s[p + 1]),
                (_.window[c++] = s[p + 2]),
                v--;
              break;
            }
          }
        else (b >>= s[p + 1]), (u -= s[p + 1]), (_.window[c++] = s[p + 2]), v--;
      } while (258 <= v && 10 <= w);
      return (
        (w += m = u >> 3 < (m = l.avail_in - w) ? u >> 3 : m),
        (x -= m),
        (u -= m << 3),
        (_.bitb = b),
        (_.bitk = u),
        (l.avail_in = w),
        (l.total_in += x - l.next_in_index),
        (l.next_in_index = x),
        (_.write = c),
        L
      );
    }
    (this.init = function(i, t, e, n, a, r) {
      (u = U), (p = i), (A = t), (w = e), (I = n), (c = a), (E = r), (x = null);
    }),
      (this.proc = function(i, t, e) {
        var n,
          a,
          r,
          _,
          l,
          d,
          s,
          f = 0,
          o = 0,
          b = 0;
        for (
          b = t.next_in_index,
            _ = t.avail_in,
            f = i.bitb,
            o = i.bitk,
            d = (l = i.write) < i.read ? i.read - l - 1 : i.end - l;
          ;

        )
          switch (u) {
            case U:
              if (
                258 <= d &&
                10 <= _ &&
                ((i.bitb = f),
                (i.bitk = o),
                (t.avail_in = _),
                (t.total_in += b - t.next_in_index),
                (t.next_in_index = b),
                (i.write = l),
                (e = S(p, A, w, I, c, E, i, t)),
                (b = t.next_in_index),
                (_ = t.avail_in),
                (f = i.bitb),
                (o = i.bitk),
                (d = (l = i.write) < i.read ? i.read - l - 1 : i.end - l),
                e != L)
              ) {
                u = e == P ? O : R;
                break;
              }
              (k = p), (x = w), (h = I), (u = z);
            case z:
              for (n = k; o < n; ) {
                if (0 === _)
                  return (
                    (i.bitb = f),
                    (i.bitk = o),
                    (t.avail_in = _),
                    (t.total_in += b - t.next_in_index),
                    (t.next_in_index = b),
                    (i.write = l),
                    i.inflate_flush(t, e)
                  );
                (e = L), _--, (f |= (255 & t.read_byte(b++)) << o), (o += 8);
              }
              if (
                ((a = 3 * (h + (f & C[n]))),
                (f >>>= x[a + 1]),
                (o -= x[a + 1]),
                0 === (r = x[a]))
              ) {
                (m = x[a + 2]), (u = N);
                break;
              }
              if (0 != (16 & r)) {
                (y = 15 & r), (v = x[a + 2]), (u = M);
                break;
              }
              if (0 == (64 & r)) {
                (k = r), (h = a / 3 + x[a + 2]);
                break;
              }
              if (0 == (32 & r))
                return (
                  (u = R),
                  (t.msg = 'invalid literal/length code'),
                  (e = q),
                  (i.bitb = f),
                  (i.bitk = o),
                  (t.avail_in = _),
                  (t.total_in += b - t.next_in_index),
                  (t.next_in_index = b),
                  (i.write = l),
                  i.inflate_flush(t, e)
                );
              u = O;
              break;
            case M:
              for (n = y; o < n; ) {
                if (0 === _)
                  return (
                    (i.bitb = f),
                    (i.bitk = o),
                    (t.avail_in = _),
                    (t.total_in += b - t.next_in_index),
                    (t.next_in_index = b),
                    (i.write = l),
                    i.inflate_flush(t, e)
                  );
                (e = L), _--, (f |= (255 & t.read_byte(b++)) << o), (o += 8);
              }
              (v += f & C[n]),
                (f >>= n),
                (o -= n),
                (k = A),
                (x = c),
                (h = E),
                (u = H);
            case H:
              for (n = k; o < n; ) {
                if (0 === _)
                  return (
                    (i.bitb = f),
                    (i.bitk = o),
                    (t.avail_in = _),
                    (t.total_in += b - t.next_in_index),
                    (t.next_in_index = b),
                    (i.write = l),
                    i.inflate_flush(t, e)
                  );
                (e = L), _--, (f |= (255 & t.read_byte(b++)) << o), (o += 8);
              }
              if (
                ((a = 3 * (h + (f & C[n]))),
                (f >>= x[a + 1]),
                (o -= x[a + 1]),
                0 != (16 & (r = x[a])))
              ) {
                (y = 15 & r), (g = x[a + 2]), (u = J);
                break;
              }
              if (0 != (64 & r))
                return (
                  (u = R),
                  (t.msg = 'invalid distance code'),
                  (e = q),
                  (i.bitb = f),
                  (i.bitk = o),
                  (t.avail_in = _),
                  (t.total_in += b - t.next_in_index),
                  (t.next_in_index = b),
                  (i.write = l),
                  i.inflate_flush(t, e)
                );
              (k = r), (h = a / 3 + x[a + 2]);
              break;
            case J:
              for (n = y; o < n; ) {
                if (0 === _)
                  return (
                    (i.bitb = f),
                    (i.bitk = o),
                    (t.avail_in = _),
                    (t.total_in += b - t.next_in_index),
                    (t.next_in_index = b),
                    (i.write = l),
                    i.inflate_flush(t, e)
                  );
                (e = L), _--, (f |= (255 & t.read_byte(b++)) << o), (o += 8);
              }
              (g += f & C[n]), (f >>= n), (o -= n), (u = K);
            case K:
              for (s = l - g; s < 0; ) s += i.end;
              for (; 0 !== v; ) {
                if (
                  0 === d &&
                  (l == i.end &&
                    0 !== i.read &&
                    (d = (l = 0) < i.read ? i.read - l - 1 : i.end - l),
                  0 === d &&
                    ((i.write = l),
                    (e = i.inflate_flush(t, e)),
                    (d = (l = i.write) < i.read ? i.read - l - 1 : i.end - l),
                    l == i.end &&
                      0 !== i.read &&
                      (d = (l = 0) < i.read ? i.read - l - 1 : i.end - l),
                    0 === d))
                )
                  return (
                    (i.bitb = f),
                    (i.bitk = o),
                    (t.avail_in = _),
                    (t.total_in += b - t.next_in_index),
                    (t.next_in_index = b),
                    (i.write = l),
                    i.inflate_flush(t, e)
                  );
                (i.window[l++] = i.window[s++]),
                  d--,
                  s == i.end && (s = 0),
                  v--;
              }
              u = U;
              break;
            case N:
              if (
                0 === d &&
                (l == i.end &&
                  0 !== i.read &&
                  (d = (l = 0) < i.read ? i.read - l - 1 : i.end - l),
                0 === d &&
                  ((i.write = l),
                  (e = i.inflate_flush(t, e)),
                  (d = (l = i.write) < i.read ? i.read - l - 1 : i.end - l),
                  l == i.end &&
                    0 !== i.read &&
                    (d = (l = 0) < i.read ? i.read - l - 1 : i.end - l),
                  0 === d))
              )
                return (
                  (i.bitb = f),
                  (i.bitk = o),
                  (t.avail_in = _),
                  (t.total_in += b - t.next_in_index),
                  (t.next_in_index = b),
                  (i.write = l),
                  i.inflate_flush(t, e)
                );
              (e = L), (i.window[l++] = m), d--, (u = U);
              break;
            case O:
              if (
                (7 < o && ((o -= 8), _++, b--),
                (i.write = l),
                (e = i.inflate_flush(t, e)),
                (d = (l = i.write) < i.read ? i.read - l - 1 : i.end - l),
                i.read != i.write)
              )
                return (
                  (i.bitb = f),
                  (i.bitk = o),
                  (t.avail_in = _),
                  (t.total_in += b - t.next_in_index),
                  (t.next_in_index = b),
                  (i.write = l),
                  i.inflate_flush(t, e)
                );
              u = Q;
            case Q:
              return (
                (e = P),
                (i.bitb = f),
                (i.bitk = o),
                (t.avail_in = _),
                (t.total_in += b - t.next_in_index),
                (t.next_in_index = b),
                (i.write = l),
                i.inflate_flush(t, e)
              );
            case R:
              return (
                (e = q),
                (i.bitb = f),
                (i.bitk = o),
                (t.avail_in = _),
                (t.total_in += b - t.next_in_index),
                (t.next_in_index = b),
                (i.write = l),
                i.inflate_flush(t, e)
              );
            default:
              return (
                (e = j),
                (i.bitb = f),
                (i.bitk = o),
                (t.avail_in = _),
                (t.total_in += b - t.next_in_index),
                (t.next_in_index = b),
                (i.write = l),
                i.inflate_flush(t, e)
              );
          }
      }),
      (this.free = function() {});
  }
  var T = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    V = 0,
    W = 1,
    X = 2,
    Y = 3,
    Z = 4,
    $ = 5,
    ii = 6,
    ti = 7,
    ei = 8,
    ni = 9;
  function l(i, t) {
    var m,
      y = this,
      g = V,
      p = 0,
      A = 0,
      I = 0,
      E = [0],
      S = [0],
      U = new n(),
      z = 0,
      D = new Int32Array(3 * F),
      M = new G();
    (y.bitk = 0),
      (y.bitb = 0),
      (y.window = new Uint8Array(t)),
      (y.end = t),
      (y.read = 0),
      (y.write = 0),
      (y.reset = function(i, t) {
        t && (t[0] = 0),
          g == ii && U.free(i),
          (g = V),
          (y.bitk = 0),
          (y.bitb = 0),
          (y.read = y.write = 0);
      }),
      y.reset(i, null),
      (y.inflate_flush = function(i, t) {
        var e, n, a;
        return (
          (n = i.next_out_index),
          (e = ((a = y.read) <= y.write ? y.write : y.end) - a) > i.avail_out &&
            (e = i.avail_out),
          0 !== e && t == B && (t = L),
          (i.avail_out -= e),
          (i.total_out += e),
          i.next_out.set(y.window.subarray(a, a + e), n),
          (n += e),
          (a += e) == y.end &&
            ((a = 0),
            y.write == y.end && (y.write = 0),
            (e = y.write - a) > i.avail_out && (e = i.avail_out),
            0 !== e && t == B && (t = L),
            (i.avail_out -= e),
            (i.total_out += e),
            i.next_out.set(y.window.subarray(a, a + e), n),
            (n += e),
            (a += e)),
          (i.next_out_index = n),
          (y.read = a),
          t
        );
      }),
      (y.proc = function(i, t) {
        var e, n, a, r, _, l, d, s;
        for (
          r = i.next_in_index,
            _ = i.avail_in,
            n = y.bitb,
            a = y.bitk,
            d = (l = y.write) < y.read ? y.read - l - 1 : y.end - l;
          ;

        )
          switch (g) {
            case V:
              for (; a < 3; ) {
                if (0 === _)
                  return (
                    (y.bitb = n),
                    (y.bitk = a),
                    (i.avail_in = _),
                    (i.total_in += r - i.next_in_index),
                    (i.next_in_index = r),
                    (y.write = l),
                    y.inflate_flush(i, t)
                  );
                (t = L), _--, (n |= (255 & i.read_byte(r++)) << a), (a += 8);
              }
              switch (((z = 1 & (e = 7 & n)), e >>> 1)) {
                case 0:
                  (n >>>= 3), (n >>>= e = 7 & (a -= 3)), (a -= e), (g = W);
                  break;
                case 1:
                  var f = [],
                    o = [],
                    b = [[]],
                    u = [[]];
                  G.inflate_trees_fixed(f, o, b, u),
                    U.init(f[0], o[0], b[0], 0, u[0], 0),
                    (n >>>= 3),
                    (a -= 3),
                    (g = ii);
                  break;
                case 2:
                  (n >>>= 3), (a -= 3), (g = Y);
                  break;
                case 3:
                  return (
                    (n >>>= 3),
                    (a -= 3),
                    (g = ni),
                    (i.msg = 'invalid block type'),
                    (t = q),
                    (y.bitb = n),
                    (y.bitk = a),
                    (i.avail_in = _),
                    (i.total_in += r - i.next_in_index),
                    (i.next_in_index = r),
                    (y.write = l),
                    y.inflate_flush(i, t)
                  );
              }
              break;
            case W:
              for (; a < 32; ) {
                if (0 === _)
                  return (
                    (y.bitb = n),
                    (y.bitk = a),
                    (i.avail_in = _),
                    (i.total_in += r - i.next_in_index),
                    (i.next_in_index = r),
                    (y.write = l),
                    y.inflate_flush(i, t)
                  );
                (t = L), _--, (n |= (255 & i.read_byte(r++)) << a), (a += 8);
              }
              if (((~n >>> 16) & 65535) != (65535 & n))
                return (
                  (g = ni),
                  (i.msg = 'invalid stored block lengths'),
                  (t = q),
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              (p = 65535 & n),
                (n = a = 0),
                (g = 0 !== p ? X : 0 !== z ? ti : V);
              break;
            case X:
              if (0 === _)
                return (
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              if (
                0 === d &&
                (l == y.end &&
                  0 !== y.read &&
                  (d = (l = 0) < y.read ? y.read - l - 1 : y.end - l),
                0 === d &&
                  ((y.write = l),
                  (t = y.inflate_flush(i, t)),
                  (d = (l = y.write) < y.read ? y.read - l - 1 : y.end - l),
                  l == y.end &&
                    0 !== y.read &&
                    (d = (l = 0) < y.read ? y.read - l - 1 : y.end - l),
                  0 === d))
              )
                return (
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              if (
                ((t = L),
                _ < (e = p) && (e = _),
                d < e && (e = d),
                y.window.set(i.read_buf(r, e), l),
                (r += e),
                (_ -= e),
                (l += e),
                (d -= e),
                0 != (p -= e))
              )
                break;
              g = 0 !== z ? ti : V;
              break;
            case Y:
              for (; a < 14; ) {
                if (0 === _)
                  return (
                    (y.bitb = n),
                    (y.bitk = a),
                    (i.avail_in = _),
                    (i.total_in += r - i.next_in_index),
                    (i.next_in_index = r),
                    (y.write = l),
                    y.inflate_flush(i, t)
                  );
                (t = L), _--, (n |= (255 & i.read_byte(r++)) << a), (a += 8);
              }
              if (((A = e = 16383 & n), 29 < (31 & e) || 29 < ((e >> 5) & 31)))
                return (
                  (g = ni),
                  (i.msg = 'too many length or distance symbols'),
                  (t = q),
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              if (((e = 258 + (31 & e) + ((e >> 5) & 31)), !m || m.length < e))
                m = [];
              else for (s = 0; s < e; s++) m[s] = 0;
              (n >>>= 14), (a -= 14), (I = 0), (g = Z);
            case Z:
              for (; I < 4 + (A >>> 10); ) {
                for (; a < 3; ) {
                  if (0 === _)
                    return (
                      (y.bitb = n),
                      (y.bitk = a),
                      (i.avail_in = _),
                      (i.total_in += r - i.next_in_index),
                      (i.next_in_index = r),
                      (y.write = l),
                      y.inflate_flush(i, t)
                    );
                  (t = L), _--, (n |= (255 & i.read_byte(r++)) << a), (a += 8);
                }
                (m[T[I++]] = 7 & n), (n >>>= 3), (a -= 3);
              }
              for (; I < 19; ) m[T[I++]] = 0;
              if (((E[0] = 7), (e = M.inflate_trees_bits(m, E, S, D, i)) != L))
                return (
                  (t = e) == q && ((m = null), (g = ni)),
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              (I = 0), (g = $);
            case $:
              for (; I < 258 + (31 & (e = A)) + ((e >> 5) & 31); ) {
                var x, w;
                for (e = E[0]; a < e; ) {
                  if (0 === _)
                    return (
                      (y.bitb = n),
                      (y.bitk = a),
                      (i.avail_in = _),
                      (i.total_in += r - i.next_in_index),
                      (i.next_in_index = r),
                      (y.write = l),
                      y.inflate_flush(i, t)
                    );
                  (t = L), _--, (n |= (255 & i.read_byte(r++)) << a), (a += 8);
                }
                if (
                  ((e = D[3 * (S[0] + (n & C[e])) + 1]),
                  (w = D[3 * (S[0] + (n & C[e])) + 2]) < 16)
                )
                  (n >>>= e), (a -= e), (m[I++] = w);
                else {
                  for (
                    s = 18 == w ? 7 : w - 14, x = 18 == w ? 11 : 3;
                    a < e + s;

                  ) {
                    if (0 === _)
                      return (
                        (y.bitb = n),
                        (y.bitk = a),
                        (i.avail_in = _),
                        (i.total_in += r - i.next_in_index),
                        (i.next_in_index = r),
                        (y.write = l),
                        y.inflate_flush(i, t)
                      );
                    (t = L),
                      _--,
                      (n |= (255 & i.read_byte(r++)) << a),
                      (a += 8);
                  }
                  if (
                    ((a -= e),
                    (x += (n >>>= e) & C[s]),
                    (n >>>= s),
                    (a -= s),
                    258 + (31 & (e = A)) + ((e >> 5) & 31) < (s = I) + x ||
                      (16 == w && s < 1))
                  )
                    return (
                      (m = null),
                      (g = ni),
                      (i.msg = 'invalid bit length repeat'),
                      (t = q),
                      (y.bitb = n),
                      (y.bitk = a),
                      (i.avail_in = _),
                      (i.total_in += r - i.next_in_index),
                      (i.next_in_index = r),
                      (y.write = l),
                      y.inflate_flush(i, t)
                    );
                  for (w = 16 == w ? m[s - 1] : 0; (m[s++] = w), 0 != --x; );
                  I = s;
                }
              }
              S[0] = -1;
              var c = [],
                v = [],
                h = [],
                k = [];
              if (
                ((c[0] = 9),
                (v[0] = 6),
                (e = A),
                (e = M.inflate_trees_dynamic(
                  257 + (31 & e),
                  1 + ((e >> 5) & 31),
                  m,
                  c,
                  v,
                  h,
                  k,
                  D,
                  i,
                )) != L)
              )
                return (
                  e == q && ((m = null), (g = ni)),
                  (t = e),
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              U.init(c[0], v[0], D, h[0], D, k[0]), (g = ii);
            case ii:
              if (
                ((y.bitb = n),
                (y.bitk = a),
                (i.avail_in = _),
                (i.total_in += r - i.next_in_index),
                (i.next_in_index = r),
                (y.write = l),
                (t = U.proc(y, i, t)) != P)
              )
                return y.inflate_flush(i, t);
              if (
                ((t = L),
                U.free(i),
                (r = i.next_in_index),
                (_ = i.avail_in),
                (n = y.bitb),
                (a = y.bitk),
                (d = (l = y.write) < y.read ? y.read - l - 1 : y.end - l),
                0 === z)
              ) {
                g = V;
                break;
              }
              g = ti;
            case ti:
              if (
                ((y.write = l),
                (t = y.inflate_flush(i, t)),
                (d = (l = y.write) < y.read ? y.read - l - 1 : y.end - l),
                y.read != y.write)
              )
                return (
                  (y.bitb = n),
                  (y.bitk = a),
                  (i.avail_in = _),
                  (i.total_in += r - i.next_in_index),
                  (i.next_in_index = r),
                  (y.write = l),
                  y.inflate_flush(i, t)
                );
              g = ei;
            case ei:
              return (
                (t = P),
                (y.bitb = n),
                (y.bitk = a),
                (i.avail_in = _),
                (i.total_in += r - i.next_in_index),
                (i.next_in_index = r),
                (y.write = l),
                y.inflate_flush(i, t)
              );
            case ni:
              return (
                (t = q),
                (y.bitb = n),
                (y.bitk = a),
                (i.avail_in = _),
                (i.total_in += r - i.next_in_index),
                (i.next_in_index = r),
                (y.write = l),
                y.inflate_flush(i, t)
              );
            default:
              return (
                (t = j),
                (y.bitb = n),
                (y.bitk = a),
                (i.avail_in = _),
                (i.total_in += r - i.next_in_index),
                (i.next_in_index = r),
                (y.write = l),
                y.inflate_flush(i, t)
              );
          }
      }),
      (y.free = function(i) {
        y.reset(i, null), (y.window = null), (D = null);
      }),
      (y.set_dictionary = function(i, t, e) {
        y.window.set(i.subarray(t, t + e), 0), (y.read = y.write = e);
      }),
      (y.sync_point = function() {
        return g == W ? 1 : 0;
      });
  }
  var _,
    d = [0, 0, 255, 255];
  function t() {
    var e = this;
    function _(i) {
      return i && i.istate
        ? ((i.total_in = i.total_out = 0),
          (i.msg = null),
          (i.istate.mode = 7),
          i.istate.blocks.reset(i, null),
          L)
        : j;
    }
    (e.mode = 0),
      (e.method = 0),
      (e.was = [0]),
      (e.need = 0),
      (e.marker = 0),
      (e.wbits = 0),
      (e.inflateEnd = function(i) {
        return e.blocks && e.blocks.free(i), (e.blocks = null), L;
      }),
      (e.inflateInit = function(i, t) {
        return (
          (i.msg = null),
          (e.blocks = null),
          t < 8 || 15 < t
            ? (e.inflateEnd(i), j)
            : ((e.wbits = t), (i.istate.blocks = new l(i, 1 << t)), _(i), L)
        );
      }),
      (e.inflate = function(i, t) {
        var e, n;
        if (!i || !i.istate || !i.next_in) return j;
        for (t = 4 == t ? B : L, e = B; ; )
          switch (i.istate.mode) {
            case 0:
              if (0 === i.avail_in) return e;
              if (
                ((e = t),
                i.avail_in--,
                i.total_in++,
                8 != (15 & (i.istate.method = i.read_byte(i.next_in_index++))))
              ) {
                (i.istate.mode = 13),
                  (i.msg = 'unknown compression method'),
                  (i.istate.marker = 5);
                break;
              }
              if (8 + (i.istate.method >> 4) > i.istate.wbits) {
                (i.istate.mode = 13),
                  (i.msg = 'invalid window size'),
                  (i.istate.marker = 5);
                break;
              }
              i.istate.mode = 1;
            case 1:
              if (0 === i.avail_in) return e;
              if (
                ((e = t),
                i.avail_in--,
                i.total_in++,
                (n = 255 & i.read_byte(i.next_in_index++)),
                ((i.istate.method << 8) + n) % 31 != 0)
              ) {
                (i.istate.mode = 13),
                  (i.msg = 'incorrect header check'),
                  (i.istate.marker = 5);
                break;
              }
              if (0 == (32 & n)) {
                i.istate.mode = 7;
                break;
              }
              i.istate.mode = 2;
            case 2:
              if (0 === i.avail_in) return e;
              (e = t),
                i.avail_in--,
                i.total_in++,
                (i.istate.need =
                  ((255 & i.read_byte(i.next_in_index++)) << 24) & 4278190080),
                (i.istate.mode = 3);
            case 3:
              if (0 === i.avail_in) return e;
              (e = t),
                i.avail_in--,
                i.total_in++,
                (i.istate.need +=
                  ((255 & i.read_byte(i.next_in_index++)) << 16) & 16711680),
                (i.istate.mode = 4);
            case 4:
              if (0 === i.avail_in) return e;
              (e = t),
                i.avail_in--,
                i.total_in++,
                (i.istate.need +=
                  ((255 & i.read_byte(i.next_in_index++)) << 8) & 65280),
                (i.istate.mode = 5);
            case 5:
              return 0 === i.avail_in
                ? e
                : ((e = t),
                  i.avail_in--,
                  i.total_in++,
                  (i.istate.need += 255 & i.read_byte(i.next_in_index++)),
                  (i.istate.mode = 6),
                  2);
            case 6:
              return (
                (i.istate.mode = 13),
                (i.msg = 'need dictionary'),
                (i.istate.marker = 0),
                j
              );
            case 7:
              if ((e = i.istate.blocks.proc(i, e)) == q) {
                (i.istate.mode = 13), (i.istate.marker = 0);
                break;
              }
              if ((e == L && (e = t), e != P)) return e;
              (e = t),
                i.istate.blocks.reset(i, i.istate.was),
                (i.istate.mode = 12);
            case 12:
              return P;
            case 13:
              return q;
            default:
              return j;
          }
      }),
      (e.inflateSetDictionary = function(i, t, e) {
        var n = 0,
          a = e;
        return i && i.istate && 6 == i.istate.mode
          ? (a >= 1 << i.istate.wbits &&
              (n = e - (a = (1 << i.istate.wbits) - 1)),
            i.istate.blocks.set_dictionary(t, n, a),
            (i.istate.mode = 7),
            L)
          : j;
      }),
      (e.inflateSync = function(i) {
        var t, e, n, a, r;
        if (!i || !i.istate) return j;
        if (
          (13 != i.istate.mode && ((i.istate.mode = 13), (i.istate.marker = 0)),
          0 === (t = i.avail_in))
        )
          return B;
        for (e = i.next_in_index, n = i.istate.marker; 0 !== t && n < 4; )
          i.read_byte(e) == d[n] ? n++ : (n = 0 !== i.read_byte(e) ? 0 : 4 - n),
            e++,
            t--;
        return (
          (i.total_in += e - i.next_in_index),
          (i.next_in_index = e),
          (i.avail_in = t),
          4 != (i.istate.marker = n)
            ? q
            : ((a = i.total_in),
              (r = i.total_out),
              _(i),
              (i.total_in = a),
              (i.total_out = r),
              (i.istate.mode = 7),
              L)
        );
      }),
      (e.inflateSyncPoint = function(i) {
        return i && i.istate && i.istate.blocks
          ? i.istate.blocks.sync_point()
          : j;
      });
  }
  function i() {}
  function s() {
    var d = new i(),
      s = new Uint8Array(512),
      f = !1;
    d.inflateInit(),
      (d.next_out = s),
      (this.append = function(i, t) {
        var e,
          n,
          a = [],
          r = 0,
          _ = 0,
          l = 0;
        if (0 !== i.length) {
          (d.next_in_index = 0), (d.next_in = i), (d.avail_in = i.length);
          do {
            if (
              ((d.next_out_index = 0),
              (d.avail_out = 512),
              0 !== d.avail_in || f || ((d.next_in_index = 0), (f = !0)),
              (e = d.inflate(0)),
              f && e == B)
            )
              return -1;
            if (e != L && e != P) throw 'inflating: ' + d.msg;
            if ((f || e == P) && d.avail_in == i.length) return -1;
            d.next_out_index &&
              (512 == d.next_out_index
                ? a.push(new Uint8Array(s))
                : a.push(new Uint8Array(s.subarray(0, d.next_out_index)))),
              (l += d.next_out_index),
              t &&
                0 < d.next_in_index &&
                d.next_in_index != r &&
                (t(d.next_in_index), (r = d.next_in_index));
          } while (0 < d.avail_in || 0 === d.avail_out);
          return (
            (n = new Uint8Array(l)),
            a.forEach(function(i) {
              n.set(i, _), (_ += i.length);
            }),
            n
          );
        }
      }),
      (this.flush = function() {
        d.inflateEnd();
      });
  }
  (i.prototype = {
    inflateInit: function(i) {
      return (
        (this.istate = new t()), (i = i || 15), this.istate.inflateInit(this, i)
      );
    },
    inflate: function(i) {
      return this.istate ? this.istate.inflate(this, i) : j;
    },
    inflateEnd: function() {
      if (!this.istate) return j;
      var i = this.istate.inflateEnd(this);
      return (this.istate = null), i;
    },
    inflateSync: function() {
      return this.istate ? this.istate.inflateSync(this) : j;
    },
    inflateSetDictionary: function(i, t) {
      return this.istate ? this.istate.inflateSetDictionary(this, i, t) : j;
    },
    read_byte: function(i) {
      return this.next_in.subarray(i, i + 1)[0];
    },
    read_buf: function(i, t) {
      return this.next_in.subarray(i, i + t);
    },
  }),
    e.zip
      ? (e.zip.Inflater = s)
      : ((_ = new s()),
        e.addEventListener(
          'message',
          function(i) {
            var t = i.data;
            t.append &&
              e.postMessage({
                onappend: !0,
                data: _.append(t.data, function(i) {
                  e.postMessage({ progress: !0, current: i });
                }),
              }),
              t.flush && (_.flush(), e.postMessage({ onflush: !0 }));
          },
          !1,
        ));
})(this);
