import{_ as c}from"./index-BOEO-_9O.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-CrXjZ0fb.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-CrXjZ0fb.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-BOEO-_9O.js","assets/index-CNi7Anye.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
