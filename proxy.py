#!/usr/bin/env python

print "Content-Type: application/json; charset=utf-8"
print
import urllib

#url = "http://vesna.yandex.ru/law.xml"
url = "http://vesna.yandex.ru/all.xml?mix=marketing%2Cmathematics%2Claw%2Cphilosophy%2Cestetica&marketing=on&mathematics=on&law=on&philosophy=on&estetica=on"

s = urllib.urlopen(url).read()
fstr = '{\n"name": "'
fstr += s[s.find('<h1')+52:s.find("</h1>")-2:1]
fstr += '",\n"content": "'
fstr += s[s.find("<p>"):s.find("</p>")+4:1] + '"\n}'
print fstr
