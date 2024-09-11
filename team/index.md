---
title: Team
nav:
  order: 2
  tooltip: About our team
---
{% include section.html size=full background="images/banner.jpeg" %}
# <i class="fa-solid fa-users"></i>&nbsp;&nbsp;Team

{% include section.html %}

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}   
{%
  include list.html
  data="members"
  component="portrait"
  filters="group: current"
%}

#### Graduate Students

Our lab welcomes interested graduate students to join us in the winter/spring of 2025 for a rotation. We expect to recruit 1-2 Ph.D. students to join the lab in the 2025/2026 academic year. If you are a prospective graduate student who would like to rotate in our laboratory, please send Dr. Williams an email expressing your interest. Attached to this email, please also include a short cover letter detailing the following:

- Your research interests
- Your short- and long-term career goals 
- Why you are interested in our laboratory

Please also include your CV summarizing past academic, professional and research experience along with the names of two potential references.

{%
  include button.html
  type="email"
  icon=""
  text="Contact Dr. Williams"
  tooltip=""
  link="drakew@umn.edu?subject=Interested in a PhD position&body=Include CV, cover letter and 2 references" text="Contact Dr. Williams"
  style="button"
%}
