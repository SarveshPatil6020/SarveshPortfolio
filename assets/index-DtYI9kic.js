import{_ as n}from"./index-Cmx5-wos.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Dv_ngqag.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-YzeiGcVa.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Dv_ngqag.js","assets/PolygonDrawerBase-B2YO4CRe.js","assets/index-Cmx5-wos.js","assets/index-Dg8C-jgp.css","assets/TriangleDrawer-YzeiGcVa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
