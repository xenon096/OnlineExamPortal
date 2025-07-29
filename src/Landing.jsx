function Landing() {

  return (
    <div className="h-screen overflow-hidden">
    <header className="p-4 bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Online Exam Portal</h1>
        <nav className="flex space-x-4 text-white">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/register" className="hover:underline">Register</a>
        </nav>
      </div>
  </header>
    <div>
        <img className="bg-cover bg-no-repeat w-full object-cover" src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Education" />
        <p className="text-white absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-2xl bg-opacity-50 rounded">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, sint. Sed inventore culpa beatae quam animi velit facere, molestias dolorem nam eligendi eius dolorum, fuga ut ea! Esse, dolores maxime?</p>
    </div>
    </div>
  )
}

export default Landing
