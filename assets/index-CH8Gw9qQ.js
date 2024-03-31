import{_ as o}from"./index-Cmx5-wos.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BaPUcEg6.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-BaPUcEg6.js","assets/index-Cmx5-wos.js","assets/index-Dg8C-jgp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
