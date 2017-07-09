var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {
    admobid = {
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/1033173712',
    }
}
document.addEventListener('deviceready', function() {
    admob.banner.config({
        id: admobid.banner,
        isTesting: false,
        autoShow: true,
    })
    admob.banner.prepare()

    admob.interstitial.config({
        id: admobid.interstitial,
        isTesting: false,
        autoShow: false,
    })
    admob.interstitial.prepare()
}, false)

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
    admob.interstitial.prepare()
})
document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
    admob.interstitial.prepare()
})
