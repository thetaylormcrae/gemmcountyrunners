---
layout: single
permalink: /go/
title: Redirecting...
classes: wide
---

<script src="/assets/js/qr_map.js"></script>
<script>
  const segments = window.location.pathname.split("/");
  const code = segments[segments.length - 1] || segments[segments.length - 2]; // handles trailing slash

  const map = {};
  window.qrLinks.forEach((entry, idx) => {
    const short = (idx + 1).toString().padStart(2, "0");
    map[short] = entry.uri;
  });

  const target = map[code];
  if (target) {
    window.location.replace(target);
  } else {
    window.location.replace("https://gemcounty.run");
  }
</script>

<p>If you're not redirected, <a href="https://gemcounty.run">click here</a>.</p>