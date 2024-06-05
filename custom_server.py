import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "./"

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"Requested path: {self.path}")
        if self.path == '/':
            self.path = '/index.html'  # Specify your entry file here
        return super().do_GET()

os.chdir(DIRECTORY)
print(f"Serving directory: {os.getcwd()}")

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()

