import{_ as o}from"./index-BTDzeJ9M.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-C9D73pYb.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-C9D73pYb.js","assets/index-BTDzeJ9M.js","assets/index-3YMfrPi_.css","assets/ValueWithRandom-DvZA_yv0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
