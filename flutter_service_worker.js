'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "962382110ec6590d4d30efbc7d8f9ce1",
"index.html": "63fc11686d7538adb62b4f3d367e95ab",
"/": "63fc11686d7538adb62b4f3d367e95ab",
"main.dart.js": "4eef6c7a05f6a84943688633b165fdb4",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eae99c14af74b1dfdf3998943f74d62a",
".git/ORIG_HEAD": "835f0d752075c8f07e24f26e554092dd",
".git/config": "37dfe6ae0f3d63f4e200d1a01e7bd984",
".git/objects/0d/30062d57cffd18c1e3313e19f76edf555f0fa6": "b6b077240d4842e9d2243b7aa354afab",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/bb87efd8551a2dd56595ba47ce6acff3cd68ad": "3ebc69c92890ca285deedfcb7469ccbf",
".git/objects/95/2f8c9edd61d5ac24c2b10b1062b803453a5c87": "c1c217b5ccfbb8fc2dda87c3585a47f0",
".git/objects/92/c9ee8a06d97dced869daa2f6b0c35bb2df8d5d": "ae3cefadac06480760fa53d586b85440",
".git/objects/66/4b136c22e67eccdd710427d446d3cd12375710": "853e9f8b0f5e8b4af28be4dfa6a023b9",
".git/objects/50/9fb636bd369465851f226cda77b84f9682bb0a": "b3d2571e5d923f986651baf170e520a0",
".git/objects/57/e7127fab8da0c493a0b3eeb161a1cef31045b4": "3c6693b030ea2b8085a731fb9161f5c4",
".git/objects/6f/45d97727c714b60353c8ea6bd76c86b4e4d83c": "e4084ca9a4c1da93117590120cb1ac3f",
".git/objects/32/6342709ffc94788ae5fa508fe459bf4922cf2a": "9a0d0a38404fd858a2bb329235e61351",
".git/objects/32/f98f7205088792074eb02e4aab9f6f92d9521a": "c81844a69843e4e3693464f12ed1dde4",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/51/7d280d7b38cb1b52386bb331d374ac35c36d3c": "ecc2eab99c7ddad86fcfe814ac6b467c",
".git/objects/5f/413cd778dbbd119f1c851358298ef94cd46d76": "20acfa39e237193167b26ea2ef2618a6",
".git/objects/05/bf031c1399f29ab66f7332467a98f8e5d5f459": "905870ef8e9efd6f897869980ed7b911",
".git/objects/9d/8e4f7dc1fda8c5ea7338775ef389b0cb891bb1": "76016b781e1108927ec317f4ec0ff8ad",
".git/objects/02/85a16400e83ab165593cef88bd6a12ee90dac7": "f5113bca58d185b8c387811e061c1f79",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d9/2befd59f15642b692bfa49f35ca86748d0b7cb": "ea5e4673633d0eac4112ee840d950816",
".git/objects/b3/723e386c5efe5d4ff383a8bcdeee916827cb58": "d2499b6539888f9ed8208f31ab437355",
".git/objects/a5/01d8b1a4c502b2314d1e27f59b572dc7c845e5": "49e2a8171525b00acb036bda27d82f67",
".git/objects/d1/135b787fe456c6e7db3dce5695535e001d1a25": "419d94fabe887827d17dcb3851ea0823",
".git/objects/d1/d5c07ee825a96a0906ea9e32cf1c8b0050ccc8": "1bb13b99d4e5220e7667addb01f74348",
".git/objects/d6/adc79584211adb4aae45ea14a3a18eb7119ec0": "d46790de1bccf9a5b51d7ed8c26ac0c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/18861ff5a2e0e871e5003ed348c1348d1b010a": "11e6a95c8f1a6fe20d9f98a96dd73579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/cef06981786984e073d26e6736cd54fb2a06c8": "ae4f97eeed766853e0832ad07ff0eca8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/a1fe448f2c340fa2aa12532327c9b943976202": "e1f9bc594d71e928c1810a4b70480207",
".git/objects/f5/a2736bdf4bb64144068596205694d1a03012bd": "0834f9f57283c3c01f350376db782963",
".git/objects/e4/c62aa59817df7dce28c9fcfd79b8a96d5cb8a4": "c59e6ce1bb0a12839b7324a725579f03",
".git/objects/fb/bf8bb714f0610771a902f4fa8a6114173216f2": "2cc78facc9125be50eb442002551e1da",
".git/objects/c1/bd59f9aeb84fe9181243ba7d3798b9c2bda013": "c7e15295c648aeed1a51847b35c11110",
".git/objects/c1/b2b821ddbf5372cd135dde2739e6f043d974ae": "bff3929205a8a29a5c6962fb5cc43627",
".git/objects/ec/e2dcb2543303828423f60d0aead82823cf3905": "152d7755d7619fcee49be021452d878b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/e19c978bde8689538fb6743bb8a102469403e0": "4b7c2f8b735e976616b1414533bd4c50",
".git/objects/16/1c7cdd7f6dc4c78afc37248119757c3e606ace": "9bb640f30a68dc799162caaba9d27631",
".git/objects/1f/14deae3fd205453d48150e203caac7db864fe1": "dfb3be5e6890f96e2bec64682c919574",
".git/objects/1f/f3695e033f6aaefd245b8a8a364c2c8e230447": "504d62659614570e6d77344a012ea8f2",
".git/objects/73/030b907bd330581585d12899d3d85ddbca9c5b": "e823ba24b1c7654b750441c64f3266bd",
".git/objects/80/61561793c11ca2632d5fb5539938b7bdb51194": "86a5cba6d65cc62827c85aa4464d5149",
".git/objects/74/3062031009003b72163ac874e0b2b47b6ed20f": "3eebbe2d297c0f4be02f99751a1fecb1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f73f5572b133e28d1ebb312eb91e1eac54c014": "d8f6aae6b6e9300c4dd34ab5951dea93",
".git/objects/10/c509b5883a979da5403aad9173749633f9cff8": "cc36454c92b6a1373b3b058332c58e7d",
".git/objects/19/87585ed906483052caf80611597486f31fb465": "a386812bff8cdd3de0e83e2a8ddeb9f0",
".git/objects/75/5c8785a71d0ce2aa457bc20c2efb3fd1a36342": "d37667bb08d03b11837747fb5af88186",
".git/objects/86/fe124021a18d42e6d0b477453b6c97373d1e56": "52069a9efc6bd822921063d565a107c1",
".git/objects/44/426e8e325f6b8626c686c2a90395205217bd37": "545605d44b0de731fc25dafae5ec1d26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/bce26c46833c22ba9a4f459078c90e37e080a5": "eafc81efea51120bef688c6deb657203",
".git/objects/36/a8b7ab8642277bdbf92bc64f90d02b430d3620": "173b5bd566176f64c556d09b6d3d3e5e",
".git/objects/09/27154c23836767469f702c0248091992053aef": "5e8ac2a8183b828cf48b0e3e832d1f91",
".git/objects/31/00974f71e56005133d73d8d8928a9e54cf2097": "f3bda16dda97cd405bcf1e5617a5fb53",
".git/objects/54/a939c9bcb4377a804f4fda6c83992055a42f6e": "cf8f61dfef30494f95e809cb9b8e4eca",
".git/objects/39/884d230212b7e4f83fc38d343779f15d9bbdb2": "95f03a6527b623f35cb22bccbb6b2d48",
".git/objects/52/2e6cd507c1d0d130e56f8cfed26c4cdd0653bf": "9737cbd3a5a025d4c746fbb2fb63b8be",
".git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
".git/objects/64/cb455c5ca2fb81b5654e4e3b3d94413017905c": "ba84ee6b348702474bd5a030a14fc0a9",
".git/objects/bf/118e58e2e1dc729398e18adc334dfdec51ca2f": "e244fec7d21976f00cb691175d82d683",
".git/objects/d3/7773cd504f1c6acf87e7a59846d0bc7d605624": "ecf9a89479da3420fe30e846b5818b22",
".git/objects/ba/5e82d65a18f7665d55b38ef8413fe09a5a9a73": "6a992dcf2ac378f5f5cfd22503c58356",
".git/objects/a9/d772f8e7957d419fbfe52bacfc8b6c0a155efd": "709ca03c30dbf8f1a3d535621d212409",
".git/objects/af/2fc126c4fbe8c9714eea7cb165a0577e83603f": "1fc0e4e8549c2c0bb831983dc9e39eb7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/70a45a4d0187a32446f843db25c321b68c2ada": "e5a9d2cd500634d0eed6021fc91fab2f",
".git/objects/db/f1b833d18c99e0e9f35fdfd563ff505a6d5c11": "0d67f6e925d8cd62b128be162b2060ec",
".git/objects/a8/400cc588d47b8bc7320ddc11d6e1945002effb": "ccee258d7885f85f4b6d6a7049eec2d4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/cf2c306946482333b2d9f48e96db72ec78feff": "1ec5a5f138d5e08da2ef1f57f3b52c7a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/fa/d6ef46593b9547f11bb29f08a1cd07fc074922": "7f3c1597ad12c6c777eb20377b56d565",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/7617bb2d9f8eed7dc75baf77f942130e8727d4": "0a17bbf1f4b0d274ca282566e6507606",
".git/objects/ce/dccb3e305c8c85e9794c099f08f75f7bb52378": "3656674e6c4a0ef3f89465d7c4e8e945",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3867c66f915f57e05bb2cfe3d261d29f2764b0": "e5dca5de42c67b92672933d728844c10",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/a1f77f6916b6a91b7ac132935c988d2194c104": "bff19a530722d1300ee06c1b9bc72e65",
".git/objects/83/4050041c76e8a2fec078a29ac1645bd0a89617": "a2cf30976a4dd5212c5094659d8c905a",
".git/objects/48/73a247f4ac0def34a9c660a3aa1b5cc6c26323": "510dd28ed6877b3b31906caad5e5d853",
".git/objects/24/f6af03d08420239ebfa842bd0c1aee5d66bf8d": "69e14b366f6ce1ade5b119a20dee89a7",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/55504e74902904a37278563c64f7c773b11d1b": "d7bdf0a03213b28d7f746a49c4386aff",
".git/objects/85/f8b9e114415ad296035f6c9924c5d5d2a915b6": "5a5b5ebf41c48f99599f00ec27afb698",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/418087cbc180e1c10d64674259d4af6165f9b6": "56bc2204fb0dc56754fa894c90756cec",
".git/objects/2e/3d35e4425c70bf1c66f965c4257ceeec2b97d9": "341e98a8120ec4f1e208e66430c04fd4",
".git/objects/2b/93957e07f6d71a6e3453b7a8041e23e137ad53": "9b2755f4c43ef82434c225b25022c4e2",
".git/objects/2b/b2b35497a8d3edc8b1ef2c0efc013e1adb4d84": "926e08c9031b4cccee68480500ea34be",
".git/objects/47/7b98af797621be95a0ad5f27ce1d22933a543d": "3f4eb4239ad3eaad2fcd2fcd2e283ddc",
".git/objects/7f/ad11d484f322b1edbacc5a2053da2b9fe2dff6": "b7fea9fcd79c26414f545a32242d05bd",
".git/objects/7f/b22d128e4d3d15524f57869724435a7c9782b2": "5c88875235a3ed8ac9ed571e51e2ee1c",
".git/objects/22/86de5c3efb25d8af31bccc3dd4f571a000a9e2": "9bb6dfbea0ae07f402653bcad5b56bd0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "1523205208c843ee2093d31740cb1694",
".git/logs/refs/heads/master": "6214535eef15d41375b69a6e58aed71e",
".git/logs/refs/heads/main": "e006bd8352370bc9dd1952796b1b62d6",
".git/logs/refs/remotes/origin/master": "528afa69870d7adcb98656a79f2c2d20",
".git/logs/refs/remotes/origin/main": "e5c38a37bbd00da1b7268b8bd41b3eba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "835f0d752075c8f07e24f26e554092dd",
".git/refs/heads/main": "835f0d752075c8f07e24f26e554092dd",
".git/refs/remotes/origin/master": "835f0d752075c8f07e24f26e554092dd",
".git/refs/remotes/origin/main": "18fbcd344759e9e2bd21b9826b6f61ca",
".git/index": "ebb0094a887b8a4f6c33daa823f18421",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/FETCH_HEAD": "22b3470504e016650ec2ee6f4eccf48c",
"assets/AssetManifest.json": "2d3a191e321ab31b3263c706c092f2a8",
"assets/NOTICES": "aa002f1e67d8f2eebd6eab20356a4e50",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/img/svg/appstore.svg": "92a136bfe36b344054d17f750ff4e868",
"assets/assets/img/svg/mail.svg": "fbe280982ca96337d88f460349b241de",
"assets/assets/img/svg/facebook.svg": "85731032dc91229c09196c7d3ebf3dd6",
"assets/assets/img/svg/whatsapp.svg": "17f8f7c55e439678c36a972f43dd8d3a",
"assets/assets/img/svg/phone.svg": "68547fefa26cca1a164280507bc08266",
"assets/assets/img/svg/linkedin.svg": "17ddc70827b20fb7ecb1348ed81c63ad",
"assets/assets/img/svg/twitter.svg": "286e260f496d9e6a7962ef5a4f5810a5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
