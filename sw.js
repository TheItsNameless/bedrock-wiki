if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.md.0696dccf.js",revision:"164866a3def1fe08d9398b81058c1f8d"},{url:"assets/404.md.0696dccf.lean.js",revision:"199e3abcdbb8461e8a1bfcd3941fc4a3"},{url:"assets/AlgoliaSearchBox.3f10dc47.js",revision:"495d9ada84993be84aa0923e4af90c94"},{url:"assets/animation-controllers_animation-controllers.md.651bb8ae.js",revision:"ebb5be7468fee23e07eb80fb25d5b27c"},{url:"assets/animation-controllers_animation-controllers.md.651bb8ae.lean.js",revision:"ebb5be7468fee23e07eb80fb25d5b27c"},{url:"assets/animation-controllers_beginners-guide.md.0687b4ba.js",revision:"3ebd0d0bc692c05ec87e9e99417f2785"},{url:"assets/animation-controllers_beginners-guide.md.0687b4ba.lean.js",revision:"3ebd0d0bc692c05ec87e9e99417f2785"},{url:"assets/animation-controllers_death-effects.md.64a218bd.js",revision:"80fdb7157d74c6f8d0a31452c20cfe28"},{url:"assets/animation-controllers_death-effects.md.64a218bd.lean.js",revision:"966eaa4a8c01ddd8beac21edb3ddfbd9"},{url:"assets/animation-controllers_entity-commands.md.d62b44c1.js",revision:"b7cb5152958a850875c80228c53b29e2"},{url:"assets/animation-controllers_entity-commands.md.d62b44c1.lean.js",revision:"d1744808a89fb4883308881732c70116"},{url:"assets/animation-controllers_index.md.7911da59.js",revision:"844b7181586dbe7d210c90a62f15342d"},{url:"assets/animation-controllers_index.md.7911da59.lean.js",revision:"844b7181586dbe7d210c90a62f15342d"},{url:"assets/animation-controllers_respawn-commands.md.84a872d8.js",revision:"c99fcff839651c46fe7bff1d0f1baf5b"},{url:"assets/animation-controllers_respawn-commands.md.84a872d8.lean.js",revision:"717482e5d193be89e746c6a785b4adff"},{url:"assets/app.3233b8dc.js",revision:"a6f76da4e08aea154ab988657b671082"},{url:"assets/behavior_pack_applied.f329cc9a.js",revision:"a1ba2e5fc8ce09892852e3e7151cb27d"},{url:"assets/blocks_beginners-guide.md.a6c9ceec.js",revision:"9949ddbe63808aae668c9b88ea0c4fd2"},{url:"assets/blocks_beginners-guide.md.a6c9ceec.lean.js",revision:"9949ddbe63808aae668c9b88ea0c4fd2"},{url:"assets/blocks_block-materials.md.3e4a10fe.js",revision:"f99a2180f5529d2fd7a62d46d4097789"},{url:"assets/blocks_block-materials.md.3e4a10fe.lean.js",revision:"8ff325ecf5a6e1f860d068985c9df421"},{url:"assets/blocks_block-shapes.md.dd7c0037.js",revision:"a9e789e3145be5d4a930bd3f3cf06eb1"},{url:"assets/blocks_block-shapes.md.dd7c0037.lean.js",revision:"b79958c28f7cbcedee99628ddd99f450"},{url:"assets/blocks_block-tags.md.0e582a3d.js",revision:"2390098d375e4a04fcf9eabeebd93f5e"},{url:"assets/blocks_block-tags.md.0e582a3d.lean.js",revision:"faa947866b07f83ad827b7ced8d01a95"},{url:"assets/blocks_block-texture-variation.md.81757fad.js",revision:"2504138134603daee9ad856da4b7f403"},{url:"assets/blocks_block-texture-variation.md.81757fad.lean.js",revision:"2a6b9cbed52c82fdff3fd45b313a4824"},{url:"assets/blocks_documentation.md.f111b201.js",revision:"70b35803e0974396fad362fae4d297e6"},{url:"assets/blocks_documentation.md.f111b201.lean.js",revision:"284c0334ca8f168389a61faf0a07410d"},{url:"assets/blocks_fake-blocks.md.fc328f7d.js",revision:"18f9fe00bc4be5a72e7d89a7598ab156"},{url:"assets/blocks_fake-blocks.md.fc328f7d.lean.js",revision:"567ecc0acadd304c128b590a346f545c"},{url:"assets/blocks_index.md.62491be7.js",revision:"c2cba15a3e81aa9705c342ec4377291a"},{url:"assets/blocks_index.md.62491be7.lean.js",revision:"c2cba15a3e81aa9705c342ec4377291a"},{url:"assets/commands_beginner-commands.md.6e2a8e9f.js",revision:"bf9c3b45e3351dac12a92949f079189e"},{url:"assets/commands_beginner-commands.md.6e2a8e9f.lean.js",revision:"9f38e8df11b2c6a2ed5911ff5a400644"},{url:"assets/commands_index.md.269531ea.js",revision:"72a1b60beb575c244b645373a59739bb"},{url:"assets/commands_index.md.269531ea.lean.js",revision:"72a1b60beb575c244b645373a59739bb"},{url:"assets/commands_mcfunction.md.020e8188.js",revision:"9be3a7319c5011763fc12d98924d31c7"},{url:"assets/commands_mcfunction.md.020e8188.lean.js",revision:"0a9010718a1e6f2ef845765f0f1e214c"},{url:"assets/commands_nbt-commands.md.58b25d63.js",revision:"27b0be96a6fe8b742d32b9c5f9f87efc"},{url:"assets/commands_nbt-commands.md.58b25d63.lean.js",revision:"42908db6a5f7dc30f1940745ffba469c"},{url:"assets/concepts_bedrock-modeling.md.509ba656.js",revision:"6315aef75896c370145fc50ac665b1be"},{url:"assets/concepts_bedrock-modeling.md.509ba656.lean.js",revision:"bb5d914fb83c0a623d6871d57a74db4e"},{url:"assets/concepts_entity-properties.md.65cb750c.js",revision:"6fbbc07a993e4eb4ca300f228c875863"},{url:"assets/concepts_entity-properties.md.65cb750c.lean.js",revision:"8868076b163a3c419b189b0f2a8e492d"},{url:"assets/concepts_format-version.md.edc15f1a.js",revision:"b7903c0c938ef89475e43fd39aae75c0"},{url:"assets/concepts_format-version.md.edc15f1a.lean.js",revision:"7c83d8069b34d759c3fe8a33819ee09b"},{url:"assets/concepts_index.md.dc557b8c.js",revision:"3bd0dd370cc7bbf5d48fc464d20a4c39"},{url:"assets/concepts_index.md.dc557b8c.lean.js",revision:"3bd0dd370cc7bbf5d48fc464d20a4c39"},{url:"assets/concepts_json-ui.md.96c1991d.js",revision:"035e7b15f19d76643e1feed10564c248"},{url:"assets/concepts_json-ui.md.96c1991d.lean.js",revision:"ad2237e24c2d394deacffa8d8b6ce703"},{url:"assets/concepts_lang.md.5806c1ee.js",revision:"f25d9572ec6da0f9c826fa1119983765"},{url:"assets/concepts_lang.md.5806c1ee.lean.js",revision:"3d5273c44ad50aad4bb29802bdb614f4"},{url:"assets/concepts_materials.md.fa73e4b1.js",revision:"4974edc94e5131c6b7c635c908a331b0"},{url:"assets/concepts_materials.md.fa73e4b1.lean.js",revision:"c7697e684e1a95074a3f5f9df0e952d8"},{url:"assets/concepts_math-based-animations.md.67609fc5.js",revision:"7c7f78aa6cd5127c9da7eccebb7be958"},{url:"assets/concepts_math-based-animations.md.67609fc5.lean.js",revision:"9cb2f227bb3dfb0d30d233ec0a739ead"},{url:"assets/concepts_mcstructure.md.65cdfbb8.js",revision:"54fe92611369fb2f2d59f169b6dee8e7"},{url:"assets/concepts_mcstructure.md.65cdfbb8.lean.js",revision:"8fc4de949de57245694e85692b65d1c3"},{url:"assets/concepts_namespaces.md.0153bac3.js",revision:"d25f65b7df37edaadfd2964899cbcd22"},{url:"assets/concepts_namespaces.md.0153bac3.lean.js",revision:"71a028bf04e1efe9cf5b0b249aaca45c"},{url:"assets/concepts_render-controller.md.a80c131d.js",revision:"38f0984c9476b9ddd6ffe4830a15442e"},{url:"assets/concepts_render-controller.md.a80c131d.lean.js",revision:"3921ff78529a606c1df41f010f7f3517"},{url:"assets/concepts_shaders.md.fbc4df6e.js",revision:"de1f04da295bb6d433e7628225bc7b41"},{url:"assets/concepts_shaders.md.fbc4df6e.lean.js",revision:"de1f04da295bb6d433e7628225bc7b41"},{url:"assets/concepts_sounds.md.05bfa5eb.js",revision:"b438f4d9e8830b4fdc738b07ba6b2799"},{url:"assets/concepts_sounds.md.05bfa5eb.lean.js",revision:"37dc4416477b6509581a8245e5c8b111"},{url:"assets/concepts_textures-list.md.dc0d1361.js",revision:"3e7796fe090257f35263b0c1288b3478"},{url:"assets/concepts_textures-list.md.dc0d1361.lean.js",revision:"f058ca3d2d7e8270b100f0fc54e6a2b6"},{url:"assets/contribute.md.d3dad512.js",revision:"52735c3dd92422cb458a76e44b97dbe7"},{url:"assets/contribute.md.d3dad512.lean.js",revision:"2ebd78c0878a9c18eb7b4c4e14c97ba1"},{url:"assets/create_entity_animation_4.4fc3d031.js",revision:"fd1b2a78670ab2b86267b6143ac801fb"},{url:"assets/discord.md.b07754b6.js",revision:"98b05abbfb2aa829d5fc2c60e1193cd3"},{url:"assets/discord.md.b07754b6.lean.js",revision:"98b05abbfb2aa829d5fc2c60e1193cd3"},{url:"assets/documentation_color-codes.md.b4e4c9e3.js",revision:"f31d31cdc2cee3cc656c26e682dd2284"},{url:"assets/documentation_color-codes.md.b4e4c9e3.lean.js",revision:"8ad14cd58fbfda1994e3f1ae05ea7ecc"},{url:"assets/documentation_dummy-components.md.bdf10811.js",revision:"a76bae7a8c8e191f92fff327868a8870"},{url:"assets/documentation_dummy-components.md.bdf10811.lean.js",revision:"69600251ced3e03b40fe2e0fc327f4d4"},{url:"assets/documentation_emojis.md.5b573421.js",revision:"fbeffb8961b3b4c1e626cc96f921718e"},{url:"assets/documentation_emojis.md.5b573421.lean.js",revision:"fbeffb8961b3b4c1e626cc96f921718e"},{url:"assets/documentation_fog-ids.md.2925dde4.js",revision:"b64241f9749053321a34dc091943216e"},{url:"assets/documentation_fog-ids.md.2925dde4.lean.js",revision:"2d5ff02114fad54b8617ac71cd5b2a43"},{url:"assets/documentation_index.md.39546f95.js",revision:"d0e251fda905aa64bf905f7e3b15d8dc"},{url:"assets/documentation_index.md.39546f95.lean.js",revision:"d0e251fda905aa64bf905f7e3b15d8dc"},{url:"assets/documentation_json-ui.md.d552b215.js",revision:"57cd65dacc9d8079fd27bcb013822185"},{url:"assets/documentation_json-ui.md.d552b215.lean.js",revision:"6826eaac7f478462d59608db0ea7ea6b"},{url:"assets/documentation_materials.md.efa6d1d0.js",revision:"3f444bc1d13c9f2137de5604b8a0da10"},{url:"assets/documentation_materials.md.efa6d1d0.lean.js",revision:"cf15ac870c0a702b97c750742da8d2ae"},{url:"assets/documentation_particles.md.de79615f.js",revision:"82f3976acb7ba5331c9e0d445a3edecf"},{url:"assets/documentation_particles.md.de79615f.lean.js",revision:"1763adefc337ab7d76efd8a491a02230"},{url:"assets/documentation_projectiles.md.6ce7448e.js",revision:"06de439d75b1457e689499b1a3fcaf16"},{url:"assets/documentation_projectiles.md.6ce7448e.lean.js",revision:"8f0ef1db215813cb7459edb99b04217b"},{url:"assets/documentation_queries.md.6a748c98.js",revision:"c884f2d99fd645d067f2bb32307df628"},{url:"assets/documentation_queries.md.6a748c98.lean.js",revision:"8de968b4a0e3fa656b545d98157786d3"},{url:"assets/documentation_runtime-identifier.md.dae7c37a.js",revision:"56e66913ffdcacc7d3b2014559c43941"},{url:"assets/documentation_runtime-identifier.md.dae7c37a.lean.js",revision:"ff566f2de97a5faf4191bd7c815791e1"},{url:"assets/documentation_sound-definitions.md.7be26337.js",revision:"9482307eea35ec539fce62eba60a41b6"},{url:"assets/documentation_sound-definitions.md.7be26337.lean.js",revision:"515ac5c2b17b584de7b7cbe99367f431"},{url:"assets/documentation_subpacks.md.3b6a63db.js",revision:"0d25cfdf20471e7854b5daf3d126168e"},{url:"assets/documentation_subpacks.md.3b6a63db.lean.js",revision:"48c33a5e348dda267118f48ae0e7c53f"},{url:"assets/documentation_tellraw.md.94f4ac20.js",revision:"9ff6be939f7e5400713ac3f62222cf47"},{url:"assets/documentation_tellraw.md.94f4ac20.lean.js",revision:"9ff6be939f7e5400713ac3f62222cf47"},{url:"assets/entities_boat-entities.md.24ab2bc4.js",revision:"d8e8070ab516fafac85760068765ee2d"},{url:"assets/entities_boat-entities.md.24ab2bc4.lean.js",revision:"449f6a53dc2b971e0f19814e9700fcb8"},{url:"assets/entities_cancelling-death-animations.md.b2aa9a9e.js",revision:"aef139aebdc3de8b4e513751b9ce3b91"},{url:"assets/entities_cancelling-death-animations.md.b2aa9a9e.lean.js",revision:"c2c493ad7a78fa0261018ad4eb9bc5a8"},{url:"assets/entities_components-events-groups.md.b5b7a1c1.js",revision:"851c2fc59d5b572b2c4c9f5cb921bc1e"},{url:"assets/entities_components-events-groups.md.b5b7a1c1.lean.js",revision:"a8bc5efabf4b19e97a50cde10accdb83"},{url:"assets/entities_dummy-entities.md.bd4fee31.js",revision:"a1c99fb0c9312f39a6f8fa9cb28bfcf5"},{url:"assets/entities_dummy-entities.md.bd4fee31.lean.js",revision:"5aaa294736ab0c71d4a73256a33a6112"},{url:"assets/entities_entity-events.md.b88cc7ee.js",revision:"977ecc9539750e8bd5a2170f21bcae65"},{url:"assets/entities_entity-events.md.b88cc7ee.lean.js",revision:"31d61cb6f7c5878ce231ee6796536a72"},{url:"assets/entities_entity-holds-item.md.3a9692bb.js",revision:"1f596ea0f286dd159274d4f3b7392da7"},{url:"assets/entities_entity-holds-item.md.3a9692bb.lean.js",revision:"1f596ea0f286dd159274d4f3b7392da7"},{url:"assets/entities_entity-movement.md.7b614607.js",revision:"8284d245a3e348be272fc13076e75876"},{url:"assets/entities_entity-movement.md.7b614607.lean.js",revision:"dd214ed7f848410e02efd105e61fa342"},{url:"assets/entities_flying-entities.md.7cb72be8.js",revision:"983320d9fffc711449bbe2a40be33c19"},{url:"assets/entities_flying-entities.md.7cb72be8.lean.js",revision:"c1688f7574bc3d2e0fa90582df095f9b"},{url:"assets/entities_index.md.657bf2a9.js",revision:"e74daa7c44cd02668c61a342e9e464d7"},{url:"assets/entities_index.md.657bf2a9.lean.js",revision:"e74daa7c44cd02668c61a342e9e464d7"},{url:"assets/entities_invulnerable-entities.md.d98f0f18.js",revision:"75e1bc1abbda0d473fd97160eef2b02b"},{url:"assets/entities_invulnerable-entities.md.d98f0f18.lean.js",revision:"62084b351f125e337526690c2125aa2c"},{url:"assets/entities_pathfinding-entities.md.0d520acd.js",revision:"cb408af9c22c597ac046d1ee580124f7"},{url:"assets/entities_pathfinding-entities.md.0d520acd.lean.js",revision:"635b8b6d510e335f060cb1cc25138367"},{url:"assets/entities_render-controller.md.86a59dc5.js",revision:"5b644718ad856e031c1094f8dd64c541"},{url:"assets/entities_render-controller.md.86a59dc5.lean.js",revision:"e11a72710f4a2f97a03c10465d7cf998"},{url:"assets/entities_solid-entities.md.3803c81f.js",revision:"b5a0f4da6ab6094c628dc9ee326bf2d7"},{url:"assets/entities_solid-entities.md.3803c81f.lean.js",revision:"39a585bcac6e431bfe2d3a1fc63763b9"},{url:"assets/entities_timers.md.d0634637.js",revision:"a3a6d0338ec6977bc2d4921575f7e589"},{url:"assets/entities_timers.md.d0634637.lean.js",revision:"9103349570e3fa81426b1ace35ca479c"},{url:"assets/entities_troubleshooting.md.42de12e8.js",revision:"237e827a93dcb3b5cfd3598094988bd6"},{url:"assets/entities_troubleshooting.md.42de12e8.lean.js",revision:"57ce2bebe8a9424ae56abcc36962ca26"},{url:"assets/entities_vanilla-usage-components.md.45dd0cfc.lean.js",revision:"3605bb505d1cc82b82365cda8fa9a9bf"},{url:"assets/entities_vanilla-usage-spawn-rules.md.b41e0ad5.js",revision:"13b341a18fd6fc821945158c774d70a5"},{url:"assets/entities_vanilla-usage-spawn-rules.md.b41e0ad5.lean.js",revision:"fa3c381fe239ef4ef1117f493f01b7ba"},{url:"assets/guide_appendix.md.fdfcf07e.js",revision:"053175911690eacd3a588b4958cc500c"},{url:"assets/guide_appendix.md.fdfcf07e.lean.js",revision:"7b72a52e319af798df0fda77052050a3"},{url:"assets/guide_creating-entity-visuals.md.462946f1.js",revision:"0e88ae98b416a33bcf32ae7a7c788a5f"},{url:"assets/guide_creating-entity-visuals.md.462946f1.lean.js",revision:"0e88ae98b416a33bcf32ae7a7c788a5f"},{url:"assets/guide_custom-entity-full.md.95d6b122.js",revision:"2764efd767d01c400b821931755d4cae"},{url:"assets/guide_custom-entity-full.md.95d6b122.lean.js",revision:"2764efd767d01c400b821931755d4cae"},{url:"assets/guide_custom-particles.md.b9887b58.js",revision:"fdbc1ce7b5df063afb2ba474dff04c80"},{url:"assets/guide_custom-particles.md.b9887b58.lean.js",revision:"fdbc1ce7b5df063afb2ba474dff04c80"},{url:"assets/guide_custom-skin-packs.md.2a3a131f.js",revision:"a86751b5a788105240da2ad37eb6f84f"},{url:"assets/guide_custom-skin-packs.md.2a3a131f.lean.js",revision:"3f1aa4099b380a551a3de4bd5f09996a"},{url:"assets/guide_custom-trades.md.75042e20.js",revision:"21da778ed6c70b0ac6ba26706f4a5c8a"},{url:"assets/guide_custom-trades.md.75042e20.lean.js",revision:"21da778ed6c70b0ac6ba26706f4a5c8a"},{url:"assets/guide_download-packs.md.3ac2aa36.js",revision:"2a32fdac7162d807afe60cd7fd2bb790"},{url:"assets/guide_download-packs.md.3ac2aa36.lean.js",revision:"ae55144a493164a8d3a3d9acdf800b33"},{url:"assets/guide_index.md.d173b4c4.js",revision:"8f152e68c682b6500f5f2700fd1835fc"},{url:"assets/guide_index.md.d173b4c4.lean.js",revision:"9fcabff0ff0475ea1a31ccadf603d13a"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.f024c60d.js",revision:"f0337938ebfcbf758e88af79a772bf42"},{url:"assets/guide_loot_tables-recipes-spawn_rules.md.f024c60d.lean.js",revision:"45c3111d6e93d01d3589cc03648e97de"},{url:"assets/guide_project-setup.md.e3146de6.js",revision:"add2d32c6f41aad0dc05ec5ca9b964f8"},{url:"assets/guide_project-setup.md.e3146de6.lean.js",revision:"add2d32c6f41aad0dc05ec5ca9b964f8"},{url:"assets/guide_render-controllers.md.a6e7b71f.js",revision:"9bbb3f6dcf8de2df7b5d24cc5c95088c"},{url:"assets/guide_render-controllers.md.a6e7b71f.lean.js",revision:"9bbb3f6dcf8de2df7b5d24cc5c95088c"},{url:"assets/guide_software-preparation.md.1565fb4b.js",revision:"27ba83589ba07aa62496111cfba14d57"},{url:"assets/guide_software-preparation.md.1565fb4b.lean.js",revision:"27ba83589ba07aa62496111cfba14d57"},{url:"assets/guide_understanding-json.md.20eb29d8.js",revision:"d6aa172b619a97a5fafcd6de42cfb559"},{url:"assets/guide_understanding-json.md.20eb29d8.lean.js",revision:"e15d8a479727a841f293be12a69e23a8"},{url:"assets/index.md.3494a5b8.js",revision:"0d710eb7ffd9406bf79bcbc072babf17"},{url:"assets/index.md.3494a5b8.lean.js",revision:"0d710eb7ffd9406bf79bcbc072babf17"},{url:"assets/items_3d-items.md.932d1b4b.js",revision:"f9494db88b27b8f4a5c66fc4fd450819"},{url:"assets/items_3d-items.md.932d1b4b.lean.js",revision:"588aafe64311a0bb0f3a68f0825446cf"},{url:"assets/items_documentation.md.23f1656d.js",revision:"8aabbaa60eef288c02956403c9fb64dd"},{url:"assets/items_documentation.md.23f1656d.lean.js",revision:"8775d20a3f5103c2612aaf37e5df95bf"},{url:"assets/items_guide.md.757a7d65.js",revision:"6a27796e6eaf3563dfb6617d184f124f"},{url:"assets/items_guide.md.757a7d65.lean.js",revision:"cc6d19782368d37db64d70ad75fd0379"},{url:"assets/items_index.md.592fd732.js",revision:"3f96b44f1f61721872553b4b6b4ba26e"},{url:"assets/items_index.md.592fd732.lean.js",revision:"3f96b44f1f61721872553b4b6b4ba26e"},{url:"assets/items_item-categories.md.8c00d1b1.js",revision:"793ce460add4353b7d220e570e79342c"},{url:"assets/items_item-categories.md.8c00d1b1.lean.js",revision:"8fc4d32c0ec25e3847a9c042c50eb507"},{url:"assets/items_spawning-items.md.5523c2ec.js",revision:"bc7b58c9f6245305760dc668ade34593"},{url:"assets/items_spawning-items.md.5523c2ec.lean.js",revision:"bbfb12ad458fbb727c00a710e5667318"},{url:"assets/items_vanilla-usage-items-exp.md.2cc47ca2.js",revision:"61b29385a6bffe27faa966b6c1caa996"},{url:"assets/items_vanilla-usage-items-exp.md.2cc47ca2.lean.js",revision:"2b46ca55bd5224252aab4b512b14cf6e"},{url:"assets/items_vanilla-usage-items.md.34fdbcee.js",revision:"32eb7cf052f1c2ac2cce1b4461db823d"},{url:"assets/items_vanilla-usage-items.md.34fdbcee.lean.js",revision:"bbcf3207f34a7af97dad36bfe5ad4662"},{url:"assets/meta_addon-performance.md.6606e203.js",revision:"ea8f66969b107fdf2eff93ed03f2ce96"},{url:"assets/meta_addon-performance.md.6606e203.lean.js",revision:"0058b953a1d045ff7d547ec3e6063769"},{url:"assets/meta_addon-programming.md.bc75683a.js",revision:"124a874eae515e3340f119278ac09c59"},{url:"assets/meta_addon-programming.md.bc75683a.lean.js",revision:"25d52e4921934e8ec7ab8d507c409bb9"},{url:"assets/meta_faq.md.dcc9c8e0.js",revision:"f0286d69b4f053f3cbe54db25d6b7e31"},{url:"assets/meta_faq.md.dcc9c8e0.lean.js",revision:"4c2dcfef46821b479b83ef1825269549"},{url:"assets/meta_index.md.c8f8b8ec.js",revision:"c7c0d1493ffbfbbcff8016b7b6312c5f"},{url:"assets/meta_index.md.c8f8b8ec.lean.js",revision:"c7c0d1493ffbfbbcff8016b7b6312c5f"},{url:"assets/meta_jq.md.a4f6ebaa.js",revision:"0f5bfc6970cce3d2bb68464dfbe54da6"},{url:"assets/meta_jq.md.a4f6ebaa.lean.js",revision:"d3450881f94d77c8785b32baf0fa0990"},{url:"assets/meta_style-guide.md.81a1f1e3.js",revision:"ef680f4dc52a35b29a694c08f9fa03b0"},{url:"assets/meta_style-guide.md.81a1f1e3.lean.js",revision:"e0a34b8b6a8450d2775e5c6f873b5481"},{url:"assets/meta_troubleshooting.md.b5228220.js",revision:"adf4bccb78cc47ed26a900bcc3e3ecc1"},{url:"assets/meta_troubleshooting.md.b5228220.lean.js",revision:"ce718eaba7f99fae8aebea0a3baa74f4"},{url:"assets/meta_useful-links.md.9dc2284d.js",revision:"535037f051d05cd55aadb214f442b208"},{url:"assets/meta_useful-links.md.9dc2284d.lean.js",revision:"5abe6429fa3603f6160ea6182069acde"},{url:"assets/meta_using-schemas.md.8284f6db.js",revision:"78db1cda730419adbf83d3d07147ac2f"},{url:"assets/meta_using-schemas.md.8284f6db.lean.js",revision:"8001c217b2b4785acfc21fa4b521d3a1"},{url:"assets/meta_version-control.md.7d5ffa8b.js",revision:"ce038fe225a775d7a9eb9a8cc5de2b8a"},{url:"assets/meta_version-control.md.7d5ffa8b.lean.js",revision:"f76354d0df268ab2c1659ea80ce1cdd5"},{url:"assets/new-guide_blockbench.md.06620d54.js",revision:"5326aa305509f3c52db22db93341df0b"},{url:"assets/new-guide_blockbench.md.06620d54.lean.js",revision:"5326aa305509f3c52db22db93341df0b"},{url:"assets/new-guide_custom-entity.md.00635782.js",revision:"07778be7ddbcb0963ece72b491f43c9a"},{url:"assets/new-guide_custom-entity.md.00635782.lean.js",revision:"0d68872e89a174a6e7cf177a945a6b50"},{url:"assets/new-guide_custom-item.md.d0169119.js",revision:"5c908bd78977dfb06d8fbe8ac28c3630"},{url:"assets/new-guide_custom-item.md.d0169119.lean.js",revision:"07448b0aee13e852563929301c4c6524"},{url:"assets/new-guide_index.md.d37bfcdb.js",revision:"d6ce802f761e0c2b63e2fb18b621bc3c"},{url:"assets/new-guide_index.md.d37bfcdb.lean.js",revision:"d6ce802f761e0c2b63e2fb18b621bc3c"},{url:"assets/new-guide_introduction.md.d9cd2bb5.js",revision:"956378725a2897fc7918c38222ab22de"},{url:"assets/new-guide_introduction.md.d9cd2bb5.lean.js",revision:"3a595a479e1e5e8ad1fc7a13b3f343b0"},{url:"assets/new-guide_loot_spawn_recipes.md.08b0e59e.js",revision:"e3f36089092e952afc9d61a2cf566811"},{url:"assets/new-guide_loot_spawn_recipes.md.08b0e59e.lean.js",revision:"e2c2538101fed99ebe6e1fc4adc9b9ed"},{url:"assets/new-guide_project-setup.md.7e5e5396.js",revision:"b914b131a07643fdf2e133e85b1e5d52"},{url:"assets/new-guide_project-setup.md.7e5e5396.lean.js",revision:"b914b131a07643fdf2e133e85b1e5d52"},{url:"assets/scripting_beginners-guide.md.00fe5e10.js",revision:"51f0be1a1659604774d07a497eada9a7"},{url:"assets/scripting_beginners-guide.md.00fe5e10.lean.js",revision:"71470b1c984fba370918ee72f17820ce"},{url:"assets/scripting_game-tests.md.f56f66c9.js",revision:"a166769581bc1679cd982ad170265ca1"},{url:"assets/scripting_game-tests.md.f56f66c9.lean.js",revision:"264da87351c951e7ccff572ade9f3b4c"},{url:"assets/scripting_index.md.08281d01.js",revision:"ad4a644a2ddc74ea81abe0f6fc34846f"},{url:"assets/scripting_index.md.08281d01.lean.js",revision:"ad4a644a2ddc74ea81abe0f6fc34846f"},{url:"assets/scripting_saving-loading.md.0c28fd62.js",revision:"17aeed67686b1dab775e0431a4eb3a0d"},{url:"assets/scripting_saving-loading.md.0c28fd62.lean.js",revision:"3a697a19f8422cedb0a3644a317c701c"},{url:"assets/style.496bcbb2.css",revision:"774eb8ea65a0aaeda617dfca62642fac"},{url:"assets/tutorials_craftable-spawneggs.md.e8016663.js",revision:"82215b5e22582efaf81df49714bee8d3"},{url:"assets/tutorials_craftable-spawneggs.md.e8016663.lean.js",revision:"7cdfa2badd0616e5e339774e8d44f187"},{url:"assets/tutorials_custom-armor.md.21d6e5b9.js",revision:"eb2212810d4e78decc701a0a8c469170"},{url:"assets/tutorials_custom-armor.md.21d6e5b9.lean.js",revision:"eb2212810d4e78decc701a0a8c469170"},{url:"assets/tutorials_disabling-particles.md.503f6c4c.js",revision:"5a2d8f9366b5c240823414747dfd83cd"},{url:"assets/tutorials_disabling-particles.md.503f6c4c.lean.js",revision:"48cdede159f5f23a8c71913a7186f74c"},{url:"assets/tutorials_disabling-team-damage.md.6d18d174.js",revision:"8576f8c0b6ec3feab7569c1b4e540c04"},{url:"assets/tutorials_disabling-team-damage.md.6d18d174.lean.js",revision:"ac59affb36fe33c67965bba30fa6b5f3"},{url:"assets/tutorials_egg-drops.md.2b0e3e70.js",revision:"a0e6ee8b6c184d78fbee1e83d153c335"},{url:"assets/tutorials_egg-drops.md.2b0e3e70.lean.js",revision:"573b10b13078466e336144d0c9a790dc"},{url:"assets/tutorials_index.md.728d3b24.js",revision:"6bee7616e5b194ac73b763903442eb0d"},{url:"assets/tutorials_index.md.728d3b24.lean.js",revision:"6bee7616e5b194ac73b763903442eb0d"},{url:"assets/tutorials_player-geometry.md.4b0e2cf5.js",revision:"bcff09ecd7bd8e5b9322058ed07d62be"},{url:"assets/tutorials_player-geometry.md.4b0e2cf5.lean.js",revision:"cf30c8d58df9d3b9fa5eb40f23b1faee"},{url:"assets/tutorials_remove-shadows.md.f49d46d9.js",revision:"61a192010bd75cf82c63ae144b5a9741"},{url:"assets/tutorials_remove-shadows.md.f49d46d9.lean.js",revision:"c61a2061e73fecf3080d9d1dea694894"},{url:"assets/tutorials_retexturing-spawn-eggs.md.cabc6b2c.js",revision:"284992e1d65035eee4cd4c29a69ec39f"},{url:"assets/tutorials_retexturing-spawn-eggs.md.cabc6b2c.lean.js",revision:"e29ff0d5c3144624db2e7badbe4ba197"},{url:"assets/tutorials_text-localization.md.615fa386.js",revision:"91d79d12cdc6ff6da23469d1f2ad96d5"},{url:"assets/tutorials_text-localization.md.615fa386.lean.js",revision:"fd795d53d3c992161eb9130ef85616bc"},{url:"assets/world-generation_beginners-guide.md.3198dd09.js",revision:"dee08e329245445472210745fca04455"},{url:"assets/world-generation_beginners-guide.md.3198dd09.lean.js",revision:"dee08e329245445472210745fca04455"},{url:"assets/world-generation_biome-tags.md.e722af92.js",revision:"c8337c77fbbe4df4a9ed0b13db5d05c8"},{url:"assets/world-generation_biome-tags.md.e722af92.lean.js",revision:"04df34a5f54b293cd00b1661c7ab8146"},{url:"assets/world-generation_biomes.md.1a57bff0.js",revision:"38cc9088a80f34b5b8249d01db4e4917"},{url:"assets/world-generation_biomes.md.1a57bff0.lean.js",revision:"81272c69a8b1bea0376c5a9cc199733b"},{url:"assets/world-generation_feature-types.md.7b0673c7.js",revision:"96648b85dcdbe295eb0602a569eba63e"},{url:"assets/world-generation_feature-types.md.7b0673c7.lean.js",revision:"f85a76513232f768888029bfa26b4d2c"},{url:"assets/world-generation_index.md.2876dfa9.js",revision:"c877078288462496901efc51aaf9a1d6"},{url:"assets/world-generation_index.md.2876dfa9.lean.js",revision:"c877078288462496901efc51aaf9a1d6"},{url:"assets/world-generation_vanilla-usage-feature-rules.md.39060f21.js",revision:"a4b43045e3e9aaed0a8e82296ccc72e4"},{url:"assets/world-generation_vanilla-usage-feature-rules.md.39060f21.lean.js",revision:"d7d1fedc1b3c703f20d10b62a861d9dd"},{url:"assets/world-generation_vanilla-usage.md.61568bd8.js",revision:"becaa9a9c9f7e1afa42ea741222d2088"},{url:"assets/world-generation_vanilla-usage.md.61568bd8.lean.js",revision:"b63861aee03d37d794a82897194f071e"},{url:"registerSW.js",revision:"3be22912fd14291c200edaae7ff5f610"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map