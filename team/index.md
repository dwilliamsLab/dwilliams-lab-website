---
title: Team
nav:
  order: 2
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

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


{% include section.html %}

<h2 style="text-align: center;">Lab alumni</h2>

{%
  include list.html
  data="members"
  component="portrait"
  filters="group: past"
%}


