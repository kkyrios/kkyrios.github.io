# Yumou Liu · 刘禹谋

Personal academic homepage: **https://kkyrios.github.io/**

Built on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), upstream commit `2cc1577eeaf2f74dede6d016a70722dbd409ea2f`. The original Sass theme is retained; the layout, bilingual content, and personal styling are customized. Upstream MIT license is preserved in `LICENSE`.

## Update content

- `_data/profile.yml`: name, portrait, affiliation, GitHub, email, Scholar, CV, and update date. Empty optional links stay hidden.
- `_data/home.yml`: bilingual introduction and the publications, projects, experience, and awards lists. Empty lists show honest update notices.
- `images/`: portrait and future paper/project figures.
- `assets/css/personal.css`: visual adjustments over the upstream theme.

Add an entry beneath any section's `entries` (replace `entries: []` with `entries:` followed by entries):

```yaml
    entries:
      - title_en: "Confirmed project or paper title"
        title_zh: "已核对的项目或论文标题"
        meta_en: "Authors / venue / dates"
        meta_zh: "作者 / 发表信息 / 日期"
        description_en: "A verified contribution and result."
        description_zh: "已核对的个人贡献与结果。"
        # Optional fields; omit when unavailable.
        # url: "https://example.org/project"
        # image: "/images/project.jpg"
        # image_alt: "Description of the project figure"
        # links:
        #   - label: "Code"
        #     url: "https://github.com/owner/project"
```

Both language fields should be filled. Text is escaped by default; no raw HTML is needed. The language toggle remembers the visitor's preference. The default language is English.

## Publish

GitHub Pages builds Jekyll from `main`, repository root. Push a commit to publish automatically. No API keys, Google Scholar crawler, or analytics are configured.

For local development with a compatible Ruby and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

## Previous website

The complete previous version is preserved on branch [`codex/homepage-before-20261028`](https://github.com/kkyrios/kkyrios.github.io/tree/codex/homepage-before-20261028), based on commit `207afd1`. Its theme license is also retained in `docs/PREVIOUS-THEME-LICENSE`.
