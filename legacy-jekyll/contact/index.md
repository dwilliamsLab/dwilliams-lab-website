---
title: Contact
nav:
  order: 7
  tooltip: Email, address, and location
---
{% include section.html size=wide %}
# <i class="fas fa-envelope"></i>&nbsp;&nbsp;Contact

{%
  include button.html
  type="email"
  icon=""
  text="drakew@umn.edu"
  tooltip=""
  link="drakew@umn.edu"
  style="button"
%}
{%
  include button.html
  type="phone"
  icon=""
  text="(612) 625-3974" 
  tooltip=""
  link="+1-612-625-3974"
  style="button"
%}
{%
  include button.html
  type="address"
  icon=""
  text="Google Maps"
  tooltip="Lab location on Google Maps for easy navigation"
  link="https://maps.app.goo.gl/BH2MUyAq6faHwtbC8"
  style="button"
%}

{% include section.html %}

# <i class="fas fa-mail-bulk"></i>&nbsp;&nbsp;Mailing Address

Malcolm Moos Health Sciences Tower, Rm 17-175  
515 Delaware St SE  
Minneapolis, MN 55455

{% capture col1 %}
{%
  include figure.html
  image="images/east.jpg"
  caption="U of MN East Bank"
%}
{% endcapture %}
{% include cols.html col1=col1 %}
