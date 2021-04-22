from datetime import date
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(302)
        self.send_header(
            "Location",
            "https://280blocker.net/files/280blocker_"
            + self.path
            + "_"
            + date.today().strftime("%Y%m")
            + ".txt",
        )
        self.end_headers()
        return
