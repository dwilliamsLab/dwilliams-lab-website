---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

# {% include icon.html icon="fa-regular fa-book-open" %}Publications

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" filters="preprint: n"%}

{% include section.html %}

# <i class="fas fa-book-open"></i>     Preprints

{% include section.html %}

{% include list.html data="citations" component="citation" style="rich" filters="preprint: y" %}
