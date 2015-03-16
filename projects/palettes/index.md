---
title: "Palettes"
layout: page
---

These are colour palettes for projects I’m working on. They’re invaluable to me, but probably useless to everyone else.

## Bath ASU

- #009CDB
- #0E6A8E
- #FFFFFF
- #F3F3F3
- #ADAFB1
- #363636

## Dan Leech

- #26C6DA
- #FF2222
- #FFFFFF
- #EEEEEE
- #434340
- #131310

## Event Store

- #5AB552
- #2E9625
- #FFFFFF
- #D3DBE3
- #435261

## mAbstalk.com

- #1566FF
- #FFFFFF
- #4C4E51
- #404144

## Microgenetics

- #FF0000
- #FFFFFF
- #000000

## Sentia Yoga

- #006837
- #009245
- #39B54A
- #8CC63F
- #FFFFFF
- #414440

<style>
.site-main ul {
    margin: -0.375rem;
    padding: 0;
    list-style: none;
}
.site-main ul:after {
    content: " ";
    clear: both;
    display: table;
}
.site-main li {
    display: inline-block;
    float: left;
    width: calc(50% - 0.75rem);
    margin: 0.375rem;
    text-align: center;
    line-height: 7.5rem;
}
@media (min-width: 500px) {
    .site-main li {
        width: calc(33.333% - 0.75rem);
    }
}
@media (min-width: 600px) {
    .site-main li {
        width: calc(20% - 0.75rem);
    }
}
</style>

<script>
    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        var content = listItems[i].innerHTML;
        if (content.indexOf("#") === 0) {
            listItems[i].style.background = content;
            var red = parseInt(content.substring(1,2), 16),
                green = parseInt(content.substring(3,4), 16),
                blue = parseInt(content.substring(5,6), 16),
                average = (red + green + blue) / 3;
            if (average < 12) {
                listItems[i].style.color = "white";
            }
        }
    }
</script>