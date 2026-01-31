```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: POST /notes (new note)
    activate Server
    Server-->>Browser: status code 201 (created)
    deactivate Server

    Note right of Browser: Browser updates page dynamically without reload