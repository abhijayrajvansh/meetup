import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <section className="flex items-center h-screen w-full justify-center bred">
      <SignUp />
    </section>

  )
}

export default page;