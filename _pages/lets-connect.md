---
layout: splash
permalink: /lets-connect/
title: Let's Connect

header:
  overlay_image: /assets/images/emmett-id-overlook.jpg
  overlay_filter: "rgba(47,127,120,0.5)"
  actions:
    - label: "What to Expect"
      url: "/what-to-expect/"

excerpt: >
  We would love to hear from you.<br>
  Whether you are new to Gem County Runners or already part of the crew, this is the place to ask questions, share ideas, or simply say hello.

intro:
  - title: Say Hello
    excerpt: >
      If you have a question, a story, a route idea, or you just want to introduce yourself, you are in the right place. We read every message and do our best to reply quickly.
    url: "/what-to-expect/"
    btn_label: "New Here"
    btn_class: "btn--primary"

form:
  - title: Send a Message
    excerpt: >
      Use the form below to reach out. It is simple, friendly, and goes straight to our inbox.
    url: "#contact-form"
    btn_label: "Scroll to Form"
    btn_class: "btn--primary"

community:
  - title: Join the Conversation
    excerpt: >
      Pop up runs, photos, local happenings, and friendly chatter. Our community spaces are where most of the day to day connection happens.<br><br>
      <a href="https://facebook.com/groups/639916621983362/">Facebook Group</a><br>
      <a href="https://instagram.com/gemcountyrunners">Instagram</a><br>
      <a href="https://www.strava.com/clubs/gemcountyrunners">Strava Club</a>
---

{% include feature_row id="intro" type="left" %}
{% include feature_row id="form" type="right" %}
{% include feature_row id="community" type="center" %}

<div id="contact-form">
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="44e4274f-0135-4ee9-a1ad-bec18f07b6fc">
  <input type="hidden" name="subject" value="New message from gemcounty.run">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <input type="hidden" name="redirect" value="https://gemcounty.run/thanks">
  <input type="checkbox" name="botcheck" style="display:none;">
  <button type="submit" class="btn btn--primary">Send Message</button>
</form>
</div>
