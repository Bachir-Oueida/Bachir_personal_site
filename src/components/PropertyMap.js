'use client';

import { useEffect, useRef, useState } from 'react';

export default function PropertyMap({ lat, lng, title }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // Debug: Log API key status (without exposing the full key)
  console.log('Google Maps API Key available:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);


  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initMap = () => {
      if (typeof window !== 'undefined' && window.google && mapRef.current) {
        const mapOptions = {
          center: { lat: parseFloat(lat), lng: parseFloat(lng) },
          zoom: 15,
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "weight": "2.00"
                }
              ]
            },
            {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#9c9c9c"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#c8d7d4"
                }
              ]
            }
          ],
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
          gestureHandling: 'cooperative'
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // Custom marker with luxury styling
        const marker = new window.google.maps.Marker({
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
          map: map,
          title: title,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#d4af37',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3,
          }
        });

        // Info window with property details
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 15px; font-family: 'Raleway', sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 18px;">${title}</h3>
              <p style="margin: 0; color: #7f8c8d; font-size: 14px;">
                <strong>Premium Location</strong><br>
                Lat: ${lat}, Lng: ${lng}
              </p>
              <div style="margin-top: 10px;">
                <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" 
                   target="_blank" 
                   style="color: #d4af37; text-decoration: none; font-weight: 600;">
                  View in Google Maps →
                </a>
              </div>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        // Auto-open info window
        setTimeout(() => {
          infoWindow.open(map, marker);
        }, 1000);

        setMapLoaded(true);
      }
    };

    const initFallbackMap = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="luxury-map-placeholder">
            <div class="luxury-marker">
              <div class="marker-pin"></div>
              <div class="marker-pulse"></div>
            </div>
            <div class="luxury-map-info">
              <h4>${title}</h4>
              <p class="coordinates">Lat: ${lat}, Lng: ${lng}</p>
              <p class="map-note">Premium Location in Luxury Area</p>
            </div>
            <div class="map-gradient"></div>
          </div>
        `;
      }
    };

    // Load Google Maps API if not already loaded
    if (!window.google) {
      if (!apiKey) {
        console.error('Google Maps API key is missing. Please check your .env.local file.');
        initFallbackMap();
        return;
      }
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      
      // Use a unique callback name to avoid conflicts
      window.initGoogleMap = initMap;
      
      script.onerror = (error) => {
        console.error('Google Maps API failed to load:', error);
        console.log('API Key used:', apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined');
        initFallbackMap();
      };
      
      document.head.appendChild(script);
    } else {
      initMap();
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
      // Clean up global callback
      if (window.initGoogleMap) {
        delete window.initGoogleMap;
      }
    };
  }, [isClient, lat, lng, title, apiKey]);

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  // Show loading state during SSR and initial client render
  if (!isClient) {
    return (
      <div className="property-map">
        <div className="map-container">
          <div className="luxury-map-placeholder">
            <div className="luxury-marker">
              <div className="marker-pin"></div>
            </div>
            <div className="luxury-map-info">
              <h4>{title}</h4>
              <p className="coordinates">Loading map...</p>
            </div>
            <div className="map-gradient"></div>
          </div>
        </div>
        <div className="map-actions">
          <button onClick={openInGoogleMaps} className="map-button">
            <span>🗺️</span>
            View in Google Maps
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="property-map">
      <div 
        ref={mapRef} 
        className="map-container"
      />
      <div className="map-actions">
        <button onClick={openInGoogleMaps} className="map-button">
          <span>🗺️</span>
          View in Google Maps
        </button>
        {mapLoaded && (
          <div className="map-type-buttons">
            <button 
              onClick={() => mapInstanceRef.current?.setMapTypeId('roadmap')}
              className="map-type-btn"
            >
              Map
            </button>
            <button 
              onClick={() => mapInstanceRef.current?.setMapTypeId('satellite')}
              className="map-type-btn"
            >
              Satellite
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 