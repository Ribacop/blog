#!/usr/bin/env python

print "Content-Type: text/plain; charset=utf-8"
print
import urllib
from lxml.html import tostring, html5parser

url = "http://vesna.yandex.ru/law.xml"

s = urllib.urlopen(url).read()
fstr = s[s.find("<p>"):s.find("</p>")+4:1]
print fstr
#page = html5parser.document_fromstring(s)

#p = page.XPath("//p")

#print p[0].text_content()