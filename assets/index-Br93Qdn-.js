import{_ as o}from"./index-BeDOkwZH.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-Bus10Afv.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-Bus10Afv.js","assets/index-BeDOkwZH.js","assets/index-BdnWFX1f.css","assets/ValueWithRandom-7Z3Si3GF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
