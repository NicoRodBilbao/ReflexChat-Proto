from langchain.chat_models import AzureChatOpenAI
from langchain.schema import HumanMessage
from dotenv import load_dotenv
import reflex as rx
import asyncio
import os

class State(rx.State):
    load_dotenv()

    api_key = os.environ.get("OPENAI_API_KEY")
    endpoint = os.environ.get("AZURE_OPENAI_ENDPOINT")
    deployment_name=os.environ.get("AZURE_DEPLOYMENT_NAME")
    version = os.environ.get("AZURE_API_VERSION")

    question: str

    selected_value: str = "apple"

    chat_history: list[tuple[str, str]] = []

    @rx.var
    def is_button_disabled(self) -> bool:
        """Determines if the button should be disabled."""
        return not bool(self.question.strip())

    @rx.event
    async def on_key_press(self, event):
        if str(event) == "Enter":
            async for _ in self.answer():
                yield
                pass

    @rx.event
    def change_selection(self, selected_value: str):
        """Change the select value var."""
        self.selected_value = selected_value

    @rx.event
    async def answer(self):
        answer = "I don't know!"

        if self.question != "":
            # Add the user's question to the chat history first
            self.chat_history.append((self.question, ""))
            question = self.question
            self.question = ""
            yield

            llm = AzureChatOpenAI(
                deployment_name=self.deployment_name,
                openai_api_key=self.api_key,
                openai_api_base=self.endpoint,
                openai_api_version=self.version,
                base_url=None
            )
            try:
                response = llm([HumanMessage(content=question)])
                answer = response.content
            except Exception as e:
                print(e)
            
            yield

            for i in range(len(answer)):
                await asyncio.sleep(0.01)
                self.chat_history[-1] = (
                    self.chat_history[-1][0], 
                    answer[:i + 1]
                )
                rx.call_script("scrollToBottom")
                yield