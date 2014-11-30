all: minify.html

inline.html: index.html cryptage.js
	html-inline index.html > inline.html

minify.html: inline.html
	minify inline.html > minify.html
