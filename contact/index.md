---
title: Contact
nav:
  order: 6
  tooltip: Email, address, and location
---
{% include section.html size=wide %}
# {% include icon.html icon="fa-regular fa-envelope" %}Contact

{%
  include button.html
  type="email"
  icon=""
  text="xxxxxx@umn.edu"
  tooltip=""
  link="xxxxxx@umn.edu"
  style="button"
%}
{%
  include button.html
  type="phone"
  icon=""
  text="(612) xxx-xxxx" 
  tooltip=""
  link="+1-612-xxx-xxxx"
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

# {% include icon.html icon="fa-regular fa-mail-bulk" %}Mailing Address

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
{% capture col2 %}
{%
  include figure.html
  image="images/west.jpg"
  caption="U of MN West Bank"
%}
{% endcapture %}
{% include cols.html col1=col1 col2=col2 %}
