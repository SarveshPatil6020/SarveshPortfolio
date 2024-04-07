import{_ as n}from"./index-BOEO-_9O.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Cn2I9MY3.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Cq8-8wgv.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Cn2I9MY3.js","assets/PolygonDrawerBase-CXF79uQS.js","assets/index-BOEO-_9O.js","assets/index-CNi7Anye.css","assets/TriangleDrawer-Cq8-8wgv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
