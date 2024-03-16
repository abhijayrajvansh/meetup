import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <section className="authclass">
      <SignUp />
    </section>

  )
}

export default page;