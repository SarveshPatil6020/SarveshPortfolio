import{_ as i}from"./index-BOEO-_9O.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-9gAdAK64.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-9gAdAK64.js","assets/ValueWithRandom-DdlglZ1n.js","assets/index-BOEO-_9O.js","assets/index-CNi7Anye.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
