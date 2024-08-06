---
title: Team
nav:
  order: 2
  tooltip: About our team
---
{% include section.html size=full background="images/banner.jpeg" %}
# <i class="fa-solid fa-users"></i>&nbsp;&nbsp;Team

{% include section.html %}

<h2 style="text-align: center;">Principal Investigator</h2> 

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}

{% include section.html %}

<h2 style="text-align: center;">Current members</h2>

{%
  include list.html
  data="members"
  component="portrait"
  filters="group: current"
%}

