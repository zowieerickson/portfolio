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
        center: [-122.444, 47.252], // Tacoma
        zoom: 12,
        speed: 1.2, // lower = slower
      });
    });
  }, []);

  return (
    <Map
      ref={mapRef}
      onLoad={handleMapLoad}
      initialViewState={{
        longitude: -122.4442906,
        latitude: 47.2528768,
        zoom: 1,
      }}
      style={{
        width: 528,
        height: 192,
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      <Marker longitude={-122.4442906} latitude={47.2528768} anchor="center">
        <span
          className="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center"
          aria-label="Map marker"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
          <span className="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
        </span>
      </Marker>
    </Map>
  );
}
