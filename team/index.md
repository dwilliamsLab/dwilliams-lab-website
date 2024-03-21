---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

### Principal Investigator 

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}

{% include section.html %}

### Current members

{%
  include list.html
  data="members"
  component="portrait"
  filters="group: current"
%}
{:.center}

{% include section.html %}

### Lab alumni

{%
  include list.html
  data="members"
  component="portrait"
  filters="group: past"
%}
{:.center}

