# Learning About React.js

Chapters 1-8 are not in the `app` folder, but other chapters are.

We learned.
1. The benefit of <Image> component.
2. Purpose of `layout` and `page` files. Layout shared between multiple pages. 
3. The benefit of <Link> component compared to traditional <a> tags.
4. Using React server components to fetch data on the server. 
5. Parrallel data fetching instead of fetching one things after another.
6. Data streaming (chapter 9) SIDE NAV can be static while dynamic content changes.
7. lOADING.tsx and skeletons
8. Overview Route Groups /dashboard/(overview)/page.tsx is just /dashboard the `()` don't get rendered in URL. You can stream an entire page or just individual components.
9. Move data fetches down to components that need it.
10. We understood debouncing to limit when a function fires (chapter 10).
11. Clients and server components (fetching HTML on clients and fetching on server).
12. Server Actions Create Endpoints (When you do 'use server' and console.log() it logs it in your IDE/computer/server instead of on Chrome dev tools)
13. How to create dynamic routes/slug routes using [id] or something similar. 

/
├── package.json  (your main project)
└── tutorials/
    └── next.js project/
        └── financial-dashboard/
            └── nextjs-dashboard/
                ├── app/
                └── package.json  ← the tutorial lives here

We set in Vercel for the tutorial the "root directory" as tutorials/next.js project/financial-dashboard/nextjs-dashboard