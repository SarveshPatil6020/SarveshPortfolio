import{_ as i}from"./index-Cmx5-wos.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DU1FDXrx.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DU1FDXrx.js","assets/ValueWithRandom-CLr9XSKv.js","assets/index-Cmx5-wos.js","assets/index-Dg8C-jgp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
