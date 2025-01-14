import reflex as rx
from reflex_chat.index import index

app = rx.App()
app.add_page(index, route="/")
