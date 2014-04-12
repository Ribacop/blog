#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import platform
import urllib
from lxml import html

print "Content-Type: text/html"
print
print """<!DOCTYPE HTML>
<html>
    <head>
        <title>Корпоративный блог</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="description" content="Учебный корпоративный блог">
        <meta name="keywords" content="блог, ИТМО, технологии программирования">
        <link rel="stylesheet" href="css/style.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script src="http://jashkenas.github.com/coffee-script/extras/coffee-script.js"></script>
        <script type="text/coffeescript" src="scripts/userscript.coffee"></script>
    </head>
    <body>
        <p>"""
url = "http://vesna.yandex.ru/pushkin/?write=onegin"
s = urllib.urlopen(url).read()
page = html.fromstring(s)
p = page.cssselect("p")
print p[0].text_content()
print """2352356"""
print "</p></body></html>"
