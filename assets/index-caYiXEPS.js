import{_ as o}from"./index-BTDzeJ9M.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-_2kiCxcI.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-_2kiCxcI.js","assets/index-BTDzeJ9M.js","assets/index-3YMfrPi_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
