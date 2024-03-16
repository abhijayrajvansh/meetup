import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <section className="authclass">
      <SignIn />
    </section>
  )
}

export default page;