!function(t){t.ApplyToJoinView=function(t,e){e=e||{};var n=t.find(".applications-closed"),o=t.find(".applications-open"),a=e.acceptingApplications||!1,i=e.inviteCode;this.$buttons=t.find("a.button"),a||i?(o.show(),n.hide()):(o.hide(),n.show())}}(window.AC=window.AC||{}),function(t){t.invite=function(e,n,o){if(o=o||{},""!==e&&void 0!==e){var a=o.appendParamToUrl||t.URLBuilder.appendParam;n.each(function(t,n){var o=$(n),i=o.attr("href"),r=a(i,"invitecode",e);o.attr("href",r)})}}}(window.AC=window.AC||{}),function(t){t.queryParam=function(t){var e=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),n=new RegExp("[\\?&]"+e+"=([^&#]*)"),o=n.exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))}}(window.AC=window.AC||{}),function(t){t.URLBuilder=t.URLBuilder||{};var e=t.URLBuilder.appendParam=function(t,e,n){var o=-1===t.indexOf("?")?"?":"&";return t+o+e+"="+n},n=function(t,e){console.log(t===e,t,e)};n("http://example.com?foo=bar",e("http://example.com","foo","bar")),n("http://example.com?foo=bar&bim=baz",e("http://example.com?foo=bar","bim","baz"))}("undefined"==typeof window?exports:window.AC=window.AC),function(t){function e(t,e,i,r){n(t,function(t){console.log(t);var n=a(t,e,r);console.log(n),o(t).call(analytics,t,i,n)})}function n(t,e){var n=t.each?t:document.querySelectorAll(t);Array.prototype.forEach.call(n,e)}function o(t){return"FORM"===t.tagName?analytics.trackForm:analytics.trackLink}function a(t,e,n){return n.CTA=n.CTA||e,n.pageTitle=n.pageTitle||document.title,n.pageUrl=n.pageUrl||location.href,n.pagePath=n.pagePath||location.pathname,n.type=n.type||i(t),n.text=n.text||r(t),n}function i(t){return t.querySelector("img")||"IMG"===t.tagName?"Image":"FORM"===t.tagName?"Button":"A"===t.tagName?t.classList.contains("button")?"Button":"Link":void 0}function r(t){var e=i(t);return"Image"===e?t.alt||t.src:"Link"===e?t.textContent:"Form"===e?c(t):void 0}function c(t){var e=t.querySelector("button")||t.querySelector('input[type="submit"]');return e.textContent}var l="Clicked CTA",p="Explored Towards Goal";return t.Track={CTA_EVENT_ID:"Clicked CTA",EXPLORE_EVENT_ID:"Explored Goal",cta:function(t,n,o){e(t,n,l,o)},explore:function(t,n,o){e(t,n,p,o)}},t.Track}(window||exports),$(document).ready(function(){var t=AC.queryParam("invite-code"),e=new AC.ApplyToJoinView($(".apply-to-join"),{inviteCode:t,acceptingApplications:!0});AC.invite(t,e.$buttons);var n=function(t,e){e(t,t.data("goal"),{position:t.data("position"),engagementLevel:t.data("engagement-level"),type:t.data("type"),text:$.trim(t.text().replace(/(\r\n|\n|\r)/gm,"")),order:t.data("order"),color:t.data("color"),category:t.data("category")})};$(".exploring").each(function(t,e){var o=$(e);n(o,function(){Track.explore.apply(Track,arguments)})}),$(".engaging, .buying").each(function(t,e){var o=$(e);n(o,function(){Track.cta.apply(Track,arguments)})})});