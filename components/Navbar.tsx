import Link from "next/link";
import NextAuth from "next-auth";


import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

declare module "next-auth" {
  interface Session {
    id?: string;
  }

  interface JWT {
    id?: string;
  }
}
const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="px-4 md:px-6 py-3.5 backdrop-blur-lg  border-b border-gray-200 font-work-sans sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center hover:opacity-70 transition-opacity duration-200">
         <span className="font-bold text-xl text-gray-900">IncBlog</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" className="hidden sm:inline-block">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  Create
                </Button>
              </Link>

              <Link href="/startup/create" className="sm:hidden">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                  <BadgePlus className="h-5 w-5" />
                </Button>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="hidden sm:inline-block"
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="font-medium text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  Logout
                </Button>
              </form>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="sm:hidden"
              >
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </form>

              <Link href={`/user/${session?.id}`} className="flex-shrink-0">
                <Avatar className="h-10 w-10 md:h-11 md:w-11 border border-gray-200 hover:border-gray-300 transition-colors duration-200">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback className="bg-gray-100 text-gray-700 font-semibold text-sm">
                    {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button 
                size="sm" 
                className="font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 px-5 rounded-lg"
              >
                Login
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;