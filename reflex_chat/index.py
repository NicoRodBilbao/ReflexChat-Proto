import reflex as rx
from reflex_chat.state import State
import reflex_chat.style as style

def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(
            rx.text(
                question,
                style=style.question_style
            ), 
            text_align="right"  
        ),
        rx.box(
            rx.text(answer,
                    style=style.answer_style
            ),
            text_align="left"
        ),
    )

def chat() -> rx.Component:
    return rx.box(
        rx.foreach(
            State.chat_history, 
            lambda messages: qa(messages[0], messages[1])
        ),
    )

def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(
            value=State.question,
            placeholder="Type your message here...", 
            style=style.input_style,
            width="60%",
            on_change=State.set_question,
            on_key_down=State.on_key_press,
            
        ),
        rx.button(
            "Send",
            border_radius="1em",
            box_shadow="rgba(151, 65, 252, 0.8) 0 15px 30px -10px",
            background_image="linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)",
            box_sizing="border-box",
            color="white",
            opacity=1,
            on_click=State.answer,
            is_disabled=State.is_button_disabled,
            style=rx.cond(
                State.is_button_disabled, 
                {
                    "cursor": "not-allowed", 
                    "filter": "grayscale(100%)", 
                    "transition": "filter 1s ease"
                }, 
                {
                    "cursor": "pointer", 
                    "filter": "none", 
                    "transition": "filter 1s ease"
                }
            )
        ),
        justify_content="center",
        width="100%",
    )

def index() -> rx.Component:
    return rx.container(
        chat(),
        rx.box(
            action_bar(),
            position="fixed",
            bottom="0",
            width="50%",
            display="flex",
            left="50%",
            transform="translateX(-50%)",
            justify_content="center",
            padding="1em",
            box_shadow="0 0px 0px rgba(0, 0, 0, 0.1)",
            background_color="rgba(30, 30, 30)",
            align_items="center",
            border_radius="1em",  # Added border radius to make the borders round
        ),
        align_items="center",
    )