'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2ba3df0b8cfe6d96cff6f0357bd327b5",
"assets/assets/canvaskit/bMrnmSyK7YY-MEu6aWjPDs-ar6uWaGWuob-r0jwvS-FGJCMY.ttf": "74a68c7003890e207589ea43dc7572ca",
"assets/assets/canvaskit/bWti7ejKfBziStx7lIzKOLQZKhIJkyu9SASLji8U.ttf": "da47d76c3c5f4b9d1550459681ab031a",
"assets/assets/canvaskit/canvaskit.js": "678d9f53b0e5c5f22543631f43279fb9",
"assets/assets/canvaskit/canvaskit.wasm": "6972cd6e8f48c5f3c027416c7b2443a6",
"assets/assets/canvaskit/I_uyMoGduATTei9eI8daxVHDyfisHr71ypPqfX71-AI.ttf": "c5416a5ab9e490776f02bb368cb3bcd8",
"assets/assets/canvaskit/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/canvaskit/localfonts.css": "1baae10956edff5b0237ca133e16e060",
"assets/assets/canvaskit/NaPwcYvSBuhTirw6IaFn6UrRDaqje-lpbbRtYf-Fwu2Ov7fdhE5Vd222PPY.ttf": "1c5652ed1ac82acf6614e2e878147433",
"assets/assets/canvaskit/neIczCCpqp0s5pPusPamd81eMfjPonvqdbYxxpgufnv0TGnBZLwhuvk.ttf": "9294dff4f5be2d41fc283b2f46a65d84",
"assets/assets/canvaskit/o-0IIpQlx3QUlC5A4PNb4j5Ba_2c7A.ttf": "ac08e269b7f479624b266c0ea20013b4",
"assets/assets/canvaskit/rP2up3q65FkAtHfwd-eIS2brbDN6gxP34F9jRRCe4W3gfQ8gavVFRkzrbQ.ttf": "6a4a817dee8185f3484e849320e09202",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.1.woff2": "0d4bc7dcce06ab198c17adf02e44214e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.10.woff2": "8ae9ecb165b553659fdf14406bbfb8fb",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.100.woff2": "942a5096f933af7eb1fece00afd8de75",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.101.woff2": "b90f039e80943d2b71562f2bd72fdb13",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.102.woff2": "a59c00e04c9b601c9c35d8e8681f3315",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.103.woff2": "1a12c59b4bd0da5d2594f078e67305ab",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.104.woff2": "9af28973f2a275f279583b252f0faa6c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.105.woff2": "4c7d34df91a6f48fad0adc92175b5a50",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.106.woff2": "c416ae3797ebc5d7dc183ba9077109d7",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.107.woff2": "217232a39ce817083b9b2ce355224706",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.108.woff2": "6c469f8666ba65ed35c390abce79ce3c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.109.woff2": "732fe7f1aa387cd4bc1496192d6a3519",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.11.woff2": "f68addbcbca5082c0706e8cda1579510",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.110.woff2": "dad64580dba7f4b9d9aeabd6a6a64ca0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.111.woff2": "1dfa491ede83e52869af1e6ea03c1a98",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.112.woff2": "e17430e8025b952561befbbbd86e232a",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.113.woff2": "e1b51631af4bbd5df1c92a9fe45e2b4d",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.114.woff2": "fbce8b7897f94f2d10e7539fb101478b",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.115.woff2": "43ffd6eace791e530dfb05bb1ecb17d8",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.116.woff2": "33ea7981ed83df0988d30f5950254044",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.117.woff2": "33f14346b534356301c366aba9e0d383",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.118.woff2": "89d1655f5820a9fc94c71d16cda71610",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.119.woff2": "75aae0890f79934cdf127df082092d06",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.12.woff2": "92cde95de802b69e15f3eb420861d051",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.120.woff2": "85b9aa16734e92c4577020daf375d1ab",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.13.woff2": "b9fbbc99c5a7b10adac6bbeec8b54918",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.14.woff2": "0057e4a6dcad0cfd7cc8dae804be0c3e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.15.woff2": "096fa634133c3c65c9fedf14be9f1605",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.16.woff2": "9111c31183fd2bdb7503a9a331b3f3be",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.17.woff2": "766e970601ecf0250f2f2c9b278d2a38",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.18.woff2": "785ce059ba8a2791aa0003e3afa39c31",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.19.woff2": "c14d200ded4061dd38f91cb1edd520f5",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.2.woff2": "9c22b9b4b58eabc28c8f192dc35e538e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.20.woff2": "6cf3415cf5c7a48223f6f4a61d6f8454",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.21.woff2": "89a91ebd1ad637cf3ad54847c72333bb",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.22.woff2": "8da4d808777219199964bc21c0816550",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.23.woff2": "2e0ca67e5ec7e56de19d93e3f0229fc9",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.24.woff2": "72484e63cdd949da55e8c583bd60cf6a",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.25.woff2": "a156849828ee908aabf9e3dcaf00f9b2",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.26.woff2": "3277cb69f8b92e47d077c6047cbda083",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.27.woff2": "38aab7562812cef13df6e67a88385479",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.28.woff2": "f50ea2a4733cbd7aeb2abc362d2ffecd",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.29.woff2": "aeed0d2272d7b48b1ec2b28747ab978c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.3.woff2": "61936d498b958975626138b4c8d950fe",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.30.woff2": "d1988810f8278ec877ac3a5ae107238c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.31.woff2": "237a6c10361d35e23f6ed9ff4f9b6c2a",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.32.woff2": "7b4f446ff91559e12a32817a89bcf7a0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.33.woff2": "9ad6a943a0a0f5c6196aabcc4c9c0858",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.34.woff2": "890d14d092ba9ef98cc38eb36bee89d2",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.35.woff2": "e40b291a331d9e78b125cbd240a986b0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.36.woff2": "e63c5f3b481f49cd1b3a713935be836f",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.37.woff2": "a2efc5ddba227c61108d845fcb137b0d",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.38.woff2": "5ab41950a2e189b66ed3508977ced827",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.39.woff2": "579499d620dcc89e3adbac647cc01faf",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.4.woff2": "dcc8bbfe284a790e39ed56c5a8e5595c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.40.woff2": "5ae0a3b11fbcc26c78a0c134fa5b805f",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.41.woff2": "7bd9a138408ea0645e154d7fecdb5518",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.42.woff2": "a8a6a6f95672e7d56224a24cc482d10e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.43.woff2": "ed21c3a7a1404b9ff3a9fcef0c614468",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.44.woff2": "91a8ef5e67496cb9b439a0c3d15a5398",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.45.woff2": "bef487ee1424f474aa6a738f6fafc87e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.46.woff2": "5422ecf52d4bba571376bb2dbc3174e2",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.47.woff2": "50199ed97b85ae7e3108374e2ab3dc98",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.48.woff2": "7949af58ecc47cbc47c0c97ef6270711",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.49.woff2": "bc173d759a90137da5c58a4d2cefd96c",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.5.woff2": "f4a75b81162e094e4619574cb684395f",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.50.woff2": "679ed04b0058afe5244ae59336318692",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.51.woff2": "2914badd240b3a36ed4769eb838a3ac2",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.52.woff2": "6d5a7f487a3d0371f4b91654f87c32a0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.53.woff2": "a66560a813fe1d654482277adb5ffb89",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.54.woff2": "d6b84d4339a4f6847eada20b3cda7df3",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.55.woff2": "33aa7a2992ae936c99e9a9bc050eae0e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.56.woff2": "ce1cfb11855795c4df0d3e4cebd635ab",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.57.woff2": "b850461683849552a20d96d5b1383dc1",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.58.woff2": "9804bdf4dc6e7504a38645f023e199b1",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.59.woff2": "b51510dd110b1096236018e13f11137e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.6.woff2": "1e766511bf4cceda4ed42bd6937ed647",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.60.woff2": "de285cc9449f370521ff0d4375a85d60",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.61.woff2": "3f5e809810676cb6c356e3d7c4545c69",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.62.woff2": "07d924d18af950375244eb34c1b2a64d",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.63.woff2": "75dabdc83f2a8fcb921353032f01826b",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.64.woff2": "6b68a08b4f4f2624e1b94c7c5707759e",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.65.woff2": "5c0f485e5650231481954d47691589b5",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.66.woff2": "0e5d4d751860581d6cd8fc5cb41f1136",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.67.woff2": "7984795a3b654d2601ee47b581a82bde",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.68.woff2": "42858cb223e4f59e8c4a1705ef1dcdf3",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.69.woff2": "3e9d73262d99ae4e6aa1556f9641fc0b",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.7.woff2": "62749f533b903e18a4ade898eadc63e7",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.70.woff2": "d695e9a7f1cbd4fca64af2c6e8757b95",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.71.woff2": "e81e9869e446606b78faeb90d3d91743",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.72.woff2": "276ba15119fffe08dece678fe4fc62d0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.73.woff2": "47c0abb6e11e720e483cf76d0fc6f8c7",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.74.woff2": "79b9e14ec6e7fe95f9d7ef25b42542da",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.75.woff2": "8163b5c94b1d6538087b814a943b4dbd",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.76.woff2": "690f4d892492d887bea821b574019d49",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.77.woff2": "5be72490da04199acee5b20478ed3520",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.78.woff2": "35ff964739c43030718cdbf70e859723",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.79.woff2": "a573b301567b0a8f635938d5fc7bc1d0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.8.woff2": "7f12cfabec9bfd86b5d11e7e2f2175ee",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.80.woff2": "43a5486f8eaa6024384bd0ec139b82f0",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.81.woff2": "dbe86779900fd68a1c76eb277ac9bef8",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.82.woff2": "6be63b714ce09ca8b9c334b073612359",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.83.woff2": "b4b48410bf05b14f43f56afa03cbb607",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.84.woff2": "c0df84e268871dd439383e5c4c16776b",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.85.woff2": "80541377134bf7902dc98832baf05d1d",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.86.woff2": "4453b3d3a060fd7ac7a7ce25acf4b5c8",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.87.woff2": "0feedd2d9fd866d20f7d5264517fc695",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.88.woff2": "eede07d1adad40dc65e98fd4692ae169",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.89.woff2": "c7dfebaa8ce4e6f92c7a6b2dd30b5f49",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.9.woff2": "9a53c0e59c726d518b493a181189ff3a",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.90.woff2": "455946aedc296107c2c129ec8a9d00d1",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.91.woff2": "af1b25e00af3eadd21d8a67e6e184d12",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.92.woff2": "b9f9c1d9773b4a1895e3d115900cddac",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.93.woff2": "07949c6b5e7259fc4b3b93e8c4c822f3",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.94.woff2": "659a96afc70d7c3550e224ff5c1b1bd8",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.95.woff2": "88a05e7a96a70791193b934947f8e1fc",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.96.woff2": "69040b7bc60c0607108e3f3f69ac19fd",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.97.woff2": "f9432d8081ccbcf14172d69c4f2d7bbc",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.98.woff2": "08b9d15cd7b52bea9089078b99b26837",
"assets/assets/canvaskit/woff2/k3kXo84MPvpLmixcA63oeALhLIiP-Q-87KaAaH7rzeAODp22mF0qmF4CSjmPC6A0Rg5g1igg1w.99.woff2": "654016eb60ad92fe9f39ab76bd0ae7e2",
"assets/assets/fonts/NotoSansMonoCJKsc-Regular.otf": "ff40f5ba170e2f61d571eb3cc06bdba1",
"assets/assets/fonts/UbuntuMonoDerivativePowerline.ttf": "1f8c34ba9156b5065c8df7c26ddd1d04",
"assets/FontManifest.json": "7fd3d919d7e4e89b55f19c09e1850087",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6a1536088c0edfd1bf7e67db069eb7f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"image/loading.gif": "b75fe5806502b2c31734326078dfc0fb",
"index.html": "ba2f61301b4714eb20178fb2894ec840",
"/": "ba2f61301b4714eb20178fb2894ec840",
"main.dart.js": "038c7af0db4c814d16862152a5264007",
"manifest.json": "bedb4e45bfba9a674fc7c7eb8f5d7c8e",
"version.json": "dc0a3847e356bde84006d2df8f5ef090"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
