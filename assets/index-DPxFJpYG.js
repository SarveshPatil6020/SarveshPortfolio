import{_ as e}from"./index-BTDzeJ9M.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CJML1nal.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-CJML1nal.js","assets/index-BTDzeJ9M.js","assets/index-3YMfrPi_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
