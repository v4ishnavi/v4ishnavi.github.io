export type Post={slug:string;title:string;url:string;date:string;description:string;source:string;mode:'research'|'life';html?:string};
// Add verified posts here. Each automatically gets its own /writing/[slug] route.
// You own the writing: export your Substack posts and paste the permitted full bodies in html.
// Never automatically copy unverified scraped content or invent article titles.
export const posts:Post[]=[];
