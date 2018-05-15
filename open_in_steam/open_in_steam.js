// ==UserScript==
// @name         Open in Steam
// @namespace    https://github.com/DeadSix27/random_userscripts
// @version      1.0
// @description  Open this page in steam.
// @author       You
// @match        https://steamcommunity.com/sharedfiles/filedetails/?id=*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    function get_jsonobj_from_url() {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    var path = window.location.pathname;
    var open_url = "#";
    if (path == "/sharedfiles/filedetails/")
    {
        var url_params = get_jsonobj_from_url();
        if ('id' in url_params)
        {
            open_url = 'steam://url/CommunityFilePage/' + url_params["id"];
        }
    }
    $(".apphub_OtherSiteInfo.responsive_hidden").append('<a style="position: relative; z-index: 1;" class="btnv6_blue_hoverfade btn_medium" href="'+open_url+'"><span>Open in Steam</span></a>');
})();