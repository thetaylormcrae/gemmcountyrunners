---
layout: splash
permalink: /
hidden: true
header:
  overlay_filter: "rgba(47,127,120,0.5)"
  overlay_image: /assets/images/emmett-id-overlook.jpg
  actions:
    - label: "Our Stride, Our Story"
      url: "/about/"
title: Gem County Runners
excerpt: >
  Curious runners. Local routes. Meaningful miles.<br><br>
  We explore one stride, one story, and one shared path at a time.<br><br>
  Born in Emmett. Built for Idaho.

# feature_row content
intro:
  - title: Encourage Curiosity
    excerpt: Where curiosity becomes movement.
    url: "/our-runs/"
    btn_class: "btn--primary"
    btn_label: "Your Next Run"
  - title: Foster Community
    excerpt: Where movement becomes connection.
    url: "/about/"
    btn_class: "btn--primary"
    btn_label: "Why We Run"
  - title: Contribute Locally
    excerpt: Where connection becomes contribution.
    url: "/lets-connect/"
    btn_class: "btn--primary"
    btn_label: "Share an Idea"
our_runs:
  - image_path: /assets/images/welcome-gem-county.jpg
    alt: "welcome-gem-county"
    title: "Move with Us"
    excerpt: >
      We’re building a healthier, more connected community — one run at a time.
      Join us Mondays at 6 A.M., Saturdays at 9 A.M., and for spontaneous runs throughout the week.<br>
      <b>There’s always a place for your pace.</b>
    url: "/our-runs"
    btn_class: "btn--primary"
    btn_label: "Learn More"

---
{% include feature_row id="intro" %}
{% include feature_row id="our_runs" type="center" %}
