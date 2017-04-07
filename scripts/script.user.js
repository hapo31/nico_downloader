// ==UserScript==
// @name        nico_downloader
// @namespace
// @description ニコ動落とせるやつ in HTML5プレイヤー
// @includes    "http://www.nicovideo.jp/watch/*"
// @excludes
// ==/UserScript==

window.onload = () => {
    const video = document.getElementsByTagName("video")[0];
    const f = () => {
        const href = video.getAttribute("src");
        if (href == null) {
            setTimeout(f, 500);
            return;
        }

        const filename = document.title.substr(0, document.title.length - 9);
        const a = document.createElement("a");
        const div = document.createElement("div");
        div.className = "MylistCountMeta";
        const p = document.createElement("p");
        p.innerText = "Chrome拡張";
        p.className = "MylistCountMeta-title";
        
        a.href = href;
        a.target = "_blank";
        a.innerText = "動画を保存";
        a.className = "Link";
        a.style = "font-weight: bold";
        
        console.log(filename);
        a.setAttribute("download", filename);

        div.style = "text-align: center";
        div.appendChild(p);
        div.appendChild(a);

        const page = document.getElementsByClassName("VideoMetaOverflowMenuContainer")[0];
        page.parentNode.insertBefore(div, page);
    };
    setTimeout(f, 500);
}