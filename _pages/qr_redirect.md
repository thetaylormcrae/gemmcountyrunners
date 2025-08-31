---
permalink: /go/
---

<!DOCTYPE html>
<meta charset="utf-8">
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
    // Fallback to main site
    window.location.replace("https://gemcounty.run");
  }
</script>
</html>