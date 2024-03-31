import{_ as i}from"./index-tQPfgRZ0.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DQwb9ofR.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DQwb9ofR.js","assets/ValueWithRandom-Dxp5nyYM.js","assets/index-tQPfgRZ0.js","assets/index-Dg8C-jgp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
