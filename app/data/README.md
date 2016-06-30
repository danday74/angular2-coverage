The data folder contains up to two files for each API endpoint.

(1) A TypeScript file

This is imported by SystemJS during unit testing. The file:

* contains mock unit test data.
* should always be present.
* would be present in a real application in the dev environment.

(2) A JSON file

This is requested over HTTP by the application. The file:

* contains HTTP response data.
* should be present if there is no backend API in place.
* would not exist in a real application, one would use a backend API instead.
