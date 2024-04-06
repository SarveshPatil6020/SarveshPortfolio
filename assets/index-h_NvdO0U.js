import{_ as o}from"./index-CZ10m4sK.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-PBSmfpcm.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-PBSmfpcm.js","assets/index-CZ10m4sK.js","assets/index-3YMfrPi_.css","assets/ValueWithRandom-BmiNfBAc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
