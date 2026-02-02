export default function SolutionsHero() {
  return (
    <section className="relative py-36 px-6 bg-cover bg-bottom  text-white overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      
      {/* subtle industrial texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-5xl mx-auto">
        <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm">
          Survey Solutions
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          Advanced Drone-Based Survey Solutions
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-zinc-400">
          Survey Teknologi Indonesia delivers high-accuracy geospatial data
          for critical engineering, infrastructure, and environmental projects.
        </p>
      </div>
    </section>
  );
}


