---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

<h5 style="text-align: center;">
  A full list of publications for each team member can be found on their <a href="../team">profile</a> page
</h5>

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" filters="preprint: y" %}

# <i class="fas fa-book-open"></i>&nbsp;&nbsp; Highlighted Publications

{% include list.html data="citations" component="citation" style="rich" filters="highlight: y, stage: pd"%}
{% include list.html data="citations" component="citation" style="rich" filters="highlight: y, stage: phd"%}

