import{_ as i}from"./index-BeDOkwZH.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Ur3X5VLg.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Ur3X5VLg.js","assets/ValueWithRandom-7Z3Si3GF.js","assets/index-BeDOkwZH.js","assets/index-BdnWFX1f.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
