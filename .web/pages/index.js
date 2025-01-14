/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Div_602c14884fa2de27f522fe8f94374b02 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))



  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Button_9de74cae4ab55868ddbfc49d73666c3e () {
  const reflex___state____state__reflex_chat___state____state = useContext(StateContexts.reflex___state____state__reflex_chat___state____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_8e9475e0934aed2a7d38a636be9e74d6 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.reflex_chat___state____state.answer", ({  }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["&"] : (reflex___state____state__reflex_chat___state____state.is_button_disabled ? ({ ["cursor"] : "not-allowed", ["filter"] : "grayscale(100%)", ["transition"] : "filter 1s ease" }) : ({ ["cursor"] : "pointer", ["filter"] : "none", ["transition"] : "filter 1s ease" })), ["borderRadius"] : "1em", ["boxShadow"] : "rgba(151, 65, 252, 0.8) 0 15px 30px -10px", ["backgroundImage"] : "linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)", ["boxSizing"] : "border-box", ["color"] : "white", ["opacity"] : 1, ["isDisabled"] : reflex___state____state__reflex_chat___state____state.is_button_disabled })} onClick={on_click_8e9475e0934aed2a7d38a636be9e74d6}>

{"Send"}
</RadixThemesButton>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);




  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Errorboundary_86f5943fe69a44bbda168f8a92b3f1f1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])


  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))) }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesContainer css={({ ["padding"] : "16px", ["alignItems"] : "center" })} size={"3"}>

<Box_be1c2110f4bff1efc6712691598f3a1f/>
<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "0", ["width"] : "50%", ["display"] : "flex", ["left"] : "50%", ["transform"] : "translateX(-50%)", ["justifyContent"] : "center", ["padding"] : "1em", ["boxShadow"] : "0 0px 0px rgba(0, 0, 0, 0.1)", ["backgroundColor"] : "rgba(30, 30, 30)", ["alignItems"] : "center", ["borderRadius"] : "1em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["justifyContent"] : "center", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<Debounceinput_40e347ddfa70dc3ca84ba1db57f74000/>
<Button_9de74cae4ab55868ddbfc49d73666c3e/>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesContainer>
<NextHead>

<title>

{"ReflexChat | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Debounceinput_40e347ddfa70dc3ca84ba1db57f74000 () {
  const reflex___state____state__reflex_chat___state____state = useContext(StateContexts.reflex___state____state__reflex_chat___state____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_6bdb4b933715c7635c2a386abbdf8ece = useCallback(((_e) => (addEvents([(Event("reflex___state____state.reflex_chat___state____state.set_question", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])
  const on_key_down_87dd593360b21caf06f9e9e3a676f2ec = useCallback(((_e) => (addEvents([(Event("reflex___state____state.reflex_chat___state____state.on_key_press", ({ ["event"] : _e["key"] }), ({  })))], [_e], ({  })))), [addEvents, Event])


  return (
    <DebounceInput css={({ ["borderWidth"] : "1px", ["padding"] : "0.5em", ["boxShadow"] : "rgba(0, 0, 0, 0.15) 0px 2px 8px", ["width"] : "60%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_6bdb4b933715c7635c2a386abbdf8ece} onKeyDown={on_key_down_87dd593360b21caf06f9e9e3a676f2ec} placeholder={"Type your message here..."} value={reflex___state____state__reflex_chat___state____state.question}/>
  )
}

export function Box_be1c2110f4bff1efc6712691598f3a1f () {
  const reflex___state____state__reflex_chat___state____state = useContext(StateContexts.reflex___state____state__reflex_chat___state____state)




  return (
    <RadixThemesBox>

<>{reflex___state____state__reflex_chat___state____state.chat_history.map((messages, index_191edb81dee6eb5d) => (
  <RadixThemesBox key={index_191edb81dee6eb5d}>

<RadixThemesBox css={({ ["textAlign"] : "right" })}>

<RadixThemesText as={"p"} css={({ ["padding"] : "1em", ["borderRadius"] : "5px", ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em", ["boxShadow"] : "rgba(0, 0, 0, 0.15) 0px 2px 8px", ["maxWidth"] : "30em", ["display"] : "inline-block", ["marginLeft"] : "chat_margin", ["backgroundColor"] : "var(--gray-4)" })}>

{messages.at(0)}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["textAlign"] : "left" })}>

<RadixThemesText as={"p"} css={({ ["padding"] : "1em", ["borderRadius"] : "5px", ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em", ["boxShadow"] : "rgba(0, 0, 0, 0.15) 0px 2px 8px", ["maxWidth"] : "30em", ["display"] : "inline-block", ["marginRight"] : "chat_margin", ["backgroundColor"] : "var(--accent-8)" })}>

{messages.at(1)}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
))}</>
</RadixThemesBox>
  )
}

export default function Component() {

  return (
    <Errorboundary_86f5943fe69a44bbda168f8a92b3f1f1/>
  )
}
