```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: POST /new_note
    activate Server
    Server-->>Browser: 302 redirect
    deactivate Server
    Note right of Browser: User clicked "Save"; server redirects

    Browser->>Server: GET /notes
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET /main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET /main.js
    activate Server
    Server-->>Browser: JS file
    deactivate Server

    Note right of Browser: Browser executes JS to fetch notes

    Browser->>Server: GET /data.json
    activate Server
    Server-->>Browser: JSON with notes
    deactivate Server

    Note right of Browser: Browser renders the updated notes
