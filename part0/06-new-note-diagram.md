```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of server: Paylod: {content: "content of my note", date: "2025-06-29T10:39:25.467Z"}
    activate server
    server-->>browser: 201 Created. Response:{"message":"note created"}
    deactivate server
```