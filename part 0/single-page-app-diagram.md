sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /spa.js
    activate Server
    Server-->>Browser: HTML + js
    deactivate Server

    Note right of Browser: Browser executes JavaScript

    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: JSON with notes
    deactivate Server

    Note right of Browser: Browser renders notes on page
