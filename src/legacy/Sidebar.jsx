function Sidebar() {
  return (
    <aside className="bg-neutral-charcoal text-neutral-white w-64 h-screen overflow-y-auto shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-bold font-heading text-primary mb-4">
          🍛 Menu
        </h2>
        
        <nav className="space-y-3">
          <a href="#pav-bhaji" className="block px-3 py-2 rounded text-neutral-gray-light hover:bg-primary hover:text-white transition-colors">
            Pav Bhaji Varieties
          </a>
          <a href="#snacks" className="block px-3 py-2 rounded text-neutral-gray-light hover:bg-primary hover:text-white transition-colors">
            Street Snacks
          </a>
          <a href="#beverages" className="block px-3 py-2 rounded text-neutral-gray-light hover:bg-primary hover:text-white transition-colors">
            Fresh Beverages
          </a>
          <a href="#desserts" className="block px-3 py-2 rounded text-neutral-gray-light hover:bg-primary hover:text-white transition-colors">
            Sweet Treats
          </a>
          <a href="#combos" className="block px-3 py-2 rounded text-neutral-gray-light hover:bg-primary hover:text-white transition-colors">
            Combo Meals
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar