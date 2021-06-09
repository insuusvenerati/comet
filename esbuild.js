const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild.build({
  entryPoints: ["./server/src/index.ts"],
  bundle: true,
  platform: "node",
  outdir: "server/dist",
  plugins: [
    nodeExternalsPlugin({
      packagePath: "./server/package.json",
    }),
  ],
});
