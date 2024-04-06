import{_ as n}from"./index-DKfd9tdg.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DKc3UcoJ.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-je0dL9Pu.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DKc3UcoJ.js","assets/PolygonDrawerBase-cj2UXkBF.js","assets/index-DKfd9tdg.js","assets/index-3YMfrPi_.css","assets/TriangleDrawer-je0dL9Pu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
