'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3c66ae11b23b00e0e7cd15cf27c8bd76",
"version.json": "9d924b0c4924d0c797e4880a31cbf221",
"index.html": "94e03edce80a0051a4cc4c1deadde576",
"/": "94e03edce80a0051a4cc4c1deadde576",
"main.dart.js": "b210746d4e75fa606382e9f7deb4e056",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c0749e34f31994d936391cbf4339288b",
".git/config": "0e466d2cfcd16ab4499aa1acfed3b2a0",
".git/objects/3b/6ab1a1096ba84c9c608f1c9ff448efa76698b1": "efc4dc8c2dd8db9194b9d35530b2cdf4",
".git/objects/6a/f36ba1bbaa35e82ffaca9df9be12c5af5efad3": "32edece766de0545cc33206f34e85a3d",
".git/objects/6a/a5e333a8c0771c2aae37c2bb6035629f57f925": "92210f8a010c3e4da29f65eb8fd6612e",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/51/6e5d83f00b35036fd8023d3e5ecd7a52e20887": "ff08bae9e2e6e5c3fdf97ead267ea5a4",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/0b/6476559a112e604688038fc81c770b645162cf": "b34200031a558bcd818b99f108aa4b84",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/60/4d9384cae02909b71dd95a4cade8711360d4e3": "2aa4372246f98b086e03cc04fca7ef32",
".git/objects/33/d852bca384548487e1819cdc2e6108e511294c": "242ab275094dbe613a6c9d81eb4a3c75",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/ad/a51f09148c10006eb0680633f311318a71dd91": "bd2f608a07370ae170e4e1ebd4081108",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/8838e5f8570cf997c9b786993ae15c9632344a": "4f5fe54b67651c5eb61320f2aa8a4361",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/aace034f2eeecd93239993858bb7ff011470ac": "348df593b639b820fccc026d05275192",
".git/objects/d6/523e828013d43cedd08c69130a5527800b2320": "ac2ac2106535c8e2422cde27b8cc7554",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ac7dec51b9e18d2aee3bb8f517159596f7c087": "f9e20a371436250f0a2a7b9816a42939",
".git/objects/cf/51cd04bd96980c1c4e2271b61e9fefe072949a": "5a0b0a05869725094993f8e7e114faae",
".git/objects/cf/ef0466d6e58deda23141f74964640bb4c61b90": "a6dc727ef612352b6da035099ce14616",
".git/objects/c6/1f223aa96cb35722b6c5af31861d8544e35002": "dcf9e0e37d05a8ef33754118895c41fb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/16/647968c591f1866ed3ffc98ba540cfff7b0f49": "fc43b7f754d2f46cff6ccb636d4cabbc",
".git/objects/73/f353ea4a1ab2d093fdd0232e4fb06fa6c0a137": "827dae2cbb59679dfc0cba7fbcc2f5f8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/44/a3ae59a532bd77b37b2ae70302d1177eead7cb": "e99fcaf88c54b0fba0616fb56b54488b",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/6e/049ad9e301eb483d55818c878489767965ad8e": "2cf1690d7bde5c297c4574ef5a10cd53",
".git/objects/53/8a02e32c3ae6b82991df4b32912d3ec430a925": "ab96c2ece1509dd581edd0e1d400aca3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/1ef405b276b2fea46e0f1ba4bc0923fe97030d": "26671c609c85154b31b8ce1aa8186cb3",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5930c857362f569b54b956426b54dd64a04f77": "f1ea3a43fa3173d1ca84e531ac02482c",
".git/objects/d2/cc5e87c63aaff6c02767c501228675b5a66048": "6052b4aeeb026b237bd1bd5c93e6ad04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0fea8c95cc28832be51b4be6f9f4c65be2b3f4": "00cdeec0a8c34c297ffe650afcf4ef2f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/3e7031f3461790cc9f54adac6bc9c2ac7f17c5": "fd1f82b8e8a54f69b0841228637b0d6a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/1655f883add8e5edf19d7a0f8ad75d41e4c384": "7179e2adb652d02148139b30a3b4be02",
".git/objects/fa/86924b335f2501e7579eb85a5056d93d012b32": "a90d9dc9a18706165b383875d05f4f94",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a51c184f56b19ebdf649afa55bd7411022adeb": "b30a7021b863253fb53c7dcc85538d93",
".git/objects/79/75f3da5d62921db02840db5195cfe146ea39c4": "9191bdedc93e179db271672fa4316a3e",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/4a/891d433812cf53f8f8130dade048380a7120f3": "863d15e0041eb29e4e57cde880606d56",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/23/ea6361e8ff251c79b8d4031fba93d5e9ea3809": "6df5a11a482e52d10758a23788305abb",
".git/objects/8d/8176fcc2a908b1d582d9ecbfd99bd17df18b0e": "780278657550ee0011335972cd1e49b7",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/47e4d5b82a2fc01a636569afcd8173ed6336ab": "b6def59e2521cccdcc28ea18c3a15525",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/78/69316c737f6dbea5504ed4dd9c36a4be0f0925": "31fb2286470253f45316d3816c2d5336",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/8b/3ae72dee8fa873e50a389856d999a6ae964241": "d2485ea7a61ff3174e5cdf7e32376880",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "804bec22e95bc08ecfc8baa049415330",
".git/logs/refs/heads/main": "804bec22e95bc08ecfc8baa049415330",
".git/logs/refs/remotes/origin/main": "c3fa52569d49e59e9e1965d7102ac033",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "65c325741de92e1b04eb9c0a60e45861",
".git/refs/remotes/origin/main": "65c325741de92e1b04eb9c0a60e45861",
".git/index": "2e8a2f014e570da56382911b54502152",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
"assets/images/awards_s.png": "f617c1197a3d8b1692e1f3bfcd255532",
"assets/images/ai_logo.png": "a67c94bb03ec91f5bd34ef9152889c6a",
"assets/images/step2.png": "b60777b47ca3b8bf8fed077319d07e09",
"assets/images/onedotlogo_s.png": "47225f40d50f26e87bfed6270190df82",
"assets/images/service.png": "98daacf64cdfed6fa2e82269bfe0ea7e",
"assets/images/onedotlogo_o.png": "bb530388a237e1b5c2b891312b85a790",
"assets/images/aiwisdom_1.png": "ccd5cc34a6b58bc0a5e9080d12d75616",
"assets/images/ai_logo_2.png": "baa294dd6c4b41da09460841a268b8e7",
"assets/images/form.png": "4eceffffbc77a3b484a35a5ff4598baf",
"assets/images/frontImg_s.png": "15dbc1af3a967d5fcac1e9e0026107e6",
"assets/images/service_s.png": "6f57af5d6943a996dc5e3dac6bf420c6",
"assets/images/2.png": "16c9592ede97f8199d1ff46683511a77",
"assets/images/step2_s.png": "bb731d79cb0d1523666df4e3ab7b3120",
"assets/images/3.png": "a078840c97a8298d699b0086fcf9410d",
"assets/images/coop_s4.png": "14d9d978b44fa1c3a6ff0a50aadf499f",
"assets/images/aiwisdom.png": "5b6b75da8013485db97a7bfbb081dda8",
"assets/AssetManifest.json": "e3d326b905d32504318fe76d3a6f68c8",
"assets/NOTICES": "6ca31f21ef82efa89338a5c5a677a213",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f6ae0110c9587cd2ccb327af4f2f669f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2c4e612e020b87d443dd5911f7363a4d",
"assets/fonts/MaterialIcons-Regular.otf": "da971932d3c9073c4dbc199d049d1522",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
