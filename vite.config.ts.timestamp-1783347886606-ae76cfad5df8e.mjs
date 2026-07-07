// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/workspace/Toonflow-web/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/workspace/Toonflow-web/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///E:/workspace/Toonflow-web/node_modules/unplugin-auto-import/dist/vite.mjs";
import Components from "file:///E:/workspace/Toonflow-web/node_modules/unplugin-vue-components/dist/vite.mjs";
import { TDesignResolver } from "file:///E:/workspace/Toonflow-web/node_modules/@tdesign-vue-next/auto-import-resolver/dist/index.js";
import { viteSingleFile } from "file:///E:/workspace/Toonflow-web/node_modules/vite-plugin-singlefile/dist/esm/index.js";
import postcsspxtoviewport from "file:///E:/workspace/Toonflow-web/node_modules/postcss-px-to-viewport/index.js";
var __vite_injected_original_import_meta_url = "file:///E:/workspace/Toonflow-web/vite.config.ts";
var vite_config_default = defineConfig({
  base: "./",
  build: {
    assetsInlineLimit: Infinity,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      dts: "src/types/auto-imports.d.ts",
      imports: ["vue", "pinia", "vue-router"],
      resolvers: [
        TDesignResolver({
          library: "vue-next"
        }),
        TDesignResolver({
          library: "chat"
        })
      ]
    }),
    Components({
      dts: "src/types/components.d.ts",
      resolvers: [
        TDesignResolver({
          library: "vue-next"
        }),
        TDesignResolver({
          library: "chat"
        })
      ]
    }),
    viteSingleFile()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
    postcss: {
      plugins: [
        postcsspxtoviewport({
          // 要转化的单位
          unitToConvert: "px",
          // UI设计稿的大小
          viewportWidth: 1600,
          // 转换后的精度
          unitPrecision: 4,
          // 转换后的单位
          viewportUnit: "rem",
          // 字体转换后的单位
          fontViewportUnit: "rem",
          // 能转换的属性，*表示所有属性，!border表示border不转
          propList: ["*"],
          // 指定不转换为视窗单位的类名，
          selectorBlackList: ["ignore"],
          // 最小转换的值，小于等于1不转
          minPixelValue: 1,
          // 是否在媒体查询的css代码中也进行转换，默认false
          mediaQuery: true,
          // 是否转换后直接更换属性值
          replace: true,
          // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          exclude: [],
          // 包含那些文件或者特定文件
          include: [],
          // 是否处理横屏情况
          landscape: false
        })
      ]
    }
  },
  server: {
    port: 50188
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcVG9vbmZsb3ctd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3Jrc3BhY2VcXFxcVG9vbmZsb3ctd2ViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi93b3Jrc3BhY2UvVG9vbmZsb3ctd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBURGVzaWduUmVzb2x2ZXIgfSBmcm9tIFwiQHRkZXNpZ24tdnVlLW5leHQvYXV0by1pbXBvcnQtcmVzb2x2ZXJcIjtcclxuaW1wb3J0IHsgdml0ZVNpbmdsZUZpbGUgfSBmcm9tIFwidml0ZS1wbHVnaW4tc2luZ2xlZmlsZVwiO1xyXG5pbXBvcnQgcG9zdGNzc3B4dG92aWV3cG9ydCBmcm9tIFwicG9zdGNzcy1weC10by12aWV3cG9ydFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBcIi4vXCIsXHJcbiAgYnVpbGQ6IHtcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiBJbmZpbml0eSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgaW5saW5lRHluYW1pY0ltcG9ydHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgZHRzOiBcInNyYy90eXBlcy9hdXRvLWltcG9ydHMuZC50c1wiLFxyXG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJwaW5pYVwiLCBcInZ1ZS1yb3V0ZXJcIl0sXHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIFREZXNpZ25SZXNvbHZlcih7XHJcbiAgICAgICAgICBsaWJyYXJ5OiBcInZ1ZS1uZXh0XCIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVERlc2lnblJlc29sdmVyKHtcclxuICAgICAgICAgIGxpYnJhcnk6IFwiY2hhdFwiLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZHRzOiBcInNyYy90eXBlcy9jb21wb25lbnRzLmQudHNcIixcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgVERlc2lnblJlc29sdmVyKHtcclxuICAgICAgICAgIGxpYnJhcnk6IFwidnVlLW5leHRcIixcclxuICAgICAgICB9KSxcclxuICAgICAgICBURGVzaWduUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgbGlicmFyeTogXCJjaGF0XCIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICAgIHZpdGVTaW5nbGVGaWxlKCksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhcGk6IFwibW9kZXJuLWNvbXBpbGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcG9zdGNzc3B4dG92aWV3cG9ydCh7XHJcbiAgICAgICAgICAvLyBcdTg5ODFcdThGNkNcdTUzMTZcdTc2ODRcdTUzNTVcdTRGNERcclxuICAgICAgICAgIHVuaXRUb0NvbnZlcnQ6IFwicHhcIixcclxuICAgICAgICAgIC8vIFVJXHU4QkJFXHU4QkExXHU3QTNGXHU3Njg0XHU1OTI3XHU1QzBGXHJcbiAgICAgICAgICB2aWV3cG9ydFdpZHRoOiAxNjAwLFxyXG4gICAgICAgICAgLy8gXHU4RjZDXHU2MzYyXHU1NDBFXHU3Njg0XHU3Q0JFXHU1RUE2XHJcbiAgICAgICAgICB1bml0UHJlY2lzaW9uOiA0LFxyXG4gICAgICAgICAgLy8gXHU4RjZDXHU2MzYyXHU1NDBFXHU3Njg0XHU1MzU1XHU0RjREXHJcbiAgICAgICAgICB2aWV3cG9ydFVuaXQ6IFwicmVtXCIsXHJcbiAgICAgICAgICAvLyBcdTVCNTdcdTRGNTNcdThGNkNcdTYzNjJcdTU0MEVcdTc2ODRcdTUzNTVcdTRGNERcclxuICAgICAgICAgIGZvbnRWaWV3cG9ydFVuaXQ6IFwicmVtXCIsXHJcbiAgICAgICAgICAvLyBcdTgwRkRcdThGNkNcdTYzNjJcdTc2ODRcdTVDNUVcdTYwMjdcdUZGMEMqXHU4ODY4XHU3OTNBXHU2MjQwXHU2NzA5XHU1QzVFXHU2MDI3XHVGRjBDIWJvcmRlclx1ODg2OFx1NzkzQWJvcmRlclx1NEUwRFx1OEY2Q1xyXG4gICAgICAgICAgcHJvcExpc3Q6IFtcIipcIl0sXHJcbiAgICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTRFMERcdThGNkNcdTYzNjJcdTRFM0FcdTg5QzZcdTdBOTdcdTUzNTVcdTRGNERcdTc2ODRcdTdDN0JcdTU0MERcdUZGMENcclxuICAgICAgICAgIHNlbGVjdG9yQmxhY2tMaXN0OiBbXCJpZ25vcmVcIl0sXHJcbiAgICAgICAgICAvLyBcdTY3MDBcdTVDMEZcdThGNkNcdTYzNjJcdTc2ODRcdTUwM0NcdUZGMENcdTVDMEZcdTRFOEVcdTdCNDlcdTRFOEUxXHU0RTBEXHU4RjZDXHJcbiAgICAgICAgICBtaW5QaXhlbFZhbHVlOiAxLFxyXG4gICAgICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1NzI4XHU1QTkyXHU0RjUzXHU2N0U1XHU4QkUyXHU3Njg0Y3NzXHU0RUUzXHU3ODAxXHU0RTJEXHU0RTVGXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXHVGRjBDXHU5RUQ4XHU4QkE0ZmFsc2VcclxuICAgICAgICAgIG1lZGlhUXVlcnk6IHRydWUsXHJcbiAgICAgICAgICAvLyBcdTY2MkZcdTU0MjZcdThGNkNcdTYzNjJcdTU0MEVcdTc2RjRcdTYzQTVcdTY2RjRcdTYzNjJcdTVDNUVcdTYwMjdcdTUwM0NcclxuICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAvLyBcdTVGRkRcdTc1NjVcdTY3RDBcdTRFOUJcdTY1ODdcdTRFRjZcdTU5MzlcdTRFMEJcdTc2ODRcdTY1ODdcdTRFRjZcdTYyMTZcdTcyNzlcdTVCOUFcdTY1ODdcdTRFRjZcdUZGMENcdTRGOEJcdTU5ODIgJ25vZGVfbW9kdWxlcycgXHU0RTBCXHU3Njg0XHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICBleGNsdWRlOiBbXSxcclxuICAgICAgICAgIC8vIFx1NTMwNVx1NTQyQlx1OTBBM1x1NEU5Qlx1NjU4N1x1NEVGNlx1NjIxNlx1ODAwNVx1NzI3OVx1NUI5QVx1NjU4N1x1NEVGNlxyXG4gICAgICAgICAgaW5jbHVkZTogW10sXHJcbiAgICAgICAgICAvLyBcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdTZBMkFcdTVDNEZcdTYwQzVcdTUxQjVcclxuICAgICAgICAgIGxhbmRzY2FwZTogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA1MDE4OCxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUSxTQUFTLGVBQWUsV0FBVztBQUN0UyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyx5QkFBeUI7QUFQK0gsSUFBTSwyQ0FBMkM7QUFTaE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsSUFDbkIsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sc0JBQXNCO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsU0FBUyxDQUFDLE9BQU8sU0FBUyxZQUFZO0FBQUEsTUFDdEMsV0FBVztBQUFBLFFBQ1QsZ0JBQWdCO0FBQUEsVUFDZCxTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQUEsUUFDRCxnQkFBZ0I7QUFBQSxVQUNkLFNBQVM7QUFBQSxRQUNYLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxXQUFXO0FBQUEsUUFDVCxnQkFBZ0I7QUFBQSxVQUNkLFNBQVM7QUFBQSxRQUNYLENBQUM7QUFBQSxRQUNELGdCQUFnQjtBQUFBLFVBQ2QsU0FBUztBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1Asb0JBQW9CO0FBQUE7QUFBQSxVQUVsQixlQUFlO0FBQUE7QUFBQSxVQUVmLGVBQWU7QUFBQTtBQUFBLFVBRWYsZUFBZTtBQUFBO0FBQUEsVUFFZixjQUFjO0FBQUE7QUFBQSxVQUVkLGtCQUFrQjtBQUFBO0FBQUEsVUFFbEIsVUFBVSxDQUFDLEdBQUc7QUFBQTtBQUFBLFVBRWQsbUJBQW1CLENBQUMsUUFBUTtBQUFBO0FBQUEsVUFFNUIsZUFBZTtBQUFBO0FBQUEsVUFFZixZQUFZO0FBQUE7QUFBQSxVQUVaLFNBQVM7QUFBQTtBQUFBLFVBRVQsU0FBUyxDQUFDO0FBQUE7QUFBQSxVQUVWLFNBQVMsQ0FBQztBQUFBO0FBQUEsVUFFVixXQUFXO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
