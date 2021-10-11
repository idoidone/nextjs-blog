This is a starter template for [Learn Next.js](https://nextjs.org/learn).

```
nhan@ndlggmbp nextjs-blog % npm run build

> learn-starter@0.1.0 build
> next build

info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
info  - Checking validity of types  
warn  - No ESLint configuration detected. Run next lint to begin setup
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (5/5)
info  - Finalizing page optimization  

Page                              Size     First Load JS
┌ ● /                             1.5 kB         79.5 kB
├   /_app                         0 B            66.7 kB
├ ○ /404                          194 B          66.9 kB
└ ● /posts/[id] (519 ms)          1.34 kB        79.3 kB
    ├ /posts/pre-rendering
    └ /posts/ssg-ssr
+ First Load JS shared by all     66.7 kB
  ├ chunks/framework.895f06.js    42 kB
  ├ chunks/main.8d1561.js         23.3 kB
  ├ chunks/pages/_app.fc2168.js   557 B
  ├ chunks/webpack.fb7614.js      770 B
  └ css/d956bfbeac7a7df3d68f.css  272 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```