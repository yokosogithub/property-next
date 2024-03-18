import properties from '@/properties.json';

const ProperiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        { properties.length === 0 ? ( <p> No properties found</p>) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => {
              <div> {property.name} </div>
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProperiesPage;