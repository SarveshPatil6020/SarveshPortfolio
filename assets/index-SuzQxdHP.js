import{_ as n}from"./index-CZ10m4sK.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-LvVuy3sX.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Bs5bh-WD.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-LvVuy3sX.js","assets/PolygonDrawerBase-CB3etH2J.js","assets/index-CZ10m4sK.js","assets/index-3YMfrPi_.css","assets/TriangleDrawer-Bs5bh-WD.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
