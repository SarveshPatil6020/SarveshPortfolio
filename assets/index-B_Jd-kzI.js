import{_ as i}from"./index-CZ10m4sK.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-vzXfssmJ.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-vzXfssmJ.js","assets/ValueWithRandom-BmiNfBAc.js","assets/index-CZ10m4sK.js","assets/index-3YMfrPi_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
