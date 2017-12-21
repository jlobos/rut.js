"use strict";
function clean(a) {
  return "string" == typeof a
    ? a.replace(/^0+|[^0-9kK]+/g, "").toUpperCase()
    : "";
}

function validate(a) {
  if ("string" != typeof a) return !1;
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(a)) return !1;
  a = clean(a);
  for (var b = parseInt(a.slice(0, -1), 10), c = 0, d = 1; 0 < b; )
    (d = (d + (b % 10) * (9 - c++ % 6)) % 11), (b = Math.floor(b / 10));
  var e = 0 < d ? "" + (d - 1) : "K";
  return e === a.slice(-1);
}

function format(a) {
  a = clean(a);
  for (
    var b = a.slice(-4, -1) + "-" + a.substr(a.length - 1), c = 4;
    c < a.length;
    c += 3
  )
    b = a.slice(-3 - c, -c) + "." + b;
  return b;
}

module.exports = { validate: validate, clean: clean, format: format };

