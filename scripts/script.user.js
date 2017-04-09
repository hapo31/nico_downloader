// ==UserScript==
// @name        nico_downloader
// @namespace
// @description ニコ動落とせるやつ in HTML5プレイヤー
// @includes    "http://www.nicovideo.jp/watch/*"
// @excludes
// ==/UserScript==

window.onload = () => {
    // ビデオタグ取得
    const video = document.getElementsByTagName("video")[0];
    if (video != null) {
        // 取得できたらこっち
        const f = () => {
            // 500msごとに存在を確認
            const href = video.getAttribute("src");
            if (href == null) {
                setTimeout(f, 500);
                return;
            }
            // titleの最後に付いてる - ニコニコ動画を消す
            const filename = document.title.substr(0, document.title.length - 9);
            const a = document.createElement("a");
            const div = document.createElement("div");
            const p = document.createElement("p");

            p.innerText = "Chrome拡張";
            p.className = "MylistCountMeta-title";

            a.setAttribute("download", filename);
            a.href = href;
            a.innerText = "動画を保存";
            a.className = "Link";
            a.style = "font-weight: bold";

            div.className = "MylistCountMeta";
            div.style = "text-align: center";
            div.appendChild(p);
            div.appendChild(a);
            // 再生数とかがある欄に追加する
            const page = document.getElementsByClassName("VideoMetaOverflowMenuContainer")[0];
            page.parentNode.insertBefore(div, page);
        };
        setTimeout(f, 500);
    }
}