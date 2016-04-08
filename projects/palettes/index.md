---
layout: page
title: "Palettes"
---

These are colour palettes for projects I’m working on. They’re invaluable to me, but probably useless to everyone else.

## Bath ASU

- #00A3E0
- #F3F3F3
- #97999B
- #3D3935

## Dan Leech

- #1976D2
- #E0E3E6
- #223344

## Event Store

- #5AB552
- #2E9625
- #D3DBE3
- #435261

## mAbstalk.com

- #1566FF
- #4C4E51
- #404144

## Microgenetics

- #FF0000
- #000000

## Sentia Yoga

- #006837
- #009245
- #39B54A
- #8CC63F
- #414440

<style>
    .site-main ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    @media (min-width: 720px) {
        .site-main ul {
            display: flex;
            flex-direction: row;
        }
    }
    .site-main li {
        flex-grow: 1;
        font-size: 0.8125rem;
        line-height: 3.5rem;
        text-align: center;
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