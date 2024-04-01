import{_ as o}from"./index-tQPfgRZ0.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-8ZtImae3.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-8ZtImae3.js","assets/index-tQPfgRZ0.js","assets/index-Dg8C-jgp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
