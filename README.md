This repository contains documentation resources for OpenDataSoft platform, APIs and tools.

### Content structure
The `content` folder contains the following levels:
```
- content (root)
	- collection
		- category
			- article
				- language
					- localized article content
```

Each collection, category and article folder can contain a `metadata.yaml` file containing a title for the element and optionally an `order` property to handle the ordering of this element among its siblings. For collections
and categories, the title is localized using a language key within the title property.
For example the "knowledge-base" collection folder could contain the following `metadata.yaml` file:
```yaml
title:
	en: Knowledge base
order: 1
```

Each article folder contains one folder per language code, each containing an `article.md` file containing the localized article content as Markdown.
The article folder may also contain an `images` folder with images used by the article; for example `![My Image](my-image.png)` will refer to the file `my-image.png` inside the `images` folder.


#### About RST

Sphinx documentation can be written in either Markdown (md) or reStructuredText (rst). The latter isn't as popular as 
the former and its syntax isn't as easy but it allows for richer pages. In order to learn the rudiments of rst, you can
toy with the online rst editor available at http://rst.ninjs.org/

### Images annotation

If you need to annotate images (add circles, arrows, basic text), you can download Skitch 
(https://evernote.com/skitch/). It is free and very handy for these basic edits.

### Building the documentation

First, set up your Python installation (a virtualenv is recommended).
```python
pip install -r requirements.txt
```

#### Sphinx

Move to the version of the doc you want to build(`/docs-fr` or `/docs-en`) and use `make`.
```bash
make html
```

You may run into an error about an unknown locale UTF-8. In that case you need to use the following:
```
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```

The generated html will be available in `/docs-LANGUAGE/build/html`.

#### HelpScout

Build the documentation on HelpScout using your HelpScout API key:
```python
python scripts/helpscout.py <HelpScout API key>
```
