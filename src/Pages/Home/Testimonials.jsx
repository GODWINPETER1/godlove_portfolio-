import data from "../../data/index.json";


export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <p className="sub-title">Our Works</p>
        <h2 className="section-heading">Photo Gallery</h2>
      </div>

      <div className="gallery-grid">
        {data?.gallery?.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.alt || `Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
