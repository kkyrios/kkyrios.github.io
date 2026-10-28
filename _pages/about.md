---
layout: default
permalink: /
redirect_from:
  - /about/
  - /about.html
---
<section id="about" class="intro-section">
  <p class="page-eyebrow">{% include bilingual.html en="WELCOME" zh="欢迎访问" %}</p>
  <h1>{% include bilingual.html en="About Me" zh="关于我" %}</h1>
  <p class="intro-copy">{% include bilingual.html en=site.data.home.intro.en zh=site.data.home.intro.zh %}</p>
  <p class="update-note"><span class="status-dot" aria-hidden="true"></span>{% include bilingual.html en="Website update in progress" zh="主页内容更新中" %}</p>
</section>
{% for section in site.data.home.sections %}
<section id="{{ section.id }}" class="academic-section">
  <h2>{% include bilingual.html en=section.title_en zh=section.title_zh %}</h2>
  {% if section.entries.size > 0 %}
    {% for entry in section.entries %}
    <article class="entry{% if entry.image %} paper-box{% endif %}">
      {% if entry.image %}<div class="paper-box-image"><img src="{{ entry.image | relative_url }}" alt="{{ entry.image_alt | escape }}" loading="lazy"></div>{% endif %}
      <div class="entry-body{% if entry.image %} paper-box-text{% endif %}">
        <h3>{% if entry.url %}<a href="{{ entry.url | escape }}">{% endif %}{% include bilingual.html en=entry.title_en zh=entry.title_zh %}{% if entry.url %}</a>{% endif %}</h3>
        {% if entry.meta_en or entry.meta_zh %}<p class="entry-meta">{% include bilingual.html en=entry.meta_en zh=entry.meta_zh %}</p>{% endif %}
        <p>{% include bilingual.html en=entry.description_en zh=entry.description_zh %}</p>
        {% if entry.links %}<div class="entry-links">{% for link in entry.links %}<a href="{{ link.url | escape }}">{{ link.label | escape }}</a>{% endfor %}</div>{% endif %}
      </div>
    </article>
    {% endfor %}
  {% else %}
    <p class="empty-state">{% include bilingual.html en=section.empty_en zh=section.empty_zh %}</p>
  {% endif %}
</section>
{% endfor %}
