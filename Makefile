all: index-minify.html scc-minify.html scc2-minify.html

clean:
	rm -f *-inline.html *-minify.html

index-inline.html: index.html cryptage.js
	html-inline index.html > index-inline.html

scc-inline.html: scc.html cryptage.js
	html-inline scc.html > scc-inline.html

scc2-inline.html: scc2.html cryptage.js
	cat scc2.html | grep -v DELETE > scc2-no-external.html
	html-inline scc2-no-external.html > scc2-inline-tmp.html
	cat scc2-inline-tmp.html | sed 's/<!--AAA//g;s/AAA-->//g' > scc2-inline.html
	rm -f scc2-no-external.html scc2-inline-tmp.html

index-minify.html: index-inline.html
	minify index-inline.html > index-minify.html

scc-minify.html: scc-inline.html
	minify scc-inline.html > scc-minify.html

scc2-minify.html: scc2-inline.html
	minify scc2-inline.html > scc2-minify.html
