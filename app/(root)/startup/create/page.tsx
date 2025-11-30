import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Submit Your Blog
        </h1>
        <p className="sub-heading max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Share your post, get feedback, and watch it grow with the community.
        </p>
      </section>

      <section className="section_container py-12 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <StartupForm />
      </section>
    </>
  );
};

export default Page;