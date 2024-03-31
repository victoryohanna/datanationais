
const Map = () => {
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          maxWidth: "100%",
          width: "700px",
          height: "300px",
        }}
      >
        <div
          id="my-map-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%" }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/search?q=Iledu+Road+Tanke&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            title="location map"
          ></iframe>
        </div>
        {/* <a
          class="google-maps-html"
          href="https://www.bootstrapskins.com/themes"
          id="auth-map-data"
        >
          premium bootstrap themes
        </a> */}
      </div>
    </div>
  );
};

export default Map;
