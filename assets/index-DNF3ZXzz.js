import{_ as o}from"./index-Cmx5-wos.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-BAdAbQ2i.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-BAdAbQ2i.js","assets/index-Cmx5-wos.js","assets/index-Dg8C-jgp.css","assets/ValueWithRandom-CLr9XSKv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
