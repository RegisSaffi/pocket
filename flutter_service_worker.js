'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "de7eb6f24ea9125d84f1273dd76a364e",
"icons/Icon-maskable-512.png": "de7eb6f24ea9125d84f1273dd76a364e",
"icons/Icon-192.png": "de7eb6f24ea9125d84f1273dd76a364e",
"icons/Icon-maskable-192.png": "de7eb6f24ea9125d84f1273dd76a364e",
"manifest.json": "3d1ed132bc49d52229f8a3f1656ade8e",
"index.html": "333c5b32fc3facf93ddd959f64eefafd",
"/": "333c5b32fc3facf93ddd959f64eefafd",
"assets/1.0.2+2-macos/PkgInfo": "23b7d7d024abb0f558420e098800bf27",
"assets/1.0.2+2-macos/_CodeSignature/CodeResources": "f6141d07883d52d74a41e31b2d41dcba",
"assets/1.0.2+2-macos/MacOS/short_pocket": "26ee86c0346261d19eacf176e22d50c6",
"assets/1.0.2+2-macos/Info.plist": "7ab8a66d1f76be4bcd77f0e67955d0ce",
"assets/1.0.2+2-macos/hashes.json": "04afc59e162cad46762c22a6ac2411bf",
"assets/1.0.2+2-macos/Frameworks/libswiftObjectiveC.dylib": "8dc1e397afce6e2860f57a9118150e8b",
"assets/1.0.2+2-macos/Frameworks/libswiftos.dylib": "1ef1824b72a3c3056aadcff08f84883d",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/url_launcher_macos": "6c3f88c9b94bb15ad7d144b804713cb0",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/Current/url_launcher_macos": "6c3f88c9b94bb15ad7d144b804713cb0",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/Current/_CodeSignature/CodeResources": "364a6b648601944a37e728c907b226bd",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/Current/Resources/url_launcher_macos_privacy.bundle/Contents/Info.plist": "f34b17a682fcbd8f78df9f2223b7e7b7",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/Current/Resources/url_launcher_macos_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/Current/Resources/Info.plist": "bb91803b37a82157bc8118d4bd905568",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/A/url_launcher_macos": "6c3f88c9b94bb15ad7d144b804713cb0",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/A/_CodeSignature/CodeResources": "364a6b648601944a37e728c907b226bd",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/A/Resources/url_launcher_macos_privacy.bundle/Contents/Info.plist": "f34b17a682fcbd8f78df9f2223b7e7b7",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/A/Resources/url_launcher_macos_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Versions/A/Resources/Info.plist": "bb91803b37a82157bc8118d4bd905568",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Resources/url_launcher_macos_privacy.bundle/Contents/Info.plist": "f34b17a682fcbd8f78df9f2223b7e7b7",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Resources/url_launcher_macos_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/url_launcher_macos.framework/Resources/Info.plist": "bb91803b37a82157bc8118d4bd905568",
"assets/1.0.2+2-macos/Frameworks/libswiftXPC.dylib": "4bed1877a0ca087bf0eef261c6cd8589",
"assets/1.0.2+2-macos/Frameworks/libswiftDispatch.dylib": "9fdbe246d93f84ac2b00009dee0ce53a",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreImage.dylib": "0c2da6da7e0c076f8833d880d2d5e2f7",
"assets/1.0.2+2-macos/Frameworks/libswiftAppKit.dylib": "9a7bf30234c242866901833b71287b47",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/_CodeSignature/CodeResources": "2bc87fb831b83e0167a803fefac2dfd3",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/Info.plist": "b45cb164061cc52bb44c41072df15bce",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/NOTICES.Z": "f0c84dbe3001a4a94ca6fe91b5219822",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/shaders/ink_sparkle.frag": "6cd606d3e368485de4ee213b4887f8a0",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/assets/icons/pocket.png": "a6e86d8fc9f9bfbda8828428285af603",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/NativeAssetsManifest.json": "f3a664e105b4f792c6c7fe4e4d22c398",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/fonts/MaterialIcons-Regular.otf": "65b003d8c185a99e2db0363359417cac",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d661a131af20271e35f64eb9cefe5496",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "137653c51fb24144443efa934f401f3b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b7026aebe36d043d44a317280e5bb9f",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "90f396c91a4338f2684727758d1360b4",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/FontManifest.json": "af8368e4e014b2cc4df6358e799308ed",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/AssetManifest.bin": "f53ad6b2b77c3bc9706a3b49b5182aa2",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/Resources/flutter_assets/AssetManifest.json": "c83214d570b8daa57ec68a55d98e4442",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/Current/App": "7471ec10a99d6f81c78060700b971052",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/_CodeSignature/CodeResources": "2bc87fb831b83e0167a803fefac2dfd3",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/Info.plist": "b45cb164061cc52bb44c41072df15bce",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/NOTICES.Z": "f0c84dbe3001a4a94ca6fe91b5219822",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/shaders/ink_sparkle.frag": "6cd606d3e368485de4ee213b4887f8a0",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/assets/icons/pocket.png": "a6e86d8fc9f9bfbda8828428285af603",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/NativeAssetsManifest.json": "f3a664e105b4f792c6c7fe4e4d22c398",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/fonts/MaterialIcons-Regular.otf": "65b003d8c185a99e2db0363359417cac",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d661a131af20271e35f64eb9cefe5496",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "137653c51fb24144443efa934f401f3b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b7026aebe36d043d44a317280e5bb9f",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "90f396c91a4338f2684727758d1360b4",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/FontManifest.json": "af8368e4e014b2cc4df6358e799308ed",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/AssetManifest.bin": "f53ad6b2b77c3bc9706a3b49b5182aa2",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/Resources/flutter_assets/AssetManifest.json": "c83214d570b8daa57ec68a55d98e4442",
"assets/1.0.2+2-macos/Frameworks/App.framework/Versions/A/App": "7471ec10a99d6f81c78060700b971052",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/Info.plist": "b45cb164061cc52bb44c41072df15bce",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/NOTICES.Z": "f0c84dbe3001a4a94ca6fe91b5219822",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/shaders/ink_sparkle.frag": "6cd606d3e368485de4ee213b4887f8a0",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/assets/icons/pocket.png": "a6e86d8fc9f9bfbda8828428285af603",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/NativeAssetsManifest.json": "f3a664e105b4f792c6c7fe4e4d22c398",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/fonts/MaterialIcons-Regular.otf": "65b003d8c185a99e2db0363359417cac",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d661a131af20271e35f64eb9cefe5496",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "137653c51fb24144443efa934f401f3b",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b7026aebe36d043d44a317280e5bb9f",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "90f396c91a4338f2684727758d1360b4",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/FontManifest.json": "af8368e4e014b2cc4df6358e799308ed",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/AssetManifest.bin": "f53ad6b2b77c3bc9706a3b49b5182aa2",
"assets/1.0.2+2-macos/Frameworks/App.framework/Resources/flutter_assets/AssetManifest.json": "c83214d570b8daa57ec68a55d98e4442",
"assets/1.0.2+2-macos/Frameworks/App.framework/App": "7471ec10a99d6f81c78060700b971052",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreGraphics.dylib": "daf2f68847136757e1522294d51f7dc5",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/window_manager": "d0bed9c337958b8bd7ad07c090b49986",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/Current/_CodeSignature/CodeResources": "787671955aa188ab3fe1348d88cc60d5",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/Current/window_manager": "d0bed9c337958b8bd7ad07c090b49986",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/Current/Resources/Info.plist": "14508314601f2ac910f041f9db5e9c39",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/A/_CodeSignature/CodeResources": "787671955aa188ab3fe1348d88cc60d5",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/A/window_manager": "d0bed9c337958b8bd7ad07c090b49986",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Versions/A/Resources/Info.plist": "14508314601f2ac910f041f9db5e9c39",
"assets/1.0.2+2-macos/Frameworks/window_manager.framework/Resources/Info.plist": "14508314601f2ac910f041f9db5e9c39",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/Current/_CodeSignature/CodeResources": "2c1280df6bb8458d1611119ea0ad3c25",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/Current/Resources/Info.plist": "fa67e196e6fe1d6016514a98513401fd",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/Current/cryptography_flutter_plus": "93bbce42e7eca6ba100fa31cd866a5ed",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/A/_CodeSignature/CodeResources": "2c1280df6bb8458d1611119ea0ad3c25",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/A/Resources/Info.plist": "fa67e196e6fe1d6016514a98513401fd",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Versions/A/cryptography_flutter_plus": "93bbce42e7eca6ba100fa31cd866a5ed",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/Resources/Info.plist": "fa67e196e6fe1d6016514a98513401fd",
"assets/1.0.2+2-macos/Frameworks/cryptography_flutter_plus.framework/cryptography_flutter_plus": "93bbce42e7eca6ba100fa31cd866a5ed",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/package_info_plus": "bef4f12008aeba8fcaffc40691ee0dd3",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/Current/_CodeSignature/CodeResources": "df517c19455cb37e4e0507245ad87255",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/Current/package_info_plus": "bef4f12008aeba8fcaffc40691ee0dd3",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/Current/Resources/package_info_plus_privacy.bundle/Contents/Info.plist": "a5e736c1f94b5add4c15ecb2f9b00112",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/Current/Resources/package_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/Current/Resources/Info.plist": "ad1dce9c0ba479c8a26e5880a4d1ad14",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/A/_CodeSignature/CodeResources": "df517c19455cb37e4e0507245ad87255",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/A/package_info_plus": "bef4f12008aeba8fcaffc40691ee0dd3",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/A/Resources/package_info_plus_privacy.bundle/Contents/Info.plist": "a5e736c1f94b5add4c15ecb2f9b00112",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/A/Resources/package_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Versions/A/Resources/Info.plist": "ad1dce9c0ba479c8a26e5880a4d1ad14",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Resources/package_info_plus_privacy.bundle/Contents/Info.plist": "a5e736c1f94b5add4c15ecb2f9b00112",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Resources/package_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/package_info_plus.framework/Resources/Info.plist": "ad1dce9c0ba479c8a26e5880a4d1ad14",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/path_provider_foundation": "64c4678b186886424008b4a0ec3b9686",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/Current/_CodeSignature/CodeResources": "1c87f5a39499daa622ad326d0079ca33",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/Current/path_provider_foundation": "64c4678b186886424008b4a0ec3b9686",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/Current/Resources/Info.plist": "b32e8de21d892b6c366c681f589b10fa",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/Current/Resources/path_provider_foundation_privacy.bundle/Contents/Info.plist": "97fb681eb427a419836e5f6eecd560b3",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/Current/Resources/path_provider_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b6ede793f5aed3c46377c3bc23d94af2",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/A/_CodeSignature/CodeResources": "1c87f5a39499daa622ad326d0079ca33",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/A/path_provider_foundation": "64c4678b186886424008b4a0ec3b9686",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/A/Resources/Info.plist": "b32e8de21d892b6c366c681f589b10fa",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/A/Resources/path_provider_foundation_privacy.bundle/Contents/Info.plist": "97fb681eb427a419836e5f6eecd560b3",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Versions/A/Resources/path_provider_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b6ede793f5aed3c46377c3bc23d94af2",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Resources/Info.plist": "b32e8de21d892b6c366c681f589b10fa",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Resources/path_provider_foundation_privacy.bundle/Contents/Info.plist": "97fb681eb427a419836e5f6eecd560b3",
"assets/1.0.2+2-macos/Frameworks/path_provider_foundation.framework/Resources/path_provider_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b6ede793f5aed3c46377c3bc23d94af2",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/desktop_updater": "7dc5cd47502ab4cd24931a892194b9e9",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/Current/desktop_updater": "7dc5cd47502ab4cd24931a892194b9e9",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/Current/_CodeSignature/CodeResources": "4e5a8f3b909108e8de2b63b38d81ff7d",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/Current/Resources/Info.plist": "d3bd4ab992dfb3b63338985d747f9581",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/A/desktop_updater": "7dc5cd47502ab4cd24931a892194b9e9",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/A/_CodeSignature/CodeResources": "4e5a8f3b909108e8de2b63b38d81ff7d",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Versions/A/Resources/Info.plist": "d3bd4ab992dfb3b63338985d747f9581",
"assets/1.0.2+2-macos/Frameworks/desktop_updater.framework/Resources/Info.plist": "d3bd4ab992dfb3b63338985d747f9581",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreData.dylib": "2d23db447f5ac8a9e540aecefaf7db1f",
"assets/1.0.2+2-macos/Frameworks/libswiftCore.dylib": "6260028414e7930ac6ea5d40f7697fda",
"assets/1.0.2+2-macos/Frameworks/libswiftIOKit.dylib": "98528ea8787f24922dd6a6265ffba254",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/FlutterMacOS": "8b841f097eb896ce30ee9c0eb6099df0",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/Current/_CodeSignature/CodeResources": "33b1013dda95a0b06d3a7fecc6217480",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/Current/FlutterMacOS": "8b841f097eb896ce30ee9c0eb6099df0",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/Current/Resources/PrivacyInfo.xcprivacy": "2d1a440bccd68da99e1333b9df7074f5",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/Current/Resources/Info.plist": "30596f87165b15cd56eefebf9cdcf78c",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/Current/Resources/icudtl.dat": "692337664e861ad322138061132dddc6",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/A/_CodeSignature/CodeResources": "33b1013dda95a0b06d3a7fecc6217480",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS": "8b841f097eb896ce30ee9c0eb6099df0",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/A/Resources/PrivacyInfo.xcprivacy": "2d1a440bccd68da99e1333b9df7074f5",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/A/Resources/Info.plist": "30596f87165b15cd56eefebf9cdcf78c",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Versions/A/Resources/icudtl.dat": "692337664e861ad322138061132dddc6",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Resources/PrivacyInfo.xcprivacy": "2d1a440bccd68da99e1333b9df7074f5",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Resources/Info.plist": "30596f87165b15cd56eefebf9cdcf78c",
"assets/1.0.2+2-macos/Frameworks/FlutterMacOS.framework/Resources/icudtl.dat": "692337664e861ad322138061132dddc6",
"assets/1.0.2+2-macos/Frameworks/libswiftMetal.dylib": "5729470ab77355ded05a35fd7e63ee23",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/device_info_plus": "a7672d5b62dcb1176faeaa3180ee61b8",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/Current/_CodeSignature/CodeResources": "35923b6e803997cc75d777c49f725c0a",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/Current/device_info_plus": "a7672d5b62dcb1176faeaa3180ee61b8",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/Current/Resources/Info.plist": "47558633c9edd49502dab7f596c93f52",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/Current/Resources/device_info_plus_privacy.bundle/Contents/Info.plist": "f0112932315b0b9e413622384c3fd42b",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/Current/Resources/device_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/A/_CodeSignature/CodeResources": "35923b6e803997cc75d777c49f725c0a",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/A/device_info_plus": "a7672d5b62dcb1176faeaa3180ee61b8",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/A/Resources/Info.plist": "47558633c9edd49502dab7f596c93f52",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/A/Resources/device_info_plus_privacy.bundle/Contents/Info.plist": "f0112932315b0b9e413622384c3fd42b",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Versions/A/Resources/device_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Resources/Info.plist": "47558633c9edd49502dab7f596c93f52",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Resources/device_info_plus_privacy.bundle/Contents/Info.plist": "f0112932315b0b9e413622384c3fd42b",
"assets/1.0.2+2-macos/Frameworks/device_info_plus.framework/Resources/device_info_plus_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "47eba1dd4c5d6a9e1851212f197eed24",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/shared_preferences_foundation": "80d16a88d1f46f3d4b517da144bb01d0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/Current/_CodeSignature/CodeResources": "c878c403be12d4925a3501649ac3a322",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/Current/shared_preferences_foundation": "80d16a88d1f46f3d4b517da144bb01d0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/Current/Resources/Info.plist": "a3dd52543014b89f69c81125be7bfcc0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/Current/Resources/shared_preferences_foundation_privacy.bundle/Contents/Info.plist": "df06b5c25292da51605ccc1ae4f09a74",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/Current/Resources/shared_preferences_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b0b3409970ecb533d7cd6d945bc93abf",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/A/_CodeSignature/CodeResources": "c878c403be12d4925a3501649ac3a322",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/A/shared_preferences_foundation": "80d16a88d1f46f3d4b517da144bb01d0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/A/Resources/Info.plist": "a3dd52543014b89f69c81125be7bfcc0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/A/Resources/shared_preferences_foundation_privacy.bundle/Contents/Info.plist": "df06b5c25292da51605ccc1ae4f09a74",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Versions/A/Resources/shared_preferences_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b0b3409970ecb533d7cd6d945bc93abf",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Resources/Info.plist": "a3dd52543014b89f69c81125be7bfcc0",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Resources/shared_preferences_foundation_privacy.bundle/Contents/Info.plist": "df06b5c25292da51605ccc1ae4f09a74",
"assets/1.0.2+2-macos/Frameworks/shared_preferences_foundation.framework/Resources/shared_preferences_foundation_privacy.bundle/Contents/Resources/PrivacyInfo.xcprivacy": "b0b3409970ecb533d7cd6d945bc93abf",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreMedia.dylib": "3c4e740c663a2f1c67c1c3c362261007",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/screen_retriever_macos": "44f0f7b9ded86e82462b45923de1937c",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/Current/_CodeSignature/CodeResources": "5ba3b2b641399a0e38c21c4eaa5888cf",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/Current/screen_retriever_macos": "44f0f7b9ded86e82462b45923de1937c",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/Current/Resources/Info.plist": "776d836faac62bd4d4fe4a0f63fed638",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/A/_CodeSignature/CodeResources": "5ba3b2b641399a0e38c21c4eaa5888cf",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/A/screen_retriever_macos": "44f0f7b9ded86e82462b45923de1937c",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Versions/A/Resources/Info.plist": "776d836faac62bd4d4fe4a0f63fed638",
"assets/1.0.2+2-macos/Frameworks/screen_retriever_macos.framework/Resources/Info.plist": "776d836faac62bd4d4fe4a0f63fed638",
"assets/1.0.2+2-macos/Frameworks/libswiftDarwin.dylib": "6d9749af384b451ee4cdd1f99e96f044",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreAudio.dylib": "0a7502e4e3b954026a80a0f5f92de08f",
"assets/1.0.2+2-macos/Frameworks/libswiftsimd.dylib": "d8c9bea779bc91b9bedda08b746375da",
"assets/1.0.2+2-macos/Frameworks/libswiftFoundation.dylib": "0dd1628e23292a3ff3f3ba417c996d47",
"assets/1.0.2+2-macos/Frameworks/libswiftQuartzCore.dylib": "d5572b3d3420032c5caef7e46ef42aa7",
"assets/1.0.2+2-macos/Frameworks/libswiftCoreFoundation.dylib": "f84f9bed4ec4b7499806b02fdb947bc7",
"assets/1.0.2+2-macos/Resources/Base.lproj/MainMenu.nib": "7eb5267b658bde5d13ff4317fcefb941",
"assets/1.0.2+2-macos/Resources/short-icon.icns": "d32ed6e7ee03ed9cf9a873fa2bcfd1f6",
"assets/1.0.2+2-macos/Resources/Assets.car": "a634a120f8db1ef482395f47940e4bcd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "972353c5a613582937e0580993cb76a8",
"assets/assets/icons/pocket.png": "a6e86d8fc9f9bfbda8828428285af603",
"assets/mobile-archive.xml": "b02c27e80ba4ce1f05d1d39f54ea9cf6",
"assets/desktop-archive.json": "518adbc05289735c85e1e543e92e0cb8",
"assets/fonts/MaterialIcons-Regular.otf": "bcc77662bddd2807df9bd67d33f68071",
"assets/NOTICES": "9e9ea850325ab3c9b8fa2fa7e6def22d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "545c5ed1b0cf288fdba4225cf4a6b2ae",
"assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "9aac8d75a7a3634570d9a073f63296e5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "58a283551a6bc9a562613b1ee554c741",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c129f3e4ff351e54318949e527e26392",
"assets/FontManifest.json": "af8368e4e014b2cc4df6358e799308ed",
"assets/AssetManifest.bin": "f53ad6b2b77c3bc9706a3b49b5182aa2",
"assets/AssetManifest.json": "c83214d570b8daa57ec68a55d98e4442",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"favicon.png": "de7eb6f24ea9125d84f1273dd76a364e",
"flutter_bootstrap.js": "aaa7786dc3774935df710b194ecf9b5c",
"version.json": "97e873f72042c1ec4db85813b2cfbbe8",
"main.dart.js": "a3b49a92a4f08fb2c7b59aa5b67d2f73"};
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
