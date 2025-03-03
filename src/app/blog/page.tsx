import BlogContent from "@/pages/blog-page/content";
import BlogHero from "@/pages/blog-page/hero";
import BlogTitle from "@/pages/blog-page/title";

export default function BlogTemplate() {
    return (
        <div className="w-11/12 flex flex-col items-start md:w-9/12 mx-auto">
            < BlogTitle title="Blog" category="Random" />
            <BlogHero imageUrl="https://images.unsplash.com/photo-1692607038295-d651a294abd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Blog" />
            < BlogContent />
        </div>
    )
}