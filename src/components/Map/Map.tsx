import { Map, Marker } from "@vis.gl/react-maplibre";
import type { MapRef } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import "./Map.css";
import { useCallback, useRef } from "react";

export default function MapComponent() {
  const mapRef = useRef<MapRef>(null);

  const handleMapLoad = useCallback(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    map.once("load", () => {
      map.flyTo({
        center: [-122.444, 47.252], // Tacoma, WA
        zoom: 11,
        speed: 1.2, // lower = slower
      });
    });
  }, []);

  return (
    <>
      <div className="group relative h-48 overflow-hidden ">
        <Map
          ref={mapRef}
          onLoad={handleMapLoad}
          initialViewState={{
            longitude: -122.4442906,
            latitude: 47.2528768,
            zoom: 1.5,
          }}
          style={{
            width: "100%",
            height: 192,
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          mapStyle="https://cdn.solvice.io/styles/dark.json" // change dark.json to light.json for future theme toggle functionality
        >
          <Marker
            longitude={-122.4442906}
            latitude={47.2528768}
            anchor="center"
          >
            <span
              className="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center"
              aria-label="Map marker"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
            </span>
          </Marker>
        </Map>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(transparent,#9d9da200_60%,#fafafa)] dark:bg-[linear-gradient(transparent,#18181b73_60%,#0a0a0a)]"></div>
      </div>
    </>
  );
}
