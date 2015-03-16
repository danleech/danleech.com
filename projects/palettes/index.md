---
title: "Palettes"
layout: page
---

<div id="palettes"></div>
<script>
    var palettes = [
        ["Dan Leech","131310","26C6DA","EEEEEE","434340","FF2222","FFFFFF"]
    ];
    for (var i = 0; i < palettes.length; i++) {
        var paletteTitle = document.createElement("h2");
        var paletteTitleContent = document.createTextNode(palettes[i][0]);
        paletteTitle.appendChild(paletteTitleContent);
        var palettes = document.getElementById("palettes");
        document.body.insertBefore(paletteTitle, palettes);
        Document.createElementalert(palettes[i][0]);
    }
</script>