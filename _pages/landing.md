---
layout: splash
classes:
  - landing
  - no-nav
permalink: /landing/
hidden: true
title: "Gem County Runners: Join the Movement"
excerpt: >
  Curious runners. Local routes. Meaningful miles. 
  Gem County Runners is a community that explores Emmett and beyond one stride, one story, and one shared path at a time.
header:
  overlay_image: /assets/images/emmett-id-overlook.jpg
  overlay_filter: "linear-gradient(rgba(255,138,0,0.4), rgba(76,181,171,0.5))"
  actions:
    - label: "About"
      url: "/landing/#about"
    - label: "Runs"
      url: "/landing/#runs"
    - label: "Contact"
      url: "/landing/#contact"
    - label: "Discover"
      url: "/landing/#discover"

about_gcr:
  - title: Our Stride, Our Story
    excerpt: >
      Gem County Runners is built on movement, not speed. We run, walk, and wander together to reconnect with our bodies, each other, and the place we call home.

      Whether it's sunrise trails or quiet sidewalks, every step invites curiosity. When we show up together, we build community. And that connection fuels local support that moves beyond the miles.

meetup_monday:
  - title: Monday Mug Run
    image_path: /assets/images/gcr-course-emmett_city_park_lolli.png
    alt: "gcr-city-center"
    excerpt: Mondays can be hard, but Mug Run shouldn't! Join us Mondays at 06:00 to shake off the "Sunday Scaries".
    url: "https://strava.app.link/OupK34G4iSb"
    btn_class: "btn--primary"
    btn_label: "Route Information"

meetup_saturday:
  - title: Saturday Shuffle
    image_path: /assets/images/gcr-course-river_trail.png
    alt: "gcr-river-trail"
    excerpt: Saturdays are meant for Sunshine and smiles! Jump-start your weekend each Saturday at 08:00.
    url: "https://www.strava.com/routes/3340894005752000780"
    btn_class: "btn--primary"
    btn_label: "Route Information"

lets_connect:
  - title: Let's Connect
    excerpt: Have a question, story, or idea to share? Fill out the form below or send us a note. Let’s keep Gem County moving together!

outro:
  - title: Your next step starts here.
    excerpt: Discover routes, stories, and ways to get involved. Looking forward to seeing you out there!
    image_path: /assets/images/1753637828375.png
    url: "https://gemcounty.run"
    btn_class: "btn--primary"
    btn_label: "Join us!"
---

<div id="about">{% include feature_row id="about_gcr" type="center" %}</div>
<div id="runs">
  {% include feature_row id="meetup_monday" type="right" %}
  {% include feature_row id="meetup_saturday" type="left" %}
</div>
<div id="contact">
  {% include feature_row id="lets_connect" type="center" %}
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="44e4274f-0135-4ee9-a1ad-bec18f07b6fc">
    <input type="hidden" name="subject" value="New message from gemcounty.run">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <input type="hidden" name="redirect" value="https://gemcounty.run/thanks">
    <input type="checkbox" name="botcheck" style="display:none;">
    <button type="submit" class="btn btn--primary">Let’s Connect</button>
  </form>
</div>
<div id="discover">{% include feature_row id="outro" type="center" %}</div>
