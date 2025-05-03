---
layout: splash
permalink: /about/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/emmett-id-overlook.jpg
title: About Gem County Runners
intro:
  - title: Encourage Curiosity. Foster Relationships. Contribute Locally.
    excerpt: >
      So much of life can lead us to feel stagnant, isolated, and unaware of those around us.
      Gem County Runners was created to provide opportunities for runners and neighbors to reconnect, engagement,
      and promote a healthy community.

      <center>We're excited to have you <a href="../our-runs/">join us</a> at our next run!</center>
social_links:
  - image_path: /assets/images/strava.webp
    alt: "strava-group-page"
    title: "Strava community"
    excerpt: "For those on Strava, be sure to join the group!"
    url: "https://www.strava.com/clubs/gemcountyrunners"
    btn_class: "btn--primary"
    btn_label: "Latest on Strava"
  - image_path: /assets/images/instagram.jpg
    alt: "instagram-social"
    title: "Find us on Instagram"
    excerpt: "For those on the 'Gram, be sure to tag us!"
    url: "https://www.instagram.com/gemcountyrunners"
    btn_class: "btn--primary"
    btn_label: "Latest on Instagram"
  - image_path: /assets/images/survey-banner.jpg
    alt: "availability-survey"
    title: "Let us know your Availability"
    excerpt: "We're looking for the best times to coordinate our run group"
    url: "https://gemcounty.run/availability-survey/"
    btn_class: "btn--primary"
    btn_label: "Help make our community awesome!"
outro:
  - title: When we run
    excerpt: Looking to join us?
    url: "../our-routes/"
    btn_class: "btn--primary"
    btn_label: "Let's go!"
  - title: Where we run
    excerpt: No matter the distance you're looking to cover, we've got options!
    url: "../our-routes/"
    btn_class: "btn--primary"
    btn_label: "Explore Gem County"
---

{% include feature_row id="intro" type="center" %}
{% include feature_row id="social_links" %}
{% include feature_row id="outro" type="center" %}
